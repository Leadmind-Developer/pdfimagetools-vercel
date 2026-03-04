// src/utils/injectAdsIntoHtml.tsx
import React from "react";
import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

/**
 * Injects BidvertiserNativeAd components after certain paragraphs in HTML content.
 * Works for posts rendered as JSX with multiple <p> blocks or innerHTML strings.
 *
 * @param content Array of JSX elements or strings (paragraphs)
 * @param adPositions Array of indices after which to insert ads (1-based)
 * @returns Array of JSX with ads injected
 */
export function injectAdsIntoContent(
  content: (string | JSX.Element)[],
  adPositions: number[] = [2, 6] // default after 2nd and 6th paragraph
) {
  const result: (string | JSX.Element)[] = [];

  content.forEach((block, index) => {
    result.push(block);

    // Check if we need to inject an ad after this block
    if (adPositions.includes(index + 1)) {
      result.push(
        <BidvertiserNativeAd
          key={`ad-${index + 1}`}
          rows={1}
          cols={3}
          imagewidth={180}
        />
      );
    }
  });

  return result;
}
