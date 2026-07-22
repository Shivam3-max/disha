"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { JOURNEYS, JOURNEY_CATEGORIES } from "@/lib/journeys";
import { FilterChips } from "@/components/FilterChips";

export default function JourneysIndex() {
  const [category, setCategory] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of JOURNEY_CATEGORIES) c[cat] = JOURNEYS.filter((j) => j.category === cat).length;
    return c;
  }, []);

  const visible = category === "All" ? JOURNEYS : JOURNEYS.filter((j) => j.category === category);
  const groupedCategories = category === "All" ? JOURNEY_CATEGORIES : [category];

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">start from the problem</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        What&apos;s actually going wrong?
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        {JOURNEYS.length} guided sequences covering nearly every problem a business runs into.
        Pick the sentence closest to what you&apos;re feeling right now — or filter by area first.
      </p>

      <div className="mt-8">
        <FilterChips
          options={[...JOURNEY_CATEGORIES]}
          active={category}
          onChange={setCategory}
          counts={counts}
        />
      </div>

      <div className="mt-8 space-y-10">
        {groupedCategories.map((cat) => {
          const items = visible.filter((j) => j.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
                {cat} · {items.length}
              </h2>
              <div className="space-y-3">
                {items.map((j) => (
                  <Link
                    key={j.slug}
                    href={`/journeys/${j.slug}`}
                    className="ledger-card-flat group block p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                  >
                    <p className="font-display text-lg italic text-vermillion">{j.symptom}</p>
                    <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-medium group-hover:text-vermillion">{j.title}</h3>
                      <span className="rule-label shrink-0">{j.steps.length} steps →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
