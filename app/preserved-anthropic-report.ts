const reportSources = {
  brief:
    "https://www-eliaskouloures-com.filesusr.com/html/3be268_51e7b42a1fa5217a4f72a5aebb8134e0.html",
  fieldTest:
    "https://www-eliaskouloures-com.filesusr.com/html/3be268_8dc4dcc67aeda4ec772bf62a66179d07.html",
} as const;

export async function preservedAnthropicReport(
  report: keyof typeof reportSources,
) {
  const upstream = await fetch(reportSources[report]);

  if (!upstream.ok) {
    return new Response("Report temporarily unavailable.", { status: 502 });
  }

  const headers = new Headers(upstream.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "public, max-age=300, s-maxage=86400");

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}
