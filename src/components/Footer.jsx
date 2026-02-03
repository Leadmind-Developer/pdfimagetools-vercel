import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Load donation after initial render (no LCP impact)
const DonationSupport = dynamic(
  () => import("./DonationSupport"),
  { ssr: false }
);

export default function Footer() {
  const pdfLinks = [
    { href: "/pdf-to-word", label: "PDF to Word" },
    { href: "/pdf-to-ppt", label: "PDF to PowerPoint" },
    { href: "/pdf-to-image", label: "PDF to Image" },
    { href: "/image-to-pdf", label: "Image to PDF" },
    { href: "/pdf-to-excel", label: "PDF to Excel" },
    { href: "/ppt-to-pdf", label: "PPT to PDF" },
    { href: "/word-to-pdf", label: "Word to PDF" },
    { href: "/excel-to-pdf", label: "Excel to PDF" },
  ];

  const imageToolsLinks = [
    { href: "/combine-pdfs", label: "Combine PDFs" },
    { href: "/remove-image-background", label: "Remove Background" },
    { href: "/resize-passport-photo", label: "Resize Passport Photo" },
    { href: "/image-converter", label: "Image Converter" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-gray-300 px-4 py-10 text-center">

      {/* Donation loads only on client AFTER paint */}
      <DonationSupport />

      <p className="text-sm text-gray-600 mt-6">
        Built with ❤️ for privacy-friendly online conversions.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-8">

        <div className="flex flex-col items-center space-y-1">
          <h4 className="font-semibold text-sm mb-1">PDF Tools</h4>
          {pdfLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-1">
          <h4 className="font-semibold text-sm mb-1">Image & File Tools</h4>
          {imageToolsLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-blue-600">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-1">
          <h4 className="font-semibold text-sm mb-1">Legal</h4>
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm hover:text-blue-600">
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:support@pdfimagetools.app"
            className="text-sm hover:text-blue-600"
          >
            Support Email
          </a>
        </div>

      </div>

      <p className="text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </p>

    </footer>
  );
}
