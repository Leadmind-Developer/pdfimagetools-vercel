import React from "react";
import WordToPdfUploader from "../../components/WordToPdfUploader";

export const metadata = {
  title: "Free Word to PDF Converter — High Quality, No Watermark | PDFImageTools",
  description:
    "Convert Word (DOCX) to PDF online for free. Preserve layout, fonts, and images. Fast, secure, no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert Word to PDF</h1>
      <p className="mb-6 text-lg text-gray-600">
        Upload your Word documents (DOCX) and convert them to high-quality PDFs instantly.
      </p>
      <WordToPdfUploader />
    </main>
  );
}
