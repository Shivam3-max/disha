import Link from "next/link";
import { TOOLS } from "@/lib/registry";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Free Business & Finance Calculators (India)",
  description:
    "Free GST, EMI, SIP, CAGR, compound interest, profit margin, markup, discount, ROI, working capital, CTC to in-hand salary and income tax (old vs new regime) calculators — with formulas and worked examples.",
  path: "/calculators",
  keywords: [
    "business calculators",
    "GST calculator",
    "EMI calculator",
    "income tax calculator old vs new regime",
    "CTC to in-hand salary calculator",
    "profit margin calculator",
    "SIP calculator",
  ],
});

const GROUPS: { title: string; slugs: string[] }[] = [
  { title: "Tax & salary", slugs: ["income-tax-calculator", "salary-calculator", "gst-calculator"] },
  { title: "Loans & investments", slugs: ["emi-calculator", "sip-calculator", "compound-interest-calculator", "cagr-calculator", "roi-calculator"] },
  { title: "Pricing & profit", slugs: ["profit-margin-calculator", "markup-calculator", "discount-calculator", "break-even-calculator"] },
  { title: "Business finance", slugs: ["working-capital-calculator", "cash-runway", "cash-flow-simulator", "customer-lifetime", "acquisition-cost"] },
];

const FAQS = [
  { q: "Are these calculators free?", a: "Yes. Every calculator is free to use, with no sign-up, and your numbers stay in your browser." },
  { q: "Are the tax calculators up to date?", a: "The income tax and salary calculators use FY 2025-26 and FY 2026-27 slab rates (Budget 2026 made no changes). The GST calculator reflects the 5%, 18% and 40% structure in force since 22 September 2025." },
  { q: "Can I rely on the results for filing taxes?", a: "They are estimates for planning. For filing and complex situations, check with a chartered accountant or tax professional." },
];

export default function CalculatorsHub() {
  const bySlug = new Map(TOOLS.map((t) => [t.slug, t]));
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Business and finance calculators",
            url: absoluteUrl("/calculators"),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: GROUPS.flatMap((g) => g.slugs).map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: bySlug.get(s)?.title,
                url: absoluteUrl(`/tools/${s}`),
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <Breadcrumbs items={[{ name: "Calculators", path: "/calculators" }]} />
      <p className="rule-label mb-3">free · no sign-up</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Business &amp; finance calculators</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
        Quick, accurate calculators for the numbers business owners, employees and students need most — tax, salary,
        GST, loans, investments, pricing and cash. Each one explains the formula and walks through a worked example in
        rupees.
      </p>

      {GROUPS.map((g) => (
        <section key={g.title} className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">{g.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.slugs.map((s) => {
              const t = bySlug.get(s);
              if (!t) return null;
              return (
                <Link
                  key={s}
                  href={`/tools/${s}`}
                  className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <h3 className="font-display text-xl font-semibold group-hover:text-vermillion">{t.title}</h3>
                  <p className="mt-1 text-sm italic text-vermillion">{t.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
