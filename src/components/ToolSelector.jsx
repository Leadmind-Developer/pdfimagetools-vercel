"use client";

import React, { useState, useEffect } from 'react';
import {
  FaFileWord, FaFilePowerpoint, FaImage, FaFilePdf, FaFileArchive,
  FaEraser, FaIdCard, FaMagic, FaChevronDown, FaChevronUp, FaSyncAlt
} from 'react-icons/fa';

import PdfToPptxUploader from './PdfToPptxUploader';
import PdfToWordUploader from './PdfToWordUploader';
import RemoveBgUploader from './RemoveBgUploader';
import PassportPhotoUploader from './PassportPhotoUploader';
import PdfToImageUploader from './PdfToImageUploader';
import ImageToPdfUploader from './ImageToPdfUploader';
import PdfCombineUploader from './PdfCombineUploader';
import ImageConverter from './ImageConverter';

const tools = {
  "PDF to Word": { component: <PdfToWordUploader />, icon: <FaFileWord /> },
  "PDF to PPT": { component: <PdfToPptxUploader />, icon: <FaFilePowerpoint /> },
  "PDF to Image": { component: <PdfToImageUploader />, icon: <FaImage /> },
  "Image to PDF": { component: <ImageToPdfUploader />, icon: <FaFilePdf /> },
  "Combine PDFs": { component: <PdfCombineUploader />, icon: <FaFileArchive /> },
  "Remove Image Background": { component: <RemoveBgUploader />, icon: <FaEraser /> },
  "Resize Passport Photo": { component: <PassportPhotoUploader />, icon: <FaIdCard /> },
  "Image Converter": { component: <ImageConverter />, icon: <FaSyncAlt /> },
};

const tips = {
  "PDF to Word": "💡 Tip: Upload multiple PDFs for batch conversion.",
  "PDF to PPT": "💡 Tip: Best for slide-based PDF content.",
  "PDF to Image": "💡 Tip: Each page will be saved as a separate high-resolution image.",
  "Image to PDF": "💡 Tip: You can reorder the images before converting.",
  "Combine PDFs": "💡 Tip: Drag to reorder files before merging.",
  "Remove Image Background": "💡 Tip: PNG output supports transparent backgrounds.",
  "Resize Passport Photo": "💡 Tip: Use white background for compliance with standards.",
  "Image Converter": "💡 Tip: Convert images to or from SVG, PNG, JPG, or WebP formats."
};

const ToolSelector = () => {
  const [selected, setSelected] = useState("PDF to Word");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>📁 PDF & 🖼️ Image Utility Tools</h1>
        <p style={{ fontSize: '1.1rem', color: isDarkMode ? '#ccc' : '#555' }}>
          Welcome to your all-in-one document and image utility suite. Instantly convert, merge, and edit files online — no installation required.
        </p>
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          style={{
            marginTop: '1rem',
            padding: '0.4rem 1rem',
            backgroundColor: isDarkMode ? '#444' : '#ddd',
            color: isDarkMode ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button
          onClick={() => setIsExpanded(prev => !prev)}
          style={{
            marginBottom: '1rem',
            padding: '0.4rem 1rem',
            backgroundColor: isDarkMode ? '#555' : '#eee',
            color: isDarkMode ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isExpanded ? <><FaChevronUp /> Hide Tools</> : <><FaChevronDown /> Show Tools</>}
        </button>

        {isExpanded && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {Object.entries(tools).map(([tool, { icon }]) => (
              <button
                key={tool}
                onClick={() => setSelected(tool)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: selected === tool ? '#007bff' : isDarkMode ? '#333' : '#f0f0f0',
                  color: selected === tool ? '#fff' : isDarkMode ? '#eee' : '#000',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  minWidth: '150px',
                  justifyContent: 'center'
                }}
              >
                {icon} {tool}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '1.5rem' }}>
        {tools[selected].component}
        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: isDarkMode ? '#aaa' : '#666' }}>
          {tips[selected]}
        </p>
      </div>

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: isDarkMode ? '#332e00' : '#fffbe6',
          color: isDarkMode ? '#ffe58f' : '#333',
          borderLeft: '5px solid #ffc107',
          borderRadius: '4px'
        }}
      >
        ⚠️ <strong>Disclaimer:</strong> All uploaded files are automatically deleted from our servers after 1 hour to ensure your privacy.
      </div>

      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '0.9rem', color: isDarkMode ? '#aaa' : '#888' }}>
        <p>
          <a href="/privacy.html" style={{ color: '#007bff', textDecoration: 'none', marginRight: '1rem' }}>Privacy Policy</a>
          |
          <a href="/terms.html" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '1rem' }}>Terms of Service</a>
        </p>
        <p>© {new Date().getFullYear()} Leadmind Developer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ToolSelector;
