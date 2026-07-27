import type { Metadata } from "next";
import { LoginPage } from "@/components/pages/LoginPage";

export const metadata: Metadata = {
  title: "Sign In | Helping Hands Foundation",
  description:
    "Sign In at Helping Hands Foundation — Member, Coordinator and Admin sign-in arrives with the dashboards pass.",
  openGraph: {
    title: "Sign In | Helping Hands Foundation",
    description:
      "Sign In at Helping Hands Foundation — Member, Coordinator and Admin sign-in arrives with the dashboards pass.",
  },
};

export default function Page() {
  return <LoginPage />;
}
