import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h2>Free Online PDF & Image Tools — Convert, Edit & Manage Instantly</h2>
      <p>
        Convert PDFs to Word, PowerPoint, and images. Edit documents, remove backgrounds from images, resize photos, and more — 
        100% free, secure, and privacy-friendly with no sign-up required.
      </p>
      <Link href="/tools" className="btn-primary">Start Converting Now — Free</Link>
    </div>
  </section>
);

export default Hero;
