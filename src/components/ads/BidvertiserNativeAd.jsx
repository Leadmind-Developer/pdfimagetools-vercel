"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BidvertiserNativeAd() {
  const adRef = useRef(null);
  const pathname = usePathname(); // ⭐ detects route change

  useEffect(() => {
    if (!adRef.current) return;

    // Clear previous ad instance
    adRef.current.innerHTML = "";

    const cb = Date.now();
    const widgetId = "ntv_2103688_" + cb;

    const container = document.createElement("div");
    container.id = widgetId;
    adRef.current.appendChild(container);

    const params = {
      bvwidgetid: widgetId,
      bvlinksownid: 2103688,
      rows: 1,
      cols: 2,
      textpos: "below",
      imagewidth: 220,
      mobilecols: 1,
      cb,
    };

    const qs = Object.keys(params)
      .map((k) => k + "=" + encodeURIComponent(params[k]))
      .join("&");

    const script = document.createElement("script");
    script.async = true;
    script.src =
      (document.location.protocol === "https:" ? "https" : "http") +
      "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
      qs;

    container.appendChild(script);

  }, [pathname]); // ⭐ THIS is the fix

  return (
    <div
      ref={adRef}
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}
