import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Helping Hands Foundation",
  description:
    "Photographs from the field — reading rooms, health camps, skill-centre cohorts and plantation drives across Maharashtra.",
  openGraph: {
    title: "Gallery | Helping Hands Foundation",
    description:
      "Photographs from the field — reading rooms, health camps, skill-centre cohorts and plantation drives across Maharashtra.",
  },
};

export default function Page() {
  return <GalleryPage />;
}
