import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetail } from "@/components/pages/NewsDetail";
import { NEWS } from "@/data/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS.find((x) => x.slug === slug);
  if (!item) {
    return {
      title: "Article not found | Helping Hands Foundation",
      robots: { index: false },
    };
  }
  const title = `${item.title} | Helping Hands Foundation`;
  const description = item.excerpt || "";
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = NEWS.find((x) => x.slug === slug);
  if (!item) notFound();
  return <NewsDetail />;
}
