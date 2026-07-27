import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CampaignProgress } from "./campaigns.index";
import { CAMPAIGNS, inr } from "@/data/content";

export const Route = createFileRoute("/campaigns/$slug")({
  head: ({ params }) => {
    const c = CAMPAIGNS.find((x) => x.slug === params.slug);
    if (!c) {
      return {
        meta: [
          { title: "Campaign not found | Helping Hands Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${c.title} | Helping Hands Foundation`;
    return {
      meta: [
        { title },
        { name: "description", content: c.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: c.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="shell flex min-h-[55vh] flex-col justify-center py-24">
        <p className="eyebrow rule-teal">404</p>
        <h1 className="font-display text-4xl text-brown">
          That campaign has closed or never existed.
        </h1>
        <Link
          to="/campaigns"
          className="mt-8 w-fit rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-cream"
        >
          See live campaigns
        </Link>
      </section>
    </SiteLayout>
  ),
  component: CampaignDetail,
});

function CampaignDetail() {
  const { slug } = useParams({ from: "/campaigns/$slug" });
  const campaign = CAMPAIGNS.find((c) => c.slug === slug);
  if (!campaign) throw notFound();

  const total = campaign.breakdown.reduce((s, b) => s + b.amount, 0);

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="shell py-14 lg:py-20">
          <Link
            to="/campaigns"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ink/50 uppercase transition-colors hover:text-teal"
          >
            <ArrowLeft className="size-3.5" /> All campaigns
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal">
                  {campaign.focus}
                </span>
                {campaign.urgent && (
                  <span className="rounded-full bg-coral/10 px-3 py-1 text-[11px] font-semibold text-coral">
                    Urgent
                  </span>
                )}
              </div>
              <h1 className="mt-5 max-w-[18ch] font-display text-4xl leading-[1.08] text-brown lg:text-[3.2rem]">
                {campaign.title}
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/75">
                {campaign.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {campaign.daysLeft} days left
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5" /> {campaign.donors} donors
                </span>
              </div>
            </div>

            <div className="self-end border border-border bg-card p-8">
              <CampaignProgress raised={campaign.raised} goal={campaign.goal} />
              <p className="mt-5 text-sm text-ink/70">
                Still required:{" "}
                <span className="font-semibold text-brown">
                  {inr(Math.max(campaign.goal - campaign.raised, 0))}
                </span>
              </p>
              <Link
                to="/donate"
                className="mt-6 block rounded-sm bg-coral px-6 py-3.5 text-center text-sm font-semibold text-cream"
              >
                Donate to this campaign
              </Link>
              <p className="mt-4 text-center text-[11px] text-muted-foreground">
                80G receipt issued within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow rule-teal">Why now</p>
            {campaign.detail.map((p, i) => (
              <p key={i} className={`text-[17px] leading-[1.85] text-ink/80 ${i ? "mt-6" : ""}`}>
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-6">Where the money goes</p>
            <ul className="border-t border-border">
              {campaign.breakdown.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center justify-between border-b border-border py-4"
                >
                  <span className="text-sm text-ink/75">{b.label}</span>
                  <span className="font-display text-lg text-navy">{inr(b.amount)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Figures shown{" "}
              {campaign.breakdown[0].amount < 1000 ? "per beneficiary" : "for the full campaign"} ·
              total {inr(total)}
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
