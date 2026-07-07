import { notFound } from "next/navigation";
import { JOURNEYS, getJourney } from "@/lib/journeys";
import { JourneyView } from "@/components/JourneyView";

export function generateStaticParams() {
  return JOURNEYS.map((j) => ({ slug: j.slug }));
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
