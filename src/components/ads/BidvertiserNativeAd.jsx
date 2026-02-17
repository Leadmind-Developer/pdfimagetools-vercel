"use client";

import { useEffect, useRef } from "react";

export default function BidvertiserNativeAd() {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    const cb = new Date().getTime();
    const widgetId = "ntv_2103688_" + cb;

    // Clear old children if re-rendered
    adRef.current.innerHTML = "";

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

    adRef.current.id = params.bvwidgetid;

    const qs = Object.keys(params)
      .map((k) => k + "=" + encodeURIComponent(params[k]))
      .join("&");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      (document.location.protocol === "https:" ? "https" : "http") +
      "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
      qs;

    adRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={adRef}
      style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
    ></div>
  );
}
