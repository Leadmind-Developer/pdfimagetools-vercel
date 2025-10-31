import React, { useState } from "react";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";
import Link from "next/link";

export const metadata = {
  title: "Free Word to PDF Converter | PDFImageTools",
  description:
    "Quickly convert Word documents (DOC/DOCX) to PDF online. Maintain layouts, fonts, and images. No signup required, fast and secure.",
  alternates: { canonical: "https://pdfimagetools.app/word-to-pdf" },
};

const translations = {
  en: {
    heroTitle: "Convert Word Files to PDF",
    heroSubtitle:
      "Instantly transform your Word documents into high-quality PDF files. Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.",
    howItWorks: "How It Works",
    step1: "Select DOCX files from your computer or drag them into the upload area.",
    step2: "Our system converts your files instantly while preserving fonts, images, and layout.",
    step3: "Download each PDF individually or use the batch download option for all files.",
    step4: "If needed, clear the current files and upload a new batch of Word documents.",
  },
  es: {
    heroTitle: "Convertir archivos de Word a PDF",
    heroSubtitle:
      "Transforma instantáneamente tus documentos de Word en archivos PDF de alta calidad. Sube múltiples archivos DOCX a la vez y obtén PDFs perfectamente formateados sin marcas de agua.",
    howItWorks: "Cómo funciona",
    step1: "Selecciona archivos DOCX desde tu computadora o arrástralos al área de subida.",
    step2: "Nuestro sistema convierte tus archivos al instante mientras preserva fuentes, imágenes y formato.",
    step3: "Descarga cada PDF individualmente o usa la opción de descarga por lote para todos los archivos.",
    step4: "Si es necesario, borra los archivos actuales y sube un nuevo lote de documentos Word.",
  },
  fr: {
    heroTitle: "Convertir des fichiers Word en PDF",
    heroSubtitle:
      "Transformez instantanément vos documents Word en fichiers PDF de haute qualité. Téléchargez plusieurs fichiers DOCX à la fois et obtenez des PDFs parfaitement formatés sans filigranes.",
    howItWorks: "Comment ça fonctionne",
    step1: "Sélectionnez des fichiers DOCX depuis votre ordinateur ou glissez-les dans la zone de téléchargement.",
    step2: "Notre système convertit vos fichiers instantanément tout en conservant les polices, images et mise en page.",
    step3: "Téléchargez chaque PDF individuellement ou utilisez l'option de téléchargement groupé pour tous les fichiers.",
    step4: "Si nécessaire, supprimez les fichiers actuels et téléchargez un nouveau lot de documents Word.",
  },
};

export default function WordToPdfPage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const containerStyle = { maxWidth: "1200px", margin: "0 auto", padding: "2rem" };
  const sectionStyle = { marginBottom: "4rem", padding: "2rem", borderRadius: "8px", backgroundColor: "#f9f9f9" };
  const headingStyle = { fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", color: "#222", textAlign: "center" };
  const subHeadingStyle = { fontSize: "1.25rem", marginBottom: "1.5rem", color: "#555", lineHeight: 1.6, textAlign: "center" };
  const listStyle = { paddingLeft: "1.5rem", marginBottom: "1rem", color: "#555", fontSize: "1.1rem", lineHeight: 1.6 };
  const badgeStyle = { display: "inline-block", padding: "0.5rem 1rem", margin: "0.25rem", borderRadius: "999px", backgroundColor: "#e0e0e0", fontSize: "0.9rem", color: "#333" };
  const homeButtonStyle = { display: "inline-block", padding: "0.5rem 1rem", marginBottom: "2rem", borderRadius: "5px", backgroundColor: "#0070f3", color: "#fff", textDecoration: "none", fontWeight: 600 };
  const languageSelectStyle = { marginLeft: "auto", padding: "0.5rem 1rem", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "#fff" };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home Button + Language Dropdown */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/" style={homeButtonStyle}>PDFImageTools Home</Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={languageSelectStyle}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>

          {/* Hero Section */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <WordToPdfUploader />
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.howItWorks}</h2>
            <ol style={listStyle}>
              <li>{t.step1}</li>
              <li>{t.step2}</li>
              <li>{t.step3}</li>
              <li>{t.step4}</li>
            </ol>
          </section>

          {/* Supported Languages */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Supported Languages</h2>
            <div style={{ textAlign: "center" }}>
              {["English", "Deutsch", "Español", "Français", "Indonesia","Italiano", "日本語", "한국어", "Nederlands", "Polski","Português", "Русский", "Türkçe", "Українська","Tiếng Việt", "中文"].map((lang) => (
                <span key={lang} style={badgeStyle}>{lang}</span>
              ))}
            </div>
          </section>

          {/* Additional sections remain the same... */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
