"use client";

import React from "react";
import Image from "next/image";

export default function DonationSupport() {
  return (
    <div className="max-w-[600px] mx-auto my-8 p-6 border border-gray-300 rounded-xl text-center shadow-sm">

      <h2 className="text-xl font-semibold mb-3">
        Support PDF Image Tools ❤️
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        This platform is free to use but costs money to run. If this tool helped you,
        please consider supporting us.
      </p>

      <p className="font-semibold mb-4">Donate via:</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

        <a href="https://paypal.me/teemmiej" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/paypal_PDFTools.png"
            width={120}
            height={60}
            alt="PayPal"
            loading="lazy"
          />
        </a>

        <a href="https://flutterwave.com/pay/enkl6s6cpibf" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/flutterwave.png"
            width={120}
            height={60}
            alt="Flutterwave"
            loading="lazy"
          />
        </a>

        <a href="https://paystack.shop/pay/pdfimagetools" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/Paystack-Logo.jpg"
            width={120}
            height={60}
            alt="Paystack"
            loading="lazy"
          />
        </a>

      </div>

    </div>
  );
}
