import React from "react";

export default function DonationSupport() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 border dark:border-zinc-800 text-center">
      <h2 className="text-2xl font-semibold mb-2">Support PDF Image Tools ❤️</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
        This platform is free to use but costs money to run.
        If this tool helped you, please consider supporting us to keep it online.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

        {/* PayPal QR + Logo + Link */}
        <div className="flex flex-col items-center">
          {/* QR Code */}
          <img
            src="/public/Paypal-qrcode.png"
            alt="PayPal QR Code"
            className="w-32 h-32 mb-2"
          />

          {/* PayPal Logo with link */}
          <a
            href="https://www.paypal.com/us/digital-wallet/ways-to-pay/add-payment-method"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2"
          >
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/bdg_secured_by_pp_2line.png"
              alt="Secured by PayPal"
              className="mx-auto"
            />
          </a>

          {/* How PayPal Works link */}
          <a
            href="https://www.paypal.com/us/brc/article/how-paypal-works"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-semibold"
          >
            How PayPal Works
          </a>

          {/* Donate button */}
          <a
            href="https://paypal.me/teemmiej"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium mt-2 transition"
          >
            Donate via PayPal
          </a>
        </div>

        {/* Flutterwave */}
        <a
          href="https://flutterwave.com/pay/enkl6s6cpibf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
        >
          Donate via Flutterwave
        </a>

        {/* Paystack */}
        <a
          href="https://paystack.shop/pay/pdfimagetools"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
        >
          Donate via Paystack
        </a>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Every contribution helps with server costs and improvements 🙏
      </p>
    </div>
  );
}
