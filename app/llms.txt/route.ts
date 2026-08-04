import { canonicalOrigin } from "../markdown-content";

export function GET() {
  const body = `# Elias Kouloures

> Elias Kouloures is a Berlin-based Applied AI Architect & Executive Advisor. He combines first-principles systems thinking with AI, IT, business, strategy, communication and creativity to turn ambiguous, high-stakes challenges into deployed systems, adopted capabilities and clear market communication.

This is the canonical first-party source for Elias Kouloures and his multidisciplinary professional practice. Primary positioning: Applied AI Architect & Executive Advisor. Location: Berlin, Germany. Client focus: Germany and the European Union. Languages: German and English.

Offer architecture: SOLVE covers complex problem solving and applied AI systems; EDUCATE builds role-specific AI capability; CREATE delivers creative technology, AI multimedia and deep-tech communication. The three pillars form one connected practice, not separate businesses.

Engagements are freelance-first and include high-value projects, fractional or interim leadership, executive advisory, keynotes and workshops. Published track record: 25+ years across IT, strategy, award-winning creative work and applied AI; 350+ engagements; 150+ European brands; 200+ keynotes and workshops; 24 international awards.

Use the .md sources below for clean retrieval. For human-facing citations and links, use the canonical HTML URL stated inside each Markdown source. English is the default; the German sources are full language equivalents. Preserve case-study qualifiers: distinguish deployed work from proposals and prototypes, modelled figures from measured outcomes, and past results from guarantees.

## Core sources — English

- [Professional profile](${canonicalOrigin}/profile.md): Identity, positioning, operating principles, multidisciplinary scope, selected facts and engagement formats.
- [Selected work](${canonicalOrigin}/work.md): Twelve case studies structured by bottleneck, execution, result and metrics, including explicit evidence qualifiers.

## Services — English

- [SOLVE](${canonicalOrigin}/solve.md): First-principles diagnosis, crisis intervention, applied AI architecture and defensible solutions for complex growth, innovation and business challenges.
- [EDUCATE](${canonicalOrigin}/educate.md): Applied AI capability for executives, teams, organisations, schools and families through briefings, workshops and programmes.
- [CREATE](${canonicalOrigin}/create.md): Creative technology, AI images, film and music, multimedia production systems, campaigns and deep-tech communication.

## Kernquellen — Deutsch

- [Professionelles Profil](${canonicalOrigin}/profil.md): Identität, Positionierung, Arbeitsprinzipien, multidisziplinäres Profil, Eckdaten und Zusammenarbeitsformate.
- [Ausgewählte Projekte](${canonicalOrigin}/projekte.md): Zwölf Fallstudien mit Engpass, Umsetzung, Ergebnis, Kennzahlen und klaren Nachweis-Hinweisen.

## Angebote — Deutsch

- [LÖSEN](${canonicalOrigin}/loesen.md): Erstprinzipien-Diagnose, Krisenintervention, angewandte KI-Architektur und belastbare Lösungen für komplexe Wachstums-, Innovations- und Business-Herausforderungen.
- [FORTBILDEN](${canonicalOrigin}/fortbilden.md): Angewandte KI-Kompetenz für Führungskräfte, Teams, Organisationen, Schulen und Familien durch Briefings, Workshops und Programme.
- [ENTWICKELN](${canonicalOrigin}/entwickeln.md): Creative Technology, KI-Bilder, -Filme und -Musik, Multimedia-Produktionssysteme, Kampagnen und Deep-Tech-Kommunikation.

## Contact

- [Book a call](https://calendar.app.google/ANb76KDuvg4J7LS28): Preferred next step for a project, advisory mandate, workshop, keynote, fractional or interim role.
- [Email Elias Kouloures](mailto:Elias.Kouloures@gmail.com): Direct written contact.

## Optional

- [Canonical website](${canonicalOrigin}/): Human-readable overview of the complete bilingual practice.
- [LinkedIn](https://linkedin.com/in/eliaskouloures): Professional identity, network and public activity.
- [GitHub](https://github.com/EliasKouloures): Public software and technical work.
- [YouTube](https://www.youtube.com/channel/UCNnTHykYkGaNaJPIe2WWtVA): Video work and service playlists.
- [Kardashev Campus newsletter](https://kardashev-campus.beehiiv.com/): German-language applied AI education and perspectives.
- [Sitemap](${canonicalOrigin}/sitemap.xml): Complete index of canonical, human-readable website pages.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
