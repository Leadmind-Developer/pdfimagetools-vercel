// src/app/image-to-pdf/page.tsx
import React from 'react';
import ImageToPdfUploader from '../../components/ImageToPdfUploader'; // adjust path if needed

export const metadata = {
  title: 'Free Image to PDF Converter — JPG, PNG to PDF Online | PDFImageTools',
  description: 'Convert images (JPG, PNG, and more) to a single PDF. Free online tool to reorder, combine, and generate PDFs from images easily and securely.',
  alternates: { canonical: 'https://pdfimagetools.app/image-to-pdf' },
};

export default function ImageToPdfPage() {
  return (
    <main>
      <h1>Convert Images to PDF</h1>
      <p>
        Quickly convert JPG, PNG, and other image formats into a single PDF file. 
        Upload, reorder, and generate PDFs with ease — free, secure, and no signup required.
      </p>
      <ImageToPdfUploader />
    </main>
  );
}
