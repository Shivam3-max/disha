"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOOLS, CATEGORIES } from "@/lib/registry";
import { FilterChips } from "@/components/FilterChips";

export default function ToolsIndex() {
  const [category, setCategory] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of CATEGORIES) c[cat] = TOOLS.filter((t) => t.category === cat).length;
    return c;
  }, []);

  const visibleCategories = category === "All" ? [...CATEGORIES] : [category];

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">calculators & scorecards</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {TOOLS.length} working tools
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Each tool takes your real numbers and gives back a verdict — a
        target, a ranking, a rupee figure — not a lecture.
      </p>

      <div className="mt-8">
        <FilterChips options={[...CATEGORIES]} active={category} onChange={setCategory} counts={counts} />
      </div>

      {visibleCategories.map((cat) => {
        const tools = TOOLS.filter((t) => t.category === cat);
        if (tools.length === 0) return null;
        return (
          <div key={cat} className="mt-10">
            <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
              {cat}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {tools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="ledger-card-flat group flex gap-4 p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <span className="font-numeric text-lg text-ink-faint">{t.no}</span>
                  <div>
                    <p className="text-sm italic text-vermillion">&ldquo;{t.question}&rdquo;</p>
                    <h3 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.description}</p>
                    <p className="rule-label mt-3">~{t.minutes} min</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
