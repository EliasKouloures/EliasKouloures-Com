import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Create",
  description:
    "Creative direction and reusable AI production systems for high-impact multimedia.",
  alternates: {
    canonical: "/create",
    languages: { en: "/create", de: "/entwickeln", "x-default": "/create" },
  },
};

export default function CreatePage() {
  return <ServicePage data={services.create} />;
}
