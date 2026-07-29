import type { Metadata } from "next";
import { caseStudies } from "../authority-data";
import { WorkPage } from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Ausgewählte Projekte",
  description:
    "Ausgewählte Projekte von Elias Kouloures zu KI-Transformation, Automatisierung, Weiterbildung, Go-to-Market und Creative Technology.",
  alternates: {
    canonical: "/projekte",
    languages: { en: "/work", de: "/projekte", "x-default": "/work" },
  },
};

export default function GermanWorkPage() {
  return (
    <>
      <WorkPage language="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://eliaskouloures.com/projekte#page",
            url: "https://eliaskouloures.com/projekte",
            name: "Ausgewählte Projekte von Elias Kouloures",
            inLanguage: "de",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: caseStudies.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://eliaskouloures.com/projekte#${item.id}`,
                name: `${item.client}: ${item.title.de}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
