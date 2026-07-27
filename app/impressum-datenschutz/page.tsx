import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz",
  description:
    "Impressum und Datenschutzerklärung der Website von Elias Kouloures.",
  alternates: { canonical: "/impressum-datenschutz" },
};

export default function LegalPage() {
  return (
    <main className="legal-page" lang="de">
      <SiteHeader language="de" />
      <header className="legal-hero">
        <div className="shell">
          <p className="eyebrow">RECHTLICHES</p>
          <h1>Impressum &amp; Datenschutz</h1>
          <p>
            Angaben zum Anbieter sowie Informationen über die Verarbeitung
            personenbezogener Daten auf dieser Website.
          </p>
          <div className="draft-notice">
            Entwurfsstand für die Review-Version. Rechtliche Prüfung vor dem
            öffentlichen Livegang empfohlen.
          </div>
        </div>
      </header>

      <div className="shell legal-layout">
        <aside className="legal-nav" aria-label="Seitennavigation">
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#youtube">YouTube</a>
          <a href="#rechte">Ihre Rechte</a>
        </aside>

        <div className="legal-content">
          <section id="impressum">
            <p className="eyebrow">01 · IMPRESSUM</p>
            <h2>Angaben gemäß § 5 DDG</h2>
            <address>
              Elias Kouloures
              <br />
              Luisenstr. 48
              <br />
              10117 Berlin
              <br />
              Deutschland
            </address>
            <dl>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+491602448800">+49 160 244 88 00</a>
                </dd>
              </div>
              <div>
                <dt>E-Mail</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Umsatzsteuer-ID</dt>
                <dd>DE 293435334</dd>
              </div>
            </dl>

            <h3>Verantwortlich für den Inhalt</h3>
            <p>
              Elias Kouloures, Anschrift wie oben. Soweit einschlägig,
              Verantwortlicher gemäß § 18 Abs. 2 MStV.
            </p>

            <h3>Verbraucherstreitbeilegung</h3>
            <p>
              Ich bin nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen. Die frühere
              EU-Plattform zur Online-Streitbeilegung wurde zum 20. Juli 2025
              eingestellt; daher wird sie hier nicht mehr verlinkt.
            </p>
          </section>

          <section id="datenschutz">
            <p className="eyebrow">02 · DATENSCHUTZ</p>
            <h2>Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) ist Elias Kouloures. Die Kontaktdaten finden Sie im
              Impressum auf dieser Seite.
            </p>

            <h3>Grundsätze</h3>
            <p>
              Diese Website setzt in der vorgesehenen Grundkonfiguration keine
              Analyse-, Werbe- oder Marketing-Tracker ein. Personenbezogene
              Daten werden nur verarbeitet, soweit dies für die sichere
              Bereitstellung, eine von Ihnen ausgelöste Kontaktaufnahme oder
              das Laden externer Videoinhalte erforderlich ist.
            </p>

            <h3>Hosting und Server-Protokolle</h3>
            <p>
              Die Review-Version wird über OpenAI Sites bereitgestellt. Dabei
              können technische Infrastruktur-Dienstleister, insbesondere
              Cloudflare, eingesetzt werden. Beim Aufruf können technisch
              notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene URL,
              Referrer, Browser- und Betriebssysteminformationen in
              Server-Protokollen verarbeitet werden. Dies dient der sicheren
              und stabilen Bereitstellung der Website. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren
              Betrieb des Angebots.
            </p>

            <h3>Kontakt per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung
              der Anfrage und für mögliche Anschlussfragen verarbeitet.
              Rechtsgrundlage ist je nach Inhalt Art. 6 Abs. 1 lit. b oder lit.
              f DSGVO. Die Daten werden gelöscht, sobald der Zweck entfällt und
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3>Terminbuchung</h3>
            <p>
              Der Link „Gespräch buchen“ führt zu Google Calendar. Erst wenn Sie
              den externen Link öffnen, gelten die Datenschutzbedingungen von
              Google. Die Terminbuchung ist freiwillig; alternativ können Sie
              per E-Mail oder Telefon Kontakt aufnehmen.
            </p>
          </section>

          <section id="youtube">
            <p className="eyebrow">03 · EXTERNE MEDIEN</p>
            <h2>YouTube-Playlists</h2>
            <p>
              Die Serviceseiten können über die YouTube Data API öffentlich
              verfügbare Titel und Vorschaubilder der hinterlegten Playlists
              abrufen. Vorschaubilder werden über diese Website ausgeliefert.
              Der YouTube-Player wird erst nach Ihrem bewussten Klick auf ein
              Video geladen.
            </p>
            <p>
              Mit dem Klick wird eine Verbindung zu YouTube hergestellt. Dabei
              können insbesondere Ihre IP-Adresse, Geräte- und Browserdaten
              sowie Informationen über die aufgerufene Seite an Google
              übermittelt und außerhalb der EU bzw. des EWR verarbeitet
              werden. Eingebunden wird die
              datenschutzfreundlichere Domain youtube-nocookie.com. Die
              Aktivierung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
              Abs. 1 lit. a DSGVO. Sie können die Seite neu laden, bevor Sie ein
              weiteres Video aktivieren.
            </p>
          </section>

          <section id="rechte">
            <p className="eyebrow">04 · IHRE RECHTE</p>
            <h2>Betroffenenrechte</h2>
            <p>
              Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht
              auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte
              Einwilligung können Sie mit Wirkung für die Zukunft widerrufen.
              Außerdem besteht ein Beschwerderecht bei einer
              Datenschutzaufsichtsbehörde.
            </p>

            <h3>Berliner Beauftragte für Datenschutz und Informationsfreiheit</h3>
            <p>
              Alt-Moabit 59–61, 10555 Berlin
              <br />
              <a
                href="https://www.datenschutz-berlin.de/"
                target="_blank"
                rel="noreferrer"
              >
                www.datenschutz-berlin.de ↗
              </a>
            </p>

            <h3>Stand</h3>
            <p>Juli 2026</p>
          </section>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
