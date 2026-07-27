export type Language = "en" | "de";

export type ServicePageData = {
  slug: string;
  pairSlug: string;
  language: Language;
  label: string;
  counterpartLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  editorialImage: string;
  playlistId: string;
  proof: Array<{ value: string; label: string }>;
  capabilityHeading: string;
  capabilityIntro: string;
  capabilities: Array<{ number: string; title: string; text: string }>;
  editorialKicker: string;
  editorialTitle: string;
  editorialText: string;
  workHeading: string;
  workIntro: string;
  work: Array<{ title: string; result: string; text: string }>;
  engagementHeading: string;
  engagements: Array<{ title: string; timing: string; text: string }>;
  playlistHeading: string;
  playlistIntro: string;
  closingTitle: string;
  closingText: string;
};

export const contact = {
  email: "Elias.Kouloures@gmail.com",
  calendar: "https://calendar.app.google/ANb76KDuvg4J7LS28",
  linkedin: "https://linkedin.com/in/eliaskouloures",
  github: "https://github.com/EliasKouloures",
};

export const services: Record<string, ServicePageData> = {
  solve: {
    slug: "solve",
    pairSlug: "loesen",
    language: "en",
    label: "SOLVE",
    counterpartLabel: "LÖSEN",
    eyebrow: "SOLVE · SENIOR ADVISORY",
    title: "When the problem has no playbook, bring it here.",
    intro:
      "First-principles diagnosis, evidence-traced decisions and working solutions for complex growth, innovation and AI challenges—built for EU and German realities.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Coding.png",
    playlistId: "PL66aLwkPo2YqtBCXQExJz14zxIAoFu-Tk",
    proof: [
      { value: "24", label: "international awards" },
      { value: "401%", label: "crowdfunding result" },
      { value: "35", label: "jobs protected" },
      { value: "8 days", label: "to B2B proposal" },
      { value: "2 weeks", label: "to launch" },
    ],
    capabilityHeading: "You do not hire a deck. You deploy an operator.",
    capabilityIntro:
      "I enter where the brief is incomplete, the stakes are high and disciplines collide. Then I reduce the problem to what is true, what matters and what can be shipped.",
    capabilities: [
      {
        number: "01",
        title: "Built for chaos",
        text: "Ambiguous mandates, conflicting incentives and compressed timelines are the starting point—not an exception.",
      },
      {
        number: "02",
        title: "Think, build, deploy",
        text: "Strategy, creative direction, data and AI execution stay connected from diagnosis to working output.",
      },
      {
        number: "03",
        title: "Systems from wreckage",
        text: "I turn scattered evidence, tools and stakeholders into a decision system your team can keep using.",
      },
      {
        number: "04",
        title: "Human + machine fluency",
        text: "AI accelerates the work. Judgment, accountability and the final quality gate remain human.",
      },
      {
        number: "05",
        title: "Speed under pressure",
        text: "Short feedback loops expose risk early and move useful work into the world quickly.",
      },
    ],
    editorialKicker: "THE OPERATING PRINCIPLE",
    editorialTitle: "Find the constraint. Build the system. Leave evidence.",
    editorialText:
      "Every engagement is structured around decisions that can be explained, tested and handed over. No black box, no theatre, no dependency by design.",
    workHeading: "Selected proof under pressure",
    workIntro:
      "The contexts change. The pattern does not: make the hard problem legible, assemble the right system and deliver at decision speed.",
    work: [
      {
        title: "Samsung",
        result: "8 days",
        text: "Built a B2B assistant proposal for 7,200 German retail stores—from use case logic to delivery system.",
      },
      {
        title: "Commerzbank · 360X",
        result: "2 weeks",
        text: "Launched a venture website with language aligned for BaFin and Deutsche Börse stakeholders.",
      },
      {
        title: "Berlin hospitality",
        result: "35 jobs",
        text: "Designed a zero-CAPEX livestream response that kept a nightlife SME operating during lockdown.",
      },
      {
        title: "COBI",
        result: "401%",
        text: "Helped take a connected-bike proposition through Kickstarter, 13 markets, 250+ press features and the path to acquisition by Bosch.",
      },
      {
        title: "Federal budget",
        result: "€10bn+",
        text: "Mapped double-digit-billion-euro savings potential through a first-principles review of public spending.",
      },
      {
        title: "AI systems",
        result: "Evidence-first",
        text: "Designed prompt architectures, evaluation gates and retrieval systems for outputs people can inspect.",
      },
    ],
    engagementHeading: "Three ways to engage",
    engagements: [
      {
        title: "Crisis intervention",
        timing: "Weeks to months",
        text: "For a high-stakes problem already affecting customers, teams, revenue or reputation.",
      },
      {
        title: "Rapid sprint",
        timing: "Days to weeks",
        text: "For a sharply defined decision, prototype or launch that needs senior hands immediately.",
      },
      {
        title: "System hardening",
        timing: "Days to weeks",
        text: "For a promising workflow or AI system that needs evidence, guardrails and transferability.",
      },
    ],
    playlistHeading: "Solve · field notes",
    playlistIntro:
      "The complete playlist updates automatically as new videos are published.",
    closingTitle: "Bring the problem others cannot structure.",
    closingText:
      "A short call is enough to establish the constraint, the stakes and whether I am the right operator.",
  },
  loesen: {
    slug: "loesen",
    pairSlug: "solve",
    language: "de",
    label: "LÖSEN",
    counterpartLabel: "SOLVE",
    eyebrow: "LÖSEN · SENIOR ADVISORY",
    title: "Wenn es keine Anleitung gibt, bringen Sie das Problem zu mir.",
    intro:
      "Erstprinzipien-Diagnose, nachvollziehbare Entscheidungen und funktionierende Lösungen für komplexe Wachstums-, Innovations- und KI-Herausforderungen—ausgerichtet auf Deutschland und die EU.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Coding.png",
    playlistId: "PL66aLwkPo2YqtBCXQExJz14zxIAoFu-Tk",
    proof: [
      { value: "24", label: "internationale Awards" },
      { value: "401 %", label: "Crowdfunding-Ergebnis" },
      { value: "35", label: "gesicherte Arbeitsplätze" },
      { value: "8 Tage", label: "bis zum B2B-Konzept" },
      { value: "2 Wochen", label: "bis zum Launch" },
    ],
    capabilityHeading: "Sie buchen keine Präsentation. Sie setzen einen Operator ein.",
    capabilityIntro:
      "Ich steige dort ein, wo das Briefing lückenhaft, der Einsatz hoch und mehrere Disziplinen betroffen sind. Dann reduziere ich das Problem auf Fakten, Prioritäten und lieferbare Ergebnisse.",
    capabilities: [
      {
        number: "01",
        title: "Für Chaos gebaut",
        text: "Unklare Mandate, widersprüchliche Interessen und knappe Zeit sind der Ausgangspunkt—nicht die Ausnahme.",
      },
      {
        number: "02",
        title: "Denken, bauen, umsetzen",
        text: "Strategie, Kreation, Daten und KI bleiben von der Diagnose bis zum fertigen Ergebnis verbunden.",
      },
      {
        number: "03",
        title: "Systeme aus Fragmenten",
        text: "Aus verstreuten Fakten, Tools und Beteiligten entsteht ein Entscheidungssystem, das Ihr Team weiter nutzen kann.",
      },
      {
        number: "04",
        title: "Mensch + Maschine",
        text: "KI beschleunigt die Arbeit. Urteilskraft, Verantwortung und die letzte Qualitätskontrolle bleiben menschlich.",
      },
      {
        number: "05",
        title: "Tempo unter Druck",
        text: "Kurze Feedbackschleifen machen Risiken früh sichtbar und bringen brauchbare Arbeit schnell in die Anwendung.",
      },
    ],
    editorialKicker: "DAS ARBEITSPRINZIP",
    editorialTitle: "Engpass finden. System bauen. Nachweise hinterlassen.",
    editorialText:
      "Jedes Mandat wird um Entscheidungen gebaut, die erklärbar, testbar und übertragbar sind. Keine Blackbox, kein Theater, keine gewollte Abhängigkeit.",
    workHeading: "Ausgewählte Ergebnisse unter Druck",
    workIntro:
      "Die Kontexte wechseln. Das Muster bleibt: das schwierige Problem verständlich machen, das richtige System bauen und in Entscheidungsgeschwindigkeit liefern.",
    work: [
      {
        title: "Samsung",
        result: "8 Tage",
        text: "B2B-Assistant-Konzept für 7.200 deutsche Stores entwickelt—von der Use-Case-Logik bis zum Umsetzungssystem.",
      },
      {
        title: "Commerzbank · 360X",
        result: "2 Wochen",
        text: "Venture-Website gelauncht; Formulierungen auf BaFin- und Deutsche-Börse-Stakeholder abgestimmt.",
      },
      {
        title: "Berliner Gastronomie",
        result: "35 Jobs",
        text: "Zero-CAPEX-Livestream-Lösung entwickelt, die einen Nightlife-Mittelständler im Lockdown handlungsfähig hielt.",
      },
      {
        title: "COBI",
        result: "401 %",
        text: "Eine Connected-Bike-Idee über Kickstarter, 13 Märkte und 250+ Presseberichte bis auf den Weg zur Bosch-Übernahme begleitet.",
      },
      {
        title: "Bundeshaushalt",
        result: "10+ Mrd. €",
        text: "Mit einer Erstprinzipien-Analyse zweistelliges Milliardenpotenzial bei öffentlichen Ausgaben sichtbar gemacht.",
      },
      {
        title: "KI-Systeme",
        result: "Nachweisbar",
        text: "Prompt-Architekturen, Evaluationsschranken und Retrieval-Systeme für überprüfbare Ergebnisse entwickelt.",
      },
    ],
    engagementHeading: "Drei Formen der Zusammenarbeit",
    engagements: [
      {
        title: "Krisenintervention",
        timing: "Wochen bis Monate",
        text: "Für ein kritisches Problem, das Kunden, Teams, Umsatz oder Reputation bereits betrifft.",
      },
      {
        title: "Rapid Sprint",
        timing: "Tage bis Wochen",
        text: "Für eine klar begrenzte Entscheidung, einen Prototyp oder Launch mit sofortigem Senior-Einsatz.",
      },
      {
        title: "System-Härtung",
        timing: "Tage bis Wochen",
        text: "Für einen vielversprechenden Workflow oder ein KI-System, das Nachweise, Leitplanken und Übertragbarkeit braucht.",
      },
    ],
    playlistHeading: "Lösen · Praxisnotizen",
    playlistIntro:
      "Die vollständige Playlist aktualisiert sich automatisch, sobald neue Videos veröffentlicht werden.",
    closingTitle: "Bringen Sie das Problem, das andere nicht strukturieren können.",
    closingText:
      "Ein kurzes Gespräch reicht, um Engpass, Tragweite und die passende Form der Zusammenarbeit zu klären.",
  },
  educate: {
    slug: "educate",
    pairSlug: "fortbilden",
    language: "en",
    label: "EDUCATE",
    counterpartLabel: "FORTBILDEN",
    eyebrow: "EDUCATE · APPLIED AI LITERACY",
    title: "Turn AI confusion into a working capability.",
    intro:
      "Role-specific learning for leaders, teams and families—translated into useful workflows, shared language and a roadmap people can act on.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Education_Family.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Business_Meeting.png",
    playlistId: "PL66aLwkPo2YqLUhYuNpuVYOS_vwEuLvhl",
    proof: [
      { value: "150+", label: "keynotes & workshops" },
      { value: "5 levels", label: "of explanation" },
      { value: "30/60/90", label: "day roadmaps" },
      { value: "DE + EN", label: "native delivery" },
    ],
    capabilityHeading: "Knowledge becomes valuable when behaviour changes.",
    capabilityIntro:
      "I meet every audience at its real starting point, remove status games and make the next useful action obvious.",
    capabilities: [
      {
        number: "01",
        title: "C-suite 1:1",
        text: "Private briefings for decisions, risk, opportunity and the questions leaders cannot delegate.",
      },
      {
        number: "02",
        title: "Role-based team tracks",
        text: "Marketing, HR, product, operations and creative teams learn with examples from their actual work.",
      },
      {
        number: "03",
        title: "Organisation roadmaps",
        text: "A shared capability model, priorities and a practical 30/60/90-day path.",
      },
      {
        number: "04",
        title: "Hands-on workflows",
        text: "People leave having built something they can use the next morning.",
      },
      {
        number: "05",
        title: "Prompt libraries",
        text: "Reusable patterns, evaluation criteria and guardrails instead of one-off tricks.",
      },
      {
        number: "06",
        title: "Accessible by design",
        text: "From baby to boomer, neurodiverse teams to expert rooms: complexity without exclusion.",
      },
    ],
    editorialKicker: "THE LEARNING PRINCIPLE",
    editorialTitle: "Explain at five levels. Practise on real work. Transfer ownership.",
    editorialText:
      "The objective is not excitement about a tool. It is independent judgment: knowing when AI helps, how to test it and when to stop.",
    workHeading: "Built for the room you actually have",
    workIntro:
      "One method, adapted to the decision rights, incentives and baseline knowledge of each audience.",
    work: [
      {
        title: "Leadership",
        result: "Decide",
        text: "C-suite briefings that connect technical reality to strategy, governance and investment.",
      },
      {
        title: "Teams",
        result: "Apply",
        text: "Role-based sessions with workflows, prompts and quality gates grounded in daily work.",
      },
      {
        title: "Organisations",
        result: "Scale",
        text: "Capability maps and roadmaps that turn isolated experiments into a coherent operating model.",
      },
      {
        title: "Schools & families",
        result: "Understand",
        text: "Clear, age-aware guidance for using AI without surrendering curiosity, judgment or agency.",
      },
    ],
    engagementHeading: "Formats that fit the outcome",
    engagements: [
      {
        title: "Executive briefing",
        timing: "60–180 minutes",
        text: "A focused decision room for leaders who need signal, implications and next moves.",
      },
      {
        title: "Applied workshop",
        timing: "Half or full day",
        text: "A hands-on working session that produces role-specific assets and repeatable practice.",
      },
      {
        title: "Capability programme",
        timing: "Several weeks",
        text: "A sequenced learning path with transfer tasks, office hours and measurable adoption.",
      },
    ],
    playlistHeading: "Educate · practical sessions",
    playlistIntro:
      "The complete playlist updates automatically as new videos are published.",
    closingTitle: "Define the capability your people need.",
    closingText:
      "Tell me who is in the room, what must change afterwards and where the current friction sits.",
  },
  fortbilden: {
    slug: "fortbilden",
    pairSlug: "educate",
    language: "de",
    label: "FORTBILDEN",
    counterpartLabel: "EDUCATE",
    eyebrow: "FORTBILDEN · ANGEWANDTE KI-KOMPETENZ",
    title: "Machen Sie aus KI-Verwirrung echte Handlungsfähigkeit.",
    intro:
      "Rollenspezifische Weiterbildung für Führungskräfte, Teams und Familien—übersetzt in nützliche Workflows, eine gemeinsame Sprache und einen umsetzbaren Fahrplan.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Education_Family.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Business_Meeting.png",
    playlistId: "PL66aLwkPo2YqLUhYuNpuVYOS_vwEuLvhl",
    proof: [
      { value: "150+", label: "Keynotes & Workshops" },
      { value: "5 Ebenen", label: "der Erklärung" },
      { value: "30/60/90", label: "Tage im Fahrplan" },
      { value: "DE + EN", label: "native Vermittlung" },
    ],
    capabilityHeading: "Wissen wird wertvoll, wenn sich Verhalten verändert.",
    capabilityIntro:
      "Ich hole jede Zielgruppe an ihrem tatsächlichen Ausgangspunkt ab, nehme Statusspiele aus dem Raum und mache den nächsten sinnvollen Schritt klar.",
    capabilities: [
      {
        number: "01",
        title: "C-Suite 1:1",
        text: "Vertrauliche Briefings zu Entscheidungen, Risiken, Chancen und Fragen, die Führungskräfte nicht delegieren können.",
      },
      {
        number: "02",
        title: "Rollenbasierte Team-Tracks",
        text: "Marketing, HR, Produkt, Operations und Kreation lernen an Beispielen aus ihrer echten Arbeit.",
      },
      {
        number: "03",
        title: "Organisations-Roadmaps",
        text: "Ein gemeinsames Kompetenzmodell, klare Prioritäten und ein praktischer 30/60/90-Tage-Pfad.",
      },
      {
        number: "04",
        title: "Hands-on-Workflows",
        text: "Menschen verlassen den Raum mit etwas, das sie am nächsten Morgen einsetzen können.",
      },
      {
        number: "05",
        title: "Prompt-Bibliotheken",
        text: "Wiederverwendbare Muster, Bewertungskriterien und Leitplanken statt einmaliger Tricks.",
      },
      {
        number: "06",
        title: "Zugänglich konzipiert",
        text: "Vom Baby bis zum Boomer, neurodiverse Teams bis zum Expertenkreis: Komplexität ohne Ausschluss.",
      },
    ],
    editorialKicker: "DAS LERNPRINZIP",
    editorialTitle: "Auf fünf Ebenen erklären. An echter Arbeit üben. Verantwortung übergeben.",
    editorialText:
      "Das Ziel ist keine Begeisterung für ein Tool. Das Ziel ist unabhängige Urteilskraft: wissen, wann KI hilft, wie man sie prüft und wann man stoppt.",
    workHeading: "Gebaut für den Raum, den Sie wirklich haben",
    workIntro:
      "Eine Methode, angepasst an Entscheidungsrechte, Anreize und Wissensstand der jeweiligen Zielgruppe.",
    work: [
      {
        title: "Führung",
        result: "Entscheiden",
        text: "C-Suite-Briefings, die technische Realität mit Strategie, Governance und Investitionen verbinden.",
      },
      {
        title: "Teams",
        result: "Anwenden",
        text: "Rollenbasierte Sessions mit Workflows, Prompts und Qualitätskontrollen aus dem Arbeitsalltag.",
      },
      {
        title: "Organisationen",
        result: "Skalieren",
        text: "Kompetenzmodelle und Roadmaps, die einzelne Experimente in ein schlüssiges Betriebsmodell überführen.",
      },
      {
        title: "Schulen & Familien",
        result: "Verstehen",
        text: "Klare, altersgerechte Orientierung für KI-Nutzung ohne Verlust von Neugier, Urteilskraft oder Selbstbestimmung.",
      },
    ],
    engagementHeading: "Formate passend zum Ergebnis",
    engagements: [
      {
        title: "Executive Briefing",
        timing: "60–180 Minuten",
        text: "Ein fokussierter Entscheidungsraum für Führungskräfte, die Signal, Folgen und nächste Schritte brauchen.",
      },
      {
        title: "Praxisworkshop",
        timing: "Halber oder ganzer Tag",
        text: "Eine Hands-on-Session, die rollenspezifische Arbeitsmittel und wiederholbare Praxis erzeugt.",
      },
      {
        title: "Kompetenzprogramm",
        timing: "Mehrere Wochen",
        text: "Ein gestufter Lernpfad mit Transferaufgaben, Sprechstunden und messbarer Anwendung.",
      },
    ],
    playlistHeading: "Fortbilden · Praxissessions",
    playlistIntro:
      "Die vollständige Playlist aktualisiert sich automatisch, sobald neue Videos veröffentlicht werden.",
    closingTitle: "Definieren Sie die Kompetenz, die Ihre Menschen brauchen.",
    closingText:
      "Sagen Sie mir, wer im Raum sitzt, was sich danach ändern muss und wo die aktuelle Reibung liegt.",
  },
  create: {
    slug: "create",
    pairSlug: "entwickeln",
    language: "en",
    label: "CREATE",
    counterpartLabel: "ENTWICKELN",
    eyebrow: "CREATE · MULTIMEDIA SYSTEMS",
    title: "Turn the idea into an image, film or song that earns attention.",
    intro:
      "Creative direction and reusable AI production systems for high-impact multimedia—built around the audience, the channel and the result.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Multimedia.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Sci-Fi_Steampunk_Device.png",
    playlistId: "PL66aLwkPo2YqZ00aBJcmxbCSqgFYavoN-",
    proof: [
      { value: "25+", label: "years creating" },
      { value: "24", label: "international awards" },
      { value: "~300", label: "engagements" },
      { value: "150+", label: "European brands" },
    ],
    capabilityHeading: "One idea. One world. A system that can make more.",
    capabilityIntro:
      "I combine concept, direction, generation and quality control so every asset belongs to the same visual and strategic universe.",
    capabilities: [
      {
        number: "01",
        title: "AI images",
        text: "Art direction, prompt architecture and final selection for images with intention—not visual noise.",
      },
      {
        number: "02",
        title: "AI films",
        text: "Concept, storyboard, shot generation, edit logic and sound designed as one narrative system.",
      },
      {
        number: "03",
        title: "AI music",
        text: "Original sonic directions, lyrical concepts and production briefs aligned to audience and use.",
      },
      {
        number: "04",
        title: "Production pipelines",
        text: "Prompt-optimised workflows that preserve character, tone and quality across many outputs.",
      },
      {
        number: "05",
        title: "Campaign content",
        text: "A coherent family of assets designed for the formats and moments that matter.",
      },
      {
        number: "06",
        title: "Direction + transfer",
        text: "Making-of logic, reusable templates and a clean handover so the capability remains.",
      },
    ],
    editorialKicker: "THE CREATIVE PRINCIPLE",
    editorialTitle: "Novelty gets a glance. Meaning earns attention.",
    editorialText:
      "The tool is never the idea. Every choice—frame, rhythm, texture, voice—must strengthen what the audience should feel, understand or do next.",
    workHeading: "From isolated asset to creative engine",
    workIntro:
      "The output can be one decisive piece or a repeatable system. In both cases, the standard is the same: distinct, coherent and useful.",
    work: [
      {
        title: "Visual worlds",
        result: "Recognisable",
        text: "A defined image language with repeatable composition, light, material and character rules.",
      },
      {
        title: "Film systems",
        result: "Cinematic",
        text: "Shot logic and editorial rhythm that connect generated scenes into a purposeful whole.",
      },
      {
        title: "Sonic identity",
        result: "Memorable",
        text: "Music and sound directions that reinforce the emotional job of the communication.",
      },
      {
        title: "GTM content",
        result: "Deployable",
        text: "Modular assets mapped to audience, channel, funnel moment and production reality.",
      },
    ],
    engagementHeading: "Three ways to make",
    engagements: [
      {
        title: "Hero asset",
        timing: "Days to weeks",
        text: "One defining image, film or song shaped from idea to final delivery.",
      },
      {
        title: "Campaign system",
        timing: "Several weeks",
        text: "A connected multimedia world with master assets and format-ready derivatives.",
      },
      {
        title: "Creative pipeline",
        timing: "Weeks to months",
        text: "A reusable generation and approval workflow your team can operate with confidence.",
      },
    ],
    playlistHeading: "Create · process and output",
    playlistIntro:
      "The complete playlist updates automatically as new videos are published.",
    closingTitle: "Bring the idea and the audience.",
    closingText:
      "We will establish the one thing the work must make people feel, understand or do.",
  },
  entwickeln: {
    slug: "entwickeln",
    pairSlug: "create",
    language: "de",
    label: "ENTWICKELN",
    counterpartLabel: "CREATE",
    eyebrow: "ENTWICKELN · MULTIMEDIA-SYSTEME",
    title: "Machen Sie aus der Idee ein Bild, einen Film oder einen Song, der Aufmerksamkeit verdient.",
    intro:
      "Kreativdirektion und wiederverwendbare KI-Produktionssysteme für wirkungsvolle Multimedia-Inhalte—gebaut um Zielgruppe, Kanal und Ergebnis.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Multimedia.png",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Sci-Fi_Steampunk_Device.png",
    playlistId: "PL66aLwkPo2YqZ00aBJcmxbCSqgFYavoN-",
    proof: [
      { value: "25+", label: "Jahre Kreation" },
      { value: "24", label: "internationale Awards" },
      { value: "~300", label: "Mandate" },
      { value: "150+", label: "europäische Marken" },
    ],
    capabilityHeading: "Eine Idee. Eine Welt. Ein System, das mehr erzeugen kann.",
    capabilityIntro:
      "Ich verbinde Konzept, Direktion, Generierung und Qualitätskontrolle, damit jedes Asset zum selben visuellen und strategischen Universum gehört.",
    capabilities: [
      {
        number: "01",
        title: "KI-Bilder",
        text: "Art Direction, Prompt-Architektur und finale Auswahl für Bilder mit Absicht—statt visuellem Rauschen.",
      },
      {
        number: "02",
        title: "KI-Filme",
        text: "Konzept, Storyboard, Shot-Generierung, Schnittlogik und Sound als ein zusammenhängendes Erzählsystem.",
      },
      {
        number: "03",
        title: "KI-Musik",
        text: "Originäre Klangrichtungen, Textkonzepte und Produktionsbriefings passend zu Zielgruppe und Einsatz.",
      },
      {
        number: "04",
        title: "Produktionspipelines",
        text: "Prompt-optimierte Workflows, die Charakter, Tonalität und Qualität über viele Outputs hinweg sichern.",
      },
      {
        number: "05",
        title: "Kampagnen-Content",
        text: "Eine zusammenhängende Asset-Familie für die Formate und Momente, die zählen.",
      },
      {
        number: "06",
        title: "Direktion + Transfer",
        text: "Making-of-Logik, wiederverwendbare Vorlagen und saubere Übergabe, damit die Fähigkeit bleibt.",
      },
    ],
    editorialKicker: "DAS KREATIVPRINZIP",
    editorialTitle: "Neuheit bekommt einen Blick. Bedeutung verdient Aufmerksamkeit.",
    editorialText:
      "Das Tool ist niemals die Idee. Jede Entscheidung—Bild, Rhythmus, Textur, Stimme—muss verstärken, was die Zielgruppe fühlen, verstehen oder als Nächstes tun soll.",
    workHeading: "Vom einzelnen Asset zur Kreativmaschine",
    workIntro:
      "Das Ergebnis kann ein entscheidendes Einzelstück oder ein wiederholbares System sein. Der Maßstab bleibt: eigenständig, kohärent und nützlich.",
    work: [
      {
        title: "Visuelle Welten",
        result: "Erkennbar",
        text: "Eine definierte Bildsprache mit wiederholbaren Regeln für Komposition, Licht, Material und Charakter.",
      },
      {
        title: "Filmsysteme",
        result: "Cineastisch",
        text: "Shot-Logik und Schnittrhythmus, die generierte Szenen zu einem sinnvollen Ganzen verbinden.",
      },
      {
        title: "Klangidentität",
        result: "Einprägsam",
        text: "Musik- und Soundrichtungen, die die emotionale Aufgabe der Kommunikation verstärken.",
      },
      {
        title: "GTM-Content",
        result: "Einsetzbar",
        text: "Modulare Assets, abgestimmt auf Zielgruppe, Kanal, Funnel-Moment und Produktionsrealität.",
      },
    ],
    engagementHeading: "Drei Wege zur Produktion",
    engagements: [
      {
        title: "Hero Asset",
        timing: "Tage bis Wochen",
        text: "Ein prägendes Bild, ein Film oder ein Song—von der Idee bis zur finalen Auslieferung.",
      },
      {
        title: "Kampagnensystem",
        timing: "Mehrere Wochen",
        text: "Eine verbundene Multimedia-Welt mit Master-Assets und formatgerechten Varianten.",
      },
      {
        title: "Kreativpipeline",
        timing: "Wochen bis Monate",
        text: "Ein wiederverwendbarer Generierungs- und Freigabeprozess, den Ihr Team sicher bedienen kann.",
      },
    ],
    playlistHeading: "Entwickeln · Prozess und Ergebnis",
    playlistIntro:
      "Die vollständige Playlist aktualisiert sich automatisch, sobald neue Videos veröffentlicht werden.",
    closingTitle: "Bringen Sie die Idee und die Zielgruppe.",
    closingText:
      "Wir klären die eine Sache, die die Arbeit Menschen fühlen, verstehen oder als Nächstes tun lassen muss.",
  },
};

