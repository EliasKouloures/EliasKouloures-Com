import type { CSSProperties } from "react";
import Link from "next/link";
import { contact, type Language } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TestimonialGrid } from "./TestimonialGrid";

type ProfilePageProps = {
  language: Language;
};

const heroStyle = {
  "--section-image":
    'url("/images/EliasKouloures-Com_Background_Image_Person_overlooking_Landscape.jpg")',
  "--section-mobile-image":
    'url("/images/EliasKouloures-Com_Background_Image_Person_overlooking_Landscape_mobile.jpg")',
} as CSSProperties;

export function ProfilePage({ language }: ProfilePageProps) {
  const isGerman = language === "de";
  const pairSlug = isGerman ? "profile" : "profil";

  return (
    <main className="authority-page" lang={language}>
      <SiteHeader language={language} pairSlug={pairSlug} />

      <section className="authority-hero image-section" style={heroStyle}>
        <div className="shell authority-hero-inner">
          <p className="eyebrow">
            {isGerman
              ? "ARCHITEKT FÜR ANGEWANDTE KI · EXECUTIVE ADVISOR"
              : "APPLIED AI ARCHITECT · EXECUTIVE ADVISOR"}
          </p>
          <h1>
            {isGerman
              ? "Berater und Architekt für angewandte KI-Transformation."
              : "Applied AI Architect & Executive Advisor."}
          </h1>
          <p className="authority-lede">
            {isGerman
              ? "Ich verwandle komplexe, risikoreiche KI- und Business-Herausforderungen in funktionierende Systeme, gelebte Kompetenz und klare Marktkommunikation."
              : "I turn ambiguous, high-stakes AI and business challenges into deployed systems, adopted capabilities and clear market communication."}
          </p>
          <div className="hero-actions">
            <a
              className="button"
              data-event="book_call_click"
              data-event-label="Profile hero"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              className="button button-secondary"
              data-event="case_open"
              data-event-label="Profile to selected work"
              href={isGerman ? "/projekte" : "/work"}
            >
              {isGerman ? "Ausgewählte Projekte" : "Selected work"}
            </Link>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label={isGerman ? "Eckdaten" : "Selected facts"}>
        <div className="shell proof-grid authority-proof">
          <div className="proof-item">
            <strong>~300</strong>
            <span>{isGerman ? "Mandate und Projekte" : "Engagements and projects"}</span>
          </div>
          <div className="proof-item">
            <strong>150+</strong>
            <span>{isGerman ? "europäische Marken" : "European brands"}</span>
          </div>
          <div className="proof-item">
            <strong>150+</strong>
            <span>{isGerman ? "Keynotes und Workshops" : "Keynotes and workshops"}</span>
          </div>
          <div className="proof-item">
            <strong>24</strong>
            <span>{isGerman ? "internationale Awards" : "international awards"}</span>
          </div>
        </div>
      </section>

      <section className="content-section north-star-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">WHY · HOW · WHAT</p>
            <h2>
              {isGerman
                ? "Technologie wird erst wertvoll, wenn Menschen mit ihr weiterkommen."
                : "Technology becomes valuable when people can move forward with it."}
            </h2>
          </div>
          <div className="north-star-grid">
            <article>
              <span>WHY</span>
              <h3>{isGerman ? "Fortschritt nutzbar machen" : "Make progress usable"}</h3>
              <p>
                {isGerman
                  ? "Fortschritt soll Menschen befähigen statt sie zu überrollen. Ich arbeite an Systemen, Wissen und Kommunikation, die Selbstbestimmung und sinnvolle Innovation verbinden."
                  : "Progress should expand human agency rather than overwhelm it. I work on systems, knowledge and communication that connect useful innovation with independent judgment."}
              </p>
            </article>
            <article>
              <span>HOW</span>
              <h3>{isGerman ? "Struktur sehen, wo andere Chaos sehen" : "See structure where others see chaos"}</h3>
              <p>
                {isGerman
                  ? "Erstprinzipien, Systemdenken und globale Erfahrung verbinden sich mit KI, IT, Business, Strategie, Kommunikation und Kreativität."
                  : "First-principles and systems thinking combine with global experience across AI, IT, business, strategy, communication and creativity."}
              </p>
            </article>
            <article>
              <span>WHAT</span>
              <h3>SOLVE / EDUCATE / CREATE</h3>
              <p>
                {isGerman
                  ? "Komplexe Probleme lösen. Menschen für angewandte KI fortbilden. Technische Ideen so entwickeln und kommunizieren, dass sie verstanden und genutzt werden."
                  : "Solve complex problems. Build applied AI capability. Develop and communicate technical ideas so they are understood, trusted and used."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="profile-visual-section">
        <div className="shell profile-visual-grid">
          <div>
            <p className="eyebrow">
              {isGerman ? "EIN PROFIL · DREI WIRKUNGSFELDER" : "ONE PROFILE · THREE FORMS OF IMPACT"}
            </p>
            <h2>
              {isGerman
                ? "Multidisziplinär ist kein Zusatz. Es ist das Betriebssystem."
                : "Multidisciplinary is not an add-on. It is the operating system."}
            </h2>
            <p>
              {isGerman
                ? "Die seltene Kombination aus Technologie, Business, Kommunikation und Kreation verkürzt Übergaben, macht blinde Flecken sichtbar und hält Strategie und Ausführung zusammen."
                : "The combination of technology, business, communication and creativity shortens handoffs, exposes blind spots and keeps strategy connected to execution."}
            </p>
          </div>
          {/* Elias owns this keynote visual; the HTML beside it carries the same meaning accessibly. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={
              isGerman
                ? "Elias Kouloures Why-How-What: Mission, multidisziplinäre Arbeitsweise und die drei Bereiche Lösen, Fortbilden und Entwickeln."
                : "Elias Kouloures Why-How-What: mission, multidisciplinary operating method, and the three pillars Solve, Educate and Create."
            }
            loading="lazy"
            src="/images/Elias_WHW-Kardashev_07-2026_V1.jpg"
            srcSet="/images/Elias_WHW-Kardashev_07-2026_V1_mobile.jpg 1200w, /images/Elias_WHW-Kardashev_07-2026_V1.jpg 2752w"
            sizes="(max-width: 1080px) 92vw, 58vw"
          />
        </div>
      </section>

      <section className="content-section role-fit-section">
        <div className="shell role-fit-grid">
          <div className="section-heading">
            <p className="eyebrow">
              {isGerman ? "ZUSAMMENARBEIT" : "WAYS TO WORK TOGETHER"}
            </p>
            <h2>
              {isGerman
                ? "Freelance zuerst. Offen für außergewöhnliche Missionen."
                : "Freelance first. Open to exceptional missions."}
            </h2>
            <p>
              {isGerman
                ? "Berlin-basiert, DACH- und EU-fokussiert, nativ auf Deutsch und Englisch. Verfügbar für hochwertige Projekte, Fractional- und Interim-Rollen sowie Keynotes und Workshops."
                : "Berlin-based, DACH- and EU-focused, native in German and English. Available for high-value projects, fractional and interim leadership, keynotes and workshops."}
            </p>
          </div>
          <div className="role-fit-panel">
            <h3>
              {isGerman
                ? "Auch offen für eine außergewöhnliche Festanstellung"
                : "Also open to an exceptional permanent role"}
            </h3>
            <p>
              {isGerman
                ? "Wenn ein KI-Labor oder Unternehmen angewandte KI wirklich ernst nimmt und multidisziplinäre Umsetzung auf höchstem Niveau braucht."
                : "When an AI lab or company takes applied AI seriously and needs multidisciplinary execution at the highest level."}
            </p>
            <div className="role-tags" aria-label={isGerman ? "Passende Rollen" : "Relevant roles"}>
              <span>Applied AI Architect</span>
              <span>AI Transformation Lead</span>
              <span>Technical Deployment Lead</span>
              <span>Fractional Chief AI Officer</span>
              <span>AI Enablement Lead</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section credentials-section" id="credentials">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">
              {isGerman ? "AUSGEWÄHLTE KONTEXTE" : "SELECTED CONTEXTS"}
            </p>
            <h2>
              {isGerman
                ? "Von Enterprise und EU-Projekten bis zu Start-ups und Bildung."
                : "From enterprise and EU programmes to startups and education."}
            </h2>
          </div>
          <div className="wordmark-grid" aria-label={isGerman ? "Ausgewählte Organisationen" : "Selected organisations"}>
            {[
              "SAMSUNG",
              "E.ON",
              "COMMERZBANK · 360X",
              "DATEV",
              "COBI · BOSCH",
              "EU TRANSFORM",
              "WALDORF FUTURE LAB",
            ].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <p className="context-note">
            {isGerman
              ? "Die Zusammenarbeit erfolgte je nach Kontext direkt, über Agenturpartner oder im Rahmen von Konsortien und Veranstaltungen."
              : "Engagements took place directly, through agency partners, or within consortia and events depending on context."}
          </p>
        </div>
      </section>

      <section className="content-section testimonial-section">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">
              {isGerman ? "ÖFFENTLICHE EMPFEHLUNGEN" : "PUBLIC RECOMMENDATIONS"}
            </p>
            <h2>
              {isGerman
                ? "Was Partner über die Zusammenarbeit sagen."
                : "What partners say about the work."}
            </h2>
          </div>
          <TestimonialGrid
            ids={["crn", "bastian-beggel", "jessica-georgi-hey", "jack-mamais", "tom-acland", "sinah-titzmann"]}
            language={language}
          />
        </div>
      </section>

      <section className="authority-closing image-section">
        <div className="shell">
          <p className="eyebrow">
            {isGerman ? "NÄCHSTER SCHRITT" : "NEXT STEP"}
          </p>
          <h2>
            {isGerman
              ? "Bringen Sie die Herausforderung. Wir finden den Engpass."
              : "Bring the challenge. We will find the constraint."}
          </h2>
          <div className="hero-actions">
            <a
              className="button"
              data-event="book_call_click"
              data-event-label="Profile closing"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              data-event="email_click"
              data-event-label="Profile closing"
              href={`mailto:${contact.email}`}
            >
              {isGerman ? "E-Mail senden" : "Email me"}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter language={language} />
    </main>
  );
}
