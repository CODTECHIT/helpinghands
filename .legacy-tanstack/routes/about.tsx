import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Our founding story, mission and vision, objectives, and registration and compliance details — 12A, 80G, NGO Darpan and FCRA.",
      },
      { property: "og:title", content: "About Helping Hands Foundation" },
      {
        property: "og:description",
        content:
          "Founding story, mission and vision, objectives, and registration and compliance details of Helping Hands Foundation.",
      },
    ],
  }),
  component: About,
});

const OBJECTIVES = [
  "Ensure every child in our operating blocks completes at least secondary education.",
  "Take primary healthcare within five kilometres of every household we serve.",
  "Enable 5,000 women to earn a first independent income by 2030.",
  "Restore and maintain community water bodies and green cover in partner villages.",
  "Publish audited, project-wise fund utilisation every single quarter.",
];

const COMPLIANCE = [
  { label: "Registration No.", value: "[PLACEHOLDER]" },
  { label: "12A Registration", value: "[12A NUMBER]" },
  { label: "80G Certificate", value: "[80G NUMBER]" },
  { label: "NGO Darpan ID", value: "[DARPAN ID]" },
  { label: "FCRA Number", value: "[FCRA NUMBER]" },
  { label: "PAN", value: "[PAN NUMBER]" },
];

function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow rule-teal">About Us</p>
            <h1 className="max-w-[16ch] font-display text-4xl leading-[1.08] text-brown lg:text-[3.5rem]">
              It began with one classroom and eleven children.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-[17px] leading-relaxed text-ink/75">
              In 2014, a group of five friends rented a single room behind a municipal school and
              started evening classes for children who had stopped attending. Twelve years later,
              Helping Hands Foundation runs education, health, empowerment and environment
              programmes across 34 cities — but the working method has not changed: show up, stay
              long, and count everything.
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
                To remove the everyday obstacles — distance, cost, information, dignity — that keep
                people from education, health and honest work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-l-2 border-orange pl-8">
              <p className="eyebrow mb-4">Our Vision</p>
              <p className="font-display text-2xl leading-[1.4] text-brown lg:text-[1.85rem]">
                A country where a child's postcode no longer decides how far they will study, or how
                long they will live.
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
                  to="/documents"
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
              to="/projects"
              className="rounded-sm border border-on-navy/40 px-6 py-3 text-sm font-semibold hover:border-orange hover:text-orange"
            >
              Our projects
            </Link>
            <Link
              to="/contact"
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
