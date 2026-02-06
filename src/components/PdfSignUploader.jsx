"use client";

import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { PDFDocument, rgb } from "pdf-lib";
import "./PdfSignUploader.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const fonts = ["cursive", "serif", "monospace", "sans-serif"];

export default function PdfSignUploader() {
  const viewerRef = useRef(null);
  const drawRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pages, setPages] = useState([]);
  const [zoom, setZoom] = useState(1);

  const [signatures, setSignatures] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [typed, setTyped] = useState("");
  const [font, setFont] = useState(fonts[0]);
  const [drawing, setDrawing] = useState(false);

  const [activeSig, setActiveSig] = useState(null);
  const [mode, setMode] = useState(null); // drag | resize | rotate

  const [downloadUrl, setDownloadUrl] = useState("");

  /* ================= PDF LOAD ================= */
  useEffect(() => {
    if (!pdfFile || !viewerRef.current) return;

    const loadPdf = async () => {
      const url = URL.createObjectURL(pdfFile);
      const pdf = await pdfjsLib.getDocument(url).promise;
      setPdfDoc(pdf);
      renderAllPages(pdf);
    };
    loadPdf();
  }, [pdfFile, zoom]);

  const renderAllPages = async (pdf) => {
    const arr = [];
    const containerWidth = viewerRef.current.clientWidth;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale: 1 });
      const scale = (containerWidth / vp.width) * zoom;
      const scaledVp = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = scaledVp.width;
      canvas.height = scaledVp.height;

      await page.render({ canvasContext: ctx, viewport: scaledVp }).promise;

      arr.push({
        index: i - 1,
        width: scaledVp.width,
        height: scaledVp.height,
        canvas,
      });
    }
    setPages(arr);
  };

  /* ================= POINTER ================= */
  const pos = (e) =>
    e.touches
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: e.clientX, y: e.clientY };

  const move = (e) => {
    if (activeSig === null) return;
    const r = viewerRef.current.getBoundingClientRect();
    const p = pos(e);

    let x = p.x - r.left + viewerRef.current.scrollLeft;
    let y = p.y - r.top + viewerRef.current.scrollTop;

    // snap to page
    let offset = 0;
    let pageIndex = 0;
    for (let p of pages) {
      if (y >= offset && y <= offset + p.height) {
        pageIndex = p.index;
        y = y - offset;
        break;
      }
      offset += p.height;
    }

    setSignatures((s) =>
      s.map((sig, i) => {
        if (i !== activeSig) return sig;

        if (mode === "drag") return { ...sig, x, y, page: pageIndex };
        if (mode === "resize") return { ...sig, size: Math.max(20, x - sig.x) };
        if (mode === "rotate") return { ...sig, rotation: sig.rotation + 2 };
        return sig;
      })
    );

    e.preventDefault();
  };

  const stop = () => {
    setActiveSig(null);
    setMode(null);
  };

  /* ================= DRAW ================= */
  const startDraw = (e) => {
    setDrawing(true);
    const ctx = drawRef.current.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    const p = pos(e);
    const r = drawRef.current.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(p.x - r.left, p.y - r.top);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = drawRef.current.getContext("2d");
    const p = pos(e);
    const r = drawRef.current.getBoundingClientRect();
    ctx.lineTo(p.x - r.left, p.y - r.top);
    ctx.stroke();
  };

  const stopDraw = () => setDrawing(false);

  const saveDraw = () => {
    const img = drawRef.current.toDataURL("image/png");
    drawRef.current.getContext("2d").clearRect(0, 0, 300, 120);
    setTemplates((t) => [...t, img]);
    addSignature(img);
  };

  /* ================= TYPED ================= */
  const addTyped = () => {
    if (!typed) return;
    const c = document.createElement("canvas");
    c.width = 400;
    c.height = 120;
    const ctx = c.getContext("2d");
    ctx.font = `60px ${font}`;
    ctx.fillText(typed, 10, 80);
    const img = c.toDataURL("image/png");
    setTemplates((t) => [...t, img]);
    addSignature(img);
    setTyped("");
  };

  /* ================= SIGNATURE ================= */
  const addSignature = (src) => {
    setSignatures((s) => [
      ...s,
      { src, x: 50, y: 50, size: 100, rotation: 0, page: 0 },
    ]);
  };

  /* ================= EXPORT ================= */
  const exportPdf = async () => {
    if (!pdfFile) return;

    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    for (let sig of signatures) {
      const page = pdfDoc.getPage(sig.page);
      const pngImage = await pdfDoc.embedPng(sig.src);
      page.drawImage(pngImage, {
        x: sig.x,
        y: page.getHeight() - sig.y - sig.size, // PDF origin bottom-left
        width: sig.size,
        height: sig.size,
        rotate: (sig.rotation * Math.PI) / 180,
      });
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    setDownloadUrl(URL.createObjectURL(blob));
  };

  /* ================= UI ================= */
  return (
    <div className="pdf-container">
      <input type="file" accept=".pdf" onChange={(e) => setPdfFile(e.target.files[0])} />

      <div className="toolbar">
        <button onClick={() => setZoom((z) => z + 0.2)}>Zoom +</button>
        <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}>Zoom -</button>
      </div>

      <div
        ref={viewerRef}
        className="viewer-scroll"
        onMouseMove={move}
        onMouseUp={stop}
        onTouchMove={move}
        onTouchEnd={stop}
      >
        {pages.map((p, pi) => (
          <div key={pi} className="page-wrapper" style={{ position: "relative" }}>
            <canvas
              ref={(el) => {
                if (el) {
                  el.width = p.width;
                  el.height = p.height;
                  el.getContext("2d").drawImage(p.canvas, 0, 0);
                }
              }}
            />
            {signatures
              .filter((s) => s.page === pi)
              .map((sig, i) => (
                <div
                  key={i}
                  className="sig"
                  style={{
                    position: "absolute",
                    left: sig.x,
                    top: sig.y,
                    width: sig.size,
                    transform: `rotate(${sig.rotation}deg)`,
                  }}
                  onMouseDown={() => {
                    setActiveSig(i);
                    setMode("drag");
                  }}
                  onTouchStart={() => {
                    setActiveSig(i);
                    setMode("drag");
                  }}
                >
                  <img src={sig.src} />
                  <div
                    className="resize"
                    onMouseDown={() => {
                      setActiveSig(i);
                      setMode("resize");
                    }}
                  />
                  <div
                    className="rotate"
                    onMouseDown={() => {
                      setActiveSig(i);
                      setMode("rotate");
                    }}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="draw-box">
        <canvas
          ref={drawRef}
          width={300}
          height={120}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={stopDraw}
        />
        <button onClick={saveDraw}>Add Drawn</button>
      </div>

      <div className="type-box">
        <input value={typed} onChange={(e) => setTyped(e.target.value)} style={{ fontFamily: font }} />
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {fonts.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <button onClick={addTyped}>Add Typed</button>
      </div>

      <div className="templates">
        {templates.map((t, i) => (
          <img key={i} src={t} onClick={() => addSignature(t)} />
        ))}
      </div>

      <button onClick={exportPdf}>Export Signed PDF</button>
      {downloadUrl && <a href={downloadUrl} download="signed.pdf">Download</a>}
    </div>
  );
}
