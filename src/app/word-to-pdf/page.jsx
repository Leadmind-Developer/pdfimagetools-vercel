// src/app/word-to-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";
import Link from "next/link";

// English translations only
const t = {
  heroTitle: "Convert Word Files to PDF",
  heroSubtitle: "Instantly transform your Word documents into high-quality PDF files. Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.",
  stepsTitle: "How It Works",
  steps: [
    "Select DOCX files from your computer or drag them into the upload area.",
    "Our system converts your files instantly while preserving fonts, images, and layout.",
    "Download each PDF individually or use the batch download option for all files.",
    "If needed, clear the current files and upload a new batch of Word documents.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Understanding Word and PDF",
  aboutText: [
    "Word documents (DOC/DOCX) store your text, images, and formatting. They are editable and ideal for content creation.",
    "PDFs, on the other hand, are designed to preserve the exact layout and appearance across all devices. They are ideal for sharing and printing documents while ensuring consistency.",
    "Our tool carefully maintains your document formatting, but uncommon fonts may be substituted for the closest available alternatives.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded files are automatically deleted after one hour. Conversion is performed on server copies; your original files remain on your device.",
    "No email or account is required. Your privacy is our priority.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    { question: "Is this service free?", answer: "Yes, you can convert Word files to PDF without any charge or watermark." },
    { question: "Do I need an account?", answer: "No account or registration is required to use this tool." },
    { question: "Are my files safe?", answer: "Files are automatically deleted after 60 minutes. Conversions use copies on the server only." },
    { question: "Which file types are supported?", answer: "You can upload DOC and DOCX files, up to 20 files per batch." },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "Convert Excel to PDF",
    "PowerPoint to PDF",
    "PDF editing tools",
    "Image to PDF converter",
    "Document merging and splitting",
  ],
};

export default function WordToPdfPage() {
  const containerStyle = { maxWidth: "1200px", margin: "0 auto", padding: "2rem" };
  const sectionStyle = { marginBottom: "4rem", padding: "2rem", borderRadius: "8px", backgroundColor: "#f9f9f9" };
  const headingStyle = { fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", color: "#222", textAlign: "center" };
  const subHeadingStyle = { fontSize: "1.25rem", marginBottom: "1.5rem", color: "#555", lineHeight: 1.6, textAlign: "center" };
  const listStyle = { paddingLeft: "1.5rem", marginBottom: "1rem", color: "#555", fontSize: "1.1rem", lineHeight: 1.6 };
  const badgeStyle = { display: "inline-block", padding: "0.5rem 1rem", margin: "0.25rem", borderRadius: "999px", backgroundColor: "#e0e0e0", fontSize: "0.9rem", color: "#333" };
  const homeButtonStyle = { display: "inline-block", padding: "0.5rem 1rem", marginBottom: "2rem", borderRadius: "5px", backgroundColor: "#0070f3", color: "#fff", textDecoration: "none", fontWeight: 600 };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home Link */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/" style={homeButtonStyle}>PDFImageTools Home</Link>
          </div>

          {/* Hero Section */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <WordToPdfUploader />
            </div>
          </section>

          {/* Steps */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.stepsTitle}</h2>
            <ol style={listStyle}>
              {t.steps.map((step, idx) => <li key={idx}>{step}</li>)}
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
            <ul style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6, paddingLeft: "1.5rem" }}>
              {t.relatedTools.map((tool, idx) => <li key={idx}>{tool}</li>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
