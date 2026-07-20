import { notFound } from "next/navigation";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { starterKitHref } from "@/lib/knowledgeTypes";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = INDUSTRIES.find((i) => i.slug === slug);
  if (!ind) notFound();

  const caseStudies = ind.caseStudySlugs
    .map((s) => CASE_STUDIES.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => !!c);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">industry playbook</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{ind.name}</h1>
      <p className="mt-3 text-lg italic text-vermillion">{ind.tagline}</p>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{ind.summary}</p>

      <section className="ledger-card-flat mt-10 p-6">
        <p className="rule-label mb-3">how this industry actually works</p>
        <ul className="space-y-2">
          {ind.structure.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-numeric text-vermillion">·</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <p className="rule-label mb-3">the strategies that decide winners</p>
        <div className="space-y-4">
          {ind.strategies.map((s, i) => (
            <div key={i} className="ledger-card-flat p-5">
              <p className="font-display text-lg font-semibold">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ledger-card mt-10 p-6">
        <p className="rule-label mb-3">typical benchmarks</p>
        <div className="space-y-3">
          {ind.benchmarks.map((b, i) => (
            <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-paper-line pb-2 last:border-0 last:pb-0">
              <span className="font-medium">{b.metric}</span>
              <span className="font-numeric text-vermillion">{b.typical}</span>
              {b.note && <span className="w-full text-xs text-ink-faint">{b.note}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <p className="rule-label mb-3">common pitfalls</p>
        <ul className="space-y-2">
          {ind.pitfalls.map((p, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="text-vermillion">✕</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {caseStudies.length > 0 && (
        <section className="mt-10">
          <p className="rule-label mb-3">case studies from this industry</p>
          <div className="space-y-3">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="ledger-card-flat block p-4 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <p className="font-medium">{c.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="ledger-card mt-10 p-6">
        <p className="rule-label mb-3">starter kit for this industry</p>
        <p className="mb-4 text-sm text-ink-soft">Tools and frameworks pre-matched to this industry — start here.</p>
        <div className="flex flex-wrap gap-2">
          {ind.starterKit.map((link) => (
            <Link
              key={link.slug + link.kind}
              href={starterKitHref(link)}
              className="btn-outline px-3 py-1.5 text-sm"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
