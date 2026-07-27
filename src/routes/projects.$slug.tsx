import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, CalendarRange, Users, Wallet } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, inr, type Project } from "@/data/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found | Helping Hands Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} | Helping Hands Foundation`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectMissing,
  component: ProjectDetail,
});

function ProjectMissing() {
  return (
    <SiteLayout>
      <section className="shell flex min-h-[55vh] flex-col justify-center py-24">
        <p className="eyebrow rule-teal">404</p>
        <h1 className="font-display text-4xl text-brown">We can't find that project.</h1>
        <Link
          to="/projects"
          className="mt-8 w-fit rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-cream"
        >
          Back to all projects
        </Link>
      </section>
    </SiteLayout>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const related = PROJECTS.filter(
    (p) => p.focus === project.focus && p.slug !== project.slug,
  ).slice(0, 2);

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="shell py-14 lg:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ink/50 uppercase transition-colors hover:text-teal"
          >
            <ArrowLeft className="size-3.5" /> All projects
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="eyebrow">
                {project.focus} · {project.status}
              </p>
              <h1 className="mt-4 max-w-[18ch] font-display text-4xl leading-[1.08] text-brown lg:text-[3.2rem]">
                {project.title}
              </h1>
            </div>
            <div className="self-end">
              <p className="text-[17px] leading-relaxed text-ink/75">{project.summary}</p>
            </div>
          </div>

          <dl className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Location", value: project.location },
              { icon: CalendarRange, label: "Period", value: project.year },
              { icon: Users, label: "Reached", value: project.beneficiaries },
              { icon: Wallet, label: "Budget", value: inr(project.budget) },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-cream p-6">
                <dt className="flex items-center gap-2 text-[11px] tracking-widest text-muted-foreground uppercase">
                  <Icon className="size-3.5" /> {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-brown">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow rule-teal">The work</p>
            {project.story.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className={`text-[17px] leading-[1.85] text-ink/80 ${i ? "mt-6" : ""}`}>
                  {para}
                </p>
              </Reveal>
            ))}

            <div className="mt-14">
              <p className="eyebrow mb-6">Outcomes to date</p>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {project.outcomes.map((o) => (
                  <div key={o.label} className="bg-cream py-7 pr-6">
                    <p className="font-display text-3xl text-navy">{o.value}</p>
                    <p className="mt-1 text-sm text-ink/65">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-10">
            <div className="border border-border bg-card p-8">
              <p className="eyebrow mb-4">Partners</p>
              <ul className="space-y-3">
                {project.partners.map((p) => (
                  <li
                    key={p}
                    className="border-b border-border pb-3 text-sm text-ink/75 last:border-0 last:pb-0"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy p-8 text-on-navy">
              <p className="font-display text-2xl leading-snug">Support this project</p>
              <p className="mt-3 text-sm leading-relaxed text-on-navy/75">
                Contributions are receipted within 48 hours and eligible for 80G exemption.
              </p>
              <Link
                to="/donate"
                className="mt-6 inline-block rounded-sm bg-coral px-6 py-3 text-sm font-semibold text-cream"
              >
                Donate now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-16">
          <div className="shell">
            <p className="eyebrow rule-teal">More in {project.focus}</p>
            <div className="mt-6 grid gap-px bg-border sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/projects/$slug"
                  params={{ slug: r.slug }}
                  className="bg-cream p-8 transition-colors hover:bg-card"
                >
                  <h3 className="font-display text-xl text-brown">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
