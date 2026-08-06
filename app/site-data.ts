export type Language = "en" | "de";

/**
 * The flagship offer inside a pillar. Currently SOLVE / LÖSEN only:
 * Crisis Intervention is the flagship urgent-problem mandate.
 */
export type FlagshipOffer = {
  eyebrow: string;
  title: string;
  intro: string;
  signalHeading: string;
  signals: Array<{ title: string; text: string }>;
  response: string;
  cta: string;
};

export type ServicePageData = {
  slug: string;
  pairSlug: string;
  language: Language;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  flagship?: FlagshipOffer;
  heroImage: string;
  editorialImage: string;
  playlistId: string;
  playlistThumbnail: string;
  proof: Array<{ value: string; label: string }>;
  capabilityHeading: string;
  capabilityIntro: string;
  capabilities: Array<{ title: string; text: string }>;
  editorialKicker: string;
  editorialTitle: string;
  editorialText: string;
  workHeading: string;
  workIntro: string;
  work: Array<{ title: string; text: string }>;
  engagementHeading: string;
  engagements: Array<{ title: string; timing: string; text: string }>;
  closingTitle: string;
  closingText: string;
};

export const contact = {
  email: "Elias.Kouloures@gmail.com",
  calendar: "https://calendar.app.google/ANb76KDuvg4J7LS28",
  linkedin: "https://linkedin.com/in/eliaskouloures",
  github: "https://github.com/EliasKouloures",
  youtube: "https://www.youtube.com/channel/UCNnTHykYkGaNaJPIe2WWtVA",
  newsletter: "https://kardashev-campus.beehiiv.com/",
};

export const youtube = {
  userId: "NnTHykYkGaNaJPIe2WWtVA",
  channelId: "UCNnTHykYkGaNaJPIe2WWtVA",
};

