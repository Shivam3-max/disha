import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";

export default function IndustriesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">industry by industry</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {INDUSTRIES.length} deep industry playbooks
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Not generic advice — the specific strategies, benchmarks, and pitfalls that decide winners
        and losers inside each industry, with real case studies and a starter kit of tools linked in.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="ledger-card-flat group p-6 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <h2 className="font-display text-2xl font-semibold group-hover:text-vermillion">
              {ind.name}
            </h2>
            <p className="mt-1 text-sm italic text-vermillion">{ind.tagline}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ind.summary}</p>
            <p className="rule-label mt-4">
              {ind.strategies.length} strategies · {ind.caseStudySlugs.length} case studies
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
