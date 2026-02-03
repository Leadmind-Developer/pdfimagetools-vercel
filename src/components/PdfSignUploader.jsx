"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const PdfSignUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const pdfDropRef = useRef(null);
  const sigDropRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFileSelect = (files, type) => {
    const file = files[0];
    if (!file) return;

    if (type === 'pdf' && file.type !== 'application/pdf') {
      setError('Please select a valid PDF file.');
      return;
    }

    if (type === 'signature' && !['image/png', 'image/jpeg'].includes(file.type)) {
      setError('Please select a PNG or JPG signature image.');
      return;
    }

    setError('');
    type === 'pdf' ? setPdfFile(file) : setSignatureFile(file);
  };

  const handlePdfChange = (e) => handleFileSelect(e.target.files, 'pdf');
  const handleSignatureChange = (e) => handleFileSelect(e.target.files, 'signature');

  const handleDrop = (e, type) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files, type);
    if (type === 'pdf') pdfDropRef.current.classList.remove('drag-over');
    else sigDropRef.current.classList.remove('drag-over');
  };

  const handleDragOver = (e, ref) => {
    e.preventDefault();
    ref.current.classList.add('drag-over');
  };

  const handleDragLeave = (ref) => ref.current.classList.remove('drag-over');

  const handleUpload = async () => {
    if (!pdfFile || !signatureFile) return;

    setUploading(true);
    setProgress(0);
    setDownloadUrl('');
    setError('');

    const formData = new FormData();
    formData.append('file', pdfFile);
    formData.append('signature_file', signatureFile);

    try {
      const response = await axios.post(
        `${API_BASE}/convert/pdf-sign`,
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
      setError('Upload or signing failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="pdf-sign-uploader">
      <h2>Sign PDF Online</h2>
      <p>Add your e-signature to a PDF quickly and securely.</p>

      {/* PDF Upload */}
      <div
        ref={pdfDropRef}
        className="drop-zone"
        onDrop={(e) => handleDrop(e, 'pdf')}
        onDragOver={(e) => handleDragOver(e, pdfDropRef)}
        onDragLeave={() => handleDragLeave(pdfDropRef)}
      >
        <p>Drag & drop your PDF here, or click to browse</p>
        <input
          type="file"
          accept=".pdf"
          id="pdfInput"
          onChange={handlePdfChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="pdfInput" className="upload-label">Browse PDF</label>
      </div>

      {pdfFile && <p>Selected PDF: <strong>{pdfFile.name}</strong></p>}

      {/* Signature Upload */}
      <div
        ref={sigDropRef}
        className="drop-zone"
        onDrop={(e) => handleDrop(e, 'signature')}
        onDragOver={(e) => handleDragOver(e, sigDropRef)}
        onDragLeave={() => handleDragLeave(sigDropRef)}
      >
        <p>Drag & drop your signature image here, or click to browse</p>
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          id="sigInput"
          onChange={handleSignatureChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="sigInput" className="upload-label">Browse Signature</label>
      </div>

      {signatureFile && <p>Selected Signature: <strong>{signatureFile.name}</strong></p>}

      {error && <p className="error">{error}</p>}

      <button onClick={handleUpload} disabled={uploading || !pdfFile || !signatureFile}>
        {uploading ? `Uploading... ${progress}%` : 'Upload and Sign PDF'}
      </button>

      {uploading && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {downloadUrl && (
        <div className="download-link">
          <a href={downloadUrl} download="signed.pdf">Download Signed PDF</a>
        </div>
      )}

      <style jsx>{`
        .pdf-sign-uploader {
          max-width: 450px;
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
        button {
          margin-top: 10px;
          padding: 8px 16px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:disabled {
          background: #aaa;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default PdfSignUploader;
