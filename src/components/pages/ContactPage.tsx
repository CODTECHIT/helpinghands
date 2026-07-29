"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000" },
  { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="shell py-16 lg:py-20">
          <p className="eyebrow rule-teal">Contact</p>
          <h1 className="max-w-[18ch] font-display text-4xl leading-[1.1] text-brown lg:text-[3.25rem]">
            Talk to a person, not a ticket queue.
          </h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl text-brown">Send us a message</h2>
            {sent ? (
              <div className="mt-8 flex items-start gap-3 rounded-md border border-teal/40 bg-teal/10 p-6">
                <Check className="mt-0.5 size-5 text-teal" />
                <div>
                  <p className="font-semibold text-navy">Thanks — your message is noted.</p>
                  <p className="mt-1 text-sm text-ink/70">
                    Sample submission. Message delivery will be wired to email once the backend is
                    connected.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {FIELDS.map((f) => (
                  <label key={f.name} className={f.name === "subject" ? "sm:col-span-2" : ""}>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {f.label}
                    </span>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none"
                    />
                  </label>
                ))}
                <label className="sm:col-span-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </span>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us a little about why you're writing."
                    className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none"
                  />
                </label>
                <button className="justify-self-start rounded-sm bg-navy px-8 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 sm:col-span-2">
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-md border border-border bg-card p-7">
              <p className="eyebrow mb-5">Head Office</p>
              <ul className="space-y-4 text-sm text-ink/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
                  H.No. 4/211/2, Shakthi Gudi, Adoni – 518301, Adoni Mandal, Kurnool District,
                  Andhra Pradesh
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-teal" /> Mon – Sat, 10:00 – 18:00
                  IST
                </li>
              </ul>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-border bg-sand text-center text-xs text-muted-foreground">
              [MAP EMBED PLACEHOLDER]
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
