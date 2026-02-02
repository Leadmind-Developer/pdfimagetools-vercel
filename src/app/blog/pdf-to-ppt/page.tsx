import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert PDF to PowerPoint Online for Free | PDFImageTools",
  description:
    "Learn how to convert PDF files into editable PowerPoint presentations online for free using PDFImageTools."
};

export default function PdfToPptBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is PDF to PowerPoint free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, PDF to PowerPoint conversion is completely free with no limits or watermarks."
    }
  },
  {
    "@type": "Question",
    "name": "Will slides keep their layout?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most text, images, and layouts are preserved accurately during conversion."
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
      "headline": "How to Convert PDF to PowerPoint Online for Free",
      "author": {
        "@type": "Organization",
        "name": "PDFImageTools"
      },
      "mainEntityOfPage": {
        "@id": "https://pdfimagetools.app/blog/pdf-to-ppt"
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
          "name": "PDF to PPT",
          "item": "https://pdfimagetools.app/blog/pdf-to-ppt"
        }
      ]
    })
  }}
/>

{/* ========== Blog Content ========== */}

<h1 className="text-3xl font-bold mb-6">
  Convert PDF to PowerPoint Online
</h1>

<p>
Turn PDF documents into editable PowerPoint presentations in seconds.
PDFImageTools makes it easy to convert PDFs into PPT slides — fast, free, and secure.
</p>

<h2>Related Tools</h2>

<ul className="space-y-1">
  <li><Link href="/pdf-to-word">PDF to Word</Link></li>
  <li><Link href="/pdf-to-image">PDF to Image</Link></li>
  <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
  <li><Link href="/ppt-to-pdf">PowerPoint to PDF</Link></li>
</ul>

</article>
);
}
