import React from "react";
import PdfSplitUploader from "../../components/PdfSplitUploader";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function SplitPdfPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ flex: 1, maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>

        <Link href="/" style={{
          display: "inline-block",
          marginBottom: "2rem",
          background: "#0070f3",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 600
        }}>
          PDFImageTools Home
        </Link>

        <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700 }}>
          Split PDF Files Online
        </h1>

        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Extract specific pages from your PDF instantly. Free, fast & secure.
        </p>

        <PdfSplitUploader />

      </main>
      <Footer />
    </div>
  );
}
