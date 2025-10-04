// src/app/pdf-to-image/page.tsx
import React from 'react';
import PdfToImageUploader from '../../components/PdfToImageUploader';

export const metadata = {
  title: 'Free PDF to Image Converter — Export High-Quality JPG & PNG | PDFImageTools',
  description: 'Convert PDF pages to high-quality images (JPG, PNG) online. Free, fast, secure PDF to image converter with no signup required.',
  alternates: { canonical: 'https://pdfimagetools.app/pdf-to-image' },
};

export default function PdfToImagePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PDF to Images</h1>
      <p className="mb-6 text-lg text-gray-600">
        Easily convert PDF pages into high-resolution JPG or PNG images. Extract pages as images quickly — free, secure, and no signup needed.
      </p>
      <PdfToImageUploader />
    </main>
  );
}
