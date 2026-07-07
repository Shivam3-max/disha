import { notFound } from "next/navigation";
import { LEARN_DAYS, getLearnDay } from "@/lib/learn";
import { LearnDayView } from "@/components/LearnDayView";

export function generateStaticParams() {
  return LEARN_DAYS.map((d) => ({ slug: d.slug }));
}

export default async function LearnDayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const day = getLearnDay(slug);
  if (!day) notFound();
  return <LearnDayView day={day} />;
}
