import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Fortbilden",
  description:
    "Rollenbasierte KI-Weiterbildung für Führungskräfte, Teams und Familien mit praktischen Workflows und Roadmaps.",
  alternates: {
    canonical: "/fortbilden",
    languages: { en: "/educate", de: "/fortbilden", "x-default": "/educate" },
  },
};

export default function FortbildenPage() {
  return <ServicePage data={services.fortbilden} />;
}
