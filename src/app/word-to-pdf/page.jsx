import React, { useState } from "react";
import Footer from "../../components/Footer";
import WordToPdfUploader from "../../components/WordToPdfUploader";
import Link from "next/link";
import LanguageSelector from "../../components/LanguageSelector";

// Translation object
const translations = {
  en: {
    heroTitle: "Convert Word Files to PDF",
    heroSubtitle: "Instantly transform your Word documents into high-quality PDF files. Upload multiple DOCX files at once and get perfectly formatted PDFs without any watermarks.",
    stepsTitle: "How It Works",
    steps: [
      "Select DOCX files from your computer or drag them into the upload area.",
      "Our system converts your files instantly while preserving fonts, images, and layout.",
      "Download each PDF individually or use the batch download option for all files.",
      "If needed, clear the current files and upload a new batch of Word documents.",
    ],
    supportedTitle: "Supported Languages",
    aboutTitle: "Understanding Word and PDF",
    aboutText: [
      "Word documents (DOC/DOCX) store your text, images, and formatting. They are editable and ideal for content creation.",
      "PDFs, on the other hand, are designed to preserve the exact layout and appearance across all devices. They are ideal for sharing and printing documents while ensuring consistency.",
      "Our tool carefully maintains your document formatting, but uncommon fonts may be substituted for the closest available alternatives.",
    ],
    privacyTitle: "Privacy & Security",
    privacyText: [
      "All uploaded files are automatically deleted after one hour. Conversion is performed on server copies; your original files remain on your device.",
      "No email or account is required. Your privacy is our priority.",
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "Is this service free?", answer: "Yes, you can convert Word files to PDF without any charge or watermark." },
      { question: "Do I need an account?", answer: "No account or registration is required to use this tool." },
      { question: "Are my files safe?", answer: "Files are automatically deleted after 60 minutes. Conversions use copies on the server only." },
      { question: "Which file types are supported?", answer: "You can upload DOC and DOCX files, up to 20 files per batch." },
    ],
    relatedTitle: "Other Tools You May Like",
    relatedTools: [
      "Convert Excel to PDF",
      "PowerPoint to PDF",
      "PDF editing tools",
      "Image to PDF converter",
      "Document merging and splitting",
    ],
  },
  yo: {
    heroTitle: "Yi Awọn Faili Ọrọ pada si PDF",
    heroSubtitle: "Yi awọn iwe ọrọ rẹ pada si awọn faili PDF didara-giga lẹsẹkẹsẹ. Gbe awọn faili DOCX pupọ ni ẹẹkan ki o gba awọn PDF ti o ṣe deede laisi eyikeyi omi-omi.",
    stepsTitle: "Bii o ṣe n ṣiṣẹ",
    steps: [
      "Yan awọn faili DOCX lati kọmputa rẹ tabi fa wọn sinu agbegbe ikojọpọ.",
      "Eto wa yoo yi awọn faili rẹ pada lẹsẹkẹsẹ lakoko ti o n tọju awọn nkọwe, awọn aworan, ati apẹrẹ.",
      "Gba PDF kọọkan lọtọ tabi lo aṣayan igbasilẹ pọ fun gbogbo awọn faili.",
      "Ti o ba nilo, nu awọn faili lọwọlọwọ ki o gbe ẹgbẹ tuntun ti awọn iwe ọrọ Word soke.",
    ],
    supportedTitle: "Awọn Ede Ti a ṣe atilẹyin",
    aboutTitle: "Imọ nipa Word ati PDF",
    aboutText: [
      "Awọn iwe Word (DOC/DOCX) n tọju ọrọ, awọn aworan, ati apẹrẹ rẹ. Wọn jẹ ṣiṣiṣẹ ati pe o dara fun ṣẹda akoonu.",
      "PDFs jẹ apẹrẹ lati tọju apẹrẹ ati hihan gangan lori gbogbo awọn ẹrọ. Wọn dara fun pinpin ati titẹ awọn iwe lati rii daju ifarada.",
      "Ọpa wa n tọju apẹrẹ iwe rẹ ni pẹkipẹki, ṣugbọn awọn nkọwe alailẹgbẹ le paarọ si awọn omiiran ti o sunmọ julọ.",
    ],
    privacyTitle: "Asiri & Aabo",
    privacyText: [
      "Gbogbo awọn faili ti a gbe sori ẹrọ ni a paarẹ laifọwọyi lẹhin wakati kan. Iyipada ni a ṣe lori awọn ẹda olupin; awọn faili atilẹba rẹ wa lori ẹrọ rẹ.",
      "Ko si imeeli tabi akọọlẹ ti o nilo. Asiri rẹ jẹ pataki si wa.",
    ],
    faqTitle: "Awọn ibeere ti a maa n beere",
    faq: [
      { question: "Ṣe iṣẹ yii jẹ ọfẹ?", answer: "Bẹẹni, o le yi awọn faili Word pada si PDF laisi idiyele tabi omi-omi." },
      { question: "Ṣe Mo nilo akọọlẹ?", answer: "Ko si akọọlẹ tabi iforukọsilẹ ti o nilo lati lo ọpa yii." },
      { question: "Ṣe awọn faili mi wa ni ailewu?", answer: "Awọn faili ni a paarẹ laifọwọyi lẹhin iṣẹju 60. Iyipada nlo awọn ẹda lori olupin nikan." },
      { question: "Awọn iru faili wo ni a ṣe atilẹyin?", answer: "O le gbe awọn faili DOC ati DOCX soke, to awọn faili 20 ni ẹgbẹ." },
    ],
    relatedTitle: "Awọn Ọpa Miran Ti O le Feran",
    relatedTools: [
      "Yi Excel pada si PDF",
      "PowerPoint si PDF",
      "Awọn irinṣẹ ṣiṣatunkọ PDF",
      "Aworan si iyipada PDF",
      "Apapọ ati pinpin awọn iwe",
    ],
  },
  ha: {
    heroTitle: "Canja Fayilolin Word zuwa PDF",
    heroSubtitle: "Canza takardun Word ɗinku zuwa PDF masu inganci nan take. Loda fayilolin DOCX da yawa a lokaci ɗaya kuma sami PDF masu kyau ba tare da alamun ruwa ba.",
    stepsTitle: "Yadda Ake Yi",
    steps: [
      "Zaɓi fayilolin DOCX daga kwamfutarka ko ja su cikin yankin ɗora.",
      "Tsarinmu yana canza fayilolinku nan take yayin kiyaye fonts, hotuna, da tsarin.",
      "Sauke kowace PDF daban-daban ko amfani da zaɓin sauke taro ga duk fayiloli.",
      "Idan ya cancanta, share fayilolin yanzu sannan ka ɗora sabon tarin takardun Word.",
    ],
    supportedTitle: "Harsuna da Aka Goyawa",
    aboutTitle: "Fahimtar Word da PDF",
    aboutText: [
      "Takardun Word (DOC/DOCX) suna adana rubutu, hotuna, da tsarinku. Ana iya gyarawa kuma suna dacewa don ƙirƙirar abun ciki.",
      "PDF an tsara su don kiyaye tsarin da kallo akan duk na'urori. Suna dacewa don raba da buga takardu yayin tabbatar da daidaito.",
      "Kayan aikinmu yana kiyaye tsarin takardunku sosai, amma fonts marasa amfani na iya maye gurbin mafi kusa.",
    ],
    privacyTitle: "Sirri & Tsaro",
    privacyText: [
      "Dukkan fayilolin da aka loda ana share su ta atomatik bayan awa ɗaya. Canji ana yin sa akan kwafin uwar garken; asalin fayilolinku suna kan na'urarku.",
      "Babu imel ko asusu da ake buƙata. Sirrinku shine fifiko.",
    ],
    faqTitle: "Tambayoyi akai-akai",
    faq: [
      { question: "Shin wannan sabis kyauta ne?", answer: "Eh, zaka iya canza fayilolin Word zuwa PDF ba tare da cajin ko alamar ruwa ba." },
      { question: "Shin ina bukatar asusu?", answer: "Babu asusu ko rajista da ake bukata don amfani da wannan kayan aiki." },
      { question: "Shin fayilolina suna lafiya?", answer: "Ana share fayiloli bayan mintuna 60. Canje-canje suna amfani da kwafin uwar garken kawai." },
      { question: "Wane nau'in fayiloli ake goyon baya?", answer: "Zaka iya loda fayilolin DOC da DOCX, har zuwa fayiloli 20 a lokaci guda." },
    ],
    relatedTitle: "Sauran Kayan Aiki da Zaka Iya So",
    relatedTools: [
      "Canza Excel zuwa PDF",
      "PowerPoint zuwa PDF",
      "Kayan gyaran PDF",
      "Hoton zuwa PDF",
      "Hada da raba takardu",
    ],
  },
  ig: {
    heroTitle: "Tụgharịa Akwụkwọ Word gaa PDF",
    heroSubtitle: "Tụgharịa akwụkwọ Word gị gaa faịlụ PDF dị elu ozugbo. Bulite ọtụtụ faịlụ DOCX n'otu oge ma nweta PDF zuru oke na-enweghị akara mmiri.",
    stepsTitle: "Otu Ọrụ Si Esi",
    steps: [
      "Họrọ faịlụ DOCX sitere na kọmputa gị ma ọ bụ dọta ha n'ime mpaghara bulite.",
      "Sistemụ anyị na-agbanwe faịlụ gị ozugbo ma na-echekwa fonts, oyiyi, na nhazi.",
      "Budata PDF ọ bụla n'otu ụzọ ma ọ bụ jiri nhọrọ ibudata n'ọtụtụ maka faịlụ niile.",
      "Ọ bụrụ na ọ dị mkpa, hichapụ faịlụ ugbu a ma bulite otu ọhụụ nke akwụkwọ Word.",
    ],
    supportedTitle: "Asụsụ Akwado",
    aboutTitle: "Ịghọta Word na PDF",
    aboutText: [
      "Akwụkwọ Word (DOC/DOCX) na-echekwa ederede gị, oyiyi, na nhazi. Ha dị editable ma dị mma maka ịmepụta ọdịnaya.",
      "PDFs na-echekwa nhazi na ọdịdị n'elu ngwaọrụ niile. Ha dị mma maka ịkekọrịta na ibipụta akwụkwọ na ijide n'aka consistency.",
      "Ngwaọrụ anyị na-echekwa nhazi akwụkwọ gị nke ọma, mana fonts ndị na-adịghị ahụkebe nwere ike dochie ha na nhọrọ kachasị nso.",
    ],
    privacyTitle: "Nzuzo & Nche",
    privacyText: [
      "A na-ewepụ faịlụ niile e bulitere ozugbo mgbe otu awa gachara. Nhazi na-eme na nkebi sava; faịlụ mbụ gị ka nọ na ngwaọrụ gị.",
      "Enweghị email ma ọ bụ akaụntụ achọrọ. Nzuzo gị bụ ihe kacha mkpa.",
    ],
    faqTitle: "Ajụjụ a na-ajụkarị",
    faq: [
      { question: "Ọrụ a bụ n'efu?", answer: "Ee, ị nwere ike tụgharịa faịlụ Word gaa PDF n'enweghị ụgwọ ma ọ bụ akara mmiri." },
      { question: "Achọrọ m akaụntụ?", answer: "Enweghị akaụntụ ma ọ bụ ndebanye aha achọrọ iji jiri ngwa a." },
      { question: "Faịlụ m dị nche?", answer: "A na-ewepụ faịlụ ozugbo mgbe nkeji 60 gachara. Nhazi na-eji naanị nkebi sava." },
      { question: "Kedu ụdị faịlụ ka e nyere?", answer: "Ị nwere ike bulite faịlụ DOC na DOCX, ruo faịlụ 20 n'otu oge." },
    ],
    relatedTitle: "Ngwaọrụ ndị ọzọ ị nwere ike ịhụ n'anya",
    relatedTools: [
      "Tụgharịa Excel gaa PDF",
      "PowerPoint gaa PDF",
      "Ngwaọrụ dezie PDF",
      "Image gaa PDF",
      "Ijikọta na kewaa akwụkwọ",
    ],
  },
  hi: {
    heroTitle: "Word फ़ाइलों को PDF में बदलें",
    heroSubtitle: "अपने Word दस्तावेज़ों को उच्च गुणवत्ता वाले PDF फ़ाइलों में तुरंत बदलें। एक साथ कई DOCX फ़ाइलें अपलोड करें और बिना वॉटरमार्क के पूरी तरह से स्वरूपित PDFs प्राप्त करें।",
    stepsTitle: "यह कैसे काम करता है",
    steps: [
      "अपने कंप्यूटर से DOCX फ़ाइलें चुनें या उन्हें अपलोड क्षेत्र में खींचें।",
      "हमारी प्रणाली फ़ाइलों को तुरंत रूपांतरित करती है जबकि फ़ॉन्ट, चित्र और लेआउट को बनाए रखती है।",
      "प्रत्येक PDF को अलग से डाउनलोड करें या सभी फ़ाइलों के लिए बैच डाउनलोड विकल्प का उपयोग करें।",
      "यदि आवश्यक हो, तो वर्तमान फ़ाइलों को साफ़ करें और Word दस्तावेज़ों के नए बैच को अपलोड करें।",
    ],
    supportedTitle: "समर्थित भाषाएँ",
    aboutTitle: "Word और PDF को समझना",
    aboutText: [
      "Word दस्तावेज़ (DOC/DOCX) आपका टेक्स्ट, चित्र और फ़ॉर्मेटिंग स्टोर करते हैं। ये संपादन योग्य हैं और सामग्री निर्माण के लिए आदर्श हैं।",
      "PDF को सभी उपकरणों पर सटीक लेआउट और उपस्थिति बनाए रखने के लिए डिज़ाइन किया गया है। यह साझा करने और प्रिंट करने के लिए आदर्श है।",
      "हमारा टूल आपके दस्तावेज़ फ़ॉर्मेटिंग को सावधानीपूर्वक बनाए रखता है, लेकिन असामान्य फ़ॉन्ट्स को सबसे करीब उपलब्ध विकल्प से प्रतिस्थापित किया जा सकता है।",
    ],
    privacyTitle: "गोपनीयता और सुरक्षा",
    privacyText: [
      "सभी अपलोड की गई फ़ाइलें एक घंटे के बाद स्वचालित रूप से हटा दी जाती हैं। रूपांतरण सर्वर प्रतियों पर किया जाता है; आपकी मूल फ़ाइलें आपके डिवाइस पर बनी रहती हैं।",
      "किसी ईमेल या खाता की आवश्यकता नहीं है। आपकी गोपनीयता हमारी प्राथमिकता है।",
    ],
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq: [
      { question: "क्या यह सेवा मुफ़्त है?", answer: "हाँ, आप Word फ़ाइलों को PDF में बिना किसी शुल्क या वॉटरमार्क के बदल सकते हैं।" },
      { question: "क्या मुझे खाता चाहिए?", answer: "इस टूल का उपयोग करने के लिए किसी खाते या पंजीकरण की आवश्यकता नहीं है।" },
      { question: "क्या मेरी फ़ाइलें सुरक्षित हैं?", answer: "फ़ाइलें 60 मिनट के बाद स्वचालित रूप से हटा दी जाती हैं। रूपांतरण केवल सर्वर प्रतियों का उपयोग करता है।" },
      { question: "कौन से फ़ाइल प्रकार समर्थित हैं?", answer: "आप DOC और DOCX फ़ाइलें अपलोड कर सकते हैं, एक बैच में 20 फ़ाइलें तक।" },
    ],
    relatedTitle: "अन्य उपकरण जो आपको पसंद आ सकते हैं",
    relatedTools: [
      "Excel को PDF में बदलें",
      "PowerPoint को PDF में बदलें",
      "PDF संपादन उपकरण",
      "इमेज को PDF में बदलें",
      "दस्तावेज़ मर्ज और विभाजन",
    ],
  },
};

