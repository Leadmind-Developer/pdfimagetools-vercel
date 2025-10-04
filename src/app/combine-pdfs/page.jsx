import React from 'react';
import PdfCombineUploader from '../../components/PdfCombineUploader'; // adjust path if needed

export const metadata = {
  title: 'Merge PDFs Online — Free, Secure & Fast PDF Combiner | PDFImageTools',
  description: 'Easily merge multiple PDF files into one document. Free, fast, secure PDF combiner. Reorder and combine PDFs online without watermarks or limits.',
  alternates: { canonical: 'https://pdfimagetools.app/combine-pdfs' },
};

export default function CombinePdfsPage() {
  return (
    <main>
      <h1>Merge PDF Files</h1>
      <p>Combine multiple PDF documents into a single file. Drag, reorder, and merge with ease — no limits, no watermarks.</p>
      <PdfCombineUploader />
    </main>
  );
}
