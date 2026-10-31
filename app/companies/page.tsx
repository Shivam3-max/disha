import Link from "next/link";
import { COMPANIES } from "@/lib/companies";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Company SWOT Analyses, Business Models & Marketing Strategies",
  description: `SWOT analysis, business model and marketing strategy (4Ps) of ${COMPANIES.length} well-known companies — Amul, Zomato, Nykaa, Tata Motors, HUL, Apple, Nike and more — for students and business owners.`,
  path: "/companies",
  keywords: ["SWOT analysis of companies", "business model examples", "marketing strategy examples", "marketing mix examples", "company case study for students"],
});

export default function CompaniesHub() {
  const sorted = [...COMPANIES].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Company analyses",
          url: absoluteUrl("/companies"),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: sorted.length,
            itemListElement: sorted.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, url: absoluteUrl(`/companies/${c.slug}`) })),
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Company analyses", path: "/companies" }]} />
      <p className="rule-label mb-3">{sorted.length} companies</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Company analyses: SWOT, business model &amp; marketing</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
        Clear, structured breakdowns of well-known Indian and global companies — each with a SWOT analysis, its business
        model, its marketing mix (4Ps) and the lesson for your own business. Useful for assignments, interviews and
        strategy work.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((c) => (
          <Link key={c.slug} href={`/companies/${c.slug}`} className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]">
            <p className="rule-label">{c.sector}</p>
            <h2 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">{c.name}</h2>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">{c.model.value}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
