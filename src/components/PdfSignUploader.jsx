"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const signatureFonts = ["cursive", "serif", "monospace", "sans-serif"];

const PdfSignUploader = () => {

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const canvasRef = useRef(null);
  const drawCanvasRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const [thumbnails, setThumbnails] = useState([]);

  const [signatures, setSignatures] = useState([]);
  const [activeSig, setActiveSig] = useState(null);

  const [typedSig, setTypedSig] = useState("");
  const [font, setFont] = useState("cursive");

  const [drawing, setDrawing] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  // ---------------- Load PDF ----------------

  useEffect(() => {
    if (!pdfFile) return;

    const loadPDF = async () => {
      const url = URL.createObjectURL(pdfFile);
      const pdf = await pdfjsLib.getDocument(url).promise;
      setPdfDoc(pdf);

      renderPage(pdf, pageNumber);
      generateThumbnails(pdf);
    };

    loadPDF();
  }, [pdfFile]);

  const renderPage = async (pdf, pageIndex) => {

    const page = await pdf.getPage(pageIndex + 1);
    const viewport = page.getViewport({ scale: 1.2 });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport }).promise;
  };

  // ---------------- Thumbnails ----------------

  const generateThumbnails = async (pdf) => {
    const thumbs = [];

    for (let i = 1; i <= pdf.numPages; i++) {

      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 0.25 });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      thumbs.push(canvas.toDataURL());
    }

    setThumbnails(thumbs);
  };

  const changePage = (i) => {
    setPageNumber(i);
    renderPage(pdfDoc, i);
  };

  // ---------------- Drag ----------------

  const startDrag = (i) => setActiveSig(i);

  const onDrag = (e) => {

    if (activeSig === null) return;

    const rect = canvasRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSignatures((prev) =>
      prev.map((s, idx) =>
        idx === activeSig ? { ...s, x, y } : s
      )
    );
  };

  const stopDrag = () => setActiveSig(null);

  // ---------------- Resize & Rotate ----------------

  const updateSignature = (i, updates) => {

    setSignatures((prev) =>
      prev.map((s, idx) =>
        idx === i ? { ...s, ...updates } : s
      )
    );
  };

  const deleteSignature = (i) => {
    setSignatures((prev) => prev.filter((_, idx) => idx !== i));
  };

  // ---------------- Draw Signature ----------------

  const startDraw = (e) => {

    setDrawing(true);

    const ctx = drawCanvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {

    if (!drawing) return;

    const ctx = drawCanvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDraw = () => setDrawing(false);

  const saveDrawnSignature = () => {

    const img = drawCanvasRef.current.toDataURL("image/png");

    addSignature(img);

    drawCanvasRef.current
      .getContext("2d")
      .clearRect(0, 0, 300, 120);
  };

  // ---------------- Typed Signature ----------------

  const addTypedSignature = () => {

    if (!typedSig) return;

    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 120;

    const ctx = canvas.getContext("2d");

    ctx.font = `60px ${font}`;
    ctx.fillText(typedSig, 10, 80);

    addSignature(canvas.toDataURL("image/png"));

    setTypedSig("");
  };

  // ---------------- Add Signature ----------------

  const addSignature = (src) => {

    setSignatures((prev) => [
      ...prev,
      {
        src,
        x: 50,
        y: 50,
        size: 150,
        rotation: 0,
        page: pageNumber
      }
    ]);
  };

  // ---------------- Upload ----------------

  const handleSign = async () => {

    if (!pdfFile || signatures.length === 0) return;

    setUploading(true);
    setError("");
    setDownloadUrl("");

    const formData = new FormData();

    formData.append("file", pdfFile);
    formData.append("signatures", JSON.stringify(signatures));

    try {

      const res = await axios.post(
        `${API_BASE}/convert/pdf-sign`,
        formData,
        { responseType: "blob" }
      );

      setDownloadUrl(URL.createObjectURL(res.data));

    } catch (err) {

      console.error(err);
      setError("Signing failed.");

    } finally {

      setUploading(false);
    }
  };

  return (
    <div className="pdf-container">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
      />

      {/* Layout */}

      <div className="viewer-wrapper">

        {/* Thumbnails */}

        <div className="thumbnail-panel">

          {thumbnails.map((thumb, i) => (
            <img
              key={i}
              src={thumb}
              className={`thumb ${i === pageNumber ? "active" : ""}`}
              onClick={() => changePage(i)}
            />
          ))}

        </div>

        {/* Main PDF */}

        <div
          className="pdf-viewer"
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
        >

          <canvas ref={canvasRef} />

          {signatures
            .filter((s) => s.page === pageNumber)
            .map((sig, i) => (
              <div
                key={i}
                className="signature-box"
                onMouseDown={() => startDrag(i)}
                style={{
                  left: sig.x,
                  top: sig.y,
                  width: sig.size,
                  transform: `rotate(${sig.rotation}deg)`
                }}
              >

                <img src={sig.src} />

                <div className="sig-controls">

                  <input
                    type="range"
                    min="50"
                    max="400"
                    value={sig.size}
                    onChange={(e) =>
                      updateSignature(i, { size: e.target.value })
                    }
                  />

                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={sig.rotation}
                    onChange={(e) =>
                      updateSignature(i, { rotation: e.target.value })
                    }
                  />

                  <button onClick={() => deleteSignature(i)}>✕</button>

                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Draw */}

      <div className="draw-box">

        <p>Draw Signature</p>

        <canvas
          ref={drawCanvasRef}
          width={300}
          height={120}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
        />

        <button onClick={saveDrawnSignature}>Add</button>
      </div>

      {/* Type */}

      <div className="type-box">

        <input
          value={typedSig}
          onChange={(e) => setTypedSig(e.target.value)}
          style={{ fontFamily: font }}
          placeholder="Type your name"
        />

        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {signatureFonts.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>

        <button onClick={addTypedSignature}>Add</button>
      </div>

      {/* Export */}

      <button
        className="export-btn"
        onClick={handleSign}
        disabled={uploading}
      >
        {uploading ? "Signing..." : "Export Signed PDF"}
      </button>

      {error && <p className="error">{error}</p>}

      {downloadUrl && (
        <a href={downloadUrl} download="signed.pdf" className="download">
          Download Signed PDF
        </a>
      )}

      {/* CSS */}

      <style jsx>{`

        .pdf-container {
          max-width: 1000px;
          margin: auto;
          font-family: Arial;
        }

        .viewer-wrapper {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .thumbnail-panel {
          width: 120px;
          overflow-y: auto;
          border-right: 1px solid #ddd;
        }

        .thumb {
          width: 100%;
          margin-bottom: 6px;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .thumb.active {
          border-color: #007bff;
        }

        .pdf-viewer {
          position: relative;
          border: 1px solid #ccc;
        }

        .signature-box {
          position: absolute;
          cursor: move;
        }

        .signature-box img {
          width: 100%;
          pointer-events: none;
        }

        .sig-controls {
          display: flex;
          gap: 4px;
          background: rgba(255,255,255,.9);
          padding: 2px;
          align-items: center;
        }

        .sig-controls input {
          width: 70px;
        }

        .sig-controls button {
          border: none;
          background: red;
          color: white;
          cursor: pointer;
        }

        .draw-box, .type-box {
          margin-top: 20px;
          border: 1px solid #ccc;
          padding: 10px;
        }

        .draw-box canvas {
          border: 1px solid #aaa;
        }

        .export-btn {
          margin-top: 20px;
          background: #007bff;
          color: white;
          padding: 12px;
          width: 100%;
          border: none;
          cursor: pointer;
        }

        .error {
          color: red;
        }

        .download {
          display: block;
          text-align: center;
          color: green;
          margin-top: 10px;
          font-weight: bold;
        }

      `}</style>

    </div>
  );
};

export default PdfSignUploader;
