import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Helping Hands Foundation",
  description:
    "What personal data Helping Hands Foundation collects from donors, members and volunteers, how long we keep it, who we share it with, and how to have it deleted.",
  openGraph: {
    title: "Privacy Policy | Helping Hands Foundation",
    description:
      "What personal data Helping Hands Foundation collects from donors, members and volunteers, how long we keep it, who we share it with, and how to have it deleted.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
