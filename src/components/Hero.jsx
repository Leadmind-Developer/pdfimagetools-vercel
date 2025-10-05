import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="hero bg-gradient-to-b from-white to-gray-50 py-20 text-center">
    <div className="container mx-auto px-6 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Free Online PDF & Image Tools — Convert, Edit & Manage Instantly
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Convert PDFs to Word, PowerPoint, and images. Edit documents, remove image backgrounds,
        resize photos, and more — <strong>100% free</strong>, secure, and privacy-friendly with
        no sign-up required.
      </p>

      <Link
        href="/tools"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-200"
      >
        Start Converting Now — Free
      </Link>
    </div>
  </section>
);

export default Hero;
