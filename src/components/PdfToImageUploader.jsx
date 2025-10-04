"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const PdfToImageUploader = () => {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const dropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFileSelect = (selectedFile) => {
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please select a valid PDF file.');
    }
  };

  const handleFileChange = (e) => {
    handleFileSelect(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
    dropRef.current.classList.remove('drag-over');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove('drag-over');
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setDownloadUrl('');
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `${API_BASE}/convert/pdf-to-image`,
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

      const blob = new Blob([response.data], { type: 'application/zip' });
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
    <div className="pdf-image-uploader">
      <h2>Convert PDF to Image</h2>
      <p>This tool converts each page of a PDF into high-quality images (PNG or JPG).</p>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag & drop your PDF here, or click to browse</p>
        <input
          type="file"
          accept=".pdf"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput" className="upload-label">Browse</label>
      </div>

      {file && <p>Selected file: <strong>{file.name}</strong></p>}
      {error && <p className="error">{error}</p>}

      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? `Uploading... ${progress}%` : 'Upload and Convert'}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {downloadUrl && (
        <div className="download-link">
          <a href={downloadUrl} download="images.zip">
            Download ZIP of Images
          </a>
        </div>
      )}

      <style jsx>{`
        .pdf-image-uploader {
          max-width: 400px;
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
        }
        .download-link a {
          color: #28a745;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default PdfToImageUploader;
