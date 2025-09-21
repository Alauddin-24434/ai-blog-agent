import analyzeSEO from "@/lib/seoTools";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const blog = await req.json();

    if (!blog || typeof blog.content !== "string") {
      return NextResponse.json({ error: "Invalid blog content" }, { status: 400 });
    }

    const seo = analyzeSEO(blog);
    return NextResponse.json(seo);
  } catch (error: any) {
    console.error("SEO Analysis Error:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
