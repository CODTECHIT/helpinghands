"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Receipt, Repeat, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CAMPAIGNS, inr } from "@/data/content";

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

const IMPACT: Record<number, string> = {
  500: "Funds one school kit, delivered on the first day of term.",
  1000: "Covers a month of one child's library facilitation.",
  2500: "Pays for twelve rural health consultations.",
  5000: "Sponsors one woman's first month of skill training.",
  10000: "Plants and maintains 60 trees for three years.",
};

export function DonatePage() {
  const [mode, setMode] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(2500);
  const [custom, setCustom] = useState("");
  const [designation, setDesignation] = useState("Where it's needed most");
  const [submitted, setSubmitted] = useState(false);

  const effective = custom ? Number(custom) || 0 : amount;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Give"
        title="Every rupee is tracked, reported and audited."
        intro="Choose an amount, choose where it goes, and receive an 80G receipt within 48 hours. Administrative costs are capped at 10% and currently stand at 7.8%."
        aside={
          <div className="flex flex-wrap gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-teal" /> 80G & 12A registered
            </span>
            <span className="flex items-center gap-1.5">
              <Receipt className="size-3.5 text-teal" /> Receipt in 48 hours
            </span>
          </div>
        }
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="border border-border bg-card p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border">
              {(["once", "monthly"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`py-3 text-sm font-semibold transition-colors ${
                    mode === m ? "bg-navy text-cream" : "bg-cream text-ink/70 hover:text-navy"
                  }`}
                >
                  {m === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            <p className="eyebrow mt-8 mb-4">Select an amount</p>
            <div className="grid grid-cols-3 gap-3">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`rounded-sm border py-3 text-sm font-semibold transition-colors ${
                    !custom && amount === a
                      ? "border-teal bg-teal/10 text-teal"
                      : "border-border text-ink/75 hover:border-teal/50"
                  }`}
                >
                  {inr(a)}
                </button>
              ))}
              <input
                value={custom}
                onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="Other"
                inputMode="numeric"
                aria-label="Custom donation amount in rupees"
                className="rounded-sm border border-border bg-cream px-3 py-3 text-center text-sm outline-none focus:border-teal"
              />
            </div>

            {IMPACT[effective] && <p className="mt-4 text-sm text-ink/70">{IMPACT[effective]}</p>}

            <p className="eyebrow mt-8 mb-3">Direct my gift to</p>
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              aria-label="Donation designation"
              className="w-full rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
            >
              <option>Where it's needed most</option>
              {CAMPAIGNS.map((c) => (
                <option key={c.slug}>{c.title}</option>
              ))}
            </select>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <input
                placeholder="Full name"
                aria-label="Full name"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
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
                placeholder="PAN (for 80G)"
                aria-label="PAN for 80G receipt"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              />
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="mt-7 w-full rounded-sm bg-coral py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              {mode === "monthly"
                ? `Give ${inr(effective)} every month`
                : `Donate ${inr(effective)}`}
            </button>

            {submitted && (
              <p className="mt-4 rounded-sm bg-teal/10 px-4 py-3 text-sm text-teal">
                Payment gateway connection is scheduled for the next build pass — your selection is
                captured and nothing has been charged.
              </p>
            )}

            <p className="mt-5 text-center text-[11px] leading-relaxed text-muted-foreground">
              Donations to Helping Hands Foundation are exempt under Section 80G of the Income Tax
              Act. Foreign contributions accepted only through our designated FCRA account.
            </p>
          </div>

          <div className="space-y-10">
            <Reveal>
              <div>
                <p className="eyebrow rule-teal">Other ways to give</p>
                <div className="mt-4 space-y-px bg-border">
                  {[
                    {
                      icon: Repeat,
                      t: "Monthly giving circle",
                      d: "Predictable funding lets us hire facilitators on annual contracts instead of month to month.",
                    },
                    {
                      icon: Building2,
                      t: "Corporate CSR",
                      d: "Project-wise MoUs, quarterly utilisation reports and Schedule VII compliant documentation.",
                    },
                    {
                      icon: Receipt,
                      t: "Bank transfer / UPI",
                      d: "A/C 000000000000 · IFSC [PLACEHOLDER] · UPI helpinghands@bank",
                    },
                  ].map(({ icon: Icon, t, d }) => (
                    <div key={t} className="bg-cream p-6">
                      <p className="flex items-center gap-2 font-display text-lg text-brown">
                        <Icon className="size-4 text-teal" /> {t}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-navy p-8 text-on-navy">
                <p className="eyebrow text-on-navy/70">Accountability</p>
                <p className="mt-4 font-display text-2xl leading-snug">
                  7.8% administration. 92.2% programmes.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-navy/75">
                  Audited accounts, Form 10B and quarterly utilisation statements are published
                  openly — including unspent balances.
                </p>
                <Link
                  href="/documents"
                  className="mt-6 inline-block rounded-sm border border-on-navy/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-on-navy hover:text-navy"
                >
                  View documents
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
