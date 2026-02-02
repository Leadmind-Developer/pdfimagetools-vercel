import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "PDF & Image Tools Blog | PDFImageTools",
  description:
    "Explore guides, tutorials, and tips for using PDFImageTools. Learn how to merge PDFs, convert documents, resize images, remove backgrounds, and more.",
};

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
  { name: "Image Converter", slug: "image-converter" },
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          PDF & Image Tools Blog
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Find detailed guides, step-by-step tutorials, and FAQs for all PDF and image tools.
        </p>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(tool => (
            <a
              key={tool.slug}
              href={`/blog/${tool.slug}`}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50"
            >
              <div className="w-full h-40 relative">
                <img
                  src="/pdfdoc.webp"
                  alt={tool.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{tool.name}</h3>
                <p className="text-gray-600 text-sm">
                  Read our guide for {tool.name} with FAQs, tips, and step-by-step instructions.
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
