import React from "react";
import Link from "next/link";

const CTA = () => (
  <section className="cta" id="tools">
    <div className="container text-center py-16">
      <h3 className="text-3xl font-bold mb-4">
        Convert PDFs, Word, Excel & Images in Seconds — Free & Easy
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        No sign-up, no hassle. Convert, edit, and manage your PDF, Word, Excel, PowerPoint and image files
        with secure, privacy-first online tools.
      </p>
      <Link href="/tools" className="btn-secondary px-6 py-3 rounded-lg font-semibold">
        🚀 Start Now — 100% Free
      </Link>
    </div>
  </section>
);

export default CTA;
