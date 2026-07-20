import Link from "next/link";
import { STRATEGIES } from "@/lib/strategies";
import { STRATEGY_CATEGORIES } from "@/lib/knowledgeTypes";

export default function StrategiesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">the global strategy atlas</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {STRATEGIES.length} named strategies, in plain language
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        The strategies businesses everywhere actually use — what each one means, a real example,
        when to reach for it, and when it backfires.
      </p>

      {STRATEGY_CATEGORIES.map((cat) => {
        const items = STRATEGIES.filter((s) => s.category === cat);
        return (
          <div key={cat} className="mt-12">
            <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
              {cat} · {items.length}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((s) => (
                <Link
                  key={s.slug}
                  href={`/strategies/${s.slug}`}
                  className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <h3 className="font-display text-xl font-semibold group-hover:text-vermillion">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.definition}</p>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
