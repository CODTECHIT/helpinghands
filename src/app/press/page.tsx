import type { Metadata } from "next";
import { PressPage } from "@/components/pages/PressPage";

export const metadata: Metadata = {
  title: "Press & Media | Helping Hands Foundation",
  description:
    "Press coverage of Helping Hands Foundation, media enquiry contacts, our brand assets and the boilerplate description journalists may quote.",
  openGraph: {
    title: "Press & Media | Helping Hands Foundation",
    description:
      "Press coverage of Helping Hands Foundation, media enquiry contacts, our brand assets and the boilerplate description journalists may quote.",
  },
};

export default function Page() {
  return <PressPage />;
}
