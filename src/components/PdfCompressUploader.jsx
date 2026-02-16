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

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
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

      const blob = new Blob([res.data], { type: "application/pdf" });
      const newSize = blob.size;

      setAfterSize(newSize);
      const saved = beforeSize - newSize;
      const percent = beforeSize ? Math.round((saved / beforeSize) * 100) : 0;
      setSavingsPercent(percent);

      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError("Something went wrong during compression. Please try again.");
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
      <style jsx>{`
        .dropzone {
          border: 2px dashed #d1d5db;
          border-radius: 0.75rem;
          padding: 2.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background-color: white;
        }

        .dropzone.has-file {
          border-color: #86efac;
          background-color: rgba(240, 253, 244, 0.4);
        }

        .dropzone.uploading {
          opacity: 0.6;
          pointer-events: none;
        }

        .dropzone.drag-over {
          border-color: #3b82f6;
          background-color: #eff6ff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .dropzone:hover:not(.has-file):not(.uploading) {
          border-color: #60a5fa;
        }

        .quality-button {
          position: relative;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          text-align: left;
          background-color: white;
          transition: all 0.2s;
          cursor: pointer;
        }

        .quality-button.selected {
          border-color: #3b82f6;
          background-color: #eff6ff;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .quality-button:hover:not(.selected):not(:disabled) {
          border-color: #d1d5db;
        }

        .quality-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .icon-right {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: #d1d5db;
        }

        .action-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          margin-top: 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          color: white;
          transition: background-color 0.2s;
          cursor: pointer;
        }

        .action-button:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }

        .action-button:not(:disabled) {
          background-color: #16a34a;
        }

        .action-button:not(:disabled):hover {
          background-color: #15803d;
        }

        .result-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.75rem;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .download-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #16a34a;
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .download-link:hover {
          background-color: #15803d;
        }

        .progress-bar {
          width: 100%;
          height: 0.625rem;
          background-color: #e5e7eb;
          border-radius: 9999px;
          overflow: hidden;
          margin-top: 1rem;
        }

        .progress-fill {
          height: 100%;
          background-color: #16a34a;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .error-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          color: #dc2626;
          font-size: 0.875rem;
        }
      `}</style>

      {/* Dropzone */}
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
              {formatSize(beforeSize)}
            </p>
          </div>
        )}
      </div>

      {/* Quality selector */}
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

      {/* Original size hint */}
      {beforeSize && !afterSize && !uploading && (
        <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", color: "#4b5563" }}>
          Original size: <span style={{ fontWeight: 600 }}>{formatSize(beforeSize)}</span>
        </p>
      )}

      {/* Error */}
      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Compress button */}
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
            Compressing...
          </span>
        ) : (
          "Compress PDF"
        )}
      </button>

      {/* Progress bar */}
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

      {/* Result */}
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
