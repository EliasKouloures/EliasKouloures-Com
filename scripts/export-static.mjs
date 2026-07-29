import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const outputRoot = join(projectRoot, "pages-dist");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-export", String(Date.now()));
const { default: worker } = await import(workerUrl.href);

const htmlRoutes = [
  "/",
  "/solve",
  "/educate",
  "/create",
  "/loesen",
  "/fortbilden",
  "/entwickeln",
  "/profile",
  "/profil",
  "/work",
  "/projekte",
  "/impressum-datenschutz",
  "/anthropic-dach-brief",
  "/anthropic-dach",
];

const fileRoutes = [
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/solve.md",
  "/educate.md",
  "/create.md",
  "/loesen.md",
  "/fortbilden.md",
  "/entwickeln.md",
  "/profile.md",
  "/profil.md",
  "/work.md",
  "/projekte.md",
];

const redirects = {
  cv: "profile",
  credentials: "profile#credentials",
  "first-principles": "solve",
  "ai-multimedia": "create",
  "creative-360-marketing": "create",
  "ai-upskilling": "educate",
  "prompt-engineering": "educate",
  "ki-fuer-familien": "fortbilden",
  "ai-for-families": "educate",
  "ki-fuer-schulen": "fortbilden",
  gpts: "educate",
  impressum: "impressum-datenschutz",
};

async function render(pathname) {
  const response = await worker.fetch(
    new Request(`https://eliaskouloures.com${pathname}`, {
      headers: { accept: pathname.endsWith(".md") ? "text/markdown" : "*/*" },
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

  if (!response.ok) {
    throw new Error(`${pathname} returned ${response.status}`);
  }

  return new Uint8Array(await response.arrayBuffer());
}

async function output(pathname, bytes) {
  const target = join(outputRoot, pathname);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, bytes);
}

await rm(outputRoot, { recursive: true, force: true });
await cp(join(projectRoot, "dist/client"), outputRoot, { recursive: true });
await writeFile(join(outputRoot, ".nojekyll"), "");
await writeFile(join(outputRoot, "CNAME"), "eliaskouloures.com\n");

for (const pathname of htmlRoutes) {
  const target =
    pathname === "/" ? "index.html" : `${pathname.slice(1)}/index.html`;
  await output(target, await render(pathname));
}

for (const pathname of fileRoutes) {
  await output(pathname.slice(1), await render(pathname));
}

for (const [source, destination] of Object.entries(redirects)) {
  const destinationUrl = `https://eliaskouloures.com/${destination}`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${destinationUrl}">
<link rel="canonical" href="${destinationUrl}">
<title>Redirecting · Elias Kouloures</title>
</head>
<body>
<p><a href="${destinationUrl}">Continue to eliaskouloures.com</a></p>
<script>location.replace(${JSON.stringify(`/${destination}`)} + location.search + location.hash)</script>
</body>
</html>
`;
  await output(`${source}/index.html`, html);
}

const notFound = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Page not found · Elias Kouloures</title>
</head>
<body style="margin:0;background:#05060b;color:#f8f7f4;font:18px/1.5 system-ui,sans-serif;display:grid;min-height:100vh;place-items:center">
<main><h1>Page not found.</h1><p><a style="color:#61e7d2" href="/">Return to the overview →</a></p></main>
</body>
</html>
`;
await output("404.html", notFound);

console.log(
  `Exported ${htmlRoutes.length} pages, ${fileRoutes.length} machine-readable files and ${Object.keys(redirects).length} redirects.`,
);
