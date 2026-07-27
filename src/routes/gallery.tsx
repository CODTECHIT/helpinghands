import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { GALLERY } from "@/data/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "Photographs from the field — reading rooms, health camps, skill-centre cohorts and plantation drives across Maharashtra.",
      },
      { property: "og:title", content: "Gallery | Helping Hands Foundation" },
      {
        property: "og:description",
        content:
          "Photographs from our education, healthcare, empowerment and environment programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const CATS = ["All", "Education", "Healthcare", "Empowerment", "Environment"] as const;

const tones: Record<string, string> = {
  teal: "from-teal/25 to-teal/5",
  navy: "from-navy/25 to-navy/5",
  orange: "from-orange/30 to-orange/5",
  coral: "from-coral/25 to-coral/5",
};

function GalleryPage() {
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = GALLERY.filter((g) => cat === "All" || g.cat === cat);
  const active = GALLERY.find((g) => g.id === open);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Photographs taken during work, not for it."
        intro="Every image here was shot by a field team member or a volunteer during an actual programme day. Nothing is staged, and no faces appear without consent."
      />

      <section className="section-pad">
        <div className="shell">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  cat === c
                    ? "border-navy bg-navy text-cream"
                    : "border-border text-ink/65 hover:border-navy/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g, i) => (
              <Reveal key={g.id} delay={i * 50}>
                <button
                  onClick={() => setOpen(g.id)}
                  className={`group relative block w-full overflow-hidden border border-border bg-gradient-to-br ${tones[g.tone]} ${
                    i % 5 === 0 ? "aspect-4/5" : "aspect-4/3"
                  }`}
                >
                  <span className="absolute inset-x-0 bottom-0 bg-navy/85 p-4 text-left text-xs text-cream opacity-0 transition-opacity group-hover:opacity-100">
                    {g.caption}
                  </span>
                  <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-brown">
                    {g.cat}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Image files are placeholders — drop your photographs in and the layout stays identical.
          </p>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/90 p-6"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 text-cream/80 hover:text-cream"
            onClick={() => setOpen(null)}
          >
            <X className="size-6" />
          </button>
          <figure className="max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div
              className={`aspect-4/3 w-full bg-gradient-to-br ${tones[active.tone]} border border-cream/20`}
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              {active.caption} · {active.cat}
            </figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
