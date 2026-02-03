import React from "react";
import Footer from "../../components/Footer";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileImage,
  FaImage,
  FaRegFilePowerpoint,
  FaMagic,
  FaUserEdit,
  FaExchangeAlt,
  FaNewspaper, // for PDFImageTools blog
} from "react-icons/fa";

export const metadata = {
  title: "PDF & Image Tools Blog | PDFImageTools",
  description:
    "Explore guides, tutorials, and tips for using PDFImageTools. Learn how to merge PDFs, convert documents, resize images, remove backgrounds, and more.",
};

const tools = [
  { name: "Overview", slug: "pdfimagetools", icon: FaNewspaper }, // added main blog page
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
  { name: "Compress PDF", slug: "compress-pdf", icon: FaFilePdf },
  { name: "Image Converter", slug: "image-converter", icon: FaExchangeAlt },
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      
      {/* Clickable Page Title */}
      <header className="py-6 bg-gray-100 dark:bg-gray-800 text-center shadow">
        <a
          href="/"
          className="text-3xl font-bold text-blue-600 hover:underline dark:text-blue-400"
        >
          PDFImageTools
        </a>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          PDF & Image Tools Blog
        </h1>
        <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
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
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 flex flex-col items-center p-6"
              >
                <div className="text-blue-600 mb-4 dark:text-blue-400">
                  <Icon size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 text-center">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
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
