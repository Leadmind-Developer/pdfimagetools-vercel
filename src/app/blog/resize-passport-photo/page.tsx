import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Resize Passport Photo Online for Free | PDFImageTools",
  description: "Resize and format your passport photos online for free with PDFImageTools."
};

export default function ResizePassportPhotoBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is resizing passport photos free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, fully free and without watermarks."
    }
  },
  {
    "@type": "Question",
    "name": "What sizes are supported?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Standard passport photo sizes like 2x2 inch, 35x45mm, and custom dimensions."
    }
  },
  {
    "@type": "Question",
    "name": "Are my photos private?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All uploaded images are deleted immediately after processing."
    }
  }
];

return (
<article className="max-w-4xl mx-auto px-4 py-12">

<script type="application/ld+json"
dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"Article",
"headline":"How to Resize Passport Photos Online",
"author":{"@type":"Organization","name":"PDFImageTools"},
"mainEntityOfPage":{"@id":"https://pdfimagetools.app/blog/resize-passport-photo"}
})}} />

<script type="application/ld+json"
dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"FAQPage",
"mainEntity": faq
})}} />

<script type="application/ld+json"
dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{"@type":"ListItem","position":1,"name":"Home","item":"https://pdfimagetools.app/"},
{"@type":"ListItem","position":2,"name":"Blog","item":"https://pdfimagetools.app/blog"},
{"@type":"ListItem","position":3,"name":"Resize Passport Photo","item":"https://pdfimagetools.app/blog/resize-passport-photo"}
]
})}} />

<h1>Resize Passport Photo Online</h1>

<p>
Easily resize your passport photos to standard dimensions for official documents.
PDFImageTools ensures the correct size and format — free, fast, and secure.
</p>

<h2>Related Tools</h2>
<ul>
<li><Link href="/remove-image-background">Remove Image Background</Link></li>
<li><Link href="/image-converter">Image Converter</Link></li>
<li><Link href="/combine-pdfs">Merge PDFs</Link></li>
</ul>

</article>
);
}
