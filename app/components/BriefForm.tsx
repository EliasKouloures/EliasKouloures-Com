"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { contact } from "../site-data";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

type FormLanguage = "en" | "de";

const copy = {
  en: {
    toggleLabel: "Form language",
    name: "Name",
    email: "Work email",
    organisation: "Organisation",
    challenge: "Challenge or desired outcome",
    timing: "Timing",
    timingPlaceholder: "Now, this quarter, exploring",
    optional: "optional",
    submit: "Send brief",
    note: "Opens your email app with a prepared message. No form data is stored on this website.",
    fallbackHeading: "No email window opened?",
    fallbackBody: "Copy the prepared message below and send it from any email tool to",
    copy: "Copy message",
    copied: "Copied",
    preparedLabel: "Prepared message",
  },
  de: {
    toggleLabel: "Formularsprache",
    name: "Name",
    email: "Geschäftliche E-Mail",
    organisation: "Organisation",
    challenge: "Herausforderung oder Ziel",
    timing: "Zeitrahmen",
    timingPlaceholder: "Jetzt, dieses Quartal, Orientierung",
    optional: "optional",
    submit: "Anfrage senden",
    note: "Öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht. Diese Website speichert keine Formulardaten.",
    fallbackHeading: "Kein E-Mail-Fenster geöffnet?",
    fallbackBody: "Kopieren Sie die vorbereitete Nachricht und senden Sie sie mit einem beliebigen E-Mail-Programm an",
    copy: "Nachricht kopieren",
    copied: "Kopiert",
    preparedLabel: "Vorbereitete Nachricht",
  },
} as const;

const noopSubscribe = () => () => {};
const readBrowserPrefersGerman = () =>
  navigator.language?.toLowerCase().startsWith("de") ?? false;
/** Static export always renders English; the client corrects on hydration. */
const serverPrefersGerman = () => false;

export function BriefForm() {
  // Hydration-safe browser-language detection: no effect, no mismatch.
  const prefersGerman = useSyncExternalStore(
    noopSubscribe,
    readBrowserPrefersGerman,
    serverPrefersGerman,
  );
  const [chosen, setChosen] = useState<FormLanguage | null>(null);
  const [prepared, setPrepared] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const language: FormLanguage = chosen ?? (prefersGerman ? "de" : "en");
  const setLanguage = setChosen;

  const t = copy[language];

  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organisation = String(form.get("organisation") || "");
    const challenge = String(form.get("challenge") || "");
    const timing = String(form.get("timing") || "");
    const languageName = language === "de" ? "Deutsch" : "English";

    window.plausible?.("brief_submit", {
      props: {
        language: languageName,
        organisation: organisation || "Not supplied",
      },
    });

    const subjectText = `Project brief · ${organisation || name}`;
    const bodyText = [
      `Preferred language: ${languageName}`,
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organisation: ${organisation}`,
      `Timing: ${timing}`,
      "",
      "Challenge / desired outcome:",
      challenge,
    ].join("\n");

    // Fallback for visitors without a configured mail client: the same
    // message stays available on the page for manual copy and send.
    setCopied(false);
    setPrepared(
      [`To: ${contact.email}`, `Subject: ${subjectText}`, "", bodyText].join(
        "\n",
      ),
    );

    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  async function copyPrepared() {
    if (!prepared) return;
    try {
      await navigator.clipboard.writeText(prepared);
      setCopied(true);
      window.plausible?.("brief_copy_fallback");
    } catch {
      // Clipboard unavailable: the message stays selectable in the textarea.
    }
  }

  return (
    <form className="brief-form" lang={language} onSubmit={submitBrief}>
      <div
        aria-label={t.toggleLabel}
        className="brief-lang-toggle"
        role="group"
      >
        {(["en", "de"] as const).map((code) => (
          <button
            aria-pressed={language === code}
            className="brief-lang-option"
            key={code}
            onClick={() => setLanguage(code)}
            type="button"
          >
            {code === "en" ? "EN" : "DE"}
          </button>
        ))}
      </div>
      <div className="brief-form-grid">
        <label>
          <span>{t.name}</span>
          <input autoComplete="name" name="name" required />
        </label>
        <label>
          <span>{t.email}</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label className="brief-form-wide">
          <span>
            {t.organisation}{" "}
            <em className="brief-optional">({t.optional})</em>
          </span>
          <input autoComplete="organization" name="organisation" />
        </label>
        <label className="brief-form-wide">
          <span>{t.challenge}</span>
          <textarea name="challenge" required rows={5} />
        </label>
        <label className="brief-form-wide">
          <span>
            {t.timing} <em className="brief-optional">({t.optional})</em>
          </span>
          <input name="timing" placeholder={t.timingPlaceholder} />
        </label>
      </div>
      <div className="brief-form-actions">
        <button className="button" type="submit">
          {t.submit} <span aria-hidden="true">↗</span>
        </button>
        <p>{t.note}</p>
      </div>
      {prepared ? (
        <div className="brief-fallback" role="status">
          <p className="brief-fallback-heading">{t.fallbackHeading}</p>
          <p>
            {t.fallbackBody}{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <textarea
            aria-label={t.preparedLabel}
            className="brief-fallback-text"
            readOnly
            rows={8}
            value={prepared}
          />
          <button
            className="button button-secondary"
            onClick={copyPrepared}
            type="button"
          >
            {copied ? `${t.copied} ✓` : t.copy}
          </button>
        </div>
      ) : null}
    </form>
  );
}
