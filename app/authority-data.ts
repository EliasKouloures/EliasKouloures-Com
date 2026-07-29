import type { Language } from "./site-data";

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  quote: Record<Language, string>;
};

export type CaseStudy = {
  id: string;
  client: string;
  domain: Record<Language, string>;
  title: Record<Language, string>;
  bottleneck: Record<Language, string>;
  execution: Record<Language, string>;
  result: Record<Language, string>;
  metrics: Record<Language, string[]>;
  pillars: Array<"SOLVE" | "EDUCATE" | "CREATE">;
};

export const testimonials: Testimonial[] = [
  {
    id: "crn",
    author: "Martin Barthel & Ewelina Barthel",
    role: "Comparative Research Network e.V.",
    quote: {
      en: "Elias is one of the most multifaceted and visionary thinkers we have engaged with in our European consortia. He combines leadership ethics and technical rigor into actionable strategies.",
      de: "Elias zählt zu den vielseitigsten und visionärsten Denkern, mit denen wir in unseren europäischen Konsortien zusammengearbeitet haben. Er verbindet Führungsethik und technische Präzision zu umsetzbaren Strategien.",
    },
  },
  {
    id: "bastian-beggel",
    author: "Prof. Bastian Beggel",
    role: "Hochschule Kaiserslautern",
    quote: {
      en: "Elias combines technical knowledge with excellent communication skills. His ability to simplify complex concepts into clear, engaging narratives makes him valuable to any organization venturing into AI.",
      de: "Elias verbindet technisches Wissen mit hervorragenden Kommunikationsfähigkeiten. Seine Fähigkeit, komplexe Konzepte in klare, fesselnde Erzählungen zu übersetzen, macht ihn für jede Organisation wertvoll, die sich mit KI beschäftigt.",
    },
  },
  {
    id: "jessica-georgi-hey",
    author: "Jessica Georgi-Hey",
    role: "the white elephant",
    quote: {
      en: "Elias’s deep understanding of both marketing and AI technology made this one of the most valuable professional development sessions I’ve attended. His hands-on approach provided immediate actionable value.",
      de: "Elias’ tiefes Verständnis für Marketing und KI-Technologie machte dies zu einer der wertvollsten beruflichen Weiterbildungen, an denen ich teilgenommen habe. Sein praxisnaher Ansatz lieferte sofort umsetzbaren Mehrwert.",
    },
  },
  {
    id: "kerstin-putschke",
    author: "Kerstin Putschke",
    role: "Chefredakteurin Corporate Publishing · DATEV eG",
    quote: {
      en: "Elias’s clear, practical approach makes even complex topics tangible. His knowledge of the latest AI technologies deeply impressed me.",
      de: "Mit seiner verständlichen und praxisorientierten Art macht Elias selbst komplexe Themen greifbar. Sein Wissen über die neuesten KI-Technologien hat mich schwer beeindruckt.",
    },
  },
  {
    id: "sinah-titzmann",
    author: "Sinah Titzmann",
    role: "Strategie- und Transformationskommunikation",
    quote: {
      en: "Elias met the audience at the right level, motivated them to take action, and sparked a stimulating discussion. We received consistently positive feedback and would gladly invite him back.",
      de: "Elias hat das Publikum zielgruppengerecht abgeholt, zur Umsetzung motiviert und eine anregende Diskussion entfacht. Wir erhielten durchweg positives Feedback und würden ihn gerne erneut einladen.",
    },
  },
  {
    id: "heiner-wankel",
    author: "Heiner Wankel",
    role: "Sales Enablement & CRM Expert",
    quote: {
      en: "Elias played a pivotal role in the successful launch of our software. His diligence, hands-on mindset and exceptional dedication set him apart.",
      de: "Elias spielte eine zentrale Rolle bei der erfolgreichen Einführung unserer Software. Seine Sorgfalt, Hands-on-Mentalität und sein außergewöhnliches Engagement zeichnen ihn aus.",
    },
  },
  {
    id: "jack-mamais",
    author: "Jack Mamais",
    role: "Professor of Game Design",
    quote: {
      en: "Elias’s creative vision and prompt-engineering mastery accelerated our marketing and PR timeline exponentially. I cannot recommend him highly enough.",
      de: "Elias’ kreative Vision und seine Meisterschaft im Prompt Engineering beschleunigten unseren Marketing- und PR-Zeitplan exponentiell. Ich kann ihn nicht nachdrücklich genug empfehlen.",
    },
  },
  {
    id: "tom-acland",
    author: "Tom Acland",
    role: "CEO · Dassault Systèmes 3DEXCITE",
    quote: {
      en: "Elias is an extremely creative craftsman and excellently focused contributor. His support helped create our successful Kickstarter campaign.",
      de: "Elias ist ein äußerst kreativer Könner und hervorragend fokussierter Mitwirkender. Seine Unterstützung half uns, eine erfolgreiche Kickstarter-Kampagne zu entwickeln.",
    },
  },
  {
    id: "florian-meimberg",
    author: "Florian Meimberg",
    role: "Director",
    quote: {
      en: "Strong. Focused. Open. Surprising. That’s exactly how a good creative should be.",
      de: "Stark. Fokussiert. Offen. Überraschend. Genau so sollte ein guter Kreativer sein.",
    },
  },
];

