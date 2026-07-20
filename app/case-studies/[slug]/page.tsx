import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { STRATEGIES } from "@/lib/strategies";
import { CASE_STUDY_KIND_LABEL } from "@/lib/knowledgeTypes";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  const industry = INDUSTRIES.find((i) => i.slug === c.industrySlug);
  const strategy = c.strategySlug ? STRATEGIES.find((s) => s.slug === c.strategySlug) : undefined;

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{CASE_STUDY_KIND_LABEL[c.kind]}</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{c.title}</h1>
      <p className="mt-3 max-w-xl text-lg italic text-vermillion">{c.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {industry && (
          <Link href={`/industries/${industry.slug}`} className="btn-outline px-3 py-1.5 text-sm">
            {industry.name} →
          </Link>
        )}
        {strategy && (
          <Link href={`/strategies/${strategy.slug}`} className="btn-outline px-3 py-1.5 text-sm">
            {strategy.name} →
          </Link>
        )}
      </div>

      <section className="mt-10 space-y-4">
        {c.story.map((p, i) => (
          <p key={i} className="leading-relaxed text-ink-soft">{p}</p>
        ))}
      </section>

      <section className="ledger-card mt-10 p-6">
        <p className="rule-label mb-2">the lesson</p>
        <p className="leading-relaxed">{c.lesson}</p>
      </section>
    </main>
  );
}
