import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { notFound } from "next/navigation";
import { WORKSHEETS, getWorksheet } from "@/lib/worksheets";
import { WorksheetEngine } from "@/components/WorksheetEngine";

export function generateStaticParams() {
  return WORKSHEETS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = getWorksheet(slug);
  if (!x) return {};
  return pageMeta({ title: `${x.title} — Framework & Free Worksheet`, description: `${x.question} ${x.description}`, path: `/frameworks/${x.slug}`, keywords: [x.title, `${x.title} framework`, `${x.title} template`, x.category] });
}

export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ws = getWorksheet(slug);
  if (!ws) notFound();
  const no = WORKSHEETS.findIndex((w) => w.slug === slug) + 1;
  return <WorksheetEngine ws={ws} no={no} />;
}
