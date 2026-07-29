"use client";

import Link from "next/link";
import { useState } from "react";
import { HeartHandshake, GraduationCap, Stethoscope, Trees, Camera, Laptop } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const ROLES = [
  {
    icon: GraduationCap,
    name: "Reading Facilitator",
    commit: "4 hrs / week · Field",
    desc: "Run reading sessions in a village library alongside the paid facilitator.",
  },
  {
    icon: Stethoscope,
    name: "Health Camp Support",
    commit: "1 day / month · Field",
    desc: "Registration desk, queue management and referral note-taking at monthly camps.",
  },
  {
    icon: Trees,
    name: "Plantation & Survival Count",
    commit: "Seasonal · Field",
    desc: "Planting during monsoon and, more importantly, the three-year survival audit.",
  },
  {
    icon: Camera,
    name: "Documentation",
    commit: "Flexible · Field",
    desc: "Photograph and write up programme days, with consent protocol training provided.",
  },
  {
    icon: Laptop,
    name: "Digital & Data",
    commit: "3 hrs / week · Remote",
    desc: "Data entry, report formatting, translation and social media support.",
  },
  {
    icon: HeartHandshake,
    name: "Fundraising Champion",
    commit: "Flexible · Remote",
    desc: "Run a personal campaign among your own network for a specific project.",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Apply",
    d: "Tell us the role, your city and how much time you can genuinely commit.",
  },
  {
    n: "02",
    t: "Screening call",
    d: "A fifteen-minute call, plus reference and background checks for field roles.",
  },
  {
    n: "03",
    t: "Orientation",
    d: "A mandatory half-day induction covering conduct, child safety and reporting.",
  },
  { n: "04", t: "Placement", d: "You're matched to a team, a supervisor and a fixed schedule." },
];

export function VolunteerPage() {
  const [role, setRole] = useState(ROLES[0].name);
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get Involved"
        title="We would rather have four steady hours than forty enthusiastic ones."
        intro="Volunteering here is scheduled, supervised and trained. Field roles require a background check and a mandatory orientation before placement."
      />

      <section className="section-pad">
        <div className="shell">
          <p className="eyebrow rule-teal">Open roles</p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <button
                  onClick={() => {
                    setRole(r.name);
                    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`flex h-full w-full flex-col p-8 text-left transition-colors ${
                    role === r.name ? "bg-card" : "bg-cream hover:bg-card"
                  }`}
                >
                  <r.icon className="size-6 text-teal" />
                  <h2 className="mt-5 font-display text-xl text-brown">{r.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{r.desc}</p>
                  <p className="mt-5 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                    {r.commit}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-sand py-20 lg:py-24">
        <div className="shell">
          <p className="eyebrow rule-teal">How it works</p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n}>
                <p className="font-display text-3xl text-orange">{s.n}</p>
                <h3 className="mt-3 font-display text-xl text-brown">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow rule-teal">Apply</p>
            <h2 className="max-w-[16ch] font-display text-3xl leading-tight text-brown lg:text-[2.6rem]">
              Tell us where you are and what you can hold to.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">
              We place volunteers in batches. Future volunteer orientation details for our Adoni
              office will be published here once local operations begin.
            </p>
          </div>

          <div className="border border-border bg-card p-8 lg:p-10">
            <p className="eyebrow mb-5">Applying for: {role}</p>
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
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                aria-label="Preferred role"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal"
              >
                {ROLES.map((r) => (
                  <option key={r.name}>{r.name}</option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="Hours per week you can commit, and any relevant experience"
                aria-label="Availability and experience"
                className="rounded-sm border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-teal sm:col-span-2"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="mt-6 w-full rounded-sm bg-coral py-3.5 text-sm font-semibold text-cream"
            >
              Submit application
            </button>
            {sent && (
              <p className="mt-4 rounded-sm bg-teal/10 px-4 py-3 text-sm text-teal">
                Form submission gets wired up in the next pass — nothing has been sent yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
