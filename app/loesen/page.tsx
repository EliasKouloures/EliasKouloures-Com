import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Lösen",
  description:
    "Erstprinzipien-Diagnose und funktionierende Lösungen für komplexe Wachstums-, Innovations- und KI-Herausforderungen.",
  alternates: {
    canonical: "/loesen",
    languages: { en: "/solve", de: "/loesen" },
  },
};

export default function LoesenPage() {
  return <ServicePage data={services.loesen} />;
}
