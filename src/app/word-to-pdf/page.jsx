import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";

export const metadata = {
  title: "Free Word to PDF Converter | PDFImageTools",
  description:
    "Quickly convert Word documents (DOC/DOCX) to PDF online. Maintain layouts, fonts, and images. No signup required, fast and secure.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* HERO / INTRO */}
      <section className="container mx-auto px-4 py-12 text-center md:text-left">
        <div className="bg-green-200 text-green-900 p-2 mb-4 text-center font-bold rounded">
          HERO SECTION RENDERED
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Convert Word Files to PDF
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0">
          Instantly transform your Word documents into high-quality PDF files. Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.
        </p>
      </section>

      {/* UPLOADER */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-blue-200 text-blue-900 p-2 mb-4 text-center font-bold rounded">
          UPLOADER SECTION RENDERED
        </div>
        <WordToPdfUploader />
      </main>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg max-w-5xl mb-12">
        <div className="bg-yellow-200 text-yellow-900 p-2 mb-4 text-center font-bold rounded">
          HOW IT WORKS SECTION RENDERED
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
          How It Works
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-3xl mx-auto text-lg">
          <li>Select DOCX files from your computer or drag them into the upload area.</li>
          <li>Our system converts your files instantly while preserving fonts, images, and layout.</li>
          <li>Download each PDF individually or use the batch download option for all files.</li>
          <li>If needed, clear the current files and upload a new batch of Word documents.</li>
        </ol>
      </section>

      {/* SUPPORTED LANGUAGES */}
      <section className="container mx-auto px-4 py-12 max-w-5xl mb-12">
        <div className="bg-purple-200 text-purple-900 p-2 mb-4 text-center font-bold rounded">
          SUPPORTED LANGUAGES SECTION RENDERED
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
          Supported Languages
        </h2>
        <div className="flex flex-wrap gap-2 justify-center text-gray-700">
          {[
            "English", "Deutsch", "Español", "Français", "Indonesia",
            "Italiano", "日本語", "한국어", "Nederlands", "Polski",
            "Português", "Русский", "Türkçe", "Українська",
            "Tiếng Việt", "中文"
          ].map((lang) => (
            <span key={lang} className="px-4 py-2 bg-gray-200 rounded-full text-sm md:text-base">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-lg max-w-5xl mb-12">
        <div className="bg-pink-200 text-pink-900 p-2 mb-4 text-center font-bold rounded">
          FAQ SECTION RENDERED
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto text-gray-700 text-lg">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Is this service free?</h4>
            <p>Yes, you can convert Word files to PDF without any charge or watermark.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Do I need an account?</h4>
            <p>No account or registration is required to use this tool.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Are my files safe?</h4>
            <p>Files are automatically deleted after 60 minutes. Conversions use copies on the server only.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Which file types are supported?</h4>
            <p>You can upload DOC and DOCX files, up to 20 files per batch.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
