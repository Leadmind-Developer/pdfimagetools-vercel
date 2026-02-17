"use client";

import { useEffect } from "react";

export default function BidvertiserNativeAd() {
  useEffect(() => {
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
