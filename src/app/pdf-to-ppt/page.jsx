import React from 'react';
import PdfToPptxUploader from '../../components/PdfToPptxUploader';

export const metadata = {
  title: 'Free PDF to PowerPoint Converter — Convert PDF to PPTX Online | PDFImageTools',
  description: 'Convert PDFs to editable PowerPoint (PPTX) slides online. Fast, secure, and 100% free PDF to PowerPoint converter. No signup required.',
  alternates: { canonical: 'https://pdfimagetools.app/pdf-to-ppt' },
};

export default function PdfToPptPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PDF to PowerPoint</h1>
      <p className="mb-6 text-lg text-gray-600">
        Easily convert PDF files into fully editable PowerPoint presentations (PPTX). Quick, free, and secure — no signup needed.
      </p>
      <PdfToPptxUploader />
    </main>
  );
}
