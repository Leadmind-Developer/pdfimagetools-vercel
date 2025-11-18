"use client";

import React, { useState } from "react";
import Footer from "../../components/Footer";
import PdfCombineUploader from "../../components/PdfCombineUploader";
import Link from "next/link";
import LanguageSelector from "../../components/LanguageSelector";

const translations = {
  en: {
    heroTitle: "Merge PDF Files Online",
    heroSubtitle:
      "Easily combine multiple PDF documents into a single file. Drag, reorder, and merge instantly — no limits, no watermarks, always free.",
    stepsTitle: "How It Works",
    steps: [
      "Upload two or more PDF files from your device.",
      "Reorder your PDFs using the drag-and-drop interface.",
      "Click the merge button to combine everything into one document.",
      "Download your merged PDF or start a new merge.",
    ],
    supportedTitle: "Supported Languages",
    aboutTitle: "Why Merge PDFs?",
    aboutText: [
      "Merging PDF files helps keep documents organized, especially when handling reports, forms, scanned pages, and project files.",
      "A single PDF is easier to store, share, print, and secure. It also ensures consistency when sending files to clients or colleagues.",
      "Our tool maintains the original quality of all PDF pages — no compression unless you choose otherwise.",
    ],
    privacyTitle: "Privacy & Security",
    privacyText: [
      "All uploaded PDFs are automatically deleted after one hour. We never store your merged documents permanently.",
      "Merging happens securely on the server using temporary copies. No login or email required.",
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        question: "Is the PDF merge tool free?",
        answer:
          "Yes, the service is 100% free with no limits, no watermarks, and no hidden costs.",
      },
      {
        question: "How many PDFs can I merge?",
        answer: "You can upload and merge as many PDF files as you want.",
      },
      {
        question: "Are my files safe?",
        answer:
          "Absolutely. Files are deleted automatically after 60 minutes and are never shared.",
      },
      {
        question: "Does merging reduce file quality?",
        answer:
          "No. Your merged output keeps the original resolution of all pages.",
      },
    ],
    relatedTitle: "Other Tools You May Like",
    relatedTools: [
      "PDF to Word",
      "Compress PDF",
      "PDF to Images",
      "Split PDF",
      "Image to PDF",
    ],
  },

  yo: {
    heroTitle: "Darapọ̀ Awọn PDF Papọ",
    heroSubtitle:
      "Darapọ̀ ọpọlọpọ awọn iwe PDF si inu faili kan. Fa, ṣeto lẹsẹsẹ, ki o darapọ pẹlu irọrun — laisi aala tabi omi-omi.",
    stepsTitle: "Bá a Ṣe N Ṣiṣẹ́",
    steps: [
      "Gbe awọn faili PDF meji tabi diẹ sii soke.",
      "Ṣeto wọn ni aṣẹ ti o fẹ nipa fifi fa ati ju silẹ.",
      "Tẹ bọtini darapọ̀ lati ṣopọ gbogbo rẹ sinu PDF kan.",
      "Gba faili tuntun rẹ silẹ tabi bẹrẹ tuntun.",
    ],
    supportedTitle: "Awọn Ede Ti a Ṣe Atilẹ́yin",
    aboutTitle: "Kí Ló Dé Tí A Fi N Darapọ̀ PDF?",
    aboutText: [
      "Darapọ̀ awọn PDF ṣe iranlọwọ lati ṣeto awọn iwe, paapaa fun awọn iroyin, awọn fọọmu, awọn oju-iwe ti a ṣayẹwo, ati awọn iṣẹ akanṣe.",
      "PDF kan ṣoṣo rọrùn lati fipamọ, pin, tabi tẹjade.",
      "Aabo ati didara ko bajẹ rara.",
    ],
    privacyTitle: "Asiri & Aabo",
    privacyText: [
      "Gbogbo awọn faili ti a gbe si ẹrọ ni a paarẹ laifọwọyi lẹhin wakati kan.",
      "A ko beere fun iroyin tabi imeeli.",
    ],
    faqTitle: "Awọn Ibeere Ti A Maa N Beere",
    faq: [
      { question: "Ṣe o ni owo?", answer: "Rara — o jẹ ọfẹ patapata." },
      {
        question: "Melo ni mo le darapọ̀?",
        answer: "O le darapọ̀ bi ọpọlọpọ PDF bi o ṣe fẹ.",
      },
      {
        question: "Ṣe awọn faili mi ní ailewu?",
        answer: "Bẹẹni, wọn ti paarẹ laifọwọyi lẹhin iṣẹju 60.",
      },
      {
        question: "Ṣe didara yoo dinku?",
        answer: "Rara, didara atilẹba ni a tọju.",
      },
    ],
    relatedTitle: "Awọn Ọpa Miran",
    relatedTools: ["PDF sí Word", "Kíkó PDF kù", "PDF sí Aworan", "Pín PDF"],
  },
};

export default function CombinePdfsPage() {
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
              <PdfCombineUploader />
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
