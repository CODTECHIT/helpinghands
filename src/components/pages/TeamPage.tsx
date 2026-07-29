"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TEAM } from "@/data/content";

const TONE: Record<string, string> = {
  teal: "bg-teal text-cream",
  navy: "bg-navy text-cream",
  orange: "bg-orange text-brown",
  coral: "bg-coral text-cream",
};

export function TeamPage() {
  const list = TEAM;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="People"
        title="Every decision here has a name attached to it."
        intro="Three Life Trustees carry formal responsibility for administration, finances, records, and operations of the Trust. We publish who they are and what they own, because accountability that cannot be addressed to a person is not accountability."
      />

      <section className="section-pad">
        <div className="shell">
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
              Board meetings are held regularly to review administrative decisions.
            </h2>
          </div>
          <div className="space-y-4 self-end text-sm leading-relaxed text-ink/70">
            <p>
              All Trustees are Life Trustees and serve without profit motive. The bank account is
              operated jointly by the President and either the Secretary or the Treasurer. General
              Body meetings are held at least once a year; the Managing Committee meets at least
              once every six months. Any amendment to the Trust Deed requires approval from the
              Commissioner of Income Tax (Exemptions).
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
