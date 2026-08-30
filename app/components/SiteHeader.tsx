import Link from "next/link";
import { contact, type Language } from "../site-data";

type SiteHeaderProps = {
  language?: Language;
  pairSlug?: string;
  /** Landing page only: link the language pill to the on-page German section. */
  germanAnchor?: boolean;
};

export function SiteHeader({
  language = "en",
  pairSlug,
  germanAnchor,
}: SiteHeaderProps) {
  const isGerman = language === "de";

  return (
    <>
      <a className="skip-link" href="#main-content">
        {isGerman ? "Zum Inhalt springen" : "Skip to content"}
      </a>
      <header className="site-header">
        <div className="shell header-inner">
        <Link
          className="brand-lockup"
          href="/"
          aria-label={isGerman ? "Elias Kouloures Startseite" : "Elias Kouloures home"}
        >
          <span>ELIAS KOULOURES</span>
          <span className="brand-role">
            APPLIED AI ARCHITECT · EXECUTIVE ADVISOR
          </span>
        </Link>

        <nav
          className="header-actions"
          aria-label={isGerman ? "Hauptnavigation" : "Primary navigation"}
        >
          {pairSlug ? (
            <Link className="language-link" href={`/${pairSlug}/`}>
              {isGerman ? "ENGLISH" : "DEUTSCH"}
            </Link>
          ) : germanAnchor ? (
            <a
              className="language-link"
              href="#deutsch"
              aria-label="Zum deutschen Angebot auf dieser Seite springen"
            >
              DEUTSCH
            </a>
          ) : null}
          <a
            className="text-link header-email"
            data-event="email_click"
            data-event-label="Header"
            href={`mailto:${contact.email}`}
          >
            {isGerman ? "E-Mail" : "Email"}
          </a>
          <a
            className="button button-small"
            data-event="book_call_click"
            data-event-label="Header"
            href={contact.calendar}
            target="_blank"
            rel="noreferrer"
            aria-label={
              isGerman
                ? "Gespräch buchen – öffnet in neuem Fenster"
                : "Book a call – opens in a new window"
            }
          >
            {isGerman ? "Gespräch buchen" : "Book a call"}
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
      </header>
      <span id="main-content" tabIndex={-1} />
    </>
  );
}
