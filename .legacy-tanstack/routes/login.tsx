import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Sign In at Helping Hands Foundation — Member, Coordinator and Admin sign-in arrives with the dashboards pass.",
      },
      { property: "og:title", content: "Sign In | Helping Hands Foundation" },
      {
        property: "og:description",
        content:
          "Sign In at Helping Hands Foundation — Member, Coordinator and Admin sign-in arrives with the dashboards pass.",
      },
    ],
  }),
  component: () => (
    <ComingSoon
      eyebrow="Portals"
      title="Sign In"
      note="Member, Coordinator and Admin sign-in arrives with the dashboards pass."
    />
  ),
});
