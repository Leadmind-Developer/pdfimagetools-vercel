import React from 'react';
import PassportPhotoUploader from '../../components/PassportPhotoUploader';

export const metadata = {
  title: 'Free Passport Photo Resizer — Standard Sizes for Visa & ID | PDFImageTools',
  description: 'Easily resize passport photos to meet standard requirements for passports, visas, and ID cards. Free, fast, and accurate online tool. No signup needed.',
  alternates: { canonical: 'https://pdfimagetools.app/resize-passport-photo' },
};

export default function ResizePassportPhotoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Resize Passport Photo</h1>
      <p className="mb-6 text-lg text-gray-600">
        Resize your passport, visa, or ID photos to meet official size standards quickly and accurately. Free, fast, secure — no signup required.
      </p>
      <PassportPhotoUploader />
    </main>
  );
}