export const testimonialIdsByService: Record<string, string[]> = {
  solve: ["crn", "bastian-beggel", "heiner-wankel"],
  loesen: ["crn", "bastian-beggel", "heiner-wankel"],
  educate: ["jessica-georgi-hey", "kerstin-putschke", "sinah-titzmann"],
  fortbilden: ["jessica-georgi-hey", "kerstin-putschke", "sinah-titzmann"],
  create: ["jack-mamais", "tom-acland", "florian-meimberg"],
  entwickeln: ["jack-mamais", "tom-acland", "florian-meimberg"],
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cobi",
    client: "COBI",
    domain: {
      en: "Category creation · Global go-to-market",
      de: "Kategorieentwicklung · Globaler Go-to-Market",
    },
    title: {
      en: "Turn a complex product into a category people understand.",
      de: "Ein komplexes Produkt in eine verständliche Kategorie verwandeln.",
    },
    bottleneck: {
      en: "A hardware startup had three weeks to launch. Traditional agencies had failed to communicate the product’s complexity.",
      de: "Ein Hardware-Startup hatte drei Wochen bis zum Launch. Klassische Agenturen waren daran gescheitert, die Komplexität des Produkts zu vermitteln.",
    },
    execution: {
      en: "I led positioning, direct-response copy, the Kickstarter journey and global PR—connecting product truth to one clear mobility story.",
      de: "Ich verantwortete Positionierung, Direct-Response-Copy, die Kickstarter-Journey und globale PR und verdichtete die Produktwahrheit zu einer klaren Mobilitätsgeschichte.",
    },
    result: {
      en: "The campaign validated product-market fit, built worldwide attention and helped establish the path toward investment and acquisition.",
      de: "Die Kampagne validierte den Product-Market-Fit, erzeugte weltweite Aufmerksamkeit und bereitete den Weg zu Investment und Übernahme.",
    },
    metrics: {
      en: ["401% Kickstarter goal", "250+ press features", "€9M VC round within 6 months"],
      de: ["401 % des Kickstarter-Ziels", "250+ Presseberichte", "9 Mio. € VC-Runde in 6 Monaten"],
    },
    pillars: ["SOLVE", "CREATE"],
  },
  {
    id: "samsung",
    client: "Samsung",
    domain: {
      en: "AI knowledge architecture · Retail enablement",
      de: "KI-Wissensarchitektur · Retail Enablement",
    },
    title: {
      en: "Make product knowledge available across 7,200 stores.",
      de: "Produktwissen in 7.200 Stores verfügbar machen.",
    },
    bottleneck: {
      en: "Sales teams needed immediate product training across German retail. In-person delivery could not scale.",
      de: "Verkaufsteams im deutschen Handel brauchten sofortige Produktschulungen. Präsenztraining war nicht skalierbar.",
    },
    execution: {
      en: "I designed the product, AI architecture and data layer: an LLM-optimised corpus, stable RAG pipeline and multimodal assistant with feedback loops.",
      de: "Ich konzipierte Produkt, KI-Architektur und Datenebene: LLM-optimierten Korpus, stabile RAG-Pipeline und multimodalen Assistenten mit Feedbackschleifen.",
    },
    result: {
      en: "A working prototype and C-level rollout strategy made the system tangible enough for an immediate decision.",
      de: "Ein funktionierender Prototyp und eine C-Level-Rollout-Strategie machten das System unmittelbar entscheidungsreif.",
    },
    metrics: {
      en: ["7,200 German stores", "8-day prototype", "16-week rollout greenlit"],
      de: ["7.200 deutsche Stores", "Prototyp in 8 Tagen", "16-Wochen-Rollout freigegeben"],
    },
    pillars: ["SOLVE", "EDUCATE"],
  },
  {
    id: "eon",
    client: "E.ON",
    domain: {
      en: "Executive strategy · Venture design",
      de: "Executive Strategy · Venture Design",
    },
    title: {
      en: "Move a stalled executive opportunity into a working decision.",
      de: "Eine festgefahrene C-Suite-Chance in eine belastbare Entscheidung überführen.",
    },
    bottleneck: {
      en: "An APAC C-suite pitch had stalled for five months while a major infrastructure constraint demanded a new operating model.",
      de: "Ein APAC-C-Suite-Pitch stagnierte seit fünf Monaten, während ein großer Infrastrukturengpass ein neues Betriebsmodell erforderte.",
    },
    execution: {
      en: "I used a dedicated AI stack to produce the board strategy, then designed TerraTrust: a data-led concept for subsurface risk and contractor payments.",
      de: "Mit einem dedizierten KI-Stack entwickelte ich die Board-Strategie und anschließend TerraTrust: ein datenbasiertes Konzept für Untergrundrisiken und Auftragnehmerzahlungen.",
    },
    result: {
      en: "The strategy unlocked a paid engagement and an intensive working session with selected executives.",
      de: "Die Strategie führte direkt zu einem bezahlten Mandat und einer intensiven Arbeitssession mit ausgewählten Führungskräften.",
    },
    metrics: {
      en: ["Board strategy in 4 hours", "€50k engagement", "3-day workshop · 14 executives"],
      de: ["Board-Strategie in 4 Stunden", "50.000-€-Mandat", "3-Tage-Workshop · 14 Führungskräfte"],
    },
    pillars: ["SOLVE", "EDUCATE"],
  },
  {
    id: "galapagos",
    client: "Galapagos",
    domain: {
      en: "AI revenue operations · CRM automation",
      de: "KI-Revenue-Operations · CRM-Automatisierung",
    },
    title: {
      en: "Turn an invisible B2B inbox into a visible revenue system.",
      de: "Aus einem unsichtbaren B2B-Postfach ein transparentes Revenue-System bauen.",
    },
    bottleneck: {
      en: "High-value enquiries waited up to five days. There was no CRM infrastructure and no pipeline visibility for the CEO.",
      de: "Hochwertige Anfragen warteten bis zu fünf Tage. CRM-Infrastruktur und Pipeline-Transparenz für den CEO fehlten.",
    },
    execution: {
      en: "I built an automated intake and routing pipeline connecting n8n, Claude and Pipedrive, then supported team adoption with visual onboarding.",
      de: "Ich baute eine automatisierte Intake- und Routing-Pipeline mit n8n, Claude und Pipedrive und sicherte die Team-Adoption durch visuelles Onboarding.",
    },
    result: {
      en: "The operating bottleneck became an inspectable, low-cost system that responds, triages and routes at decision speed.",
      de: "Der operative Engpass wurde zu einem überprüfbaren, kostengünstigen System, das in Entscheidungsgeschwindigkeit antwortet, sortiert und routet.",
    },
    metrics: {
      en: ["5 days → 19 minutes max", "~150 emails per day", "€0.50 daily run cost"],
      de: ["5 Tage → max. 19 Minuten", "Rund 150 E-Mails täglich", "0,50 € tägliche Betriebskosten"],
    },
    pillars: ["SOLVE"],
  },
  {
    id: "360x",
    client: "Commerzbank · 360X",
    domain: {
      en: "Regulated fintech · UX and communication",
      de: "Regulierte Fintech · UX und Kommunikation",
    },
    title: {
      en: "Translate tokenisation into a platform investors can use.",
      de: "Tokenisierung in eine Plattform übersetzen, die Investoren nutzen können.",
    },
    bottleneck: {
      en: "Blockchain tokenisation of art and real estate needed to become clear, credible and commercially usable for investors.",
      de: "Die Blockchain-Tokenisierung von Kunst und Immobilien musste für Investoren klar, glaubwürdig und kommerziell nutzbar werden.",
    },
    execution: {
      en: "I rebuilt UX, information architecture and positioning, aligning high-conversion language with the requirements of regulated stakeholders.",
      de: "Ich überarbeitete UX, Informationsarchitektur und Positionierung und verband conversionstarke Sprache mit den Anforderungen regulierter Stakeholder.",
    },
    result: {
      en: "The platform launched quickly, reached its pre-launch audience and reduced the support burden through clearer UX.",
      de: "Die Plattform startete schnell, erreichte ihre Pre-Launch-Zielgruppe und reduzierte durch klarere UX den Supportaufwand.",
    },
    metrics: {
      en: ["10-day sprint", "5–10 UHNWI target reached", "50% fewer support requests"],
      de: ["10-Tage-Sprint", "Ziel von 5–10 UHNWI erreicht", "50 % weniger Supportanfragen"],
    },
    pillars: ["SOLVE", "CREATE"],
  },
  {
    id: "waldorf-future-lab",
    client: "Waldorf Future Lab",
    domain: {
      en: "AI adoption · Education",
      de: "KI-Adoption · Bildung",
    },
    title: {
      en: "Make AI useful without abandoning human values.",
      de: "KI nutzbar machen, ohne menschliche Werte aufzugeben.",
    },
    bottleneck: {
      en: "Teachers faced administrative overload while students lacked future skills. The debate was trapped between rejection and hype.",
      de: "Lehrkräfte litten unter Verwaltungsaufwand, während Schülern Zukunftskompetenzen fehlten. Die Debatte steckte zwischen Ablehnung und Hype fest.",
    },
    execution: {
      en: "I created four audience-specific formats, practical AI agents, privacy-aware frameworks and more than 100 pages of first-principles learning material.",
      de: "Ich entwickelte vier zielgruppenspezifische Formate, praktische KI-Agenten, datenschutzbewusste Frameworks und mehr als 100 Seiten Lernmaterial nach Erstprinzipien.",
    },
    result: {
      en: "Participants left with concrete tools and a value-aligned model for building independent AI judgment.",
      de: "Die Teilnehmenden gingen mit konkreten Werkzeugen und einem wertekompatiblen Modell für unabhängige KI-Urteilskraft.",
    },
    metrics: {
      en: ["800-person symposium", "100+ people upskilled", "4 applied formats"],
      de: ["Symposium mit 800 Menschen", "100+ Menschen fortgebildet", "4 Praxisformate"],
    },
    pillars: ["EDUCATE"],
  },
  {
    id: "hazumfefer",
    client: "High-End Hazumfefer",
    domain: {
      en: "Deep-tech communication · Sales enablement",
      de: "Deep-Tech-Kommunikation · Sales Enablement",
    },
    title: {
      en: "Sell the outcome—not an unreadable technology specification.",
      de: "Das Ergebnis verkaufen – nicht eine unlesbare Technologiespezifikation.",
    },
    bottleneck: {
      en: "Complex projection hardware was presented as raw specifications, so buyers could not understand the value of the complete service.",
      de: "Komplexe Projektionstechnik wurde als Rohdaten präsentiert. Käufer verstanden den Wert der vollständigen Dienstleistung nicht.",
    },
    execution: {
      en: "I transformed the technical material into audience-specific decks, one-pagers and a cinematic AI film built around the immersive outcome.",
      de: "Ich verwandelte das technische Material in zielgruppenspezifische Decks, One-Pager und einen filmischen KI-Clip rund um das immersive Ergebnis.",
    },
    result: {
      en: "The offer became a coherent C-level value proposition and a reusable sales system rather than a hardware-rental pitch.",
      de: "Das Angebot wurde zu einem schlüssigen C-Level-Wertversprechen und wiederverwendbaren Sales-System statt zu einem Hardware-Verleih-Pitch.",
    },
    metrics: {
      en: ["Under 1 hour", "4 audience-specific decks", "€60k specialised lens translated into value"],
      de: ["Unter 1 Stunde", "4 zielgruppenspezifische Decks", "60.000-€-Spezialobjektiv in Wert übersetzt"],
    },
    pillars: ["CREATE"],
  },
];

export function getTestimonials(ids: string[]) {
  return ids
    .map((id) => testimonials.find((item) => item.id === id))
    .filter((item): item is Testimonial => Boolean(item));
}
