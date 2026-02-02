// src/app/blog/resize-passport-photo/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Resize Passport Photo Online for Free | PDFImageTools",
  description:
    "Learn how to resize passport photos online for free with PDFImageTools. Step-by-step guide, supported sizes, FAQs, and related tools included.",
  robots: "index, follow",
  openGraph: {
    title: "Resize Passport Photo Online – Free & Fast",
    description:
      "Easily resize your passport photos to standard dimensions online using PDFImageTools. Free, fast, and secure.",
    url: "https://pdfimagetools.app/blog/resize-passport-photo",
    siteName: "PDFImageTools",
    type: "article"
  }
};

export default function ResizePassportPhotoBlogPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

      {/* ================= JSON-LD Article Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Resize Passport Photos Online",
            "description": "Step-by-step guide to resize passport photos online using PDFImageTools.",
            "author": { "@type": "Organization", "name": "PDFImageTools" },
            "publisher": {
              "@type": "Organization",
              "name": "PDFImageTools",
              "logo": { "@type": "ImageObject", "url": "https://pdfimagetools.app/logo.png" }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pdfimagetools.app/blog/resize-passport-photo"
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
                "name": "Is resizing passport photos free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, fully free and without watermarks."
                }
              },
              {
                "@type": "Question",
                "name": "What sizes are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard passport photo sizes like 2x2 inch, 35x45mm, and custom dimensions."
                }
              },
              {
                "@type": "Question",
                "name": "Are my photos private?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All uploaded images are deleted immediately after processing."
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
              { "@type": "ListItem", "position": 3, "name": "Resize Passport Photo", "item": "https://pdfimagetools.app/blog/resize-passport-photo" }
            ]
          })
        }}
      />

      {/* ================= BLOG CONTENT ================= */}
      <h1 className="text-3xl font-bold mb-6">
        Resize Passport Photo Online
      </h1>

      <p>
        Easily resize your passport photos to meet official document requirements.  
        PDFImageTools ensures the correct dimensions, format, and quality — fast, free, and secure.
      </p>

      <h2>Supported Sizes</h2>
      <ul>
        <li>2×2 inch (51×51 mm)</li>
        <li>35×45 mm (common international size)</li>
        <li>Custom dimensions for local passport or visa applications</li>
      </ul>

      <h2>How to Resize a Passport Photo</h2>
      <ol>
        <li>Upload your photo (JPG or PNG)</li>
        <li>Choose the required size or enter custom dimensions</li>
        <li>Download your resized passport photo instantly</li>
        <li>Optionally, repeat for multiple photos</li>
      </ol>

      <h2>Privacy & Security</h2>
      <p>
        All uploaded photos are processed securely and deleted immediately after resizing.  
        PDFImageTools does not store any personal images permanently.
      </p>

      <h2>Related Tools</h2>
      <ul className="space-y-1">
        <li><Link href="/remove-image-background">Remove Image Background</Link></li>
        <li><Link href="/image-converter">Image Converter</Link></li>
        <li><Link href="/image-to-pdf">Image to PDF</Link></li>
        <li><Link href="/combine-pdfs">Merge PDFs</Link></li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        Resizing passport photos is now fast and effortless.  
        PDFImageTools gives you a secure and free solution for official photo requirements anywhere in the world.
      </p>

    </article>
  );
}
