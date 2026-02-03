"use client";

import React, { useState } from "react";
import axios from "axios";

export default function PdfCompressUploader() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState("screen");
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError("");
    setDownloadUrl("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${API_BASE}/convert/pdf-compress?quality=${quality}`,
        formData,
        { responseType: "blob" }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      setError("Compression failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto text-center space-y-4">

      <input
        type="file"
        accept=".pdf"
        onChange={e => setFile(e.target.files[0])}
      />

      <select
        value={quality}
        onChange={e => setQuality(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="screen">High Compression (Smallest)</option>
        <option value="ebook">Medium</option>
        <option value="printer">High Quality</option>
        <option value="prepress">Best Quality</option>
      </select>

      {error && <p className="text-red-600">{error}</p>}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Compressing..." : "Compress PDF"}
      </button>

      {downloadUrl && (
        <a
          href={downloadUrl}
          download="compressed.pdf"
          className="block text-green-600 font-semibold"
        >
          Download Compressed PDF
        </a>
      )}
    </div>
  );
}
