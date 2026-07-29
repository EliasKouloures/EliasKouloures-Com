import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function request(pathname = "/", accept = "text/html") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${pathname}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function render(pathname = "/") {
  return request(pathname);
}

function assertIncludesAll(html, expected) {
  for (const copy of expected) {
    assert.ok(html.includes(copy), `Missing expected copy: ${copy}`);
  }
}

test("renders the bilingual landing page with all six flat routes", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /How may I help you\?/);
  assert.match(html, /href="\/solve"/);
  assert.match(html, /href="\/educate"/);
  assert.match(html, /href="\/create"/);
  assert.match(html, /href="\/loesen"/);
  assert.match(html, /href="\/fortbilden"/);
  assert.match(html, /href="\/entwickeln"/);
  assert.doesNotMatch(html, /href="\/de\//);
  assert.doesNotMatch(html, /Three service areas\. Two languages\./);
  assert.doesNotMatch(html, /class="card-lang"/);
  assert.match(
    html,
    /href="https:\/\/kardashev-campus\.beehiiv\.com\/"[^>]*>German Newsletter/,
  );
  assertIncludesAll(html, [
    "APPLIED AI ARCHITECT",
    "From ambiguity to deployed systems",
    "Profile",
    "Selected work",
    "BRIEF ME · PROJEKT ANFRAGEN",
    "Challenge or desired outcome",
  ]);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/);
});

test("uses the same responsive scale for every major service-page headline", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const headlineSelectors = [
    ".service-hero h1",
    ".section-heading h2",
    ".editorial-copy h2",
    ".closing-inner h2",
  ];

  assert.match(
    css,
    /\.service-page\s*\{[^}]*--major-headline-size: clamp\(2\.5rem, 4\.5vw, 5\.3rem\);/s,
  );
  for (const selector of headlineSelectors) {
    const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    assert.match(
      css,
      new RegExp(
        `${escapedSelector}\\s*\\{[^}]*font-size: var\\(--major-headline-size\\);`,
        "s",
      ),
    );
  }
  assert.match(
    css,
    /@media \(max-width: 760px\)[\s\S]*?\.service-page\s*\{[^}]*--major-headline-size: clamp\(2\.65rem, 12vw, 4\.2rem\);/,
  );
  assert.doesNotMatch(
    css,
    /\.capability-card h3\s*\{[^}]*font-size: var\(--major-headline-size\);/s,
  );
  assert.match(
    css,
    /\.landing-heading h1\s*\{[^}]*font-size: clamp\(1\.75rem, 6\.8vw, 8\.2rem\);/s,
  );
  assert.match(
    css,
    /\.authority-hero h1,\s*\.work-hero h1\s*\{[^}]*font-size: clamp\(2\.7rem, 4vw, 3\.9rem\);/s,
  );
});

test("renders paired English and German service pages", async () => {
  const [englishResponse, germanResponse] = await Promise.all([
    render("/solve"),
    render("/loesen"),
  ]);
  assert.equal(englishResponse.status, 200);
  assert.equal(germanResponse.status, 200);

  const [english, german] = await Promise.all([
    englishResponse.text(),
    germanResponse.text(),
  ]);
  assert.match(english, /Give me your challenges where no playbook exists\./);
  assert.match(english, /href="\/loesen"/);
  assert.match(english, />DEUTSCH</);
  assert.match(
    english,
    /You don’t book a presentation\. You get a full-stack problem solver\./,
  );
  assert.match(
    english,
    /Find constraints\. Build systems\. Leave playbooks\./,
  );
  assert.match(
    english,
    /Bring me challenges others cannot fathom, structure nor solve\./,
  );
  assertIncludesAll(english, [
    "RevOps automation",
    "3–5 days to 19 minutes",
    "~150 emails daily",
    "€0.50/day",
    "98% accuracy",
    "full pipeline visibility",
  ]);
  assert.doesNotMatch(english, /Federal budget/);
  assert.match(
    german,
    /Geben Sie mir Herausforderungen, für die es keine Anleitung gibt\./,
  );
  assert.match(german, /href="\/solve"/);
  assert.match(german, />ENGLISH</);
  assert.match(
    german,
    /Sie buchen keine Präsentation\. Sondern einen Full-Stack Problemlöser\./,
  );
  assert.match(
    german,
    /Engpässe finden\. Systeme bauen\. Anleitungen hinterlassen\./,
  );
  assert.match(
    german,
    /Bringen Sie mir Probleme, die andere weder begreifen, strukturieren noch lösen können\./,
  );
  assertIncludesAll(german, [
    "RevOps-Automatisierung",
    "3–5 Tagen auf 19 Minuten",
    "rund 150 E-Mails",
    "€0,50",
    "98 % Genauigkeit",
    "volle Pipeline-Transparenz",
  ]);
  assert.doesNotMatch(german, /Bundeshaushalt/);
  assert.match(english, /YOUTUBE PLAYLIST/);
  assert.match(german, /YOUTUBE PLAYLIST/);
  assert.match(english, /Award-winning/);
  assert.match(german, /Preisgekrönt/);
  assert.match(
    english,
    /class="button button-secondary"[^>]*href="mailto:Elias\.Kouloures@gmail\.com">Email me<\/a>/,
  );
  assert.match(
    german,
    /class="button button-secondary"[^>]*href="mailto:Elias\.Kouloures@gmail\.com">E-Mail senden<\/a>/,
  );
  assert.match(german, /<main class="service-page" lang="de">/);
  assert.equal(germanResponse.headers.get("content-language"), "de");
  assert.equal(englishResponse.headers.get("content-language"), "en");
  assert.match(english, /"@type":"Service"/);
  assert.match(german, /ÖFFENTLICHE EMPFEHLUNGEN/);
  assert.match(english, /PUBLIC RECOMMENDATIONS/);

  // Guard retained from the earlier design: capability, work and engagement
  // cards must never regress to numbered markers. The flagship signal list is
  // a deliberate ordered list, so it is excluded here and asserted below.
  const withoutFlagship = (html) =>
    html.replace(/<section class="flagship-section"[\s\S]*?<\/section>/, "");
  assert.doesNotMatch(withoutFlagship(english), />0[1-9]</);
  assert.doesNotMatch(withoutFlagship(german), />0[1-9]</);
});

