import React from "react";
import Link from "next/link";

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <h3>Popular PDF & Image Tools — Fast, Secure & Free</h3>
      <p className="features-intro">
        Convert, edit, and manage your PDF, Word, PowerPoint, Excel, and image files effortlessly. 
        No watermarks. No sign-up. 100% online.
      </p>

      <div className="feature-grid">
        {/* PDF Converters */}
        <Link href="/pdf-to-word" className="feature-card">
          Convert PDF to Word
        </Link>
        <Link href="/pdf-to-ppt" className="feature-card">
          Convert PDF to PowerPoint
        </Link>
        <Link href="/pdf-to-image" className="feature-card">
          Convert PDF to Images
        </Link>
        <Link href="/pdf-to-excel" className="feature-card">
          Convert PDF to Excel
        </Link>

        {/* To-PDF Tools */}
        <Link href="/image-to-pdf" className="feature-card">
          Convert Images to PDF
        </Link>
        <Link href="/word-to-pdf" className="feature-card">
          Convert Word to PDF
        </Link>
        <Link href="/ppt-to-pdf" className="feature-card">
          Convert PowerPoint to PDF
        </Link>
        <Link href="/excel-to-pdf" className="feature-card">
          Convert Excel to PDF
        </Link>

        {/* Utility Tools */}
        <Link href="/combine-pdfs" className="feature-card">
          Combine Multiple PDFs
        </Link>
        <Link href="/remove-image-background" className="feature-card">
          Remove Image Background
        </Link>
        <Link href="/resize-passport-photo" className="feature-card">
          Resize Passport Photo
        </Link>
        <Link href="/image-converter" className="feature-card">
          Convert Image Formats
        </Link>
        <Link href="/compress-pdf" className="feature-card">
          Compress & Reduce PDF 
        </Link>
        <Link href="/split-pdf" className="feature-card">
         Split & Extract PDF Pages
       </Link>
        <Link href="/pdf-sign" className="feature-card">
          Sign PDF e-Signature
        </Link>
        <Link href="/password-pdf" className="feature-card">
          Secure or Remove Passwords
        </Link>
      </div>
    </div>
  </section>
);

export default Features;

