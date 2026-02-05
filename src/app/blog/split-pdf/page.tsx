import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Split PDF Online for Free | PDFImageTools",
  description:
    "Learn how to split PDF files online for free. Extract pages, divide documents easily with step-by-step guide, FAQs, and tips.",
};

export default function SplitPdfBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is splitting PDF free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, splitting PDF files on PDFImageTools is completely free with no watermark or limits."
    }
  },
  {
    "@type": "Question",
    "name": "Can I extract specific pages from a PDF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can select a page range and download only the pages you need."
    }
  },
  {
    "@type": "Question",
    "name": "Are my PDFs safe?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All uploaded PDFs are processed securely and deleted automatically after a short time."
    }
  },
  {
    "@type": "Question",
    "name": "Can I split a PDF into multiple files?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Currently you can extract page ranges. Multi-file splitting is coming soon."
    }
  }
];

return (
<article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

{/* Article schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Split PDF Files Online",
      "author": { "@type": "Organization", "name": "PDFImageTools" },
      "mainEntityOfPage": { "@id": "https://pdfimagetools.app/blog/split-pdf" }
    })
  }}
/>

{/* FAQ schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq
    })
  }}
/>

{/* Breadcrumb schema */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pdfimagetools.app/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pdfimagetools.app/blog" },
        { "@type": "ListItem", "position": 3, "name": "Split PDF", "item": "https://pdfimagetools.app/blog/split-pdf" }
      ]
    })
  }}
/>

<h1>Split PDF Online – Extract Pages Instantly</h1>

<p>
Splitting PDF files allows you to extract specific pages or divide large documents into smaller parts.
With PDFImageTools, you can split PDFs online for free in just a few seconds.
No registration required.
</p>

<h2>How to Split a PDF File</h2>
<ol>
  <li>Upload your PDF document</li>
  <li>Enter the page range you want to extract</li>
  <li>Click the split button</li>
  <li>Download your new PDF file</li>
</ol>

<h2>Why Split PDF Files?</h2>
<ul>
  <li>Share only required pages</li>
  <li>Reduce large file sizes</li>
  <li>Organize documents better</li>
  <li>Extract chapters or sections easily</li>
</ul>

<h2>Security & Privacy</h2>
<p>
Your files are handled securely.
All uploaded PDFs are automatically deleted shortly after processing.
We never store or share your documents.
</p>

<h2>Related Tools</h2>
<ul>
  <li><Link href="/compress-pdf">Compress PDF</Link></li>
  <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
  <li><Link href="/pdf-to-word">PDF to Word</Link></li>
  <li><Link href="/image-to-pdf">Image to PDF</Link></li>
</ul>

</article>
);
}
