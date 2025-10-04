"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const PdfToPptxUploader = () => {
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState({});
  const [downloadUrls, setDownloadUrls] = useState({});
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const dropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFilesSelect = (selectedFiles) => {
    const pdfFiles = Array.from(selectedFiles).filter(file => file.type === 'application/pdf');
    if (pdfFiles.length > 0) {
      setFiles(pdfFiles);
      setErrors({});
    } else {
      setErrors({ general: 'Please select one or more valid PDF files.' });
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

  const handleUploadAll = async () => {
    setUploading(true);
    setProgresses({});
    setDownloadUrls({});
    setErrors({});

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(
          `${API_BASE}/convert/pdf-to-pptx`,
          formData,
          {
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              setProgresses(prev => ({
                ...prev,
                [file.name]: Math.round((event.loaded * 100) / event.total),
              }));
            },
          }
        );

        const blob = new Blob([response.data], {
          type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        });
        const url = URL.createObjectURL(blob);
        setDownloadUrls(prev => ({ ...prev, [file.name]: url }));
      } catch (err) {
        console.error(`Failed for ${file.name}`, err);
        setErrors(prev => ({ ...prev, [file.name]: 'Upload or conversion failed.' }));
      }
    }

    setUploading(false);
  };

  return (
    <div className="pptx-uploader">
      <h2>Batch Convert PDFs to PPTX</h2>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>Drag & drop multiple PDFs here, or click to browse</p>
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

      {errors.general && <p className="error">{errors.general}</p>}

      {files.length > 0 && (
        <ul className="file-list">
          {files.map((file) => (
            <li key={file.name}>
              <strong>{file.name}</strong>
              {progresses[file.name] !== undefined && (
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progresses[file.name]}%` }}
                  />
                </div>
              )}
              {downloadUrls[file.name] && (
                <div className="download-link">
                  <a href={downloadUrls[file.name]} download={file.name.replace(/\.pdf$/, '.pptx')}>
                    Download PPTX
                  </a>
                </div>
              )}
              {errors[file.name] && <p className="error">{errors[file.name]}</p>}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleUploadAll} disabled={files.length === 0 || uploading}>
        {uploading ? 'Uploading...' : 'Upload and Convert All'}
      </button>

      <style jsx>{`
        .pptx-uploader {
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
          list-style: none;
          padding-left: 0;
          margin-bottom: 15px;
        }
        .file-list li {
          margin-bottom: 10px;
        }
        .progress-bar {
          width: 100%;
          background: #e0e0e0;
          border-radius: 4px;
          margin-top: 5px;
          height: 10px;
        }
        .progress {
          height: 10px;
          background: #28a745;
          border-radius: 4px;
        }
        .error {
          color: red;
          font-size: 0.9em;
        }
        .download-link {
          margin-top: 5px;
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

export default PdfToPptxUploader;
