"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadMissedQuestions, clearMiss, recordMiss, type MissedQuestion } from "@/lib/store";

export function ReviewDeck() {
  const [deck, setDeck] = useState<MissedQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const all = Object.values(loadMissedQuestions()).sort((a, b) => b.timesMissed - a.timesMissed);
    setDeck(all);
  }, []);

  if (deck === null) return <main className="mx-auto max-w-3xl px-5 py-14" />;

  if (deck.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-14">
        <p className="rule-label mb-3">spaced review</p>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">Review your misses</h1>
        <div className="ledger-card-flat mt-10 p-10 text-center">
          <p className="font-display text-2xl font-semibold text-forest">Deck cleared.</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
            No missed questions waiting for review right now. Every quiz you take from here adds anything you get wrong straight into this deck.
          </p>
          <Link href="/learn" className="btn-ink mt-6 inline-block px-6 py-3 font-medium">
            Back to Learn mode →
          </Link>
        </div>
      </main>
    );
  }

  const card = deck[index % deck.length];

  const choose = (oi: number) => {
    setPicked(oi);
    setRevealed(true);
  };

  const next = () => {
    const correct = picked === card.correct;
    if (correct) {
      clearMiss(card.id);
      const rest = deck.filter((d) => d.id !== card.id);
      setDeck(rest);
      setIndex(rest.length > 0 ? index % rest.length : 0);
    } else {
      recordMiss({
        id: card.id,
        daySlug: card.daySlug,
        dayTitle: card.dayTitle,
        track: card.track,
        q: card.q,
        options: card.options,
        correct: card.correct,
        explain: card.explain,
      });
      setIndex((index + 1) % deck.length);
    }
    setPicked(null);
    setRevealed(false);
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">spaced review</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Review your misses</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        {deck.length} question{deck.length === 1 ? "" : "s"} still waiting to click. Get one right and it leaves the deck for good.
      </p>

      <section className="ledger-card-flat mt-8 p-6">
        <p className="rule-label mb-2">source: {card.dayTitle}</p>
        <p className="font-medium">{card.q}</p>

        {!revealed ? (
          <div className="mt-4 space-y-2">
            {card.options.map((o, oi) => (
              <button
                key={oi}
                onClick={() => choose(oi)}
                className="block w-full border border-ink-faint px-3 py-2 text-left text-sm text-ink-soft transition-colors hover:border-ink"
              >
                {o}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <div className="space-y-2">
              {card.options.map((o, oi) => {
                const isCorrect = oi === card.correct;
                const isPicked = oi === picked;
                return (
                  <div
                    key={oi}
                    className={`border px-3 py-2 text-sm ${
                      isCorrect
                        ? "border-forest bg-forest/10"
                        : isPicked
                          ? "border-vermillion bg-vermillion/10"
                          : "border-ink-faint text-ink-faint"
                    }`}
                  >
                    {o}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              <span className="font-medium text-forest">{picked === card.correct ? "Correct — cleared. " : "Still shaky — stays in the deck. "}</span>
              {card.explain}
            </p>
            <button onClick={next} className="btn-ink mt-5 px-5 py-2.5 font-medium">
              Next card →
            </button>
          </div>
        )}
      </section>

      <p className="mt-4 text-xs text-ink-faint">Missed {card.timesMissed} time{card.timesMissed === 1 ? "" : "s"} so far.</p>
    </main>
  );
}
