"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BlogAd({
  rows = 1,
  cols = 3,
  imagewidth = 200,
  mobilecols = 1
}) {
  const adRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!adRef.current) return;

    // Clear container completely
    adRef.current.innerHTML = "";

    const cb = Date.now();
    const widgetId = "ntv_2103688_" + cb;

    const container = document.createElement("div");
    container.id = widgetId;

    adRef.current.appendChild(container);

    const params = {
      bvwidgetid: widgetId,
      bvlinksownid: 2103688,
      rows,
      cols,
      textpos: "below",
      imagewidth,
      mobilecols,
      cb
    };

    const query = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&");

    const script = document.createElement("script");

    script.src =
      (location.protocol === "https:" ? "https" : "http") +
      "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
      query;

    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname, rows, cols, imagewidth]);

  return (
    <div
      ref={adRef}
      style={{
        margin: "40px 0",
        display: "flex",
        justifyContent: "center",
        minHeight: "120px"
      }}
    />
  );
}
