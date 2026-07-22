"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import { FilterChips } from "@/components/FilterChips";

export default function TemplatesIndex() {
  const [category, setCategory] = useState("All");

  const allCategories = useMemo(
    () => Array.from(new Set(TEMPLATES.map((t) => t.category))).sort(),
    [],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const cat of allCategories) c[cat] = TEMPLATES.filter((t) => t.category === cat).length;
    return c;
  }, [allCategories]);

  const visible = category === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === category);

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">fill in, print, done</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Document templates</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Fillable starting drafts for common business documents. These are starting points, not legal
        advice — have a professional review anything binding before you sign it.
      </p>

      <div className="mt-8">
        <FilterChips options={allCategories} active={category} onChange={setCategory} counts={counts} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((t) => (
          <Link
            key={t.slug}
            href={`/templates/${t.slug}`}
            className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <p className="rule-label">{t.category}</p>
            <h2 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">
              {t.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
