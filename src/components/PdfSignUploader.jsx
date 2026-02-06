"use client";

import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

export default function MinimalPdfViewer() {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setPages([]);

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

    const renderedPages: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);

      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: ctx,
        viewport
      }).promise;

      renderedPages.push(canvas.toDataURL("image/png"));
    }

    setPages(renderedPages);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <input type="file" accept="application/pdf" onChange={handleUpload} />

      {loading && <p>Loading PDF...</p>}

      <div style={{ marginTop: 20 }}>
        {pages.map((src, i) => (
          <img
            key={i}
            src={src}
            style={{
              width: "100%",
              maxWidth: 800,
              marginBottom: 20,
              display: "block"
            }}
          />
        ))}
      </div>
    </div>
  );
}
