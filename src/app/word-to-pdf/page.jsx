import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";

export const metadata = {
  title: "Free Word to PDF Converter — High Quality, No Watermark | PDFImageTools",
  description:
    "Convert Word (DOC/DOCX) to PDF online for free. Preserve layout, fonts, and images. Fast, secure, no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  return (
    <div className="word-to-pdf-page">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">DOC to PDF</h1>
        <p className="mb-6 text-lg text-gray-600">
          Use our free online tool to convert your DOC/DOCX files to PDF while keeping document formatting intact. Upload up to 20 files, no email required, and get results instantly.
        </p>

        {/* File Uploader */}
        <WordToPdfUploader />

        {/* Instructions Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">How to Convert DOC to PDF</h2>
          <p className="text-gray-700 mb-4">
            Follow these simple steps to convert your Word documents to PDF:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              Click the <strong>UPLOAD FILES</strong> button or drag your DOC/DOCX files to the drop area.
            </li>
            <li>
              Upload up to 20 files at a time. Conversion starts immediately.
            </li>
            <li>
              Download individual PDFs using the file download button or all files at once with <strong>DOWNLOAD ALL</strong>.
            </li>
            <li>
              If you have more than 20 files, click <strong>CLEAR QUEUE</strong> and repeat the process.
            </li>
          </ol>
        </section>

        {/* Thumbnails / Downloads Section */}
        <section className="mt-12 bg-gray-50 py-8 px-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Download Your PDFs</h2>
          <p className="text-gray-700 mb-3">
            After conversion, use the thumbnails to download individual PDFs. For convenience, click <strong>DOWNLOAD ALL</strong> to receive all files in a compressed ZIP format.
          </p>
        </section>

        {/* Languages Section */}
        <section className="mt-12 py-8 px-4">
          <h2 className="text-2xl font-semibold mb-4">Available Languages</h2>
          <div className="flex flex-wrap gap-2 text-gray-700">
            {[
              "English", "Deutsch", "Español", "Français", "Indonesia",
              "Italiano", "日本語", "한국어", "Nederlands", "Polski",
              "Português", "Русский", "Türkçe", "Українська",
              "Tiếng việt", "中文"
            ].map((lang) => (
              <span key={lang} className="px-3 py-1 bg-gray-200 rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </section>

        {/* About Word & PDF Section */}
        <section className="mt-12 bg-gray-50 py-8 px-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About DOC and PDF</h2>
          <p className="text-gray-700 mb-3">
            A DOC or DOCX file is a Word document created in Microsoft Word or Google Docs. It contains text, images, and formatting information pulled from your system to create a page layout. DOC files are relatively small and easy to edit.
          </p>
          <p className="text-gray-700 mb-3">
            A PDF (Portable Document Format) preserves the document layout and fonts regardless of device or software. PDFs are self-contained, which makes them harder to edit but ideal for sharing or printing.
          </p>
          <p className="text-gray-700">
            Our tool preserves formatting, fonts, images, and layout in your PDFs. Rare fonts may be replaced with similar ones.
          </p>
        </section>

        {/* Safety Section */}
        <section className="mt-12 py-8 px-4">
          <h2 className="text-2xl font-semibold mb-4">Is it Safe?</h2>
          <p className="text-gray-700 mb-3">
            All uploads are automatically deleted after 60 minutes. Conversions are done on our server copies — your original files remain safe on your device.
          </p>
          <p className="text-gray-700">
            You never need to provide an email. Privacy is guaranteed.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 py-8">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Is this tool free?</h4>
              <p>Yes — fully free with no watermarks or subscription.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Do I need an account?</h4>
              <p>No account or sign-up is needed. Start converting immediately.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Are my files secure?</h4>
              <p>Files are deleted automatically after 1 hour. Conversion uses server copies only.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Which formats are supported?</h4>
              <p>Upload DOC or DOCX files. You can process up to 20 files at a time.</p>
            </div>
          </div>
        </section>

        {/* Related Tools / Discover More */}
        <section className="mt-12 py-8 px-4 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Discover More</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Google Docs</li>
            <li>PDF editing software</li>
            <li>Word processor tools</li>
            <li>Conversion and cloud storage</li>
            <li>Document management systems</li>
            <li>Document formatting tips and templates</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
