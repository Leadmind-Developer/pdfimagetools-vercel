import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert PDF to Image Files Easily – Free Tool | PDFImageTools",
  description: "Learn how to convert PDF files to images online. Extract pages as PNG or JPEG with our free tool.",
};

export default function PdfToImage() {
  const faq = [
    { "@type":"Question", name:"Can I convert PDFs to JPEG or PNG?", acceptedAnswer:{ "@type":"Answer", text:"Yes, PDFImageTools supports both JPEG and PNG formats for conversion." } },
    { "@type":"Question", name:"Is it free?", acceptedAnswer:{ "@type":"Answer", text:"Yes, conversion is completely free with no signup required." } }
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
            { "@type":"ListItem", position:1, name:"Home", item:"https://pdfimagetools.app" },
            { "@type":"ListItem", position:2, name:"Blog", item:"https://pdfimagetools.app/blog" },
            { "@type":"ListItem", position:3, name:"Convert PDF to Image", item:"https://pdfimagetools.app/blog/convert-pdf-to-image" },
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage","mainEntity":faq }) }} />

        <h1>Convert PDF to Image Files Easily – Free Tool</h1>

        <p>Extract pages from PDFs as images for presentations, reports, or social media posts.</p>

        <h2>Steps</h2>
        <ol>
          <li>Go to the <Link href="/pdf-to-image">PDF to Image Tool</Link>.</li>
          <li>Upload your PDF file.</li>
          <li>Choose JPEG or PNG format.</li>
          <li>Click “Convert” and download images.</li>
        </ol>
      </article>
    </>
  );
}
