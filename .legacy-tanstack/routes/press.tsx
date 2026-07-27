import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, Mail } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRESS_ITEMS } from "@/data/content";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press & Media | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Press coverage of Helping Hands Foundation, media enquiry contacts, our brand assets and the boilerplate description journalists may quote.",
      },
      { property: "og:title", content: "Press & Media | Helping Hands Foundation" },
      {
        property: "og:description",
        content: "Coverage, media contacts, brand assets and our official boilerplate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PressPage,
});

const KIT = [
  { name: "Logo pack (SVG, PNG)", size: "2.4 MB" },
  { name: "Brand guidelines", size: "1.1 MB" },
  { name: "Field photography (approved set)", size: "38 MB" },
  { name: "Fact sheet 2026", size: "480 KB" },
];

function PressPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Press"
        title="For journalists: the facts, the photographs and a named contact."
        intro="We respond to media enquiries within one working day. Field visits can be arranged with a week's notice, subject to our child-safeguarding protocol."
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="eyebrow rule-teal">Coverage</p>
            <ul className="mt-2">
              {PRESS_ITEMS.map((p, i) => (
                <Reveal key={p.title} delay={i * 40}>
                  <li className="flex flex-wrap items-start justify-between gap-4 border-b border-border py-6">
                    <div className="max-w-2xl">
                      <p className="text-xs uppercase tracking-[0.16em] text-teal">
                        {p.outlet} · {p.kind}
                      </p>
                      <h2 className="mt-2 font-display text-xl leading-snug text-brown">
                        {p.title}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground">{p.date}</p>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-sm border border-navy px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      Read <ExternalLink className="size-3.5" />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-14 border-t border-border pt-10">
              <p className="eyebrow rule-teal">Boilerplate</p>
              <p className="mt-2 max-w-3xl font-display text-xl leading-relaxed text-brown">
                “Helping Hands Foundation is a public charitable trust registered in Pune in 2011,
                working across education, healthcare, women's enterprise and environmental
                restoration in rural Maharashtra. It has reached over 52,000 direct beneficiaries
                and publishes fund utilisation quarterly.”
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Please quote verbatim. For any other description, check with us first.
              </p>
            </div>
          </div>

          <aside className="space-y-8 self-start lg:sticky lg:top-28">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-4">Media contact</p>
              <p className="font-display text-lg text-brown">Sneha Rane</p>
              <p className="mt-1 text-xs text-muted-foreground">Head of Programmes</p>
              <a
                href="mailto:press@helpinghandsfoundation.org"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal"
              >
                <Mail className="size-4" /> press@helpinghandsfoundation.org
              </a>
              <p className="mt-3 text-xs text-ink/65">+91 20 4000 1122 · Mon–Fri, 10am–6pm IST</p>
            </div>

            <div className="border border-border p-6">
              <p className="eyebrow mb-4">Media kit</p>
              <ul className="space-y-3">
                {KIT.map((k) => (
                  <li key={k.name} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-ink/75">{k.name}</span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`Download ${k.name}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy"
                    >
                      <Download className="size-3.5" />
                      {k.size}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-6">
              <p className="eyebrow mb-3">Field visits</p>
              <p className="text-xs leading-relaxed text-ink/65">
                Photography of children requires written guardian consent, arranged by us in
                advance. We do not permit unaccompanied filming at any programme site.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
