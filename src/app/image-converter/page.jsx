"use client";

import React, { useState } from "react";
import Footer from "../../components/Footer";
import ImageConverter from "../../components/ImageConverter";
import LanguageSelector from "../../components/LanguageSelector";
import Link from "next/link";

export const metadata = {
  title: "Free Online Image Converter — JPG, PNG, WEBP, SVG | PDFImageTools",
  description:
    "Convert images online between JPG, PNG, WEBP, and SVG formats. Free image converter with resize, optimize, and watermark tools. Fast, secure, no signup.",
  alternates: { canonical: "https://pdfimagetools.app/image-converter" },
};

const translations = {
  en: {
    heroTitle: "Convert Images Online",
    heroSubtitle:
      "Easily convert, resize, and optimize images in popular formats including JPG, PNG, WEBP, and SVG. Add watermarks and fine-tune image quality effortlessly — fast, secure, and free.",
    stepsTitle: "How It Works",
    steps: [
      "Upload an image in JPG, PNG, WEBP, or SVG format.",
      "Choose the desired output format, resize, or optimize as needed.",
      "Click the convert button to generate the new image.",
      "Download your converted image instantly or convert another file.",
    ],
    supportedTitle: "Supported Languages",
    aboutTitle: "Why Use Our Image Converter?",
    aboutText: [
      "Converting images online allows you to work without installing software.",
      "Optimize images for web or print while keeping quality intact.",
      "Supports multiple formats and allows batch conversion for efficiency.",
    ],
    privacyTitle: "Privacy & Security",
    privacyText: [
      "All uploaded images are deleted automatically after one hour. Nothing is stored permanently.",
      "Conversions happen securely using temporary files. No login or email required.",
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        question: "Is the image converter free?",
        answer: "Yes, it’s completely free — no limits, no watermarks, no hidden fees.",
      },
      {
        question: "Which formats are supported?",
        answer: "JPG, PNG, WEBP, and SVG are supported for upload and conversion.",
      },
      {
        question: "Are my images safe?",
        answer: "Absolutely. Files are deleted automatically after 60 minutes.",
      },
      {
        question: "Can I resize or optimize images?",
        answer: "Yes, you can resize, compress, and apply watermarks before downloading.",
      },
    ],
    relatedTitle: "Other Tools You May Like",
    relatedTools: [
      "PDF to Word",
      "PDF to Images",
      "Compress PDF",
      "Image to PDF",
      "PDF Merge",
    ],
  },

  yo: {
    heroTitle: "Yi Aworan Pada Online",
    heroSubtitle:
      "Gbe awọn aworan soke lati JPG, PNG, WEBP, tabi SVG ki o si yi wọn pada, ṣe iwọn, tabi ṣe atunṣe didara. Fikun omi-ami ati ṣe atunṣe didara aworan ni rọọrun — yara, ailewu, ati ọfẹ.",
    stepsTitle: "Bá A Ṣe Nṣiṣẹ́",
    steps: [
      "Gbe aworan kan soke ni JPG, PNG, WEBP, tabi SVG.",
      "Yan ọna kika ti o fẹ, ṣe iwọn tabi ṣe atunṣe bi o ṣe nilo.",
      "Tẹ bọtini yí padà lati gba aworan tuntun.",
      "Gba aworan rẹ silẹ lẹsẹkẹsẹ tabi yipada miiran.",
    ],
    supportedTitle: "Àwọn Èdè Tí A Ṣe Atilẹ́yìn",
    aboutTitle: "Kí Ló Dé Tí A Fi N Lo Oluyipada Aworan Wa?",
    aboutText: [
      "Yí awọn aworan pada lori ayelujara ki o le ṣiṣẹ laisi fifi software sori ẹrọ.",
      "Ṣe atunṣe ati dinku iwọn faili fun wẹẹbu tabi titẹ laisi pipadanu didara.",
      "Ṣe atilẹyin awọn ọna kika pupọ ati awọn iyipada ẹgbẹ fun ṣiṣe daradara.",
    ],
    privacyTitle: "Àṣírí & Aàbò",
    privacyText: [
      "Gbogbo awọn aworan ti a gbe soke ni a paarẹ laifọwọyi lẹ́yìn wákàtí kan.",
      "Awọn iyipada naa ṣẹlẹ ni aabo pẹlu awọn faili igba diẹ. Ko si ìforúkọsílẹ̀ tàbí imeeli ti a beere.",
    ],
    faqTitle: "Ìbéèrè Tí A Máa N Béèrè",
    faq: [
      { question: "Ṣe ọ̀fẹ́ ni?", answer: "Bẹ́ẹ̀ni — ko si awọn aala, omi-ami, tabi owo t’akiyesi." },
      {
        question: "Àwọn ọna kika wo ni a ṣe atilẹyin?",
        answer: "JPG, PNG, WEBP, ati SVG ni a ṣe atilẹyin fun gbigba ati iyipada.",
      },
      { question: "Ṣe awọn aworan mi wa ni aabo?", answer: "Bẹ́ẹ̀ni — a pa wọn lẹ́yìn iṣẹ́ju 60." },
      {
        question: "Ṣe mo le ṣe iwọn tabi dinku aworan?",
        answer: "Bẹ́ẹ̀ni, o le ṣe iwọn, dinku, ati fi omi-ami kun ṣaaju gbigba silẹ.",
      },
    ],
    relatedTitle: "Àwọn Ọpa Míì",
    relatedTools: ["PDF sí Word", "PDF sí Aworan", "Kíkó PDF kù", "Aworan sí PDF", "Darapọ PDF"],
  },
};

export default function ImageConverterPage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang] || translations["en"];

  const containerStyle = { maxWidth: "1200px", margin: "0 auto", padding: "2rem" };
  const sectionStyle = {
    marginBottom: "4rem",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };
  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#222",
    textAlign: "center",
  };
  const subHeadingStyle = {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    color: "#555",
    lineHeight: 1.6,
    textAlign: "center",
  };
  const listStyle = {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: 1.6,
  };
  const badgeStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    margin: "0.25rem",
    borderRadius: "999px",
    backgroundColor: "#e0e0e0",
    fontSize: "0.9rem",
    color: "#333",
  };
  const homeButtonStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    marginBottom: "2rem",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home + Language Selector */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/" style={homeButtonStyle}>
              PDFImageTools Home
            </Link>
            <LanguageSelector currentLang={lang} onChange={setLang} />
          </div>

          {/* Hero */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <ImageConverter />
            </div>
          </section>

          {/* Steps */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.stepsTitle}</h2>
            <ol style={listStyle}>
              {t.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          {/* Supported Languages */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.supportedTitle}</h2>
            <div style={{ textAlign: "center" }}>
              {[
                "English",
                "Yoruba",
                "Hausa",
                "Igbo",
                "French",
                "Spanish",
                "Hindi",
                "Chinese",
                "Italian",
                "Portuguese",
                "Korean",
                "Japanese",
              ].map((lang) => (
                <span key={lang} style={badgeStyle}>
                  {lang}
                </span>
              ))}
            </div>
          </section>

          {/* About */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.aboutTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* Privacy */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.privacyTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.privacyText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.faqTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.faq.map((item, idx) => (
                <div key={idx}>
                  <h4 style={{ fontWeight: 600 }}>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.relatedTitle}</h2>
            <ul style={listStyle}>
              {t.relatedTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
