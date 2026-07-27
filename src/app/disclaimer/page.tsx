import type { Metadata } from "next";
import { DisclaimerPage } from "@/components/pages/DisclaimerPage";

export const metadata: Metadata = {
  title: "Disclaimer | Helping Hands Foundation",
  description:
    "Important notices on impact figures, fundraising fraud, external links, medical guidance at our camps and the use of beneficiary photographs.",
  openGraph: {
    title: "Disclaimer | Helping Hands Foundation",
    description:
      "Important notices on impact figures, fundraising fraud, external links, medical guidance at our camps and the use of beneficiary photographs.",
  },
};

export default function Page() {
  return <DisclaimerPage />;
}
