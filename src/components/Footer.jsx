"use client";

import React, { lazy, Suspense } from "react";
import Link from "next/link";

// Lazy load donation AFTER render (no LCP hit)
const DonationSupport = lazy(() => import("./DonationSupport"));

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
    <footer className="footer">

      {/* Loads after main content */}
      <Suspense fallback={null}>
        <DonationSupport />
      </Suspense>

      <p className="footer-note">
        Built with ❤️ for privacy-friendly online conversions.
      </p>

      <div className="footer-grid">

        <div>
          <h4>PDF Tools</h4>
          {pdfLinks.map(l => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        <div>
          <h4>Image & File Tools</h4>
          {imageToolsLinks.map(l => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        <div>
          <h4>Legal</h4>
          {legalLinks.map(l => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <a href="mailto:support@pdfimagetools.app">Support Email</a>
        </div>

      </div>

      <p className="footer-copy">
  © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
</p>

<p
  className="footer-verification"
  aria-label="Bidvertiser site verification"
  dangerouslySetInnerHTML={{
    __html: "<!-- Bidvertiser2103688 -->",
  }}
/>


