import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Protect PDF Files with Password Online – Free & Secure | PDFImageTools",
  description: "Secure your PDF files with passwords online. Free tutorial to protect sensitive PDFs and ensure privacy.",
};

export default function ProtectPdfPassword() {
  const faq = [
    { "@type":"Question", name:"Is password protection free?", acceptedAnswer:{ "@type":"Answer", text:"Yes, PDFImageTools allows free PDF password protection online." } },
    { "@type":"Question", name:"Are my PDFs secure?", acceptedAnswer:{ "@type":"Answer", text:"Files are encrypted during processing and deleted after completion." } }
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
            { "@type":"ListItem", position:1, name:"Home", item:"https://pdfimagetools.app" },
            { "@type":"ListItem", position:2, name:"Blog", item:"https://pdfimagetools.app/blog" },
            { "@type":"ListItem", position:3, name:"Protect PDF with Password", item:"https://pdfimagetools.app/blog/protect-pdf-password-online" },
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage","mainEntity":faq }) }} />

        <h1>Protect PDF Files with Password Online – Free & Secure</h1>

        <p>Secure sensitive documents like bank statements, resumes, and contracts by adding password protection to PDFs online.</p>

        <h2>Steps</h2>
        <ol>
          <li>Go to the <Link href="/pdf-sign">Protect PDF Tool</Link>.</li>
          <li>Upload your PDF.</li>
          <li>Set a strong password.</li>
          <li>Download the protected PDF.</li>
        </ol>

        <h2>Tips</h2>
        <ul>
          <li>Use a unique, strong password for sensitive PDFs.</li>
          <li>Share passwords securely with intended recipients only.</li>
        </ul>
      </article>
    </>
  );
}