export const services: Record<string, ServicePageData> = {
  solve: {
    slug: "solve",
    pairSlug: "loesen",
    language: "en",
    label: "SOLVE",
    eyebrow: "SOLVE · SENIOR ADVISORY",
    title: "Give me your challenges where no playbook exists.",
    intro:
      "First-principles diagnosis, evidence-traced decisions and working solutions for complex growth, innovation and AI challenges—built for EU and German realities.",
    flagship: {
      eyebrow: "FLAGSHIP MANDATE · CRISIS INTERVENTION",
      title: "When your house is on fire. And panic flares up.",
      intro:
        "Crisis intervention is the flagship mandate inside SOLVE. It applies when a high-stakes problem is already costing customers, revenue, headcount or reputation, no playbook exists, and there is no time to write one. I take the constraint apart, name the root cause and ship the smallest defensible fix first.",
      signalHeading: "Three signals that this is the right mandate",
      signals: [
        {
          title: "Time is your biggest enemy",
          text: "Damage compounds weekly. A conventional discovery phase would land after the deadline that actually matters.",
        },
        {
          title: "Brief and way forward are unclear",
          text: "Nobody can state the real problem in one sentence yet. Ownership is unclear and the evidence sits in five places.",
        },
        {
          title: "Challenge spans multiple disciplines",
          text: "Strategy, data, AI, compliance, communication and delivery all touch it, so no single specialist can close it alone.",
        },
      ],
      response:
        "Typical shape: a diagnosis within days, a defensible decision path inside the first week, working output in weeks. EU and German requirements are designed in from the first hour rather than retrofitted at the end.",
      cta: "Book a call",
    },
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Coding.jpg",
    playlistId: "PLJMSxPvhcOuA",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-SOLVE.jpeg",
    proof: [
      {
        value: "Award-winning",
        label: "24 international awards across creative and innovation work.",
      },
      {
        value: "Crowdfunding success",
        label: "COBI reached 401% of its Kickstarter goal.",
      },
      {
        value: "Jobs preserved",
        label: "A zero-CAPEX response secured 35 roles during lockdown.",
      },
      {
        value: "Retail AI at speed",
        label: "A B2B assistant proposal for 7,200 German stores in 8 days.",
      },
      {
        value: "Rapid venture launch",
        label: "The 360X venture website launched in 2 weeks.",
      },
    ],
    capabilityHeading:
      "You don’t book a presentation. You get a full-stack problem solver.",
    capabilityIntro:
      "I enter where the brief is incomplete, the stakes are high and disciplines collide. Then I reduce the problem to what is true, what matters and what can be shipped.",
    capabilities: [
      {
        title: "Built for chaos",
        text: "Ambiguous mandates, conflicting incentives and compressed timelines are the starting point—not an exception.",
      },
      {
        title: "Think, build, deploy",
        text: "Strategy, creative direction, data and AI execution stay connected from diagnosis to working output.",
      },
      {
        title: "Systems from wreckage",
        text: "I turn scattered evidence, tools and stakeholders into a decision system your team can keep using.",
      },
      {
        title: "Human + machine fluency",
        text: "AI accelerates the work. Judgment, accountability and the final quality gate remain human.",
      },
      {
        title: "Speed under pressure",
        text: "Short feedback loops expose risk early and move useful work into the world quickly.",
      },
    ],
    editorialKicker: "THE OPERATING PRINCIPLE",
    editorialTitle: "Find constraints. Build systems. Leave playbooks.",
    editorialText:
      "Every engagement is structured around decisions that can be explained, tested and handed over. No black box, no theatre, no dependency by design.",
    workHeading: "Projects that started in chaos. And ended in cheers.",
    workIntro:
      "The contexts change. The pattern does not: make the hard problem legible, assemble the right system and deliver at decision speed.",
    work: [
      {
        title: "Samsung",
        text: "In 8 days, built a B2B assistant proposal for 7,200 German retail stores—from use case logic to delivery system.",
      },
      {
        title: "Commerzbank · 360X",
        text: "In 2 weeks, launched a venture website with language aligned for BaFin and Deutsche Börse stakeholders.",
      },
      {
        title: "Berlin hospitality",
        text: "Designed a zero-CAPEX livestream response that kept a nightlife SME operating and protected 35 jobs during lockdown.",
      },
      {
        title: "COBI",
        text: "Helped take a connected-bike proposition through Kickstarter, 13 markets, 250+ press features and the path to acquisition by Bosch.",
      },
      {
        title: "RevOps automation",
        text: "Built an AI-first n8n, Claude and Pipedrive intake engine that cut response times from 3–5 days to 19 minutes, triaged ~150 emails daily at €0.50/day with 98% accuracy, and gave the CEO full pipeline visibility.",
      },
      {
        title: "AI systems",
        text: "Designed prompt architectures, evaluation gates and retrieval systems for outputs people can inspect.",
      },
    ],
    engagementHeading: "Three proven approaches. Infinitely many more available.",
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
    closingTitle:
      "Bring me challenges others cannot fathom, structure nor solve.",
    closingText:
      "A short call is enough to establish the constraint, the stakes and whether I am the right operator.",
  },
  loesen: {
    slug: "loesen",
    pairSlug: "solve",
    language: "de",
    label: "LÖSEN",
    eyebrow: "LÖSEN · SENIOR ADVISORY",
    title: "Bringen Sie mir Herausforderungen, für die es kein Handbuch gibt.",
    intro:
      "Erstprinzipien-Diagnose, nachvollziehbare Entscheidungen und funktionierende Lösungen für komplexe Wachstums-, Innovations- und KI-Herausforderungen—ausgerichtet auf Deutschland und die EU.",
    flagship: {
      eyebrow: "KERNMANDAT · KRISENINTERVENTION",
      title: "Wenn Ihr Projekt brennt. Und Panik auflodert.",
      intro:
        "Krisenintervention ist das Kernmandat innerhalb von LÖSEN. Es greift, wenn ein Problem mit hoher Tragweite bereits Kunden, Umsatz, Personal oder Reputation kostet, keine Anleitung existiert und keine Zeit bleibt, eine zu schreiben. Ich zerlege die Rahmenbedingungen, benenne die Ursache und liefere zuerst die kleinste belastbare Lösung.",
      signalHeading: "Drei Anzeichen, dass dies das richtige Mandat ist",
      signals: [
        {
          title: "Zeit ist Ihr größter Feind",
          text: "Der Schaden wächst wöchentlich. Eine klassische Analysephase wäre erst nach dem entscheidenden Termin fertig.",
        },
        {
          title: "Briefing und Lösungsweg sind unklar",
          text: "Niemand kann das eigentliche Problem in einem Satz formulieren. Die Verantwortung ist ungeklärt, die Belege liegen verstreut.",
        },
        {
          title: "Herausforderung umfasst mehrere Disziplinen",
          text: "Strategie, Daten, KI, Compliance, Kommunikation und Umsetzung greifen ineinander. Kein einzelner Spezialist schließt das allein.",
        },
      ],
      response:
        "Typischer Ablauf: Diagnose innerhalb von Tagen, ein belastbarer Entscheidungspfad in der ersten Woche, funktionierende Ergebnisse in Wochen. EU- und DE-Anforderungen sind ab der ersten Stunde eingeplant und werden nicht nachträglich ergänzt.",
      cta: "Gespräch buchen",
    },
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Person_in_Command_Center.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Coding.jpg",
    playlistId: "PLJMSxPvhcOuA",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-LOESEN.jpeg",
    proof: [
      {
        value: "Preisgekrönt",
        label: "24 internationale Awards für Kreation und Innovation.",
      },
      {
        value: "Crowdfunding-Erfolg",
        label: "COBI erreichte 401 % des Kickstarter-Ziels.",
      },
      {
        value: "Arbeitsplätze gesichert",
        label: "Eine Zero-CAPEX-Lösung sicherte im Lockdown 35 Arbeitsplätze.",
      },
      {
        value: "Retail-KI im Sprint",
        label: "B2B-Assistant-Konzept für 7.200 deutsche Stores in 8 Tagen.",
      },
      {
        value: "Schneller Venture-Launch",
        label: "Die 360X Venture-Website ging in 2 Wochen live.",
      },
    ],
    capabilityHeading:
      "Sie buchen keine Präsentation. Sondern einen Full-Stack-Problemlöser.",
    capabilityIntro:
      "Ich steige dort ein, wo das Briefing lückenhaft, der Einsatz hoch und mehrere Disziplinen betroffen sind. Dann reduziere ich das Problem auf Fakten, Prioritäten und lieferbare Ergebnisse.",
    capabilities: [
      {
        title: "Für Chaos gebaut",
        text: "Unklare Mandate, widersprüchliche Interessen und knappe Zeit sind der Ausgangspunkt—nicht die Ausnahme.",
      },
      {
        title: "Denken, bauen, umsetzen",
        text: "Strategie, Kreation, Daten und KI bleiben von der Diagnose bis zum fertigen Ergebnis verbunden.",
      },
      {
        title: "Systeme aus Fragmenten",
        text: "Aus verstreuten Fakten, Tools und Beteiligten entsteht ein Entscheidungssystem, das Ihr Team weiter nutzen kann.",
      },
      {
        title: "Mensch + Maschine",
        text: "KI beschleunigt die Arbeit. Urteilskraft, Verantwortung und die letzte Qualitätskontrolle bleiben menschlich.",
      },
      {
        title: "Tempo unter Druck",
        text: "Kurze Feedbackschleifen machen Risiken früh sichtbar und bringen brauchbare Arbeit schnell in die Anwendung.",
      },
    ],
    editorialKicker: "DAS ARBEITSPRINZIP",
    editorialTitle: "Engpässe finden. Systeme bauen. Anleitungen hinterlassen.",
    editorialText:
      "Jedes Mandat wird um Entscheidungen gebaut, die erklärbar, testbar und übertragbar sind. Keine Blackbox, kein Theater, keine gewollte Abhängigkeit.",
    workHeading:
      "Ausgewählte Ergebnisse, die unter Hochdruck entstanden.",
    workIntro:
      "Die Kontexte wechseln. Das Muster bleibt: das schwierige Problem verständlich machen, das richtige System bauen und in Entscheidungsgeschwindigkeit liefern.",
    work: [
      {
        title: "Samsung",
        text: "In 8 Tagen ein B2B-Assistant-Konzept für 7.200 deutsche Stores entwickelt—von der Use-Case-Logik bis zum Umsetzungssystem.",
      },
      {
        title: "Commerzbank · 360X",
        text: "In 2 Wochen eine Venture-Website gelauncht; Formulierungen auf BaFin- und Deutsche-Börse-Stakeholder abgestimmt.",
      },
      {
        title: "Berliner Gastronomie",
        text: "Zero-CAPEX-Livestream-Lösung entwickelt, die einen Nightlife-Mittelständler handlungsfähig hielt und im Lockdown 35 Arbeitsplätze sicherte.",
      },
      {
        title: "COBI",
        text: "Eine Connected-Bike-Idee über Kickstarter, 13 Märkte und 250+ Presseberichte bis auf den Weg zur Bosch-Übernahme begleitet.",
      },
      {
        title: "RevOps-Automatisierung",
        text: "Ein KI-basiertes Intake-System mit n8n, Claude und Pipedrive gebaut: Reaktionszeit von 3–5 Tagen auf 19 Minuten gesenkt, täglich rund 150 E-Mails für €0,50 bei 98 % Genauigkeit bearbeitet und dem CEO volle Pipeline-Transparenz verschafft.",
      },
      {
        title: "KI-Systeme",
        text: "Prompt-Architekturen, Evaluationsschranken und Retrieval-Systeme für überprüfbare Ergebnisse entwickelt.",
      },
    ],
    engagementHeading:
      "Drei Arten der Zusammenarbeit. Unendlich flexibel anpassbar.",
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
    closingTitle:
      "Bringen Sie mir Probleme, die andere weder begreifen, strukturieren noch lösen können.",
    closingText:
      "Ein kurzes Gespräch reicht, um Engpass, Tragweite und die passende Form der Zusammenarbeit zu klären.",
  },
  educate: {
    slug: "educate",
    pairSlug: "fortbilden",
    language: "en",
    label: "EDUCATE",
    eyebrow: "EDUCATE · APPLIED AI LITERACY",
    title: "Transform AI confusion into your supercharged advantage.",
    intro:
      "Role-specific learning for leaders, teams and families—translated into useful workflows, shared language and a roadmap people can act on.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Education_Family.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Business_Meeting.jpg",
    playlistId: "PLHtF5eYRujpY",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-EDUCATE.jpeg",
    proof: [
      {
        value: "Proven at scale",
        label: "More than 200 keynotes and workshops.",
      },
      {
        value: "Clear at every level",
        label: "Complex ideas explained across five levels.",
      },
      {
        value: "Built for action",
        label: "Clear 30/60/90-day capability roadmaps.",
      },
      {
        value: "Native in both languages",
        label: "Native delivery in German and English.",
      },
    ],
    capabilityHeading: "Eliminate your drudgery. And leverage your knowledge.",
    capabilityIntro:
      "I meet every audience at its real starting point, remove status games and make the next useful action obvious.",
    capabilities: [
      {
        title: "C-suite 1:1",
        text: "Private briefings for decisions, risk, opportunity and the questions leaders cannot delegate.",
      },
      {
        title: "Role-based team tracks",
        text: "Marketing, HR, product, operations and creative teams learn with examples from their actual work.",
      },
      {
        title: "Organisation roadmaps",
        text: "A shared capability model, priorities and a practical 30/60/90-day path.",
      },
      {
        title: "Hands-on workflows",
        text: "People leave having built something they can use the next morning.",
      },
      {
        title: "Prompt libraries",
        text: "Reusable patterns, evaluation criteria and guardrails instead of one-off tricks.",
      },
      {
        title: "Accessible by design",
        text: "From baby to boomer, neurodiverse teams to expert rooms: complexity without exclusion.",
      },
    ],
    editorialKicker: "THE LEARNING PRINCIPLE",
    editorialTitle:
      "Upskill at any AI level. Practise with relevant, smart and creative use cases.",
    editorialText:
      "The objective is not excitement about a tool. It is independent judgment: knowing when AI helps, how to test it and when to stop.",
    workHeading: "Tailor-made education that suits you best.",
    workIntro:
      "One method, adapted to the decision rights, incentives and baseline knowledge of each audience.",
    work: [
      {
        title: "Leadership",
        text: "C-suite briefings that connect technical reality to strategy, governance and investment.",
      },
      {
        title: "Teams",
        text: "Role-based sessions with workflows, prompts and quality gates grounded in daily work.",
      },
      {
        title: "Organisations",
        text: "Capability maps and roadmaps that turn isolated experiments into a coherent operating model.",
      },
      {
        title: "Schools & families",
        text: "Clear, age-aware guidance for using AI without surrendering curiosity, judgment or agency.",
      },
    ],
    engagementHeading:
      "Pick a format. Or let’s create a new one just for you.",
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
    closingTitle: "You define the capabilities. I upskill your teams.",
    closingText:
      "Tell me who is in the room, what must change afterwards and where the current friction sits.",
  },
  fortbilden: {
    slug: "fortbilden",
    pairSlug: "educate",
    language: "de",
    label: "FORTBILDEN",
    eyebrow: "FORTBILDEN · ANGEWANDTE KI-KOMPETENZ",
    title:
      "Verwandeln Sie KI-Verwirrung in Ihren Wettbewerbsvorteil. Mit Fortbildungen nach Maß.",
    intro:
      "Rollenspezifische Weiterbildung für Führungskräfte, Teams und Familien—übersetzt in nützliche Workflows, eine gemeinsame Sprache und einen umsetzbaren Fahrplan.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Education_Family.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Business_Meeting.jpg",
    playlistId: "PLHtF5eYRujpY",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-FORTBILDEN.jpeg",
    proof: [
      {
        value: "Vielfach bewährt",
        label: "Mehr als 200 Keynotes und Workshops.",
      },
      {
        value: "Klar auf jedem Niveau",
        label: "Komplexe Inhalte auf fünf Ebenen erklärt.",
      },
      {
        value: "Für die Praxis gebaut",
        label: "Klare 30/60/90-Tage-Kompetenzfahrpläne.",
      },
      {
        value: "In beiden Sprachen zu Hause",
        label: "Native Vermittlung auf Deutsch und Englisch.",
      },
    ],
    capabilityHeading:
      "Befreien Sie sich von unnötiger Arbeit. Und profitieren Sie von Ihrem Erfahrungsschatz.",
    capabilityIntro:
      "Ich hole jede Zielgruppe an ihrem tatsächlichen Ausgangspunkt ab, nehme Statusspiele aus dem Raum und mache den nächsten sinnvollen Schritt klar.",
    capabilities: [
      {
        title: "C-Suite 1:1",
        text: "Vertrauliche Briefings zu Entscheidungen, Risiken, Chancen und Fragen, die Führungskräfte nicht delegieren können.",
      },
      {
        title: "Rollenbasierte Team-Tracks",
        text: "Marketing, HR, Produkt, Operations und Kreation lernen an Beispielen aus ihrer echten Arbeit.",
      },
      {
        title: "Organisations-Roadmaps",
        text: "Ein gemeinsames Kompetenzmodell, klare Prioritäten und ein praktischer 30/60/90-Tage-Pfad.",
      },
      {
        title: "Hands-on-Workflows",
        text: "Menschen verlassen den Raum mit etwas, das sie am nächsten Morgen einsetzen können.",
      },
      {
        title: "Prompt-Bibliotheken",
        text: "Wiederverwendbare Muster, Bewertungskriterien und Leitplanken statt einmaliger Tricks.",
      },
      {
        title: "Zugänglich konzipiert",
        text: "Vom Baby bis zum Boomer, neurodiverse Teams bis zum Expertenkreis: Komplexität ohne Ausschluss.",
      },
    ],
    editorialKicker: "DAS LERNPRINZIP",
    editorialTitle:
      "Verbessern Sie Ihre KI-Skills. Mit relevanten, smarten und kreativen Übungen.",
    editorialText:
      "Das Ziel ist keine Begeisterung für ein Tool. Das Ziel ist unabhängige Urteilskraft: wissen, wann KI hilft, wie man sie prüft und wann man stoppt.",
    workHeading:
      "Fortbildungen nach Maß. Für CEOs, ICs, Teams, Teens, Eltern, Lehrkräfte und n00bs.",
    workIntro:
      "Eine Methode, angepasst an Entscheidungsrechte, Anreize und Wissensstand der jeweiligen Zielgruppe.",
    work: [
      {
        title: "Führung",
        text: "C-Suite-Briefings, die technische Realität mit Strategie, Governance und Investitionen verbinden.",
      },
      {
        title: "Teams",
        text: "Rollenbasierte Sessions mit Workflows, Prompts und Qualitätskontrollen aus dem Arbeitsalltag.",
      },
      {
        title: "Organisationen",
        text: "Kompetenzmodelle und Roadmaps, die einzelne Experimente in ein schlüssiges Betriebsmodell überführen.",
      },
      {
        title: "Schulen & Familien",
        text: "Klare, altersgerechte Orientierung für KI-Nutzung ohne Verlust von Neugier, Urteilskraft oder Selbstbestimmung.",
      },
    ],
    engagementHeading:
      "Drei Formatvorschläge. Unendlich viele Optionen.",
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
    closingTitle:
      "Sie definieren die Fähigkeiten. Ich upskille Ihre Teams.",
    closingText:
      "Sagen Sie mir, wer im Raum sitzt, was sich danach ändern muss und wo die aktuelle Reibung liegt.",
  },
  create: {
    slug: "create",
    pairSlug: "entwickeln",
    language: "en",
    label: "CREATE",
    eyebrow: "CREATE · MULTIMEDIA SYSTEMS",
    title:
      "Book me as a creative director, strategist, writer, coder or multimedia producer. Or all five in one.",
    intro:
      "Creative direction and reusable AI production systems for high-impact multimedia—built around the audience, the channel and the result.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Multimedia.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Sci-Fi_Steampunk_Device.jpg",
    playlistId: "PLIlY05RIg36c",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-CREATE.jpeg",
    proof: [
      {
        value: "Decades of craft",
        label: "More than 25 years of creative practice.",
      },
      {
        value: "Award-winning",
        label: "24 international creative awards.",
      },
      {
        value: "Proven in practice",
        label: "More than 350 completed engagements.",
      },
      {
        value: "Trusted across Europe",
        label: "Work for more than 150 European brands.",
      },
    ],
    capabilityHeading:
      "Turn ideas into images, films, songs, apps and websites. For more fans, customers and revenue.",
    capabilityIntro:
      "I combine concept, direction, generation and quality control so every asset belongs to the same visual and strategic universe.",
    capabilities: [
      {
        title: "AI images",
        text: "Art direction, prompt architecture and final selection for images with intention—not visual noise.",
      },
      {
        title: "AI films",
        text: "Concept, storyboard, shot generation, edit logic and sound designed as one narrative system.",
      },
      {
        title: "AI music",
        text: "Original sonic directions, lyrical concepts and production briefs aligned to audience and use.",
      },
      {
        title: "Production pipelines",
        text: "Prompt-optimised workflows that preserve character, tone and quality across many outputs.",
      },
      {
        title: "Campaign content",
        text: "A coherent family of assets designed for the formats and moments that matter.",
      },
      {
        title: "Direction + transfer",
        text: "Making-of logic, reusable templates and a clean handover so the capability remains.",
      },
    ],
    editorialKicker: "THE CREATIVE PRINCIPLE",
    editorialTitle:
      "Invest in world-class creative assets because AI slop exists in abundance.",
    editorialText:
      "The tool is never the idea. Every choice—frame, rhythm, texture, voice—must strengthen what the audience should feel, understand or do next.",
    workHeading:
      "Order anything: individual assets, 360° campaigns and end-to-end AI production pipelines.",
    workIntro:
      "The output can be one decisive piece or a repeatable system. In both cases, the standard is the same: distinct, coherent and useful.",
    work: [
      {
        title: "Visual worlds",
        text: "A defined image language with repeatable composition, light, material and character rules.",
      },
      {
        title: "Film systems",
        text: "Shot logic and editorial rhythm that connect generated scenes into a purposeful whole.",
      },
      {
        title: "Sonic identity",
        text: "Music and sound directions that reinforce the emotional job of the communication.",
      },
      {
        title: "GTM content",
        text: "Modular assets mapped to audience, channel, funnel moment and production reality.",
      },
    ],
    engagementHeading:
      "Three client favourites. Many more to be defined together.",
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
    closingTitle: "Name your idea. And desired audience.",
    closingText:
      "We will establish the one thing the work must make people feel, understand or do.",
  },
  entwickeln: {
    slug: "entwickeln",
    pairSlug: "create",
    language: "de",
    label: "ENTWICKELN",
    eyebrow: "ENTWICKELN · MULTIMEDIA-SYSTEME",
    title:
      "Beauftragen Sie mich als Kreativdirektor, Strategen, Texter, Programmierer oder Multimedia-Designer. Oder alles in einer Person.",
    intro:
      "Kreativdirektion und wiederverwendbare KI-Produktionssysteme für wirkungsvolle Multimedia-Inhalte—gebaut um Zielgruppe, Kanal und Ergebnis.",
    heroImage:
      "/images/EliasKouloures-Com_Background_Image_Multimedia.jpg",
    editorialImage:
      "/images/EliasKouloures-Com_Background_Image_Sci-Fi_Steampunk_Device.jpg",
    playlistId: "PLIlY05RIg36c",
    playlistThumbnail:
      "/images/youtube-playlists/EliasKoulouresCom_YouTube_Playlist_Thumbnail-ENTWICKELN.jpeg",
    proof: [
      {
        value: "Jahrzehntelange Erfahrung",
        label: "Mehr als 25 Jahre kreative Praxis.",
      },
      {
        value: "Preisgekrönt",
        label: "24 internationale Kreativ-Awards.",
      },
      {
        value: "Vielfach bewährt",
        label: "Mehr als 350 abgeschlossene Mandate.",
      },
      {
        value: "Europaweit vertraut",
        label: "Arbeit für mehr als 150 europäische Marken.",
      },
    ],
    capabilityHeading:
      "Verwandeln Sie Ihre Ideen in Bilder, Filme, Lieder, Apps und Websites. Für mehr Fans, Kunden und Umsatz.",
    capabilityIntro:
      "Ich verbinde Konzept, Direktion, Generierung und Qualitätskontrolle, damit jedes Asset zum selben visuellen und strategischen Universum gehört.",
    capabilities: [
      {
        title: "KI-Bilder",
        text: "Art Direction, Prompt-Architektur und finale Auswahl für Bilder mit Absicht—statt visuellem Rauschen.",
      },
      {
        title: "KI-Filme",
        text: "Konzept, Storyboard, Shot-Generierung, Schnittlogik und Sound als ein zusammenhängendes Erzählsystem.",
      },
      {
        title: "KI-Musik",
        text: "Originäre Klangrichtungen, Textkonzepte und Produktionsbriefings passend zu Zielgruppe und Einsatz.",
      },
      {
        title: "Produktionspipelines",
        text: "Prompt-optimierte Workflows, die Charakter, Tonalität und Qualität über viele Outputs hinweg sichern.",
      },
      {
        title: "Kampagnen-Content",
        text: "Eine zusammenhängende Asset-Familie für die Formate und Momente, die zählen.",
      },
      {
        title: "Direktion + Transfer",
        text: "Making-of-Logik, wiederverwendbare Vorlagen und saubere Übergabe, damit die Fähigkeit bleibt.",
      },
    ],
    editorialKicker: "DAS KREATIVPRINZIP",
    editorialTitle:
      "Investieren Sie in Weltklasse-Kreativität, weil KI-Müll kann jeder.",
    editorialText:
      "Das Tool ist niemals die Idee. Jede Entscheidung—Bild, Rhythmus, Textur, Stimme—muss verstärken, was die Zielgruppe fühlen, verstehen oder als Nächstes tun soll.",
    workHeading:
      "Alles bestellbar: einzelne Assets, 360°-Kampagnen und End-to-End-KI-Produktionspipelines.",
    workIntro:
      "Das Ergebnis kann ein entscheidendes Einzelstück oder ein wiederholbares System sein. Der Maßstab bleibt: eigenständig, kohärent und nützlich.",
    work: [
      {
        title: "Visuelle Welten",
        text: "Eine definierte Bildsprache mit wiederholbaren Regeln für Komposition, Licht, Material und Charakter.",
      },
      {
        title: "Filmsysteme",
        text: "Shot-Logik und Schnittrhythmus, die generierte Szenen zu einem sinnvollen Ganzen verbinden.",
      },
      {
        title: "Klangidentität",
        text: "Musik- und Soundrichtungen, die die emotionale Aufgabe der Kommunikation verstärken.",
      },
      {
        title: "GTM-Content",
        text: "Modulare Assets, abgestimmt auf Zielgruppe, Kanal, Funnel-Moment und Produktionsrealität.",
      },
    ],
    engagementHeading:
      "Drei Kundenfavoriten. Viele weitere definieren wir gemeinsam.",
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
    closingTitle: "Nennen Sie Ihre Idee. Und Wunschzielgruppe.",
    closingText:
      "Wir klären die eine Sache, die die Arbeit Menschen fühlen, verstehen oder als Nächstes tun lassen muss.",
  },
};

