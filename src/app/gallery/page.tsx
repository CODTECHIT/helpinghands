import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Helping Hands Foundation",
  description:
    "Photographs from the field — reading rooms, health camps, skill-centre cohorts and plantation drives in and around Adoni, Kurnool District, Andhra Pradesh.",
  openGraph: {
    title: "Gallery | Helping Hands Foundation",
    description:
      "Photographs from the field — reading rooms, health camps, skill-centre cohorts and plantation drives in and around Adoni, Kurnool District, Andhra Pradesh.",
  },
};

export default function Page() {
  return <GalleryPage />;
}
