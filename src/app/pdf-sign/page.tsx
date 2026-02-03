import React, { CSSProperties } from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfSignUploader from "../../components/PdfSignUploader";
import Link from "next/link";

// English translations only
const t = {
  heroTitle: "Sign PDF Files Online – e-Signature",
  heroSubtitle:
    "Add your signature to PDF documents instantly. Drag, drop, and sign securely — no limits, no watermarks, always free.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your PDF document from your device.",
    "Upload your signature image (PNG or JPG).",
    "Position your signature if needed (optional in future updates).",
    "Click the Sign PDF button to apply your e-signature and download your signed PDF.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Use e-Signature PDFs?",
  aboutText: [
    "Signing PDFs digitally saves time compared to printing, signing, and scanning.",
    "It ensures your documents are legally ready to share with colleagues or clients.",
    "Our tool keeps the original quality of your PDF — no compression unless you choose otherwise.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PDFs and signature files are automatically deleted after one hour. We never store signed documents permanently.",
    "Signing happens securely on the server using temporary copies. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF sign tool free?",
      answer:
        "Yes, the service is 100% free with no limits, no watermarks, and no hidden costs.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "PDF files for documents, PNG or JPG for signature images.",
    },
    {
      question: "Can I sign multiple PDFs at once?",
      answer:
        "Currently, only one PDF can be signed at a time. Batch signing is planned for a future update.",
    },
    {
      question: "Are my files safe?",
      answer:
        "Absolutely. Files are deleted automatically after 60 minutes and are never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "Merge PDF",
    "Compress PDF",
    "PDF to Word",
    "Split PDF",
    "Image to PDF",
  ],
};

export default function PdfSignPage() {
 const containerStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
};

const sectionStyle: CSSProperties = {
  marginBottom: "4rem",
  padding: "2rem",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

const headingStyle: CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: "#222",
  textAlign: "center",
};

const subHeadingStyle: CSSProperties = {
  fontSize: "1.25rem",
  marginBottom: "1.5rem",
  color: "#555",
  lineHeight: 1.6,
  textAlign: "center",
};

const listStyle: CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "1rem",
  color: "#555",
  fontSize: "1.1rem",
  lineHeight: 1.6,
};

const badgeStyle: CSSProperties = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  margin: "0.25rem",
  borderRadius: "999px",
  backgroundColor: "#e0e0e0",
  fontSize: "0.9rem",
  color: "#333",
};

const homeButtonStyle: CSSProperties = {
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
          <section style={{ marginBottom: "4rem", textAlign: "center" } as CSSProperties}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <PdfSignUploader />
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
