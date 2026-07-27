import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Use | Helping Hands Foundation",
  description:
    "The terms governing use of the Helping Hands Foundation website, donations, membership and volunteer accounts, including conduct rules and governing law.",
  openGraph: {
    title: "Terms of Use | Helping Hands Foundation",
    description:
      "The terms governing use of the Helping Hands Foundation website, donations, membership and volunteer accounts, including conduct rules and governing law.",
  },
};

export default function Page() {
  return <TermsPage />;
}
