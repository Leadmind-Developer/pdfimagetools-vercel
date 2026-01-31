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

        {/* PayPal */}
        <div className="flex flex-col items-center">
          <a
            href="https://paypal.me/teemmiej"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium mb-2"
          >
            Donate via PayPal
          </a>
          <a
            href="https://paypal.me/teemmiej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/bdg_secured_by_pp_2line.png"
              alt="Secured by PayPal"
              className="w-32 mx-auto"
            />
          </a>
        </div>

        {/* Flutterwave */}
        <div className="flex flex-col items-center">
          <a
            href="https://flutterwave.com/pay/enkl6s6cpibf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 font-medium mb-2"
          >
            Donate via Flutterwave
          </a>
          <a
            href="https://flutterwave.com/pay/enkl6s6cpibf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/flutterwave.png"
              alt="Flutterwave"
              className="w-32 mx-auto"
            />
          </a>
        </div>

        {/* Paystack */}
        <div className="flex flex-col items-center">
          <a
            href="https://paystack.shop/pay/pdfimagetools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium mb-2"
          >
            Donate via Paystack
          </a>
          <a
            href="https://paystack.shop/pay/pdfimagetools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Paystack-Logo.jpg"
              alt="Paystack"
              className="w-32 mx-auto"
            />
          </a>
        </div>

      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Every contribution helps with server costs and improvements 🙏
      </p>
    </div>
  );
}
