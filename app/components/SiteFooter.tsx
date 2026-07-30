import Link from "next/link";
import { contact, type Language } from "../site-data";

type SiteFooterProps = {
  language?: Language;
};

export function SiteFooter({ language = "en" }: SiteFooterProps) {
  const isGerman = language === "de";

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="footer-name" href="/">
            ELIAS KOULOURES
          </Link>
          <p>
            {isGerman
              ? "Berater und Architekt für angewandte KI-Transformation. Berlin-basiert, DACH- und EU-fokussiert. Nativ auf Deutsch und Englisch."
              : "Applied AI Architect & Executive Advisor. Berlin-based, DACH- and EU-focused. Native in German and English."}
          </p>
        </div>

        <div>
          <p className="footer-label">
            {isGerman ? "ZUSAMMENARBEIT" : "WORK WITH ME"}
          </p>
          <div className="tag-list">
            <Link data-event="service_open" data-event-label="SOLVE · Footer" href="/solve">SOLVE</Link>
            <Link data-event="service_open" data-event-label="EDUCATE · Footer" href="/educate">EDUCATE</Link>
            <Link data-event="service_open" data-event-label="CREATE · Footer" href="/create">CREATE</Link>
            <Link data-event="service_open" data-event-label="LÖSEN · Footer" href="/loesen">LÖSEN</Link>
            <Link data-event="service_open" data-event-label="FORTBILDEN · Footer" href="/fortbilden">FORTBILDEN</Link>
            <Link data-event="service_open" data-event-label="ENTWICKELN · Footer" href="/entwickeln">ENTWICKELN</Link>
          </div>
          <p className="footer-label footer-credentials-label">
            {isGerman ? "MEINE REFERENZEN ANSEHEN" : "REVIEW MY CREDENTIALS"}
          </p>
          <div className="footer-authority-links">
            <Link href={isGerman ? "/profil" : "/profile"}>
              {isGerman ? "Profil" : "Profile"}
            </Link>
            <Link href={isGerman ? "/projekte" : "/work"}>
              {isGerman ? "Projekte" : "Selected work"}
            </Link>
          </div>
        </div>

        <div>
          <p className="footer-label">
            {isGerman ? "KONTAKT" : "CONNECT"}
          </p>
          <div className="footer-links">
            <a
              data-event="book_call_click"
              data-event-label="Footer"
              href={contact.calendar}
              target="_blank"
              rel="noreferrer"
            >
              {isGerman ? "Gespräch buchen" : "Book a call"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              data-event="email_click"
              data-event-label="Footer"
              href={`mailto:${contact.email}`}
            >
              {isGerman ? "E-Mail" : "Email"}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.youtube} target="_blank" rel="noreferrer">
              YouTube <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.newsletter} target="_blank" rel="noreferrer">
              {isGerman ? "Deutscher Newsletter" : "German Newsletter"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Elias Kouloures</span>
        <Link href="/impressum-datenschutz">
          Impressum &amp; Datenschutz
        </Link>
      </div>
    </footer>
  );
}
