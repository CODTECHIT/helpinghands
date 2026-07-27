"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TEAM } from "@/data/content";

const GROUPS = ["All", "Board", "Leadership", "Programme", "Advisory"] as const;

const TONE: Record<string, string> = {
  teal: "bg-teal text-cream",
  navy: "bg-navy text-cream",
  orange: "bg-orange text-brown",
  coral: "bg-coral text-cream",
};

export function TeamPage() {
  const [group, setGroup] = useState<string>("All");
  const list = TEAM.filter((p) => group === "All" || p.group === group);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="People"
        title="Every decision here has a name attached to it."
        intro="Eleven people carry formal responsibility for programmes, money and safeguarding. We publish who they are and what they own, because accountability that cannot be addressed to a person is not accountability."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  group === g
                    ? "border-navy bg-navy text-cream"
                    : "border-border text-ink/65 hover:border-navy/40"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.name} delay={i * 40}>
                <article className="flex h-full gap-5 border-t border-border pt-6">
                  <div
                    className={`flex size-14 shrink-0 items-center justify-center rounded-full font-display text-lg ${TONE[p.tone]}`}
                    aria-hidden
                  >
                    {p.initials}
                  </div>
                  <div>
                    <h2 className="font-display text-xl leading-snug text-brown">{p.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-teal">{p.role}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {p.group} · since {p.since}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow rule-teal">Governance</p>
            <h2 className="max-w-[20ch] font-display text-3xl leading-tight text-brown">
              The board meets quarterly and the minutes are filed.
            </h2>
          </div>
          <div className="space-y-4 self-end text-sm leading-relaxed text-ink/70">
            <p>
              No trustee draws remuneration. Related-party transactions are disclosed in the annual
              report. The audit and finance committee is chaired by a trustee who is not part of
              executive management.
            </p>
            <p>
              Safeguarding concerns can be raised directly with the child-safeguarding advisor,
              bypassing the executive team entirely.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
