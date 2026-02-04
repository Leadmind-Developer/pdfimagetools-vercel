"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js`;

const PdfSignUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [pageNumber, setPageNumber] = useState(0);
  const [sigSize, setSigSize] = useState(150);

  const canvasRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  // ---------- Load PDF Preview ----------

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

      await page.render({
        canvasContext: ctx,
        viewport,
      }).promise;
    };

    renderPDF();
  }, [pdfFile, pageNumber]);

  // ---------- Pick position ----------

  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(rect.bottom - e.clientY);

    setCoords({ x, y });
  };

  // ---------- Upload ----------

  const handleSign = async () => {
    if (!pdfFile || !signatureFile) return;

    setUploading(true);
    setError("");
    setDownloadUrl("");

    const formData = new FormData();
    formData.append("file", pdfFile);
    formData.append("signature_file", signatureFile);

    try {
      const res = await axios.post(
        `${API_BASE}/convert/pdf-sign?page_number=${pageNumber}&x=${coords.x}&y=${coords.y}&width=${sigSize}`,
        formData,
        { responseType: "blob" }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError("Signing failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">

      {/* Uploads */}

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
        className="block w-full"
      />

      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        onChange={(e) => setSignatureFile(e.target.files[0])}
        className="block w-full"
      />

      {/* Preview */}

      {pdfFile && (
        <div className="border rounded-lg p-3 text-center">

          <p className="text-sm text-gray-600 mb-2">
            Click on the PDF to place your signature
          </p>

          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="mx-auto border cursor-crosshair"
          />

          <p className="text-sm mt-2">
            Position: X {coords.x} , Y {coords.y}
          </p>

        </div>
      )}

      {/* Controls */}

      <div className="flex items-center gap-4">

        <label className="text-sm">
          Signature size:
          <input
            type="range"
            min="80"
            max="300"
            value={sigSize}
            onChange={(e) => setSigSize(e.target.value)}
            className="ml-2"
          />
        </label>

        <label className="text-sm">
          Page:
          <input
            type="number"
            min="1"
            value={pageNumber + 1}
            onChange={(e) => setPageNumber(Number(e.target.value) - 1)}
            className="ml-2 w-16 border rounded"
          />
        </label>

      </div>

      {/* Button */}

      <button
        onClick={handleSign}
        disabled={uploading || !pdfFile || !signatureFile}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
      >
        {uploading ? "Signing..." : "Sign PDF"}
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {downloadUrl && (
        <a
          href={downloadUrl}
          download="signed.pdf"
          className="block text-center text-green-600 font-semibold"
        >
          Download Signed PDF
        </a>
      )}

    </div>
  );
};

export default PdfSignUploader;
