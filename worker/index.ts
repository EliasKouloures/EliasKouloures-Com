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
    const redirectMap: Record<string, string> = {
      "/cv": "/profile",
      "/credentials": "/profile#credentials",
      "/first-principles": "/solve",
      "/ai-multimedia": "/create",
      "/creative-360-marketing": "/create",
      "/ai-upskilling": "/educate",
      "/prompt-engineering": "/educate",
      "/ki-fuer-familien": "/fortbilden",
      "/ai-for-families": "/educate",
      "/ki-fuer-schulen": "/fortbilden",
      "/gpts": "/educate",
      "/impressum": "/impressum-datenschutz",
    };

    if (url.hostname === "www.eliaskouloures.com") {
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
    const language = germanRoutes.has(url.pathname) ? "de" : "en";
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
