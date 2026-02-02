// src/app/blog/word-to-pdf/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert Word to PDF Online for Free | PDFImageTools",
  description:
    "Learn how to convert Word documents into PDF files online for free with PDFImageTools. Step-by-step guide, FAQs, and related tools included.",
  robots: "index, follow",
  openGraph: {
    title: "Convert Word to PDF Online – Free & Fast",
    description:
      "Easily convert DOCX or DOC files into high-quality PDFs online using PDFImageTools. Free, fast, and secure.",
    url: "https://pdfimagetools.app/blog/word-to-pdf",
    siteName: "PDFImageTools",
    type: "article"
  }
};

export default function WordToPdfBlogPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

      {/* ================= JSON-LD Article Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Convert Word to PDF Online",
            "description": "Step-by-step guide to convert Word documents into PDF files using PDFImageTools.",
            "author": { "@type": "Organization", "name": "PDFImageTools" },
            "publisher": {
              "@type": "Organization",
              "name": "PDFImageTools",
              "logo": { "@type": "ImageObject", "url": "https://pdfimagetools.app/logo.png" }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pdfimagetools.app/blog/word-to-pdf"
            }
          })
        }}
      />

      {/* ================= FAQ Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Word to PDF free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Word to PDF conversion is completely free with no watermark."
                }
              },
              {
                "@type": "Question",
                "name": "Will formatting stay the same?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, layout, fonts, and images are preserved accurately."
                }
              },
              {
                "@type": "Question",
                "name": "Are my files secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All uploaded files are deleted automatically after processing."
                }
              }
            ]
          })
        }}
      />

      {/* ================= Breadcrumb Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pdfimagetools.app/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pdfimagetools.app/blog" },
              { "@type": "ListItem", "position": 3, "name": "Word to PDF", "item": "https://pdfimagetools.app/blog/word-to-pdf" }
            ]
          })
        }}
      />

      {/* ================= BLOG CONTENT ================= */}
      <h1 className="text-3xl font-bold mb-6">
        Convert Word to PDF Online
      </h1>

      <p>
        Turn DOCX and DOC documents into professional PDFs instantly.  
        PDFImageTools makes Word to PDF conversion fast, free, and secure.
      </p>

      <h2>Why Convert Word to PDF</h2>
      <ul>
        <li>Share documents without altering formatting</li>
        <li>Ensure compatibility across devices</li>
        <li>Protect content from editing</li>
        <li>Create professional-ready documents</li>
      </ul>

      <h2>How to Convert Word to PDF</h2>
      <ol>
        <li>Upload your Word file (DOC or DOCX)</li>
        <li>Click “Convert to PDF”</li>
        <li>Download the converted PDF instantly</li>
      </ol>

      <h2>Security & Privacy</h2>
      <p>
        All uploaded files are processed securely and deleted automatically.  
        PDFImageTools never stores or shares your documents.
      </p>

      <h2>Related Tools</h2>
      <ul className="space-y-1">
        <li><Link href="/pdf-to-word">PDF to Word</Link></li>
        <li><Link href="/excel-to-pdf">Excel to PDF</Link></li>
        <li><Link href="/ppt-to-pdf">PPT to PDF</Link></li>
        <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
        <li><Link href="/word-to-pdf">Word to PDF</Link></li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        Converting Word documents to PDF has never been easier.  
        PDFImageTools provides a free, fast, and secure solution for all your document conversion needs.
      </p>

    </article>
  );
}
