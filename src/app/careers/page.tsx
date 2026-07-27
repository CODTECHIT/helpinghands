import type { Metadata } from "next";
import { CareersPage } from "@/components/pages/CareersPage";

export const metadata: Metadata = {
  title: "Careers & Openings | Helping Hands Foundation",
  description:
    "Open roles at Helping Hands Foundation across education, health, finance and communications — field-based and Pune office positions, with what the work actually involves.",
  openGraph: {
    title: "Careers & Openings | Helping Hands Foundation",
    description:
      "Open roles at Helping Hands Foundation across education, health, finance and communications — field-based and Pune office positions, with what the work actually involves.",
  },
};

export default function Page() {
  return <CareersPage />;
}
