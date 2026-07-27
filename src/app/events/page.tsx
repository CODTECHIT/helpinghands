import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/EventsPage";

export const metadata: Metadata = {
  title: "Events & Camps | Helping Hands Foundation",
  description:
    "Upcoming health camps, volunteer orientations, plantation drives and ceremonies — with dates, timings, venues and registration details.",
  openGraph: {
    title: "Events & Camps | Helping Hands Foundation",
    description:
      "Upcoming health camps, volunteer orientations, plantation drives and ceremonies — with dates, timings, venues and registration details.",
  },
};

export default function Page() {
  return <EventsPage />;
}
