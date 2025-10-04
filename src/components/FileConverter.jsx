"use client";

import React, { useState } from "react";
import axios from "axios";

const conversionOptions = [
  { value: "pdf_to_word", label: "PDF → Word" },
  { value: "pdf_to_pptx", label: "PDF → PowerPoint" },
  { value: "remove_bg", label: "Remove Image Background" },
  { value: "resize_image", label: "Resize Image" },
];

export default function FileConverter() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const [files, setFiles] = useState([]);
  const [conversionType, setConversionType] = useState("pdf_to_word");
  const [removeBg, setRemoveBg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloadLinks, setDownloadLinks] = useState([]);

  // Resize image states
  const [resizeWidth, setResizeWidth] = useState(600);
  const [resizeHeight, setResizeHeight] = useState(600);
  const [resizeFormat, setResizeFormat] = useState("png");
  const [wmPosition, setWmPosition] = useState("bottom-right");
  const [wmOpacity, setWmOpacity] = useState(1.0);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
    setDownloadLinks([]);
  };

  const handleConvert = async () => {
    if (!files.length) return;

    setLoading(true);
    const newLinks = [];

    const isBatch = conversionType === "pdf_to_word" || conversionType === "pdf_to_pptx";

    const targetFiles = isBatch ? files : [files[0]];

    for (const file of targetFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("conversion_type", conversionType);

      if (conversionType === "remove_bg") formData.append("remove_bg", removeBg);

      let endpoint = "";
      if (conversionType === "resize_image") {
        const params = new URLSearchParams({
          width: resizeWidth.toString(),
          height: resizeHeight.toString(),
          format: resizeFormat,
          wm_position: wmPosition,
          wm_opacity: wmOpacity.toString(),
        });
        endpoint = `${API_BASE}/image/resize-custom-bg?${params}`;
      } else {
        endpoint = `${API_BASE}/convert`;
      }

      try {
        const response = await axios.post(endpoint, formData, { responseType: "blob" });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        newLinks.push({ name: file.name, url });
      } catch (err) {
        console.error(`Failed to convert ${file.name}:`, err);
        newLinks.push({ name: file.name, url: null });
      }
    }

    setDownloadLinks(newLinks);
    setLoading(false);
  };

  const isBatch = conversionType === "pdf_to_word" || conversionType === "pdf_to_pptx";

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">📄 File Converter Tool</h2>

      <label className="block mb-2 font-medium">Choose File{isBatch ? "s" : ""}</label>
      <input
        type="file"
        multiple={isBatch}
        accept=".pdf,.docx,.pptx,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="mb-4"
      />

      <label className="block mb-2 font-medium">Conversion Type</label>
      <select
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
        className="mb-4 w-full border px-3 py-2 rounded"
      >
        {conversionOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {conversionType === "remove_bg" && (
        <label className="block mb-4">
          <input
            type="checkbox"
            checked={removeBg}
            onChange={(e) => setRemoveBg(e.target.checked)}
            className="mr-2"
          />
          Remove background from images
        </label>
      )}

      {conversionType === "resize_image" && (
        <div className="mb-4 space-y-2">
          <label className="block font-medium">Resize Width</label>
          <input
            type="number"
            value={resizeWidth}
            onChange={(e) => setResizeWidth(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded"
          />

          <label className="block font-medium">Resize Height</label>
          <input
            type="number"
            value={resizeHeight}
            onChange={(e) => setResizeHeight(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded"
          />

          <label className="block font-medium">Output Format</label>
          <select
            value={resizeFormat}
            onChange={(e) => setResizeFormat(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
          </select>

          <label className="block font-medium">Watermark Position</label>
          <select
            value={wmPosition}
            onChange={(e) => setWmPosition(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="top-left">Top Left</option>
            <option value="top-right">Top Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="bottom-right">Bottom Right</option>
          </select>

          <label className="block font-medium">Watermark Opacity (0 - 1)</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="1"
            value={wmOpacity}
            onChange={(e) => setWmOpacity(parseFloat(e.target.value))}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      )}

      <button
        onClick={handleConvert}
        disabled={loading || !files.length}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Convert & Download"}
      </button>

      {downloadLinks.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Download Converted Files:</h3>
          <ul className="list-disc list-inside space-y-1">
            {downloadLinks.map(({ name, url }, i) =>
              url ? (
                <li key={i}>
                  <a href={url} download={name} className="text-green-600 underline">
                    ✅ {name}
                  </a>
                </li>
              ) : (
                <li key={i} className="text-red-600">
                  ❌ Failed to convert {name}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
