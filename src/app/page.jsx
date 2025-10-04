import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Features from '../components/Features';
import Hero from '../components/Hero';
import './landing.css';

export const metadata = {
  title: 'Free PDF & Image Tools — Convert, Edit, Optimize Online | PDFImageTools',
  description: 'Convert PDFs and images instantly. Free online tools for PDF to Word, PDF to PPT, Image to PDF, PDF to Image, background remover, and more. No signup needed.',
  alternates: { canonical: 'https://pdfimagetools.app/' },
  openGraph: {
    title: 'Free PDF & Image Tools — Convert, Edit, Optimize Online | PDFImageTools',
    description: 'Instantly convert, edit, and optimize PDFs and images. Fast, privacy-focused, and 100% free. No signup needed.',
    url: 'https://pdfimagetools.app/',
    images: [
      {
        url: 'https://pdfimagetools.web.app/pdfdoc.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF & Image Tools — Convert, Edit, Optimize Online | PDFImageTools',
    description: 'Instantly convert, edit, and optimize PDFs and images. Fast, free, no signup needed.',
    images: ['https://pdfimagetools.app/pdfdoc.png'],
  },
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />

      <section className="features-section">
        <Features />
      </section>

      <CTA />

      <section className="about-section">
        <div className="container">
          <h2>About PDFImageTools</h2>
          <p>
            PDFImageTools is a free suite of browser-based utilities for converting, editing, and optimizing PDF and image files. 
            Our tools are designed to be fast, secure, and user-friendly—no account required. 
            Whether you're converting PDFs to Word, extracting images, or removing backgrounds, everything happens locally in your browser.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>Is PDFImageTools free?</h4>
            <p>Yes, all our tools are completely free to use with no hidden costs or subscriptions.</p>
          </div>
          <div className="faq-item">
            <h4>Do I need to create an account?</h4>
            <p>No account or signup is needed. You can use all tools anonymously.</p>
          </div>
          <div className="faq-item">
            <h4>Are my files safe?</h4>
            <p>Yes. Most operations happen in your browser, so your files never leave your device.</p>
          </div>
          <div className="faq-item">
            <h4>What formats do you support?</h4>
            <p>We support common formats like PDF, JPG, PNG, Word (.docx), and PowerPoint (.pptx).</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
