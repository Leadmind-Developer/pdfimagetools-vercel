// src/app/excel-to-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import ExcelToPdfUploader from "../../components/ExcelToPdfUploader";
import Link from "next/link";

export const metadata = {
  title: "Free Excel to PDF Converter — Keep Formatting & Tables | PDFImageTools",
  description:
    "Convert Excel (XLS, XLSX) to PDF online for free. Preserve tables, formatting, and layout. Fast, secure, no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/excel-to-pdf" },
};

const t = {
  heroTitle: "Convert Excel to PDF Online",
  heroSubtitle:
    "Upload any XLS or XLSX file and convert it to a clean, print-ready PDF. Tables, formatting, fonts, and layout are preserved perfectly.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your Excel file (XLS or XLSX).",
    "Review the preview and ensure your data looks correct.",
    "Click the convert button to generate a PDF version.",
    "Download your PDF instantly or convert another file.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Convert Excel to PDF?",
  aboutText: [
    "PDF is the best format for sharing spreadsheets without losing formatting, alignment, column sizing, or styling.",
    "Converting Excel to PDF ensures your data displays the same way on every device, even if the recipient doesn’t have Excel.",
    "This tool preserves all tables, colors, borders, merged cells, and layout to maintain a professional look.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "Your Excel files are deleted automatically after one hour. Nothing is stored permanently.",
    "Conversions happen securely using temporary files. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the Excel to PDF converter free?",
      answer:
        "Yes, it’s completely free—no limits, no watermarks, and no hidden fees.",
    },
    {
      question: "Will my tables and formatting be preserved?",
      answer:
        "Yes. We maintain your layout exactly as it appears in Excel.",
    },
    {
      question: "Are my files safe?",
      answer:
        "Absolutely. Files are deleted automatically after 60 minutes.",
    },
    {
      question: "Can I convert multiple sheets?",
      answer:
        "Yes. All sheets are included in your PDF unless your Excel settings specify otherwise.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "PDF to Word",
    "PDF to Images",
    "Compress PDF",
    "Word to PDF",
    "PPT to PDF",
  ],
};

export default function ExcelToPdfPage() {
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
              <ExcelToPdfUploader />
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
