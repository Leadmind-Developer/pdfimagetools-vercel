// src/app/unlock-pdf/page.jsx
import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfPasswordUploader from "../../components/PdfPasswordUploader";
import Link from "next/link";

export const metadata = {
  title: "Unlock PDF Online — Remove PDF Password Free | PDFImageTools",
  description:
    "Remove password protection from your PDF files online. Fast, secure, and free PDF unlock tool with no limits or watermarks.",
};

const t = {
  heroTitle: "Unlock Password Protected PDFs",
  heroSubtitle:
    "Remove password protection from your PDF files quickly and safely. Upload your PDF, enter the password, and download the unlocked document instantly.",
  stepsTitle: "How to Unlock a PDF",
  steps: [
    "Upload the password-protected PDF file.",
    "Enter the correct password.",
    "Click Unlock PDF to process the file.",
    "Download the unlocked PDF instantly.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Unlock PDFs?",
  aboutText: [
    "Unlocking PDFs allows you to edit, merge, compress, or convert protected documents.",
    "Many secured PDFs cannot be modified until password protection is removed.",
    "Our tool safely removes password protection once the correct password is provided.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded files are automatically deleted after one hour.",
    "Your files are processed securely and never permanently stored.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF unlock tool free?",
      answer:
        "Yes. You can unlock PDF files completely free with no limits or hidden charges.",
    },
    {
      question: "Do I need the password to unlock a PDF?",
      answer:
        "Yes. The correct password is required to remove PDF protection.",
    },
    {
      question: "Will unlocking damage the PDF?",
      answer:
        "No. The original content and formatting remain unchanged.",
    },
    {
      question: "Are my files safe?",
      answer:
        "Yes. All files are deleted automatically after processing and are never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "Lock PDF",
    "Compress PDF",
    "Merge PDF",
    "Split PDF",
    "PDF to Word",
  ],
};

export default function UnlockPdfPageSEO() {
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
              <PdfPasswordUploader mode="unlock" />
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
