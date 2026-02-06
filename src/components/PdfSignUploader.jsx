"use client";

import React, { useState, useRef, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export default function PdfViewer() {
  const viewerRef = useRef(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (!pdfFile || !viewerRef.current) return;

    const loadPdf = async () => {
      const url = URL.createObjectURL(pdfFile);
      const pdf = await pdfjsLib.getDocument(url).promise;

      const renderedPages = [];
      const containerWidth = viewerRef.current.clientWidth;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const vp = page.getViewport({ scale: 1 });
        const scale = containerWidth / vp.width;
        const scaledVp = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        canvas.width = scaledVp.width;
        canvas.height = scaledVp.height;
        const ctx = canvas.getContext("2d");

        await page.render({ canvasContext: ctx, viewport: scaledVp }).promise;

        renderedPages.push({ index: i - 1, canvas });
      }

      setPages(renderedPages);
    };

    loadPdf();
  }, [pdfFile]);

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
      />

      <div
        ref={viewerRef}
        style={{
          border: "1px solid #ccc",
          marginTop: 10,
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
        {pages.map((p) => (
          <div key={p.index} style={{ marginBottom: 20 }}>
            <canvas
              width={p.canvas.width}
              height={p.canvas.height}
              ref={(el) => {
                if (el) el.getContext("2d").drawImage(p.canvas, 0, 0);
              }}
              style={{ display: "block", margin: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
