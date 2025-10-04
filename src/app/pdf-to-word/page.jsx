import React from 'react';
import PdfToWordUploader from '../../components/PdfToWordUploader';

export const metadata = {
  title: 'Free PDF to Word Converter — Fast, Accurate & Secure | PDFImageTools',
  description: 'Convert PDF to Word (DOCX) online for free. High-quality, accurate results. Fast, secure, no signup required, no watermarks.',
  alternates: { canonical: 'https://pdfimagetools.app/pdf-to-word' },
};

export default function PdfToWordPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PDF to Word</h1>
      <p className="mb-6 text-lg text-gray-600">
        Convert your PDF files to editable Word documents (DOCX) effortlessly. No limits, no watermarks, and batch uploads supported.
      </p>
      <PdfToWordUploader />
    </main>
  );
}
