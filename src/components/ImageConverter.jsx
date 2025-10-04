"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import "./ImageConverter.css";

const TOOL_TABS = ["Convert", "Resize", "Optimize", "Watermark"];

const SVG_PRESETS = {
  "Clean Lines": "contour",
  "Color Art": "color",
  "Photo Embed": "embed",
};

const SVG_MODE_TIPS = {
  contour: "Black & white contours extracted from the image.",
  color: "Contours filled with average colors from the image.",
  embed: "Embeds the original image as a base64 raster inside the SVG.",
};

const ImageConverter = () => {
  const [selectedTab, setSelectedTab] = useState("Convert");
  const [files, setFiles] = useState([]);
  const [format, setFormat] = useState("png");
  const [svgMode, setSvgMode] = useState("contour");
  const [resizeWidth, setResizeWidth] = useState("");
  const [resizeHeight, setResizeHeight] = useState("");
  const [watermarkText, setWatermarkText] = useState("");
  const [history, setHistory] = useState([]);
  const [showSVGCode, setShowSVGCode] = useState({});
  const fileInputRef = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const handleFiles = (fileList) => {
    const fileArr = Array.from(fileList);
    setFiles((prev) => [...prev, ...fileArr]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleProcess = async () => {
    const newHistory = [];

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      let queryParams = `?task=${selectedTab.toLowerCase()}&output_format=${format}`;
      if (selectedTab === "Resize") {
        formData.append("width", resizeWidth);
        formData.append("height", resizeHeight);
      }
      if (selectedTab === "Watermark") {
        formData.append("watermark_text", watermarkText);
      }
      if (format === "svg") {
        queryParams += `&svg_mode=${svgMode}`;
      }

      const url = `${API_BASE}/image/convert${queryParams}`;

      try {
        const res = await axios.post(url, formData, { responseType: "blob" });
        const blobUrl = URL.createObjectURL(res.data);
        const fileName = file.name.replace(/\.[^/.]+$/, "");

        const text = format === "svg" ? await res.data.text() : null;

        newHistory.push({
          name: `${fileName}.${format}`,
          url: blobUrl,
          blob: res.data,
          rawSVG: text,
        });
      } catch (err) {
        console.error("Processing error:", err);
        alert(`Failed to process ${file.name}`);
      }
    }

    setHistory((prev) => [...prev, ...newHistory]);
    setFiles([]);
  };

  const handleBatchDownload = async () => {
    const zip = new JSZip();
    for (let item of history) {
      const data = await item.blob.arrayBuffer();
      zip.file(item.name, data);
    }
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "converted_images.zip");
  };

  const toggleSvgView = (index) => {
    setShowSVGCode((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="converter-container">
      <div className="tabs">
        {TOOL_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={tab === selectedTab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <h3>Drag & Drop Files or</h3>
        <div className="button-group">
          <button onClick={handleUploadClick}>Choose Files</button>
          <button onClick={() => setFiles([])}>Clear Files</button>
        </div>
        <input
          type="file"
          multiple
          accept="image/*,.svg"
          ref={fileInputRef}
          onChange={(e) => handleFiles(e.target.files)}
          hidden
        />

        {selectedTab === "Convert" && (
          <div className="compact-select-row">
            <div className="dropdown-group">
              <label>Format:</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="webp">WEBP</option>
                <option value="svg">SVG</option>
              </select>
            </div>

            {format === "svg" && (
              <>
                <div className="dropdown-group" title={SVG_MODE_TIPS[svgMode]}>
                  <label>SVG Mode:</label>
                  <select value={svgMode} onChange={(e) => setSvgMode(e.target.value)}>
                    <option value="contour">Contour</option>
                    <option value="color">Color</option>
                    <option value="embed">Embed</option>
                  </select>
                </div>

                <div className="dropdown-group">
                  <label>Preset:</label>
                  <select
                    onChange={(e) => setSvgMode(e.target.value)}
                    value={svgMode}
                  >
                    {Object.entries(SVG_PRESETS).map(([label, value]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>
        )}

        {selectedTab === "Resize" && (
          <div className="resize-inputs">
            <label>
              Width:
              <input
                type="number"
                value={resizeWidth}
                onChange={(e) => setResizeWidth(e.target.value)}
              />
            </label>
            <label>
              Height:
              <input
                type="number"
                value={resizeHeight}
                onChange={(e) => setResizeHeight(e.target.value)}
              />
            </label>
          </div>
        )}

        {selectedTab === "Watermark" && (
          <div className="watermark-input">
            <label>
              Watermark Text:
              <input
                type="text"
                value={watermarkText}
                onChange={(e) => setWatermarkText(e.target.value)}
              />
            </label>
          </div>
        )}

        {files.length > 0 && (
          <>
            <div className="preview-section">
              <h4>Selected Files</h4>
              <div className="preview-grid">
                {files.map((file, idx) => (
                  <div key={idx} className="preview-box">
                    <p>{file.name}</p>
                    {file.type.startsWith("image/") && (
                      <img src={URL.createObjectURL(file)} alt="preview" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button className="convert-btn" onClick={handleProcess}>
              {selectedTab}
            </button>
          </>
        )}
      </div>

      {history.length > 0 && (
        <div className="history">
          <div className="history-header">
            <h4>Processed Files</h4>
            <button onClick={handleBatchDownload}>Download All (ZIP)</button>
          </div>

          <div className="preview-grid">
            {history.map((item, i) => (
              <div key={i} className="preview-box">
                <p>{item.name}</p>
                {item.name.endsWith(".svg") ? (
                  <>
                    <object
                      data={item.url}
                      type="image/svg+xml"
                      width="100%"
                      height="100%"
                    />
                    <button onClick={() => toggleSvgView(i)}>
                      {showSVGCode[i] ? "Hide Code" : "View Code"}
                    </button>
                    {showSVGCode[i] && item.rawSVG && (
                      <pre className="svg-code">{item.rawSVG}</pre>
                    )}
                  </>
                ) : (
                  <img src={item.url} alt={`processed-${i}`} />
                )}

                <a href={item.url} download={item.name}>Download</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
