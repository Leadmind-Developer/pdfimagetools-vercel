import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-container">
      <div className="footer-column tools-left">
        <h4>Popular Tools</h4>
        <ul>
          <li><Link href="/pdf-to-word">PDF to Word</Link></li>
          <li><Link href="/pdf-to-ppt">PDF to PPT</Link></li>
          <li><Link href="/pdf-to-image">PDF to Image</Link></li>
          <li><Link href="/image-to-pdf">Image to PDF</Link></li>
        </ul>
      </div>

      <div className="footer-column footer-center">
        <p>&copy; 2025 Leadmind Developer. All rights reserved.</p>
        <p>
          <a href="/privacy.html">Privacy</a> | <a href="/terms.html">Terms</a> |{" "}
          <a href="mailto:support@thetechtrep.com">Contact</a>
        </p>
        <p>
          Email us:{" "}
          <a href="mailto:support@thetechtrep.com">support@thetechtrep.com</a>
        </p>
      </div>

      <div className="footer-column tools-right">
        <h4>Popular Tools</h4>
        <ul>
          <li><Link href="/combine-pdfs">Combine PDFs</Link></li>
          <li><Link href="/remove-image-background">Remove Background</Link></li>
          <li><Link href="/resize-passport-photo">Resize Passport Photo</Link></li>
          <li><Link href="/image-converter">Image Converter</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
