import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";
import Link from "next/link";

export const metadata = {
  title: "Free Word to PDF Converter | PDFImageTools",
  description:
    "Quickly convert Word documents (DOC/DOCX) to PDF online. Maintain layouts, fonts, and images. No signup required, fast and secure.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: "4rem",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#222",
    textAlign: "center",
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    color: "#555",
    lineHeight: 1.6,
    textAlign: "center",
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    margin: "0.25rem",
    borderRadius: "999px",
    backgroundColor: "#e0e0e0",
    fontSize: "0.9rem",
    color: "#333",
  };

  const homeButtonStyle: React.CSSProperties = {
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
      <Header />

      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home / Logo Button */}
          <Link href="/" style={homeButtonStyle}>
            PDFImageTools Home
          </Link>

          {/* Hero Section */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>Convert Word Files to PDF</h1>
            <p style={subHeadingStyle}>
              Instantly transform your Word documents into high-quality PDF files. Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.
            </p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <WordToPdfUploader />
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>How It Works</h2>
            <ol style={{ ...listStyle, marginLeft: "1rem", color: "#555", fontSize: "1.1rem" }}>
              <li>Select DOCX files from your computer or drag them into the upload area.</li>
              <li>Our system converts your files instantly while preserving fonts, images, and layout.</li>
              <li>Download each PDF individually or use the batch download option for all files.</li>
              <li>If needed, clear the current files and upload a new batch of Word documents.</li>
            </ol>
          </section>

          {/* Supported Languages */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Supported Languages</h2>
            <div style={{ textAlign: "center" }}>
              {[
                "English", "Deutsch", "Español", "Français", "Indonesia",
                "Italiano", "日本語", "한국어", "Nederlands", "Polski",
                "Português", "Русский", "Türkçe", "Українська",
                "Tiếng Việt", "中文"
              ].map((lang) => (
                <span key={lang} style={badgeStyle}>{lang}</span>
              ))}
            </div>
          </section>

          {/* About Word and PDF */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Understanding Word and PDF</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              <p>Word documents (DOC/DOCX) store your text, images, and formatting. They are editable and ideal for content creation.</p>
              <p>PDFs, on the other hand, are designed to preserve the exact layout and appearance across all devices. They are ideal for sharing and printing documents while ensuring consistency.</p>
              <p>Our tool carefully maintains your document formatting, but uncommon fonts may be substituted for the closest available alternatives.</p>
            </div>
          </section>

          {/* Privacy & Security */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Privacy & Security</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              <p>All uploaded files are automatically deleted after one hour. Conversion is performed on server copies; your original files remain on your device.</p>
              <p>No email or account is required. Your privacy is our priority.</p>
            </div>
          </section>

          {/* FAQ */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Frequently Asked Questions</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              <div>
                <h4 style={{ fontWeight: 600 }}>Is this service free?</h4>
                <p>Yes, you can convert Word files to PDF without any charge or watermark.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600 }}>Do I need an account?</h4>
                <p>No account or registration is required to use this tool.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600 }}>Are my files safe?</h4>
                <p>Files are automatically deleted after 60 minutes. Conversions use copies on the server only.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600 }}>Which file types are supported?</h4>
                <p>You can upload DOC and DOCX files, up to 20 files per batch.</p>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Other Tools You May Like</h2>
            <ul style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6, paddingLeft: "1.5rem" }}>
              <li>Convert Excel to PDF</li>
              <li>PowerPoint to PDF</li>
              <li>PDF editing tools</li>
              <li>Image to PDF converter</li>
              <li>Document merging and splitting</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
