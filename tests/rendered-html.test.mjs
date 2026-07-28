import assert from "node:assert/strict";
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
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/);
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
    /Find the constraint\. Build the system\. Leave the playbook\./,
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
    /Engpass finden\. System bauen\. Anleitung hinterlassen\./,
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
    /class="button" href="mailto:Elias\.Kouloures@gmail\.com">Email me<\/a>/,
  );
  assert.match(
    german,
    /class="button" href="mailto:Elias\.Kouloures@gmail\.com">E-Mail senden<\/a>/,
  );
  assert.doesNotMatch(english, />0[1-9]</);
  assert.doesNotMatch(german, />0[1-9]</);
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

test("connects the supplied YouTube channel to the service playlists", async () => {
  const response = await request(
    "/api/youtube?playlist=PL66aLwkPo2YqtBCXQExJz14zxIAoFu-Tk",
    "application/json",
  );
  assert.equal(response.status, 200);

  const data = await response.json();
  assert.equal(data.channelId, "UCNnTHykYkGaNaJPIe2WWtVA");
  assert.equal(data.configured, false);
  assert.match(data.playlistUrl, /PL66aLwkPo2YqtBCXQExJz14zxIAoFu-Tk/);
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
