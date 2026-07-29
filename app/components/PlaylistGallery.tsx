"use client";

import { useState } from "react";
import { contact, type Language } from "../site-data";

type PlaylistGalleryProps = {
  playlistId: string;
  language: Language;
};

export function PlaylistGallery({
  playlistId,
  language,
}: PlaylistGalleryProps) {
  const [fallbackActive, setFallbackActive] = useState(false);
  const isGerman = language === "de";
  const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;

  if (fallbackActive) {
    return (
      <div className="playlist-embed">
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${playlistId}&autoplay=1&rel=0&hl=${language}`}
          title={isGerman ? "YouTube-Playlist" : "YouTube playlist"}
        />
      </div>
    );
  }

  return (
    <div className="playlist-fallback-wrap">
      <button
        className="playlist-fallback"
        onClick={() => setFallbackActive(true)}
        type="button"
      >
        <div>
          <p className="eyebrow">ELIAS KOULOURES · YOUTUBE</p>
          <h3>
            {isGerman
              ? "Vollständige Playlist laden."
              : "Load the complete playlist."}
          </h3>
          <p>
            {isGerman
              ? "Alle Videos werden direkt aus der verknüpften YouTube-Playlist geladen und automatisch aktuell gehalten."
              : "Every video loads directly from the connected YouTube playlist and stays automatically up to date."}
          </p>
        </div>
        <span className="button">
          {isGerman ? "Playlist laden" : "Load playlist"}
          <span aria-hidden="true">▶</span>
        </span>
      </button>
      <div className="playlist-channel-links">
        <a href={contact.youtube} target="_blank" rel="noreferrer">
          {isGerman ? "YouTube-Kanal öffnen" : "Open YouTube channel"} ↗
        </a>
        <a href={playlistUrl} target="_blank" rel="noreferrer">
          {isGerman
            ? "Playlist auf YouTube öffnen"
            : "Open playlist on YouTube"}{" "}
          ↗
        </a>
      </div>
    </div>
  );
}
