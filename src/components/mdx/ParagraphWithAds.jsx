"use client";

import { ReactNode, useRef } from "react";
import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

interface ParagraphWithAdsProps {
  children: ReactNode;
  index: number;
}

export default function ParagraphWithAds({ children, index }: ParagraphWithAdsProps) {
  return (
    <>
      <p>{children}</p>

      {/* After 2nd paragraph */}
      {index === 2 && <BidvertiserNativeAd rows={1} cols={3} imagewidth={180} />}

      {/* After 6th paragraph */}
      {index === 6 && <BidvertiserNativeAd rows={1} cols={3} imagewidth={180} />}
    </>
  );
}
