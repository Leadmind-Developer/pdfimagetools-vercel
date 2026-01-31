"use client";

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

      <div className="footer-sections">
        <div className="footer-section">
          <h4>PDF Tools</h4>
          {pdfLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-section">
          <h4>Image & File Tools</h4>
          {imageToolsLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          {legalLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.href} href={link.href}>{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            )
          )}
        </div>
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

        .footer-note, .footer-copyright, .footer-email {
          font-size: 0.85rem;
          margin-top: 1rem;
          color: #555;
        }

        .footer-sections {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-section h4 {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .footer-section a {
          margin: 2px 0;
          font-size: 0.85rem;
          text-decoration: none;
          color: var(--foreground);
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #0079cd;
        }

        @media (max-width: 600px) {
          .footer-sections {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
