import React from "react";
import PptToPdfUploader from "../../components/PptToPdfUploader";

export const metadata = {
  title: "Free PowerPoint to PDF Converter — Preserve Slides & Design | PDFImageTools",
  description:
    "Convert PowerPoint (PPT, PPTX) to PDF online for free. Keep your slide layouts, images, and design perfectly intact. Fast, secure, and easy to use.",
  alternates: { canonical: "https://pdfimagetools.app/ppt-to-pdf" },
};

export default function PptToPdfPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Convert PowerPoint to PDF</h1>
      <p className="mb-6 text-lg text-gray-600">
        Upload your PowerPoint presentations (PPT or PPTX) and convert them into
        high-quality, print-ready PDFs in seconds.
      </p>
      <PptToPdfUploader />

      {/* How It Works Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Select DOCX files from your computer or drag them into the upload area.</li>
          <li>Our system converts your files instantly while preserving fonts, images, and layout.</li>
          <li>Download each PDF individually or use the batch download option for all files.</li>
          <li>If needed, clear the current files and upload a new batch of Word documents.</li>
        </ol>
      </section>

      {/* Supported Languages */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Supported Languages</h2>
        <p className="text-gray-700">
          English, Deutsch, Español, Français, Indonesia, Italiano, 日本語, 한국어, Nederlands, Polski, Português, Русский, Türkçe, Українська, Tiếng Việt, 中文
        </p>
      </section>

      {/* Privacy & Security */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Privacy & Security</h2>
        <p className="text-gray-700 mb-2">
          All uploaded files are automatically deleted after one hour. Conversion is performed on server copies; your original files remain on your device.
        </p>
        <p className="text-gray-700">
          No email or account is required. Your privacy is our priority.
        </p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
            <strong>Is this service free?</strong> Yes, you can convert Word files to PDF without any charge or watermark.
          </li>
          <li>
            <strong>Do I need an account?</strong> No account or registration is required to use this tool.
          </li>
          <li>
            <strong>Are my files safe?</strong> Files are automatically deleted after 60 minutes. Conversions use copies on the server only.
          </li>
          <li>
            <strong>Which file types are supported?</strong> You can upload DOC and DOCX files, up to 20 files per batch.
          </li>
        </ul>
      </section>
    </main>
  );
}
