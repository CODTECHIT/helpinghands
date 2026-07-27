import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROJECTS, CAMPAIGNS, NEWS } from "@/data/content";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.9" },
          { path: "/team", changefreq: "monthly", priority: "0.6" },
          { path: "/projects", changefreq: "weekly", priority: "0.8" },
          { path: "/campaigns", changefreq: "weekly", priority: "0.8" },
          { path: "/events", changefreq: "weekly", priority: "0.7" },
          { path: "/news", changefreq: "weekly", priority: "0.7" },
          { path: "/press", changefreq: "monthly", priority: "0.5" },
          { path: "/achievements", changefreq: "yearly", priority: "0.5" },
          { path: "/gallery", changefreq: "monthly", priority: "0.5" },
          { path: "/documents", changefreq: "monthly", priority: "0.6" },
          { path: "/volunteer", changefreq: "monthly", priority: "0.7" },
          { path: "/membership", changefreq: "monthly", priority: "0.7" },
          { path: "/careers", changefreq: "monthly", priority: "0.4" },
          { path: "/donate", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/refund", changefreq: "yearly", priority: "0.3" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
          ...PROJECTS.map((p) => ({
            path: `/projects/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...CAMPAIGNS.map((c) => ({
            path: `/campaigns/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          ...NEWS.map((n) => ({
            path: `/news/${n.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
