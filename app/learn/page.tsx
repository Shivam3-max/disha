"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LEARN_DAYS, TRACKS, DIMENSION_TO_DAY, getLearnDay, type Track } from "@/lib/learn";
import { loadLearnProgress, loadCheckup, loadMissedQuestions, type LearnProgress } from "@/lib/store";

const TRACK_ORDER: Track[] = ["foundations", "flagship", "booster"];

export default function LearnIndex() {
  const [progress, setProgress] = useState<LearnProgress>({});
  const [missCount, setMissCount] = useState(0);
  const [recommended, setRecommended] = useState<{ dimension: string; score: number; slug: string } | null>(null);
  const [activeTrack, setActiveTrack] = useState<Track>("foundations");

  useEffect(() => {
    setProgress(loadLearnProgress());
    setMissCount(Object.keys(loadMissedQuestions()).length);

    const checkup = loadCheckup();
    if (checkup) {
      const entries = Object.entries(checkup.scores);
      if (entries.length > 0) {
        const [dimension, score] = entries.sort((a, b) => a[1] - b[1])[0];
        const slug = DIMENSION_TO_DAY[dimension];
        if (slug && getLearnDay(slug)) {
          setRecommended({ dimension, score, slug });
        }
      }
    }
  }, []);

  const daysByTrack = useMemo(
    () =>
      Object.fromEntries(
        TRACK_ORDER.map((t) => [t, LEARN_DAYS.filter((d) => d.track === t)]),
      ) as Record<Track, typeof LEARN_DAYS>,
    [],
  );

  const totalDone = LEARN_DAYS.filter((d) => progress[d.slug]).length;
  const recommendedDay = recommended ? getLearnDay(recommended.slug) : undefined;

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">three tracks, one action plan</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Learn mode</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Foundations for the core subjects, the full flagship program for depth, and quick-fire
        booster days for extra frameworks. Every lesson links straight to the tool or worksheet
        that puts it into practice.
      </p>

      {recommendedDay && (
        <div className="ledger-card mt-8 border-l-4 border-vermillion p-5">
          <p className="rule-label mb-1">based on your health checkup</p>
          <p className="text-sm leading-relaxed">
            <span className="font-medium">{recommended!.dimension}</span> scored lowest for you
            ({recommended!.score}/10). Start here instead of Day 1:
          </p>
          <Link
            href={`/learn/${recommendedDay.slug}`}
            className="btn-ink mt-3 inline-block px-4 py-2 text-sm font-medium"
          >
            {TRACKS[recommendedDay.track].unitLabel} {recommendedDay.day}: {recommendedDay.title} →
          </Link>
        </div>
      )}

      {missCount > 0 && (
        <div className="ledger-card-flat mt-4 flex flex-wrap items-center justify-between gap-3 p-5">
          <p className="text-sm">
            <span className="font-medium text-vermillion">{missCount}</span> question
            {missCount === 1 ? "" : "s"} waiting in your review deck.
          </p>
          <Link href="/learn/review" className="btn-outline px-4 py-1.5 text-sm">
            Review misses →
          </Link>
        </div>
      )}

      <div className="ledger-card mt-6 flex items-center justify-between p-4">
        <p className="font-numeric text-sm">{totalDone}/{LEARN_DAYS.length} lessons completed overall</p>
        <div className="h-2 w-40 bg-paper-deep">
          <div
            className="h-2 bg-vermillion transition-all"
            style={{ width: `${(totalDone / LEARN_DAYS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2 border-b border-ink pb-4">
        {TRACK_ORDER.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTrack(t)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTrack === t ? "btn-ink" : "btn-outline"
            }`}
          >
            {TRACKS[t].title}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-ink-soft">{TRACKS[activeTrack].description}</p>

      <div className="mt-6 space-y-3">
        {daysByTrack[activeTrack].map((d) => {
          const p = progress[d.slug];
          return (
            <Link
              key={d.slug}
              href={`/learn/${d.slug}`}
              className="ledger-card-flat group flex items-center gap-4 p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
            >
              <span className="stamp h-14 w-14 shrink-0 text-sm">{d.day}</span>
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold group-hover:text-vermillion">
                  {d.title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">{d.subtitle}</p>
              </div>
              {p ? (
                <span className="font-numeric shrink-0 text-sm text-forest">
                  {p.score}/{p.total} ✓
                </span>
              ) : (
                <span className="rule-label shrink-0">start →</span>
              )}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
