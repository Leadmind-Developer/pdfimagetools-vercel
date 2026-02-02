import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert PDF to Image Online for Free | PDFImageTools",
  description:
    "Learn how to convert PDF pages into high-quality images online for free using PDFImageTools."
};

export default function PdfToImageBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is PDF to Image free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, PDF to Image conversion is completely free with no limits or watermarks."
    }
  },
  {
    "@type": "Question",
    "name": "Which image formats are supported?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can convert PDF pages to JPG, PNG, and other common image formats."
    }
  },
  {
    "@type": "Question",
    "name": "Are my files secure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Files are processed securely and deleted automatically after conversion."
    }
  }
];

return (
<article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

{/* ========== Article Schema ========== */}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Convert PDF to Image Online for Free",
      "author": {
        "@type": "Organization",
        "name": "PDFImageTools"
      },
      "mainEntityOfPage": {
        "@id": "https://pdfimagetools.app/blog/pdf-to-image"
      }
    })
  }}
/>

{/* ========== FAQ Schema ========== */}

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

{/* ========== Breadcrumb Schema ========== */}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pdfimagetools.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://pdfimagetools.app/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "PDF to Image",
          "item": "https://pdfimagetools.app/blog/pdf-to-image"
        }
      ]
    })
  }}
/>

{/* ========== Blog Content ========== */}

<h1 className="text-3xl font-bold mb-6">
  Convert PDF to Image Online
</h1>

<p>
Convert PDF pages into high-quality images instantly.  
With PDFImageTools, you can turn PDF files into JPG or PNG images easily — fast, secure, and free.
</p>

<h2>Related Tools</h2>

<ul className="space-y-1">
  <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
  <li><Link href="/pdf-to-word">PDF to Word</Link></li>
  <li><Link href="/image-to-pdf">Image to PDF</Link></li>
</ul>

</article>
);
}
