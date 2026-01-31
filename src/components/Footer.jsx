"use client"; // Needed if you use any client-side code

import React from "react";
import Link from "next/link";
import DonationSupport from "./DonationSupport";

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
    { href: "mailto:support@pdfimagetools.app", label: "Contact" },
  ];

  return (
    <footer className="footer-container">
      <DonationSupport />

      <div className="footer-note">
        Built with ❤️ for privacy-friendly online conversions.
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </div>

      <div className="footer-links">
        {pdfLinks.map((link) =>
          <Link key={link.href} href={link.href}>{link.label}</Link>
        )}
        {imageToolsLinks.map((link) =>
          <Link key={link.href} href={link.href}>{link.label}</Link>
        )}
        {legalLinks.map((link) =>
          link.href.startsWith("mailto:") ? (
            <a key={link.href} href={link.href}>{link.label}</a>
          ) : (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          )
        )}
      </div>

      <div className="footer-email">
        📧 <a href="mailto:support@pdfimagetools.app">support@pdfimagetools.app</a>
      </div>

      <style jsx>{`
        .footer-container {
          background: var(--background);
          color: var(--foreground);
          border-top: 1px solid #ccc;
          padding: 2rem 1rem;
          text-align: center;
        }

        .footer-note {
          font-size: 0.85rem;
          margin-top: 2rem;
          color: #555;
        }

        .footer-copyright {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: #555;
        }

        .footer-links {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .footer-links a {
          color: var(--foreground);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #0079cd;
        }

        .footer-email {
          margin-top: 0.75rem;
          font-size: 0.85rem;
        }

        .footer-email a {
          color: var(--foreground);
          text-decoration: none;
        }

        .footer-email a:hover {
          color: #0079cd;
        }

        @media (max-width: 500px) {
          .footer-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
