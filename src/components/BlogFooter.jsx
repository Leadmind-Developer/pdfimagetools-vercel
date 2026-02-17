"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* =========================
   Bidvertiser Native Ad
========================= */
function BidvertiserNativeAd() {
  const containerRef = useRef(null);
  const pathname = usePathname(); // detects route change

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔥 Force completely fresh container every time
    const wrapper = containerRef.current;
    wrapper.innerHTML = "";

    // unique id EVERY render
    const widgetId = "ntv_" + Date.now();

    const adDiv = document.createElement("div");
    adDiv.id = widgetId;
    wrapper.appendChild(adDiv);

    // small delay = wait for hydration to finish
    const timer = setTimeout(() => {
      const params = {
        bvwidgetid: widgetId,
        bvlinksownid: 2103688,
        rows: 1,
        cols: 2,
        textpos: "below",
        imagewidth: 220,
        mobilecols: 1,
        cb: Date.now(),
      };

      const qs = Object.keys(params)
        .map((k) => k + "=" + encodeURIComponent(params[k]))
        .join("&");

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        (location.protocol === "https:" ? "https" : "http") +
        "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
        qs;

      adDiv.appendChild(script);
    }, 400); // ⭐ critical delay

    return () => clearTimeout(timer);
  }, [pathname]); // ⭐ re-run on navigation

  return (
    <div
      ref={containerRef}
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        minHeight: "120px", // prevents layout shift
      }}
    />
  );
}

/* =========================
   Blog Footer
========================= */
export default function BlogFooter() {
  return (
    <footer
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
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginRight: "0.5rem",
          }}
        >
          Privacy Policy
        </a>
        <span> | </span>
        <a
          href="/terms"
          style={{
            color: "#007bff",
            textDecoration: "none",
            marginLeft: "0.5rem",
          }}
        >
          Terms of Service
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights
        reserved.
      </p>

      {/* Bidvertiser verification */}
      <div style={{ display: "none" }}>
        {/* Bidvertiser2103688 */}
      </div>
    </footer>
  );
}
