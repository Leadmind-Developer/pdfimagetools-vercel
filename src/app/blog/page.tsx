import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileImage,
  FaImage,
  FaFile,
  FaRegFileAlt,
  FaRegFilePowerpoint,
  FaMagic,
  FaUserEdit,
  FaExchangeAlt,
} from "react-icons/fa";

export const metadata = {
  title: "PDF & Image Tools Blog | PDFImageTools",
  description:
    "Explore guides, tutorials, and tips for using PDFImageTools. Learn how to merge PDFs, convert documents, resize images, remove backgrounds, and more.",
};

const tools = [
  { name: "Merge PDF", slug: "mergepdf", icon: FaFilePdf },
  { name: "PDF to Word", slug: "pdf-to-word", icon: FaFileWord },
  { name: "PDF to Excel", slug: "pdf-to-excel", icon: FaFileExcel },
  { name: "PDF to PPT", slug: "pdf-to-ppt", icon: FaFilePowerpoint },
  { name: "PDF to Image", slug: "pdf-to-image", icon: FaFileImage },
  { name: "Image to PDF", slug: "image-to-pdf", icon: FaImage },
  { name: "Word to PDF", slug: "word-to-pdf", icon: FaFileWord },
  { name: "Excel to PDF", slug: "excel-to-pdf", icon: FaFileExcel },
  { name: "PPT to PDF", slug: "ppt-to-pdf", icon: FaRegFilePowerpoint },
  { name: "Remove Image Background", slug: "remove-image-background", icon: FaMagic },
  { name: "Resize Passport Photo", slug: "resize-passport-photo", icon: FaUserEdit },
  { name: "Image Converter", slug: "image-converter", icon: FaExchangeAlt },
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
          {tools.map(tool => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.slug}
                href={`/blog/${tool.slug}`}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50 flex flex-col items-center p-6"
              >
                <div className="text-blue-600 mb-4">
                  <Icon size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{tool.name}</h3>
                <p className="text-gray-600 text-sm text-center">
                  Read our guide for {tool.name} with FAQs, tips, and step-by-step instructions.
                </p>
              </a>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
