"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DOCUMENTS } from "@/data/content";

const CATS = ["All", "Annual Reports", "Financials", "Registrations", "Policies"] as const;

export function DocumentsPage() {
  const [cat, setCat] = useState<string>("All");
  const list = DOCUMENTS.filter((d) => cat === "All" || d.cat === cat);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Transparency"
        title="Everything a donor is entitled to ask for, already published."
        intro="We publish quarterly rather than annually, and we list unspent balances alongside spend. If a document you need is missing, write to us and we will publish it here."
      />

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_18rem]">
          <div>
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

            <ul className="mt-4">
              {list.map((d, i) => (
                <Reveal key={d.name} delay={i * 40}>
                  <li className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-5">
                    <div className="flex items-start gap-4">
                      <FileText className="mt-0.5 size-4 shrink-0 text-teal" />
                      <div>
                        <p className="font-display text-lg leading-snug text-brown">{d.name}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {d.cat} · PDF · {d.size}
                          {d.date !== "—" ? ` · published ${d.date}` : ""}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 rounded-sm border border-navy px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      <Download className="size-3.5" /> Download
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="space-y-8 self-start lg:sticky lg:top-28">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-4">At a glance</p>
              <dl className="space-y-4 text-sm">
                {[
                  ["Expected Program spend", "> 90%"],
                  ["Expected Administration", "< 10%"],
                  ["Expected Fundraising", "0%"],
                  ["Last audit", "Pending (FY27)"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-ink/65">{k}</dt>
                    <dd className="font-semibold text-brown">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-sand p-6">
              <p className="text-sm leading-relaxed text-ink/75">
                Document files are placeholders in this build. Upload the real PDFs and each row
                links straight through.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
