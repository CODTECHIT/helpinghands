import type { Metadata } from "next";
import { NewsPage } from "@/components/pages/NewsPage";

export const metadata: Metadata = {
  title: "News & Field Reports | Helping Hands Foundation",
  description:
    "Field reports, press coverage, programme updates and stories from the communities Helping Hands Foundation works with.",
  openGraph: {
    title: "News & Field Reports | Helping Hands Foundation",
    description:
      "Field reports, press coverage, programme updates and stories from the communities Helping Hands Foundation works with.",
  },
};

export default function Page() {
  return <NewsPage />;
}
