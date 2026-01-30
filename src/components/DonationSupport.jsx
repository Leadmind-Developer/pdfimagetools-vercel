import React from "react";

export default function DonationSupport() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-center">
      <h2 className="text-2xl font-semibold mb-2">Support PDF Image Tools ❤️</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
        This platform is free to use but costs money to run.
        If this tool helped you, please consider supporting us to keep it online.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Paystack */}
        <a
          href="#PAYSTACK_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
        >
          Donate via Paystack
        </a>

        {/* Flutterwave */}
        <a
          href="#FLUTTERWAVE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
        >
          Donate via Flutterwave
        </a>

        {/* PayPal */}
        <a
          href="#PAYPAL_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Donate via PayPal
        </a>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Every contribution helps with server costs and improvements 🙏
      </p>
    </div>
  );
}
