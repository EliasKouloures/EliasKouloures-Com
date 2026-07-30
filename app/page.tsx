import type { Metadata } from "next";
import Link from "next/link";
import { BriefForm } from "./components/BriefForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { caseStudies, getTestimonials } from "./authority-data";
import { contact, landingStacks, landingTestimonials } from "./site-data";

export const metadata: Metadata = {
  title: "How may I help you?",
  description:
    "Applied AI architecture, executive advisory, AI enablement and creative technology by Elias Kouloures.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="landing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://eliaskouloures.com/#website",
            url: "https://eliaskouloures.com",
            name: "Elias Kouloures",
            description:
              "Applied AI architecture, executive advisory, AI enablement and creative technology.",
            inLanguage: ["en", "de"],
            publisher: {
              "@id": "https://eliaskouloures.com/#elias-kouloures",
            },
          }),
        }}
      />
      <div className="landing-backdrop" aria-hidden="true" />
      <SiteHeader />
      <section className="landing-content">
        <div className="shell">
          <div className="landing-heading">
            <p className="eyebrow">SENIOR ADVISOR · GROWTH · INNOVATION · AI</p>
            <h1>How may I help you?</h1>
          </div>

          {landingStacks.map((stack) => (
            <div className="landing-stack" key={stack.langLabel}>
              {stack.heading ? (
                <div className="landing-stack-head">
                  <h2 lang={stack.lang}>{stack.heading}</h2>
                </div>
              ) : null}
              <div className="service-card-grid">
                {stack.cards.map((card) => (
                  <Link
                    className="landing-card"
                    data-event="service_open"
                    data-event-label={`${card.label} · Landing`}
                    href={`/${card.slug}`}
                    key={card.slug}
                    lang={stack.lang}
                  >
                    <span className="card-arrow" aria-hidden="true">
                      ↗
                    </span>
                    <p className="card-rail" aria-hidden="true">
                      {card.index}
                      <span />
                      {card.lang}
                    </p>
                    <h3>{card.label}</h3>
                    <p>{card.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-authority">
        <div className="shell">
          <div className="landing-authority-grid">
            <div>
              <p className="eyebrow">
                APPLIED AI ARCHITECT · EXECUTIVE ADVISOR
              </p>
              <h2>
                From ambiguity to deployed systems, adopted capability and
                market clarity.
              </h2>
            </div>
            <div className="landing-authority-copy">
              <p>
                Berlin-based and native in German and English. I combine
                first-principles systems thinking with AI, business, strategy,
                communication and creativity—built for DACH and EU realities.
              </p>
              <div className="authority-links">
                <Link href="/profile">
                  Profile <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/work">
                  Selected work <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="landing-proof-grid">
            <div><strong>350+</strong><span>engagements</span></div>
            <div><strong>150+</strong><span>European brands</span></div>
            <div><strong>200+</strong><span>keynotes &amp; workshops</span></div>
            <div><strong>24</strong><span>international awards</span></div>
          </div>

          <div className="landing-wordmarks" aria-label="Selected organisations and contexts">
            {caseStudies.map((item) => (
              <Link href={`/work/#${item.id}`} key={item.id}>
                {item.client}
              </Link>
            ))}
          </div>
          <p className="landing-context-note">
            Engagements took place directly, through agency partners, or within
            consortia and events depending on context.
          </p>
        </div>
      </section>

      <section className="landing-quote-section" aria-label="Public recommendations">
        <div className="shell">
          <p className="eyebrow">
            PUBLIC RECOMMENDATIONS · ÖFFENTLICHE EMPFEHLUNGEN
          </p>
          <div className="landing-quote-grid">
            {(["en", "de"] as const).flatMap((lang) =>
              getTestimonials([...landingTestimonials[lang]]).map((item) => (
                <figure className="landing-quote" key={`${lang}-${item.id}`}>
                  <blockquote lang={lang}>“{item.quote[lang]}”</blockquote>
                  <figcaption>
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </figcaption>
                </figure>
              )),
            )}
          </div>
          <p className="landing-quote-note">
            <a
              href={`${contact.linkedin}/details/recommendations/`}
              target="_blank"
              rel="noreferrer"
            >
              Public LinkedIn recommendations · Öffentliche LinkedIn-Empfehlungen
              ↗
            </a>
          </p>
        </div>
      </section>

      <section className="brief-section" id="brief">
        <div className="shell brief-section-grid">
          <div>
            <p className="eyebrow">BRIEF ME · PROJEKT ANFRAGEN</p>
            <h2>What needs to become possible?</h2>
            <p className="brief-subhead" lang="de">
              Was soll möglich werden?
            </p>
            <p>
              Five fields are enough to establish the challenge, the stakes and
              whether I can help.
            </p>
            <p className="brief-note-de" lang="de">
              Fünf Angaben reichen, um Herausforderung, Tragweite und mögliche
              Zusammenarbeit einzuordnen.
            </p>
          </div>
          <BriefForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
