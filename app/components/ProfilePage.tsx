import type { CSSProperties } from "react";
import Link from "next/link";
import { caseStudies, whyHowWhat } from "../authority-data";
import { contact, type Language } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TestimonialGrid } from "./TestimonialGrid";

type ProfilePageProps = {
  language: Language;
};

const HERO_BASE =
  "/images/EliasKouloures-Com_Background_Image_Person_overlooking_Landscape";

function imageSet(base: string): string {
  return `image-set(url("${base}.avif") type("image/avif"), url("${base}.webp") type("image/webp"), url("${base}.jpg") type("image/jpeg"))`;
}

const heroStyle = {
  "--section-image": `url("${HERO_BASE}.jpg")`,
  "--section-mobile-image": `url("${HERO_BASE}_mobile.jpg")`,
  "--section-image-set": imageSet(HERO_BASE),
  "--section-mobile-image-set": imageSet(`${HERO_BASE}_mobile`),
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
              ? "Berater und Architekt für angewandte KI-Transformation"
              : "Applied AI Architect & Executive Advisor"}
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
            <strong>350+</strong>
            <span>{isGerman ? "Mandate und Projekte" : "Engagements and projects"}</span>
          </div>
          <div className="proof-item">
            <strong>150+</strong>
            <span>{isGerman ? "europäische Marken" : "European brands"}</span>
          </div>
          <div className="proof-item">
            <strong>200+</strong>
            <span>{isGerman ? "Keynotes und Workshops" : "Keynotes and workshops"}</span>
          </div>
          <div className="proof-item">
            <strong>24</strong>
            <span>{isGerman ? "internationale Awards" : "international awards"}</span>
          </div>
        </div>
      </section>

      {/* Why-How-What as structured content, not baked image text: readable at
          every viewport, indexable, translatable, and correctable in one line. */}
      <section className="whw-section" aria-labelledby="whw-heading">
        <div className="shell">
          <div className="whw-head">
            <p className="eyebrow">{whyHowWhat.eyebrow[language]}</p>
            <h2 id="whw-heading">
              {isGerman
                ? "Technologie wird erst wertvoll, wenn Menschen mit ihr weiterkommen."
                : "Technology becomes valuable when people can move forward with it."}
            </h2>
            <p className="whw-note">{whyHowWhat.frameworkNote[language]}</p>
          </div>

          <div className="whw-spine">
            <div className="whw-band whw-band-why">
              <p className="whw-rail">{whyHowWhat.why.label[language]}</p>
              <p className="whw-why-statement">
                {whyHowWhat.why.statement[language]}
              </p>
              <p className="whw-why-qualifier">
                {whyHowWhat.why.qualifier[language]}
              </p>
            </div>

            <span className="whw-link" aria-hidden="true" />

            <div className="whw-band whw-band-how">
              <p className="whw-rail">{whyHowWhat.how.label[language]}</p>
              <p className="whw-how-statement">
                <strong>{whyHowWhat.how.lead[language]}</strong>{" "}
                {whyHowWhat.how.statement[language]}
              </p>
            </div>

            <span className="whw-link" aria-hidden="true" />

            <div className="whw-what">
              <div className="whw-pillars">
                {whyHowWhat.pillars.map((pillar) => (
                  <article className="whw-pillar" key={pillar.index}>
                    <p className="whw-rail">
                      {whyHowWhat.whatLabel[language]}
                    </p>
                    <p className="whw-pillar-rail">
                      {pillar.index}
                      <span aria-hidden="true" />
                      {pillar.label[language]}
                    </p>
                    <h3>{pillar.statement[language]}</h3>
                    <p className="whw-proof-label">
                      {whyHowWhat.proofLabel[language]}
                    </p>
                    <ul className="whw-proof">
                      {pillar.proof.map((item) => (
                        <li key={item.title.en}>
                          <strong>{item.title[language]}</strong>
                          <span>{item.detail[language]}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <p className="whw-slide-link">
            <a
              href="/images/Elias_WHW-Kardashev_2026-07.jpg"
              target="_blank"
              rel="noreferrer"
            >
              {isGerman
                ? "Dieselbe Übersicht als Keynote-Slide ansehen"
                : "View the same overview as a keynote slide"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </p>
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
                ? "Auch offen für eine außergewöhnliche Festanstellung."
                : "Also open to an exceptional permanent role."}
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
          <div className="landing-wordmarks profile-wordmarks" aria-label={isGerman ? "Ausgewählte Organisationen" : "Selected organisations"}>
            {caseStudies.map((item) => (
              <Link href={`/work/#${item.id}`} key={item.id}>
                {item.client}
              </Link>
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
              ? "Bringen Sie Ihre Herausforderung mit. Ich liefere mindestens eine Lösung."
              : "Bring your challenge. I will find at least one solution."}
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
