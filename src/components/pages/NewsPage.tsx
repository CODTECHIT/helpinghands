"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { NEWS } from "@/data/content";

const TAGS = ["All", "Field Report", "Press", "Update", "Story"] as const;

export function NewsPage() {
  const [tag, setTag] = useState<string>("All");
  const list = NEWS.filter((n) => tag === "All" || n.tag === tag);
  const [lead, ...rest] = list;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Newsroom"
        title="What we found in the field, written up honestly."
        intro="We publish what worked, what did not, and what it cost. Press releases sit alongside field reports rather than replacing them."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  tag === t
                    ? "border-navy bg-navy text-cream"
                    : "border-border text-ink/65 hover:border-navy/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {lead && (
            <Reveal>
              <Link
                href={`/news/${lead.slug}`}

                className="group mt-12 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.4fr_1fr]"
              >
                <div>
                  <p className="eyebrow">
                    {lead.tag} · {lead.date}
                  </p>
                  <h2 className="mt-4 max-w-[20ch] font-display text-[2.2rem] leading-[1.12] text-brown transition-colors group-hover:text-teal lg:text-[2.75rem]">
                    {lead.title}
                  </h2>
                </div>
                <div className="self-end">
                  <p className="leading-relaxed text-ink/70">{lead.excerpt}</p>
                  <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
                    {lead.readTime}
                  </p>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 70}>
                <Link
                  href={`/news/${n.slug}`}

                  className="group flex h-full flex-col bg-cream p-8 transition-colors hover:bg-card"
                >
                  <p className="eyebrow">{n.tag}</p>
                  <h3 className="mt-4 font-display text-[1.45rem] leading-snug text-brown transition-colors group-hover:text-teal">
                    {n.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{n.excerpt}</p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {n.date} · {n.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="py-20 text-center text-ink/60">Nothing filed under that tag yet.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
