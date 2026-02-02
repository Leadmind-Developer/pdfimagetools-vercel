import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Convert Images Online for Free | PDFImageTools",
  description: "Convert JPG, PNG, and other image formats online for free using PDFImageTools."
};

export default function ImageConverterBlog() {

const faq = [
  {
    "@type": "Question",
    "name": "Is image conversion free?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, fully free with no watermark."
    }
  },
  {
    "@type": "Question",
    "name": "Which formats are supported?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "JPG, PNG, BMP, GIF, and more."
    }
  },
  {
    "@type": "Question",
    "name": "Are my images secure?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "All files are deleted automatically after processing."
    }
  }
];

return (
<article className="max-w-4xl mx-auto px-4 py-12">

<script type="application/ld+json"
dangerouslySetInnerHTML={{__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"Article",
"headline":"How to Convert Images Online",
"author":{"@type":"Organization","name":"PDFImageTools"},
"mainEntityOfPage":{"@id":"https://pdfimagetools.app/blog/image-converter"}
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
{"@type":"ListItem","position":3,"name":"Image Converter","item":"https://pdfimagetools.app/blog/image-converter"}
]
})}} />

<h1>Convert Images Online</h1>

<p>
Easily convert images between popular formats like JPG, PNG, and GIF with PDFImageTools — free, fast, and secure.
</p>

<h2>Related Tools</h2>
<ul>
<li><Link href="/remove-image-background">Remove Image Background</Link></li>
<li><Link href="/resize-passport-photo">Resize Passport Photo</Link></li>
<li><Link href="/image-to-pdf">Image to PDF</Link></li>
</ul>

</article>
);
}