export const landingCards = [
  {
    label: "SOLVE",
    slug: "solve",
    lang: "EN",
    text: "Urgent, complex problems with no playbook. First-principles diagnosis and evidence-traced solutions for EU and German realities.",
  },
  {
    label: "EDUCATE",
    slug: "educate",
    lang: "EN",
    text: "Role-based upskilling, C-suite briefings and actionable roadmaps. Practical workflows for tomorrow’s AI world.",
  },
  {
    label: "CREATE",
    slug: "create",
    lang: "EN",
    text: "High-impact multimedia, creative direction and go-to-market systems that turn AI tools into useful attention.",
  },
  {
    label: "LÖSEN",
    slug: "loesen",
    lang: "DE",
    text: "Dringende, komplexe Probleme ohne Anleitung. Erstprinzipien-Diagnose und nachweisbare Lösungen für Deutschland und die EU.",
  },
  {
    label: "FORTBILDEN",
    slug: "fortbilden",
    lang: "DE",
    text: "Rollenbasierte Weiterbildung, C-Suite-Briefings und umsetzbare Roadmaps für eine handlungsfähige KI-Zukunft.",
  },
  {
    label: "ENTWICKELN",
    slug: "entwickeln",
    lang: "DE",
    text: "Wirkungsvolle Multimedia-Inhalte, Kreativdirektion und Go-to-Market-Systeme für Aufmerksamkeit mit Substanz.",
  },
];
