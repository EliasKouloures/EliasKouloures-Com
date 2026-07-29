import type { Metadata } from "next";
import { ProfilePage } from "../components/ProfilePage";

export const metadata: Metadata = {
  title: "Architekt für angewandte KI & Executive Advisor",
  description:
    "Profil von Elias Kouloures: angewandte KI-Architektur, Executive Advisory, KI-Transformation, Weiterbildung und multidisziplinäre Umsetzung.",
  alternates: {
    canonical: "/profil",
    languages: { en: "/profile", de: "/profil", "x-default": "/profile" },
  },
};

export default function GermanProfilePage() {
  return (
    <>
      <ProfilePage language="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://eliaskouloures.com/profil#page",
            url: "https://eliaskouloures.com/profil",
            name: "Elias Kouloures · Architekt für angewandte KI & Executive Advisor",
            inLanguage: "de",
            mainEntity: {
              "@id": "https://eliaskouloures.com/#elias-kouloures",
            },
          }),
        }}
      />
    </>
  );
}
