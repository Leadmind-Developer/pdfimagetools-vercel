//ppt-to-pdf/page.tsx
import { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function PptToPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PowerPoint file first.");
      return;
    }

    setError(null);
    setLoading(true);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/convert/ppt-to-pdf`,
        formData,
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err: any) {
      console.error(err);
      setError("Failed to convert file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Convert PPT to PDF Online | Free PowerPoint to PDF Converter</title>
        <meta
          name="description"
          content="Convert PowerPoint files (PPT, PPTX) to PDF online for free. No software required — fast, secure, and high-quality PowerPoint to PDF conversion."
        />
        <meta
          name="keywords"
          content="PPT to PDF, PowerPoint to PDF, convert pptx to pdf, ppt converter, online ppt to pdf, ppt pdf free"
        />
        <meta property="og:title" content="Convert PPT to PDF Online | Free PowerPoint to PDF Converter" />
        <meta
          property="og:description"
          content="Easily convert PowerPoint presentations (PPT, PPTX) into high-quality PDFs with our fast online converter."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdfimagetools.app/ppt-to-pdf" />
        <meta property="og:image" content="https://pdfimagetools.app/og/ppt-to-pdf.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "PPT to PDF Converter",
              description:
                "Convert PowerPoint files (PPT, PPTX) to PDF online for free. No software required — fast, secure, and high-quality PowerPoint to PDF conversion.",
              url: "https://pdfimagetools.app/ppt-to-pdf",
            }),
          }}
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            PPT to PDF Converter
          </h1>
          <p className="text-gray-600 mb-6">
            Upload your PowerPoint presentation and convert it into a PDF
            instantly. Supports .ppt and .pptx formats.
          </p>

          <input
            type="file"
            accept=".ppt,.pptx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full border border-gray-300 rounded-lg p-2 mb-4"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Converting..." : "Convert to PDF"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {downloadUrl && (
            <div className="mt-6">
              <a
                href={downloadUrl}
                download={`converted.pdf`}
                className="text-blue-600 font-semibold underline"
              >
                Download PDF
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
