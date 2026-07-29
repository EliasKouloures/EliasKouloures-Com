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
    submit: "Send brief",
    note: "Opens your email app with a prepared message. No form data is stored on this website.",
  },
  de: {
    toggleLabel: "Formularsprache",
    name: "Name",
    email: "Geschäftliche E-Mail",
    organisation: "Organisation",
    challenge: "Herausforderung oder Ziel",
    timing: "Zeitrahmen",
    timingPlaceholder: "Jetzt, dieses Quartal, Orientierung",
    submit: "Anfrage senden",
    note: "Öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht. Diese Website speichert keine Formulardaten.",
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

    const subject = encodeURIComponent(
      `Project brief · ${organisation || name}`,
    );
    const body = encodeURIComponent(
      [
        `Preferred language: ${languageName}`,
        `Name: ${name}`,
        `Work email: ${email}`,
        `Organisation: ${organisation}`,
        `Timing: ${timing}`,
        "",
        "Challenge / desired outcome:",
        challenge,
      ].join("\n"),
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
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
          <span>{t.organisation}</span>
          <input autoComplete="organization" name="organisation" required />
        </label>
        <label className="brief-form-wide">
          <span>{t.challenge}</span>
          <textarea name="challenge" required rows={5} />
        </label>
        <label className="brief-form-wide">
          <span>{t.timing}</span>
          <input
            name="timing"
            placeholder={t.timingPlaceholder}
            required
          />
        </label>
      </div>
      <div className="brief-form-actions">
        <button className="button" type="submit">
          {t.submit} <span aria-hidden="true">↗</span>
        </button>
        <p>{t.note}</p>
      </div>
    </form>
  );
}
