import { notFound } from "next/navigation";
import Link from "next/link";
import { STRATEGIES } from "@/lib/strategies";
import { INDUSTRIES } from "@/lib/industries";
import { starterKitHref } from "@/lib/knowledgeTypes";

export function generateStaticParams() {
  return STRATEGIES.map((s) => ({ slug: s.slug }));
}

export default async function StrategyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = STRATEGIES.find((x) => x.slug === slug);
  if (!s) notFound();

  const relatedIndustries = INDUSTRIES.filter((i) => s.industrySlugs?.includes(i.slug));

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{s.category} · strategy atlas</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{s.name}</h1>

      <section className="ledger-card-flat mt-8 p-6">
        <p className="rule-label mb-2">what it means</p>
        <p className="leading-relaxed">{s.definition}</p>
      </section>

      <section className="ledger-card-flat mt-6 p-6">
        <p className="rule-label mb-2">a real example</p>
        <p className="leading-relaxed text-ink-soft">{s.originExample}</p>
      </section>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section className="ledger-card-flat p-6">
          <p className="rule-label mb-2 text-forest">when to use it</p>
          <p className="text-sm leading-relaxed">{s.whenToUse}</p>
        </section>
        <section className="ledger-card-flat p-6">
          <p className="rule-label mb-2 text-vermillion">when it backfires</p>
          <p className="text-sm leading-relaxed">{s.whenItBackfires}</p>
        </section>
      </div>

      {(s.relatedLink || relatedIndustries.length > 0) && (
        <section className="ledger-card mt-8 p-6">
          <p className="rule-label mb-3">put it into practice</p>
          <div className="flex flex-wrap gap-2">
            {s.relatedLink && (
              <Link href={starterKitHref(s.relatedLink)} className="btn-ink px-4 py-2 text-sm font-medium">
                {s.relatedLink.label} →
              </Link>
            )}
            {relatedIndustries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="btn-outline px-4 py-2 text-sm">
                See it in {i.name} →
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
