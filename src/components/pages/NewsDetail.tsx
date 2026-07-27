"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { NEWS } from "@/data/content";

export function NewsDetail() {
  const { slug } = useParams() as { slug: string };
  const article = NEWS.find((n) => n.slug === slug);
  if (!article) throw notFound();
  const more = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article>
        <header className="border-b border-border">
          <div className="shell max-w-3xl py-14 lg:py-20">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ink/50 uppercase transition-colors hover:text-teal"
            >
              <ArrowLeft className="size-3.5" /> Newsroom
            </Link>
            <p className="eyebrow mt-8">{article.tag}</p>
            <h1 className="mt-4 font-display text-[2.3rem] leading-[1.1] text-brown lg:text-[3rem]">
              {article.title}
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {article.date} · {article.readTime}
            </p>
          </div>
        </header>

        <div className="shell max-w-2xl py-16 lg:py-24">
          <p className="border-l-2 border-orange pl-6 font-display text-xl leading-[1.5] text-brown">
            {article.excerpt}
          </p>
          {article.body.map((p, i) => (
            <p key={i} className="mt-7 text-[17px] leading-[1.9] text-ink/80">
              {p}
            </p>
          ))}

          <div className="mt-14 border-t border-border pt-8">
            <p className="text-sm text-ink/70">
              Reporting like this is funded entirely by individual donors.
            </p>
            <Link
              href="/donate"
              className="mt-5 inline-block rounded-sm bg-coral px-6 py-3 text-sm font-semibold text-cream"
            >
              Support our work
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-border py-16">
        <div className="shell">
          <p className="eyebrow rule-teal">Read next</p>
          <div className="mt-6 grid gap-px bg-border sm:grid-cols-3">
            {more.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}

                className="bg-cream p-8 transition-colors hover:bg-card"
              >
                <p className="eyebrow">{n.tag}</p>
                <h3 className="mt-3 font-display text-lg leading-snug text-brown">{n.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
