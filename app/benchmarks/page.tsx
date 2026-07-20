"use client";

import { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";

export default function BenchmarksPage() {
  const [selected, setSelected] = useState<string>(INDUSTRIES[0].slug);
  const industry = INDUSTRIES.find((i) => i.slug === selected)!;

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">know if your number is good or bad</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Benchmarks bank</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Every tool in Disha asks for your numbers. This page tells you what &ldquo;good&rdquo; looks
        like for those numbers, by industry.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {INDUSTRIES.map((i) => (
          <button
            key={i.slug}
            onClick={() => setSelected(i.slug)}
            className={`px-3 py-1.5 text-sm ${selected === i.slug ? "btn-ink" : "btn-outline"}`}
          >
            {i.name}
          </button>
        ))}
      </div>

      <section className="ledger-card mt-8 p-6">
        <p className="rule-label mb-1">{industry.name}</p>
        <p className="font-display mb-4 text-2xl font-semibold">Typical benchmarks</p>
        <div className="space-y-4">
          {industry.benchmarks.map((b, i) => (
            <div key={i} className="border-b border-paper-line pb-3 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="font-medium">{b.metric}</span>
                <span className="font-numeric text-xl text-vermillion">{b.typical}</span>
              </div>
              {b.note && <p className="mt-1 text-sm text-ink-soft">{b.note}</p>}
            </div>
          ))}
        </div>
        <Link href={`/industries/${industry.slug}`} className="mt-6 inline-block text-sm text-vermillion underline">
          See the full {industry.name} playbook →
        </Link>
      </section>

      <p className="mt-6 text-xs text-ink-faint">
        Benchmarks are typical ranges, not guarantees — actual healthy numbers vary by business
        model, region, and stage. Use them as a sanity check, not a hard target.
      </p>
    </main>
  );
}
