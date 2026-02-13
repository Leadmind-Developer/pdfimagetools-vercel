import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Why PDFs Become Large (And How to Reduce Size) – 2026 | PDFImageTools",
  description:
    "Learn why your PDF files are large and how to reduce their size without losing quality. Tips, diagrams, and best free tools like PDFImageTools.",
};

export default function WhyPdfLarge() {
  const faq = [
    {
      "@type": "Question",
      name: "Why is my PDF file so large?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDFs can be large due to high-resolution images, embedded fonts, scanned pages, or unnecessary metadata.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce PDF size without losing quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use compression tools like PDFImageTools Compress PDF to reduce size while maintaining readability.",
      },
    },
    {
      "@type": "Question",
      name: "Is compressing PDFs safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, files are deleted automatically after processing for security and privacy.",
      },
    },
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq,
            }),
          }}
        />

        <h1>Why PDFs Become Large (And How to Reduce Size)</h1>

        <p>
          Large PDFs are common when scanning documents or exporting from office apps. High-resolution images, embedded fonts, and extra metadata increase file size.
        </p>

        <h2>Tips to Reduce PDF Size</h2>
        <ol>
          <li>Compress using <Link href="/compress-pdf">PDFImageTools Compress PDF</Link></li>
          <li>Remove unnecessary images or reduce image resolution</li>
          <li>Remove embedded fonts when possible</li>
          <li>Split large PDFs into smaller files using <Link href="/combine-pdfs">PDF Merge Tool</Link> or splitting tools</li>
        </ol>
      </article>
    </>
  );
}
