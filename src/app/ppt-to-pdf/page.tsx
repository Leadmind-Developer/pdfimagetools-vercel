"use client";
import React from "react";
import PptToPdfUploader from "../../components/PptToPdfUploader";

export const metadata = {
  title: "Free PowerPoint to PDF Converter — Preserve Slides & Design | PDFImageTools",
  description:
    "Convert PowerPoint (PPT, PPTX) to PDF online for free. Keep your slide layouts, images, and design perfectly intact. Fast, secure, and easy to use.",
  alternates: { canonical: "https://pdfimagetools.app/ppt-to-pdf" },
};

export default function PptToPdfPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PowerPoint to PDF</h1>
      <p className="mb-6 text-lg text-gray-600">
        Upload your PowerPoint presentations (PPT or PPTX) and convert them into
        high-quality, print-ready PDFs in seconds.
      </p>
      <PptToPdfUploader />
    </main>
  );
}
