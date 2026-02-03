import React from "react";
import Footer from "../../components/Footer";
import DonationSupport from "../../components/DonationSupport";
import PdfCompressUploader from "../../components/PdfCompressUploader";
import Link from "next/link";

export default function CompressPdfPage() {

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">

        <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded">
          PDFImageTools Home
        </Link>

        <section className="text-center my-12">
          <h1 className="text-4xl font-bold mb-4">
            Compress PDF Files Online
          </h1>

          <p className="text-gray-600 mb-8">
            Reduce PDF file size while keeping high quality. 
            Free, fast, no signup required.
          </p>

          <PdfCompressUploader />

          <div className="mt-10">
            <DonationSupport />
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Compress PDFs?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Upload faster</li>
            <li>Save storage space</li>
            <li>Email without size limits</li>
            <li>Improve website performance</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-8 rounded mb-10">
          <h2 className="text-2xl font-bold mb-4">Privacy</h2>
          <p>
            All files are deleted automatically after processing. 
            We never store your PDFs.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <ul className="list-disc pl-6">
            <li>Merge PDFs</li>
            <li>PDF to Word</li>
            <li>Image to PDF</li>
            <li>PDF to Image</li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
}
