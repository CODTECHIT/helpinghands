"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import logo from "@/assets/helping-hands-logo.asset.json";

type NavItem = { label: string; to?: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Our Work",
    children: [
      { label: "Projects", to: "/projects" },
      { label: "Campaigns", to: "/campaigns" },
      { label: "Events", to: "/events" },
      { label: "News", to: "/news" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { label: "Volunteer", to: "/volunteer" },
      { label: "Membership", to: "/membership" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Gallery", to: "/gallery" },
      { label: "Documents", to: "/documents" },
      { label: "Achievements", to: "/achievements" },
      { label: "Press", to: "/press" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-on-navy/80 md:block">
        <div className="shell flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-orange">
              <Phone className="size-3.5" /> +91 00000 00000
            </a>
            <a
              href="https://wa.me/910000000000"
              className="flex items-center gap-1.5 hover:text-orange"
            >
              <MessageCircle className="size-3.5" /> WhatsApp
            </a>
            <a
              href="mailto:info@helpinghands.org"
              className="flex items-center gap-1.5 hover:text-orange"
            >
              <Mail className="size-3.5" /> info@helpinghands.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {(["EN", "HI"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-sm px-1.5 py-0.5 transition-colors ${
                    lang === l ? "bg-on-navy/15 text-on-navy" : "hover:text-orange"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <span className="h-3 w-px bg-on-navy/25" />
            <Link href="/login" className="hover:text-orange">
              Member Login
            </Link>
            <Link href="/login" className="hover:text-orange">
              Coordinator Login
            </Link>
            <Link href="/login" className="hover:text-orange">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all ${
          scrolled
            ? "border-border bg-cream/95 backdrop-blur shadow-soft"
            : "border-transparent bg-cream"
        }`}
      >
        <div className="shell flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Helping Hands Foundation logo"
              width={120}
              height={94}
              className="h-12 w-auto"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-lg font-semibold text-brown">
                Helping Hands
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.3em] text-navy">
                FOUNDATION
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy transition-colors hover:text-teal">
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-52 translate-y-1 rounded-md border border-border bg-card p-1.5 opacity-0 shadow-lift transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        href={c.to!}
                        className={`block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-sand hover:text-navy ${
                          pathname === c.to ? "bg-sand font-semibold text-teal" : "text-ink/80"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  href={item.to!}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-teal ${
                    pathname === item.to || (item.to !== "/" && pathname?.startsWith(item.to!))
                      ? "text-teal"
                      : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/donate"
              className="hidden rounded-sm bg-coral px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              Donate
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-sm border border-border p-2 text-navy lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-deep/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream p-6">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg text-brown">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-1 text-navy"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-5 overflow-y-auto">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.to ? (
                    <Link
                      href={item.to}
                      onClick={() => setOpen(false)}
                      className={`block font-display text-xl ${
                        pathname === item.to ? "text-teal font-bold" : "text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <p className="eyebrow mb-2">{item.label}</p>
                      <div className="space-y-2 border-l border-border pl-4">
                        {item.children!.map((c) => (
                          <Link
                            key={c.to}
                            href={c.to}
                            onClick={() => setOpen(false)}
                            className={`block text-[15px] ${
                              pathname === c.to ? "text-teal font-semibold" : "text-ink/80"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>
            <div className="space-y-3 border-t border-border pt-5">
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-coral px-5 py-3 text-center text-sm font-semibold text-cream"
              >
                Donate Now
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-sm border border-navy px-5 py-3 text-center text-sm font-semibold text-navy"
              >
                Member / Admin Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
