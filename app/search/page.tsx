"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchKnowledgeBank, SEARCH_INDEX, type SearchItemType } from "@/lib/searchIndex";

const TYPE_ORDER: SearchItemType[] = [
  "Industry",
  "Strategy",
  "Case study",
  "Tool",
  "Framework",
  "Journey",
  "Learn",
  "Glossary",
  "Template",
  "Compliance",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchKnowledgeBank(query), [query]);

  const grouped = useMemo(() => {
    const map = new Map<SearchItemType, typeof results>();
    for (const type of TYPE_ORDER) map.set(type, []);
    for (const r of results) map.get(r.type)?.push(r);
    return map;
  }, [results]);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">search the whole knowledge bank</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {SEARCH_INDEX.length}+ entries, one search box
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Tools, frameworks, journeys, lessons, industries, strategies, case studies, glossary terms,
        templates, and compliance topics — all in one place.
      </p>

      <div className="mt-8">
        <input
          type="text"
          autoFocus
          placeholder="Try 'inventory', 'positioning', 'restaurant', 'GST'…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="!text-lg"
        />
      </div>

      {query.trim() === "" ? (
        <p className="mt-10 text-sm text-ink-faint">Start typing to search everything at once.</p>
      ) : results.length === 0 ? (
        <p className="mt-10 text-sm text-ink-faint">No matches for &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="mt-8 space-y-8">
          {TYPE_ORDER.map((type) => {
            const items = grouped.get(type) ?? [];
            if (items.length === 0) return null;
            return (
              <div key={type}>
                <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
                  {type} · {items.length}
                </h2>
                <div className="space-y-2">
                  {items.map((item) => (
                    <Link
                      key={item.href + item.title}
                      href={item.href}
                      className="ledger-card-flat block p-4 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                    >
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
