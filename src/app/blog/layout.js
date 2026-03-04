"use client";

import BlogHeader from "../../components/BlogHeader";
import BlogFooter from "../../components/BlogFooter";
import BidvertiserNativeAd from "../../components/ads/BidvertiserNativeAd";
import React from "react";

export default function BlogLayout({ children }) {

  const contentArray = React.Children.toArray(children);

  return (
    <>
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">

        {contentArray.map((child, index) => (
          <React.Fragment key={index}>

            {child}

            {/* After 2nd block */}
            {index === 1 && (
              <BidvertiserNativeAd
                rows={1}
                cols={3}
                imagewidth={180}
              />
            )}

            {/* Mid article */}
            {index === Math.floor(contentArray.length / 2) && (
              <BidvertiserNativeAd
                rows={1}
                cols={3}
                imagewidth={180}
              />
            )}

          </React.Fragment>
        ))}

      </main>

      <BlogFooter />
    </>
  );
}
