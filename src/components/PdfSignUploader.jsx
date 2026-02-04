"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

const signatureFonts = [
  "cursive",
  "serif",
  "monospace",
  "sans-serif"
];

const PdfSignUploader = () => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const canvasRef = useRef(null);
  const drawCanvasRef = useRef(null);

  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const [signatures, setSignatures] = useState([]); 
  const [activeSig, setActiveSig] = useState(null);

  const [typedSig, setTypedSig] = useState("");
  const [font, setFont] = useState("cursive");

  const [drawing, setDrawing] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  // ---------------- Load PDF Preview ----------------

  useEffect(() => {
    if (!pdfFile) return;

    const url = URL.createObjectURL(pdfFile);
    setPdfUrl(url);

    const renderPDF = async () => {
      const pdf = await pdfjsLib.getDocument(url).promise;
      const page = await pdf.getPage(pageNumber + 1);

      const viewport = page.getViewport({ scale: 1.2 });

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;
    };

    renderPDF();
  }, [pdfFile, pageNumber]);

  // ---------------- Drag signature ----------------

  const startDrag = (index) => setActiveSig(index);

  const onDrag = (e) => {
    if (activeSig === null) return;

    const rect = canvasRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSignatures((prev) =>
      prev.map((s, i) =>
        i === activeSig ? { ...s, x, y } : s
      )
    );
  };

  const stopDrag = () => setActiveSig(null);

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
      { src, x: 50, y: 50, size: 150 }
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
    formData.append("page_number", pageNumber);

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
    <div className="max-w-2xl mx-auto space-y-6">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
      />

      {/* PDF Preview */}

      {pdfFile && (
        <div
          className="relative inline-block border"
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
        >
          <canvas ref={canvasRef} />

          {signatures.map((sig, i) => (
            <img
              key={i}
              src={sig.src}
              draggable={false}
              onMouseDown={() => startDrag(i)}
              style={{
                position: "absolute",
                left: sig.x,
                top: sig.y,
                width: sig.size,
                cursor: "move"
              }}
            />
          ))}
        </div>
      )}

      {/* Draw Signature */}

      <div className="border p-3 rounded">

        <p className="font-medium mb-2">Draw Signature</p>

        <canvas
          ref={drawCanvasRef}
          width={300}
          height={120}
          className="border"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
        />

        <button
          onClick={saveDrawnSignature}
          className="mt-2 bg-gray-700 text-white px-4 py-1 rounded"
        >
          Add Drawn Signature
        </button>
      </div>

      {/* Type Signature */}

      <div className="border p-3 rounded space-y-2">

        <p className="font-medium">Type Signature</p>

        <input
          value={typedSig}
          onChange={(e) => setTypedSig(e.target.value)}
          placeholder="Your name"
          className="border p-2 w-full"
          style={{ fontFamily: font }}
        />

        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="border p-1"
        >
          {signatureFonts.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>

        <button
          onClick={addTypedSignature}
          className="bg-gray-700 text-white px-4 py-1 rounded"
        >
          Add Typed Signature
        </button>
      </div>

      {/* Controls */}

      <div className="flex gap-4 items-center">

        <label>
          Page:
          <input
            type="number"
            min="1"
            value={pageNumber + 1}
            onChange={(e) => setPageNumber(e.target.value - 1)}
            className="ml-2 w-16 border"
          />
        </label>

        <span className="text-sm text-gray-600">
          Signatures: {signatures.length}
        </span>
      </div>

      {/* Submit */}

      <button
        onClick={handleSign}
        disabled={uploading || !pdfFile}
        className="w-full bg-blue-600 text-white py-3 rounded"
      >
        {uploading ? "Signing..." : "Export Signed PDF"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {downloadUrl && (
        <a
          href={downloadUrl}
          download="signed.pdf"
          className="text-green-600 font-semibold block text-center"
        >
          Download Signed PDF
        </a>
      )}
    </div>
  );
};

export default PdfSignUploader;
