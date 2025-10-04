"use client";

import React, { useState, useCallback } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const RemoveBgUploader = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [results, setResults] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bgColor, setBgColor] = useState('');
  const [bgImage, setBgImage] = useState(null);
  const [error, setError] = useState('');

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((f) => f.type.startsWith('image/'));
    if (!validFiles.length) return setError('Please upload valid image files.');
    setFiles(validFiles);
    setPreviews(validFiles.map((f) => URL.createObjectURL(f)));
    setError('');
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files || []);
    const validFiles = droppedFiles.filter((f) => f.type.startsWith('image/'));
    if (validFiles.length) {
      setFiles(validFiles);
      setPreviews(validFiles.map((f) => URL.createObjectURL(f)));
      setError('');
    } else {
      setError('Please upload valid image files.');
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const handleUpload = async () => {
    if (!files.length) return;
    setUploading(true);
    setResults([]);
    setProgress(0);
    setError('');

    const processedResults = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);
      if (bgColor) formData.append('bg_color', bgColor);
      if (bgImage) formData.append('bg_image', bgImage);

      try {
        const response = await axios.post(
          `${API_BASE}/image/remove-bg`,
          formData,
          {
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );

        const blob = new Blob([response.data], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        processedResults.push({
          url,
          blob,
          name: file.name.replace(/\.[^/.]+$/, '') + '_PDFTools.png'
        });
        setProgress(Math.round(((i + 1) / files.length) * 100));
      } catch (err) {
        console.error(`Error processing ${file.name}:`, err);
        processedResults.push({ error: `Failed to process ${file.name}` });
      }
    }

    setResults(processedResults);
    setUploading(false);
  };

  const handleDownloadAll = async () => {
    const zip = new JSZip();
    for (const result of results) {
      if (result.blob && result.name) {
        zip.file(result.name, result.blob);
      }
    }
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'pdf-tools-processed.zip');
  };

  return (
    <div className="remove-bg-uploader">
      <h2>Remove Background – PDF Tools</h2>

      <div
        className={`drop-zone ${dragActive ? 'active' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p>
          {files.length > 0
            ? `${files.length} file(s) selected`
            : 'Drag & drop images here or click to select'}
        </p>
        <input
          type="file"
          accept="image/*"
          multiple
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput" className="browse-btn">Browse</label>
      </div>

      {error && <p className="error">{error}</p>}

      {previews.length > 0 && (
        <div className="preview">
          <strong>Original Preview:</strong>
          <div className="preview-grid">
            {previews.map((src, i) => (
              <img key={i} src={src} alt={`preview-${i}`} />
            ))}
          </div>
        </div>
      )}

      <div className="option">
        <label>
          Replace Background Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
      </div>

      <div className="option">
        <label>
          Or Upload Background Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBgImage(e.target.files[0])}
          />
        </label>
      </div>

      <button onClick={handleUpload} disabled={!files.length || uploading}>
        {uploading ? 'Processing...' : 'Upload and Process'}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="result">
          <strong>Processed Images:</strong>
          <div className="preview-grid">
            {results.map((res, i) => res.url ? (
              <div key={i} className="result-item">
                <img src={res.url} alt={`result-${i}`} />
                <a
                  href={res.url}
                  download={res.name}
                  className="download-link"
                >
                  Download: {res.name}
                </a>
              </div>
            ) : (
              <p key={i} className="error">{res.error}</p>
            ))}
          </div>

          <button onClick={handleDownloadAll} className="download-all-btn">
            Download All as ZIP
          </button>
        </div>
      )}

      <style jsx>{`
        .remove-bg-uploader {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .drop-zone {
          border: 2px dashed #aaa;
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          transition: background-color 0.3s ease;
          margin-bottom: 1rem;
        }

        .drop-zone.active {
          background-color: #eef6ff;
          border-color: #007bff;
        }

        .browse-btn {
          display: inline-block;
          margin-top: 10px;
          background-color: #007bff;
          color: #fff;
          padding: 8px 14px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
        }

        .preview img,
        .result img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .result-item {
          text-align: center;
        }

        .option {
          margin-bottom: 1rem;
        }

        button {
          padding: 10px 16px;
          background-color: #28a745;
          border: none;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        .download-all-btn {
          margin-top: 1rem;
          background-color: #333;
        }

        button[disabled] {
          background-color: #94d3a2;
          cursor: not-allowed;
        }

        .progress-bar {
          margin: 1rem 0;
          background: #ddd;
          border-radius: 8px;
          overflow: hidden;
          height: 24px;
        }

        .progress {
          background-color: #28a745;
          color: white;
          text-align: center;
          height: 100%;
          line-height: 24px;
          font-weight: bold;
        }

        .result {
          margin-top: 1.5rem;
        }

        .download-link {
          display: block;
          margin-top: 0.5rem;
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
        }

        .error {
          color: red;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default RemoveBgUploader;
