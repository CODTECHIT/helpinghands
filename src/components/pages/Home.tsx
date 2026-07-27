"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  Leaf,
  Users,
  Quote,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

const COUNTERS = [
  { label: "Lives Impacted", value: 48250, suffix: "+" },
  { label: "Volunteers", value: 1240, suffix: "+" },
  { label: "Projects Completed", value: 186, suffix: "" },
  { label: "Cities Reached", value: 34, suffix: "" },
];

const CAMPAIGNS = [
  {
    title: "School Kits for 2,000 Children",
    cat: "Education",
    raised: 742000,
    goal: 1200000,
    days: 24,
  },
  {
    title: "Mobile Health Camp — Rural Belt",
    cat: "Health",
    raised: 385000,
    goal: 600000,
    days: 11,
  },
  { title: "Skill Centre for Women", cat: "Empowerment", raised: 918000, goal: 1000000, days: 39 },
];

const EVENTS = [
  { d: "12", m: "Aug", title: "Community Health Camp", place: "Nashik, MH" },
  { d: "27", m: "Aug", title: "Volunteer Orientation", place: "Pune, MH" },
  { d: "05", m: "Sep", title: "Teachers' Day Felicitation", place: "Nagpur, MH" },
  { d: "21", m: "Sep", title: "Tree Plantation Drive", place: "Aurangabad, MH" },
];

const TESTIMONIALS = [
  {
    quote:
      "My daughter was out of school for two years. The Foundation's team enrolled her, arranged books, and today she wants to become a doctor.",
    name: "Sunita Kale",
    role: "Parent, Education Programme",
  },
  {
    quote:
      "I volunteered for one health camp and stayed for three years. The way this team plans on the ground is simply unmatched.",
    name: "Rahul Deshmukh",
    role: "Volunteer since 2022",
  },
  {
    quote:
      "As a CSR partner, we get quarterly utilisation reports down to the last rupee. That transparency is rare.",
    name: "Anita Rao",
    role: "CSR Head, Partner Company",
  },
];

const DONORS = [
  { name: "Vikram S.", amount: 25000, city: "Mumbai" },
  { name: "Anonymous Donor", amount: 11000, city: "Delhi" },
  { name: "Priya M.", amount: 5100, city: "Pune" },
  { name: "Anonymous Donor", amount: 50000, city: "Bengaluru" },
  { name: "Imran K.", amount: 2100, city: "Hyderabad" },
  { name: "Neha J.", amount: 7500, city: "Indore" },
];

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

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

function ProgressBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setW(pct);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [pct]);
  return (
    <div ref={ref} className="h-1.5 w-full overflow-hidden rounded-full bg-sand">
      <div
        className="h-full rounded-full bg-orange transition-[width] duration-1000 ease-out"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

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
              We work where help is hardest to reach — classrooms without teachers, villages without
              clinics, women without a first income. Every rupee is tracked, reported and audited.
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

            {/* TRUST STRIP CHECKMARKS */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 pt-6 text-xs font-medium text-cream/90">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> 80G tax exemption available
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> 12A registered
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> NGO Darpan listed
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

      {/* IMPACT STRIP — Luxury High-Contrast Sand/Cream Section */}
      <section className="bg-gradient-to-b from-[#F7F4EE] to-[#EFEAE1] text-[#0A1828] py-14 sm:py-20 border-b border-border shadow-inner">
        <div className="shell">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTERS.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-border/60 bg-white p-6 sm:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange/40 flex flex-col justify-center"
              >
                <p className="font-display text-4xl sm:text-5xl text-coral font-bold tracking-tight">
                  <Counter value={c.value} suffix={c.suffix} />
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-navy/75">
                  {c.label}
                </p>
              </div>
            ))}
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
                Four commitments, chosen because the gap is widest there.
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
                    Bridge schools, learning kits, village libraries and scholarship support for
                    first-generation learners across 34 cities and their surrounding blocks.
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between border-t border-on-navy/20 pt-6">
                  <p className="font-display text-2xl text-orange">21,400 children</p>
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

      {/* CAMPAIGNS */}
      <section className="section-pad bg-sand">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow rule-teal">Active Campaigns</p>
              <h2 className="font-display text-3xl text-brown lg:text-[2.5rem]">
                Fund a specific outcome, not a vague cause.
              </h2>
            </div>
            <Link href="/campaigns" className="text-sm font-semibold text-teal hover:text-navy">
              All campaigns <ArrowUpRight className="inline size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {CAMPAIGNS.map((c, i) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <Reveal key={c.title} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-md border border-border bg-card p-7">
                    <p className="eyebrow">{c.cat}</p>
                    <h3 className="mt-3 font-display text-xl leading-snug text-brown">{c.title}</h3>
                    <div className="mt-auto pt-8">
                      <div className="mb-2 flex items-baseline justify-between text-sm">
                        <span className="font-semibold text-navy">{inr(c.raised)}</span>
                        <span className="text-muted-foreground">of {inr(c.goal)}</span>
                      </div>
                      <ProgressBar pct={pct} />
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-orange">{pct}% funded</span>
                        <span>{c.days} days left</span>
                      </div>
                      <div className="mt-6 flex gap-2">
                        <Link
                          href="/donate"
                          className="flex-1 rounded-sm bg-coral px-4 py-2.5 text-center text-sm font-semibold text-cream"
                        >
                          Donate
                        </Link>
                        <Link
                          href="/campaigns"
                          className="flex-1 rounded-sm border border-border px-4 py-2.5 text-center text-sm font-medium text-navy hover:border-navy"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Sample data — campaigns are editable from the admin panel.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS — alternating */}
      <section className="section-pad">
        <div className="shell space-y-10 sm:space-y-16 lg:space-y-20">
          {[
            {
              tag: "Education · Maharashtra",
              t: "The Bridge School Programme",
              d: "Children who dropped out during the pandemic are brought back through six-month intensive bridge classes, then mainstreamed into government schools with continued mentoring.",
              stat: "3,180 children re-enrolled",
            },
            {
              tag: "Health · Rural Belt",
              t: "Doctor On Wheels",
              d: "A fully equipped medical van covers eleven villages on a fixed weekly rota, offering diagnostics, medicines, antenatal checks and referrals — free of cost.",
              stat: "112 camps in 2025-26",
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

      {/* EVENTS STRIP */}
      <section className="border-y border-border bg-sand py-8 sm:py-12">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-brown">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-semibold text-teal hover:text-navy">
              Full calendar <ArrowUpRight className="inline size-4" />
            </Link>
          </div>
          <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EVENTS.map((e) => (
              <article
                key={e.title}
                className="flex gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-teal"
              >
                <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-sm bg-navy text-on-navy">
                  <span className="font-display text-lg leading-none">{e.d}</span>
                  <span className="text-[10px] uppercase tracking-widest">{e.m}</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold leading-snug text-navy">{e.title}</h3>
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" /> {e.place}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-navy text-on-navy">
        <div className="shell max-w-4xl">
          <Quote className="size-10 text-orange" />
          <blockquote className="mt-8 font-display text-2xl leading-[1.45] lg:text-[2.1rem]">
            “{TESTIMONIALS[ti].quote}”
          </blockquote>
          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-teal/40" />
              <div>
                <p className="font-semibold">{TESTIMONIALS[ti].name}</p>
                <p className="text-sm text-on-navy/65">{TESTIMONIALS[ti].role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setTi(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === ti ? "w-8 bg-orange" : "w-3 bg-on-navy/30"
                  }`}
                />
              ))}
            </div>
          </div>
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

      {/* DONOR WALL + NEWS */}
      <section className="section-pad bg-sand">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow rule-teal">Recent Donors</p>
            <h2 className="font-display text-2xl text-brown">
              Thank you, every single one of you.
            </h2>
            <ul className="mt-7 divide-y divide-border border-y border-border">
              {DONORS.map((d, i) => (
                <li key={i} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-ink/80">
                    {d.name} <span className="text-muted-foreground">· {d.city}</span>
                  </span>
                  <span className="font-semibold text-teal">{inr(d.amount)}</span>
                </li>
              ))}
            </ul>
          </div>

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