export type LandingCard = {
  index: string;
  label: string;
  slug: string;
  lang: "EN" | "DE";
  text: string;
};

export type LandingStack = {
  lang: Language;
  langLabel: "EN" | "DE";
  /** Rendered above the German stack only; the H1 heads the English stack. */
  heading?: string;
  cards: LandingCard[];
};

export const landingStacks: LandingStack[] = [
  {
    lang: "en",
    langLabel: "EN",
    cards: [
      {
        index: "01",
        label: "SOLVE",
        slug: "solve",
        lang: "EN",
        text: "Urgent, complex problems with no playbook. First-principles diagnosis and evidence-traced solutions for EU and German realities.",
      },
      {
        index: "02",
        label: "EDUCATE",
        slug: "educate",
        lang: "EN",
        text: "Role-based upskilling, C-suite briefings and actionable roadmaps. Practical workflows for tomorrow’s AI world.",
      },
      {
        index: "03",
        label: "CREATE",
        slug: "create",
        lang: "EN",
        text: "High-impact multimedia, creative direction and go-to-market systems that turn AI tools into useful attention.",
      },
    ],
  },
  {
    lang: "de",
    langLabel: "DE",
    heading: "Wie kann ich Ihnen helfen?",
    cards: [
      {
        index: "01",
        label: "LÖSEN",
        slug: "loesen",
        lang: "DE",
        text: "Dringende, komplexe Probleme ohne Anleitung. Erstprinzipien-Diagnose und nachweisbare Lösungen für Deutschland und die EU.",
      },
      {
        index: "02",
        label: "FORTBILDEN",
        slug: "fortbilden",
        lang: "DE",
        text: "Rollenbasierte Weiterbildung, C-Suite-Briefings und umsetzbare Roadmaps für eine handlungsfähige KI-Zukunft.",
      },
      {
        index: "03",
        label: "ENTWICKELN",
        slug: "entwickeln",
        lang: "DE",
        text: "Wirkungsvolle Multimedia-Inhalte, Kreativdirektion und Go-to-Market-Systeme für Aufmerksamkeit mit Substanz.",
      },
    ],
  },
];

/** Flat view retained for sitemap, markdown endpoints and tests. */
export const landingCards: LandingCard[] = landingStacks.flatMap(
  (stack) => stack.cards,
);

/** Landing-page social proof: two English, two German. */
export const landingTestimonials = {
  en: ["tom-acland", "crn"],
  de: ["kerstin-putschke", "bastian-beggel"],
} as const;
