import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Helping Hands Foundation",
  description:
    "Reach the Helping Hands Foundation team — office address, phone, WhatsApp and email, or send us a message directly.",
  openGraph: {
    title: "Contact | Helping Hands Foundation",
    description:
      "Reach the Helping Hands Foundation team — office address, phone, WhatsApp and email, or send us a message directly.",
  },
};

export default function Page() {
  return <ContactPage />;
}
