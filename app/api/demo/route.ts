import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") || "thế giới";
  return NextResponse.json({ message: `Xin chào ${name}! 👋` });
}
