"use client";

import React, { useState } from "react";
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
  const [language, setLanguage] = useState("English");

  const availableLanguages = [
    "English", "Deutsch", "Español", "Français", "Indonesia",
    "Italiano", "日本語", "한국어", "Nederlands", "Polski",
    "Português", "Русский", "Türkçe", "Українська",
    "Tiếng Việt", "中文"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex justify-between items-start flex-wrap mb-6">
          <div className="flex-1 min-w-[250px]">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Convert Word Files to PDF
            </h1>
            <p className="text-lg text-gray-700">
              Instantly turn your Word documents into high-quality PDFs. Upload multiple DOCX files at once — no email or account required.
            </p>
          </div>

          {/* Language Selector */}
          <div className="mt-4 min-w-[150px]">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        {/* File Uploader */}
        <section className="mb-12">
          <WordToPdfUploader />
        </section>

        {/* Step-by-Step Guide */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Follow these easy steps to convert your Word files to PDF:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Select DOCX files from your computer or drag them into the upload area.</li>
            <li>The system converts files instantly, preserving fonts, images, and layout.</li>
            <li>Download individual PDFs or all at once using the batch download feature.</li>
            <li>Clear the queue to start a new batch if needed.</li>
          </ol>
        </section>

        {/* About Word and PDF */}
        <section className="mt-12 bg-gray-50 py-8 px-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">About Word and PDF</h2>
          <p className="text-gray-700 mb-3">
            Word documents (DOC/DOCX) store text, images, and formatting and are editable. PDFs preserve the exact layout across all devices, making them ideal for sharing and printing.
          </p>
          <p className="text-gray-700">
            Our converter maintains fonts, images, and layout. Rare fonts may be replaced with similar alternatives.
          </p>
        </section>

        {/* Privacy & Security */}
        <section className="mt-12 py-8 px-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Privacy & Security</h2>
          <p className="text-gray-700 mb-3">
            All uploaded files are automatically removed after 60 minutes. Conversions use server copies only — your originals remain on your device.
          </p>
          <p className="text-gray-700">
            No account or email is required. Privacy is guaranteed.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12 py-8">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Is this service free?</h4>
              <p>Yes, convert Word files to PDF with no charge or watermarks.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Do I need an account?</h4>
              <p>No account or registration is required.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Are my files safe?</h4>
              <p>Files are deleted automatically after 60 minutes. Only server copies are used for conversion.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Which file types are supported?</h4>
              <p>You can upload DOC and DOCX files, up to 20 at a time.</p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mt-12 py-8 px-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Other Tools You May Like</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Convert Excel to PDF</li>
            <li>PowerPoint to PDF</li>
            <li>PDF editing tools</li>
            <li>Image to PDF converter</li>
            <li>Document merging and splitting</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
