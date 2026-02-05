import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfSplitUploader from "../../components/PdfSplitUploader";
import Link from "next/link";

const t = {
  heroTitle: "Split PDF Files Online",
  heroSubtitle:
    "Extract specific pages from your PDF documents easily. Drag, drop, split instantly — no limits, no watermarks, always free.",

  stepsTitle: "How It Works",
  steps: [
    "Upload your PDF file from your device.",
    "Enter the page range you want to extract.",
    "Click Split and wait a few seconds.",
    "Download your new PDF file.",
  ],

  supportedTitle: "Supported Languages",

  aboutTitle: "Why Split PDFs?",
  aboutText: [
    "Splitting PDFs helps you extract only the pages you need from large documents.",
    "It makes sharing faster by sending smaller files instead of full documents.",
    "Our tool keeps your content intact while separating pages accurately.",
  ],

  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PDFs are automatically deleted after one hour. We never store your files permanently.",
    "Splitting happens securely using temporary copies. No login or email required.",
  ],

  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF splitter free?",
      answer:
        "Yes, it is completely free with no limits, no watermarks, and no hidden charges.",
    },
    {
      question: "Can I extract specific pages?",
      answer:
        "Yes, simply enter the page range and download only the pages you need.",
    },
    {
      question: "Can I split multiple PDFs?",
      answer:
        "Currently one file at a time. Batch splitting is planned soon.",
    },
    {
      question: "Are my files safe?",
      answer:
        "Yes. Files are deleted automatically after 60 minutes and never shared.",
    },
  ],

  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    "Merge PDF",
    "Compress PDF",
    "PDF to Word",
    "Image to PDF",
    "PDF to Images",
  ],
};

export default function SplitPdfPage() {
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
              <PdfSplitUploader />
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
