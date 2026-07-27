import type { Metadata } from "next";
import { Home } from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Helping Hands Foundation | Together, We Can Change Lives",
  description:
    "Helping Hands Foundation runs education, healthcare, women empowerment and environment programmes across India. Donate, volunteer or partner with us.",
  openGraph: {
    title: "Helping Hands Foundation | Together, We Can Change Lives",
    description:
      "Helping Hands Foundation runs education, healthcare, women empowerment and environment programmes across India. Donate, volunteer or partner with us.",
  },
};

export default function Page() {
  return <Home />;
}
