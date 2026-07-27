"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { inr } from "@/data/content";

const TIERS = [
  {
    id: "annual",
    name: "Annual Member",
    fee: 1200,
    period: "per year",
    blurb: "For supporters who want a vote and a voice, renewed each year.",
    benefits: [
      "Voting rights at the Annual General Meeting",
      "Quarterly utilisation reports by email",
      "Priority registration for camps and drives",
      "Digital membership card",
    ],
  },
  {
    id: "life",
    name: "Life Member",
    fee: 15000,
    period: "one-time",
    blurb: "A single contribution that keeps you on the rolls permanently.",
    featured: true,
    benefits: [
      "Everything in Annual Membership, permanently",
      "Named in the Annual Report donor roll",
      "Invitation to the annual field visit",
      "Eligible to stand for the Governing Council",
    ],
  },
  {
    id: "patron",
    name: "Patron Member",
    fee: 100000,
    period: "one-time",
    blurb: "For individuals and families underwriting a whole programme line.",
    benefits: [
      "Everything in Life Membership",
      "Programme-level utilisation briefing twice a year",
      "Naming rights on a facility, where applicable",
      "Direct line to the Executive Director",
    ],
  },
];

export function MembershipPage() {
  const [tier, setTier] = useState("life");
  const [sent, setSent] = useState(false);
  const selected = TIERS.find((t) => t.id === tier)!;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Membership"
        title="Members hold this Foundation to account."
        intro="Membership is not a donation tier. Members vote at the AGM, receive the same figures the auditor sees, and can stand for the Governing Council."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="grid gap-px bg-border lg:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <div
                  className={`flex h-full flex-col p-8 lg:p-10 ${t.featured ? "bg-navy text-on-navy" : "bg-cream"}`}
                >
                  <p className={`eyebrow ${t.featured ? "text-on-navy/70" : ""}`}>{t.name}</p>
                  <p
                    className={`mt-5 font-display text-4xl ${t.featured ? "text-on-navy" : "text-brown"}`}
                  >
                    {inr(t.fee)}
                  </p>
                  <p
                    className={`mt-1 text-xs tracking-widest uppercase ${t.featured ? "text-on-navy/60" : "text-muted-foreground"}`}
                  >
                    {t.period}
                  </p>
                  <p
                    className={`mt-5 text-sm leading-relaxed ${t.featured ? "text-on-navy/80" : "text-ink/70"}`}
                  >
                    {t.blurb}
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {t.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${t.featured ? "text-orange" : "text-teal"}`}
                        />
                        <span className={t.featured ? "text-on-navy/85" : "text-ink/75"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setTier(t.id);
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`mt-8 rounded-sm py-3 text-sm font-semibold transition-colors ${
                      t.featured
                        ? "bg-orange text-brown hover:bg-orange/90"
                        : "border border-navy text-navy hover:bg-navy hover:text-cream"
                    }`}
                  >
                    Choose {t.name.split(" ")[0]}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="border-t border-border py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow rule-teal">Apply</p>
            <h2 className="max-w-[16ch] font-display text-3xl leading-tight text-brown lg:text-[2.6rem]">
              Applications are reviewed within seven working days.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">
              Once approved, you'll receive a membership number, a digital card and access to the
              member portal where AGM notices and reports are posted.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/70">
              <li>Applicants must be 18 or older.</li>
              <li>A copy of PAN or Aadhaar is required for records.</li>
              <li>Membership may be declined without cause, and fees are then refunded in full.</li>
            </ul>
            <Link
              href="/documents"
              className="mt-8 inline-block text-sm font-semibold text-teal underline underline-offset-4"
            >
              Read the membership policy
            </Link>
          </div>

          <div className="border border-border bg-card p-8 lg:p-10">
            <p className="eyebrow mb-5">
              Selected: {selected.name} · {inr(selected.fee)}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                placeholder="Full name"
                aria-label="Full name"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal sm:col-span-2"
              />
              <input
                placeholder="Email"
                type="email"
                aria-label="Email"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              />
              <input
                placeholder="Phone"
                aria-label="Phone"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              />
              <input
                placeholder="City"
                aria-label="City"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              />
              <input
                placeholder="PAN / Aadhaar"
                aria-label="PAN or Aadhaar"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              />
              <textarea
                rows={3}
                placeholder="Why do you want to join?"
                aria-label="Why do you want to join"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal sm:col-span-2"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="mt-6 w-full rounded-sm bg-teal py-3.5 text-sm font-semibold text-cream"
            >
              Submit application
            </button>
            {sent && (
              <p className="mt-4 rounded-sm bg-teal/10 px-4 py-3 text-sm text-teal">
                Form submission is wired up in a later pass — nothing has been sent yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
