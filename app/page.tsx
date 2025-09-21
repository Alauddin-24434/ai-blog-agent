"use client";

import { useRouter } from "next/navigation";
import KeywordInput from "@/components/keywordInput";

export default function HomePage() {
  const router = useRouter();

  const handleGenerate = (keyword: string) => {
    if (!keyword) return;

    // Directly navigate to the results page with the keyword
    router.push(`/results?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="py-20 px-4 min-h-screen text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        The fastest and most powerful <span className="gradient-text">platform for building SEO content</span>
      </h1>

      <p className="text-xl text-muted-foreground mb-8">
        Generate SEO-optimized blog content with AI-powered keyword research, content creation, and optimization tools.
      </p>

      {/* Only KeywordInput now, no loading state here */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <KeywordInput onGenerate={handleGenerate} />
      </div>
    </section>
  );
}
