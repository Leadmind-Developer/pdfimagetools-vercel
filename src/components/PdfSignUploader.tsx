"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";
import "./PdfSignUploader.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const fonts = ["cursive", "serif", "monospace", "sans-serif"];

export default function PdfSignUploader() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const drawCanvasRef = useRef<HTMLCanvasElement>(null);

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [pages, setPages] = useState<Array<{ index: number; width: number; height: number }>>([]);
  const [pageCanvases, setPageCanvases] = useState<Map<number, string>>(new Map()); // data URLs

  const [zoom, setZoom] = useState(1.0);

  const [signatures, setSignatures] = useState<
    Array<{
      src: string;           // data URL
      pageIndex: number;
      x: number;              // position in **page coordinate** (not screen)
      y: number;              // from bottom-left (pdf-lib coordinate)
      width: number;
      height: number;
      rotation: number;       // degrees
    }>
  >([]);

  const [history, setHistory] = useState<string[]>([]);

  const [activeSigIndex, setActiveSigIndex] = useState<number | null>(null);
  const [mode, setMode] = useState<"drag" | "resize" | "rotate" | null>(null);

  const [typedText, setTypedText] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  const [drawing, setDrawing] = useState(false);
  const [savedTemplates, setSavedTemplates] = useState<string[]>([]); // data URLs

  const [exporting, setExporting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  // ────────────────────────────────────────────────
  //  Load & Render PDF Pages (as images for preview)
  // ────────────────────────────────────────────────
  useEffect(() => {
    if (!pdfFile) return;

    let mounted = true;

    (async () => {
      const url = URL.createObjectURL(pdfFile);
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;

      if (!mounted) return;

      setPdfDoc(pdf);
      await renderPreviewPages(pdf);
    })();

    return () => {
      mounted = false;
    };
  }, [pdfFile, zoom]);

  const renderPreviewPages = async (pdf: pdfjsLib.PDFDocumentProxy) => {
    const newPages: typeof pages = [];
    const newCanvasUrls = new Map<number, string>();

    const containerWidth = viewerRef.current?.clientWidth ?? 800;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewportBase = page.getViewport({ scale: 1 });
      const scale = (containerWidth / viewportBase.width) * zoom * 0.98; // small margin

      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) continue;

      await page.render({
        canvasContext: ctx,
        viewport,
      }).promise;

      const dataUrl = canvas.toDataURL("image/png");

      newPages.push({
        index: i - 1,
        width: viewport.width,
        height: viewport.height,
      });

      newCanvasUrls.set(i - 1, dataUrl);
    }

    setPages(newPages);
    setPageCanvases(newCanvasUrls);
  };

  // ────────────────────────────────────────────────
  //  History (very basic undo)
  // ────────────────────────────────────────────────
  const saveHistory = useCallback(() => {
    setHistory((prev) => [...prev.slice(-15), JSON.stringify(signatures)]); // keep last 15
  }, [signatures]);

  const undo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setSignatures(JSON.parse(previous));
  };

  // ────────────────────────────────────────────────
  //  Add Signature (from draw / type / template)
  // ────────────────────────────────────────────────
  const addSignature = (dataUrl: string, pageIndex = 0) => {
    saveHistory();

    // Estimate natural size (~180×80 is common for sigs)
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const aspect = img.width / img.height;
      const targetWidth = 220;

      setSignatures((prev) => [
        ...prev,
        {
          src: dataUrl,
          pageIndex,
          x: 120,               // left margin
          y: 60,                // from bottom
          width: targetWidth,
          height: targetWidth / aspect,
          rotation: 0,
        },
      ]);
    };
  };

  // ────────────────────────────────────────────────
  //  Pointer Events – simplified drag / resize / rotate
  // ────────────────────────────────────────────────
  const getPointerPos = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = viewerRef.current!.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left + viewerRef.current!.scrollLeft,
      y: clientY - rect.top + viewerRef.current!.scrollTop,
    };
  };

  const onPointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (activeSigIndex === null || !viewerRef.current) return;
    e.preventDefault();

    const { x, y } = getPointerPos(e);

    setSignatures((prev) =>
      prev.map((sig, i) => {
        if (i !== activeSigIndex) return sig;

        if (mode === "drag") {
          // convert screen → page coordinates (approximate)
          const page = pages[sig.pageIndex];
          if (!page) return sig;
          const relX = x - (viewerRef.current!.scrollLeft + 20); // rough left padding
          const relY = y - pages.slice(0, sig.pageIndex).reduce((s, p) => s + p.height, 0);

          return { ...sig, x: relX / zoom, y: (page.height - relY) / zoom }; // pdf coord bottom-up
        }

        if (mode === "resize") {
          const newWidth = Math.max(60, x - (sig.x * zoom + 40)); // rough offset
          return { ...sig, width: newWidth, height: newWidth / (sig.width / sig.height) };
        }

        if (mode === "rotate") {
          return { ...sig, rotation: (sig.rotation + 4) % 360 };
        }

        return sig;
      })
    );
  };

  const onPointerUp = () => {
    setActiveSigIndex(null);
    setMode(null);
  };

  // ────────────────────────────────────────────────
  //  Drawing Signature
  // ────────────────────────────────────────────────
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setDrawing(true);
    const canvas = drawCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    const { x, y } = getPointerPos(e);
    ctx.beginPath();
    ctx.moveTo(x - canvas.offsetLeft, y - canvas.offsetTop);
  };

  const drawMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const { x, y } = getPointerPos(e);
    ctx.lineTo(x - canvas.offsetLeft, y - canvas.offsetTop);
    ctx.stroke();
  };

  const finishDrawing = () => setDrawing(false);

  const saveDrawnSignature = () => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);

    setSavedTemplates((prev) => [...prev, dataUrl]);
    addSignature(dataUrl);
  };

  // ────────────────────────────────────────────────
  //  Typed Signature
  // ────────────────────────────────────────────────
  const createTypedSignature = () => {
    if (!typedText.trim()) return;

    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 180;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.font = `bold 80px ${selectedFont}`;
    ctx.fillText(typedText, 20, 110);

    const dataUrl = canvas.toDataURL("image/png");

    setSavedTemplates((prev) => [...prev, dataUrl]);
    addSignature(dataUrl);

    setTypedText("");
  };

  // ────────────────────────────────────────────────
  //  Export signed PDF – client-side with pdf-lib
  // ────────────────────────────────────────────────
  const exportSignedPdf = async () => {
    if (!pdfFile || signatures.length === 0 || !pdfDoc) return;

    setExporting(true);

    try {
      const pdfBytes = await pdfFile.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      for (const sig of signatures) {
        const page = pdf.getPage(sig.pageIndex);
        const { width: pageWidth, height: pageHeight } = page.getSize();

        // Embed signature image
        const imgBytes = await fetch(sig.src).then((r) => r.arrayBuffer());
        const img =
          sig.src.startsWith("data:image/jpeg") || sig.src.includes(".jpg")
            ? await pdf.embedJpg(imgBytes)
            : await pdf.embedPng(imgBytes);

        const scaledWidth = sig.width;
        const scaledHeight = sig.height;

        page.drawImage(img, {
          x: sig.x,
          y: sig.y, // already bottom-up
          width: scaledWidth,
          height: scaledHeight,
          rotate: degrees(sig.rotation),
          opacity: 1,
        });
      }

      const signedPdfBytes = await pdf.save();

// Convert Uint8Array to plain ArrayBuffer safely
const arrayBuffer = signedPdfBytes instanceof Uint8Array
  ? signedPdfBytes.buffer.slice(signedPdfBytes.byteOffset, signedPdfBytes.byteOffset + signedPdfBytes.byteLength)
  : signedPdfBytes; // fallback if somehow not Uint8Array

const blob = new Blob([arrayBuffer], { type: "application/pdf" });
const url = URL.createObjectURL(blob);
setDownloadUrl(url);
    } catch (err) {
      console.error("Signing failed:", err);
      alert("Failed to sign PDF. Check console.");
    } finally {
      setExporting(false);
    }
  };

  // ────────────────────────────────────────────────
  //  Render
  // ────────────────────────────────────────────────
  return (
    <div className="pdf-container">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setPdfFile(file);
            setSignatures([]);
            setHistory([]);
            setDownloadUrl("");
          }
        }}
      />

      <div className="toolbar">
        <button onClick={() => setZoom((z) => z + 0.15)}>Zoom +</button>
        <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.15))}>Zoom -</button>
        <button onClick={undo} disabled={history.length === 0}>
          Undo
        </button>
      </div>

      <div
        ref={viewerRef}
        className="viewer-scroll"
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        {pages.map((p) => {
          const pageSig = signatures.filter((s) => s.pageIndex === p.index);

          return (
            <div key={p.index} className="page-wrapper" style={{ height: p.height }}>
              {pageCanvases.has(p.index) && (
                <img
                  src={pageCanvases.get(p.index)}
                  alt={`Page ${p.index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                  draggable={false}
                />
              )}

              {pageSig.map((sig, idx) => {
                const globalIndex = signatures.indexOf(sig);

                return (
                  <div
                    key={globalIndex}
                    className="sig-box"
                    style={{
                      position: "absolute",
                      left: `${sig.x * zoom}px`,
                      bottom: `${sig.y * zoom}px`, // pdf-lib → bottom-up
                      width: `${sig.width * zoom}px`,
                      height: `${sig.height * zoom}px`,
                      transform: `rotate(${sig.rotation}deg)`,
                      transformOrigin: "center",
                      border: activeSigIndex === globalIndex ? "2px dashed #f00" : "1px dashed #666",
                    }}
                  >
                    <img
                      src={sig.src}
                      alt="signature"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setActiveSigIndex(globalIndex);
                        setMode("drag");
                      }}
                      onTouchStart={(e) => {
                        e.preventDefault();
                        setActiveSigIndex(globalIndex);
                        setMode("drag");
                      }}
                    />

                    {/* Resize handle */}
                    <div
                      className="resize-handle"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setActiveSigIndex(globalIndex);
                        setMode("resize");
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                        setActiveSigIndex(globalIndex);
                        setMode("resize");
                      }}
                    />

                    {/* Rotate handle */}
                    <div
                      className="rotate-handle"
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        setActiveSigIndex(globalIndex);
                        setMode("rotate");
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                        setActiveSigIndex(globalIndex);
                        setMode("rotate");
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Drawing area */}
      <div className="draw-box">
        <canvas
          ref={drawCanvasRef}
          width={360}
          height={160}
          onMouseDown={startDrawing}
          onMouseMove={drawMove}
          onMouseUp={finishDrawing}
          onMouseLeave={finishDrawing}
          onTouchStart={startDrawing}
          onTouchMove={drawMove}
          onTouchEnd={finishDrawing}
        />
        <button onClick={saveDrawnSignature}>Save & Add Drawn Signature</button>
      </div>

      {/* Typed signature */}
      <div className="type-box">
        <input
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          placeholder="Type your name..."
          style={{ fontFamily: selectedFont, fontSize: "1.4rem" }}
        />
        <select value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <button onClick={createTypedSignature}>Add Typed Signature</button>
      </div>

      {/* Saved signature templates */}
      {savedTemplates.length > 0 && (
        <div className="templates">
          <p>Saved signatures:</p>
          {savedTemplates.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="template"
              onClick={() => addSignature(src)}
              style={{ cursor: "pointer", maxHeight: 80, margin: 8 }}
            />
          ))}
        </div>
      )}

      <button onClick={exportSignedPdf} disabled={exporting || !pdfFile || signatures.length === 0}>
        {exporting ? "Signing PDF..." : "Export Signed PDF"}
      </button>

      {downloadUrl && (
        <a href={downloadUrl} download="signed-document.pdf">
          Download Signed PDF
        </a>
      )}
    </div>
  );
}
