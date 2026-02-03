import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfCompressUploader from "../../components/PdfCompressUploader";

const t = {
  heroTitle: "Compress PDF Files Online – Free & Fast",
  heroSubtitle:
    "Reduce PDF file size while maintaining excellent visual quality. No registration, no watermarks, no limits — process your documents securely in your browser.",
  whyTitle: "Why Compress Your PDFs?",
  whyItems: [
    "Send large files via email without hitting size restrictions",
    "Upload documents faster to websites, cloud storage or forms",
    "Save valuable disk space on your phone, tablet or computer",
    "Speed up website loading times when embedding PDFs",
    "Make documents easier to share on WhatsApp, Telegram, etc.",
  ],
  howTitle: "How to Compress a PDF – 3 Simple Steps",
  howSteps: [
    "Drag & drop or click to upload your PDF file(s)",
    "Choose compression level (balanced, strong, extreme)",
    "Click Compress → wait a few seconds → download the optimized file",
  ],
  previewTitle: "Live Preview of Compressed PDF",
  previewDescription:
    "Once your file is processed, you'll see a preview of the first page, file size before/after, and compression percentage saved — so you can decide whether to download or try a different setting.",
  privacyTitle: "Your Files Stay Private & Secure",
  privacyPoints: [
    "Files are processed in-memory or temporarily on secure servers",
    "All uploaded and compressed files are automatically deleted within 60 minutes",
    "We never store, share or analyze your documents",
    "No login, no email, no tracking required",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      q: "Is this PDF compressor really free?",
      a: "Yes — 100% free, unlimited usage, no hidden fees, no watermarks ever added.",
    },
    {
      q: "What compression levels are available?",
      a: "You can usually choose between Balanced (recommended), Strong, and Maximum compression — depending on how small you need the file to be.",
    },
    {
      q: "Will text and images stay sharp after compression?",
      a: "Yes — our tool is tuned to preserve readability and visual quality. For most documents the difference is barely noticeable.",
    },
    {
      q: "Can I compress multiple PDFs at once?",
      a: "Currently the tool processes one file at a time. Batch support is planned for a future update.",
    },
    {
      q: "Is my file safe?",
      a: "Yes. Files are deleted automatically shortly after processing. No one — including us — can access them afterward.",
    },
  ],
  relatedTitle: "More Free PDF Tools You Might Like",
  relatedTools: [
    { name: "Merge PDF Files", href: "/combine-pdfs" },
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
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">

          {/* Home link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition"
            >
              ← PDFImageTools Home
            </Link>
          </div>

          {/* Hero + Uploader */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight min-h-[120px]">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 min-h-[60px]">
              {t.heroSubtitle}
            </p>

            <div className="max-w-2xl mx-auto mb-12 min-h-[180px]">
              <PdfCompressUploader />
            </div>

            <div className="mt-10">
              <DonationSupport />
            </div>
          </section>

          {/* Preview Area */}
          <section className="mb-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t.previewTitle}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.previewDescription}
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 min-h-[320px] aspect-[4/3] flex flex-col items-center justify-center text-gray-500">
              <p className="text-lg font-medium">Preview appears here after compression</p>
              <p className="text-sm mt-2">
                (First page • Original size: — • Compressed: — • Saved: —%)
              </p>
            </div>
          </section>

          {/* How it works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">{t.howTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {t.howSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-center min-h-[220px] flex flex-col"
                >
                  <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg font-medium text-gray-800 mt-auto">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why compress */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">{t.whyTitle}</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {t.whyItems.map((item, i) => (
                <li key={i} className="flex items-start text-lg text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Privacy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">{t.privacyTitle}</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
              <ul className="space-y-4 text-gray-700 text-lg">
                {t.privacyPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">{t.faqTitle}</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {t.faq.map((item, i) => (
                <details
                  key={i}
                  className="bg-white rounded-lg shadow-sm border overflow-hidden transition-all duration-300"
                >
                  <summary className="font-medium text-lg px-6 py-4 cursor-pointer flex justify-between items-center">
                    {item.q}
                    <span className="text-gray-400 transition-transform duration-300">▼</span>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-700 border-t">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">{t.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {t.relatedTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="block bg-white hover:bg-blue-50 border border-gray-200 rounded-lg px-5 py-4 text-center font-medium text-blue-700 transition"
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
