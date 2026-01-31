// src/app/ppt-to-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PptToPdfUploader from "../../components/PptToPdfUploader";
import Link from "next/link";

export const metadata = {
  title: "Free PowerPoint to PDF Converter — Preserve Slides & Design | PDFImageTools",
  description:
    "Convert PowerPoint (PPT, PPTX) to PDF online for free. Keep your slide layouts, images, and design perfectly intact. Fast, secure, and easy to use.",
  alternates: { canonical: "https://pdfimagetools.app/ppt-to-pdf" },
};

const t = {
  heroTitle: "Convert PowerPoint to PDF Online",
  heroSubtitle:
    "Easily convert PPT and PPTX presentations into high-quality PDFs while preserving slide layouts, images, and designs — fast, secure, and free.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your PowerPoint file(s) (PPT or PPTX).",
    "The system converts your slides into PDFs instantly while keeping layouts and designs intact.",
    "Download individual PDFs or all files in a batch.",
    "Clear files and upload a new batch whenever needed.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Convert PowerPoint to PDF?",
  aboutText: [
    "Preserve your presentation's formatting, images, and layout in a universally compatible PDF format.",
    "Share or print presentations easily without worrying about software compatibility.",
    "No installation required — convert everything online securely in your browser.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PPT/PPTX and generated PDFs are automatically deleted after one hour.",
    "Conversions use temporary server files only; your original files never leave your device.",
    "No account or email is required. Your privacy is fully protected.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is this PowerPoint to PDF converter free?",
      answer: "Yes, conversion is completely free with no watermarks or limits.",
    },
    {
      question: "Do I need an account?",
      answer: "No account or registration is required to use this tool.",
    },
    {
      question: "Are my files secure?",
      answer: "Absolutely. Files are deleted automatically after 60 minutes and are never shared.",
    },
    {
      question: "Which file formats are supported?",
      answer: "You can upload PPT and PPTX files. Multiple files are supported for batch conversion.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: ["PDF to Word", "PDF to Excel", "PDF to Image", "PDF Merge", "Image to PDF"],
};

export default function PptToPdfPage() {
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
              <PptToPdfUploader />
            </div>

            {/* DonationSupport placed here */}
           <div style={{ marginTop: "3rem" }}>
             <DonationSupport />
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
              {[
                "English",
                "Spanish",
                "French",
                "German",
                "Chinese",
                "Japanese",
                "Italian",
                "Portuguese",
              ].map((lang) => (
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
