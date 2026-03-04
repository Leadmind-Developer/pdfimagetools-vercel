"use client";

import { useRef } from "react";
import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

let paragraphCount = 0;

export default function ParagraphWithAds({ children }) {
  paragraphCount++;

  return (
    <>
      <p>{children}</p>

      {paragraphCount === 2 && (
        <BidvertiserNativeAd rows={1} cols={3} imagewidth={180} />
      )}

      {paragraphCount === 6 && (
        <BidvertiserNativeAd rows={1} cols={3} imagewidth={180} />
      )}
    </>
  );
}
