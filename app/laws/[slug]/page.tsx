import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LAWS, getLaw, getLawCategory, lawFaqs, lawShortName, lawsInCategory } from "@/lib/laws";
import { STRATEGIES } from "@/lib/strategies";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { starterKitHref } from "@/lib/knowledgeTypes";
import { CONTENT_REVIEWED, FOUNDER_NAME, SITE_NAME, absoluteUrl, pageMeta } from "@/lib/site";
import { Byline } from "@/components/Byline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return LAWS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const law = getLaw(slug);
  if (!law) return {};
  const short = lawShortName(law);
  return pageMeta({
    title: `${short}: Meaning, Examples & How to Use It`,
    description: `${law.oneLiner} Origin, real business examples, and how to apply ${short}.`,
    path: `/laws/${law.slug}`,
    keywords: [short, ...(law.aka ?? []), `${short} meaning`, `${short} examples`, `${short} in business`],
    type: "article",
  });
}

export default async function LawPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const law = getLaw(slug);
  if (!law) notFound();

  const category = getLawCategory(law.category)!;
  const short = lawShortName(law);
  const faqs = lawFaqs(law);
  const related = law.related.map(getLaw).filter((l) => l !== undefined);
  const strategies = STRATEGIES.filter((s) => law.strategySlugs?.includes(s.slug));
  const cases = CASE_STUDIES.filter((c) => law.caseStudySlugs?.includes(c.slug));
  const seenIn = CASE_STUDIES.filter((c) => c.lawSlugs?.includes(law.slug)).slice(0, 6);

  const siblings = lawsInCategory(law.category);
  const idx = siblings.findIndex((l) => l.slug === law.slug);
  const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
  const next = siblings[(idx + 1) % siblings.length];

  const url = absoluteUrl(`/laws/${law.slug}`);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${short}: meaning, examples and how to use it`,
            description: law.oneLiner,
            url,
            mainEntityOfPage: url,
            articleSection: category.name,
            keywords: [short, ...(law.aka ?? [])].join(", "),
            author: { "@type": "Person", name: FOUNDER_NAME, url: absoluteUrl("/about") },
            datePublished: CONTENT_REVIEWED,
            dateModified: CONTENT_REVIEWED,
            publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
            about: { "@type": "DefinedTerm", name: law.name, description: law.oneLiner },
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
          { name: "Laws", path: "/laws" },
          { name: category.name, path: `/laws/category/${category.slug}` },
          { name: short, path: `/laws/${law.slug}` },
        ]}
      />

      <article>
        <p className="rule-label mb-3">{category.name} · law {String(LAWS.indexOf(law) + 1).padStart(3, "0")}</p>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{law.name}</h1>
        {law.aka && law.aka.length > 0 && (
          <p className="mt-3 text-sm text-ink-soft">
            Also known as: {law.aka.join(" · ")}
          </p>
        )}
        <Byline />

        <section className="ledger-card mt-8 p-6">
          <h2 className="rule-label mb-2">what it means</h2>
          <p className="font-display text-xl leading-snug md:text-2xl">{law.oneLiner}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">How {short} works</h2>
          {law.explanation.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </section>

        <section className="ledger-card-flat mt-8 p-6">
          <h2 className="rule-label mb-2">where it comes from</h2>
          <p className="leading-relaxed">{law.origin}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">{short} examples in business</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {law.examples.map((e) => (
              <div key={e.title} className="ledger-card-flat p-5">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">How to apply it</h2>
          <ol className="mt-5 space-y-3">
            {law.apply.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-numeric text-2xl leading-none text-vermillion">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <section className="ledger-card-flat p-6">
            <h2 className="rule-label mb-2 text-vermillion">common misreading</h2>
            <p className="text-sm leading-relaxed">{law.misread}</p>
          </section>
          <section className="ledger-card-flat p-6">
            <h2 className="rule-label mb-2 text-forest">ask yourself</h2>
            <p className="font-display text-lg leading-snug">{law.question}</p>
          </section>
        </div>

        {(law.link || strategies.length > 0 || cases.length > 0) && (
          <section className="ledger-card mt-10 p-6">
            <h2 className="rule-label mb-3">put it into practice</h2>
            <div className="flex flex-wrap gap-2">
              {law.link && (
                <Link href={starterKitHref(law.link)} className="btn-ink px-4 py-2 text-sm font-medium">
                  {law.link.label} →
                </Link>
              )}
              {strategies.map((s) => (
                <Link key={s.slug} href={`/strategies/${s.slug}`} className="btn-outline px-4 py-2 text-sm">
                  Strategy: {s.name} →
                </Link>
              ))}
              {cases.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="btn-outline px-4 py-2 text-sm">
                  Case study: {c.title} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-ink border-y border-ink">
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
      </article>

      {seenIn.length > 0 && (
        <section className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
            {short} in real case studies
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {seenIn.map((c) => (
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

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">Related laws</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/laws/${r.slug}`}
                className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <h3 className="font-display text-lg font-semibold group-hover:text-vermillion">{r.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{r.oneLiner}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav aria-label="More laws" className="no-print mt-10 flex flex-col gap-3 border-t border-ink pt-6 text-sm sm:flex-row sm:justify-between">
        <Link href={`/laws/${prev.slug}`} className="hover:text-vermillion">
          ← {prev.name}
        </Link>
        <Link href={`/laws/category/${category.slug}`} className="rule-label self-center hover:text-vermillion">
          All {category.name.toLowerCase()}
        </Link>
        <Link href={`/laws/${next.slug}`} className="hover:text-vermillion sm:text-right">
          {next.name} →
        </Link>
      </nav>
    </main>
  );
}
