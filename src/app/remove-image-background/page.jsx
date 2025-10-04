import React from 'react';
import RemoveBgUploader from '../../components/RemoveBgUploader';

export const metadata = {
  title: 'Free Online Background Remover — Transparent PNG in Seconds | PDFImageTools',
  description: 'Remove backgrounds from images online for free. Generate high-quality transparent PNGs instantly. Fast, secure, and no signup required.',
  alternates: { canonical: 'https://pdfimagetools.app/remove-image-background' },
};

export default function RemoveImageBackgroundPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Remove Image Background</h1>
      <p className="mb-6 text-lg text-gray-600">
        Quickly remove backgrounds from images and download high-quality, transparent PNG files. Free, fast, secure — no signup needed.
      </p>
      <RemoveBgUploader />
    </main>
  );
}
