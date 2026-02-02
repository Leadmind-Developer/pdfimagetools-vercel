import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

export const metadata = {
  title: "Free PDF, Word, PowerPoint, Excel & Image Tools — PDFImageTools",
  description:
    "Convert and edit PDF, Word, Excel, and image files instantly. Free online tools for PDF to Word, PowerPoint to PDF, Excel to PDF, background remover, and more.",
  alternates: { canonical: "https://pdfimagetools.app/" },
};

const tools = [
  { name: "Merge PDF", slug: "mergepdf" },
  { name: "PDF to Word", slug: "pdf-to-word" },
  { name: "PDF to Excel", slug: "pdf-to-excel" },
  { name: "PDF to PPT", slug: "pdf-to-ppt" },
  { name: "PDF to Image", slug: "pdf-to-image" },
  { name: "Image to PDF", slug: "image-to-pdf" },
  { name: "Word to PDF", slug: "word-to-pdf" },
  { name: "Excel to PDF", slug: "excel-to-pdf" },
  { name: "PPT to PDF", slug: "ppt-to-pdf" },
  { name: "Remove Image Background", slug: "remove-image-background" },
  { name: "Resize Passport Photo", slug: "resize-passport-photo" },
  { name: "Image Converter", slug: "image-converter" },
];

export default function LandingPage() {
  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gray-50 py-20 flex flex-col items-center text-center">
        <img
          src="/pdfdoc.webp"
          alt="PDF Tools Hero"
          className="w-full max-w-3xl object-cover rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Free PDF, Word, Excel & Image Tools
        </h1>
        <p className="text-gray-700 max-w-2xl text-lg">
          Convert, edit, merge, and optimize documents and images instantly. Fast, secure, and completely free — no signup required.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(tool => (
              <a
                key={tool.slug}
                href={`/blog/${tool.slug}`}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50"
              >
                <div className="w-full h-40 relative">
                  <img
                    src="/pdfdoc.webp"
                    alt={tool.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to use {tool.name} step by step, with FAQs and tips.
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About PDFImageTools</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            PDFImageTools is a free, browser-based suite for converting, editing, and
            optimizing PDF and image files. No installation or signup required. All processing
            is fast, secure, and privacy-first.
          </p>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}
