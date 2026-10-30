import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { TRACKS } from "@/lib/learn";
import { notFound } from "next/navigation";
import { LEARN_DAYS, getLearnDay } from "@/lib/learn";
import { LearnDayView } from "@/components/LearnDayView";

export function generateStaticParams() {
  return LEARN_DAYS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = getLearnDay(slug);
  if (!x) return {};
  return pageMeta({ title: `${x.title} — Free Business Lesson`, description: `${x.subtitle} A ${TRACKS[x.track].title.toLowerCase()} lesson with a short quiz.`, path: `/learn/${x.slug}`, keywords: [x.title, TRACKS[x.track].title], type: "article" });
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
