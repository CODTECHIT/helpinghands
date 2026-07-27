import type { Metadata } from "next";
import { TeamPage } from "@/components/pages/TeamPage";

export const metadata: Metadata = {
  title: "Leadership & Team | Helping Hands Foundation",
  description:
    "The trustees, leadership, programme managers and advisors who run Helping Hands Foundation — who they are, what they own, and since when.",
  openGraph: {
    title: "Leadership & Team | Helping Hands Foundation",
    description:
      "The trustees, leadership, programme managers and advisors who run Helping Hands Foundation — who they are, what they own, and since when.",
  },
};

export default function Page() {
  return <TeamPage />;
}
