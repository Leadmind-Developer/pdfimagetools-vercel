"use client";

import React from "react";
import Image from "next/image";

export default function DonationSupport() {
  return (
    <div className="donation-support">
      <h2>Support PDF Image Tools ❤️</h2>

      <p className="intro">
        This platform is free to use but costs money to run. If this tool helped you, please consider supporting us.
      </p>

      <p className="donate-via">Donate via:</p>

      <div className="payment-gateways">

        <a href="https://paypal.me/teemmiej" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/paypal_PDFTools.png"
            width={120}
            height={60}
            alt="PayPal"
            loading="lazy"
          />
        </a>

        <a href="https://flutterwave.com/pay/enkl6s6cpibf" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/flutterwave.png"
            width={120}
            height={60}
            alt="Flutterwave"
            loading="lazy"
          />
        </a>

        <a href="https://paystack.shop/pay/pdfimagetools" target="_blank" rel="noopener noreferrer">
          <Image
            src="/logo/Paystack-Logo.jpg"
            width={120}
            height={60}
            alt="Paystack"
            loading="lazy"
          />
        </a>

      </div>

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
          box-shadow: 0 3px 8px rgba(0,0,0,0.08); /* lighter shadow */
        }

        .donation-support h2 {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }

        .intro {
          font-size: 0.9rem;
          margin-bottom: 1.2rem;
        }

        .donate-via {
          font-size: 1.15rem;
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

        .payment-gateways a {
          transition: transform 0.2s ease;
        }

        .payment-gateways a:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
