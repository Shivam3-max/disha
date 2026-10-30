import Link from "next/link";
import { LAWS, LAW_CATEGORIES, lawsInCategory } from "@/lib/laws";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LawCard } from "@/components/LawCard";

export const metadata = pageMeta({
  title: "100 Famous Laws of Business & Psychology, Explained",
  description:
    "Pareto principle, Parkinson's law, Murphy's law, Goodhart's law, Dunning–Kruger, loss aversion, Hick's law and 93 more — famous business and psychology laws explained with real examples.",
  path: "/laws",
  keywords: [
    "laws of business",
    "famous business laws",
    "laws of psychology",
    "psychology laws list",
    "cognitive biases list",
    "laws of marketing",
    "management laws",
    "productivity laws",
  ],
});

export default function LawsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Famous laws of business and psychology",
          url: absoluteUrl("/laws"),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: LAWS.length,
            itemListElement: LAWS.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: l.name,
              url: absoluteUrl(`/laws/${l.slug}`),
            })),
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Laws", path: "/laws" }]} />
      <p className="rule-label mb-3">the laws library</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {LAWS.length} famous laws of business &amp; psychology
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
        The named laws, principles, and effects that explain how customers choose, how teams behave,
        how markets move, and why plans go wrong. Each one comes with where it came from, real business
        examples, steps to apply it, and the most common way people misread it.
      </p>

      <nav aria-label="Law categories" className="no-print sticky top-0 z-20 -mx-5 mt-8 border-b border-ink bg-paper px-5 py-3">
        <div className="flex flex-wrap gap-2">
          {LAW_CATEGORIES.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="btn-outline px-3 py-1.5 text-sm">
              {c.name} ({lawsInCategory(c.slug).length})
            </a>
          ))}
        </div>
      </nav>

      {LAW_CATEGORIES.map((c) => {
        const items = lawsInCategory(c.slug);
        return (
          <section key={c.slug} id={c.slug} className="mt-12 scroll-mt-20">
            <div className="mb-4 flex flex-col gap-2 border-b border-ink pb-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">{c.name}</h2>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">{c.intro}</p>
              </div>
              <Link href={`/laws/category/${c.slug}`} className="rule-label shrink-0 hover:text-vermillion">
                {items.length} laws · view all →
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((l) => (
                <LawCard key={l.slug} law={l} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