export default function WordToPdfPage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang] || translations["en"];

  const containerStyle = { maxWidth: "1200px", margin: "0 auto", padding: "2rem" };
  const sectionStyle = { marginBottom: "4rem", padding: "2rem", borderRadius: "8px", backgroundColor: "#f9f9f9" };
  const headingStyle = { fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", color: "#222", textAlign: "center" };
  const subHeadingStyle = { fontSize: "1.25rem", marginBottom: "1.5rem", color: "#555", lineHeight: 1.6, textAlign: "center" };
  const listStyle = { paddingLeft: "1.5rem", marginBottom: "1rem", color: "#555", fontSize: "1.1rem", lineHeight: 1.6 };
  const badgeStyle = { display: "inline-block", padding: "0.5rem 1rem", margin: "0.25rem", borderRadius: "999px", backgroundColor: "#e0e0e0", fontSize: "0.9rem", color: "#333" };
  const homeButtonStyle = { display: "inline-block", padding: "0.5rem 1rem", marginBottom: "2rem", borderRadius: "5px", backgroundColor: "#0070f3", color: "#fff", textDecoration: "none", fontWeight: 600 };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        <div style={containerStyle}>
          {/* Home + Language Selector */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/" style={homeButtonStyle}>PDFImageTools Home</Link>
            <LanguageSelector currentLang={lang} onChange={setLang} />
          </div>

          {/* Hero Section */}
          <section style={{ marginBottom: "4rem", textAlign: "center" }}>
            <h1 style={headingStyle}>{t.heroTitle}</h1>
            <p style={subHeadingStyle}>{t.heroSubtitle}</p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <WordToPdfUploader />
            </div>
          </section>

          {/* Steps */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.stepsTitle}</h2>
            <ol style={listStyle}>
              {t.steps.map((step, idx) => <li key={idx}>{step}</li>)}
            </ol>
          </section>

          {/* Supported Languages */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.supportedTitle}</h2>
            <div style={{ textAlign: "center" }}>
              {["English", "Deutsch", "Español", "Français", "Yoruba", "Hausa", "Igbo", "Hindi", "Indonesia", "Italiano", "日本語", "한국어", "Nederlands", "Polski", "Português", "Русский", "Türkçe", "Українська", "Tiếng Việt", "中文"].map((lang) => (
                <span key={lang} style={badgeStyle}>{lang}</span>
              ))}
            </div>
          </section>

          {/* About */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.aboutTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.aboutText.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
          </section>

          {/* Privacy */}
          <section style={sectionStyle}>
            <h2 style={headingStyle}>{t.privacyTitle}</h2>
            <div style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6 }}>
              {t.privacyText.map((p, idx) => <p key={idx}>{p}</p>)}
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
            <ul style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6, paddingLeft: "1.5rem" }}>
              {t.relatedTools.map((tool, idx) => <li key={idx}>{tool}</li>)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
