import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfCompressUploader from "../../components/PdfCompressUploader";

const t = {
  heroTitle: "Compress PDF Files Online — Free & Fast",
  heroSubtitle:
    "Reduce PDF file size without losing quality. No signup, no watermark, fully secure. Works instantly in your browser.",

  whyTitle: "Why Compress Your PDFs?",
  whyItems: [
    "Send files easily by email and messaging apps",
    "Upload faster to websites and cloud storage",
    "Save storage space on your devices",
    "Improve website loading speed",
    "Share documents smoothly on mobile",
  ],

  howTitle: "How It Works",
  howSteps: [
    "Upload your PDF",
    "Choose compression strength",
    "Download the smaller file",
  ],

  previewTitle: "Preview Your Compressed PDF",
  previewDescription:
    "See file size before and after compression plus a quick preview of the first page.",

  privacyTitle: "Privacy & Security",
  privacyPoints: [
    "Files are processed securely",
    "Automatically deleted after processing",
    "No storage, tracking, or sharing",
    "No login required",
  ],

  faqTitle: "FAQs",
  faq: [
    {
      q: "Is PDF compression free?",
      a: "Yes — unlimited and completely free with no watermarks.",
    },
    {
      q: "Will quality be affected?",
      a: "You can balance size reduction and quality for best results.",
    },
    {
      q: "Are my files safe?",
      a: "Yes. Files are removed automatically after compression.",
    },
    {
      q: "Can I compress multiple PDFs?",
      a: "Currently one at a time. Batch compression is coming soon.",
    },
  ],

  relatedTitle: "More Free Tools",
  relatedTools: [
    { name: "Merge PDFs", href: "/combine-pdfs" },
    { name: "Split PDF", href: "/split-pdf" },
    { name: "PDF to Word", href: "/pdf-to-word" },
    { name: "Image to PDF", href: "/image-to-pdf" },
    { name: "PDF to Images", href: "/pdf-to-images" },
  ],
};

export default function CompressPdfPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">

        {/* Main container with readable width */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Home link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to PDFImageTools
            </Link>
          </div>

          {/* Hero */}
          <section className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>

            <div className="max-w-xl mx-auto mb-8">
              <PdfCompressUploader />
            </div>

            <DonationSupport />
          </section>

          {/* Preview */}
          <section className="mb-14 bg-white rounded-xl border p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">
              {t.previewTitle}
            </h2>

            <p className="text-gray-600 mb-5 max-w-xl mx-auto">
              {t.previewDescription}
            </p>

            <div className="border-2 border-dashed rounded-lg p-6 sm:p-10 text-gray-500 flex flex-col items-center justify-center aspect-video">
              <p className="font-medium">Preview will appear here</p>
              <p className="text-sm mt-1">
                Original size → Compressed size → % saved
              </p>
            </div>
          </section>

          {/* How it works */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              {t.howTitle}
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {t.howSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="font-medium text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why */}
          <section className="mb-14 bg-white rounded-xl border p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              {t.whyTitle}
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-700">
              {t.whyItems.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-3">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Privacy */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
              {t.privacyTitle}
            </h2>

            <div className="bg-white border rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
              <ul className="space-y-3 text-gray-700">
                {t.privacyPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-3">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
              {t.faqTitle}
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {t.faq.map((item, i) => (
                <details
                  key={i}
                  className="bg-white border rounded-lg p-4"
                >
                  <summary className="font-medium cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-gray-700">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
              {t.relatedTitle}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {t.relatedTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="bg-white border rounded-lg px-4 py-3 text-center text-blue-600 hover:bg-blue-50 font-medium"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
