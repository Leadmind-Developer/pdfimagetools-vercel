import React from 'react';
import WordToPdfUploader from '../../components/WordToPdfUploader';

export const metadata = {
  title: 'Free Word to PDF Converter — Fast, Accurate & Secure | PDFImageTools',
  description:
    'Convert Word (DOCX) to PDF online for free. Maintain formatting, layout, and fonts. Fast, secure, no signup required, no watermarks.',
  alternates: { canonical: 'https://pdfimagetools.app/word-to-pdf' },
};

export default function WordToPdfPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert Word to PDF</h1>
      <p className="mb-6 text-lg text-gray-600">
        Convert your Word documents (DOCX) to high-quality PDF files while preserving layout and fonts. No limits, no watermarks, and batch uploads supported.
      </p>
      <WordToPdfUploader />
    </main>
  );
}
