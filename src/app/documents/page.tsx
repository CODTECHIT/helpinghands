import type { Metadata } from "next";
import { DocumentsPage } from "@/components/pages/DocumentsPage";

export const metadata: Metadata = {
  title: "Documents & Transparency | Helping Hands Foundation",
  description:
    "Annual reports, audited accounts, quarterly utilisation statements, 12A and 80G certificates, FCRA registration and organisational policies.",
  openGraph: {
    title: "Documents & Transparency | Helping Hands Foundation",
    description:
      "Annual reports, audited accounts, quarterly utilisation statements, 12A and 80G certificates, FCRA registration and organisational policies.",
  },
};

export default function Page() {
  return <DocumentsPage />;
}
