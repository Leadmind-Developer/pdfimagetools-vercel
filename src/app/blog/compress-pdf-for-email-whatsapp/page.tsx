import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Compress PDF for Email or WhatsApp – Free & Fast | PDFImageTools",
  description:
    "Learn how to compress large PDF files quickly and for free so you can send them via email, WhatsApp, Telegram, or any messaging app without size restrictions. Step-by-step guide + tips for best results.",
};

export default function CompressForEmail() {
  const faq = [
    {
      "@type": "Question",
      name: "Can I compress PDFs for WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PDFImageTools lets you compress PDFs to fit WhatsApp's 100 MB (or lower in some regions) file size limit easily and quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Will compression reduce quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the compression level you choose. With balanced or low compression, text remains perfectly readable and most images stay sharp.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size limit for uploading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently we support files up to 200 MB. Most email and messaging platforms accept much smaller files after compression.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install any software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything runs directly in your browser — no downloads, no installations, no sign-up required.",
      },
    },
    {
      "@type": "Question",
      name: "Are my files safe and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Files are processed locally in your browser whenever possible. No file is stored on our servers longer than necessary for processing.",
      },
    },
  ];

  return (
    <>
      <article className="compress-article max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 leading-relaxed text-gray-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  name: "Compress PDF for Email/WhatsApp",
                  item: "https://pdfimagetools.app/blog/compress-pdf-for-email-whatsapp",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq,
            }),
          }}
        />

        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Compress PDF for Email or WhatsApp – Free & Fast (2025 Guide)
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            Large PDFs frequently exceed the file size limits of email providers (Gmail: 25 MB, Outlook: 20–34 MB) and messaging apps (WhatsApp: ~100 MB). 
            Compressing them is usually the fastest and simplest solution — and it can be done completely free in seconds.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            Last updated: February 2026
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Why Compress PDFs Before Sending?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Modern documents — especially those containing scanned pages, high-resolution photos, complex vector graphics, or embedded fonts — 
              can easily reach 50–300 MB. Most platforms impose strict limits:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Gmail: 25 MB per message (including attachments)</li>
              <li>Outlook / Office 365: 20–34 MB depending on configuration</li>
              <li>WhatsApp: ~100 MB (can be lower on some networks)</li>
              <li>Telegram: 2 GB (generous, but still many users prefer smaller files)</li>
              <li>Most corporate email servers: 10–25 MB</li>
            </ul>
            <p>
              When you exceed these limits you usually get:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Error message ("file too large")</li>
              <li>Forced upload to cloud service with extra steps</li>
              <li>Long waiting times when sending via slow mobile data</li>
            </ul>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 p-6 md:p-10 rounded-xl border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            How to Compress a PDF in 4 Simple Steps (Free)
          </h2>
          <ol className="list-decimal pl-6 space-y-6 text-lg">
            <li className="font-medium">
              Go to the{" "}
              <Link href="/compress-pdf" className="text-blue-600 hover:underline font-semibold">
                Compress PDF tool
              </Link>{" "}
              on PDFImageTools.
            </li>
            <li>
              Drag & drop your PDF file or click "Select PDF" to upload (up to 200 MB supported).
            </li>
            <li>
              Choose compression level:
              <ul className="list-disc pl-6 mt-3 space-y-2 text-base">
                <li><strong>Balanced</strong> – recommended for most documents (good quality × good size reduction)</li>
                <li><strong>High</strong> – maximum size reduction (suitable for emailing very large files)</li>
                <li><strong>Low</strong> – almost no visible quality loss (best for important presentations)</li>
              </ul>
            </li>
            <li>
              Click <strong>Compress PDF</strong> → wait a few seconds → download your smaller file.
            </li>
          </ol>
          <p className="mt-8 text-center">
            <Link
              href="/compress-pdf"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
            >
              Compress PDF Now – It's Free →
            </Link>
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Pro Tips for Best Compression Results
          </h2>
          <ul className="space-y-5 text-lg">
            <li className="flex gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>Use <strong>Balanced</strong> for everyday documents (reports, invoices, contracts).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>Choose <strong>High</strong> compression when sending scanned documents or lecture notes via WhatsApp.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>Always open the compressed file and check important pages (especially images and small text).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>If quality dropped too much → try the Low setting or remove image-heavy pages before compressing.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <span>Combine compression with our <Link href="/merge-pdfs" className="text-blue-600 hover:underline">Merge PDFs</Link> tool if you need to send multiple documents.</span>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Common Use Cases Where PDF Compression Helps Most
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
  <h3 className="text-xl font-semibold mb-3">Job applications & CVs</h3>
  <p className="text-gray-700">
  Many recruiters still prefer PDF, but their email systems reject files over 10-15 MB.
</p>
</div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">University / school notes</h3>
              <p className="text-gray-700">
                Scanned handwritten notes or lecture slides often become very large.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Real-estate & legal documents</h3>
              <p className="text-gray-700">
                Property plans, contracts, and title deeds with many images.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">E-commerce invoices & receipts</h3>
              <p className="text-gray-700">
                Monthly batch invoices sent to many clients via email or WhatsApp Business.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Related Free PDF Tools You Might Need
          </h2>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition">
              <Link href="/combine-pdfs" className="text-blue-600 font-medium hover:underline block">
                Merge / Combine PDFs
              </Link>
              <p className="text-sm text-gray-600 mt-1">Join multiple PDFs into one file</p>
            </li>
            <li className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition">
              <Link href="/pdf-to-word" className="text-blue-600 font-medium hover:underline block">
                PDF to Word
              </Link>
              <p className="text-sm text-gray-600 mt-1">Convert PDF → editable .docx</p>
            </li>
            <li className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition">
              <Link href="/pdf-to-image" className="text-blue-600 font-medium hover:underline block">
                PDF to Image (JPG/PNG)
              </Link>
              <p className="text-sm text-gray-600 mt-1">Extract pages as high-quality images</p>
            </li>
            <li className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition">
              <Link href="/remove-pdf-pages" className="text-blue-600 font-medium hover:underline block">
                Delete PDF Pages
              </Link>
              <p className="text-sm text-gray-600 mt-1">Remove unwanted pages before compressing</p>
            </li>
            <li className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition">
              <Link href="/pdf-size-reducer" className="text-blue-600 font-medium hover:underline block">
                Advanced PDF Compressor
              </Link>
              <p className="text-sm text-gray-600 mt-1">Even smaller files with more control</p>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-700">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-600 pt-12 border-t border-gray-200">
          <p className="mb-4">
            Need to compress PDFs regularly? Bookmark{" "}
            <Link href="/compress-pdf" className="text-blue-600 hover:underline">
              pdfimagetools.app/compress-pdf
            </Link>
          </p>
          <p>100% free • No registration • Privacy-first • Works on mobile & desktop</p>
        </footer>
      </article>

      <style jsx>{`
        .compress-article :global(h1),
        .compress-article :global(h2),
        .compress-article :global(h3) {
          scroll-margin-top: 100px;
        }

        .compress-article :global(a:hover) {
          text-decoration: underline;
        }

        .compress-article :global(ol > li),
        .compress-article :global(ul > li) {
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .compress-article {
            font-size: 1.125rem;
            line-height: 1.75;
          }
        }
      `}</style>
    </>
  );
}
