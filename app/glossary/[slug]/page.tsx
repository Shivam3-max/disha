import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GLOSSARY_ENTRIES,
  displayTerm,
  getGlossaryEntry,
  getGlossaryEntryByTerm,
} from "@/lib/glossaryDetails";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return GLOSSARY_ENTRIES.filter((g) => g.detail).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGlossaryEntry(slug);
  if (!g?.detail) return {};
  const name = displayTerm(g.term);
  return pageMeta({
    title: `What is ${name}? Meaning${g.detail.formula ? ", Formula" : ""} & Example`,
    description: `${g.definition} ${g.detail.formula ? "Formula, " : ""}worked example and common mistakes, explained simply.`,
    path: `/glossary/${g.slug}`,
    keywords: [g.term, `what is ${g.term}`, `${g.term} meaning`, `${g.term} formula`, `${g.term} example`],
    type: "article",
  });
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGlossaryEntry(slug);
  if (!g?.detail) notFound();
  const d = g.detail;
  const name = displayTerm(g.term);
  const related = d.related.map(getGlossaryEntryByTerm).filter((r) => r?.detail);
  const sameCategory = GLOSSARY_ENTRIES.filter((x) => x.category === g.category && x.slug !== g.slug && x.detail);

  const faqs = [
    { q: `What is ${g.term}?`, a: `${g.definition} ${d.explain}` },
    ...(d.formula ? [{ q: `How do you calculate ${g.term}?`, a: `${d.formula}. ${d.example}` }] : []),
    { q: `Why does ${g.term} matter?`, a: d.why },
    { q: `What is a common mistake with ${g.term}?`, a: d.mistake },
  ];

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: g.term,
            description: g.definition,
            url: absoluteUrl(`/glossary/${g.slug}`),
            inDefinedTermSet: absoluteUrl("/glossary"),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Glossary", path: "/glossary" },
          { name: g.term, path: `/glossary/${g.slug}` },
        ]}
      />
      <p className="rule-label mb-3">{g.category} · business glossary</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">What is {name}?</h1>
      <Byline />

      <section className="ledger-card mt-8 p-6">
        <h2 className="rule-label mb-2">definition</h2>
        <p className="font-display text-xl leading-snug md:text-2xl">{g.definition}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">{g.term} explained</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">{d.explain}</p>
      </section>

      {d.formula && (
        <section className="ledger-card-flat mt-8 p-6">
          <h2 className="rule-label mb-2">formula</h2>
          <p className="font-numeric text-base leading-relaxed md:text-lg">{d.formula}</p>
        </section>
      )}

      <section className="ledger-card-flat mt-6 p-6">
        <h2 className="rule-label mb-2">example</h2>
        <p className="leading-relaxed">{d.example}</p>
      </section>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section className="ledger-card-flat p-6">
          <h2 className="rule-label mb-2 text-forest">why it matters</h2>
          <p className="text-sm leading-relaxed">{d.why}</p>
        </section>
        <section className="ledger-card-flat p-6">
          <h2 className="rule-label mb-2 text-vermillion">common mistake</h2>
          <p className="text-sm leading-relaxed">{d.mistake}</p>
        </section>
      </div>

      {d.link && (
        <Link href={d.link.href} className="btn-ink mt-8 inline-block px-5 py-2.5 text-sm font-medium">
          {d.link.label} →
        </Link>
      )}

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">Related terms</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r!.slug}
                href={`/glossary/${r!.slug}`}
                className="ledger-card-flat group p-4 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <h3 className="font-display font-semibold group-hover:text-vermillion">{r!.term}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{r!.definition}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">More {g.category.toLowerCase()} terms</h2>
        <div className="flex flex-wrap gap-2">
          {sameCategory.map((x) => (
            <Link key={x.slug} href={`/glossary/${x.slug}`} className="btn-outline px-3 py-1.5 text-sm">
              {x.term}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
