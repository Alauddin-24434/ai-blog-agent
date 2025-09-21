import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/models/Blog";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const newBlog = await Blog.create({
      title: body.title,
      content: body.content,
      keywords: body.keywords,
      seoScore: body.seo?.seoScore,
      author: "AI-Agent",
      status: "published",
    });

    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    console.error("❌ Blog save error:", error);
    return NextResponse.json({ success: false, error: "Failed to save blog" }, { status: 500 });
  }
}
