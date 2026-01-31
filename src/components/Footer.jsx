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
    { href: "/contact", label: "Contact Us" }, // SEO friendly page
    { href: "mailto:support@pdfimagetools.app", label: "Support Email" },
  ];

  return (
    <footer className="footer-container">
      {/* Donation */}
      <DonationSupport />

      <div className="footer-note">
        Built with ❤️ for privacy-friendly online conversions.
      </div>

      {/* Link sections */}
      <div className="footer-sections">

        <div className="footer-section">
          <h4>PDF Tools</h4>
          {pdfLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h4>Image & File Tools</h4>
          {imageToolsLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          {legalLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>

      </div>

      {/* Copyright last */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </div>

      <style jsx>{`
        .footer-container {
          background: var(--background);
          color: var(--foreground);
          border-top: 1px solid #ccc;
          padding: 2.5rem 1rem 1.5rem;
          text-align: center;
        }

        .footer-note {
          font-size: 0.85rem;
          margin-top: 1.5rem;
          color: #555;
        }

        .footer-sections {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-section h4 {
          margin-bottom: 0.6rem;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .footer-section a {
          margin: 3px 0;
          font-size: 0.85rem;
          text-decoration: none;
          color: var(--foreground);
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #0079cd;
        }

        .footer-copyright {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: #555;
        }

        @media (max-width: 600px) {
          .footer-sections {
            flex-direction: column;
            gap: 1.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
