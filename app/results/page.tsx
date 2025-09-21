"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogDraftPreview from "@/components/blogDraftPreview";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [draft, setDraft] = useState<any>(null);
  const [trends, setTrends] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!keyword) {
      setError("No keyword provided");
      setLoading(false);
      return;
    }

    const generateBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        // Step 1: Keyword Research
        const res1 = await fetch("/api/keywordResearch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ keyword }),
        });
        const keywordData = await res1.json();
        setTrends(keywordData?.trends);

        // Step 2: AI Generate Blog
        const res2 = await fetch("/api/generateBlog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ keyword, keywordData }),
        });
        const blogDraft = await res2.json();

        // Step 3: SEO Analysis
        const res3 = await fetch("/api/seoAnalysis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blogDraft),
        });
        const seoReport = await res3.json();

        setDraft({ ...blogDraft, seo: seoReport });
      } catch (err) {
        console.error(err);
        setError("Failed to generate blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    generateBlog();
  }, [keyword]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Generating blog... please wait.
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );

  return (
    <section className="py-12 px-4 container mx-auto max-w-4xl">
     
      {draft && <BlogDraftPreview draft={draft} trends={trends} />}
    </section>
  );
}
