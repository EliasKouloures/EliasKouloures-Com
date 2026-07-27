import Link from "next/link";
import { contact, type Language } from "../site-data";

type SiteHeaderProps = {
  language?: Language;
  pairSlug?: string;
  counterpartLabel?: string;
};

export function SiteHeader({
  language = "en",
  pairSlug,
  counterpartLabel,
}: SiteHeaderProps) {
  const isGerman = language === "de";

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-lockup" href="/" aria-label="Elias Kouloures home">
          <span>ELIAS KOULOURES</span>
          <span className="brand-role">SENIOR ADVISOR</span>
        </Link>

        <nav className="header-actions" aria-label="Primary navigation">
          {pairSlug && counterpartLabel ? (
            <Link className="language-link" href={`/${pairSlug}`}>
              {counterpartLabel}
            </Link>
          ) : null}
          <a className="text-link header-email" href={`mailto:${contact.email}`}>
            {isGerman ? "E-Mail" : "Email"}
          </a>
          <a
            className="button button-small"
            href={contact.calendar}
            target="_blank"
            rel="noreferrer"
          >
            {isGerman ? "Gespräch buchen" : "Book a call"}
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
