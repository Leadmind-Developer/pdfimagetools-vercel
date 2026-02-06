"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist";
import "./PdfSignUploader.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const fonts = ["cursive", "serif", "monospace", "sans-serif"];

export default function PdfSignUploader() {
  const viewerRef = useRef(null);
  const drawCanvasRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pages, setPages] = useState([]);
  const [pageCanvases, setPageCanvases] = useState(new Map());

  const [zoom, setZoom] = useState(1);

  const [signatures, setSignatures] = useState([]);
  const [history, setHistory] = useState([]);

  const [activeSigIndex, setActiveSigIndex] = useState(null);
  const [mode, setMode] = useState(null);

  const [typedText, setTypedText] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  const [drawing, setDrawing] = useState(false);
  const [savedTemplates, setSavedTemplates] = useState([]);

  const [exporting, setExporting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  // ---------------- Load PDF ----------------

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

    return () => (mounted = false);
  }, [pdfFile, zoom]);

  const renderPreviewPages = async (pdf) => {
    const newPages = [];
    const newCanvasUrls = new Map();

    const containerWidth = viewerRef.current?.clientWidth || 800;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);

      const baseViewport = page.getViewport({ scale: 1 });
      const scale = (containerWidth / baseViewport.width) * zoom * 0.98;

      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) continue;

      await page.render({ canvasContext: ctx, viewport }).promise;

      newPages.push({
        index: i - 1,
        width: viewport.width,
        height: viewport.height,
      });

      newCanvasUrls.set(i - 1, canvas.toDataURL("image/png"));
    }

    setPages(newPages);
    setPageCanvases(newCanvasUrls);
  };

  // ---------------- History ----------------

  const saveHistory = useCallback(() => {
    setHistory((h) => [...h.slice(-15), JSON.stringify(signatures)]);
  }, [signatures]);

  const undo = () => {
    if (!history.length) return;
    const last = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setSignatures(JSON.parse(last));
  };

  // ---------------- Add Signature ----------------

  const addSignature = (src, pageIndex = 0) => {
    saveHistory();

    const img = new Image();
    img.src = src;

    img.onload = () => {
      const aspect = img.width / img.height;
      const width = 220;

      setSignatures((s) => [
        ...s,
        {
          src,
          pageIndex,
          x: 120,
          y: 60,
          width,
          height: width / aspect,
          rotation: 0,
        },
      ]);
    };
  };

  // ---------------- Drawing ----------------

  const startDrawing = (e) => {
    setDrawing(true);
    const canvas = drawCanvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const drawMove = (e) => {
    if (!drawing) return;
    const canvas = drawCanvasRef.current;
    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const finishDrawing = () => setDrawing(false);

  const saveDrawnSignature = () => {
    const canvas = drawCanvasRef.current;
    const dataUrl = canvas.toDataURL("image/png");

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    setSavedTemplates((t) => [...t, dataUrl]);
    addSignature(dataUrl);
  };

  // ---------------- Typed Signature ----------------

  const createTypedSignature = () => {
    if (!typedText.trim()) return;

    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 180;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.font = `bold 80px ${selectedFont}`;
    ctx.fillText(typedText, 20, 110);

    const dataUrl = canvas.toDataURL("image/png");

    setSavedTemplates((t) => [...t, dataUrl]);
    addSignature(dataUrl);

    setTypedText("");
  };

  // ---------------- Export PDF (SAFE) ----------------

  const exportSignedPdf = async () => {
    if (!pdfFile || !signatures.length) return;

    setExporting(true);

    try {
      const baseBytes = await pdfFile.arrayBuffer();
      const pdf = await PDFDocument.load(baseBytes);

      for (const sig of signatures) {
        const page = pdf.getPage(sig.pageIndex);

        const imgBytes = await fetch(sig.src).then((r) => r.arrayBuffer());

        const img = sig.src.includes("jpg")
          ? await pdf.embedJpg(imgBytes)
          : await pdf.embedPng(imgBytes);

        page.drawImage(img, {
          x: sig.x,
          y: sig.y,
          width: sig.width,
          height: sig.height,
          rotate: degrees(sig.rotation),
        });
      }

      // pdf-lib returns Uint8Array → convert safely
      const signedBytes = await pdf.save();

      const blob = new Blob(
        [signedBytes.buffer.slice(0)],
        { type: "application/pdf" }
      );

      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

    } catch (e) {
      console.error(e);
      alert("Failed to export PDF");
    } finally {
      setExporting(false);
    }
  };

  // ---------------- Render ----------------

  return (
    <div className="pdf-container">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => {
          const f = e.target.files[0];
          if (!f) return;
          setPdfFile(f);
          setSignatures([]);
          setHistory([]);
          setDownloadUrl("");
        }}
      />

      <div className="toolbar">
        <button onClick={() => setZoom((z) => z + 0.15)}>Zoom +</button>
        <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.15))}>
          Zoom -
        </button>
        <button onClick={undo}>Undo</button>
      </div>

      <div ref={viewerRef} className="viewer-scroll">
        {pages.map((p) => (
          <div key={p.index} className="page-wrapper" style={{ height: p.height }}>
            <img
              src={pageCanvases.get(p.index)}
              style={{ width: "100%" }}
              draggable={false}
            />

            {signatures
              .filter((s) => s.pageIndex === p.index)
              .map((sig, i) => (
                <img
                  key={i}
                  src={sig.src}
                  className="sig-box"
                  style={{
                    left: sig.x * zoom,
                    bottom: sig.y * zoom,
                    width: sig.width * zoom,
                    height: sig.height * zoom,
                    transform: `rotate(${sig.rotation}deg)`,
                  }}
                />
              ))}
          </div>
        ))}
      </div>

      <div className="draw-box">
        <canvas
          ref={drawCanvasRef}
          width={360}
          height={160}
          onMouseDown={startDrawing}
          onMouseMove={drawMove}
          onMouseUp={finishDrawing}
          onTouchStart={startDrawing}
          onTouchMove={drawMove}
          onTouchEnd={finishDrawing}
        />
        <button onClick={saveDrawnSignature}>Save Drawn Signature</button>
      </div>

      <div className="type-box">
        <input
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          placeholder="Type name..."
          style={{ fontFamily: selectedFont }}
        />
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          {fonts.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <button onClick={createTypedSignature}>Add Typed</button>
      </div>

      <button onClick={exportSignedPdf} disabled={exporting}>
        {exporting ? "Signing..." : "Export Signed PDF"}
      </button>

      {downloadUrl && (
        <a href={downloadUrl} download="signed.pdf">
          Download Signed PDF
        </a>
      )}
    </div>
  );
}
