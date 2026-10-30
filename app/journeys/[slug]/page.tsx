import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { notFound } from "next/navigation";
import { JOURNEYS, getJourney } from "@/lib/journeys";
import { JourneyView } from "@/components/JourneyView";

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = getJourney(slug);
  if (!x) return {};
  return pageMeta({ title: x.title, description: `“${x.symptom}” ${x.description}`, path: `/journeys/${x.slug}`, keywords: [x.title, x.symptom, x.category] });
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();
  return <JourneyView journey={journey} />;
}
