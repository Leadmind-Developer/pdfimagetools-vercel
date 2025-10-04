"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const ImageToPdfUploader = () => {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const dropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFilesSelect = (selectedFiles) => {
    const validImages = Array.from(selectedFiles).filter(file =>
      file.type.startsWith('image/')
    );
    if (validImages.length > 0) {
      setFiles(validImages);
      setError('');
    } else {
      setError('Please select one or more valid image files.');
    }
  };

  const handleFileChange = (e) => handleFilesSelect(e.target.files);

  const handleDrop = (e) => {
    e.preventDefault();
    handleFilesSelect(e.dataTransfer.files);
    dropRef.current.classList.remove('drag-over');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove('drag-over');
  };

  const handleClear = () => {
    setFiles([]);
    setDownloadUrl('');
    setError('');
  };

  const handleUpload = async () => {
    if (!files.length) return;

    setUploading(true);
    setProgress(0);
    setDownloadUrl('');
    setError('');

    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      const response = await axios.post(
        `${API_BASE}/convert/image-to-pdf`,
        formData,
        {
          responseType: 'blob',
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (event) => {
            const percent = Math.round((event.loaded * 100) / event.total);
            setProgress(percent);
          },
        }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      console.error('Upload failed:', err);
      setError('Upload or conversion failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-to-pdf-uploader">
      <h2>🖼️ Image to PDF – PDF Tools</h2>
      <p>Combine multiple images into a single PDF file.</p>

      <div
        ref={dropRef}
        className={`drop-zone ${uploading ? 'disabled' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>
          {files.length
            ? `${files.length} image(s) selected`
            : 'Drag & drop images here or click to browse'}
        </p>
        <input
          type="file"
          accept="image/*"
          multiple
          id="fileInput"
          disabled={uploading}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput" className="upload-label">Browse</label>
      </div>

      {files.length > 0 && (
        <div className="file-list">
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
          <button onClick={handleClear} disabled={uploading}>
            Clear Files
          </button>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <button onClick={handleUpload} disabled={uploading || files.length === 0}>
        {uploading ? `Uploading... ${progress}%` : 'Convert to PDF'}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {downloadUrl && (
        <div className="download-link">
          <a href={downloadUrl} download="pdf-tools-merged.pdf">
            📥 Download PDF
          </a>
        </div>
      )}

      <style jsx>{`
        .image-to-pdf-uploader {
          max-width: 480px;
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
          transition: background 0.3s ease;
        }
        .drop-zone.disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        .drop-zone.drag-over {
          background-color: #f0f8ff;
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
        .file-list {
          margin-top: 10px;
        }
        .file-list ul {
          padding-left: 20px;
        }
        .file-list button {
          margin-top: 10px;
          background: #dc3545;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        .progress-bar {
          width: 100%;
          background: #e0e0e0;
          border-radius: 4px;
          margin-top: 10px;
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
        .download-link {
          margin-top: 20px;
          font-weight: bold;
        }
        .download-link a {
          color: #28a745;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default ImageToPdfUploader;
