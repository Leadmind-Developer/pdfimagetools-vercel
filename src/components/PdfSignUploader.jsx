"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";
import "./PdfSignUploader.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const fonts = ["cursive", "serif", "monospace", "sans-serif"];

export default function PdfSignUploader() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const drawRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);

  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const [thumbnails, setThumbnails] = useState([]);
  const [signatures, setSignatures] = useState([]);
  const [history, setHistory] = useState([]);

  const [dragIndex, setDragIndex] = useState(null);

  const [typed, setTyped] = useState("");
  const [font, setFont] = useState(fonts[0]);

  const [drawing, setDrawing] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  /* ================= PDF LOAD ================= */

  useEffect(() => {
    if (!pdfFile) return;

    (async () => {
      const url = URL.createObjectURL(pdfFile);
      const pdf = await pdfjsLib.getDocument(url).promise;
      setPdfDoc(pdf);
      renderPage(pdf, page, zoom);
      buildThumbs(pdf);
    })();
  }, [pdfFile]);

  useEffect(() => {
    if (!pdfDoc) return;
    renderPage(pdfDoc, page, zoom);
  }, [page, zoom]);

  const renderPage = async (pdf, index, zoomLevel) => {
    const p = await pdf.getPage(index + 1);

    const containerWidth = wrapperRef.current.clientWidth;

    const baseViewport = p.getViewport({ scale: 1 });
    const fitScale = containerWidth / baseViewport.width;

    const viewport = p.getViewport({
      scale: fitScale * zoomLevel,
    });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await p.render({ canvasContext: ctx, viewport }).promise;
  };

  const buildThumbs = async (pdf) => {
    const arr = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const p = await pdf.getPage(i);
      const vp = p.getViewport({ scale: 0.25 });

      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");

      c.width = vp.width;
      c.height = vp.height;

      await p.render({ canvasContext: ctx, viewport: vp }).promise;
      arr.push(c.toDataURL());
    }

    setThumbnails(arr);
  };

  /* ================= HISTORY ================= */

  const pushHistory = () =>
    setHistory((h) => [...h, JSON.stringify(signatures)]);

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setSignatures(JSON.parse(prev));
  };

  /* ================= ADD SIGN ================= */

  const addSignature = (src) => {
    pushHistory();

    setSignatures((s) => [
      ...s,
      {
        src,
        x: 80,
        y: 80,
        size: 140,
        rotation: 0,
        page,
      },
    ]);
  };

  /* ================= DRAG ================= */

  const point = (e) =>
    e.touches
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: e.clientX, y: e.clientY };

  let raf = null;

  const move = (e) => {
    if (dragIndex === null) return;

    if (raf) cancelAnimationFrame(raf);

    raf = requestAnimationFrame(() => {
      const rect = wrapperRef.current.getBoundingClientRect();
      const p = point(e);

      let x = p.x - rect.left;
      let y = p.y - rect.top;

      const canvas = canvasRef.current;

      x = Math.max(0, Math.min(x, canvas.width));
      y = Math.max(0, Math.min(y, canvas.height));

      setSignatures((s) =>
        s.map((sig, i) =>
          i === dragIndex ? { ...sig, x, y } : sig
        )
      );
    });

    document.body.style.overflow = "hidden";
    e.preventDefault();
  };

  const stopDrag = () => {
    setDragIndex(null);
    document.body.style.overflow = "auto";
  };

  /* ================= DRAW ================= */

  const startDraw = (e) => {
    setDrawing(true);
    const ctx = drawRef.current.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    const p = point(e);
    const r = drawRef.current.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(p.x - r.left, p.y - r.top);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = drawRef.current.getContext("2d");
    const p = point(e);
    const r = drawRef.current.getBoundingClientRect();

    ctx.lineTo(p.x - r.left, p.y - r.top);
    ctx.stroke();
  };

  const stopDraw = () => setDrawing(false);

  const saveDraw = () => {
    const img = drawRef.current.toDataURL("image/png");
    drawRef.current.getContext("2d").clearRect(0, 0, 300, 120);
    addSignature(img);
  };

  /* ================= TYPE ================= */

  const addTyped = () => {
    if (!typed) return;

    const c = document.createElement("canvas");
    c.width = 400;
    c.height = 120;

    const ctx = c.getContext("2d");
    ctx.font = `60px ${font}`;
    ctx.fillStyle = "#000";
    ctx.fillText(typed, 10, 80);

    addSignature(c.toDataURL("image/png"));
    setTyped("");
  };

  /* ================= EXPORT ================= */

  const exportPdf = async () => {
    if (!pdfFile || !signatures.length) return;

    setUploading(true);
    setError("");

    const fd = new FormData();
    fd.append("file", pdfFile);
    fd.append("signatures", JSON.stringify(signatures));

    try {
      const res = await axios.post(
        `${API_BASE}/convert/pdf-sign`,
        fd,
        { responseType: "blob" }
      );

      setDownloadUrl(URL.createObjectURL(res.data));
    } catch {
      setError("Signing failed");
    } finally {
      setUploading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <div className="pdf-container">

      <input
        className="file-input"
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
      />

      <div className="toolbar">
        <button onClick={() => setZoom((z) => z + 0.2)}>Zoom +</button>
        <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}>Zoom -</button>
        <button onClick={undo}>Undo</button>
      </div>

      <div className="viewer-wrapper">

        <div className="thumbs">
          {thumbnails.map((t, i) => (
            <img
              key={i}
              src={t}
              className={i === page ? "active" : ""}
              onClick={() => setPage(i)}
            />
          ))}
        </div>

        <div
          ref={wrapperRef}
          className="viewer"
          onMouseMove={move}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={move}
          onTouchEnd={stopDrag}
        >
          <canvas ref={canvasRef} />

          {signatures
            .filter((s) => s.page === page)
            .map((sig, i) => (
              <div
                key={i}
                className="sig"
                style={{
                  left: sig.x,
                  top: sig.y,
                  width: sig.size,
                  transform: `rotate(${sig.rotation}deg)`,
                }}
                onMouseDown={() => setDragIndex(i)}
                onTouchStart={() => setDragIndex(i)}
              >
                <img src={sig.src} />
              </div>
            ))}
        </div>
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
        <input
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder="Type name"
          style={{ fontFamily: font }}
        />
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {fonts.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <button onClick={addTyped}>Add Typed</button>
      </div>

      <button className="export-btn" onClick={exportPdf} disabled={uploading}>
        {uploading ? "Signing..." : "Export Signed PDF"}
      </button>

      {downloadUrl && (
        <a className="download" href={downloadUrl} download="signed.pdf">
          Download Signed PDF
        </a>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
