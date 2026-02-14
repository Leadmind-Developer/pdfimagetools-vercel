import React from "react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Best Free PDF Tools for Students (2026) | PDFImageTools",
  description:
    "Discover the top free PDF tools for students. Merge, convert, compress, and sign PDFs without any signup or cost.",
};

export default function BestPdfToolsStudents() {
  const faq = [
    {
      "@type": "Question",
      name: "Are these tools free for students?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, all tools mentioned are completely free to use with no signup required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use them on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, PDFImageTools works on phones, tablets, and computers directly in the browser.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install software?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No installation is required. All tools run online.",
      },
    },
    {
      "@type": "Question",
      name: "Are uploaded files secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Files are processed securely and automatically removed after processing.",
      },
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pdfimagetools.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://pdfimagetools.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Best Free PDF Tools for Students",
        item:
          "https://pdfimagetools.app/blog/best-free-pdf-tools-students",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq,
  };

  return (
    <>
      {/* ✅ SAFE JSON-LD (Fixes your crash) */}
      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article
        style={{
          maxWidth: "56rem",
          margin: "auto",
          padding: "3rem 1rem",
          lineHeight: "1.75",
        }}
      >
        <h1>Best Free PDF Tools for Students (2026)</h1>

        <p>
          Students today work almost entirely with digital documents. From lecture
          notes and assignments to research papers and group projects, PDFs have
          become the standard format used by schools and universities worldwide.
        </p>

        <p>
          Free online tools allow students to merge, compress, convert, and sign
          PDFs instantly without subscriptions or installations.
        </p>

        <h2>Why Students Need PDF Tools</h2>

        <ul>
          <li>Large files exceeding upload limits</li>
          <li>Multiple documents needing one submission</li>
          <li>Scanned notes requiring edits</li>
          <li>Forms needing signatures</li>
        </ul>

        <h2>Top Free PDF Tools Every Student Should Use</h2>

        <h3>Merge PDFs</h3>
        <p>
          Combine assignments easily using the{" "}
          <Link href="/combine-pdfs">Merge PDFs tool</Link>.
        </p>

        <h3>Compress PDFs</h3>
        <p>
          Reduce upload size using the{" "}
          <Link href="/compress-pdf">Compress PDF tool</Link>.
        </p>

        <h3>Convert PDF to Word</h3>
        <p>
          Edit documents using the{" "}
          <Link href="/pdf-to-word">PDF to Word converter</Link>.
        </p>

        <h3>Convert PDF to Image</h3>
        <p>
          Extract diagrams with the{" "}
          <Link href="/pdf-to-image">PDF to Image tool</Link>.
        </p>

        <h3>Sign PDFs</h3>
        <p>
          Submit forms digitally using the{" "}
          <Link href="/pdf-sign">Sign PDF tool</Link>.
        </p>

        <h2>Best Practices for Students</h2>

        <ul>
          <li>Organize files by course</li>
          <li>Compress before uploading</li>
          <li>Convert only when editing is required</li>
          <li>Use mobile access between classes</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        {faq.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
            <p>{item.acceptedAnswer.text}</p>
          </div>
        ))}
      </article>
    </>
  );
}
