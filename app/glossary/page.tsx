"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GLOSSARY } from "@/lib/glossary";
import { GLOSSARY_CATEGORIES, type GlossaryCategory } from "@/lib/knowledgeTypes";

function GlossaryInner() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GlossaryCategory | "All">("All");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      const matchesQuery = !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q);
      const matchesCategory = category === "All" || g.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{GLOSSARY.length} terms, plainly explained</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Business glossary</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Finance, marketing, sales, operations, people, and strategy terms — no jargon left unexplained.
      </p>

      <input
        type="text"
        placeholder="Search terms…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-8 !text-lg"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory("All")}
          className={`px-3 py-1.5 text-sm ${category === "All" ? "btn-ink" : "btn-outline"}`}
        >
          All
        </button>
        {GLOSSARY_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 text-sm ${category === c ? "btn-ink" : "btn-outline"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-faint">{filtered.length} terms</p>
      <div className="mt-3 space-y-3">
        {filtered.map((g) => (
          <div key={g.term} id={g.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="ledger-card-flat p-4">
            <p className="flex items-baseline justify-between gap-3">
              <span className="font-display text-lg font-semibold">{g.term}</span>
              <span className="rule-label shrink-0">{g.category}</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{g.definition}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function GlossaryPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-3xl px-5 py-14" />}>
      <GlossaryInner />
    </Suspense>
  );
}
