/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const preservedWixPaths = new Set([
      "/anthropic-dach",
      "/anthropic-dach-brief",
    ]);
    const redirectMap: Record<string, string> = {
      "/cv": "/profile/",
      "/credentials": "/profile/#credentials",
      "/first-principles": "/solve/",
      "/ai-ad-approval-solution": "/solve/",
      "/ai-for-families": "/educate/",
      "/ai-for-schools": "/educate/",
      "/ai-keynotes": "/educate/",
      "/ai-markdown": "/profile/",
      "/ai-multimedia": "/create/",
      "/ai-upskilling": "/educate/",
      "/creative-360-marketing": "/create/",
      "/gpts": "/educate/",
      "/impressum": "/impressum-datenschutz/",
      "/ki-fuer-familien": "/fortbilden/",
      "/ki-fuer-schulen": "/fortbilden/",
      "/ki-werbemittel-check": "/loesen/",
      "/portfolio": "/work/",
      "/portfolio/espinas-mezcal-ad": "/work/",
      "/portfolio/landscape-magazine": "/work/",
      "/portfolio/may-28th": "/work/",
      "/portfolio/summer-secrets": "/work/",
      "/portfolio/under-the-sun": "/work/",
      "/portfolio/wild-spirit": "/work/",
      "/post/5e-lesson-plan-generator-5e-unterrichtsplan-ersteller-chatgpt-gemini": "/educate/",
      "/post/ai-brainstorming-for-use-cases---für-anwendungsfälle": "/educate/",
      "/post/gpt-prompt-brutal-truth-advisor-brutal-ehrlicher-berater": "/solve/",
      "/post/longevity-research-report-bericht-zum-stand-der-langlebigkeits-forschung": "/solve/",
      "/post/meeting-summary-besprechungsprotokoll": "/educate/",
      "/post/multimedia-focused-competitive-research---multimedia-zentrierte-wettbewerbsanalyse": "/solve/",
      "/post/optimise-old-llm-txt-with-new-data-alte-llm-txt-mit-neuen-infos-verbessern": "/profile/",
      "/post/turn-ai-into-guru-with-1-sentence-prompt-ki-mit-einzeiligem-prompt-in-guru-verwandeln": "/educate/",
      "/post/visual-prompt-hollywood-action": "/create/",
      "/projects": "/work/",
      "/prompt-engineering": "/educate/",
      "/t-turbo-deutsch": "/loesen/",
      "/t-turbo-eng": "/solve/",
    };

    if (
      url.hostname === "www.eliaskouloures.com" &&
      !preservedWixPaths.has(url.pathname)
    ) {
      url.hostname = "eliaskouloures.com";
      return Response.redirect(url, 308);
    }

    if (redirectMap[url.pathname]) {
      return Response.redirect(new URL(redirectMap[url.pathname], url), 308);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const appResponse = await handler.fetch(request, env, ctx);
    const headers = new Headers(appResponse.headers);
    headers.set("x-content-type-options", "nosniff");
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set(
      "permissions-policy",
      "camera=(), microphone=(), geolocation=(), payment=()",
    );
    headers.set("x-frame-options", "SAMEORIGIN");

    const germanRoutes = new Set([
      "/loesen",
      "/fortbilden",
      "/entwickeln",
      "/profil",
      "/projekte",
      "/impressum-datenschutz",
    ]);
    const languagePathname =
      url.pathname.endsWith("/") && url.pathname !== "/"
        ? url.pathname.slice(0, -1)
        : url.pathname;
    const language = germanRoutes.has(languagePathname) ? "de" : "en";
    headers.set("content-language", language);

    let response = new Response(appResponse.body, {
      status: appResponse.status,
      statusText: appResponse.statusText,
      headers,
    });

    if (
      headers.get("content-type")?.startsWith("text/html") &&
      typeof HTMLRewriter !== "undefined"
    ) {
      response = new HTMLRewriter()
        .on("html", {
          element(element) {
            element.setAttribute("lang", language);
          },
        })
        .transform(response);
    }

    return response;
  },
};

export default worker;
