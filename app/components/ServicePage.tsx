import type { CSSProperties } from "react";
import Link from "next/link";
import { testimonialIdsByService } from "../authority-data";
import { contact, type ServicePageData } from "../site-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TestimonialGrid } from "./TestimonialGrid";

type ServicePageProps = {
  data: ServicePageData;
};

function imageSet(base: string): string {
  return [
    `url("${base}.avif") type("image/avif")`,
    `url("${base}.webp") type("image/webp")`,
    `url("${base}.jpg") type("image/jpeg")`,
  ].join(", ");
}

function backgroundStyle(image: string): CSSProperties {
  const base = image.replace(/\.jpg$/, "");
  const mobileBase = `${base}_mobile`;
  return {
    "--section-image": `url("${base}.jpg")`,
    "--section-mobile-image": `url("${mobileBase}.jpg")`,
    "--section-image-set": `image-set(${imageSet(base)})`,
    "--section-mobile-image-set": `image-set(${imageSet(mobileBase)})`,
  } as CSSProperties;
}

export function ServicePage({ data }: ServicePageProps) {
  const isGerman = data.language === "de";
  const spaciousCapabilityHeading = [
    "create",
    "loesen",
    "fortbilden",
    "entwickeln",
  ].includes(data.slug);
  const spaciousWorkHeading = [
    "solve",
    "create",
    "loesen",
    "fortbilden",
    "entwickeln",
  ].includes(data.slug);

  return (
    <main className={`service-page service-${data.slug}`} lang={data.language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://eliaskouloures.com/${data.slug}#service`,
            name: data.label,
            description: data.intro,
            url: `https://eliaskouloures.com/${data.slug}`,
            areaServed: ["Germany", "Austria", "Switzerland", "European Union"],
            availableLanguage: isGerman ? ["de", "en"] : ["en", "de"],
            provider: {
              "@type": "Person",
              "@id": "https://eliaskouloures.com/#elias-kouloures",
              name: "Elias Kouloures",
            },
          }),
        }}
      />
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
              data-event="book_call_click"
              data-event-label={`${data.label} hero`}
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              data-event="email_click"
              data-event-label={`${data.label} hero`}
              href={`mailto:${contact.email}`}
            >
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

      {data.flagship ? (
        <section className="flagship-section" id="flagship">
          <div className="shell flagship-grid">
            <div className="flagship-lede">
              <p className="eyebrow">{data.flagship.eyebrow}</p>
              <h2>{data.flagship.title}</h2>
              <p className="flagship-intro">{data.flagship.intro}</p>
              <a
                className="button"
                data-event="book_call_click"
                data-event-label={`${data.label} flagship`}
                href={contact.calendar}
                target="_blank"
                rel="noreferrer"
              >
                {data.flagship.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="flagship-signals">
              <h3 className="flagship-signal-heading">
                {data.flagship.signalHeading}
              </h3>
              <ol>
                {data.flagship.signals.map((signal, index) => (
                  <li key={signal.title}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{signal.title}</strong>
                      <p>{signal.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="flagship-response">{data.flagship.response}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="content-section" id="capabilities">
        <div className="shell">
          <div
            className={`section-heading${spaciousCapabilityHeading ? " section-heading-spacious" : ""}`}
          >
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
            {/* Closes the grid outline when the final row is short. */}
            {Array.from({
              length: (3 - (data.capabilities.length % 3)) % 3,
            }).map((_, index) => (
              <div
                aria-hidden="true"
                className="capability-card capability-card-filler"
                key={`filler-${index}`}
              />
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
          <div
            className={`section-heading${spaciousWorkHeading ? " section-heading-spacious" : ""}`}
          >
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

      <section className="content-section testimonial-section">
        <div className="shell">
          <div className="section-heading compact section-heading-full">
            <p className="eyebrow">
              {isGerman ? "ÖFFENTLICHE EMPFEHLUNGEN" : "PUBLIC RECOMMENDATIONS"}
            </p>
            <h2>
              {isGerman
                ? "Vertrauen entsteht durch Arbeit, die andere loben."
                : "Trust is earned through work others praise."}
            </h2>
          </div>
          <TestimonialGrid
            ids={testimonialIdsByService[data.slug]}
            language={data.language}
          />
        </div>
      </section>

      <section className="engagement-section">
        <div className="shell">
          <div
            className={`section-heading compact${data.slug === "create" ? "" : " section-heading-full"}`}
          >
            <p className="eyebrow">{isGerman ? "ZUSAMMENARBEIT" : "ENGAGEMENT"}</p>
            <h2>
              {data.slug === "solve" ? (
                <>
                  Three proven approaches.
                  <br className="desktop-line-break" /> Infinitely many more
                  available.
                </>
              ) : (
                data.engagementHeading
              )}
            </h2>
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

      <section
        className="playlist-thumbnail-section"
        aria-label={
          isGerman
            ? `${data.label} YouTube-Playlist`
            : `${data.label} YouTube playlist`
        }
      >
        <div className="shell">
          <a
            className="playlist-thumbnail-link"
            data-event="youtube_playlist_click"
            data-event-label={`${data.label} playlist`}
            href={`https://www.youtube.com/playlist?list=${data.playlistId}`}
            target="_blank"
            rel="noreferrer"
            aria-label={
              isGerman
                ? `${data.label} YouTube-Playlist in einem neuen Fenster öffnen`
                : `Open the ${data.label} YouTube playlist in a new window`
            }
          >
            {/* Preserve the supplied artwork exactly, without optimizer resizing or cropping. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.playlistThumbnail}
              alt={
                isGerman
                  ? `${data.label} YouTube-Playlist`
                  : `${data.label} YouTube playlist`
              }
              width="2752"
              height="1536"
            />
          </a>
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
              data-event="book_call_click"
              data-event-label={`${data.label} closing`}
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button"
              data-event="email_click"
              data-event-label={`${data.label} closing`}
              href={`mailto:${contact.email}`}
            >
              {isGerman ? "E-Mail senden" : "Email me"}
            </a>
          </div>
          <Link className="back-home" href="/">
            ← {isGerman ? "Zur Übersicht" : "Back to overview"}
          </Link>
        </div>
      </section>

      <SiteFooter language={data.language} />
    </main>
  );
}
