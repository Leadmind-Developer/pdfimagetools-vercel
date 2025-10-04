import React from "react";
import Link from "next/link";

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <h3>Popular PDF & Image Tools — Fast & Free</h3>
      <p className="features-intro">
        Quickly convert, edit, and manage your PDFs and images with these easy-to-use tools.
      </p>
      <div className="feature-grid">
        <Link href="/pdf-to-word" className="feature-card">Convert PDF to Word</Link>
        <Link href="/pdf-to-ppt" className="feature-card">Convert PDF to PowerPoint</Link>
        <Link href="/pdf-to-image" className="feature-card">Convert PDF to Images</Link>
        <Link href="/image-to-pdf" className="feature-card">Convert Images to PDF</Link>
        <Link href="/combine-pdfs" className="feature-card">Combine Multiple PDFs</Link>
        <Link href="/remove-image-background" className="feature-card">Remove Image Background</Link>
        <Link href="/resize-passport-photo" className="feature-card">Resize Passport Photo</Link>
        <Link href="/image-converter" className="feature-card">Convert Image Formats</Link>
      </div>
    </div>
  </section>
);

export default Features;
