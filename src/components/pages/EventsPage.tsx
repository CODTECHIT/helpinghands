"use client";

import Link from "next/link";
import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EVENTS } from "@/data/content";

export function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = EVENTS.filter((e) => (tab === "upcoming" ? !e.past : e.past));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Calendar"
        title="Fixed dates. Same village, same week, every month."
        intro="Our camps run on a published calendar rather than on announcement. If a date is listed here, the team will be there — rain, festival or election notwithstanding."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="flex gap-6 border-b border-border pb-5">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-sm font-semibold tracking-wide capitalize transition-colors ${
                  tab === t
                    ? "text-navy underline underline-offset-8"
                    : "text-ink/45 hover:text-ink"
                }`}
              >
                {t} events
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-px bg-border">
            {list.map((e, i) => (
              <Reveal key={e.slug} delay={i * 60}>
                <article className="grid gap-6 bg-cream p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center lg:p-9">
                  <div className="flex size-20 flex-col items-center justify-center border border-border bg-card">
                    <span className="font-display text-2xl leading-none text-brown">{e.day}</span>
                    <span className="mt-1 text-[11px] font-semibold tracking-widest text-teal uppercase">
                      {e.month}
                    </span>
                  </div>
                  <div>
                    <p className="eyebrow">{e.type}</p>
                    <h2 className="mt-2 font-display text-[1.55rem] leading-tight text-brown">
                      {e.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
                      {e.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {e.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" /> {e.place}
                      </span>
                    </div>
                  </div>
                  {!e.past && (
                    <Link
                      href="/volunteer"
                      className="w-fit rounded-sm border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      Register
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="py-20 text-center text-ink/60">Nothing listed here yet.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
