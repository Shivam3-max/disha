import Link from "next/link";
import { SHARK_TANK_CASES, SHARK_TANK_SEASONS } from "@/lib/sharkTank";
import { absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Shark Tank India Case Studies: Deals, Valuations & Business Lessons",
  description: `${SHARK_TANK_CASES.length} Shark Tank India pitches from Seasons 1–3 — Bummer, Skippi, Beyond Snack, Snitch, Unstop, STAGE, Nasher Miles, JewelBox and more — with each deal, implied valuation and the business lesson.`,
  path: "/case-studies/shark-tank-india",
  keywords: [
    "Shark Tank India case study",
    "Shark Tank India deals",
    "Shark Tank India season 1 deals",
    "Shark Tank India season 2 deals",
    "Shark Tank India season 3 deals",
    "Shark Tank India valuation",
  ],
});

const FAQS = [
  {
    q: "How do you calculate valuation from a Shark Tank deal?",
    a: "Divide the investment by the equity percentage. For example, ₹1 crore for 10% equity values the company at ₹10 crore (₹1 crore ÷ 0.10).",
  },
  {
    q: "What is a royalty deal on Shark Tank India?",
    a: "In a royalty deal, investors receive a percentage of the company's revenue until a set amount is repaid, on top of their equity. It reduces investor risk and often lets founders give away less equity.",
  },
  {
    q: "Why do some Shark Tank deals include debt?",
    a: "Debt is a loan that must be repaid with interest but doesn't dilute ownership. Mixing debt with equity lets businesses with steady revenue raise more money while giving away less of the company.",
  },
  {
    q: "Does every deal on Shark Tank India close after the show?",
    a: "Not necessarily. Deals made on TV are subject to due diligence afterwards, and some change or don't complete. The figures here are the deals announced on the show.",
  },
  {
    q: "Is the TV exposure worth more than the money?",
    a: "For many consumer brands, yes. Founders have reported large spikes in website traffic and sales after their episodes air, but analysts note the boost fades unless the brand has strong repeat purchase and unit economics.",
  },
];

export default function SharkTankIndiaHub() {
  const bySeason = SHARK_TANK_SEASONS.map((s) => ({
    ...s,
    cases: SHARK_TANK_CASES.filter((c) => c.period === `Shark Tank India Season ${s.season}`),
  }));

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Shark Tank India case studies",
            url: absoluteUrl("/case-studies/shark-tank-india"),
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: SHARK_TANK_CASES.length,
              itemListElement: SHARK_TANK_CASES.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.company,
                url: absoluteUrl(`/case-studies/${c.slug}`),
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Case studies", path: "/case-studies" },
          { name: "Shark Tank India", path: "/case-studies/shark-tank-india" },
        ]}
      />
      <p className="rule-label mb-3">collection · {SHARK_TANK_CASES.length} pitches</p>
      <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
        Shark Tank India case studies: the deals, valuations and lessons
      </h1>
      <Byline />
      <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
        Shark Tank India gave thousands of Indian founders a national stage and made business talk mainstream. Here we
        break down {SHARK_TANK_CASES.length} pitches from the first three seasons — what each business does, the deal it
        closed on air, what that deal says about its valuation, and the lesson for your own business.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {SHARK_TANK_SEASONS.map((s) => (
          <div key={s.season} className="ledger-card-flat p-5">
            <p className="rule-label">season {s.season}</p>
            <p className="font-display mt-1 text-xl font-semibold">{s.aired}</p>
            <p className="mt-1 text-sm text-ink-faint">{s.episodes} episodes</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.note}</p>
          </div>
        ))}
      </section>

      <section className="ledger-card mt-10 p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">How to read a Shark Tank deal</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="rule-label mb-2">valuation</h3>
            <p className="text-sm leading-relaxed">
              Investment ÷ equity %. ₹75 lakh for 7.5% values the business at ₹10 crore. Founders ask high; sharks
              usually negotiate the valuation down.
            </p>
          </div>
          <div>
            <h3 className="rule-label mb-2">debt</h3>
            <p className="text-sm leading-relaxed">
              Some money comes as a loan with interest. It must be repaid but doesn't reduce the founders' ownership —
              useful for businesses with steady cash flow.
            </p>
          </div>
          <div>
            <h3 className="rule-label mb-2">royalty</h3>
            <p className="text-sm leading-relaxed">
              Investors take a small share of revenue until a set amount is returned. It lowers their risk, so they may
              accept less equity in exchange.
            </p>
          </div>
        </div>
      </section>

      {bySeason.map((s) => (
        <section key={s.season} id={`season-${s.season}`} className="mt-14 scroll-mt-20">
          <h2 className="font-display border-b border-ink pb-2 text-2xl font-semibold md:text-3xl">
            Season {s.season} · {s.cases.length} pitches
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {s.cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
              >
                <p className="rule-label">{c.keyNumbers?.[0]?.value}</p>
                <h3 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">{c.company}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
                <p className="rule-label mt-3">{c.keyNumbers?.[1]?.value} valuation →</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">What Shark Tank India teaches about business</h2>
        <ul className="mt-4 space-y-3 leading-relaxed text-ink-soft">
          <li>
            <strong className="text-ink">Know your numbers.</strong> Sharks repeatedly ask about revenue, margins,
            customer acquisition cost and repeat rate. Use our{" "}
            <Link href="/tools/customer-lifetime" className="text-vermillion underline">customer lifetime value</Link>{" "}
            and <Link href="/tools/acquisition-cost" className="text-vermillion underline">acquisition cost</Link> tools
            before you pitch anyone.
          </li>
          <li>
            <strong className="text-ink">Valuation is a negotiation.</strong> The opening ask is an anchor; the final
            number reflects risk. See the{" "}
            <Link href="/laws/anchoring-bias" className="text-vermillion underline">anchoring bias</Link>.
          </li>
          <li>
            <strong className="text-ink">Visibility fades; unit economics stay.</strong> TV brings a spike in sales.
            Only repeat customers and healthy margins keep it going.
          </li>
          <li>
            <strong className="text-ink">Structure matters.</strong> Debt and royalties can protect founder ownership.
            Model them with our <Link href="/tools/cap-table-builder" className="text-vermillion underline">cap table builder</Link>.
          </li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-ink-faint">
          Deal terms are as announced on air and listed in published season records. Deals made on the show are subject
          to due diligence and may have changed afterwards. Disha is not affiliated with Shark Tank India or Sony.
        </p>
      </section>
    </main>
  );
}
