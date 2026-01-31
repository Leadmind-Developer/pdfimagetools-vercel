import React from "react";
import Link from "next/link";
import DonationSupport from "./DonationSupport";

const Footer = () => (
  <footer className="footer bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-10 mt-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">

      {/* Left column */}
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Convert PDFs</h4>
        <ul className="space-y-2">
          <li><Link href="/pdf-to-word" className="hover:text-blue-600">PDF to Word</Link></li>
          <li><Link href="/pdf-to-ppt" className="hover:text-blue-600">PDF to PowerPoint</Link></li>
          <li><Link href="/pdf-to-image" className="hover:text-blue-600">PDF to Image</Link></li>
          <li><Link href="/image-to-pdf" className="hover:text-blue-600">Image to PDF</Link></li>
        </ul>
      </div>

      {/* Center column */}
      <div className="text-center flex flex-col justify-center">
        <DonationSupport />

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-5">
          © {new Date().getFullYear()} <strong>PDFImageTools</strong>. All rights reserved.
        </p>

        <nav aria-label="Legal links" className="text-sm mt-2">
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
          <span className="mx-2 text-gray-400">|</span>
          <a href="mailto:support@pdfimagetools.app" className="hover:text-blue-600">Contact</a>
        </nav>

        <p className="text-sm mt-3 text-gray-500 dark:text-gray-400">
          📧 <a href="mailto:support@pdfimagetools.app" className="hover:text-blue-600 font-medium">
            support@pdfimagetools.app
          </a>
        </p>
      </div>

      {/* Right column */}
      <div className="text-center md:text-right">
        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Image & File Tools</h4>
        <ul className="space-y-2">
          <li><Link href="/combine-pdfs" className="hover:text-blue-600">Combine PDFs</Link></li>
          <li><Link href="/remove-image-background" className="hover:text-blue-600">Remove Background</Link></li>
          <li><Link href="/resize-passport-photo" className="hover:text-blue-600">Resize Passport Photo</Link></li>
          <li><Link href="/image-converter" className="hover:text-blue-600">Image Converter</Link></li>
        </ul>
      </div>
    </div>

    {/* Bottom note */}
    <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
      Built with ❤️ for privacy-friendly online conversions.
    </div>
  </footer>
);

export default Footer;
