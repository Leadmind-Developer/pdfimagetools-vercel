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
  const MAX_DIRECT_UPLOAD_SIZE = 1 * 1024 * 1024; // 1MB

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

  const handleDragLeave = (e) => {
    dropRef.current?.classList.remove("drag-over");
  };

  // ───────────────────────────────────────────────
  //  Assumed helper: get signed upload URL from backend
  // ───────────────────────────────────────────────
  const getSignedUploadUrl = async (filename) => {
    try {
      const res = await axios.post(`${API_BASE}/upload/signed-url`, {
        filename,
        contentType: "application/pdf",
      });
      return res.data.signedUrl; // e.g. { signedUrl: "https://storage.googleapis.com/...", filePath: "uploads/xxx.pdf" }
    } catch (err) {
      throw new Error("Failed to get signed upload URL");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError("");

    try {
      let inputForBackend = {};

      const isLarge = file.size > MAX_DIRECT_UPLOAD_SIZE;

      if (isLarge) {
        // MODE 2 ── GCS path
        setProgress(10); // fake step

        const signedUploadInfo = await getSignedUploadUrl(file.name);

        // Upload directly to GCS with the signed URL
        await axios.put(signedUploadInfo.signedUrl, file, {
          headers: {
            "Content-Type": "application/pdf",
          },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 80) / e.total) + 10; // 10–90%
            setProgress(percent);
          },
        });

        inputForBackend = { filePath: signedUploadInfo.filePath };
      } else {
        // MODE 1 ── direct multipart upload
        const formData = new FormData();
        formData.append("file", file);

        await axios.post(
          `${API_BASE}/convert/pdf-compress?quality=${quality}`,
          formData,
          {
            responseType: "blob",
            onUploadProgress: (progressEvent) => {
              const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress(percent);
            },
          }
        ).then((res) => {
          // We'll handle the response below (shared logic)
          return res;
        });
      }

      // ── Common compression request ──────────────────────────────
      const compressRes = await axios.post(
        `${API_BASE}/convert/pdf-compress?quality=${quality}`,
        isLarge ? inputForBackend : null, // only send body for MODE 2
        {
          headers: isLarge ? { "Content-Type": "application/json" } : undefined,
          responseType: "blob",
        }
      );

      const blob = new Blob([compressRes.data], { type: "application/pdf" });
      const newSize = blob.size;

      setAfterSize(newSize);
      const saved = beforeSize - newSize;
      const percent = beforeSize ? Math.round((saved / beforeSize) * 100) : 0;
      setSavingsPercent(percent);

      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      setError(
        err.message.includes("signed")
          ? "Failed to prepare large file upload. Try a smaller file."
          : "Something went wrong during compression. Please try again."
      );
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
      {/* ── Keep your existing <style jsx> block here (unchanged) ── */}

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

        {/* ── Dropzone content (unchanged) ── */}
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
              {file.size > MAX_DIRECT_UPLOAD_SIZE && (
                <span style={{ color: "#d97706", fontWeight: 500 }}> → Large file (GCS mode)</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Quality selector – unchanged */}
      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "#374151", marginBottom: "0.5rem" }}>
          Compression Level
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
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

      {/* Hint when file is selected but not yet compressed */}
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
            {file?.size > MAX_DIRECT_UPLOAD_SIZE ? "Uploading to cloud & compressing..." : "Compressing..."}
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
