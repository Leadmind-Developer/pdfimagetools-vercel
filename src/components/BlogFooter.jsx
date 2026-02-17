"use client";

import React from "react";
import { usePathname } from "next/navigation";

// Wrapper to force remount on route change
function BidvertiserNativeAd() {
  const pathname = usePathname();

  return <BidvertiserNativeAdInner key={pathname} />;
}

// Original ad component
function BidvertiserNativeAdInner() {
  React.useEffect(() => {
    const container = document.getElementById("ntv_2103688");

    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = "true";

    const params = {
      bvwidgetid: "ntv_2103688",
      bvlinksownid: 2103688,
      rows: 1,
      cols: 2,
      textpos: "below",
      imagewidth: 220,
      mobilecols: 1,
      cb: new Date().getTime(),
    };

    params.bvwidgetid = "ntv_2103688" + params.cb;
    container.id = params.bvwidgetid;

    const qs = Object.keys(params)
      .map((k) => k + "=" + encodeURIComponent(params[k]))
      .join("&");

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src =
      (document.location.protocol === "https:" ? "https" : "http") +
      "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
      qs;

    container.appendChild(s);
  }, []);

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div id="ntv_2103688"></div>
    </div>
  );
}

export default function BlogFooter() {
  return (
    <footer
      className="blog-footer"
      style={{
        padding: "2rem 1rem",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#555",
      }}
    >
      {/* Native Ad */}
      <BidvertiserNativeAd />

      {/* Links */}
      <div style={{ margin: "1rem 0" }}>
        <a
          href="/privacy"
          style={{ color: "#007bff", textDecoration: "none", marginRight: "0.5rem" }}
        >
          Privacy Policy
        </a>
        <span>|</span>
        <a
          href="/terms"
          style={{ color: "#007bff", textDecoration: "none", marginLeft: "0.5rem" }}
        >
          Terms of Service
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights
        reserved.
      </p>

      {/* Bidvertiser verification */}
      <p
        dangerouslySetInnerHTML={{
          __html: "<!-- Bidvertiser2103688 -->",
        }}
      />
    </footer>
  );
}
