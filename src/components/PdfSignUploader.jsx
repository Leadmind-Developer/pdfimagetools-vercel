"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const fonts = ["cursive", "serif", "monospace", "sans-serif"];

export default function PdfSignUploader() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const pdfCanvasRef = useRef(null);
  const drawCanvasRef = useRef(null);
  const wrapperRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [page, setPage] = useState(0);

  const [thumbnails, setThumbnails] = useState([]);
  const [signatures, setSignatures] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);

  const [typed, setTyped] = useState("");
  const [font, setFont] = useState("cursive");

  const [drawing, setDrawing] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  /* ---------------- PDF LOAD ---------------- */

  useEffect(() => {
    if (!pdfFile) return;

    const load = async () => {
      const url = URL.createObjectURL(pdfFile);
      const pdf = await pdfjsLib.getDocument(url).promise;

      setPdfDoc(pdf);
      renderPage(pdf, 0);
      makeThumbs(pdf);
    };

    load();
  }, [pdfFile]);

  const renderPage = async (pdf, index) => {
    const pageObj = await pdf.getPage(index + 1);
    const viewport = pageObj.getViewport({ scale: 1.3 });

    const canvas = pdfCanvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await pageObj.render({ canvasContext: ctx, viewport }).promise;
  };

  const makeThumbs = async (pdf) => {
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

  const changePage = (i) => {
    setPage(i);
    renderPage(pdfDoc, i);
  };

  /* ---------------- SIGNATURE ADD ---------------- */

  const addSignature = (src) => {
    setSignatures((s) => [
      ...s,
      {
        src,
        x: 40,
        y: 40,
        size: 140,
        rotation: 0,
        page,
      },
    ]);
  };

  /* ---------------- DRAG (TOUCH + MOUSE) ---------------- */

  const getPoint = (e) => {
    if (e.touches) {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const moveSig = (e) => {
    if (dragIndex === null) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const p = getPoint(e);

    const x = p.x - rect.left;
    const y = p.y - rect.top;

    setSignatures((prev) =>
      prev.map((s, i) =>
        i === dragIndex ? { ...s, x, y } : s
      )
    );

    e.preventDefault();
  };

  const stopDrag = () => setDragIndex(null);

  /* ---------------- DRAW SIGNATURE ---------------- */

  const startDraw = (e) => {
    setDrawing(true);
    const ctx = drawCanvasRef.current.getContext("2d");
    const p = getPoint(e);

    const rect = drawCanvasRef.current.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(p.x - rect.left, p.y - rect.top);
  };

  const draw = (e) => {
    if (!drawing) return;

    const ctx = drawCanvasRef.current.getContext("2d");
    const p = getPoint(e);
    const rect = drawCanvasRef.current.getBoundingClientRect();

    ctx.lineTo(p.x - rect.left, p.y - rect.top);
    ctx.stroke();
  };

  const stopDraw = () => setDrawing(false);

  const saveDraw = () => {
    const img = drawCanvasRef.current.toDataURL("image/png");
    addSignature(img);

    drawCanvasRef.current
      .getContext("2d")
      .clearRect(0, 0, 300, 120);
  };

  /* ---------------- TYPE SIGNATURE ---------------- */

  const addTyped = () => {
    if (!typed) return;

    const c = document.createElement("canvas");
    c.width = 400;
    c.height = 120;

    const ctx = c.getContext("2d");
    ctx.font = `60px ${font}`;
    ctx.fillText(typed, 10, 80);

    addSignature(c.toDataURL("image/png"));
    setTyped("");
  };

  /* ---------------- EXPORT ---------------- */

  const handleSign = async () => {
    if (!pdfFile || !signatures.length) return;

    setUploading(true);
    setError("");
    setDownloadUrl("");

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

  /* ---------------- UI ---------------- */

  return (
    <div className="pdf-container">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
      />

      <div className="viewer-wrapper">

        <div className="thumbnail-panel">
          {thumbnails.map((t, i) => (
            <img
              key={i}
              src={t}
              className={`thumb ${i === page ? "active" : ""}`}
              onClick={() => changePage(i)}
            />
          ))}
        </div>

        <div
          ref={wrapperRef}
          className="pdf-viewer"
          onMouseMove={moveSig}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={moveSig}
          onTouchEnd={stopDrag}
        >
          <canvas ref={pdfCanvasRef} />

          {signatures
            .filter((s) => s.page === page)
            .map((sig, i) => (
              <div
                key={i}
                className="signature"
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

                <div className="controls">
                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={sig.size}
                    onChange={(e) =>
                      setSignatures((p) =>
                        p.map((s, x) =>
                          x === i ? { ...s, size: e.target.value } : s
                        )
                      )
                    }
                  />
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={sig.rotation}
                    onChange={(e) =>
                      setSignatures((p) =>
                        p.map((s, x) =>
                          x === i ? { ...s, rotation: e.target.value } : s
                        )
                      )
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="draw-box">
        <p>Draw Signature</p>
        <canvas
          ref={drawCanvasRef}
          width={300}
          height={120}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={stopDraw}
        />
        <button onClick={saveDraw}>Add</button>
      </div>

      <div className="type-box">
        <input
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          style={{ fontFamily: font }}
          placeholder="Type name"
        />
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {fonts.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <button onClick={addTyped}>Add</button>
      </div>

      <button onClick={handleSign} disabled={uploading}>
        {uploading ? "Signing..." : "Export Signed PDF"}
      </button>

      {error && <p className="error">{error}</p>}
      {downloadUrl && (
        <a href={downloadUrl} download="signed.pdf">
          Download Signed PDF
        </a>
      )}
    </div>
  );
}
