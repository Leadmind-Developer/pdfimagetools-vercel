"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { Upload, File, CheckCircle, AlertCircle, Download } from "lucide-react";

export default function PdfPasswordUploader({ mode = "lock" }) {
  // mode = "lock" | "unlock"

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
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
    if (!file || !password) {
      setError("Please select a PDF and enter a password");
      return;
    }

    setUploading(true);
    setProgress(0);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const endpoint = mode === "lock" ? "pdf-lock" : "pdf-unlock";
      const res = await axios.post(
        `${API_BASE}/convert/${endpoint}?password=${encodeURIComponent(password)}`,
        formData,
        {
          responseType: "blob",
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(percent);
          },
        }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      setDownloadUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      if (err?.response?.data?.error) setError(err.response.data.error);
      else setError("Something went wrong. Check your password or try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "32rem", margin: "0 auto" }}>
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
            <p>Drag & drop your PDF here or browse files</p>
          </>
        ) : (
          <div>
            <File size={40} className="mx-auto text-green-600" />
            <p>{fileName}</p>
          </div>
        )}
      </div>

      {/* Password Input */}
      <div style={{ marginTop: "1rem" }}>
        <input
          type="password"
          placeholder={mode === "lock" ? "Enter password to lock PDF" : "Enter current password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #d1d5db" }}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="error-message" style={{ marginTop: "0.5rem" }}>
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={uploading || !file || !password}
        className="action-button"
        style={{ width: "100%", marginTop: "1rem" }}
      >
        {uploading ? "Processing..." : mode === "lock" ? "Lock PDF" : "Unlock PDF"}
      </button>

      {/* Progress */}
      {uploading && (
        <div style={{ marginTop: "1rem" }}>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p>{progress}%</p>
        </div>
      )}

      {/* Result */}
      {downloadUrl && (
        <a href={downloadUrl} download={`${mode === "lock" ? "locked" : "unlocked"}-${fileName}`} className="download-link" style={{ display: "block", marginTop: "1rem" }}>
          <Download size={20} /> Download PDF
        </a>
      )}
    </div>
  );
}
