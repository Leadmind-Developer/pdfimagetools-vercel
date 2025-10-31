import React from "react";
import WordToPdfUploader from "../../components/WordToPdfUploader";

export const metadata = {
  title: "Free Word to PDF Converter — High Quality, No Watermark | PDFImageTools",
  description:
    "Convert Word (DOCX) to PDF online for free. Preserve layout, fonts, and images. Fast, secure, no signup required.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

export default function WordToPdfPage() {
  return (
    <main className="container" style={{ padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Convert Word to PDF
      </h1>
      <p style={{ marginBottom: "2rem", fontSize: "1rem", color: "#555" }}>
        Upload your Word documents (DOCX) and convert them to high-quality PDFs instantly. Preserve fonts, layout, and images without any watermarks.
      </p>

      {/* Uploader */}
      <WordToPdfUploader />

      {/* How It Works */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>How It Works</h2>
        <ol style={{ paddingLeft: "1.2rem", lineHeight: "1.8", color: "#555" }}>
          <li>Select DOCX files from your computer or drag them into the upload area.</li>
          <li>Our system converts your files instantly while preserving fonts, images, and layout.</li>
          <li>Download each PDF individually or use the batch download option for all files.</li>
          <li>If needed, clear the current files and upload a new batch of Word documents.</li>
        </ol>
      </section>

      {/* Supported Languages */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Supported Languages</h2>
        <p style={{ color: "#555" }}>
          English, Deutsch, Español, Français, Indonesia, Italiano, 日本語, 한국어, Nederlands, Polski, Português, Русский, Türkçe, Українська, Tiếng Việt, 中文
        </p>
      </section>

      {/* Privacy */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Privacy & Security</h2>
        <p style={{ color: "#555", marginBottom: "0.5rem" }}>
          All uploaded files are automatically deleted after one hour. Conversion is performed on server copies; your original files remain on your device.
        </p>
        <p style={{ color: "#555" }}>
          No email or account is required. Your privacy is our priority.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <div style={{ color: "#555", marginBottom: "1rem" }}>
          <strong>Is this service free?</strong>
          <p>Yes, you can convert Word files to PDF without any charge or watermark.</p>
        </div>
        <div style={{ color: "#555", marginBottom: "1rem" }}>
          <strong>Do I need an account?</strong>
          <p>No account or registration is required to use this tool.</p>
        </div>
        <div style={{ color: "#555", marginBottom: "1rem" }}>
          <strong>Are my files safe?</strong>
          <p>Files are automatically deleted after 60 minutes. Conversions use copies on the server only.</p>
        </div>
        <div style={{ color: "#555", marginBottom: "1rem" }}>
          <strong>Which file types are supported?</strong>
          <p>You can upload DOC and DOCX files, up to 20 files per batch.</p>
        </div>
      </section>
    </main>
  );
}
