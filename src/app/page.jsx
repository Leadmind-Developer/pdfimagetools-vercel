import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import "./landing.css";

export const metadata = {
  title: "Free PDF & Image Tools – Convert, Edit & Optimize",
  description:
    "Free online tools to convert and edit PDFs, Word, Excel, and images. Fast, secure, and no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/" },
  openGraph: {
    title: "Free PDF, Word, Excel & Image Tools — Convert, Edit & Optimize | PDFImageTools",
    description:
      "Instantly convert, edit, and optimize PDF, Word, PowerPoint, Excel, and image files online. Fast, secure, and 100% free.",
    url: "https://pdfimagetools.app/",
    images: [
      {
        url: "https://pdfimagetools.app/og/homepage-preview.png",
        width: 1200,
        height: 630,
        alt: "PDFImageTools — Free PDF & Image Converter",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF, Word, Excel & Image Tools — Convert, Edit & Optimize | PDFImageTools",
    description:
      "Fast, privacy-friendly tools to convert PDFs, Word, Excel, and images. No signup required.",
    images: ["https://pdfimagetools.app/og/homepage-preview.png"],
  },
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />

      <section className="features-section">
        <Features />
      </section>

      <CTA />

      {/* About Section */}
      <section className="about-section bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About PDFImageTools
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            PDFImageTools is a free, browser-based suite for converting, editing, and
            optimizing PDF and image files. Our tools are designed for speed, simplicity,
            and privacy — no account or software installation required. Whether you’re
            converting PDFs to Word, merging files, or removing image backgrounds, all
            processing happens securely in your browser.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="faq-item">
              <h4 className="text-xl font-semibold text-gray-900">
                Is PDFImageTools really free?
              </h4>
              <p className="text-gray-700">
                Yes — all our tools are completely free to use with no hidden fees,
                limits, or subscriptions.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="text-xl font-semibold text-gray-900">
                Do I need to create an account?
              </h4>
              <p className="text-gray-700">
                No sign-up or login is required. You can use every feature instantly.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="text-xl font-semibold text-gray-900">
                Are my files secure?
              </h4>
              <p className="text-gray-700">
                Absolutely. Most operations happen locally in your browser, meaning your
                files never leave your device.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="text-xl font-semibold text-gray-900">
                Which formats do you support?
              </h4>
              <p className="text-gray-700">
                PDFImageTools supports popular document and image formats — including
                PDF, DOCX, PPTX, XLSX, JPG, PNG, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

