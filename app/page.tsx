import type { Metadata } from "next";
import Link from "next/link";
import { BriefForm } from "./components/BriefForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { landingCards } from "./site-data";

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

          <div className="service-card-grid">
            {landingCards.map((card) => (
              <Link
                className="landing-card"
                data-event="service_open"
                data-event-label={`${card.label} · Landing`}
                href={`/${card.slug}`}
                key={card.slug}
                lang={card.lang === "DE" ? "de" : "en"}
              >
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
                <h2>{card.label}</h2>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
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
            <div><strong>~300</strong><span>engagements</span></div>
            <div><strong>150+</strong><span>European brands</span></div>
            <div><strong>150+</strong><span>keynotes &amp; workshops</span></div>
            <div><strong>24</strong><span>international awards</span></div>
          </div>

          <div className="landing-wordmarks" aria-label="Selected organisations and contexts">
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
          <p className="landing-context-note">
            Engagements took place directly, through agency partners, or within
            consortia and events depending on context.
          </p>
        </div>
      </section>

      <section className="brief-section" id="brief">
        <div className="shell brief-section-grid">
          <div>
            <p className="eyebrow">BRIEF ME · PROJEKT ANFRAGEN</p>
            <h2>
              What needs to become possible?
              <br />
              Was soll möglich werden?
            </h2>
            <p>
              Five fields are enough to establish the challenge, the stakes and
              whether I can help.
              <br />
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
