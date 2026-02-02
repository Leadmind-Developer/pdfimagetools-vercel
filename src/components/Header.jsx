// src/components/Header.jsx
import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="logo">PDFImageTools</h1>
      <nav>
        <a href="#features">Features</a>
        <Link href="/tools">Tools</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://pdfimagetools.app/blog" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </nav>
    </div>
  </header>
);

export default Header;


