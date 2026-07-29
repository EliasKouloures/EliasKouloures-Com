import type { Metadata } from "next";
import { caseStudies } from "../authority-data";
import { WorkPage } from "../components/WorkPage";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected AI transformation, automation, enablement, go-to-market and creative technology work by Elias Kouloures.",
  alternates: {
    canonical: "/work",
    languages: { en: "/work", de: "/projekte", "x-default": "/work" },
  },
};

export default function EnglishWorkPage() {
  return (
    <>
      <WorkPage language="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://eliaskouloures.com/work#page",
            url: "https://eliaskouloures.com/work",
            name: "Selected work by Elias Kouloures",
            inLanguage: "en",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: caseStudies.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://eliaskouloures.com/work#${item.id}`,
                name: `${item.client}: ${item.title.en}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
