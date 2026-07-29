"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

const OBJECTIVES = [
  "Establish and run an Old Age Home providing food, shelter and care to the elderly, aged 60+, irrespective of caste or creed.",
  "Provide medical relief — free or subsidised treatment, medical camps, eye camps, and blood donation camps for the needy.",
  "Support and educate poor and orphaned children, including scholarships and school essentials.",
  "Run counselling services, yoga classes, and awareness programmes for community health and wellbeing.",
  "Promote women's welfare — awareness of rights, shelter for those in need, and family counselling.",
  "Provide community halls and shelters serving the public without discrimination.",
];

const COMPLIANCE = [
  { label: "Registration No.", value: "Pending registration with Sub-Registrar" },
  { label: "12A Registration", value: "Application in process" },
  { label: "80G Certificate", value: "Application in process" },
  { label: "NGO Darpan ID", value: "Application in process" },
  { label: "PAN", value: "Pending allotment" },
];

export function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow rule-teal">About Us</p>
            <h1 className="max-w-[16ch] font-display text-4xl leading-[1.08] text-brown lg:text-[3.5rem]">
              Established to serve our community in Adoni.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-[17px] leading-relaxed text-ink/75">
              Helping Hands Foundation was established as a Public Charitable Trust on 3rd August
              2026 by Sri A M Praveen Kumar, based in Adoni, Kurnool District, Andhra Pradesh. The
              Trust was founded to serve people in and around Adoni — running an old age home,
              providing medical help to the needy, supporting orphaned children, education for poor
              children, women's welfare, and community shelters — open to all, irrespective of
              caste, creed or religion.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION pull-quote */}
      <section className="section-pad">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="border-l-2 border-teal pl-8">
              <p className="eyebrow mb-4">Our Mission</p>
              <p className="font-display text-2xl leading-[1.4] text-brown lg:text-[1.85rem]">
                To provide care, dignity and opportunity to the elderly, the sick, the poor, and
                women in our community — through direct welfare programmes, free of discrimination.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-l-2 border-orange pl-8">
              <p className="eyebrow mb-4">Our Vision</p>
              <p className="font-display text-2xl leading-[1.4] text-brown lg:text-[1.85rem]">
                A community in Adoni and Kurnool District where no elderly person is without care,
                no child is without schooling, and no family is without access to basic medical
                relief.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section-pad bg-sand">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow rule-teal">Objectives</p>
            <h2 className="font-display text-3xl text-brown lg:text-4xl">
              What we hold ourselves to.
            </h2>
          </div>
          <ol className="space-y-8">
            {OBJECTIVES.map((o, i) => (
              <Reveal key={i} delay={i * 70}>
                <li className="flex gap-6 border-b border-border pb-8">
                  <span className="font-display text-2xl text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[17px] leading-relaxed text-ink/80">{o}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section-pad">
        <div className="shell">
          <div className="rounded-md border border-border bg-card p-8 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow rule-teal">Registration &amp; Compliance</p>
                <h2 className="font-display text-3xl text-brown">
                  Every number, publicly verifiable.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
                  Certificates, audit reports and annual reports are available for download in our
                  documents library.
                </p>
                <Link
                  href="/documents"
                  className="mt-7 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-4" /> Download certificates
                </Link>
              </div>
              <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {COMPLIANCE.map((c) => (
                  <div key={c.label} className="border-b border-border pb-3">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-lg text-navy">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-on-navy">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-lg font-display text-2xl lg:text-3xl">
            Want to see the work before you support it?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-sm border border-on-navy/40 px-6 py-3 text-sm font-semibold hover:border-orange hover:text-orange"
            >
              Our projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-orange px-6 py-3 text-sm font-semibold text-navy-deep"
            >
              Visit us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
