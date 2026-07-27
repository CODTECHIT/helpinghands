import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects | Helping Hands Foundation",
  description:
    "Education, healthcare, women empowerment and environment projects across Maharashtra — with locations, budgets, partners and measured outcomes.",
  openGraph: {
    title: "Our Projects | Helping Hands Foundation",
    description:
      "Education, healthcare, women empowerment and environment projects across Maharashtra — with locations, budgets, partners and measured outcomes.",
  },
};

export default function Page() {
  return <ProjectsPage />;
}
