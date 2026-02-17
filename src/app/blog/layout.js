import BlogFooter from "../../components/BlogFooter";

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Blog Content Wrapper */}
      <main className="max-w-4xl mx-auto px-4 py-12 leading-relaxed">
        {children}
      </main>

      {/* Global Blog Footer */}
      <BlogFooter />
    </>
  );
}
