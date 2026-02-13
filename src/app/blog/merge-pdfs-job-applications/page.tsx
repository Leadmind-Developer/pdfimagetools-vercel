import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Merge PDFs for Job Applications – Free & Easy | PDFImageTools",
  description: "Learn how to merge multiple PDFs for job applications using free online tools. Combine resumes, certificates, and documents seamlessly.",
};

export default function MergeJobApplications() {
  const faq = [
    { "@type":"Question", name:"Can I merge multiple job documents?", acceptedAnswer:{ "@type":"Answer", text:"Yes, PDFImageTools allows merging resumes, certificates, and other PDFs into one file." } },
    { "@type":"Question", name:"Is it free?", acceptedAnswer:{ "@type":"Answer", text:"Yes, merging PDFs is completely free with no signup required." } }
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
            { "@type":"ListItem", position:1, name:"Home", item:"https://pdfimagetools.app" },
            { "@type":"ListItem", position:2, name:"Blog", item:"https://pdfimagetools.app/blog" },
            { "@type":"ListItem", position:3, name:"Merge PDFs for Job Applications", item:"https://pdfimagetools.app/blog/merge-pdfs-job-applications" },
          ]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage","mainEntity":faq }) }} />

        <h1>Merge PDFs for Job Applications – Free & Easy</h1>

        <p>Merging PDFs helps you submit resumes, cover letters, and certificates as a single document. This avoids confusion and ensures a professional submission.</p>

        <h2>Step-by-Step Guide</h2>
        <ol>
          <li>Visit the <Link href="/combine-pdfs">Merge PDFs Tool</Link>.</li>
          <li>Upload all your PDF documents.</li>
          <li>Reorder files if necessary.</li>
          <li>Click “Merge” and download the combined PDF.</li>
        </ol>

        <h2>Tips</h2>
        <ul>
          <li>Ensure each file is correctly named for clarity.</li>
          <li>Compress the merged PDF before emailing using <Link href="/compress-pdf">Compress PDF</Link>.</li>
        </ul>
      </article>
    </>
  );
}
