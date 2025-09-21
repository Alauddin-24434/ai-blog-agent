import { getTrends } from "@/lib/trendApi";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { keyword } = await req.json();
  const data = await getTrends(keyword);
  // console.log(data)
  return NextResponse.json({ keyword, trends: data });
}
