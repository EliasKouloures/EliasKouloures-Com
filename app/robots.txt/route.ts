export function GET() {
  const isProduction = process.env.SITE_IS_PRODUCTION === "true";
  const allowTraining = process.env.ALLOW_AI_TRAINING === "true";

  const body = isProduction
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        "User-agent: OAI-SearchBot",
        "Allow: /",
        "",
        "User-agent: PerplexityBot",
        "Allow: /",
        "",
        "User-agent: Claude-SearchBot",
        "Allow: /",
        "",
        "User-agent: Claude-User",
        "Allow: /",
        ...(allowTraining
          ? []
          : [
              "",
              "User-agent: GPTBot",
              "Disallow: /",
              "",
              "User-agent: ClaudeBot",
              "Disallow: /",
              "",
              "User-agent: CCBot",
              "Disallow: /",
              "",
              "User-agent: Google-Extended",
              "Disallow: /",
            ]),
        "",
        "Sitemap: https://eliaskouloures.com/sitemap.xml",
        "Host: eliaskouloures.com",
      ].join("\n")
    : [
        "User-agent: *",
        "Disallow: /",
        "",
        "Sitemap: https://eliaskouloures.com/sitemap.xml",
      ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
