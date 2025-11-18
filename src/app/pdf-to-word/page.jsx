// src/app/pdf-to-word/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import PdfToWordUploader from "../../components/PdfToWordUploader";
import Link from "next/link";

export const metadata = {
  title: "Free PDF to Word Converter — Fast, Accurate & Secure | PDFImageTools",
  description:
    "Convert PDF to Word (DOCX) online for free. High-quality, accurate results. Fast, secure, no signup required, no watermarks.",
  alternates: { canonical: "https://pdfimagetools.app/pdf-to-word" },
};

const t = {
  heroTitle: "Convert PDF to Word Online",
  heroSubtitle:
    "Quickly convert PDF files into fully editable Word documents (DOCX). Preserve layouts, tables, and formatting — free, secure, and no signup required.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your PDF file(s).",
    "Select conversion options if available.",
    "Click the convert button to generate Word documents.",
    "Download your DOCX instantly or start a new conversion.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Convert PDF to Word?",
  aboutText: [
    "Easily transform PDFs into editable Word files for reports, assignments, or document editing.",
    "Keep layouts, tables, and formatting intact for professional-quality results.",
    "No software installation required — everything works directly in your browser.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PDFs and generated Word files are deleted automatically after one hour. Nothing is stored permanently.",
    "Conversion is secure and handled via temporary files. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF-to-Word converter free?",
      answer: "Yes, it’s completely free — no limits, no watermarks, and no hidden fees.",
    },
    {
      question: "Can I convert multi-page PDFs?",
      answer: "Yes, all pages in your PDF are converted into Word format.",
    },
    {
      question: "Are my files safe?",
      answer: "Absolutely. Files are deleted automatically after 60 minutes and never shared.",
    },
    {
      question: "Do I need to install software?",
      answer: "No, the converter works entirely online without installation.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: ["PDF to Excel", "PDF to PowerPoint", "Compress PDF", "PDF to Image", "PDF Merge"],
};

export default function PdfToWordPage() {
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
              <PdfToWordUploader />
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
