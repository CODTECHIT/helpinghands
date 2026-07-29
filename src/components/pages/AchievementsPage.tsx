"use client";

import { Award } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AWARDS, MILESTONES } from "@/data/content";

const NUMBERS = [
  { value: "Est. 2026", label: "Establishment Year" },
  { value: "3", label: "Life Trustees" },
  { value: "6", label: "Trust Objectives" },
  { value: "0", label: "Administrative Remuneration" },
];

export function AchievementsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Track record"
        title="Fifteen years, in the order they actually happened."
        intro="Milestones are easy to arrange flatteringly. This page keeps them chronological, including the years when the only achievement was a compliance certificate."
      />

      <section className="border-b border-border">
        <div className="shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label}>
              <p className="font-display text-4xl text-teal">{n.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {n.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="eyebrow rule-teal">Timeline</p>
            <ol className="mt-2 border-l border-border pl-8">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 40}>
                  <li className="relative pb-10">
                    <span
                      className="absolute -left-[2.15rem] top-2 size-2.5 rounded-full bg-orange"
                      aria-hidden
                    />
                    <p className="font-display text-2xl text-brown">{m.year}</p>
                    <h2 className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                      {m.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">{m.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="self-start lg:sticky lg:top-28">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-4">Credibility</p>
              <p className="text-sm text-ink/70 leading-relaxed">
                Helping Hands Foundation serves without any profit motive. All audits, compliance
                documents, and utilization reports will be published here as soon as they are
                completed.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
