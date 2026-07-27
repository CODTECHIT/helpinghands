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
        <div className="shell space-y-px bg-border">
          {CAMPAIGNS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <article className="grid gap-8 bg-cream p-8 lg:grid-cols-[1.5fr_1fr] lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal">
                      {c.focus}
                    </span>
                    {c.urgent && (
                      <span className="rounded-full bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
                        Urgent
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 max-w-[22ch] font-display text-[1.9rem] leading-tight text-brown">
                    <Link
                      href={`/campaigns/${c.slug}`}

                      className="hover:text-teal"
                    >
                      {c.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/70">{c.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-6 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" /> {c.daysLeft} days left
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5" /> {c.donors} donors
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <CampaignProgress raised={c.raised} goal={c.goal} />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/donate"
                      className="rounded-sm bg-coral px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                    >
                      Donate
                    </Link>
                    <Link
                      href={`/campaigns/${c.slug}`}

                      className="rounded-sm border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      Where it goes
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
