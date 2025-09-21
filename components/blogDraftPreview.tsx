"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogDraftPreview({ draft, trends }: { draft: any; trends: any }) {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(draft.content);
  const [grammarSuggestions, setGrammarSuggestions] = useState<any[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<any | null>(null);

  // Save blog
  const saveBlog = async () => {
    setLoading(true);
    const res = await fetch("/api/saveBlog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...draft, content }),
    });
    const data = await res.json();
    setLoading(false);
    alert(data.success ? "✅ Blog saved!" : "❌ Save failed!");
    setIsEditing(false);
  };

  // SEO score color
  const getSeoColor = (score: number | undefined) => {
    if (!score) return "text-gray-400";
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  // Keyword density calculation
  const calculateKeywordDensity = (text: string, keyword: string): number => {
    if (!keyword) return 0;
    const words = text.toLowerCase().split(/\s+/);
    const count = words.filter((w) => w.includes(keyword.toLowerCase())).length;
    return parseFloat(((count / words.length) * 100).toFixed(2));
  };

  const getKeywordDensityStatus = (density: number) => {
    if (density < 1) return { label: "Too Low", color: "text-red-500" };
    if (density >= 1 && density <= 2.5) return { label: "Good", color: "text-green-500" };
    return { label: "Too High", color: "text-yellow-500" };
  };

  // Grammar check using LanguageTool API
  const checkGrammar = async () => {
    if (!content) return;
    try {
      const params = new URLSearchParams({ text: content, language: "en-US" });
      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const data = await res.json();
      setGrammarSuggestions(data.matches || []);
    } catch {
      setGrammarSuggestions([]);
    }
  };

  useEffect(() => {
    if (!isEditing) checkGrammar();
  }, [isEditing, content]);

  // Apply fix
  const applyFix = (offset: number, length: number, replacement: string) => {
    const before = content.slice(0, offset);
    const after = content.slice(offset + length);
    setContent(before + replacement + after);
    setSelectedSuggestion(null);
  };

  // Render content with grammar highlights
  const renderContentWithHighlights = () => {
    if (grammarSuggestions.length === 0) return <ReactMarkdown>{content}</ReactMarkdown>;

    const parts: any[] = [];
    let lastIndex = 0;

    grammarSuggestions.forEach((g: any, i: number) => {
      const start = g.offset;
      const end = g.offset + g.length;

      if (start > lastIndex) {
        parts.push(<ReactMarkdown key={`text-${i}`} children={content.slice(lastIndex, start)} />);
      }

      parts.push(
        <span
          key={`highlight-${i}`}
          className="bg-red-200 underline decoration-red-600 cursor-pointer relative"
          onClick={() => setSelectedSuggestion(g)}
        >
          {content.slice(start, end)}
        </span>
      );

      lastIndex = end;
    });

    if (lastIndex < content.length) {
      parts.push(<ReactMarkdown key="last" children={content.slice(lastIndex)} />);
    }

    return parts;
  };

  const density = draft.keyword ? calculateKeywordDensity(content, draft.keyword) : 0;
  const densityStatus = getKeywordDensityStatus(density);

  return (
    <div className="flex gap-4">
      {/* Main content */}
      <div className="flex-1 p-6 border rounded-xl shadow-lg bg-white">
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition text-black"
          >
            {isEditing ? "Save & Close" : "Edit Blog"}
          </button>
        </div>

        <div className="prose max-w-full relative">
          {isEditing ? (
            <textarea
              className="w-full border rounded p-3 min-h-[200px] text-black"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <div className="mt-2 text-black whitespace-pre-line">{renderContentWithHighlights()}</div>
          )}
        </div>

        {/* SEO & Keyword info */}
        <div className="mt-4">
          <h3 className="font-semibold text-black">
            SEO Score: <span className={`${getSeoColor(draft.seo?.seoScore)}`}>{draft.seo?.seoScore ?? "N/A"}</span>
          </h3>

          {draft.keyword && (
            <h4 className="mt-2 font-semibold text-black">
              Keyword Density:{" "}
              <span className="text-blue-600">{density}%</span>{" "}
              <span className={`${densityStatus.color} font-medium`}>({densityStatus.label})</span>
            </h4>
          )}

          {trends && (
            <div className="mt-2 flex flex-row items-center gap-2">
              <h4 className="font-semibold text-black">Keyword Trends:</h4>
              <span
                className={`font-medium ${
                  trends.score === "High" ? "text-green-500" : trends.score === "Medium" ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                {trends.score} ({trends.average})
              </span>
            </div>
          )}
        </div>

        {!isEditing && (
          <button
            onClick={saveBlog}
            disabled={loading}
            className="mt-6 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </button>
        )}
      </div>

      {/* Right-side Grammar Sidebar */}
      {!isEditing && selectedSuggestion && (
        <div className="w-64 p-4 border rounded-xl shadow-lg bg-gray-50">
          <h4 className="font-semibold mb-2 text-black">Suggestions</h4>
          <p className="mb-2 text-sm text-gray-700">
            Issue: "{content.slice(selectedSuggestion.offset, selectedSuggestion.offset + selectedSuggestion.length)}"
          </p>
          {selectedSuggestion.replacements.length > 0 ? (
            <ul>
              {selectedSuggestion.replacements.map((r: any, i: number) => (
                <li key={i} className="mb-1">
                  <button
                    onClick={() => applyFix(selectedSuggestion.offset, selectedSuggestion.length, r.value)}
                    className="px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm"
                  >
                    {r.value}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No suggestions available</p>
          )}
          <button onClick={() => setSelectedSuggestion(null)} className="mt-2 text-xs text-gray-500 underline">
            Close
          </button>
        </div>
      )}
    </div>
  );
}
