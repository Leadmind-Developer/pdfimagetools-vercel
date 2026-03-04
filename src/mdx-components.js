import ParagraphWithAds from "@/components/mdx/ParagraphWithAds";

export function useMDXComponents(components) {
  return {
    p: ParagraphWithAds,
    ...components,
  };
}
