import React from "react";
import Link from "next/link";
import DonationSupport from "./DonationSupport";

const Footer = () => (
  <footer className="footer bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-10 mt-16">
    <div className="container mx-auto px-4 text-gray-700 dark:text-gray-300 text-center">

      {/* Donation section */}
      <DonationSupport />

      {/* Bottom note */}
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-8">
        Built with ❤️ for privacy-friendly online conversions.
      </div>

      {/* Links below */}
      <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/privacy" className="hover:text-blue-600 mx-2">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-blue-600 mx-2">Terms of Service</Link>
        <a href="mailto:support@pdfimagetools.app" className="hover:text-blue-600 mx-2">Contact</a>
      </div>

      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        📧 <a href="mailto:support@pdfimagetools.app" className="hover:text-blue-600 font-medium">
          support@pdfimagetools.app
        </a>
      </div>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
