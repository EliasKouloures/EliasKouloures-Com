import Link from "next/link";
import { contact } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="footer-name" href="/">
            ELIAS KOULOURES
          </Link>
          <p>
            Senior Advisor for Growth, Innovation &amp; AI. Berlin-based,
            EU-focused and freelance since 2014. AI consultant, creative
            director, copywriter and data scientist. Native German and English.
          </p>
        </div>

        <div>
          <p className="footer-label">WORK WITH ME</p>
          <div className="tag-list">
            <Link href="/solve">SOLVE</Link>
            <Link href="/educate">EDUCATE</Link>
            <Link href="/create">CREATE</Link>
            <Link href="/loesen">LÖSEN</Link>
            <Link href="/fortbilden">FORTBILDEN</Link>
            <Link href="/entwickeln">ENTWICKELN</Link>
          </div>
        </div>

        <div>
          <p className="footer-label">CONNECT</p>
          <div className="footer-links">
            <a href={contact.calendar} target="_blank" rel="noreferrer">
              Book a call <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${contact.email}`}>Email</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
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
