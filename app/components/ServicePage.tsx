import type { CSSProperties } from "react";
import Link from "next/link";
import { contact, type ServicePageData } from "../site-data";
import { PlaylistGallery } from "./PlaylistGallery";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ServicePageProps = {
  data: ServicePageData;
};

function backgroundStyle(image: string): CSSProperties {
  return { "--section-image": `url("${image}")` } as CSSProperties;
}

export function ServicePage({ data }: ServicePageProps) {
  const isGerman = data.language === "de";

  return (
    <main className="service-page">
      <SiteHeader
        language={data.language}
        pairSlug={data.pairSlug}
      />
      <section
        className="service-hero image-section"
        style={backgroundStyle(data.heroImage)}
      >
        <div className="shell service-hero-content">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="hero-intro">{data.intro}</p>
          <div className="hero-actions">
            <a
              className="button"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={`mailto:${contact.email}`}>
              {isGerman ? "E-Mail senden" : "Email me"}
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#capabilities" aria-label="Scroll to content">
          <span />
          {isGerman ? "MEHR" : "EXPLORE"}
        </a>
      </section>

      <section className="proof-band" aria-label="Selected proof points">
        <div className="shell proof-grid">
          {data.proof.map((item) => (
            <div className="proof-item" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="capabilities">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{data.label}</p>
            <h2>{data.capabilityHeading}</h2>
            <p>{data.capabilityIntro}</p>
          </div>
          <div className="capability-grid">
            {data.capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="editorial image-section"
        style={backgroundStyle(data.editorialImage)}
      >
        <div className="shell editorial-inner">
          <div className="editorial-copy glass-panel">
            <p className="eyebrow">{data.editorialKicker}</p>
            <h2>{data.editorialTitle}</h2>
            <p>{data.editorialText}</p>
          </div>
        </div>
      </section>

      <section className="content-section work-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{isGerman ? "AUS DER PRAXIS" : "FROM THE FIELD"}</p>
            <h2>{data.workHeading}</h2>
            <p>{data.workIntro}</p>
          </div>
          <div className="work-grid">
            {data.work.map((item) => (
              <article className="work-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-section">
        <div className="shell">
          <div className="section-heading compact">
            <p className="eyebrow">{isGerman ? "ZUSAMMENARBEIT" : "ENGAGEMENT"}</p>
            <h2>{data.engagementHeading}</h2>
          </div>
          <div className="engagement-list">
            {data.engagements.map((item) => (
              <article key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <strong>{item.timing}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="playlist-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">YOUTUBE PLAYLIST</p>
            <h2>{data.playlistHeading}</h2>
            <p>{data.playlistIntro}</p>
          </div>
          <PlaylistGallery
            playlistId={data.playlistId}
            language={data.language}
          />
        </div>
      </section>

      <section className="closing-section image-section">
        <div className="shell closing-inner">
          <p className="eyebrow">{isGerman ? "NÄCHSTER SCHRITT" : "NEXT STEP"}</p>
          <h2>{data.closingTitle}</h2>
          <p>{data.closingText}</p>
          <div className="hero-actions">
            <a
              className="button"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          <Link className="back-home" href="/">
            ← {isGerman ? "Zur Übersicht" : "Back to overview"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
