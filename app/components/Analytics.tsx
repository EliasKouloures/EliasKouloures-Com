"use client";

import { useEffect } from "react";

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const src =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ||
    "https://plausible.io/js/script.js";

  useEffect(() => {
    if (!domain) return;

    window.plausible =
      window.plausible ||
      ((...args: unknown[]) => {
        (
          window.plausible as unknown as { q: unknown[][] }
        ).q = (window.plausible as unknown as { q?: unknown[][] }).q || [];
        (window.plausible as unknown as { q: unknown[][] }).q.push(args);
      });

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-event]");
      if (!tracked) return;

      window.plausible?.(tracked.dataset.event || "link_click", {
        props: {
          label:
            tracked.dataset.eventLabel ||
            tracked.textContent?.trim().slice(0, 100) ||
            "Unlabelled",
        },
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [domain]);

  if (!domain) return null;

  return (
    <script
      async
      data-domain={domain}
      defer
      src={src}
    />
  );
}
