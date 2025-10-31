import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";

export const metadata = {
  title: "Free Word to PDF Converter | PDFImageTools",
  description:
    "Quickly convert Word documents (DOC/DOCX) to PDF online. Maintain layouts, fonts, and images. No signup required, fast and secure.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="hero">
        <h2>Convert Word Files to PDF</h2>
        <p>
          Instantly transform your Word documents into high-quality PDF files.
          Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.
        </p>
      </section>

      {/* UPLOADER */}
      <main className="container" style={{ padding: "4rem 0", textAlign: "center" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Upload Your Word Files</h3>
        <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#555" }}>
          Drag & drop DOCX files here, or click to browse. You can upload multiple files at once.
        </p>
        <WordToPdfUploader />
      </main>

      {/* HOW IT WORKS */}
      <section className="about-section">
        <h2>How It Works</h2>
        <ol style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px", lineHeight: "1.8" }}>
          <li>Select DOCX files from your computer or drag them into the upload area.</li>
          <li>Our system converts your files instantly while preserving fonts, images, and layout.</li>
          <li>Download each PDF individually or use the batch download option for all files.</li>
          <li>If needed, clear the current files and upload a new batch of Word documents.</li>
        </ol>
      </section>

      {/* SUPPORTED LANGUAGES */}
      <section className="features">
        <h3>Supported Languages</h3>
        <div className="feature-grid" style={{ justifyContent: "center" }}>
          {[
            "English", "Deutsch", "Español", "Français", "Indonesia",
            "Italiano", "日本語", "한국어", "Nederlands", "Polski",
            "Português", "Русский", "Türkçe", "Українська",
            "Tiếng Việt", "中文"
          ].map(lang => (
            <div key={lang} className="feature-card">{lang}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Is this service free?</h4>
          <p>Yes, you can convert Word files to PDF without any charge or watermark.</p>
        </div>
        <div className="faq-item">
          <h4>Do I need an account?</h4>
          <p>No account or registration is required to use this tool.</p>
        </div>
        <div className="faq-item">
          <h4>Are my files safe?</h4>
          <p>Files are automatically deleted after 60 minutes. Conversions use copies on the server only.</p>
        </div>
        <div className="faq-item">
          <h4>Which file types are supported?</h4>
          <p>You can upload DOC and DOCX files, up to 20 files per batch.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
