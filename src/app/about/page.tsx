import type { Metadata } from "next";
import { About } from "@/components/pages/About";

export const metadata: Metadata = {
  title: "About Us | Helping Hands Foundation",
  description:
    "Our founding story, mission and vision, objectives, and registration and compliance details — 12A, 80G, NGO Darpan and FCRA.",
  openGraph: {
    title: "About Us | Helping Hands Foundation",
    description:
      "Our founding story, mission and vision, objectives, and registration and compliance details — 12A, 80G, NGO Darpan and FCRA.",
  },
};

export default function Page() {
  return <About />;
}
