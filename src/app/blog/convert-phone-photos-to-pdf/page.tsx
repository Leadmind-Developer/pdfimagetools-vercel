import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert Phone Photos to PDF Online | PDFImageTools",
  description:
    "Learn how to turn phone photos or scanned images into professional PDFs. Perfect for students, freelancers, and mobile users.",
};

export default function ConvertPhonePhotosToPdf() {
  const faq = [
    {
      "@type": "Question",
      name: "Can I convert multiple photos into one PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. PDFImageTools allows combining multiple images into a single PDF file easily." },
    },
    {
      "@type": "Question",
      name: "Do I need to install an app?",
      acceptedAnswer: { "@type": "Answer", text: "No. All conversions happen in your browser; no app downloads required." },
    },
    {
      "@type": "Question",
      name: "Are converted PDFs editable?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, once converted, PDFs can be edited using tools like PDF to Word or signed digitally." },
    },
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfimagetools.app" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://pdfimagetools.app/blog" },
                { "@type": "ListItem", position: 3, name: "Convert Phone Photos to PDF", item: "https://pdfimagetools.app/blog/convert-phone-photos-to-pdf" },
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
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

        <h1>Convert Phone Photos to PDF Online</h1>

        <p>
          Transforming phone photos into PDFs is essential for applications, submissions, or creating organized digital records. Whether you’re a student, freelancer, or professional, PDFImageTools allows fast, browser-based conversion.
        </p>

        <h2>Step-by-Step Guide</h2>
        <ol>
          <li>Open the <Link href="/image-to-pdf">Image to PDF tool</Link>.</li>
          <li>Select the photos from your phone or tablet.</li>
          <li>Arrange images in the desired order.</li>
          <li>Click convert and download your PDF.</li>
        </ol>

        <h2>Tips for Best Results</h2>
        <ul>
          <li>Use high-resolution images for clarity.</li>
          <li>Ensure consistent page orientation.</li>
          <li>Compress large PDFs with <Link href="/compress-pdf">Compress PDF</Link> for easier sharing.</li>
          <li>Digitally sign documents if required using <Link href="/pdf-sign">Sign PDF</Link>.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        {faq.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
            <p>{item.acceptedAnswer.text}</p>
          </div>
        ))}

        <p>
          Converting phone photos to PDFs is now simple, secure, and completely online. Combine, organize, and compress your files for professional submissions with ease.
        </p>
      </article>
    </>
  );
}
