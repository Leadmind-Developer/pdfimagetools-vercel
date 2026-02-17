import BlogFooter from "@/components/blog/BlogFooter";

export default function BlogPageWrapper({ children }) {
  return (
    <>
      <main>
        {children}
      </main>

      <BlogFooter />
    </>
  );
}
