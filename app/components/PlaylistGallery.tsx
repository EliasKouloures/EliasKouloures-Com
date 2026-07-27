"use client";

import { useEffect, useState } from "react";
import { contact, type Language } from "../site-data";

type PlaylistVideo = {
  videoId: string;
  title: string;
  thumbnail: string;
};

type PlaylistResponse = {
  configured: boolean;
  playlistUrl: string;
  videos?: PlaylistVideo[];
  message?: string;
};

type PlaylistGalleryProps = {
  playlistId: string;
  language: Language;
};

export function PlaylistGallery({
  playlistId,
  language,
}: PlaylistGalleryProps) {
  const [data, setData] = useState<PlaylistResponse | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [fallbackActive, setFallbackActive] = useState(false);
  const isGerman = language === "de";

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/youtube?playlist=${encodeURIComponent(playlistId)}`, {
      signal: controller.signal,
    })
      .then((response) => response.json() as Promise<PlaylistResponse>)
      .then(setData)
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setData({
          configured: false,
          playlistUrl: `https://www.youtube.com/playlist?list=${playlistId}`,
          message: isGerman
            ? "Die Playlist konnte gerade nicht geladen werden."
            : "The playlist could not be loaded right now.",
        });
      });

    return () => controller.abort();
  }, [isGerman, playlistId]);

  if (!data) {
    return (
      <div className="playlist-loading" aria-live="polite">
        <span />
        <p>{isGerman ? "Playlist wird geladen …" : "Loading playlist …"}</p>
      </div>
    );
  }

  if (!data.configured || !data.videos?.length) {
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
            <p className="eyebrow">
              ELIAS KOULOURES · YOUTUBE
            </p>
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
          <a href={data.playlistUrl} target="_blank" rel="noreferrer">
            {isGerman
              ? "Playlist auf YouTube öffnen"
              : "Open playlist on YouTube"}{" "}
            ↗
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="video-list">
      {data.videos.map((video) => (
        <article className="video-card" key={video.videoId}>
          {activeVideo === video.videoId ? (
            <iframe
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
            />
          ) : (
            <button
              className="video-trigger"
              onClick={() => setActiveVideo(video.videoId)}
              type="button"
              aria-label={`${isGerman ? "Video laden" : "Load video"}: ${video.title}`}
            >
              {/* YouTube thumbnails load before the privacy-gated player. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumbnail} alt="" loading="lazy" />
              <span className="video-shade" />
              <span className="play-button" aria-hidden="true">
                ▶
              </span>
              <span className="video-title">{video.title}</span>
              <span className="video-consent">
                {isGerman
                  ? "Klick lädt YouTube und überträgt Daten."
                  : "Click loads YouTube and transfers data."}
              </span>
            </button>
          )}
        </article>
      ))}
    </div>
  );
}
