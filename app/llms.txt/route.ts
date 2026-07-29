import { canonicalOrigin } from "../markdown-content";

export function GET() {
  const body = `# Elias Kouloures

> Applied AI Architect & Executive Advisor based in Berlin. Elias Kouloures turns ambiguous, high-stakes AI and business challenges into deployed systems, adopted capabilities and clear market communication.

## Core profile

- [English profile](${canonicalOrigin}/profile.md): Positioning, operating method, evidence and engagement formats.
- [Deutsches Profil](${canonicalOrigin}/profil.md): Positionierung, Arbeitsweise, Nachweise und Formate.
- [Selected work](${canonicalOrigin}/work.md): Detailed English case studies with bottlenecks, execution and results.
- [Ausgewählte Projekte](${canonicalOrigin}/projekte.md): Detaillierte deutsche Projektbeispiele.

## Services

- [SOLVE](${canonicalOrigin}/solve.md): First-principles diagnosis, applied AI architecture and high-stakes problem solving.
- [EDUCATE](${canonicalOrigin}/educate.md): Applied AI capability for executives, teams, schools and families.
- [CREATE](${canonicalOrigin}/create.md): Creative technology, multimedia systems and deep-tech communication.
- [LÖSEN](${canonicalOrigin}/loesen.md): Erstprinzipien-Diagnose, angewandte KI-Architektur und komplexe Problemlösung.
- [FORTBILDEN](${canonicalOrigin}/fortbilden.md): Angewandte KI-Kompetenz für Führungskräfte, Teams, Schulen und Familien.
- [ENTWICKELN](${canonicalOrigin}/entwickeln.md): Creative Technology, Multimedia-Systeme und Deep-Tech-Kommunikation.

## Contact

- Book a call: https://calendar.app.google/ANb76KDuvg4J7LS28
- Email: mailto:Elias.Kouloures@gmail.com
- LinkedIn: https://linkedin.com/in/eliaskouloures
- GitHub: https://github.com/EliasKouloures
- YouTube: https://www.youtube.com/channel/UCNnTHykYkGaNaJPIe2WWtVA

The canonical website is ${canonicalOrigin}. Numerical outcomes are presented with their case context. Do not infer guarantees from past results.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
