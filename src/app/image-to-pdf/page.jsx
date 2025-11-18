// src/app/image-to-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import ImageToPdfUploader from "../../components/ImageToPdfUploader";
import Link from "next/link";

export const metadata = {
  title: "Free Image to PDF Converter — JPG, PNG to PDF Online | PDFImageTools",
  description:
    "Convert images (JPG, PNG, and more) to a single PDF. Free online tool to reorder, combine, and generate PDFs from images easily and securely.",
  alternates: { canonical: "https://pdfimagetools.app/image-to-pdf" },
};

const t = {
  heroTitle: "Convert Images to PDF Online",
  heroSubtitle:
    "Quickly convert JPG, PNG, and other image formats into a single PDF file. Upload, reorder, and generate PDFs with ease — free, secure, and no signup required.",
  stepsTitle: "How It Works",
  steps: [
    "Upload one or more images (JPG, PNG, or other supported formats).",
    "Reorder the images as desired using drag-and-drop.",
    "Click the convert button to generate a PDF.",
    "Download your PDF instantly or start a new conversion.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Convert Images to PDF?",
  aboutText: [
    "Combining multiple images into a single PDF keeps your files organized and easy to share.",
    "PDFs preserve image quality and layout for professional presentations, reports, and portfolios.",
    "Our tool allows easy reordering and merging without software installation.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded images are deleted automatically after one hour. Nothing is stored permanently.",
    "PDF generation is secure and handled via temporary files. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the image-to-PDF converter free?",
      answer: "Yes, it’s completely free — no limits, no watermarks, and no hidden fees.",
    },
    {
      question: "Which image formats are supported?",
      answer: "JPG, PNG, and several other common image formats are supported.",
    },
    {
      question: "Can I reorder images before conversion?",
      answer: "Yes, the tool allows you to drag and reorder images before generating the PDF.",
    },
    {
      question: "Are my files safe?",
      answer: "Absolutely. Files are deleted automatically after 60 minutes and are never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "PDF to Word",
    "PDF to Images",
    "Compress PDF",
    "Image to PDF",
    "PDF Merge",
  ],
};

export default function ImageToPdfPage() {
  const containerStyle = { maxWidth: "1200px", margin: "0 auto", padding: "2rem" };
  const sectionStyle = {
    marginBottom: "4rem",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };
  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#222",
    textAlign: "center",
  };
  const subHeadingStyle = {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    color: "#555",
    lineHeight: 1.6,
    textAlign: "center",
  };
  const listStyle = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: 1.6,
  };
  const badgeStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    margin: "0.25rem",
    borderRadius: "999px",
    backgroundColor: "#e0e0e0",
    fontSize: "0.9rem",
    color: "#333",
  };
  const homeButtonStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    marginBottom: "2rem",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home Link */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/" style={homeButtonStyle}>
              PDFImageTools Home
            </Link>
          </div>

          {/* Hero */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <ImageToPdfUploader />
            </div>
          </section>

          {/* Steps */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.stepsTitle}</h2>
            <ol style={listStyle}>
              {t.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          {/* Supported Languages */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.supportedTitle}</h2>
            <div style={{ textAlign: "center" }}>
              {["English", "Spanish", "French", "German", "Chinese", "Japanese"].map((lang) => (
                <span key={lang} style={badgeStyle}>
                  {lang}
                </span>
              ))}
            </div>
          </section>

          {/* About */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.aboutTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Privacy */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.privacyTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.privacyText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.faqTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.faq.map((item, idx) => (
                <div key={idx}>
                  <h4 style={{ fontWeight: 600 }}>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.relatedTitle}</h2>
            <ul style={listStyle}>
              {t.relatedTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
