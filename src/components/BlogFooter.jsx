"use client";

import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

const BlogFooter = ({ isDarkMode }) => {
  return (
    <footer
      style={{
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        fontSize: "0.9rem",
        color: isDarkMode ? "#aaa" : "#888",
      }}
    >
      {/* Native Ad Placement */}
      <div style={{ marginBottom: "20px" }}>
        <BidvertiserNativeAd />
      </div>

      {/* Policy Links */}
      <p>
        <a
          href="/privacy"
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          Privacy Policy
        </a>
        |
        <a
          href="/terms"
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginLeft: "1rem",
          }}
        >
          Terms of Service
        </a>
      </p>

      {/* Copyright */}
      <p>
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default BlogFooter;
