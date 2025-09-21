export default function analyzeSEO(blog: { title: string; content: string }) {
  const content = blog.content || "";

  return {
    metaTitle: (blog.title || "").slice(0, 60),
    metaDescription: content.slice(0, 150),
    seoScore: Math.floor(Math.random() * 30) + 70, // 70–100
    suggestions: [
      "Add more keywords in headings",
      "Include internal links",
      "Optimize images with alt text",
    ],
  };
}
