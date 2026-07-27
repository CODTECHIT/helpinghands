import type { Metadata } from "next";
import { AchievementsPage } from "@/components/pages/AchievementsPage";

export const metadata: Metadata = {
  title: "Achievements & Milestones | Helping Hands Foundation",
  description:
    "Fifteen years of Helping Hands Foundation in order: registration, 12A and 80G, FCRA, the first health camp, the skill centre, and the recognitions along the way.",
  openGraph: {
    title: "Achievements & Milestones | Helping Hands Foundation",
    description:
      "Fifteen years of Helping Hands Foundation in order: registration, 12A and 80G, FCRA, the first health camp, the skill centre, and the recognitions along the way.",
  },
};

export default function Page() {
  return <AchievementsPage />;
}
