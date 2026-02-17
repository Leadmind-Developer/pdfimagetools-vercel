import BlogHeader from "../../components/BlogHeader";
import BlogFooter from "../../components/BlogFooter";

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Minimal Blog Header */}
      <BlogHeader />

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">
        {children}
      </main>

      {/* Blog Footer */}
      <BlogFooter />
    </>
  );
}
