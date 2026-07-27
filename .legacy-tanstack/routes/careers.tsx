import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { JOBS } from "@/data/content";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Openings | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Open roles at Helping Hands Foundation across education, health, finance and communications — field-based and Pune office positions, with what the work actually involves.",
      },
      { property: "og:title", content: "Careers & Openings | Helping Hands Foundation" },
      {
        property: "og:description",
        content: "Field and office roles across education, health, finance and communications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

const HIRING = [
  {
    step: "01",
    title: "Application",
    text: "Send a CV and a short note on why this role. No cover-letter templates, please.",
  },
  {
    step: "02",
    title: "Field conversation",
    text: "A programme visit and an unstructured conversation with the team you would join.",
  },
  {
    step: "03",
    title: "Written task",
    text: "A short, paid, realistic task — the kind of work the role does weekly.",
  },
  {
    step: "04",
    title: "Offer & references",
    text: "Two references, a safeguarding check, and a written offer with a clear scope.",
  },
];

function CareersPage() {
  const [open, setOpen] = useState<string | null>(JOBS[0]?.slug ?? null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Work with us"
        title="Small team. Long field days. Very little hierarchy."
        intro="We hire slowly and keep people for years. Salaries are benchmarked against the sector median and published internally. Every role below is funded for at least twenty-four months."
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="eyebrow rule-teal">Current openings</p>
            <div className="mt-2">
              {JOBS.map((job, i) => {
                const isOpen = open === job.slug;
                return (
                  <Reveal key={job.slug} delay={i * 40}>
                    <article className="border-b border-border py-6">
                      <button
                        onClick={() => setOpen(isOpen ? null : job.slug)}
                        aria-expanded={isOpen}
                        className="flex w-full flex-wrap items-start justify-between gap-4 text-left"
                      >
                        <div>
                          <h2 className="font-display text-xl leading-snug text-brown">
                            {job.title}
                          </h2>
                          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="size-3.5 text-teal" />
                              {job.location}
                            </span>
                            <span>{job.type}</span>
                            <span>{job.experience}</span>
                          </p>
                        </div>
                        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/60">
                          {job.team}
                        </span>
                      </button>

                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">
                        {job.summary}
                      </p>

                      {isOpen ? (
                        <div className="mt-5 border-l-2 border-teal/40 pl-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                            What the role owns
                          </p>
                          <ul className="mt-3 space-y-2">
                            {job.responsibilities.map((r) => (
                              <li key={r} className="text-sm leading-relaxed text-ink/70">
                                — {r}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="mailto:careers@helpinghandsfoundation.org"
                            className="mt-5 inline-flex items-center gap-2 rounded-sm bg-teal px-5 py-2.5 text-xs font-semibold text-cream"
                          >
                            Apply for this role <ArrowRight className="size-3.5" />
                          </a>
                        </div>
                      ) : null}
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-12 border border-dashed border-border p-6">
              <p className="font-display text-lg text-brown">Nothing here fits?</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
                Write to us anyway. We keep open applications on file for twelve months and read
                every one before a new role is advertised.
              </p>
            </div>
          </div>

          <aside className="space-y-8 self-start lg:sticky lg:top-28">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-5">How we hire</p>
              <ol className="space-y-5">
                {HIRING.map((h) => (
                  <li key={h.step}>
                    <p className="font-display text-sm text-orange">{h.step}</p>
                    <p className="mt-1 text-sm font-semibold text-brown">{h.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/65">{h.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-border p-6">
              <p className="eyebrow mb-3">Equal opportunity</p>
              <p className="text-xs leading-relaxed text-ink/65">
                We hire without regard to caste, religion, gender, disability or marital status.
                Field roles are open to women and we cover safe transport and accommodation where
                required.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
