"use client";

import Image from "next/image";
import BidvertiserNativeAd from "@/components/ads/BidvertiserNativeAd";

export default function DonationSupport({ variant = "compact" }) {
  return (
    <div
      className={`mx-auto my-12 ${
        variant === "compact" ? "max-w-4xl" : "max-w-2xl"
      }`}
    >
      {/* ===== Native Ad (Primary Monetization) ===== */}
      <div className="mb-10">
        <BidvertiserNativeAd
          rows={1}
          cols={1}
          imagewidth={300}
          mobilecols={1}
        />
      </div>

      {/* ===== Donation Block (Secondary) ===== */}
      <div className="border border-gray-200 rounded-2xl bg-gray-50 p-6 text-center shadow-sm">

        <h3 className="text-lg font-semibold mb-2">
          Enjoying PDF Image Tools?
        </h3>

        <p className="text-sm text-gray-600 mb-5">
          If this tool saved you time, consider supporting ongoing development.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">

          <a
            href="https://paypal.me/teemmiej"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/logo/paypal_PDFTools.png"
              width={105}
              height={45}
              alt="Support via PayPal"
              loading="lazy"
            />
          </a>

          <a
            href="https://flutterwave.com/pay/enkl6s6cpibf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/logo/flutterwave.png"
              width={105}
              height={45}
              alt="Support via Flutterwave"
              loading="lazy"
            />
          </a>

          <a
            href="https://paystack.shop/pay/pdfimagetools"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/logo/Paystack-Logo.jpg"
              width={105}
              height={45}
              alt="Support via Paystack"
              loading="lazy"
            />
          </a>

        </div>

        <p className="text-xs text-gray-500 mt-4">
          Secure payments handled by trusted providers.
        </p>

      </div>
    </div>
  );
}
