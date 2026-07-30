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
  {
    id: "berlin-hospitality",
    client: "Berlin hospitality venue",
    domain: {
      en: "Crisis pivot · Zero-CAPEX operations",
      de: "Krisenpivot · Zero-CAPEX-Betrieb",
    },
    title: {
      en: "Keep a business alive when its revenue goes to zero overnight.",
      de: "Ein Unternehmen am Leben halten, wenn der Umsatz über Nacht auf null fällt.",
    },
    bottleneck: {
      en: "Lockdown removed 100% of an established venue’s revenue. Every conventional recovery plan required capital the business no longer had.",
      de: "Der Lockdown entzog einem etablierten Betrieb 100 % des Umsatzes. Jeder klassische Rettungsplan setzte Kapital voraus, das nicht mehr vorhanden war.",
    },
    execution: {
      en: "I designed a survival architecture with zero capital expenditure: the existing space became a live-streaming production, supported by scalable SOPs for 8 to 12 rotating artists a week and data-based briefings that turned founder knowledge into a repeatable process.",
      de: "Ich entwarf eine Überlebensarchitektur ohne Investitionsausgaben: Der bestehende Raum wurde zur Livestream-Produktion, getragen von skalierbaren SOPs für 8 bis 12 wechselnde Künstler pro Woche und datenbasierten Briefings, die Gründerwissen in einen wiederholbaren Prozess überführten.",
    },
    result: {
      en: "The business kept operating through the closure, covered its fixed costs and built an owned audience that removed its dependency on paid acquisition.",
      de: "Der Betrieb lief durch die Schließung weiter, deckte seine Fixkosten und baute eine eigene Reichweite auf, die die Abhängigkeit von bezahlter Akquise beendete.",
    },
    metrics: {
      en: [
        "35 jobs protected",
        "€0 capital expenditure",
        "€13,000 monthly fixed costs covered",
        "20,000-subscriber owned audience",
      ],
      de: [
        "35 Arbeitsplätze gesichert",
        "0 € Investitionsausgaben",
        "13.000 € monatliche Fixkosten gedeckt",
        "20.000 Abonnenten eigene Reichweite",
      ],
    },
    pillars: ["SOLVE", "CREATE"],
  },
  {
    id: "eu-transform",
    client: "EU TRANSFORM",
    domain: {
      en: "Workforce policy · Upskilling architecture",
      de: "Arbeitsmarktpolitik · Upskilling-Architektur",
    },
    title: {
      en: "Replace a roadmap with no measures with a model that can be tested.",
      de: "Eine Roadmap ohne Maßnahmen durch ein prüfbares Modell ersetzen.",
    },
    bottleneck: {
      en: "A two-year EU project closed with a future-of-work roadmap that carried no KPIs and no concrete measures, while automation pressure on routine roles kept rising.",
      de: "Ein zweijähriges EU-Projekt endete mit einer Zukunfts-Roadmap ohne KPIs und ohne konkrete Maßnahmen, während der Automatisierungsdruck auf Routinetätigkeiten weiter stieg.",
    },
    execution: {
      en: "After contributing as AI expert on the WP9 ethics panel, I synthesised public research from WEF, Harvard and McKinsey into a first-principles model: the European Modular Upskilling Framework. Four core modules, including agentic orchestration and deep cognition, move at-risk profiles into adjacent bridge roles rather than retraining them from zero. Figures are modelled estimates from published sources, not measured outcomes.",
      de: "Nach meiner Mitarbeit als KI-Experte im WP9-Ethikpanel verdichtete ich öffentliche Forschung von WEF, Harvard und McKinsey zu einem Erstprinzipien-Modell: dem European Modular Upskilling Framework. Vier Kernmodule, darunter Agentic Orchestration und Deep Cognition, überführen gefährdete Profile in angrenzende Bridge Roles statt sie bei null neu auszubilden. Die Zahlen sind modellierte Schätzungen aus veröffentlichten Quellen, keine gemessenen Ergebnisse.",
    },
    result: {
      en: "The consortium received a structured, ROI-aware blueprint with named modules and testable metrics in place of a strategic vacuum. Organisations can use it to keep institutional knowledge instead of cycling through layoffs.",
      de: "Das Konsortium erhielt statt eines strategischen Vakuums einen strukturierten, ROI-bewussten Bauplan mit benannten Modulen und prüfbaren Kennzahlen. Organisationen können damit institutionelles Wissen halten, statt Entlassungszyklen zu durchlaufen.",
    },
    metrics: {
      en: [
        "0.5 days to a complete framework",
        "4 core upskilling modules",
        "Modelled exposure: ~41M EU routine roles",
      ],
      de: [
        "0,5 Tage bis zum vollständigen Framework",
        "4 Kern-Upskilling-Module",
        "Modellierte Betroffenheit: ~41 Mio. EU-Routinerollen",
      ],
    },
    pillars: ["SOLVE", "EDUCATE"],
  },
  {
    id: "asu-max-planck",
    client: "ASU & Max Planck",
    domain: {
      en: "Decision science · Stakeholder simulation",
      de: "Entscheidungsforschung · Stakeholder-Simulation",
    },
    title: {
      en: "Make billion-scale decisions feel their own consequences.",
      de: "Milliardenentscheidungen ihre eigenen Folgen spüren lassen.",
    },
    bottleneck: {
      en: "A collapsing workshop process put the Decision Theater Ideathon submission at risk. The underlying problem was larger: abstract big-data models keep decision-makers insulated from the consequences their choices create for affected groups.",
      de: "Ein zusammenbrechender Workshop-Prozess gefährdete die Einreichung zum Decision Theater Ideathon. Das eigentliche Problem lag tiefer: Abstrakte Big-Data-Modelle halten Entscheider von den Folgen fern, die ihre Entscheidungen für betroffene Gruppen erzeugen.",
    },
    execution: {
      en: "Working solo, I produced 24 concepts and built the full architecture and design for “Unheard Voices”: verified demographic datasets become synthetic personas through probabilistic models, then intervene in real time across the seven screens of the decision room to make cascade effects visible.",
      de: "Allein arbeitend entwickelte ich 24 Konzepte und die vollständige Architektur und Gestaltung von „Unheard Voices“: Verifizierte demografische Datensätze werden über probabilistische Modelle zu synthetischen Personas, die in Echtzeit auf den sieben Screens des Entscheidungsraums eingreifen und Kaskadeneffekte sichtbar machen.",
    },
    result: {
      en: "The submission was delivered on time with a pilot design, “The Phoenix Water Challenge”, that closes the gap between data modelling and human impact under explicit ethical safeguards.",
      de: "Die Einreichung wurde termingerecht geliefert, inklusive Pilotdesign „The Phoenix Water Challenge“, das die Lücke zwischen Datenmodellierung und menschlicher Wirkung unter ausdrücklichen ethischen Leitplanken schließt.",
    },
    metrics: {
      en: ["Under 8 hours", "24 concepts", "30-page keynote with 24 visuals"],
      de: ["Unter 8 Stunden", "24 Konzepte", "30-seitige Keynote mit 24 Visuals"],
    },
    pillars: ["SOLVE", "CREATE"],
  },
  {
    id: "laisterdam",
    client: "Laisterdam Rijksmonument",
    domain: {
      en: "Heritage retrofit · Applied AI method",
      de: "Denkmalsanierung · Angewandte KI-Methode",
    },
    title: {
      en: "Retrofit a protected building without touching its fabric.",
      de: "Ein denkmalgeschütztes Gebäude sanieren, ohne die Bausubstanz anzutasten.",
    },
    bottleneck: {
      en: "Heritage-protection rules block conventional energy retrofits of historic Dutch buildings. At the CRN CicloSchools hackathon in Berlin, competing teams of up to six people spent a full working day and finished with unresolved sketches.",
      de: "Denkmalschutzauflagen blockieren die klassische energetische Sanierung historischer niederländischer Gebäude. Beim CRN-CicloSchools-Hackathon in Berlin arbeiteten konkurrierende Teams von bis zu sechs Personen einen vollen Arbeitstag und kamen über unfertige Skizzen nicht hinaus.",
    },
    execution: {
      en: "I competed solo with a dedicated AI stack and delivered the complete “Invisible Comfort Retrofit” strategy within hours: a fully reversible approach using clip-in secondary glazing, smart thermostats and decentralised ventilation routed through historic chimneys, which protects the building fabric and avoids lengthy permit procedures.",
      de: "Ich trat allein mit einem eigens aufgebauten KI-Stack an und lieferte die vollständige Strategie „Invisible Comfort Retrofit“ innerhalb von Stunden: ein vollständig reversibler Ansatz mit einsetzbarer Sekundärverglasung, smarten Thermostaten und dezentraler Lüftung über historische Kamine, der die Bausubstanz schützt und langwierige Genehmigungsverfahren vermeidet.",
    },
    result: {
      en: "The Dutch team received an actionable pattern book with finished presentation assets. The comfort and energy figures are modelled projections from the design, not measured post-installation results.",
      de: "Das niederländische Team erhielt ein umsetzbares Pattern Book mit fertigen Präsentationsunterlagen. Die Komfort- und Energiewerte sind modellierte Projektionen aus dem Entwurf, keine gemessenen Ergebnisse nach Einbau.",
    },
    metrics: {
      en: [
        "Hours instead of a full team day",
        "Modelled: −60% draft complaints",
        "Modelled: −25% heating runtime",
        "Design target: CO₂ under 1,000 ppm",
      ],
      de: [
        "Stunden statt eines vollen Teamtages",
        "Modelliert: −60 % Zugluftbeschwerden",
        "Modelliert: −25 % Heizlaufzeit",
        "Auslegungsziel: CO₂ unter 1.000 ppm",
      ],
    },
    pillars: ["SOLVE", "CREATE"],
  },
  {
    id: "beat-em-hub",
    client: "Beat Em Hub · Games Ground",
    domain: {
      en: "Brand strategy · Event-tech go-to-market",
      de: "Markenstrategie · Event-Tech-Go-to-Market",
    },
    title: {
      en: "Scale a subculture into a B2B business without a media budget.",
      de: "Eine Subkultur ohne Mediabudget zu einem B2B-Geschäft skalieren.",
    },
    bottleneck: {
      en: "A grassroots gaming startup had credibility with its community but no route into profitable B2B event work, and no paid-media budget to buy one.",
      de: "Ein Grassroots-Gaming-Startup hatte Glaubwürdigkeit in seiner Community, aber keinen Weg in profitables B2B-Eventgeschäft und kein Mediabudget, um sich einen zu kaufen.",
    },
    execution: {
      en: "I built a go-to-market masterplan on a €0 paid-media budget. A three-persona model connected authentic subculture to B2B reliability, and a dual brand positioning generated inbound interest from corporate clients, institutional partners and gaming purists in parallel.",
      de: "Ich entwickelte einen Go-to-Market-Masterplan mit 0 € Mediabudget. Ein Drei-Personas-Modell verband authentische Subkultur mit B2B-Verlässlichkeit, eine duale Markenpositionierung erzeugte parallel Inbound-Interesse bei Unternehmenskunden, institutionellen Partnern und Gaming-Puristen.",
    },
    result: {
      en: "Optimised outreach secured B2B deployments at European festivals, and the operating blueprint enabled the company to launch its own Games Ground festival.",
      de: "Optimierte Ansprache sicherte B2B-Einsätze auf europäischen Festivals, und der Betriebsbauplan ermöglichte den Start des eigenen Festivals Games Ground.",
    },
    metrics: {
      en: [
        "€0 paid-media budget",
        "Festival deployments up to 70,000 visitors",
        "Own festival past 8,000 visitors",
      ],
      de: [
        "0 € Mediabudget",
        "Festival-Einsätze bis 70.000 Besucher",
        "Eigenes Festival über 8.000 Besucher",
      ],
    },
    pillars: ["CREATE"],
  },
];

