import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert Images to PDF Online for Free | PDFImageTools",
  description:
    "Combine JPG and PNG images into a single PDF easily and securely using PDFImageTools."
};

export default function ImageToPdfBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is Image to PDF free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, converting images to PDF is completely free with no watermark."
    }
  },
  {
    "@type": "Question",
    "name": "Can I upload multiple images?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can combine multiple JPG or PNG images into one PDF file."
    }
  },
  {
    "@type": "Question",
    "name": "Are my images secure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All files are processed securely and deleted automatically."
    }
  }
];

return (
<article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Convert Images to PDF Online",
      "author": { "@type": "Organization", "name": "PDFImageTools" },
      "mainEntityOfPage": {
        "@id": "https://pdfimagetools.app/blog/image-to-pdf"
      }
    })
  }}
/>

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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pdfimagetools.app/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://pdfimagetools.app/blog" },
        { "@type": "ListItem", "position": 3, "name": "Image to PDF", "item": "https://pdfimagetools.app/blog/image-to-pdf" }
      ]
    })
  }}
/>

<h1 className="text-3xl font-bold mb-6">
  Convert Images to PDF Online
</h1>

<p>
Combine JPG and PNG images into a single PDF file easily.
PDFImageTools makes image to PDF conversion fast, free, and secure.
</p>

<h2>Related Tools</h2>
<ul className="space-y-1">
  <li><Link href="/pdf-to-image">PDF to Image</Link></li>
  <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
  <li><Link href="/pdf-to-word">PDF to Word</Link></li>
  <li><Link href="/word-to-pdf">Word to PDF</Link></li>
</ul>

</article>
);
}
