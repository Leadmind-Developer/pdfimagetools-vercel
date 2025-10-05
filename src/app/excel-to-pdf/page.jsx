import React from "react";
import ExcelToPdfUploader from "../../components/ExcelToPdfUploader";

export const metadata = {
  title: "Free Excel to PDF Converter — Keep Formatting & Tables | PDFImageTools",
  description:
    "Convert Excel (XLS, XLSX) to PDF online for free. Preserve tables, formulas, and cell formatting. Fast, secure, no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/excel-to-pdf" },
};

export default function ExcelToPdfPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert Excel to PDF</h1>
      <p className="mb-6 text-lg text-gray-600">
        Upload your Excel files (XLS or XLSX) and convert them to professional, print-ready PDF files instantly.
      </p>
      <ExcelToPdfUploader />
    </main>
  );
}
