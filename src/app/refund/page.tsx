import type { Metadata } from "next";
import { RefundPage } from "@/components/pages/RefundPage";

export const metadata: Metadata = {
  title: "Donation & Refund Policy | Helping Hands Foundation",
  description:
    "How Helping Hands Foundation handles donation errors, duplicate payments, refund requests, recurring giving cancellations and 80G receipts.",
  openGraph: {
    title: "Donation & Refund Policy | Helping Hands Foundation",
    description:
      "How Helping Hands Foundation handles donation errors, duplicate payments, refund requests, recurring giving cancellations and 80G receipts.",
  },
};

export default function Page() {
  return <RefundPage />;
}
