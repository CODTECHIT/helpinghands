import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export type LegalSection = { heading: string; paras: string[]; list?: string[] };

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_16rem]">
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 30}>
                <div id={`s-${i + 1}`} className="border-b border-border pb-8 pt-8 first:pt-0">
                  <h2 className="font-display text-2xl leading-snug text-brown">
                    <span className="mr-3 text-orange">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </h2>
                  {s.paras.map((p) => (
                    <p key={p} className="mt-4 text-[15px] leading-relaxed text-ink/75">
                      {p}
                    </p>
                  ))}
                  {s.list ? (
                    <ul className="mt-4 space-y-2 border-l-2 border-teal/40 pl-5">
                      {s.list.map((l) => (
                        <li key={l} className="text-[15px] leading-relaxed text-ink/75">
                          {l}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="self-start lg:sticky lg:top-28">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-4">On this page</p>
              <ol className="space-y-2.5">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#s-${i + 1}`}
                      className="text-sm leading-snug text-ink/70 transition-colors hover:text-teal"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                Last updated {updated}
              </p>
              <a
                href="mailto:legal@helpinghandsfoundation.org"
                className="mt-3 inline-block text-xs font-semibold text-teal"
              >
                legal@helpinghandsfoundation.org
              </a>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
