import type { Metadata } from "next";
import { DonatePage } from "@/components/pages/DonatePage";

export const metadata: Metadata = {
  title: "Donate | Helping Hands Foundation",
  description:
    "Donate to Helping Hands Foundation. One-time or monthly giving, 80G tax exemption, receipts within 48 hours and published fund utilisation.",
  openGraph: {
    title: "Donate | Helping Hands Foundation",
    description:
      "Donate to Helping Hands Foundation. One-time or monthly giving, 80G tax exemption, receipts within 48 hours and published fund utilisation.",
  },
};

export default function Page() {
  return <DonatePage />;
}
