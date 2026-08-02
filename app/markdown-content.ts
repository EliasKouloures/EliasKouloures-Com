import { caseStudies, whyHowWhat } from "./authority-data";
import { services, type Language } from "./site-data";

export const canonicalOrigin = "https://eliaskouloures.com";

export function serviceMarkdown(slug: keyof typeof services) {
  const data = services[slug];
  const isGerman = data.language === "de";
  const sections = [
    `# ${data.label} — ${data.title}`,
    data.intro,
    `Canonical: ${canonicalOrigin}/${data.slug}`,
    `Language: ${data.language}`,
    "",
    `## ${data.capabilityHeading}`,
    data.capabilityIntro,
    ...data.capabilities.flatMap((item) => [
      `### ${item.title}`,
      item.text,
    ]),
    "",
    `## ${data.workHeading}`,
    data.workIntro,
    ...data.work.flatMap((item) => [`### ${item.title}`, item.text]),
    "",
    `## ${data.engagementHeading}`,
    ...data.engagements.flatMap((item) => [
      `### ${item.title} — ${item.timing}`,
      item.text,
    ]),
    "",
    `## ${isGerman ? "Kontakt" : "Contact"}`,
    isGerman
      ? "Gespräch buchen: https://calendar.app.google/ANb76KDuvg4J7LS28"
      : "Book a call: https://calendar.app.google/ANb76KDuvg4J7LS28",
    "Email: Elias.Kouloures@gmail.com",
  ];

  return sections.join("\n\n");
}

export function profileMarkdown(language: Language) {
  const isGerman = language === "de";
  return [
    `# ${
      isGerman
        ? "Elias Kouloures — Berater und Architekt für angewandte KI-Transformation"
        : "Elias Kouloures — Applied AI Architect & Executive Advisor"
    }`,
    isGerman
      ? "Ich verwandle komplexe, risikoreiche KI- und Business-Herausforderungen in funktionierende Systeme, gelebte Kompetenz und klare Marktkommunikation."
      : "I turn ambiguous, high-stakes AI and business challenges into deployed systems, adopted capabilities and clear market communication.",
    `Canonical: ${canonicalOrigin}/${isGerman ? "profil" : "profile"}`,
    "",
    "## WHY",
    isGerman
      ? "Fortschritt soll Menschen befähigen statt sie zu überrollen. Technologie wird wertvoll, wenn Menschen mit ihr weiterkommen."
      : "Progress should expand human agency rather than overwhelm it. Technology becomes valuable when people can move forward with it.",
    "",
    "## HOW",
    isGerman
      ? "Erstprinzipien, Systemdenken und globale Erfahrung verbinden sich mit KI, IT, Business, Strategie, Kommunikation und Kreativität."
      : "First-principles and systems thinking combine with global experience across AI, IT, business, strategy, communication and creativity.",
    "",
    "## WHAT",
    "SOLVE / EDUCATE / CREATE",
    "",
    // The three pillars with their evidence, so search and AI retrieval can
    // read the proof that used to be locked inside a keynote image.
    ...whyHowWhat.pillars.flatMap((pillar) => [
      `### ${pillar.index}. ${pillar.label[language]}`,
      pillar.statement[language],
      "",
      ...pillar.proof.map(
        (item) => `- **${item.title[language]}** — ${item.detail[language]}`,
      ),
      "",
    ]),
    `## ${isGerman ? "Eckdaten" : "Selected facts"}`,
    "- 350+ engagements and projects",
    "- 150+ European brands",
    "- 200+ keynotes and workshops",
    "- 24 international awards",
    "- Berlin-based; native German and English",
    "",
    `## ${isGerman ? "Zusammenarbeit" : "Ways to work together"}`,
    isGerman
      ? "Freelance zuerst. Verfügbar für hochwertige Projekte, Fractional- und Interim-Rollen, Keynotes und Workshops. Offen für eine außergewöhnliche Festanstellung bei einem KI-Labor oder Unternehmen, das angewandte KI wirklich ernst nimmt."
      : "Freelance first. Available for high-value projects, fractional and interim leadership, keynotes and workshops. Open to an exceptional permanent role at an AI lab or company that takes applied AI seriously.",
    "",
    "Book a call: https://calendar.app.google/ANb76KDuvg4J7LS28",
    "Email: Elias.Kouloures@gmail.com",
  ].join("\n\n");
}

export function workMarkdown(language: Language) {
  const isGerman = language === "de";
  const intro = [
    `# ${
      isGerman
        ? "Ausgewählte Projekte — Elias Kouloures"
        : "Selected Work — Elias Kouloures"
    }`,
    isGerman
      ? "Ich löse Herausforderungen mit Systemdenken, Kreativität und KI."
      : "I solve challenges with systems thinking, creativity & AI.",
    `Canonical: ${canonicalOrigin}/${isGerman ? "projekte" : "work"}`,
  ];

  const items = caseStudies.flatMap((item) => [
    `## ${item.client}: ${item.title[language]}`,
    `Domain: ${item.domain[language]}`,
    `Pillars: ${item.pillars.join(" / ")}`,
    `### ${isGerman ? "Engpass" : "Bottleneck"}`,
    item.bottleneck[language],
    `### ${isGerman ? "Umsetzung" : "Execution"}`,
    item.execution[language],
    `### ${isGerman ? "Ergebnis" : "Result"}`,
    item.result[language],
    `Metrics: ${item.metrics[language].join(" · ")}`,
  ]);

  return [...intro, ...items].join("\n\n");
}

export function markdownResponse(body: string) {
  return new Response(`${body}\n`, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
