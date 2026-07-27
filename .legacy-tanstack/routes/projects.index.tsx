import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, inr } from "@/data/content";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Our Projects | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Education, healthcare, women empowerment and environment projects across Maharashtra — with locations, budgets, partners and measured outcomes.",
      },
      { property: "og:title", content: "Our Projects | Helping Hands Foundation" },
      {
        property: "og:description",
        content:
          "Browse ongoing, completed and upcoming projects with budgets, partners and measured outcomes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const FOCUS = ["All", "Education", "Healthcare", "Empowerment", "Environment"] as const;
const STATUS = ["All", "Ongoing", "Completed", "Upcoming"] as const;

const focusTone: Record<string, string> = {
  Education: "bg-teal/10 text-teal",
  Healthcare: "bg-coral/10 text-coral",
  Empowerment: "bg-orange/15 text-brown",
  Environment: "bg-navy/10 text-navy",
};

function ProjectsPage() {
  const [focus, setFocus] = useState<string>("All");
  const [status, setStatus] = useState<string>("All");

  const list = PROJECTS.filter(
    (p) => (focus === "All" || p.focus === focus) && (status === "All" || p.status === status),
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Work"
        title="Projects that are measured, not merely announced."
        intro="Every project below carries a location, a budget, a partner list and a set of outcomes we are willing to be held to. Where a number has fallen short, we say so on the project page."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div className="flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFocus(f)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    focus === f
                      ? "border-navy bg-navy text-cream"
                      : "border-border text-ink/65 hover:border-navy/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {STATUS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                    status === s
                      ? "text-teal underline underline-offset-4"
                      : "text-ink/45 hover:text-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs tracking-widest text-muted-foreground uppercase">
            {list.length} project{list.length === 1 ? "" : "s"}
          </p>

          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col bg-cream p-8 transition-colors hover:bg-card"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${focusTone[p.focus]}`}
                    >
                      {p.focus}
                    </span>
                    <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                      {p.status}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-[1.6rem] leading-tight text-brown">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5" /> {p.location}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[11px] tracking-widest text-muted-foreground uppercase">
                        Reached
                      </p>
                      <p className="font-display text-lg text-navy">{p.beneficiaries}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-teal">
                      Details
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="py-20 text-center text-ink/60">No projects match that combination yet.</p>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
            <p className="max-w-md text-sm leading-relaxed text-ink/70">
              Combined programme expenditure across active projects this year:{" "}
              <span className="font-semibold text-brown">{inr(32300000)}</span>, with administrative
              costs held at 7.8%.
            </p>
            <Link
              to="/documents"
              className="rounded-sm border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              See audited reports
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
