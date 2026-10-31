import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { STRATEGIES } from "@/lib/strategies";
import { getLaw } from "@/lib/laws";
import { COMPANIES } from "@/lib/companies";
import { CASE_STUDY_KIND_LABEL } from "@/lib/knowledgeTypes";
import { CONTENT_REVIEWED, FOUNDER_NAME, SITE_NAME, absoluteUrl, pageMeta } from "@/lib/site";
import { Byline } from "@/components/Byline";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = CASE_STUDIES.find((c) => c.slug === slug);
  if (!x) return {};
  return pageMeta({
    title: `${x.title} — Case Study`,
    description: x.summary,
    path: `/case-studies/${x.slug}`,
    keywords: [
      x.title,
      `${x.company ?? x.title} case study`,
      ...(x.company ? [`${x.company} business strategy`, `${x.company} success story`] : []),
      "business case study",
    ],
    type: "article",
  });
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
  const laws = (c.lawSlugs ?? []).map(getLaw).filter((l) => l !== undefined);
  const related = CASE_STUDIES.filter((x) => x.slug !== c.slug && x.industrySlug === c.industrySlug).slice(0, 4);
  const failed = c.kind === "failure";
  const company = COMPANIES.find((x) => x.caseSlug === c.slug);
  const url = absoluteUrl(`/case-studies/${c.slug}`);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.summary,
          url,
          mainEntityOfPage: url,
          articleSection: "Business case studies",
          author: { "@type": "Person", name: FOUNDER_NAME, url: absoluteUrl("/about") },
          datePublished: CONTENT_REVIEWED,
          dateModified: CONTENT_REVIEWED,
          publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          ...(c.company ? { about: { "@type": "Organization", name: c.company } } : {}),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Case studies", path: "/case-studies" },
          { name: c.company ?? c.title, path: `/case-studies/${c.slug}` },
        ]}
      />

      <article>
        <p className="rule-label mb-3">
          {CASE_STUDY_KIND_LABEL[c.kind]}
          {c.country ? ` · ${c.country}` : ""}
          {c.period ? ` · ${c.period}` : ""}
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{c.title}</h1>
        <p className="mt-3 max-w-xl text-lg italic text-vermillion">{c.summary}</p>
        <Byline />

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
          {company && (
            <Link href={`/companies/${company.slug}`} className="btn-outline px-3 py-1.5 text-sm">
              {company.name} SWOT &amp; business model →
            </Link>
          )}
        </div>

        {c.keyNumbers && c.keyNumbers.length > 0 && (
          <section className="ledger-card mt-10 p-6">
            <h2 className="rule-label mb-4">by the numbers</h2>
            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {c.keyNumbers.map((n) => (
                <div key={n.label} className="border-l-2 border-vermillion pl-3">
                  <dt className="text-xs text-ink-faint">{n.label}</dt>
                  <dd className="font-display text-lg font-semibold leading-snug">{n.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">What happened</h2>
          <div className="mt-4 space-y-4">
            {c.story.map((p, i) => (
              <p key={i} className="leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </section>

        {c.timeline && c.timeline.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold">Timeline</h2>
            <ol className="mt-5 border-l border-ink">
              {c.timeline.map((t, i) => (
                <li key={i} className="relative pb-4 pl-6 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-vermillion" />
                  <span className="font-numeric text-sm text-vermillion">{t.year}</span>
                  <p className="text-sm leading-relaxed">{t.event}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {c.drivers && c.drivers.length > 0 && (
          <section className="ledger-card-flat mt-10 p-6">
            <h2 className={`rule-label mb-3 ${failed ? "text-vermillion" : "text-forest"}`}>
              {failed ? "what went wrong" : "what made it work"}
            </h2>
            <ul className="space-y-2">
              {c.drivers.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className={failed ? "text-vermillion" : "text-forest"}>
                    {failed ? "✕" : "✓"}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="ledger-card mt-8 p-6">
          <h2 className="rule-label mb-2">the lesson</h2>
          <p className="font-display text-xl leading-snug">{c.lesson}</p>
        </section>

        {c.takeaways && c.takeaways.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl font-semibold">Apply it to your business</h2>
            <ol className="mt-5 space-y-3">
              {c.takeaways.map((t, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-numeric text-2xl leading-none text-vermillion">{i + 1}</span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {laws.length > 0 && (
          <section className="mt-10">
            <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">Laws at work in this story</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {laws.map((l) => (
                <Link
                  key={l.slug}
                  href={`/laws/${l.slug}`}
                  className="ledger-card-flat group p-4 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <h3 className="font-display font-semibold group-hover:text-vermillion">{l.name}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {c.keyNumbers && (
          <p className="mt-10 text-xs leading-relaxed text-ink-faint">
            Figures are rounded and drawn from public reports, company filings and widely cited coverage at the time.
            Check the company's latest filings before relying on any number.
          </p>
        )}
      </article>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
            More case studies{industry ? ` in ${industry.name}` : ""}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/case-studies/${r.slug}`}
                className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <p className="rule-label">{CASE_STUDY_KIND_LABEL[r.kind]}</p>
                <h3 className="font-display mt-1 text-lg font-semibold group-hover:text-vermillion">{r.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
