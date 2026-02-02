// src/app/blog/excel-to-pdf/page.tsx
import React from "react";
import Footer from "../../components/Footer";
import Link from "next/link";
import ExcelToPdfUploader from "../../components/ExcelToPdfUploader"; // assume you have this uploader component
import DonationSupport from "../../components/DonationSupport";

export const metadata = {
  title: "Convert Excel to PDF Online for Free | PDFImageTools",
  description:
    "Convert Excel spreadsheets into PDF documents online for free with PDFImageTools.",
};

const t = {
  heroTitle: "Convert Excel to PDF Online",
  heroSubtitle:
    "Instantly transform Excel spreadsheets into clean PDF files. Keep formatting intact and download your PDF in seconds — no signup required.",
  stepsTitle: "How It Works",
  steps: [
    "Upload your Excel (.xlsx or .xls) file.",
    "Check the preview and adjust settings if needed.",
    "Click 'Convert to PDF' to generate your PDF document.",
    "Download the converted PDF or start a new conversion.",
  ],
  aboutTitle: "Why Convert Excel to PDF?",
  aboutText: [
    "Converting Excel spreadsheets to PDF helps you share reports, invoices, and data with colleagues, clients, or students while preserving formatting.",
    "PDF is universally readable, secure, and prevents accidental edits or formula changes.",
  ],
  privacyTitle: "Privacy & Security",
  privacyText: [
    "All uploaded Excel files are deleted automatically after one hour.",
    "Your files are processed securely; no login or email required.",
  ],
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Is Excel to PDF free?",
      answer: "Yes — the Excel to PDF conversion tool is completely free with no watermark.",
    },
    {
      question: "Will formulas be preserved?",
      answer: "The PDF output shows values and layout correctly. Formulas are not preserved since PDF is static.",
    },
    {
      question: "Are my files secure?",
      answer: "All files are processed securely and deleted automatically after one hour.",
    },
  ],
  relatedTitle: "Other Tools You May Like",
  relatedTools: [
    { name: "PDF to Excel", slug: "pdf-to-excel" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "Merge PDFs", slug: "combine-pdfs" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Excel to PDF Batch", slug: "excel-to-pdf" },
  ],
};

export default function ExcelToPdfBlog() {
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

  // JSON-LD structured data
  const faqStructured = t.faq.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  }));

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

          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: t.heroTitle,
                author: { "@type": "Organization", name: "PDFImageTools" },
                mainEntityOfPage: { "@id": "https://pdfimagetools.app/blog/excel-to-pdf" },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqStructured,
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfimagetools.app/" },
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://pdfimagetools.app/blog" },
                  { "@type": "ListItem", position: 3, name: "Excel to PDF", item: "https://pdfimagetools.app/blog/excel-to-pdf" },
                ],
              }),
            }}
          />

          {/* Hero */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <ExcelToPdfUploader />
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
                <div key={idx} style={{ marginBottom: "1.5rem" }}>
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
                <li key={idx}>
                  <Link href={`/blog/${tool.slug}`}>{tool.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
