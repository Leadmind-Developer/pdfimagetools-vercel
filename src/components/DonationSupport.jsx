import React from "react";

export default function DonationSupport() {
  return (
    <div className="donation-support">
      <h2>Support PDF Image Tools ❤️</h2>

      {/* Intro paragraph */}
      <p className="intro">
        This platform is free to use but costs money to run. If this tool helped you, please consider supporting us.
      </p>

      {/* "Donate via" bigger and noticeable */}
      <p className="donate-via">
        Donate via:
      </p>

      {/* Payment gateways */}
      <div className="payment-gateways">
        {/* PayPal */}
        <a href="https://paypal.me/teemmiej" target="_blank" rel="noopener noreferrer">
          <img src="/paypal_PDFTools.png" alt="PayPal" />
        </a>

        {/* Flutterwave */}
        <a href="https://flutterwave.com/pay/enkl6s6cpibf" target="_blank" rel="noopener noreferrer">
          <img src="/flutterwave.png" alt="Flutterwave" />
        </a>

        {/* Paystack */}
        <a href="https://paystack.shop/pay/pdfimagetools" target="_blank" rel="noopener noreferrer">
          <img src="/Paystack-Logo.jpg" alt="Paystack" />
        </a>
      </div>

      {/* Inline CSS for simplicity */}
      <style jsx>{`
        .donation-support {
          max-width: 600px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: var(--background);
          color: var(--foreground);
          border: 1px solid #ccc;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .donation-support h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .donation-support .intro {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .donation-support .donate-via {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .payment-gateways {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        @media (min-width: 500px) {
          .payment-gateways {
            flex-direction: row;
            justify-content: center;
          }
        }

        .payment-gateways a img {
          width: 120px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .payment-gateways a img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
