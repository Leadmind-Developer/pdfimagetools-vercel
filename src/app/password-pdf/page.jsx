// src/app/password-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfPasswordUploader from "../../components/PdfPasswordUploader";
import Link from "next/link";

export const metadata = {
  title: "Lock & Unlock PDFs Online — Secure PDF Files Free | PDFImageTools",
  description:
    "Secure your PDF files with a password or remove password protection online. Free, fast, and safe PDF password tool.",
};

// English text only
const t = {
  heroTitle: "Lock & Unlock PDF Files Online",
  heroSubtitle:
    "Protect your PDF files with a password or remove password protection instantly. Drag, drop, and process safely — no limits, no watermarks, always free.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your PDF file from your device.",
    "Enter a password to lock or unlock your PDF.",
    "Click the appropriate button to process the file.",
    "Download your secured or unlocked PDF.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Lock PDFs?",
  aboutText: [
    "Locking PDFs helps protect sensitive information from unauthorized access.",
    "Unlocking PDFs allows you to edit, merge, or compress secured documents.",
    "All processing happens securely in your browser or server without storing your files permanently.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PDFs are automatically deleted after one hour. We never store your files permanently.",
    "Processing happens securely on temporary copies. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF password tool free?",
      answer:
        "Yes, it is completely free with no limits, no watermarks, and no hidden charges.",
    },
    {
      question: "Can I lock a PDF with any password?",
      answer: "Yes, you can choose any password to secure your PDF file.",
    },
    {
      question: "What if I forget my PDF password?",
      answer:
        "You will not be able to unlock the PDF without the correct password. Always keep it safe.",
    },
    {
      question: "Are my PDFs safe?",
      answer:
        "Yes. Files are deleted automatically after 60 minutes and are never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "Compress PDF",
    "Merge PDF",
    "Split PDF",
    "PDF to Word",
    "PDF to Images",
  ],
};

export default function PasswordPdfPageSEO() {
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
              <PdfPasswordUploader mode="lock" />
            </div>

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
              {["English"].map((lang) => (
                <span key={lang} style={badgeStyle}>{lang}</span>
              ))}
            </div>
          </section>

          {/* About */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.aboutTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.aboutText.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
          </section>

          {/* Privacy */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.privacyTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.privacyText.map((p, idx) => <p key={idx}>{p}</p>)}
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
              {t.relatedTools.map((tool, idx) => <li key={idx}>{tool}</li>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
