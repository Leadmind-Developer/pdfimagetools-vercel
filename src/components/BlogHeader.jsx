import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="blog-header">
      <div className="blog-header-inner">
        {/* Logo / Brand */}
        <Link href="/" className="blog-logo">
          PDFImageTools
        </Link>

        {/* Navigation */}
        <nav className="blog-nav">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
