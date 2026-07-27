import { NextRequest, NextResponse } from "next/server";

const VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

export async function GET(request: NextRequest) {
  const videoId = request.nextUrl.searchParams.get("video") ?? "";
  if (!VIDEO_ID_PATTERN.test(videoId)) {
    return new NextResponse("Invalid video id", { status: 400 });
  }

  const response = await fetch(
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  );
  if (!response.ok) {
    return new NextResponse("Thumbnail unavailable", { status: 404 });
  }

  return new NextResponse(response.body, {
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });
}
