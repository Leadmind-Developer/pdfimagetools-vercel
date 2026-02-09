// src/app/layout.tsx
import './globals.css';
import Script from 'next/script';
import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap", // critical for LCP
});

export const metadata = {
  title: 'PDFImageTools - Convert, Edit, and Optimize PDFs and Images',
  description:
    "Convert PDFs, images, and documents easily. Free online tools for PDF to Word, PDF to PPT, Image Converter, Remove Background, and more.",
  keywords:
    'PDF Tools, PDF to Word, Image Converter, Remove Background, PDF Merge, Free Online Converter, Image to PDF, PDF to Image, Optimize Image, Resize Photo, Passport Photo',
  alternates: {
    canonical: 'https://pdfimagetools.app/',
  },
  openGraph: {
    title: 'PDFImageTools - Free Online PDF & Image Utilities',
    description:
      'Instantly convert, edit, and optimize PDFs and images. Fast, privacy-focused, and 100% free.',
    url: 'https://pdfimagetools.app/',
    images: [
      {
        url: 'https://pdfimagetools.app/OGimage.png',
        width: 1200,
        height: 630,
        alt: 'PDFImageTools',
      },
    ],
    type: 'website',
    siteName: 'PDFImageTools',   
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDFImageTools - Convert, Edit, Optimize PDFs and Images',
    description:
      'All-in-one PDF & Image Toolkit. Free, Fast, No Signup.',
    images: ['https://pdfimagetools.app/pdfdoc.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-6YD815J9ND';

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Favicon (drop pdfdoc.webp into /public) */}
        <link rel="icon" href="/pdfdoc.webp" />

        {/* Facebook App ID */}
        <meta property="fb:app_id" content="914988614312614" />
      </head>
      <body>
        {/* Google Analytics (client-side only) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Meta Pixel (Facebook) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq) return; n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
              t=b.createElement(e); t.async=!0; t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '690154170852914');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Facebook noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=690154170852914&ev=PageView&noscript=1" />`,
          }}
        />

        {/* app content */}
        {children}
      </body>
    </html>
  );
}
