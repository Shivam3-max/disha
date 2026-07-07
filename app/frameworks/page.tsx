import Link from "next/link";
import { WORKSHEETS, WS_CATEGORIES } from "@/lib/worksheets";

export default function FrameworksIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">the full register</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {WORKSHEETS.length} framework worksheets
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Every worksheet below turns a business decision into a fill-in
        exercise — no theory, just the questions worth answering. Complete
        one and it saves straight into your action plan.
      </p>

      {WS_CATEGORIES.map((cat) => {
        const items = WORKSHEETS.filter((w) => w.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="mt-12">
            <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
              {cat} · {items.length}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((w) => (
                <Link
                  key={w.slug}
                  href={`/frameworks/${w.slug}`}
                  className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <p className="text-sm italic text-vermillion">&ldquo;{w.question}&rdquo;</p>
                  <h3 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">
                    {w.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {w.description}
                  </p>
                  <p className="rule-label mt-3">{w.blocks.length} steps</p>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