test("promotes crisis intervention as the flagship offer in SOLVE and LÖSEN", async () => {
  const [solve, loesen, educate] = await Promise.all([
    render("/solve").then((response) => response.text()),
    render("/loesen").then((response) => response.text()),
    render("/educate").then((response) => response.text()),
  ]);

  assert.match(solve, /FLAGSHIP MANDATE · CRISIS INTERVENTION/);
  assert.match(solve, /When it is already burning\./);
  assert.match(loesen, /KERNMANDAT · KRISENINTERVENTION/);
  assert.match(loesen, /Wenn es bereits brennt\./);

  // Three numbered signals in each language.
  for (const html of [solve, loesen]) {
    for (const index of ["01", "02", "03"]) {
      assert.match(html, new RegExp(`>${index}<`));
    }
  }

  // The flagship band belongs to pillar one only.
  assert.doesNotMatch(educate, /flagship-section/);

  // The "Brief me" round trip was removed from service pages.
  for (const html of [solve, loesen, educate]) {
    assert.doesNotMatch(html, /href="\/#brief"/);
  }
});

test("renders the revised educate and create headlines in both languages", async () => {
  const responses = await Promise.all([
    render("/educate"),
    render("/fortbilden"),
    render("/create"),
    render("/entwickeln"),
  ]);

  for (const response of responses) {
    assert.equal(response.status, 200);
  }

  const [educate, fortbilden, create, entwickeln] = await Promise.all(
    responses.map((response) => response.text()),
  );

  assertIncludesAll(educate, [
    "Turn AI confusion into a working advantage.",
    "Eliminate your drudgery. And leverage your knowledge.",
    "Understand at any level. And practice on relevant use-cases.",
  ]);
  assertIncludesAll(fortbilden, [
    "Verwandeln Sie KI-Verwirrung zum Wettbewerbsvorteil. Mit maßgeschneiderten Fortbildungen.",
    "Befreien Sie sich von unnötiger Arbeit. Und profitieren Sie von Ihrem Erfahrungsschatz.",
    "KI besser verstehen – für jeden Wissensstand. Und üben mit relevanten Anwendungsfällen.",
    "Maßgeschneiderte Fortbildungen. Von C-Suite bis Praktikant. Von Profi bis Beginner.",
  ]);
  assertIncludesAll(create, [
    "Book me as multimedia creator. Or learn how to become one yourself.",
    "Turn your ideas into images, films or songs that attract fans and customers.",
    "Invest in world-class creative assets because AI slop exists in abundance.",
    "Name your idea. And desired audience.",
  ]);
  assertIncludesAll(entwickeln, [
    "Buchen Sie mich als Multimedia-Künstler. Oder lernen Sie, selber einer zu werden.",
    "Verwandeln Sie Ihre Ideen in Bilder, Filme oder Lieder, die Fans und Kunden anziehen.",
    "Investieren Sie in Weltklasse-Kreativität, weil KI-Müll kann jeder.",
    "Nennen Sie Ihre Idee. Und Wunschzielgruppe.",
  ]);
});

