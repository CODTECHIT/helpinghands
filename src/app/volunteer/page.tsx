import type { Metadata } from "next";
import { VolunteerPage } from "@/components/pages/VolunteerPage";

export const metadata: Metadata = {
  title: "Volunteer With Us | Helping Hands Foundation",
  description:
    "Volunteer roles in teaching, health camps, plantation drives, documentation and digital support — with time commitments and the application form.",
  openGraph: {
    title: "Volunteer With Us | Helping Hands Foundation",
    description:
      "Volunteer roles in teaching, health camps, plantation drives, documentation and digital support — with time commitments and the application form.",
  },
};

export default function Page() {
  return <VolunteerPage />;
}
