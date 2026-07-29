import type { Metadata } from "next";
import { DocumentsPage } from "@/components/pages/DocumentsPage";

export const metadata: Metadata = {
  title: "Documents & Transparency | Helping Hands Foundation",
  description:
    "Trust deed, policies, and in-progress 12A and 80G registration applications for Helping Hands Foundation.",
  openGraph: {
    title: "Documents & Transparency | Helping Hands Foundation",
    description:
      "Trust deed, policies, and in-progress 12A and 80G registration applications for Helping Hands Foundation.",
  },
};

export default function Page() {
  return <DocumentsPage />;
}