test("assigns the supplied playlists to all six service pages", async () => {
  const assignments = [
    ["/solve", "PLJMSxPvhcOuA"],
    ["/loesen", "PLJMSxPvhcOuA"],
    ["/educate", "PLHtF5eYRujpY"],
    ["/fortbilden", "PLHtF5eYRujpY"],
    ["/create", "PLIlY05RIg36c"],
    ["/entwickeln", "PLIlY05RIg36c"],
  ];
  const renderedPages = await Promise.all(
    assignments.map(([pathname]) => render(pathname)),
  );

  for (const [index, response] of renderedPages.entries()) {
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(assignments[index][1]));
  }

  const response = await request(
    "/api/youtube?playlist=PLJMSxPvhcOuA",
    "application/json",
  );
  assert.equal(response.status, 200);

  const data = await response.json();
  assert.equal(data.channelId, "UCNnTHykYkGaNaJPIe2WWtVA");
  assert.equal(data.configured, false);
  assert.match(data.playlistUrl, /PLJMSxPvhcOuA/);
});

test("renders current legal identity data", async () => {
  const response = await render("/impressum-datenschutz");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Luisenstr\. 48/);
  assert.match(html, /DE 293435334/);
  assert.match(html, /§ 5 DDG/);
  assert.match(html, /youtube-nocookie\.com/);
  assert.match(html, /20\. Juli 2025/);
});

test("renders bilingual profile pages with positioning, evidence, and role fit", async () => {
  const [englishResponse, germanResponse] = await Promise.all([
    render("/profile"),
    render("/profil"),
  ]);

  assert.equal(englishResponse.status, 200);
  assert.equal(germanResponse.status, 200);

  const [english, german] = await Promise.all([
    englishResponse.text(),
    germanResponse.text(),
  ]);

  assertIncludesAll(english, [
    "Applied AI Architect &amp; Executive Advisor.",
    "deployed systems, adopted capabilities and clear market communication",
    "Freelance first. Open to exceptional missions.",
    "Technical Deployment Lead",
    "PUBLIC RECOMMENDATIONS",
    "COBI · BOSCH",
  ]);
  assertIncludesAll(german, [
    "Berater und Architekt für angewandte KI-Transformation.",
    "Freelance zuerst. Offen für außergewöhnliche Missionen.",
    "ÖFFENTLICHE EMPFEHLUNGEN",
    "lang=\"de\"",
  ]);
  assert.match(english, /"@type":"ProfilePage"/);
  assert.match(english, /href="\/profil"/);
  assert.match(german, /href="\/profile"/);
  assert.equal(germanResponse.headers.get("content-language"), "de");
});

test("renders Why-How-What as native text, not baked image content", async () => {
  const [english, german, profileMd] = await Promise.all([
    render("/profile").then((r) => r.text()),
    render("/profil").then((r) => r.text()),
    request("/profile.md", "text/markdown").then((r) => r.text()),
  ]);

  // The three tiers exist as real markup.
  assert.match(english, /class="whw-section"/);
  assert.match(english, /Elevate humanity to an interplanetary civilisation\./);
  assert.match(german, /Die Menschheit zu einer interplanetaren Zivilisation zu erheben\.|Die Menschheit zu einer interplanetaren Zivilisation erheben\./);

  // Proof points are selectable text in both languages, not pixels.
  assertIncludesAll(english, [
    "Rescued Berlin hospitality venue",
    "IP failsafes",
    "groundtruth dataset",
    "Comparative Research Network",
    "C-Suite Coach",
    "Secure AI for Schools",
  ]);
  assertIncludesAll(german, [
    "Berliner Gastronomiebetrieb gerettet",
    "IP-Absicherung",
    "Comparative Research Network",
  ]);

  // And they reach machine-readable endpoints for search and AI retrieval.
  assertIncludesAll(profileMd, [
    "Rescued Berlin hospitality venue",
    "Comparative Research Network",
  ]);

  // The old baked-image version must not come back.
  assert.doesNotMatch(english, /Elias_WHW-Kardashev_07-2026_V1/);
  assert.doesNotMatch(german, /Elias_WHW-Kardashev_07-2026_V1/);
});

