import type { Metadata } from "next";
import { AchievementsPage } from "@/components/pages/AchievementsPage";

export const metadata: Metadata = {
  title: "Achievements & Milestones | Helping Hands Foundation",
  description:
    "Chronology of Helping Hands Foundation, established in 2026, starting with our trust registration in Adoni.",
  openGraph: {
    title: "Achievements & Milestones | Helping Hands Foundation",
    description:
      "Chronology of Helping Hands Foundation, established in 2026, starting with our trust registration in Adoni.",
  },
};

export default function Page() {
  return <AchievementsPage />;
}
