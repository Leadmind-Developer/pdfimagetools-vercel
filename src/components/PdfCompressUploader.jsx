// src/components/PdfCompressUploader.jsx
"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { Upload, File, CheckCircle, AlertCircle, Download } from "lucide-react"; // ← add lucide-react or similar icons

export default function PdfCompressUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [quality, setQuality] = useState("ebook"); // default to balanced
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [beforeSize, setBeforeSize] = useState(null);
  const [afterSize, setAfterSize] = useState(null);
  const [savingsPercent, setSavingsPercent] = useState(0);

  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const dropRef = useRef(null);
  const fileInputRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"; // fallback for dev

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
    <div className="w-full max-w-lg mx-auto">
      {/* Dropzone */}
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-200
          ${file ? "border-green-400 bg-green-50/40" : "border-gray-300 hover:border-blue-400 bg-white/50"}
          ${uploading ? "opacity-60 pointer-events-none" : ""}
          drag-over:border-blue-500 drag-over:bg-blue-50 drag-over:shadow-lg
        `}
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
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-lg font-medium text-gray-700">
              Drag & drop your PDF here
            </p>
            <p className="mt-1 text-sm text-gray-500">or</p>
            <button
              type="button"
              className="mt-4 inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Browse files
            </button>
          </>
        ) : (
          <div className="space-y-3">
            <File className="mx-auto h-10 w-10 text-green-600" />
            <p className="font-medium text-gray-800 truncate max-w-xs mx-auto">
              {fileName}
            </p>
            <p className="text-sm text-gray-600">
              {formatSize(beforeSize)}
            </p>
          </div>
        )}
      </div>

      {/* Quality selector */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Compression Level
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {qualityOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              disabled={uploading}
              onClick={() => setQuality(opt.value)}
              className={`
                relative p-4 border rounded-lg text-left transition-all
                ${quality === opt.value
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300 bg-white"}
                ${uploading ? "opacity-50" : ""}
              `}
            >
              <div className="font-medium">{opt.label}</div>
              <div className="text-xs text-gray-500 mt-1">{opt.desc}</div>
              <div className="absolute top-4 right-4 text-xl font-bold text-gray-300">
                {opt.icon}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Status messages */}
      {beforeSize && !afterSize && !uploading && (
        <p className="mt-4 text-center text-sm text-gray-600">
          Original size: <span className="font-semibold">{formatSize(beforeSize)}</span>
        </p>
      )}

      {error && (
        <div className="mt-4 flex items-center justify-center gap-2 text-red-600 text-sm">
          <AlertCircle className="h-5 w-5" />
          {error}
        </div>
      )}

      {/* Action button */}
      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className={`
          mt-6 w-full py-3 px-6 rounded-lg font-medium text-white transition
          ${uploading || !file
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 shadow-sm"}
        `}
      >
        {uploading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Compressing...
          </span>
        ) : (
          "Compress PDF"
        )}
      </button>

      {/* Progress */}
      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-1">{progress}%</p>
        </div>
      )}

      {/* Result */}
      {afterSize > 0 && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <CheckCircle className="mx-auto h-10 w-10 text-green-600 mb-3" />
          <h3 className="text-lg font-semibold text-green-800">Compression Complete!</h3>
          
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Original</p>
              <p className="font-bold">{formatSize(beforeSize)}</p>
            </div>
            <div>
              <p className="text-gray-600">Compressed</p>
              <p className="font-bold text-green-700">{formatSize(afterSize)}</p>
            </div>
            <div>
              <p className="text-gray-600">Saved</p>
              <p className="font-bold text-green-600">{savingsPercent}%</p>
            </div>
          </div>

          <a
            href={downloadUrl}
            download={`compressed-${fileName}`}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-sm"
          >
            <Download className="h-5 w-5" />
            Download Compressed PDF
          </a>
        </div>
      )}
    </div>
  );
}
