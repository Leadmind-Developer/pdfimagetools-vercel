import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="footer bg-gray-50 border-t border-gray-200 py-10 mt-16" id="contact">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-gray-700">
      
      {/* Left column */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-900">Convert PDFs</h4>
        <ul className="space-y-2">
          <li><Link href="/pdf-to-word" className="hover:text-blue-600">PDF to Word</Link></li>
          <li><Link href="/pdf-to-ppt" className="hover:text-blue-600">PDF to PowerPoint</Link></li>
          <li><Link href="/pdf-to-image" className="hover:text-blue-600">PDF to Image</Link></li>
          <li><Link href="/image-to-pdf" className="hover:text-blue-600">Image to PDF</Link></li>
        </ul>
      </div>

      {/* Center column */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-gray-600 mb-2">
          &copy; {new Date().getFullYear()} <strong>Leadmind Developer</strong>. All rights reserved.
        </p>
        <p className="text-sm">
          <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link> &nbsp;|&nbsp; 
          <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link> &nbsp;|&nbsp; 
          <a href="mailto:support@pdfimagetools.com" className="hover:text-blue-600">Contact</a>
        </p>
        <p className="text-sm mt-2">
          📧 <a href="mailto:support@thetechtrep.com" className="hover:text-blue-600 font-medium">
            support@pdfimagetools.app
          </a>
        </p>
      </div>

      {/* Right column */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-gray-900">Image & File Tools</h4>
        <ul className="space-y-2">
          <li><Link href="/combine-pdfs" className="hover:text-blue-600">Combine PDFs</Link></li>
          <li><Link href="/remove-image-background" className="hover:text-blue-600">Remove Background</Link></li>
          <li><Link href="/resize-passport-photo" className="hover:text-blue-600">Resize Passport Photo</Link></li>
          <li><Link href="/image-converter" className="hover:text-blue-600">Image Converter</Link></li>
        </ul>
      </div>
    </div>

    {/* Bottom note */}
    <div className="text-center text-xs text-gray-500 mt-8">
      Built with ❤️ for privacy-friendly online conversions.
    </div>
  </footer>
);

export default Footer;
