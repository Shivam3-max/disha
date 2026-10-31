import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPARISONS, getComparison } from "@/lib/comparisons";
import { CONTENT_REVIEWED, FOUNDER_NAME, SITE_NAME, absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return {};
  return pageMeta({
    title: c.title.length > 45 ? `${c.title}: Key Differences` : `${c.title}: Differences, Table & Which to Choose`,
    description: c.summary,
    path: `/compare/${c.slug}`,
    keywords: [c.title, `${c.title} difference`, `difference between ${c.options.join(" and ")}`],
    type: "article",
  });
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();
  const url = absoluteUrl(`/compare/${c.slug}`);
  const others = COMPARISONS.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.summary,
            url,
            mainEntityOfPage: url,
            author: { "@type": "Person", name: FOUNDER_NAME, url: absoluteUrl("/about") },
            publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
            datePublished: CONTENT_REVIEWED,
            dateModified: CONTENT_REVIEWED,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Comparisons", path: "/compare" },
          { name: c.title, path: `/compare/${c.slug}` },
        ]}
      />
      <p className="rule-label mb-3">comparison</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{c.title}</h1>
      <Byline />
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">{c.summary}</p>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Side-by-side comparison</h2>
        <div className="mt-5 overflow-x-auto border border-ink">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-ink bg-paper-deep text-left">
                <th className="rule-label p-3 font-normal">Aspect</th>
                {c.options.map((o) => (
                  <th key={o} className="font-display p-3 text-base font-semibold">{o}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.aspect} className="border-b border-paper-line align-top last:border-0">
                  <th scope="row" className="p-3 text-left font-medium">{r.aspect}</th>
                  {r.values.map((v, i) => (
                    <td key={i} className="p-3 leading-relaxed text-ink-soft">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Which should you choose?</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {c.choose.map((ch) => (
            <div key={ch.option} className="ledger-card-flat p-5">
              <h3 className="font-display text-lg font-semibold">{ch.option}</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                {ch.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ledger-card mt-10 p-6">
        <h2 className="rule-label mb-2">the verdict</h2>
        <p className="font-display text-xl leading-snug">{c.verdict}</p>
        {c.links && (
          <div className="mt-4 flex flex-wrap gap-2">
            {c.links.map((l) => (
              <Link key={l.href} href={l.href} className="btn-outline px-4 py-2 text-sm">
                {l.label} →
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {c.faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {c.note && <p className="mt-6 text-xs leading-relaxed text-ink-faint">{c.note}</p>}

      <section className="mt-12">
        <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">More comparisons</h2>
        <div className="flex flex-wrap gap-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/compare/${o.slug}`} className="btn-outline px-3 py-1.5 text-sm">
              {o.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
