import React from "react";
import Link from "next/link";
import DonationSupport from "./DonationSupport";

const Footer = () => {
  // List all your internal links for SEO
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
    { href: "mailto:support@pdfimagetools.app", label: "Contact" },
  ];

  return (
    <footer className="footer bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-10 mt-16">
      <div className="container mx-auto px-4 text-center text-gray-700 dark:text-gray-300">

        {/* Donation section */}
        <DonationSupport />

        {/* Bottom note */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-8">
          Built with ❤️ for privacy-friendly online conversions.
        </div>

        {/* Copyright */}
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
        </div>

        {/* All links for SEO */}
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex flex-wrap justify-center gap-3">
          {pdfLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          ))}
          {imageToolsLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </Link>
          ))}
          {legalLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Email contact */}
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          📧 <a href="mailto:support@pdfimagetools.app" className="hover:text-blue-600 font-medium">
            support@pdfimagetools.app
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
