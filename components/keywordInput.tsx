"use client";

import { useState } from "react";

export default function KeywordInput({ onGenerate }: { onGenerate: (keyword: string) => void }) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter keyword..."
        className="border px-4 py-2 rounded w-72"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        onClick={() => onGenerate(keyword)}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Generate Blog
      </button>
    </div>
  );
}
