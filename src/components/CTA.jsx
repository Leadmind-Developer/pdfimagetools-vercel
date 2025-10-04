import React from "react";
import Link from "next/link";

const CTA = () => (
  <section className="cta" id="tools">
    <div className="container">
      <h3>Convert PDFs & Images in Seconds — Free & Easy</h3>
      <p>
        No sign-up, no hassle. Convert, edit, and manage your PDFs and images
        with fast, privacy-friendly tools.
      </p>
      <Link href="/tools" className="btn-secondary">
        Start Now — 100% Free
      </Link>
    </div>
  </section>
);

export default CTA;
