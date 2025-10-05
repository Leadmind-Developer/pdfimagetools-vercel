import React from 'react';
import PdfToExcelUploader from '../../components/PdfToExcelUploader';

export const metadata = {
  title: 'Free PDF to Excel Converter — Fast, Accurate & Secure | PDFImageTools',
  description:
    'Convert PDF files to editable Excel (XLSX) online for free. Extract tables accurately while keeping data structure intact. No signup, no watermarks.',
  alternates: { canonical: 'https://pdfimagetools.app/pdf-to-excel' },
};

export default function PdfToExcelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PDF to Excel</h1>
      <p className="mb-6 text-lg text-gray-600">
        Convert your PDF files into fully editable Excel spreadsheets (.xlsx). 
        Preserve tables, columns, and data accuracy — no watermarks, no limits.
      </p>
      <PdfToExcelUploader />
    </main>
  );
}
