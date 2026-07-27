import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export function ComingSoon({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <SiteLayout>
      <section className="shell flex min-h-[60vh] flex-col justify-center py-24">
        <p className="eyebrow rule-teal">{eyebrow}</p>
        <h1 className="max-w-[18ch] font-display text-4xl leading-[1.1] text-brown lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-ink/70">{note}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-sm border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Back home
          </Link>
          <Link
            to="/contact"
            className="rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-cream"
          >
            Contact us
          </Link>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Placeholder page — scheduled for the next build pass.
        </p>
      </section>
    </SiteLayout>
  );
}
