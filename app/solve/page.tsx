import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Solve",
  description:
    "First-principles diagnosis and working solutions for complex growth, innovation and AI challenges.",
  alternates: {
    canonical: "/solve",
    languages: { en: "/solve", de: "/loesen" },
  },
};

export default function SolvePage() {
  return <ServicePage data={services.solve} />;
}
