"use client";
import React from "react";

const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "yo", label: "Yoruba" },
  { code: "ha", label: "Hausa" },
  { code: "ig", label: "Igbo" },
  { code: "hi", label: "Hindi" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "tr", label: "Türkçe" },
  { code: "uk", label: "Українська" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "zh", label: "中文" },
];

export default function LanguageSelector({ currentLang, onChange }) {
  const selectStyle = {
    marginLeft: "auto",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "0.95rem",
  };

  return (
    <select
      value={currentLang}
      onChange={(e) => onChange(e.target.value)}
      style={selectStyle}
    >
      {supportedLanguages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
