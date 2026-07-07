"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Journey } from "@/lib/journeys";
import { stepSavedSlug, stepHref } from "@/lib/journeys";
import { loadEntries } from "@/lib/store";

export function JourneyView({ journey }: { journey: Journey }) {
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    const entries = loadEntries();
    setDone(new Set(entries.map((e) => e.slug)));
  }, []);

  const completedCount = journey.steps.filter((s) => done.has(stepSavedSlug(s))).length;

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">guided sequence</p>
      <p className="font-display text-2xl italic text-vermillion">{journey.symptom}</p>
      <h1 className="font-display mt-2 text-4xl font-semibold leading-tight md:text-5xl">
        {journey.title}
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{journey.description}</p>

      <div className="ledger-card mt-8 flex items-center justify-between p-4">
        <p className="font-numeric text-sm">{completedCount}/{journey.steps.length} steps done</p>
        <div className="h-2 w-40 bg-paper-deep">
          <div
            className="h-2 bg-vermillion transition-all"
            style={{ width: `${(completedCount / journey.steps.length) * 100}%` }}
          />
        </div>
      </div>

      <ol className="mt-8 space-y-4">
        {journey.steps.map((s, i) => {
          const isDone = done.has(stepSavedSlug(s));
          return (
            <li key={s.slug} className="ledger-card-flat flex items-start gap-4 p-5">
              <span
                className={`font-numeric mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border text-sm ${
                  isDone ? "border-forest bg-forest text-paper" : "border-ink-faint text-ink-faint"
                }`}
              >
                {isDone ? "✓" : i + 1}
              </span>
              <div className="flex-1">
                <p className="rule-label">{s.kind === "tool" ? "calculator tool" : "framework worksheet"}</p>
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.why}</p>
                <Link
                  href={stepHref(s)}
                  className={`mt-3 inline-block px-3 py-1.5 text-sm ${isDone ? "btn-outline" : "btn-ink"}`}
                >
                  {isDone ? "Review again →" : "Start this step →"}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>

      {completedCount === journey.steps.length && (
        <div className="ledger-card mt-8 p-6">
          <p className="font-display text-2xl font-semibold text-forest">Sequence complete.</p>
          <p className="mt-2 text-sm text-ink-soft">
            All five steps are saved in your action plan with their own next
            actions. Revisit this journey in a month to see what's changed.
          </p>
          <Link href="/plan" className="btn-ink mt-4 inline-block px-5 py-2.5 font-medium">
            View action plan
          </Link>
        </div>
      )}
    </main>
  );
}
