"use client";

import { useEffect, useRef } from "react";

export default function BidvertiserNativeAd() {
  const adRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate script injection
    if (!adRef.current || adRef.current.dataset.loaded) return;

    adRef.current.dataset.loaded = "true";

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

    params.bvwidgetid = params.bvwidgetid + params.cb;
    adRef.current.id = params.bvwidgetid;

    const qs = Object.keys(params)
      .map((k) => `${k}=${encodeURIComponent(params[k])}`)
      .join("&");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;

    const protocol =
      window.location.protocol === "https:" ? "https" : "http";

    script.src =
      protocol +
      "://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" +
      qs;

    adRef.current.appendChild(script);
  }, []);

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div id="ntv_2103688" ref={adRef}></div>
    </div>
  );
}
