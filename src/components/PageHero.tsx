import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="shell grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="eyebrow rule-teal">{eyebrow}</p>
          <h1 className="max-w-[16ch] font-display text-4xl leading-[1.08] text-brown lg:text-[3.4rem]">
            {title}
          </h1>
        </div>
        <div className="self-end">
          <p className="max-w-xl text-[17px] leading-relaxed text-ink/75">{intro}</p>
          {aside ? <div className="mt-6">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
