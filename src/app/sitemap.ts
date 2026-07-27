import type { MetadataRoute } from "next";
import { PROJECTS, CAMPAIGNS, NEWS } from "@/data/content";

const BASE_URL = "https://helpinghandsfoundation.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/campaigns`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/events`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/press`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/achievements`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/documents`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/volunteer`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/membership`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/donate`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/refund`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const campaignRoutes: MetadataRoute.Sitemap = CAMPAIGNS.map((c) => ({
    url: `${BASE_URL}/campaigns/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const newsRoutes: MetadataRoute.Sitemap = NEWS.map((n) => ({
    url: `${BASE_URL}/news/${n.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...campaignRoutes, ...newsRoutes];
}
