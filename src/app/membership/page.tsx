import type { Metadata } from "next";
import { MembershipPage } from "@/components/pages/MembershipPage";

export const metadata: Metadata = {
  title: "Become a Member | Helping Hands Foundation",
  description:
    "Join Helping Hands Foundation as an annual, life or patron member. Membership tiers, benefits, obligations and the online application form.",
  openGraph: {
    title: "Become a Member | Helping Hands Foundation",
    description:
      "Join Helping Hands Foundation as an annual, life or patron member. Membership tiers, benefits, obligations and the online application form.",
  },
};

export default function Page() {
  return <MembershipPage />;
}
