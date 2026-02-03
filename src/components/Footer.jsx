"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./Footer.module.css";

// Lazy load donation (client-only, after paint)
const DonationSupport = dynamic(
  () => import("./DonationSupport"),
  { ssr: false, loading: () => null }
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
    <footer className={styles.footerContainer}>

      {/* Donation loads after main render */}
      <DonationSupport />

      <div className={styles.footerNote}>
        Built with ❤️ for privacy-friendly online conversions.
      </div>

      <div className={styles.footerSections}>

        <div className={styles.footerSection}>
          <h4>PDF Tools</h4>
          {pdfLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerSection}>
          <h4>Image & File Tools</h4>
          {imageToolsLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerSection}>
          <h4>Legal</h4>
          {legalLinks.map(link => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href="mailto:support@pdfimagetools.app">Support Email</a>
        </div>

      </div>

      <div className={styles.footerCopyright}>
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </div>

    </footer>
  );
}
