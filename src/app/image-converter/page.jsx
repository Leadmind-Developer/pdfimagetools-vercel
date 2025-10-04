// src/app/image-converter/page.tsx
import React from 'react';
import ImageConverter from '../../components/ImageConverter'; // adjust path if needed

export const metadata = {
  title: 'Free Online Image Converter — JPG, PNG, WEBP, SVG | PDFImageTools',
  description: 'Convert images online between JPG, PNG, WEBP, and SVG formats. Free image converter with resize, optimize, and watermark tools. Fast, secure, no signup.',
  alternates: { canonical: 'https://pdfimagetools.app/image-converter' },
};

export default function ImageConverterPage() {
  return (
    <main>
      <h1>Convert Images Online</h1>
      <p>
        Easily convert, resize, and optimize images in popular formats including JPG, PNG, WEBP, and SVG. 
        Add watermarks and fine-tune image quality effortlessly — fast, secure, and free.
      </p>
      <ImageConverter />
    </main>
  );
}