test("renders twelve detailed bilingual case studies without sensitive cases", async () => {
  const [englishResponse, germanResponse] = await Promise.all([
    render("/work"),
    render("/projekte"),
  ]);
  assert.equal(englishResponse.status, 200);
  assert.equal(germanResponse.status, 200);

  const [english, german] = await Promise.all([
    englishResponse.text(),
    germanResponse.text(),
  ]);

  assertIncludesAll(english, [
    "COBI",
    "Samsung",
    "E.ON",
    "Galapagos",
    "Commerzbank · 360X",
    "Waldorf Future Lab",
    "High-End Hazumfefer",
    "Berlin hospitality venue",
    "EU TRANSFORM",
    "ASU &amp; Max Planck",
    "Laisterdam Rijksmonument",
    "Beat Em Hub · Games Ground",
    "5 days → 19 minutes max",
    "€9M VC round within 6 months",
    "35 jobs protected",
  ]);
  assertIncludesAll(german, [
    "Komplexe Probleme. Nutzbare Ergebnisse.",
    "5 Tage → max. 19 Minuten",
    "9 Mio. € VC-Runde in 6 Monaten",
    "35 Arbeitsplätze gesichert",
  ]);
  assert.doesNotMatch(english, /Clinical Diagnostics|Talyo Property/);
  assert.doesNotMatch(german, /Klinische Diagnostik|Talyo/);
  // The rescued venue must never be identifiable by its original name.
  assert.doesNotMatch(english, /Insomnia/i);
  assert.doesNotMatch(german, /Insomnia/i);
  // Modelled projections must stay labelled as projections.
  assert.match(english, /Modelled: −60% draft complaints/);
  assert.match(german, /Modelliert: −60 % Zugluftbeschwerden/);
  assert.match(english, /"@type":"CollectionPage"/);
});

test("serves machine-readable markdown, llms, sitemap, and staging robots", async () => {
  const [profile, work, llms, sitemap, robots] = await Promise.all([
    request("/profile.md", "text/markdown"),
    request("/work.md", "text/markdown"),
    request("/llms.txt", "text/plain"),
    request("/sitemap.xml", "application/xml"),
    request("/robots.txt", "text/plain"),
  ]);

  for (const response of [profile, work, llms, sitemap, robots]) {
    assert.equal(response.status, 200);
  }

  assert.match(profile.headers.get("content-type") ?? "", /^text\/markdown/);
  assert.match(await profile.text(), /Applied AI Architect & Executive Advisor/);
  assert.match(await work.text(), /## Galapagos:/);
  assert.match(await llms.text(), /Do not infer guarantees from past results/);

  const sitemapText = await sitemap.text();
  assert.match(sitemapText, /<loc>https:\/\/eliaskouloures\.com\/profile<\/loc>/);
  assert.match(sitemapText, /hreflang="x-default"/);

  const robotsText = await robots.text();
  assert.match(robotsText, /User-agent: \*/);
  assert.match(robotsText, /Disallow: \//);
});

test("applies redirects and security headers", async () => {
  const redirect = await render("/cv");
  assert.equal(redirect.status, 308);
  assert.equal(
    redirect.headers.get("location"),
    "http://localhost/profile",
  );

  const response = await render("/profile");
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(
    response.headers.get("referrer-policy"),
    "strict-origin-when-cross-origin",
  );
  assert.match(response.headers.get("permissions-policy") ?? "", /camera=\(\)/);
});

test("preserves both unlisted Anthropic reports on their original www paths", async () => {
  const [workerSource, proxySource, briefRoute, fieldTestRoute] =
    await Promise.all([
      readFile(new URL("../worker/index.ts", import.meta.url), "utf8"),
      readFile(
        new URL("../app/preserved-anthropic-report.ts", import.meta.url),
        "utf8",
      ),
      readFile(
        new URL("../app/anthropic-dach-brief/route.ts", import.meta.url),
        "utf8",
      ),
      readFile(
        new URL("../app/anthropic-dach/route.ts", import.meta.url),
        "utf8",
      ),
    ]);

  assert.match(workerSource, /preservedWixPaths/);
  assert.match(workerSource, /"\/anthropic-dach"/);
  assert.match(workerSource, /"\/anthropic-dach-brief"/);
  assert.match(proxySource, /3be268_51e7b42a1fa5217a4f72a5aebb8134e0/);
  assert.match(proxySource, /3be268_8dc4dcc67aeda4ec772bf62a66179d07/);
  assert.match(briefRoute, /preservedAnthropicReport\("brief"\)/);
  assert.match(fieldTestRoute, /preservedAnthropicReport\("fieldTest"\)/);
});

test("uses optimized desktop and mobile visual assets", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );
  const data = await readFile(
    new URL("../app/site-data.ts", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(css, /Background_Image_[^")]+\.png/);
  assert.doesNotMatch(data, /Background_Image_[^"]+\.png/);
  assert.match(css, /Background_Image_[^")]+_mobile\.jpg/);
  assert.match(data, /Background_Image_[^"]+\.jpg/);

  const desktop = await stat(
    new URL(
      "../public/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center.jpg",
      import.meta.url,
    ),
  );
  const mobile = await stat(
    new URL(
      "../public/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center_mobile.jpg",
      import.meta.url,
    ),
  );
  assert.ok(desktop.size < 700_000);
  assert.ok(mobile.size < 220_000);

  const socialPreview = await stat(
    new URL("../public/og.jpg", import.meta.url),
  );
  assert.ok(socialPreview.size < 400_000);
  assert.match(
    await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    /url: "\/og\.jpg"/,
  );
});
