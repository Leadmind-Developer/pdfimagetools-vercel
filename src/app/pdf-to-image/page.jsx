// src/app/pdf-to-image/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfToImageUploader from "../../components/PdfToImageUploader";
import Link from "next/link";

export const metadata = {
  title: "Free PDF to Image Converter — Export High-Quality JPG & PNG | PDFImageTools",
  description:
    "Convert PDF pages to high-quality images (JPG, PNG) online. Free, fast, secure PDF to image converter with no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/pdf-to-image" },
};

const t = {
  heroTitle: "Convert PDF to Images Online",
  heroSubtitle:
    "Quickly convert PDF pages into high-resolution JPG or PNG images. Extract pages as images easily — free, secure, and no signup required.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your PDF file(s).",
    "Select the image format (JPG or PNG) and optional settings.",
    "Click the convert button to generate images from your PDF.",
    "Download the images instantly or convert another PDF.",
  ],
  supportedTitle: "Supported Languages",
  aboutTitle: "Why Convert PDF to Images?",
  aboutText: [
    "Extract PDF pages as high-quality images for presentations, reports, or sharing.",
    "Images preserve layout and content for easy viewing without PDF software.",
    "No software installation needed — everything works directly in your browser.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded PDFs and generated images are deleted automatically after one hour. Nothing is stored permanently.",
    "Conversion is handled securely with temporary files. No login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is the PDF-to-Image converter free?",
      answer: "Yes, it’s completely free — no limits, no watermarks, no hidden fees.",
    },
    {
      question: "Which image formats are supported?",
      answer: "You can convert PDF pages to JPG or PNG images.",
    },
    {
      question: "Can I convert multiple PDFs at once?",
      answer: "Yes, you can upload and convert multiple PDFs in one session.",
    },
    {
      question: "Are my files safe?",
      answer: "Absolutely. Files are deleted automatically after 60 minutes and never shared.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: ["PDF to Word", "PDF to Excel", "Compress PDF", "Image to PDF", "PDF Merge"],
};

export default function PdfToImagePage() {
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
              <PdfToImageUploader />
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

