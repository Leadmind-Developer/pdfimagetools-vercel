"use client";

import React from "react";
import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

export default function BlogFooter() {
  return (
    <footer className="blog-footer">

      {/* Native Ad (primary monetization on blogs) */}
      <div className="blog-footer-ad">
        <BidvertiserNativeAd />
      </div>

      <div className="blog-footer-links">
        <a href="/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="/terms">Terms of Service</a>
      </div>

      <p className="blog-footer-copy">
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </p>

      {/* Bidvertiser verification */}
      <p
        className="blog-footer-verification"
        dangerouslySetInnerHTML={{
          __html: "<!-- Bidvertiser2103688 -->",
        }}
      />

    </footer>
  );
}
