"use client";

import { useEffect, useRef } from "react";

export default function BlogAd({
  rows = 1,
  cols = 3,
  imagewidth = 200,
}) {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

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
  }, []);

  return (
    <div
      ref={adRef}
      className="my-10 flex justify-center"
      style={{
        minHeight: "160px",
      }}
    />
  );
}
