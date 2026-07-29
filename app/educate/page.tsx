import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Educate",
  description:
    "Role-specific AI learning for leaders, teams and families, translated into useful workflows and roadmaps.",
  alternates: {
    canonical: "/educate",
    languages: { en: "/educate", de: "/fortbilden", "x-default": "/educate" },
  },
};

export default function EducatePage() {
  return <ServicePage data={services.educate} />;
}
