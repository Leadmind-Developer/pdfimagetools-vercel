// src/app/resize-passport-photo/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PassportPhotoUploader from "../../components/PassportPhotoUploader";
import Link from "next/link";

export const metadata = {
  title: "Passport Photo Resizer — Visa & ID Sizes Online | PDFImageTools",
  description:
    "Resize passport photos online to official visa and ID sizes. Fast, accurate, and free with no signup.",
  alternates: { canonical: "https://pdfimagetools.app/resize-passport-photo" },
};

const t = {
  heroTitle: "Resize Passport Photos Online",
  heroSubtitle:
    "Quickly resize your passport, visa, or ID photos to meet official size standards — fast, secure, and free.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your passport, visa, or ID photo (JPG, PNG, or other supported formats).",
    "Select the required size standard for your document.",
    "The system automatically resizes and formats the image.",
    "Download your resized photo instantly, ready for printing or online submission.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Use Our Passport Photo Resizer?",
  aboutText: [
    "Ensure your photos meet official requirements for passports, visas, and ID cards.",
    "High-quality, accurate resizing without the need for software installation.",
    "Free, fast, and easy to use in any browser.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded images and resized photos are automatically deleted after one hour.",
    "No files are stored permanently, and no account or email is required.",
    "Your privacy and security are fully protected.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is this passport photo resizer free?",
      answer: "Yes, it is completely free — no watermarks or limits.",
    },
    {
      question: "Which image formats are supported?",
      answer: "JPG, PNG, and other common image formats are supported.",
    },
    {
      question: "Do I need an account?",
      answer: "No account or registration is required to use this tool.",
    },
    {
      question: "Are my photos safe?",
      answer: "Absolutely. All files are deleted automatically after 60 minutes and are never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: ["Remove Image Background", "Image to PDF", "PDF to Word", "PDF to Image", "Compress PDF"],
};

export default function ResizePassportPhotoPage() {
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
              <PassportPhotoUploader />
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


