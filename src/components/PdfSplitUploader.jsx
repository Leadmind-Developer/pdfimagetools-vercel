"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { Upload, File, Download, AlertCircle } from "lucide-react";

export default function PdfSplitUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);

  const [uploading, setUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

  const handleFiles = (files) => {
    const pdf = files[0];
    if (!pdf || pdf.type !== "application/pdf") {
      setError("Only PDF files allowed");
      return;
    }

    setFile(pdf);
    setFileName(pdf.name);
    setDownloadUrl("");
    setError("");
  };

  const handleSplit = async () => {
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${API_BASE}/convert/pdf-split?start_page=${startPage}&end_page=${endPage}`,
        formData,
        { responseType: "blob" }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch {
      setError("Failed to split PDF. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ maxWidth: "28rem", margin: "0 auto" }}>

      {/* Upload */}
      <div
        onClick={() => fileInputRef.current.click()}
        style={{
          border: "2px dashed #d1d5db",
          padding: "2rem",
          borderRadius: "12px",
          textAlign: "center",
          cursor: "pointer",
          background: "white"
        }}
      >
        <input
          hidden
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {!file ? (
          <>
            <Upload size={40} color="#9ca3af" />
            <p>Click or drop PDF here</p>
          </>
        ) : (
          <>
            <File size={36} color="#16a34a" />
            <p style={{ fontWeight: 600 }}>{fileName}</p>
          </>
        )}
      </div>

      {/* Page range */}
      {file && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <input
            type="number"
            min="1"
            value={startPage}
            onChange={(e) => setStartPage(e.target.value)}
            placeholder="Start page"
            style={inputStyle}
          />
          <input
            type="number"
            min="1"
            value={endPage}
            onChange={(e) => setEndPage(e.target.value)}
            placeholder="End page"
            style={inputStyle}
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ color: "#dc2626", marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
          <AlertCircle size={18} /> {error}
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleSplit}
        disabled={!file || uploading}
        style={{
          width: "100%",
          marginTop: "1.5rem",
          padding: "0.75rem",
          background: "#2563eb",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600
        }}
      >
        {uploading ? "Splitting..." : "Split PDF"}
      </button>

      {/* Download */}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download={`split-${fileName}`}
          style={{
            marginTop: "1.5rem",
            display: "inline-flex",
            gap: "0.5rem",
            padding: "0.75rem 1.25rem",
            background: "#16a34a",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          <Download size={18} /> Download Split PDF
        </a>
      )}
    </div>
  );
}

const inputStyle = {
  flex: 1,
  padding: "0.6rem",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
};
