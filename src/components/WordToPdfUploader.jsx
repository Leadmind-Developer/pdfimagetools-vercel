"use client";
import React, { useState, useRef } from "react";
import axios from "axios";

const WordToPdfUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [error, setError] = useState("");
  const dropRef = useRef(null);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFilesSelect = (selectedFiles) => {
    const validFiles = Array.from(selectedFiles).filter(
      (file) => file.name.endsWith(".docx")
    );
    if (validFiles.length === 0) {
      setError("Please select valid Word (.docx) files.");
      return;
    }
    setFiles(validFiles);
    setError("");
  };

  const handleUpload = async () => {
    setError("");
    setUploads([]);

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const uploadData = { name: file.name, progress: 0, status: "uploading" };
      setUploads((prev) => [...prev, uploadData]);

      try {
        const response = await axios.post(
          `${API_BASE}/convert/office-to-pdf`,
          formData,
          {
            responseType: "blob",
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (event) => {
              const percent = Math.round((event.loaded * 100) / event.total);
              setUploads((prev) =>
                prev.map((u) =>
                  u.name === file.name ? { ...u, progress: percent } : u
                )
              );
            },
          }
        );

        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        setUploads((prev) =>
          prev.map((u) =>
            u.name === file.name
              ? { ...u, status: "done", downloadUrl: url }
              : u
          )
        );
      } catch (err) {
        console.error("Upload failed:", err);
        setUploads((prev) =>
          prev.map((u) =>
            u.name === file.name ? { ...u, status: "error" } : u
          )
        );
      }
    }
  };

  return (
    <div className="pdf-uploader">
      <h2>Convert Word to PDF (Batch Upload)</h2>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={(e) => {
          e.preventDefault();
          handleFilesSelect(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <p>Drag & drop DOCX files here, or click to browse</p>
        <input
          type="file"
          accept=".docx"
          id="fileInput"
          multiple
          onChange={(e) => handleFilesSelect(e.target.files)}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput" className="upload-label">
          Browse
        </label>
      </div>

      {files.length > 0 && (
        <ul className="file-list">
          {files.map((file, idx) => (
            <li key={idx}>
              <strong>{file.name}</strong>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}

      <button onClick={handleUpload} disabled={files.length === 0}>
        Upload and Convert
      </button>

      {uploads.map((upload, idx) => (
        <div key={idx} className="upload-status">
          <p>{upload.name}</p>
          {upload.status === "uploading" && (
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${upload.progress}%` }}
              ></div>
            </div>
          )}
          {upload.status === "done" && upload.downloadUrl && (
            <a
              href={upload.downloadUrl}
              download={upload.name.replace(".docx", ".pdf")}
            >
              Download Converted PDF
            </a>
          )}
          {upload.status === "error" && (
            <p className="error">Conversion failed.</p>
          )}
        </div>
      ))}

      <style jsx>{`
        .pdf-uploader {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .drop-zone {
          border: 2px dashed #aaa;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          border-radius: 8px;
          margin-bottom: 15px;
        }
        .upload-label {
          display: inline-block;
          margin-top: 10px;
          padding: 6px 12px;
          background: #007bff;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
        .progress-bar {
          width: 100%;
          background: #e0e0e0;
          border-radius: 4px;
          margin-top: 5px;
        }
        .progress {
          height: 10px;
          background: #28a745;
          border-radius: 4px;
        }
        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default WordToPdfUploader;
