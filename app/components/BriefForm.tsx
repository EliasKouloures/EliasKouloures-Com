"use client";

import type { FormEvent } from "react";
import { contact } from "../site-data";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

export function BriefForm() {
  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const language = String(form.get("language") || "English");
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organisation = String(form.get("organisation") || "");
    const challenge = String(form.get("challenge") || "");
    const timing = String(form.get("timing") || "");

    window.plausible?.("brief_submit", {
      props: { language, organisation: organisation || "Not supplied" },
    });

    const subject = encodeURIComponent(
      `Project brief · ${organisation || name}`,
    );
    const body = encodeURIComponent(
      [
        `Preferred language: ${language}`,
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
    <form className="brief-form" onSubmit={submitBrief}>
      <div className="brief-form-grid">
        <label>
          <span>Name</span>
          <input autoComplete="name" name="name" required />
        </label>
        <label>
          <span>Work email / Geschäftliche E-Mail</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>Organisation</span>
          <input autoComplete="organization" name="organisation" required />
        </label>
        <label>
          <span>Language / Sprache</span>
          <select defaultValue="English" name="language">
            <option>English</option>
            <option>Deutsch</option>
          </select>
        </label>
        <label className="brief-form-wide">
          <span>Challenge or desired outcome / Herausforderung oder Ziel</span>
          <textarea name="challenge" required rows={5} />
        </label>
        <label className="brief-form-wide">
          <span>Timing / Zeitrahmen</span>
          <input
            name="timing"
            placeholder="Now, this quarter, exploring / Jetzt, dieses Quartal, Orientierung"
            required
          />
        </label>
      </div>
      <div className="brief-form-actions">
        <button className="button" type="submit">
          Send brief / Anfrage senden <span aria-hidden="true">↗</span>
        </button>
        <p>
          Opens your email app with a prepared message. No form data is stored
          on this website.
          <br />
          Öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht. Diese
          Website speichert keine Formulardaten.
        </p>
      </div>
    </form>
  );
}
