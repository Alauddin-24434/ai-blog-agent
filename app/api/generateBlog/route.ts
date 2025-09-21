// app/api/generateBlog/route.ts
import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = "http://localhost:3000";
const SITE_NAME = "AI Blog Agent";

export async function POST(req: Request) {
  try {
    const { keyword  } = await req.json();
    
    if (!keyword) {
      return NextResponse.json(
        { error: "Keyword missing" },
        { status: 400 }
      );
    }

    // OpenRouter API request
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": SITE_URL,
        "X-Title": SITE_NAME,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Write a detailed SEO-optimized blog about "${keyword}". Include headings, subheadings, examples, and FAQ section. Also suggested Clearly mark each link as internal or external.`,
          },
        ],

      }),
    });

    if (!response.ok) {
      // Handle OpenRouter API errors
      const text = await response.text(); // read error body if any
      console.error("OpenRouter API Error:", response.status, text);
      return NextResponse.json(
        { error: `OpenRouter API failed: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const blog = data.choices?.[0]?.message?.content || "No blog generated.";

    return NextResponse.json({
      title: `AI Blog: ${keyword}`,
      content: blog,
    });
  } catch (error: any) {
    console.error("Internal API error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
