import React from "react";
import Link from "next/link";

export const metadata = {
  title:
    "Compress PDF for Email or WhatsApp – Free & Fast (2026 Guide) | PDFImageTools",
  description:
    "Learn how to compress large PDF files for email, WhatsApp, or Telegram. Free step-by-step tutorial with best compression tips and privacy-safe tools.",
};

export default function CompressForEmail() {
  const faq = [
    {
      "@type": "Question",
      name: "Can I compress PDFs for WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can reduce PDF size to meet WhatsApp and email attachment limits using online compression tools.",
      },
    },
    {
      "@type": "Question",
      name: "Will compression reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Balanced compression keeps text sharp while reducing file size significantly. High compression may slightly reduce image quality.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No installation is required. Everything works directly inside your browser.",
      },
    },
    {
      "@type": "Question",
      name: "Are my files private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Files are processed securely and automatically deleted after processing.",
      },
    },
  ];

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
        name: "Compress PDF for Email or WhatsApp",
        item:
          "https://pdfimagetools.app/blog/compress-pdf-for-email-whatsapp",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Compress PDF for Email or WhatsApp",
    description:
      "Step-by-step tutorial explaining how to compress PDFs for messaging apps and email attachments.",
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
          <h1>Compress PDF for Email or WhatsApp – Free & Fast</h1>
          <p className="lead">
            Large PDF files often exceed email and messaging limits. This
            guide shows how to reduce PDF size quickly so you can send
            documents without upload errors or delays.
          </p>
          <p className="updated">Last updated: February 2026</p>
        </header>

        {/* Why compress */}
        <section>
          <h2>Why Compress PDFs Before Sending?</h2>
          <p>
            PDFs containing scanned pages, photos, or embedded fonts can
            easily exceed platform limits. Compression reduces file size
            while preserving readability.
          </p>

          <ul>
            <li>Gmail attachment limit: 25 MB</li>
            <li>Outlook: about 20–34 MB</li>
            <li>WhatsApp: around 100 MB</li>
            <li>Corporate email systems: often 10–25 MB</li>
          </ul>
        </section>

        {/* Steps */}
        <section className="highlight">
          <h2>How to Compress a PDF (Step-by-Step)</h2>

          <ol>
            <li>
              Open the{" "}
              <Link href="/compress-pdf">Compress PDF tool</Link>.
            </li>
            <li>Upload your PDF document.</li>
            <li>Select a compression level.</li>
            <li>Download your optimized file.</li>
          </ol>

          <Link href="/compress-pdf" className="cta">
            Compress PDF Now →
          </Link>
        </section>

        {/* Tips */}
        <section>
          <h2>Pro Tips for Better Compression</h2>

          <ul className="tips">
            <li>Use Balanced mode for everyday documents.</li>
            <li>Use High compression for scans or lecture notes.</li>
            <li>Always preview the file before sending.</li>
            <li>
              Merge files first using{" "}
              <Link href="/combine-pdfs">Merge PDFs</Link>.
            </li>
          </ul>
        </section>

        {/* Use cases */}
        <section>
          <h2>Common Situations Where Compression Helps</h2>

          <div className="cards">
            <div className="card">
              <h3>Job Applications</h3>
              <p>Recruiters often reject large attachments.</p>
            </div>

            <div className="card">
              <h3>University Notes</h3>
              <p>Scanned lecture slides become very large files.</p>
            </div>

            <div className="card">
              <h3>Legal Documents</h3>
              <p>Contracts and property files contain heavy images.</p>
            </div>

            <div className="card">
              <h3>Invoices & Receipts</h3>
              <p>Businesses send compressed PDFs faster to clients.</p>
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2>Related Tools</h2>

          <ul className="related">
            <li>
              <Link href="/pdf-to-word">PDF to Word Converter</Link>
            </li>
            <li>
              <Link href="/pdf-to-image">PDF to Image</Link>
            </li>
            <li>
              <Link href="/combine-pdfs">Merge PDFs</Link>
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
            Bookmark{" "}
            <Link href="/compress-pdf">
              pdfimagetools.app/compress-pdf
            </Link>{" "}
            for quick access anytime.
          </p>
          <p className="small">
            Free • No signup • Privacy-focused • Mobile friendly
          </p>
        </footer>
      </article>

      {/* Plain CSS */}
      <style>{`
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
          margin-top: 16px;
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
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
        }

        .cta:hover {
          background: #1e4ed8;
        }

        .tips li {
          margin-bottom: 10px;
        }

        .cards {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          border: 1px solid #e5e5e5;
          padding: 16px;
          border-radius: 8px;
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
