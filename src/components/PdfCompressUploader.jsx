// src/components/PdfCompressUploader.jsx
"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { Upload, File, CheckCircle, AlertCircle, Download } from "lucide-react";

export default function PdfCompressUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState("ebook");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [beforeSize, setBeforeSize] = useState(null);
  const [afterSize, setAfterSize] = useState(null);
  const [savingsPercent, setSavingsPercent] = useState(0);

  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const dropRef = useRef(null);
  const fileInputRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
  const SIZE_THRESHOLD = 1 * 1024 * 1024; // 1MB

  const formatSize = (bytes) => {
    if (!bytes) return "—";
    const mb = (bytes / 1024 / 1024).toFixed(2);
    return `${mb} MB`;
  };

  const handleFiles = (files) => {
    if (!files?.length) return;
    const pdf = files[0];

    if (pdf.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    setFile(pdf);
    setFileName(pdf.name);
    setBeforeSize(pdf.size);
    setAfterSize(null);
    setSavingsPercent(0);
    setDownloadUrl("");
    setError("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
    dropRef.current?.classList.remove("drag-over");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current?.classList.add("drag-over");
  };

  const handleDragLeave = () => {
    dropRef.current?.classList.remove("drag-over");
  };

  // ────────────────────────────────────────────────
  //  MODE 1: Direct upload (small files)
  // ────────────────────────────────────────────────
  const compressDirect = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      `${API_BASE}/convert/pdf-compress?quality=${quality}`,
      formData,
      {
        responseType: "blob",
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
      }
    );

    return res.data; // Blob
  };

  // ────────────────────────────────────────────────
  //  MODE 2: GCS presigned upload + backend filePath
  // ────────────────────────────────────────────────
  const compressViaGCS = async () => {
    // 1. Get presigned URL + filePath
    const { data: presign } = await axios.post(`${API_BASE}/api/storage/upload-url`);

    const { uploadUrl, filePath } = presign;

    // 2. Upload file directly to GCS using PUT
    await axios.put(uploadUrl, file, {
      headers: {
        "Content-Type": "application/pdf",
      },
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percent);
      },
    });

    // 3. Tell backend to process the file via filePath
    const res = await axios.post(
      `${API_BASE}/convert/pdf-compress?quality=${quality}`,
      { filePath },
      {
        headers: { "Content-Type": "application/json" },
        responseType: "blob",
      }
    );

    return res.data; // Blob
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError("");

    try {
      let blob;

      if (file.size > SIZE_THRESHOLD) {
        // MODE 2 — large file → GCS
        blob = await compressViaGCS();
      } else {
        // MODE 1 — small file → direct
        blob = await compressDirect();
      }

      const newSize = blob.size;
      setAfterSize(newSize);

      const saved = beforeSize - newSize;
      const percent = beforeSize ? Math.round((saved / beforeSize) * 100) : 0;
      setSavingsPercent(percent);

      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.error || err.message || "Compression failed";
      setError(msg.includes("No file provided") ? "Upload session expired. Please try again." : msg);
    } finally {
      setUploading(false);
    }
  };

  const qualityOptions = [
    { value: "screen",    label: "Maximum Compression", desc: "Smallest size – good for screen/web viewing (lowest quality)", icon: "↓↓" },
    { value: "ebook",     label: "Balanced (Recommended)", desc: "Great balance between size & quality – ideal for most uses", icon: "↔" },
    { value: "printer",   label: "High Quality", desc: "Good for home/office printing – sharper images", icon: "↑" },
    { value: "prepress",  label: "Maximum Quality", desc: "Best visual fidelity – almost no size reduction", icon: "↑↑" },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "32rem", margin: "0 auto" }}>
      {/* ── existing <style jsx> remains unchanged ── */}
      <style jsx>{`
        /* ... your original styles ... */
      `}</style>

      {/* Dropzone – unchanged */}
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`dropzone ${file ? "has-file" : ""} ${uploading ? "uploading" : ""}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />

        {!file ? (
          <>
            <Upload size={48} className="mx-auto text-gray-400" />
            <p style={{ marginTop: "1rem", fontSize: "1.125rem", fontWeight: 500, color: "#374151" }}>
              Drag & drop your PDF here
            </p>
            <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", color: "#6b7280" }}>or</p>
            <button
              type="button"
              style={{
                marginTop: "1rem",
                padding: "0.625rem 1.25rem",
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "0.5rem",
                border: "none",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Browse files
            </button>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <File size={40} className="mx-auto text-green-600" />
            <p style={{ fontWeight: 500, color: "#1f2937", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "20rem", margin: "0 auto" }}>
              {fileName}
            </p>
            <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
              {formatSize(beforeSize)} {file.size > SIZE_THRESHOLD && " (>1MB – using cloud upload)"}
            </p>
          </div>
        )}
      </div>

      {/* Quality selector – unchanged */}
      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#374151", marginBottom: "0.5rem" }}>
          Compression Level
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem", '@media (min-width: 640px)': { gridTemplateColumns: "1fr 1fr" } }}>
          {qualityOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              disabled={uploading}
              onClick={() => setQuality(opt.value)}
              className={`quality-button ${quality === opt.value ? "selected" : ""}`}
            >
              <div style={{ fontWeight: 500 }}>{opt.label}</div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>{opt.desc}</div>
              <div className="icon-right">{opt.icon}</div>
            </button>
          ))}
        </div>
      </div>

      {beforeSize && !afterSize && !uploading && (
        <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", color: "#4b5563" }}>
          Original size: <span style={{ fontWeight: 600 }}>{formatSize(beforeSize)}</span>
        </p>
      )}

      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="action-button"
      >
        {uploading ? (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <svg className="spinner" style={{ height: "1.25rem", width: "1.25rem" }} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" style={{ opacity: 0.25 }} />
              <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" style={{ opacity: 0.75 }} />
            </svg>
            {file?.size > SIZE_THRESHOLD ? "Uploading to cloud..." : "Compressing..."}
          </span>
        ) : (
          "Compress PDF"
        )}
      </button>

      {uploading && (
        <div style={{ marginTop: "1rem" }}>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#6b7280", marginTop: "0.25rem" }}>
            {progress}%
          </p>
        </div>
      )}

      {afterSize > 0 && (
        <div className="result-box">
          <CheckCircle size={40} className="mx-auto text-green-600" style={{ marginBottom: "0.75rem" }} />
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#065f46" }}>Compression Complete!</h3>

          <div className="stats-grid">
            <div>
              <p style={{ color: "#4b5563", margin: 0 }}>Original</p>
              <p style={{ fontWeight: 700 }}>{formatSize(beforeSize)}</p>
            </div>
            <div>
              <p style={{ color: "#4b5563", margin: 0 }}>Compressed</p>
              <p style={{ fontWeight: 700, color: "#15803d" }}>{formatSize(afterSize)}</p>
            </div>
            <div>
              <p style={{ color: "#4b5563", margin: 0 }}>Saved</p>
              <p style={{ fontWeight: 700, color: "#16a34a" }}>{savingsPercent}%</p>
            </div>
          </div>

          <a
            href={downloadUrl}
            download={`compressed-${fileName}`}
            className="download-link"
          >
            <Download size={20} />
            Download Compressed PDF
          </a>
        </div>
      )}
    </div>
  );
}
