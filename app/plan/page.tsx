"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadEntries, removeEntry, type SavedEntry } from "@/lib/store";

export default function Plan() {
  const [entries, setEntries] = useState<SavedEntry[] | null>(null);

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  if (entries === null)
    return <main className="mx-auto max-w-3xl px-5 py-14" />;

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="rule-label mb-3">your ledger of decisions</p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            My action plan
          </h1>
        </div>
        {entries.length > 0 && (
          <button onClick={() => window.print()} className="btn-outline no-print px-4 py-2 text-sm">
            Print / save as PDF
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <div className="ledger-card-flat mt-10 p-10 text-center">
          <p className="font-display text-2xl font-semibold">
            The ledger is empty.
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
            Work through the health checkup or any tool and save the result —
            every entry lands here as a running action plan for your business.
          </p>
          <Link href="/checkup" className="btn-ink mt-6 inline-block px-6 py-3 font-medium">
            Start the health checkup →
          </Link>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {entries.map((e) => (
            <article key={e.slug} className="ledger-card-flat p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="rule-label">
                    {new Date(e.savedAt).toLocaleDateString("en-IN", {
                      day: "numeric", month: "long", year: "numeric",
                    })}
                  </p>
                  <h2 className="font-display mt-1 text-2xl font-semibold">{e.title}</h2>
                </div>
                <button
                  onClick={() => { removeEntry(e.slug); setEntries(loadEntries()); }}
                  className="no-print text-sm text-ink-faint hover:text-vermillion"
                  aria-label={`Remove ${e.title}`}
                >
                  remove
                </button>
              </div>
              <p className="mt-3 text-sm leading-relaxed">{e.summary}</p>
              {e.actions.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {e.actions.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="font-numeric text-vermillion">□</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
              {e.slug !== "checkup" && (
                <Link
                  href={e.href ?? `/tools/${e.slug}`}
                  className="no-print mt-4 inline-block text-sm text-vermillion underline"
                >
                  Rework this →
                </Link>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
