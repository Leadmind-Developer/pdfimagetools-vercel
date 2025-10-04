"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';

const PassportPhotoUploader = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [watermarkImage, setWatermarkImage] = useState(null);
  const [watermarkText, setWatermarkText] = useState('');
  const [watermarkPosition, setWatermarkPosition] = useState('bottom-right');
  const [watermarkOpacity, setWatermarkOpacity] = useState(1.0);

  const [resizeWidth, setResizeWidth] = useState(600);
  const [resizeHeight, setResizeHeight] = useState(600);
  const [format, setFormat] = useState('jpeg');
  const [usePassportPreset, setUsePassportPreset] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dropRef = useRef(null);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError(null);
  };

  const handlePresetToggle = () => {
    const enabled = !usePassportPreset;
    setUsePassportPreset(enabled);
    if (enabled) {
      setResizeWidth(600);
      setResizeHeight(600);
      setFormat('jpeg');
      setWatermarkOpacity(1.0);
      setWatermarkPosition('center');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current?.classList.remove('drag-over');
    if (e.dataTransfer.files.length > 0) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current?.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    dropRef.current?.classList.remove('drag-over');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setError('Please upload an image before submitting.');
      return;
    }

    setUploadProgress(0);
    setError(null);
    setResultUrl(null);
    setLoading(true);

    const formData = new FormData();
    formData.append('file', imageFile);
    if (watermarkImage) formData.append('watermark', watermarkImage);
    if (watermarkText) formData.append('wm_text', watermarkText);

    const params = new URLSearchParams({
      width: resizeWidth,
      height: resizeHeight,
      format,
      wm_position: watermarkPosition,
      wm_opacity: watermarkOpacity,
      wm_text: watermarkText,
      use_passport_preset: usePassportPreset.toString(),
    });

    try {
      const response = await axios.post(
        `${API_BASE}/image/resize-custom-bg?${params.toString()}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setUploadProgress(percent);
          },
        }
      );

      if (response.data.success && response.data.path) {
        const path = response.data.path.replace(/\\/g, '/');
        const imageUrl = `${API_BASE}/${path}`;
        setResultUrl(imageUrl);
      } else {
        setError('Unexpected server response.');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setError('Upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resize-uploader">
      <h2>Resize & Watermark Image</h2>

      <form onSubmit={handleSubmit}>
        <div
          ref={dropRef}
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <p>Drag & drop an image here, or click to upload</p>
          <input type="file" accept="image/*" id="uploadInput" style={{ display: 'none' }} onChange={handleFileChange} />
          <label htmlFor="uploadInput" className="upload-label">Browse</label>
        </div>

        <div className="section">
          <label>
            <input type="checkbox" checked={usePassportPreset} onChange={handlePresetToggle} />
            Use Passport Photo Preset
          </label>

          {previewUrl && (
            <div style={{ position: 'relative', width: 300, height: 300, margin: '1rem 0' }}>
              <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {usePassportPreset && (
                <img
                  src="/passport_template.jpg"
                  alt="Overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.6,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </div>
          )}
        </div>

        <div className="form-grid">
          <label>
            Width:
            <input type="number" value={resizeWidth} onChange={(e) => setResizeWidth(Number(e.target.value))} disabled={usePassportPreset} />
          </label>
          <label>
            Height:
            <input type="number" value={resizeHeight} onChange={(e) => setResizeHeight(Number(e.target.value))} disabled={usePassportPreset} />
          </label>
          <label>
            Format:
            <select value={format} onChange={(e) => setFormat(e.target.value)} disabled={usePassportPreset}>
              <option value="jpeg">JPEG</option>
              <option value="png">PNG</option>
              <option value="webp">WEBP</option>
            </select>
          </label>
          <label>
            Watermark Image:
            <input type="file" accept="image/*" onChange={(e) => setWatermarkImage(e.target.files[0])} />
          </label>
          <label>
            Or Watermark Text:
            <input type="text" value={watermarkText} onChange={(e) => setWatermarkText(e.target.value)} />
          </label>
          <label>
            Watermark Position:
            <select value={watermarkPosition} onChange={(e) => setWatermarkPosition(e.target.value)}>
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="center">Center</option>
              <option value="tile">Tiled</option>
            </select>
          </label>
          <label>
            Watermark Opacity:
            <input type="number" step="0.1" min="0" max="1" value={watermarkOpacity} onChange={(e) => setWatermarkOpacity(parseFloat(e.target.value))} />
          </label>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button type="submit" disabled={!imageFile || loading}>
            {loading ? 'Processing...' : 'Upload & Start'}
          </button>
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {resultUrl && (
        <div style={{ marginTop: '1rem' }}>
          <img src={resultUrl} alt="Processed Result" style={{ maxWidth: '100%' }} />
          <p>
            <a
              href={resultUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Image
            </a>
          </p>
        </div>
      )}

      <style jsx>{`
        .resize-uploader {
          max-width: 600px;
          margin: auto;
        }
        .drop-zone {
          border: 2px dashed #aaa;
          padding: 20px;
          text-align: center;
          margin-bottom: 15px;
          border-radius: 6px;
          cursor: pointer;
        }
        .drop-zone.drag-over {
          background: #eef9ff;
        }
        .upload-label {
          display: inline-block;
          background: #007bff;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          margin-top: 10px;
          cursor: pointer;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 1rem;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e0e0e0;
          margin-top: 10px;
        }
        .progress {
          height: 100%;
          background: #007bff;
        }
      `}</style>
    </div>
  );
};

export default PassportPhotoUploader;
