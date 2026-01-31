import React from "react";

export default function DonationSupport() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-center">
      <h2 className="text-2xl font-semibold mb-4">Support PDF Image Tools ❤️</h2>

      {/* Intro paragraph */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        This platform is free to use but costs money to run. If this tool helped you, please consider supporting us.
      </p>

      {/* "Donate via" bigger and noticeable */}
      <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Donate via:
      </p>

      {/* Payment gateways */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* PayPal */}
        <a
          href="https://paypal.me/teemmiej"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32"
        >
          <img
            src="/paypal_PDFTools.png"
            alt="PayPal"
            className="w-full rounded-lg shadow hover:scale-105 transition-transform"
          />
        </a>

        {/* Flutterwave */}
        <a
          href="https://flutterwave.com/pay/enkl6s6cpibf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32"
        >
          <img
            src="/flutterwave.png"
            alt="Flutterwave"
            className="w-full rounded-lg shadow hover:scale-105 transition-transform"
          />
        </a>

        {/* Paystack */}
        <a
          href="https://paystack.shop/pay/pdfimagetools"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32"
        >
          <img
            src="/Paystack-Logo.jpg"
            alt="Paystack"
            className="w-full rounded-lg shadow hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
