"use client";

import React, { useState, useRef } from "react";
import axios from "axios";

export default function PdfCompressUploader() {

  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState("screen");

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [beforeSize, setBeforeSize] = useState(null);
  const [afterSize, setAfterSize] = useState(null);

  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const dropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const formatSize = (bytes) => {
    if (!bytes) return "";
    return (bytes / 1024 / 1024).toFixed(2) + " MB";
  };

  const handleFileSelect = (files) => {
    const pdf = files[0];

    if (!pdf || pdf.type !== "application/pdf") {
      setError("Please select a valid PDF file.");
      return;
    }

    setFile(pdf);
    setBeforeSize(pdf.size);
    setAfterSize(null);
    setDownloadUrl("");
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
    dropRef.current.classList.remove("drag-over");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add("drag-over");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("drag-over");
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${API_BASE}/convert/pdf-compress?quality=${quality}`,
        formData,
        {
          responseType: "blob",
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(percent);
          }
        }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });

      setAfterSize(blob.size);
      setDownloadUrl(URL.createObjectURL(blob));

    } catch {
      setError("Compression failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center">

      <div
        ref={dropRef}
        className="border-2 border-dashed rounded-lg p-6 mb-4 cursor-pointer transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p className="text-gray-600">
          Drag & drop PDF here or click to browse
        </p>

        <input
          type="file"
          accept=".pdf"
          hidden
          id="pdfInput"
          onChange={(e) => handleFileSelect(e.target.files)}
        />

        <label
          htmlFor="pdfInput"
          className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Browse
        </label>
      </div>

      <select
        className="border p-2 rounded w-full mb-3"
        value={quality}
        onChange={e => setQuality(e.target.value)}
      >
        <option value="screen">High Compression (Small)</option>
        <option value="ebook">Balanced</option>
        <option value="printer">High Quality</option>
        <option value="prepress">Best Quality</option>
      </select>

      {beforeSize && (
        <p className="text-sm text-gray-600">
          Original size: <strong>{formatSize(beforeSize)}</strong>
        </p>
      )}

      {afterSize && (
        <p className="text-sm text-green-600">
          Compressed size: <strong>{formatSize(afterSize)}</strong>
        </p>
      )}

      {error && <p className="text-red-600 mt-2">{error}</p>}

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="bg-green-600 text-white w-full py-2 rounded mt-4"
      >
        {uploading ? "Compressing..." : "Compress PDF"}
      </button>

      {uploading && (
        <div className="w-full bg-gray-200 rounded mt-3">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {downloadUrl && (
        <a
          href={downloadUrl}
          download="compressed.pdf"
          className="block mt-4 text-blue-600 font-semibold"
        >
          Download Compressed PDF
        </a>
      )}

      <style jsx>{`
        .drag-over {
          background: #f0f8ff;
          border-color: #2563eb;
        }
      `}</style>

    </div>
  );
}
