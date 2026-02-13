import React from "react";
import Link from "next/link";

export const metadata = {
  title:
    "How to Sign PDF Documents Online – Free & Secure (2026 Guide) | PDFImageTools",
  description:
    "Learn how to sign PDF documents online safely using free tools. Step-by-step tutorial, legal validity, signature types, and security best practices for 2026.",
};

export default function SignPdfPage() {
  const faq = [
    {
      "@type": "Question",
      name: "Can I sign PDFs online for free without signup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PDFImageTools allows you to sign PDF files online for free without creating an account or adding watermarks.",
      },
    },
    {
      "@type": "Question",
      name: "Are online signatures legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Electronic signatures are legally recognized in many countries, including Nigeria under the Evidence Act 2011 and Cybercrimes Act 2015, provided both parties agree.",
      },
    },
    {
      "@type": "Question",
      name: "Is signing PDFs online secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Secure tools use HTTPS encryption and automatically delete uploaded files after processing.",
      },
    },
    {
      "@type": "Question",
      name: "What signature types can I add?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can draw your signature, type your name with styled fonts, or upload an image of your handwritten signature.",
      },
    },
  ];

  /* ---------- JSON-LD ---------- */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pdfimagetools.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://pdfimagetools.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Sign PDF Documents Online",
        item:
          "https://pdfimagetools.app/blog/how-to-sign-pdf-documents",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Sign PDF Documents Online",
    description:
      "Complete tutorial explaining how to sign PDF documents online securely and legally.",
    author: {
      "@type": "Organization",
      name: "PDFImageTools",
    },
    publisher: {
      "@type": "Organization",
      name: "PDFImageTools",
    },
  };

  return (
    <>
      <article className="article">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        {/* Header */}
        <header className="header">
          <h1>How to Sign PDF Documents Online – Free & Secure</h1>

          <p className="lead">
            Printing, signing, scanning, and re-sending documents is no
            longer necessary. Electronic signatures allow you to sign PDFs
            instantly from your phone or computer while remaining legally
            valid in most countries.
          </p>

          <p className="updated">Last updated: February 2026</p>
        </header>

        {/* Intro */}
        <section>
          <p>
            Whether you are signing contracts, submitting school forms,
            approving invoices, or completing visa applications,
            electronic signatures save time and simplify workflows.
            PDFImageTools lets you sign documents directly in your browser
            — free, fast, and without creating an account.
          </p>
        </section>

        {/* Why e-signatures */}
        <section>
          <h2>Why Electronic Signatures Are Standard in 2026</h2>

          <ul>
            <li>Remote work and digital-first business workflows</li>
            <li>No printing or scanning required</li>
            <li>Accepted by universities and visa portals</li>
            <li>Recognized under Nigerian and international laws</li>
            <li>Faster turnaround for agreements and approvals</li>
          </ul>
        </section>

        {/* Signature types */}
        <section>
          <h2>Types of Electronic Signatures</h2>

          <ol>
            <li>
              <strong>Simple Electronic Signature</strong> — draw,
              type, or upload your signature image. Suitable for most
              everyday documents.
            </li>

            <li>
              <strong>Advanced Electronic Signature</strong> — identity
              verification through email or OTP confirmation.
            </li>

            <li>
              <strong>Qualified Electronic Signature</strong> — uses
              certified digital certificates for high-value contracts.
            </li>
          </ol>
        </section>

        {/* Steps */}
        <section className="highlight">
          <h2>Step-by-Step: Sign a PDF Online</h2>

          <ol>
            <li>
              Open the{" "}
              <Link href="/pdf-sign">PDF Sign Tool</Link>.
            </li>
            <li>Upload your PDF document.</li>
            <li>Select Draw, Type, or Upload signature.</li>
            <li>Position and resize your signature.</li>
            <li>Download the signed PDF.</li>
          </ol>

          <Link href="/pdf-sign" className="cta">
            Sign Your PDF Now →
          </Link>
        </section>

        {/* Legal validity */}
        <section>
          <h2>Legal Validity of Online Signatures</h2>

          <h3>Nigeria</h3>
          <ul>
            <li>Evidence Act 2011 recognizes electronic signatures</li>
            <li>Cybercrimes Act 2015 supports digital transactions</li>
            <li>Valid for most commercial agreements</li>
          </ul>

          <h3>International Recognition</h3>
          <ul>
            <li>EU eIDAS regulation</li>
            <li>US ESIGN Act & UETA</li>
            <li>UK electronic signature framework</li>
          </ul>
        </section>

        {/* Security */}
        <section>
          <h2>Security Best Practices</h2>

          <ul>
            <li>Use encrypted HTTPS websites</li>
            <li>Avoid signing sensitive files on public Wi-Fi</li>
            <li>Verify signature placement before download</li>
            <li>Keep an unsigned backup copy</li>
          </ul>
        </section>

        {/* Related tools */}
        <section>
          <h2>Related Tools</h2>

          <ul className="related">
            <li>
              <Link href="/compress-pdf">Compress PDF</Link>
            </li>
            <li>
              <Link href="/combine-pdfs">Merge PDFs</Link>
            </li>
            <li>
              <Link href="/pdf-to-word">PDF to Word</Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions</h2>

          {faq.map((item, i) => (
            <div key={i} className="faq">
              <h3>{item.name}</h3>
              <p>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            Start signing documents instantly at{" "}
            <Link href="/pdf-sign">pdfimagetools.app/pdf-sign</Link>
          </p>
          <p className="small">
            Free • No signup • Secure • Works on mobile & desktop
          </p>
        </footer>
      </article>

      {/* ---------- Plain CSS ---------- */}
      <style jsx>{`
        .article {
          max-width: 820px;
          margin: auto;
          padding: 40px 20px;
          font-family: system-ui, sans-serif;
          line-height: 1.7;
          color: #222;
        }

        h1 {
          font-size: 2.4rem;
          margin-bottom: 16px;
        }

        h2 {
          margin-top: 40px;
          font-size: 1.7rem;
        }

        h3 {
          margin-top: 18px;
          font-size: 1.2rem;
        }

        p {
          margin: 12px 0;
        }

        ul,
        ol {
          padding-left: 22px;
        }

        .lead {
          font-size: 1.15rem;
          color: #555;
        }

        .updated {
          font-size: 0.9rem;
          color: #777;
        }

        .highlight {
          background: #f5f7fb;
          padding: 24px;
          border-radius: 10px;
          margin-top: 30px;
        }

        .cta {
          display: inline-block;
          margin-top: 16px;
          padding: 12px 20px;
          background: #2563eb;
          color: #fff;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
        }

        .cta:hover {
          background: #1e4ed8;
        }

        .related li {
          margin-bottom: 8px;
        }

        a {
          color: #2563eb;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .faq {
          border-bottom: 1px solid #eee;
          padding: 14px 0;
        }

        .footer {
          text-align: center;
          margin-top: 50px;
          border-top: 1px solid #eee;
          padding-top: 20px;
          color: #666;
        }

        .small {
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
