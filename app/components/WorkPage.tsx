import type { CSSProperties } from "react";
import Link from "next/link";
import { caseStudies } from "../authority-data";
import { contact, type Language } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TestimonialGrid } from "./TestimonialGrid";

type WorkPageProps = {
  language: Language;
};

const HERO_BASE =
  "/images/EliasKouloures-Com_Background_Image_Person_Sci-Fi_Holograms";

function imageSet(base: string): string {
  return `image-set(url("${base}.avif") type("image/avif"), url("${base}.webp") type("image/webp"), url("${base}.jpg") type("image/jpeg"))`;
}

const heroStyle = {
  "--section-image": `url("${HERO_BASE}.jpg")`,
  "--section-mobile-image": `url("${HERO_BASE}_mobile.jpg")`,
  "--section-image-set": imageSet(HERO_BASE),
  "--section-mobile-image-set": imageSet(`${HERO_BASE}_mobile`),
} as CSSProperties;

export function WorkPage({ language }: WorkPageProps) {
  const isGerman = language === "de";

  return (
    <main className="work-page" lang={language}>
      <SiteHeader
        language={language}
        pairSlug={isGerman ? "work" : "projekte"}
      />

      <section className="work-hero image-section" style={heroStyle}>
        <div className="shell">
          <p className="eyebrow">
            {isGerman ? "AUSGEWÄHLTE PROJEKTE" : "SELECTED WORK"}
          </p>
          <h1>
            {isGerman
              ? "Ich löse Herausforderungen mit Systemdenken, Kreativität und KI."
              : "I solve challenges with systems thinking, creativity & AI."}
          </h1>
          <p>
            {isGerman
              ? "12 vielschichtige Projekte. Eine bewährte Methode: den echten Engpass offenlegen, nach Erstprinzipien bauen und Wirkung messbar machen."
              : "12 multifaceted cases. One proven method: expose the real constraint, build from first principles and make the outcome measurable."}
          </p>
          <nav className="case-index" aria-label={isGerman ? "Projektübersicht" : "Case study index"}>
            {caseStudies.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                {item.client}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="case-study-list">
        {caseStudies.map((item, index) => (
          <article className="case-study" id={item.id} key={item.id}>
            <div className="shell case-study-grid">
              <header>
                <p className="eyebrow">
                  {String(index + 1).padStart(2, "0")} · {item.client}
                </p>
                <p className="case-domain">{item.domain[language]}</p>
                <h2>{item.title[language]}</h2>
                <div className="case-pillars">
                  {item.pillars.map((pillar) => (
                    <span key={pillar}>{pillar}</span>
                  ))}
                </div>
              </header>
              <div className="case-narrative">
                <section>
                  <h3>{isGerman ? "Der Engpass" : "The bottleneck"}</h3>
                  <p>{item.bottleneck[language]}</p>
                </section>
                <section>
                  <h3>{isGerman ? "Die Umsetzung" : "The execution"}</h3>
                  <p>{item.execution[language]}</p>
                </section>
                <section>
                  <h3>{isGerman ? "Das Ergebnis" : "The result"}</h3>
                  <p>{item.result[language]}</p>
                </section>
              </div>
              <ul className="case-metrics" aria-label={isGerman ? "Kennzahlen" : "Key results"}>
                {item.metrics[language].map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="content-section testimonial-section">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">
              {isGerman ? "BELEGE AUS DER ZUSAMMENARBEIT" : "EVIDENCE FROM THE WORK"}
            </p>
            <h2>
              {isGerman
                ? "Vielfältige Herausforderungen. Einstimmiges Vertrauen."
                : "Multifaceted challenges. Single-minded trust."}
            </h2>
          </div>
          <TestimonialGrid
            ids={["crn", "heiner-wankel", "jack-mamais"]}
            language={language}
          />
        </div>
      </section>

      <section className="work-closing">
        <div className="shell work-closing-grid">
          <div>
            <p className="eyebrow">
              {isGerman ? "IHRE HERAUSFORDERUNG" : "YOUR CHALLENGE"}
            </p>
            <h2>
              {isGerman
                ? "Es gibt kein Handbuch für Ihr Projekt? Lassen Sie uns zusammen etwas Großartiges bauen."
                : "Your project has no playbook? Let’s build something great together."}
            </h2>
          </div>
          <div className="hero-actions">
            <a
              className="button"
              data-event="book_call_click"
              data-event-label="Work closing"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              className="button button-secondary"
              data-event="brief_open"
              data-event-label="Work to brief"
              href="/#brief"
            >
              {isGerman ? "Projekt beschreiben" : "Brief me"}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter language={language} />
    </main>
  );
}
