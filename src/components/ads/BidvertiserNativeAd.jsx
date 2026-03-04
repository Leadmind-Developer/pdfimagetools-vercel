"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function BidvertiserNativeAd({
  rows = 1,
  cols = 2,
  imagewidth = 220,
  mobilecols = 1,
}) {
  const adRef = useRef(null);
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (adRef.current) observer.observe(adRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !adRef.current) return;

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
      cb,
    };

    const qs = Object.keys(params)
      .map((k) => k + "=" + encodeURIComponent(params[k]))
      .join("&");

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn.hyperpromote.com/bidvertiser/tags/active/bdvws.js?" + qs;

    document.body.appendChild(script);

    return () => {
      document
        .querySelectorAll(`script[src*="bdvws.js"]`)
        .forEach((s) => s.remove());
    };

  }, [pathname, visible]);

  return (
    <div
      ref={adRef}
      style={{
        margin: "30px 0",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}
