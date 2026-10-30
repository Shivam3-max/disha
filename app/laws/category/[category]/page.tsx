import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LAW_CATEGORIES, getLawCategory, lawsInCategory } from "@/lib/laws";
import type { LawCategorySlug } from "@/lib/knowledgeTypes";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LawCard } from "@/components/LawCard";

export function generateStaticParams() {
  return LAW_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getLawCategory(category);
  if (!c) return {};
  return pageMeta({
    title: c.seoTitle,
    description: c.description,
    path: `/laws/category/${c.slug}`,
    keywords: lawsInCategory(c.slug).map((l) => l.name),
  });
}

export default async function LawCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = getLawCategory(category);
  if (!c) notFound();
  const items = lawsInCategory(c.slug as LawCategorySlug);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: c.seoTitle,
          description: c.description,
          url: absoluteUrl(`/laws/category/${c.slug}`),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: l.name,
              url: absoluteUrl(`/laws/${l.slug}`),
            })),
          },
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Laws", path: "/laws" },
          { name: c.name, path: `/laws/category/${c.slug}` },
        ]}
      />
      <p className="rule-label mb-3">{items.length} laws · {c.name}</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">{c.seoTitle}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{c.intro}</p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((l) => (
          <LawCard key={l.slug} law={l} />
        ))}
      </div>

      <section className="mt-14">
        <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">Other kinds of laws</h2>
        <div className="flex flex-wrap gap-2">
          {LAW_CATEGORIES.filter((o) => o.slug !== c.slug).map((o) => (
            <Link key={o.slug} href={`/laws/category/${o.slug}`} className="btn-outline px-3 py-1.5 text-sm">
              {o.name} →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
