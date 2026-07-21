"use client";

import { useState } from "react";
import Link from "next/link";
import { FLAGSHIP_SCHEDULE, SCHEDULE_WEEK_LABELS } from "@/lib/flagshipSchedule";
import { starterKitHref } from "@/lib/knowledgeTypes";

const WEEKS = Array.from({ length: 15 }, (_, i) => i + 1);

export default function FlagshipSchedulePage() {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">the real 90-day sheet</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        Flagship program, day by day
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        The 12 study units in Learn mode compress this into a manageable pace. This page is the
        full underlying schedule — all 90 days, exactly as the program runs, for browsing or
        following along session by session.
      </p>
      <Link href="/learn/flagship-the-reset" className="mt-4 inline-block text-sm text-vermillion underline">
        Go to the 12-week study version instead →
      </Link>

      <div className="mt-10 space-y-3">
        {WEEKS.map((w) => {
          const days = FLAGSHIP_SCHEDULE.filter((d) => d.week === w);
          const isOpen = openWeek === w;
          return (
            <div key={w} className="ledger-card-flat">
              <button
                onClick={() => setOpenWeek(isOpen ? null : w)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-display text-lg font-semibold">{SCHEDULE_WEEK_LABELS[w]}</span>
                <span className="rule-label shrink-0">
                  Days {days[0].day}–{days[days.length - 1].day} {isOpen ? "▲" : "▼"}
                </span>
              </button>
              {isOpen && (
                <div className="space-y-4 border-t border-ink px-5 pb-5 pt-4">
                  {days.map((d) => (
                    <div key={d.day} className="border-l-2 border-vermillion pl-4">
                      <p className="rule-label">
                        Day {d.day} · {d.trackFocus}
                      </p>
                      <p className="font-display text-lg font-semibold">{d.title}</p>
                      <p className="mt-1 text-sm italic text-ink-soft">{d.sessionGoal}</p>
                      <ul className="mt-2 space-y-1">
                        {d.topics.map((t, i) => (
                          <li key={i} className="text-sm text-ink-soft">· {t}</li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs text-ink-faint">
                        Frameworks: {d.frameworks.join(", ")}
                      </p>
                      <p className="mt-1 text-sm"><span className="font-medium">Activity:</span> {d.activity}</p>
                      <p className="text-sm"><span className="font-medium">Deliverable:</span> {d.deliverable}</p>
                      {d.relatedLink && (
                        <Link
                          href={starterKitHref(d.relatedLink)}
                          className="mt-2 inline-block text-sm text-vermillion underline"
                        >
                          Try it: {d.relatedLink.label} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
