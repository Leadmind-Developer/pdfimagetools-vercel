"use client";

import React, { useEffect, useState } from "react";

function BidvertiserNativeAd() {
  const [adId] = useState(() => "ntv_" + Date.now()); // unique per mount

  useEffect(() => {
    const container = document.getElementById(adId);
    if (!container) return;

    const params = {
      bvwidgetid: adId,
      bvlinksownid: 2103688,
      rows: 1,
      cols: 2,
      textpos: "below",
      imagewidth: 220,
      mobilecols: 1,
      cb: new Date().getTime(),
    };

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

    container.innerHTML = ""; // clear old content
    container.appendChild(s);
  }, [adId]);

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div id={adId}></div>
    </div>
  );
}

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