/**
 * Why–How–What, as structured content rather than baked image text.
 * Native markup keeps this readable at every viewport, indexable by search
 * and AI retrieval, translatable, and correctable without regenerating art.
 */
export type WhwPillar = {
  index: string;
  label: Record<Language, string>;
  statement: Record<Language, string>;
  proof: Array<{ title: Record<Language, string>; detail: Record<Language, string> }>;
};

export const whyHowWhat = {
  eyebrow: { en: "WHY · HOW · WHAT", de: "WHY · HOW · WHAT" },
  frameworkNote: {
    en: "Structured with Simon Sinek’s Why-How-What framework.",
    de: "Strukturiert nach Simon Sineks Why-How-What-Framework.",
  },
  why: {
    label: { en: "WHY", de: "WHY" },
    statement: {
      en: "Elevate humanity to an interplanetary civilisation.",
      de: "Die Menschheit zu einer interplanetaren Zivilisation erheben.",
    },
    qualifier: {
      en: "Egalitarian, peaceful and happy.",
      de: "Egalitär, friedlich und glücklich.",
    },
  },
  how: {
    label: { en: "HOW", de: "HOW" },
    lead: {
      en: "Safeguard and accelerate progress",
      de: "Fortschritt sichern und beschleunigen",
    },
    statement: {
      en: "with unique AuDHD insight, first-principles systems thinking, global work experience and multidisciplinary know-how across AI, IT, business, strategy, communication and creativity.",
      de: "mit einer seltenen AuDHD-Perspektive, Erstprinzipien-Systemdenken, globaler Berufserfahrung und multidisziplinärem Know-how in KI, IT, Business, Strategie, Kommunikation und Kreation.",
    },
  },
  whatLabel: { en: "WHAT", de: "WHAT" },
  proofLabel: { en: "Proof", de: "Belege" },
  pillars: [
    {
      index: "01",
      label: { en: "SOLVE", de: "LÖSEN" },
      statement: {
        en: "Solve the most urgent and complex challenges with compliance-grade solutions and innovations.",
        de: "Die dringendsten und komplexesten Herausforderungen mit compliance-fähigen Lösungen und Innovationen bewältigen.",
      },
      proof: [
        {
          title: { en: "Rescued Berlin hospitality venue", de: "Berliner Gastronomiebetrieb gerettet" },
          detail: {
            en: "€0 CAPEX, 35 jobs protected, €13k monthly fixed costs covered, 15k concurrent viewers, €12k profit by monetising a 20k newsletter with a single affiliate post.",
            de: "0 € Investitionsausgaben, 35 Arbeitsplätze gesichert, 13.000 € monatliche Fixkosten gedeckt, 15.000 gleichzeitige Zuschauer, 12.000 € Gewinn durch die Monetarisierung eines 20.000er-Newsletters mit einem einzigen Affiliate-Post.",
          },
        },
        {
          title: { en: "New Singapore outpost", de: "Neuer Standort Singapur" },
          detail: {
            en: "Deep research, 360° strategy, legal approach, IP failsafes, videos, keynotes, on-brand HR advertising and multimedia assets for E.ON’s C-suite.",
            de: "Tiefenrecherche, 360°-Strategie, rechtlicher Rahmen, IP-Absicherung, Videos, Keynotes, markenkonforme HR-Anzeige und Multimedia-Assets für das C-Level von E.ON.",
          },
        },
        {
          title: { en: "Reinvent civil engineering", de: "Bauingenieurwesen neu gedacht" },
          detail: {
            en: "Addressed E.ON’s €6–7B CAPEX challenge and opened a new revenue path at the same time.",
            de: "E.ONs CAPEX-Herausforderung von 6–7 Mrd. € adressiert und gleichzeitig einen neuen Erlöspfad eröffnet.",
          },
        },
        {
          title: { en: "COBI startup launch", de: "COBI-Startup-Launch" },
          detail: {
            en: "13 countries in 3 weeks: 401% of the Kickstarter goal, 250+ press features, €9M VC round and acquisition by Bosch.",
            de: "13 Länder in 3 Wochen: 401 % des Kickstarter-Ziels, über 250 Presseberichte, 9 Mio. € VC-Runde und Übernahme durch Bosch.",
          },
        },
        {
          title: { en: "Commerzbank fintech GTM", de: "Commerzbank-Fintech-GTM" },
          detail: {
            en: "Three UHNWI markets, delivered in 2 weeks.",
            de: "Drei UHNWI-Märkte, geliefert in 2 Wochen.",
          },
        },
      ],
    },
    {
      index: "02",
      label: { en: "EDUCATE", de: "FORTBILDEN" },
      statement: {
        en: "Educate with upskilling formats, workshops and tools so everyone can participate in tomorrow’s world.",
        de: "Mit Weiterbildungsformaten, Workshops und Werkzeugen dafür sorgen, dass alle an der Welt von morgen teilhaben können.",
      },
      proof: [
        {
          title: { en: "Berlin Science Week hackathon", de: "Berlin Science Week Hackathon" },
          detail: {
            en: "AI-powered stakeholder simulation for Max Planck and ASU in 8 hours: a 30-page keynote, 24 visuals and a groundtruth dataset.",
            de: "KI-gestützte Stakeholder-Simulation für Max Planck und ASU in 8 Stunden: 30-seitige Keynote, 24 Visuals und ein Groundtruth-Datensatz.",
          },
        },
        {
          title: { en: "Corporate workshops", de: "Unternehmens-Workshops" },
          detail: { en: "E.ON, Universal, BBDO and others.", de: "E.ON, Universal, BBDO und weitere." },
        },
        {
          title: { en: "AI for families and schools", de: "KI für Familien und Schulen" },
          detail: { en: "Waldorf and Bezirksamt programmes.", de: "Programme mit Waldorfschulen und Bezirksamt." },
        },
        {
          title: { en: "Kardashev Campus", de: "Kardashev Campus" },
          detail: { en: "Upskilling newsletter.", de: "Newsletter für Weiterbildung." },
        },
        {
          title: { en: "LifeTeacher", de: "LifeTeacher" },
          detail: { en: "Voluntary K-12 engagement.", de: "Ehrenamtliches Engagement für Schulklassen." },
        },
        {
          title: { en: "Free EdTech tools", de: "Kostenlose EdTech-Werkzeuge" },
          detail: {
            en: "5-Level-Explainer, AI Homework Upgrader, Teen Career Explorer and more.",
            de: "5-Level-Explainer, AI Homework Upgrader, Teen Career Explorer und weitere.",
          },
        },
        {
          title: { en: "Voluntary AI workshops and panels", de: "Ehrenamtliche KI-Workshops und Panels" },
          detail: {
            en: "Comparative Research Network, EU TRANSFORM and various NGOs.",
            de: "Comparative Research Network, EU TRANSFORM und verschiedene NGOs.",
          },
        },
      ],
    },
    {
      index: "03",
      label: { en: "CREATE", de: "ENTWICKELN" },
      statement: {
        en: "Create new, smart and engaging content that increases approval and anticipation for our exponential future.",
        de: "Neue, kluge und mitreißende Inhalte entwickeln, die Zustimmung und Vorfreude auf unsere exponentielle Zukunft steigern.",
      },
      proof: [
        {
          title: { en: "360° upskilling content", de: "360°-Weiterbildungsinhalte" },
          detail: {
            en: "AI, IT, web, business, creativity, health, fitness, longevity, parenting, finance and life-hacks.",
            de: "KI, IT, Web, Business, Kreation, Gesundheit, Fitness, Longevity, Elternschaft, Finanzen und Alltagshacks.",
          },
        },
        {
          title: { en: "Creative multimedia use cases", de: "Kreative Multimedia-Use-Cases" },
          detail: {
            en: "AI BS Analyser, C-Suite Coach, Secure AI for Schools, Teacher Bot, plus films, images, songs, playbooks and apps.",
            de: "AI BS Analyser, C-Suite Coach, Secure AI for Schools, Teacher Bot sowie Filme, Bilder, Songs, Playbooks und Apps.",
          },
        },
        {
          title: { en: "First-principles frameworks for an AI-powered future", de: "Erstprinzipien-Frameworks für eine KI-gestützte Zukunft" },
          detail: {
            en: "EU upskilling initiative modelled to reach 41M workers, Exponential Education System, Superintelligent Democracy, Dual-Engine-Education, Vibe Matrix HR-Tool and the 8D-Business-Success-Matrix.",
            de: "EU-Upskilling-Initiative, modelliert für 41 Mio. Beschäftigte, Exponential Education System, Superintelligent Democracy, Dual-Engine-Education, Vibe Matrix HR-Tool und die 8D-Business-Success-Matrix.",
          },
        },
      ],
    },
  ] satisfies WhwPillar[],
};

export function getTestimonials(ids: string[]) {
  return ids
    .map((id) => testimonials.find((item) => item.id === id))
    .filter((item): item is Testimonial => Boolean(item));
}
