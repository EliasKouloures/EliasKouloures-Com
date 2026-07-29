import type { Metadata } from "next";
import { ProfilePage } from "../components/ProfilePage";

export const metadata: Metadata = {
  title: "Applied AI Architect & Executive Advisor",
  description:
    "Profile of Elias Kouloures: applied AI architecture, executive advisory, AI transformation, enablement and multidisciplinary delivery.",
  alternates: {
    canonical: "/profile",
    languages: { en: "/profile", de: "/profil", "x-default": "/profile" },
  },
};

export default function EnglishProfilePage() {
  return (
    <>
      <ProfilePage language="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://eliaskouloures.com/profile#page",
            url: "https://eliaskouloures.com/profile",
            name: "Elias Kouloures · Applied AI Architect & Executive Advisor",
            inLanguage: "en",
            mainEntity: {
              "@id": "https://eliaskouloures.com/#elias-kouloures",
            },
          }),
        }}
      />
    </>
  );
}
