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
  assert.match(english, /When the problem has no playbook/);
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
  assert.match(german, /Wenn es keine Anleitung gibt/);
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
  assert.match(english, /YOUTUBE PLAYLIST/);
  assert.match(german, /YOUTUBE PLAYLIST/);
  assert.doesNotMatch(english, />0[1-9]</);
  assert.doesNotMatch(german, />0[1-9]</);
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
