import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { notFound } from "next/navigation";
import Link from "next/link";
import { STRATEGIES } from "@/lib/strategies";
import { INDUSTRIES } from "@/lib/industries";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { starterKitHref } from "@/lib/knowledgeTypes";
import { Byline } from "@/components/Byline";

export function generateStaticParams() {
  return STRATEGIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = STRATEGIES.find((s) => s.slug === slug);
  if (!x) return {};
  return pageMeta({ title: `${x.name}: Meaning, Example & When to Use It`, description: x.definition, path: `/strategies/${x.slug}`, keywords: [x.name, `${x.name} strategy`, `${x.name} example`, x.category], type: "article" });
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
  const cases = CASE_STUDIES.filter((c) => c.strategySlug === s.slug).slice(0, 8);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{s.category} · strategy atlas</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{s.name}</h1>
      <Byline />

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

      {cases.length > 0 && (
        <section className="mt-10">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">Case studies using this strategy</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <h3 className="font-display text-lg font-semibold group-hover:text-vermillion">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
