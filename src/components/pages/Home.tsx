"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  Leaf,
  Users,
  CalendarDays,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

const NEWS = [
  {
    tag: "Field Report",
    title: "How 12 village libraries changed reading habits",
    date: "18 Jul 2026",
  },
  { tag: "Press", title: "Foundation recognised at State CSR Conclave", date: "02 Jul 2026" },
  { tag: "Update", title: "Annual Report 2025-26 is now available", date: "24 Jun 2026" },
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export function Home() {
  const [ti, setTi] = useState(0);
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBg((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1828] border-b border-border text-white">
        {/* Full-Bleed Background Images for Both Desktop and Mobile */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Background Slide 1 */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              activeBg === 0
                ? "opacity-100 translate-x-0 scale-105"
                : "opacity-0 translate-x-12 scale-100"
            }`}
          >
            <img
              src="/ngo-bg-1.png"
              alt="Education and Community Volunteers"
              className="size-full object-cover object-center sm:object-[center_top]"
            />
          </div>
          {/* Background Slide 2 */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              activeBg === 1
                ? "opacity-100 translate-x-0 scale-105"
                : "opacity-0 -translate-x-12 scale-100"
            }`}
          >
            <img
              src="/ngo-bg-2.png"
              alt="Healthcare and Environmental Conservation"
              className="size-full object-cover object-center sm:object-[center_top]"
            />
          </div>
          {/* Responsive Multi-Layer Gradient Overlay for Typography Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1828]/95 via-[#0A1828]/85 to-[#0A1828]/50 sm:via-[#0A1828]/80 sm:to-transparent dark:from-background dark:via-background/85 dark:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1828] via-transparent to-transparent" />
        </div>

        <div className="shell relative z-10 flex min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex-col justify-center py-14 sm:py-20 lg:py-28">
          <div className="max-w-2xl bg-[#0A1828]/35 sm:bg-transparent p-4 sm:p-0 rounded-2xl backdrop-blur-[2px] sm:backdrop-blur-none border border-white/10 sm:border-transparent shadow-lg sm:shadow-none">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300 shadow-md backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> Registered
              Non-Profit · Est. 2014
            </div>
            <h1 className="mt-5 max-w-[15ch] font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              Together, We Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange to-coral">
                Change Lives
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-cream/95 font-normal">
              We're building Helping Hands Foundation to reach where help is hardest to find — old
              age care, medical relief, education for poor children, and support for women, in and
              around Adoni, Kurnool District. Every rupee will be tracked and audited from day one.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/donate"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-coral to-orange px-8 py-4 text-base font-bold text-white shadow-xl shadow-coral/30 transition-all duration-300 hover:scale-105 hover:shadow-coral/50 text-center"
              >
                Donate Now{" "}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-black/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:border-white/60 text-center"
              >
                See Our Work
              </Link>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-8 sm:mt-12 border-t border-white/20 pt-6 text-xs font-medium text-cream/90">
              <span className="flex items-center gap-2">
                <span className="text-amber-300 font-bold">●</span> Registered Public Charitable
                Trust · Applications for 12A, 80G & NGO Darpan in progress
              </span>
            </div>
          </div>
        </div>

        {/* Floating Glassmorphic Slide Indicator Widget (Visible on both Desktop & Mobile) */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/20 bg-black/60 px-4 py-2.5 sm:px-5 sm:py-3.5 text-white shadow-2xl backdrop-blur-md">
          <div className="flex size-8 sm:size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-coral to-orange shadow-md">
            {activeBg === 0 ? (
              <BookOpen className="size-4 sm:size-5" />
            ) : (
              <Leaf className="size-4 sm:size-5" />
            )}
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                {activeBg === 0 ? "Program Focus 01" : "Program Focus 02"}
              </span>
              <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-sm font-bold text-white">
              {activeBg === 0
                ? "Rural Education & Youth Support"
                : "Healthcare & Green Environment"}
            </p>
          </div>
          <div className="flex items-center gap-1.5 border-l border-white/20 pl-3 sm:ml-2 sm:pl-4">
            <button
              type="button"
              onClick={() => setActiveBg(0)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeBg === 0 ? "w-6 bg-coral" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label="Slide 1"
            />
            <button
              type="button"
              onClick={() => setActiveBg(1)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeBg === 1 ? "w-6 bg-teal-light" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label="Slide 2"
            />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS — asymmetric */}
      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow rule-teal">Our Focus Areas</p>
              <h2 className="font-display text-3xl text-brown lg:text-[2.75rem] lg:leading-[1.1]">
                Commitments chosen based on community needs.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <Reveal className="h-full">
              <article className="flex h-full flex-col justify-between rounded-md bg-navy p-9 text-on-navy lg:p-12">
                <div>
                  <BookOpen className="size-9 text-orange" />
                  <h3 className="mt-8 font-display text-3xl lg:text-4xl">Education</h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-on-navy/75">
                    Local reading rooms, learning materials, and scholarship support for children in
                    need in and around Adoni, Kurnool District.
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-on-navy/20 pt-6">
                  <p className="font-display text-2xl text-orange">Scholarships & Libraries</p>
                  <Link href="/projects" className="text-sm font-medium hover:text-orange">
                    Explore <ArrowUpRight className="inline size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  icon: HeartPulse,
                  t: "Healthcare",
                  d: "Mobile camps, diagnostics and maternal care in underserved blocks.",
                },
                {
                  icon: Users,
                  t: "Women Empowerment",
                  d: "Skill centres, micro-enterprise seed grants and legal aid.",
                },
                {
                  icon: Leaf,
                  t: "Environment",
                  d: "Plantation drives, water bodies revival and waste literacy.",
                },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 90}>
                  <article className="group h-full rounded-md border border-border bg-card p-7 transition-shadow hover:shadow-soft">
                    <f.icon className="size-6 text-teal" />
                    <h3 className="mt-5 font-display text-xl text-brown">{f.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — alternating */}
      <section className="section-pad">
        <div className="shell space-y-10 sm:space-y-16 lg:space-y-20">
          {[
            {
              tag: "Education · Kurnool District",
              t: "The Bridge School Programme",
              d: "Helping children return to school through intensive local bridge classes, and providing government school integration with continued mentoring.",
              stat: "Targeting 2,000+ poor children",
            },
            {
              tag: "Health · Adoni Mandal",
              t: "Doctor On Wheels",
              d: "A proposed fully equipped medical van to cover villages on a fixed weekly rota, offering diagnostics, medicines, checks and referrals.",
              stat: "Planned weekly service",
            },
          ].map((p, i) => (
            <Reveal key={p.t}>
              <article
                className={`grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] rounded-md border border-border bg-gradient-to-br from-teal/15 via-sand to-orange/20" />
                <div>
                  <p className="eyebrow">{p.tag}</p>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl text-brown lg:text-[2.25rem] lg:leading-tight">
                    {p.t}
                  </h3>
                  <p className="mt-4 sm:mt-5 max-w-lg leading-relaxed text-ink/75">{p.d}</p>
                  <p className="mt-4 sm:mt-6 font-display text-lg sm:text-xl text-teal">{p.stat}</p>
                  <Link
                    href="/projects"
                    className="mt-5 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal"
                  >
                    View project <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-10 sm:py-14">
        <div className="shell">
          <p className="eyebrow text-center">Partners &amp; Sponsors</p>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Aarohan",
              "Sunrise CSR",
              "Bharat Steel",
              "Vidya Trust",
              "Medico Labs",
              "GreenWorks",
            ].map((p) => (
              <div
                key={p}
                className="flex h-14 items-center justify-center rounded-sm border border-border font-display text-sm text-muted-foreground grayscale transition-all hover:border-teal hover:text-teal hover:grayscale-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS & PRESS */}
      <section className="section-pad bg-sand">
        <div className="shell max-w-3xl">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow rule-teal">News &amp; Press</p>
                <h2 className="font-display text-2xl text-brown">
                  From the field and the press desk
                </h2>
              </div>
              <Link href="/news" className="text-sm font-semibold text-teal hover:text-navy">
                All stories <ArrowUpRight className="inline size-4" />
              </Link>
            </div>
            <div className="mt-7 space-y-4">
              {NEWS.map((n) => (
                <article
                  key={n.title}
                  className="group flex items-center gap-6 rounded-md border border-border bg-card p-5 transition-colors hover:border-teal"
                >
                  <div className="hidden size-20 shrink-0 rounded-sm bg-gradient-to-br from-navy/10 to-teal/20 sm:block" />
                  <div>
                    <p className="eyebrow">{n.tag}</p>
                    <h3 className="mt-2 font-display text-lg leading-snug text-brown">{n.title}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="size-3" /> {n.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy-deep py-16 text-on-navy">
        <div className="shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl">Get one honest update a month.</h2>
            <p className="mt-2 text-sm text-on-navy/70">
              Field notes, fund utilisation and upcoming drives. No spam, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-sm border border-on-navy/25 bg-transparent px-4 py-3 text-sm placeholder:text-on-navy/40 focus:border-orange focus:outline-none"
            />
            <button className="shrink-0 rounded-sm bg-orange px-6 py-3 text-sm font-semibold text-navy-deep">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
