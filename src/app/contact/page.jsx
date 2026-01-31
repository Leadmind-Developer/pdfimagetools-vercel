import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | PDFImageTools",
  description:
    "Contact PDFImageTools for support, feedback, or questions about our free online PDF and image conversion tools.",
};

export default function ContactPage() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2.5rem 1.5rem",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    textAlign: "center",
    color: "#222",
  };

  const subTextStyle = {
    fontSize: "1.15rem",
    color: "#555",
    textAlign: "center",
    lineHeight: 1.6,
    marginBottom: "2.5rem",
  };

  const boxStyle = {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    borderRadius: "8px",
    textAlign: "center",
  };

  const emailStyle = {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#0070f3",
    textDecoration: "none",
  };

  const noteStyle = {
    marginTop: "1.5rem",
    fontSize: "1rem",
    color: "#555",
    lineHeight: 1.6,
  };

  const homeButtonStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    marginBottom: "2rem",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <main style={containerStyle}>
      {/* Back Home */}
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/" style={homeButtonStyle}>
          ← Back to PDFImageTools
        </Link>
      </div>

      <h1 style={headingStyle}>Contact Us</h1>

      <p style={subTextStyle}>
        Have questions, feedback, or need help using PDFImageTools?  
        We’re here to support you.
      </p>

      <div style={boxStyle}>
        <p style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
          You can reach us anytime via email:
        </p>

        <a
          href="mailto:support@pdfimagetools.app"
          style={emailStyle}
        >
          support@pdfimagetools.app
        </a>

        <p style={noteStyle}>
          We usually respond within 24 hours.  
          Feel free to report issues, suggest features, or ask for help.
        </p>
      </div>

      {/* SEO content block */}
      <section style={{ marginTop: "3rem", color: "#555", lineHeight: 1.7 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#222" }}>
          Why Contact PDFImageTools?
        </h2>

        <p>
          PDFImageTools provides free online tools for PDF conversion, merging,
          image processing, and document management. We focus on privacy,
          speed, and ease of use.
        </p>

        <p>
          If you experience any problems with our PDF to Word, PDF merge,
          image to PDF, or other tools, our support team is happy to help.
        </p>

        <p>
          Your feedback helps us improve and build better online tools for everyone.
        </p>
      </section>
    </main>
  );
}
