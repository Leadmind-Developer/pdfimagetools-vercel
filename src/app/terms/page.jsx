import React from "react";

export const metadata = {
  title: "Terms of Service | PDFImageTools",
  description: "View PDFImageTools' terms of service outlining usage guidelines, limitations, and user rights.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: June 11, 2025</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the App, you agree to be bound by these Terms.
            If you do not agree, do not use the App.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Use of Service</h2>
          <p>
            The App provides tools to convert, modify, or process media and
            document files. You agree to use the service only for lawful
            purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">3. User Content</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You retain ownership of files you upload.</li>
            <li>
              You grant us a temporary license to process these files for the
              purpose of conversion or enhancement.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Limitations</h2>
          <p>
            We do not guarantee that files will always be processed successfully.
            You agree not to upload content that is illegal, offensive, or
            violates intellectual property rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the App
            at any time, especially in cases of abuse or misuse.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Disclaimer</h2>
          <p>
            The App is provided "as is" without warranties of any kind. We are
            not liable for any loss or damage resulting from the use of our
            services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Modifications</h2>
          <p>
            We may update these Terms at any time. Your continued use of the App
            constitutes acceptance of the updated Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact</h2>
          <p>
            For any questions, reach out at{" "}
            <a
              href="mailto:support@pdfimagetools.app"
              className="text-blue-600 hover:underline"
            >
              support@pdfimagetools.app
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}


