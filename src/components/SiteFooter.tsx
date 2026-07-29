import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/helping-hands-logo.asset.json";

const COLUMNS = [
  {
    title: "Organisation",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Leadership", to: "/team" },
      { label: "Achievements", to: "/achievements" },
      { label: "Documents", to: "/documents" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "Campaigns", to: "/campaigns" },
      { label: "Events", to: "/events" },
      { label: "News", to: "/news" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", to: "/donate" },
      { label: "Volunteer", to: "/volunteer" },
      { label: "Membership", to: "/membership" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-on-navy/70">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:py-20">
        <div>
          <img
            src={logo.url}
            alt="Helping Hands Foundation"
            width={160}
            height={125}
            loading="lazy"
            className="h-14 w-auto rounded-sm bg-cream p-1"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A registered Public Charitable Trust based in Adoni, Kurnool District, Andhra Pradesh,
            working across old age care, medical relief, education, and women's welfare.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="rounded-sm border border-on-navy/20 p-2 transition-colors hover:border-orange hover:text-orange"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange">
              {col.title}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="transition-colors hover:text-on-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-on-navy/10">
        <div className="shell flex flex-col items-center justify-center gap-6 py-8 text-sm text-center">
          <p className="flex gap-2 justify-center max-w-2xl">
            <MapPin className="mt-0.5 size-4 shrink-0 text-teal" />
            Head Office: H.No. 4/211/2, Shakthi Gudi, Adoni – 518301, Adoni Mandal, Kurnool
            District, Andhra Pradesh
          </p>
        </div>
      </div>

      <div className="border-t border-on-navy/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Helping Hands Foundation. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-on-navy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-on-navy">
              Terms &amp; Conditions
            </Link>
            <Link href="/refund" className="hover:text-on-navy">
              Refund Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-on-navy">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
