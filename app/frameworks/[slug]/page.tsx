import { notFound } from "next/navigation";
import { WORKSHEETS, getWorksheet } from "@/lib/worksheets";
import { WorksheetEngine } from "@/components/WorksheetEngine";

export function generateStaticParams() {
  return WORKSHEETS.map((w) => ({ slug: w.slug }));
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
