import React from "react";

export const metadata = {
  title: "Privacy Policy | PDFImageTools",
  description:
    "Learn how PDFImageTools collects, uses, and protects your information. We prioritize privacy and never store uploaded files permanently.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: June 11, 2025</p>

      <p className="mb-6">
        This Privacy Policy describes how your information is collected, used,
        and shared when you use our tools and services ("the App").
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Uploaded Files:</strong> Files you upload for conversion
              are temporarily stored to complete the process. These files are
              deleted automatically after processing.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect anonymized usage data
              (e.g. tool usage count, device type) for performance and
              improvement purposes.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. How We Use Your Data
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To process file conversions or enhancements as requested.</li>
            <li>To maintain and improve app performance and security.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Data Retention
          </h2>
          <p>
            Uploaded files are automatically deleted after processing. No files
            are stored permanently on our servers unless explicitly stated.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party services for analytics or storage. These
            services comply with modern data protection standards.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Your Rights
          </h2>
          <p>
            You have the right to request deletion of your data or uploaded
            files at any time. Contact us if needed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Changes will be reflected
            here with an updated "Effective Date".
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Contact</h2>
          <p>
            If you have questions, contact us at{" "}
            <a
              href="mailto:support@pdfimagetool.app"
              className="text-blue-600 hover:underline"
            >
              support@pdfimagetool.app
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}


