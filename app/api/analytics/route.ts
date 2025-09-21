import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    visitors: 120,
    topBlogs: ["AI SEO", "Keyword Research"],
  });
}
