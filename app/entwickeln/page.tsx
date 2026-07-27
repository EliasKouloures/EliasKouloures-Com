import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Entwickeln",
  description:
    "Kreativdirektion und wiederverwendbare KI-Produktionssysteme für wirkungsvolle Multimedia-Inhalte.",
  alternates: {
    canonical: "/entwickeln",
    languages: { en: "/create", de: "/entwickeln" },
  },
};

export default function EntwickelnPage() {
  return <ServicePage data={services.entwickeln} />;
}
