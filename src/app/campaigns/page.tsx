import type { Metadata } from "next";
import { CampaignsPage } from "@/components/pages/CampaignsPage";

export const metadata: Metadata = {
  title: "Live Campaigns | Helping Hands Foundation",
  description:
    "Time-bound fundraising campaigns with published goals, spend breakdowns and live progress — school kits, mobile health, skill training and monsoon relief.",
  openGraph: {
    title: "Live Campaigns | Helping Hands Foundation",
    description:
      "Time-bound fundraising campaigns with published goals, spend breakdowns and live progress — school kits, mobile health, skill training and monsoon relief.",
  },
};

export default function Page() {
  return <CampaignsPage />;
}
