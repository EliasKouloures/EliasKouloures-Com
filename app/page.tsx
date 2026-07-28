import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { landingCards } from "./site-data";

export const metadata: Metadata = {
  title: "How may I help you?",
  description:
    "Solve complex problems, build AI capability and create multimedia systems with Elias Kouloures.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="landing-page">
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
      <SiteFooter />
    </main>
  );
}
