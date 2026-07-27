import { NextRequest, NextResponse } from "next/server";

const PLAYLIST_IDS = new Set([
  "PL66aLwkPo2YqtBCXQExJz14zxIAoFu-Tk",
  "PL66aLwkPo2YqLUhYuNpuVYOS_vwEuLvhl",
  "PL66aLwkPo2YqZ00aBJcmxbCSqgFYavoN-",
]);

type YouTubePlaylistItem = {
  snippet?: {
    title?: string;
    resourceId?: { videoId?: string };
    thumbnails?: {
      maxres?: { url?: string };
      standard?: { url?: string };
      high?: { url?: string };
      medium?: { url?: string };
    };
  };
  contentDetails?: { videoId?: string };
};

type YouTubeResponse = {
  nextPageToken?: string;
  items?: YouTubePlaylistItem[];
};

export async function GET(request: NextRequest) {
  const playlistId = request.nextUrl.searchParams.get("playlist") ?? "";
  const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

  if (!PLAYLIST_IDS.has(playlistId)) {
    return NextResponse.json(
      { configured: false, playlistUrl, message: "Unknown playlist." },
      { status: 400 },
    );
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        configured: false,
        playlistUrl,
        message:
          "The automatic gallery is configured and will activate when YOUTUBE_API_KEY is added.",
      },
      {
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  try {
    const videos: Array<{
      videoId: string;
      title: string;
      thumbnail: string;
    }> = [];
    let pageToken = "";

    do {
      const params = new URLSearchParams({
        part: "snippet,contentDetails",
        maxResults: "50",
        playlistId,
        key: apiKey,
      });
      if (pageToken) params.set("pageToken", pageToken);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?${params}`,
      );
      if (!response.ok) {
        throw new Error(`YouTube API returned ${response.status}`);
      }

      const page = (await response.json()) as YouTubeResponse;
      for (const item of page.items ?? []) {
        const title = item.snippet?.title ?? "";
        const videoId =
          item.contentDetails?.videoId ?? item.snippet?.resourceId?.videoId;
        const thumbnails = item.snippet?.thumbnails;
        const hasThumbnail =
          thumbnails?.maxres?.url ??
          thumbnails?.standard?.url ??
          thumbnails?.high?.url ??
          thumbnails?.medium?.url;

        if (
          videoId &&
          hasThumbnail &&
          title !== "Deleted video" &&
          title !== "Private video"
        ) {
          videos.push({
            videoId,
            title,
            thumbnail: `/api/youtube-thumbnail?video=${videoId}`,
          });
        }
      }

      pageToken = page.nextPageToken ?? "";
    } while (pageToken);

    return NextResponse.json(
      { configured: true, playlistUrl, videos },
      {
        headers: {
          "Cache-Control": "public, max-age=600, s-maxage=3600",
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        configured: false,
        playlistUrl,
        message: "The playlist could not be loaded right now.",
      },
      {
        status: 502,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
