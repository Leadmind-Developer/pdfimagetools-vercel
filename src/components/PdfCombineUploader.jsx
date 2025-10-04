"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const PdfCombineUploader = () => {
  const [files, setFiles] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const dropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFilesSelect = (selectedFiles) => {
    const validPdfs = Array.from(selectedFiles).filter(file =>
      file.type === 'application/pdf'
    );

    if (validPdfs.length > 0) {
      setFiles(validPdfs);
      setError('');
    } else {
      setError('Please select valid PDF files.');
    }
  };

  const handleFileChange = (e) => {
    handleFilesSelect(e.target.files);
  };

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
        `${API_BASE}/convert/pdf-combine`,
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
      setError('Upload or merging failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="pdf-combine-uploader">
      <h2>Combine PDF Files</h2>
      <p>Merge multiple PDFs into a single document in seconds.</p>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag & drop your PDFs here, or click to browse</p>
        <input
          type="file"
          accept=".pdf"
          multiple
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput" className="upload-label">Browse</label>
      </div>

      {files.length > 0 && (
        <p>Selected files: <strong>{files.map(f => f.name).join(', ')}</strong></p>
      )}

      {error && <p className="error">{error}</p>}

      <button onClick={handleUpload} disabled={uploading || files.length === 0}>
        {uploading ? `Uploading... ${progress}%` : 'Upload and Merge'}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {downloadUrl && (
        <div className="download-link">
          <a href={downloadUrl} download="merged.pdf">
            Download Merged PDF
          </a>
        </div>
      )}

      <style jsx>{`
        .pdf-combine-uploader {
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

export default PdfCombineUploader;
