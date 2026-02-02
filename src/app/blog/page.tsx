import React from "react";
import Link from "next/link";

export const metadata = {
  title: "PDF & Image Tools Blog | PDFImageTools",
  description:
    "Explore guides, tutorials, and tips for using PDFImageTools. Learn how to merge PDFs, convert documents, resize images, remove backgrounds, and more."
};

export default function BlogIndexPage() {

  const tools = [
    { name: "Merge PDF", slug: "mergepdf" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "PDF to Excel", slug: "pdf-to-excel" },
    { name: "PDF to PPT", slug: "pdf-to-ppt" },
    { name: "PDF to Image", slug: "pdf-to-image" },
    { name: "Image to PDF", slug: "image-to-pdf" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "Excel to PDF", slug: "excel-to-pdf" },
    { name: "PPT to PDF", slug: "ppt-to-pdf" },
    { name: "Remove Image Background", slug: "remove-image-background" },
    { name: "Resize Passport Photo", slug: "resize-passport-photo" },
    { name: "Image Converter", slug: "image-converter" }
    { name: "pdfimagetools", slug: "pdfimagetools" }
  ];

  const breadcrumbItems = [
    { position: 1, name: "Home", item: "https://pdfimagetools.app/" },
    { position: 2, name: "Blog", item: "https://pdfimagetools.app/blog" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

      {/* ================= Breadcrumb JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map(b => ({
              "@type": "ListItem",
              "position": b.position,
              "name": b.name,
              "item": b.item
            }))
          })
        }}
      />

      {/* ================= Article JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "PDF & Image Tools Blog",
            "author": { "@type": "Organization", "name": "PDFImageTools" },
            "mainEntityOfPage": { "@id": "https://pdfimagetools.app/blog" }
          })
        }}
      />

      <h1 className="text-3xl font-bold mb-6">PDF & Image Tools Blog</h1>

      <p className="mb-6">
        Welcome to PDFImageTools Blog! Find detailed guides, tutorials, and tips for using all our tools. Learn how to merge PDFs, convert documents, resize photos, remove image backgrounds, and more.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Tool Guides</h2>

      <ul className="list-disc list-inside space-y-2">
        {tools.map(tool => (
          <li key={tool.slug}>
            <Link href={`/blog/${tool.slug}`} className="text-blue-600 hover:underline">
              {tool.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Read Our Blog?</h2>

      <ul className="list-disc list-inside space-y-2">
        <li>Step-by-step instructions for all PDF & image tools</li>
        <li>Tips to optimize workflow and productivity</li>
        <li>Security and privacy best practices</li>
        <li>SEO-friendly guides that help you use the tools effectively</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started</h2>

      <p>
        Pick a tool from the list above and explore its detailed guide. Every page includes FAQs, step-by-step instructions, and helpful tips to maximize your experience.
      </p>

    </article>
  );
}
