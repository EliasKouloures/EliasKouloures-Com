const origin = "https://eliaskouloures.com";

const routePairs = [
  ["solve", "loesen"],
  ["educate", "fortbilden"],
  ["create", "entwickeln"],
  ["profile", "profil"],
  ["work", "projekte"],
] as const;

function alternateLinks(english: string, german: string) {
  return [
    `<xhtml:link rel="alternate" hreflang="en" href="${origin}/${english}" />`,
    `<xhtml:link rel="alternate" hreflang="de" href="${origin}/${german}" />`,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}/${english}" />`,
  ].join("");
}

export function GET() {
  const urls = [
    `<url><loc>${origin}/</loc><lastmod>2026-07-29</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
    ...routePairs.flatMap(([english, german]) => [
      `<url><loc>${origin}/${english}</loc>${alternateLinks(english, german)}<lastmod>2026-07-29</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`,
      `<url><loc>${origin}/${german}</loc>${alternateLinks(english, german)}<lastmod>2026-07-29</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`,
    ]),
    `<url><loc>${origin}/impressum-datenschutz</loc><lastmod>2026-07-29</lastmod><changefreq>yearly</changefreq><priority>0.2</priority></url>`,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
