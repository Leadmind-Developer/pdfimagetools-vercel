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
    <div className="pdf-uploader max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Convert Word to PDF (Batch Upload)</h2>

      {/* Dropzone */}
      <div
        ref={dropRef}
        className="drop-zone border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition"
        onDrop={(e) => {
          e.preventDefault();
          handleFilesSelect(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p className="text-gray-700 mb-2">Drag & drop DOCX files here, or click to browse</p>
        <input
          type="file"
          accept=".docx"
          id="fileInput"
          multiple
          onChange={(e) => handleFilesSelect(e.target.files)}
          style={{ display: "none" }}
        />
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Upload Button */}
      {files.length > 0 && (
        <button
          onClick={handleUpload}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Upload and Convert
        </button>
      )}

      {/* Upload Previews */}
      {uploads.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {uploads.map((upload, idx) => (
            <div
              key={idx}
              className="upload-card border rounded-lg shadow p-4 flex flex-col justify-between bg-white hover:shadow-lg transition"
            >
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 truncate">{upload.name}</h4>

                {/* Progress Bar */}
                {upload.status === "uploading" && (
                  <div className="w-full bg-gray-200 rounded h-3 mt-2">
                    <div
                      className="bg-green-500 h-3 rounded transition-all"
                      style={{ width: `${upload.progress}%` }}
                    ></div>
                  </div>
                )}

                {/* Success */}
                {upload.status === "done" && upload.downloadUrl && (
                  <p className="text-green-600 font-medium mt-2">Conversion complete!</p>
                )}

                {/* Error */}
                {upload.status === "error" && (
                  <p className="text-red-500 mt-2">Conversion failed.</p>
                )}
              </div>

              {/* Actions */}
              {upload.status === "done" && upload.downloadUrl && (
                <a
                  href={upload.downloadUrl}
                  download={upload.name.replace(".docx", ".pdf")}
                  className="mt-3 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Download PDF
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .drop-zone p {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default WordToPdfUploader;
