"use client";

import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CAMPAIGNS, inr } from "@/data/content";

export function CampaignProgress({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min(Math.round((raised / goal) * 100), 100);
  return (
    <div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-sand">
        <div className="h-full rounded-full bg-orange" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3 flex items-baseline justify-between text-sm">
        <span className="font-semibold text-brown">{inr(raised)}</span>
        <span className="text-muted-foreground">
          of {inr(goal)} · {pct}%
        </span>
      </div>
    </div>
  );
}

export function CampaignsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Give"
        title="Four campaigns running. Each one has a deadline."
        intro="A campaign is not an open-ended appeal. It has a goal, a cost breakdown down to the line item, and a date after which the need either has been met or has passed."
      />

      <section className="section-pad">
        <div className="shell max-w-2xl text-center py-20 bg-card border border-border">
          <h2 className="font-display text-2xl text-brown">No active campaigns at this time.</h2>
          <p className="mt-4 text-sm text-ink/70 leading-relaxed">
            Helping Hands Foundation was established on 3rd August 2026. Targeted campaigns will be
            launched once statutory registrations (Sections 12A and 80G) are completed and direct
            operations begin in Adoni and Kurnool District.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
