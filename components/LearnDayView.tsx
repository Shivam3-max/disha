"use client";

import { useState } from "react";
import Link from "next/link";
import type { LearnDay } from "@/lib/learn";
import { LEARN_DAYS, TRACKS } from "@/lib/learn";
import { saveLearnProgress, saveEntry, recordMiss, clearMiss } from "@/lib/store";
import { getJourney } from "@/lib/journeys";

type Confidence = "guess" | "fair" | "sure";

const CONFIDENCE_OPTIONS: { v: Confidence; l: string }[] = [
  { v: "guess", l: "Guessed" },
  { v: "fair", l: "Fairly sure" },
  { v: "sure", l: "Certain" },
];

function ApplyLink({ applyLink }: { applyLink: NonNullable<LearnDay["lessons"][number]["applyLink"]> }) {
  const href = applyLink.kind === "tool" ? `/tools/${applyLink.slug}` : `/frameworks/${applyLink.slug}`;
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center gap-1.5 border border-vermillion px-3 py-1.5 text-sm text-vermillion hover:bg-vermillion hover:text-paper"
    >
      Apply this now — {applyLink.label} →
    </Link>
  );
}

export function LearnDayView({ day }: { day: LearnDay }) {
  const [stage, setStage] = useState<"lessons" | "quiz" | "done">("lessons");
  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<"answer" | "confidence" | "revealed">("answer");
  const [picked, setPicked] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<Confidence | null>(null);
  const [results, setResults] = useState<{ picked: number; confidence: Confidence; correct: boolean }[]>([]);

  const trackMeta = TRACKS[day.track];
  const trackDays = LEARN_DAYS.filter((d) => d.track === day.track);
  const posInTrack = trackDays.findIndex((d) => d.slug === day.slug) + 1;
  const globalIdx = LEARN_DAYS.findIndex((d) => d.slug === day.slug);
  const next = LEARN_DAYS[globalIdx + 1];

  const q = day.quiz[qIndex];
  const isLastQ = qIndex === day.quiz.length - 1;
  const finalScore = results.filter((r) => r.correct).length;
  const suggestedJourney = day.suggestedJourney ? getJourney(day.suggestedJourney) : undefined;

  const choose = (oi: number) => {
    setPicked(oi);
    setPhase("confidence");
  };

  const chooseConfidence = (c: Confidence) => {
    setConfidence(c);
    setPhase("revealed");
  };

  const calibrationNote = (correct: boolean, c: Confidence) => {
    if (c === "sure" && !correct) return "Certain but missed — this is exactly the kind of gap worth reviewing again.";
    if (c === "guess" && correct) return "Right, but only a guess — worth re-reading the explanation below so it sticks.";
    return null;
  };

  const advance = () => {
    if (picked === null || confidence === null) return;
    const correct = picked === q.correct;
    const nextResults = [...results, { picked, confidence, correct }];
    setResults(nextResults);

    if (!correct) {
      recordMiss({
        id: `${day.slug}::${qIndex}`,
        daySlug: day.slug,
        dayTitle: day.title,
        track: day.track,
        q: q.q,
        options: q.options,
        correct: q.correct,
        explain: q.explain,
      });
    } else {
      clearMiss(`${day.slug}::${qIndex}`);
    }

    if (isLastQ) {
      const score = nextResults.filter((r) => r.correct).length;
      saveLearnProgress(day.slug, score, day.quiz.length);
      saveEntry({
        slug: `learn-${day.slug}`,
        title: `${trackMeta.unitLabel} ${day.day} · ${day.title}`,
        savedAt: new Date().toISOString(),
        summary: `Completed ${trackMeta.title} — ${trackMeta.unitLabel.toLowerCase()} ${day.day}. Scored ${score}/${day.quiz.length} on the quiz.`,
        actions: day.lessons.slice(0, 2).map((l) => `Apply "${l.heading}" to one live decision this week`),
        href: `/learn/${day.slug}`,
      });
      setStage("done");
    } else {
      setQIndex(qIndex + 1);
      setPicked(null);
      setConfidence(null);
      setPhase("answer");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">
        {trackMeta.title} · {trackMeta.unitLabel} {day.day} of {trackDays.length}
      </p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
        {day.title}
      </h1>
      <p className="mt-3 max-w-xl text-lg italic text-vermillion">{day.subtitle}</p>

      {stage === "lessons" && (
        <>
          <div className="mt-10 space-y-8">
            {day.lessons.map((l, i) => (
              <section key={i} className="ledger-card-flat p-6">
                <p className="rule-label mb-2">concept {i + 1}</p>
                <h2 className="font-display text-2xl font-semibold">{l.heading}</h2>
                <div className="mt-3 space-y-3">
                  {l.body.map((p, j) => (
                    <p key={j} className="leading-relaxed text-ink-soft">{p}</p>
                  ))}
                </div>
                {l.example && (
                  <p className="mt-4 border-l-2 border-vermillion pl-4 text-sm italic">
                    {l.example}
                  </p>
                )}
                {l.applyLink && <ApplyLink applyLink={l.applyLink} />}
              </section>
            ))}
          </div>
          <button onClick={() => setStage("quiz")} className="btn-ink mt-8 px-6 py-3 font-medium">
            Take the quiz →
          </button>
        </>
      )}

      {stage === "quiz" && (
        <div className="mt-10">
          <p className="rule-label mb-3">question {qIndex + 1} of {day.quiz.length}</p>
          <section className="ledger-card-flat p-6">
            <p className="font-medium">{q.q}</p>

            {phase === "answer" && (
              <div className="mt-4 space-y-2">
                {q.options.map((o, oi) => (
                  <button
                    key={oi}
                    onClick={() => choose(oi)}
                    className="block w-full border border-ink-faint px-3 py-2 text-left text-sm text-ink-soft transition-colors hover:border-ink"
                  >
                    {o}
                  </button>
                ))}
              </div>
            )}

            {phase === "confidence" && picked !== null && (
              <div className="mt-4">
                <p className="mb-3 border-l-2 border-ink-faint pl-3 text-sm text-ink-soft">
                  Your answer: {q.options[picked]}
                </p>
                <p className="mb-2 text-sm font-medium">How sure were you?</p>
                <div className="flex flex-wrap gap-2">
                  {CONFIDENCE_OPTIONS.map((c) => (
                    <button
                      key={c.v}
                      onClick={() => chooseConfidence(c.v)}
                      className="border border-ink-faint px-3 py-1.5 text-sm text-ink-soft hover:border-vermillion hover:text-vermillion"
                    >
                      {c.l}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {phase === "revealed" && picked !== null && confidence !== null && (
              <div className="mt-4">
                <div className="space-y-2">
                  {q.options.map((o, oi) => {
                    const isCorrect = oi === q.correct;
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
                  <span className="font-medium text-forest">
                    {picked === q.correct ? "Correct. " : "Not quite. "}
                  </span>
                  {q.explain}
                </p>
                {calibrationNote(picked === q.correct, confidence) && (
                  <p className="mt-2 text-sm italic text-gold">{calibrationNote(picked === q.correct, confidence)}</p>
                )}
                <button onClick={advance} className="btn-ink mt-5 px-5 py-2.5 font-medium">
                  {isLastQ ? "See my results →" : "Next question →"}
                </button>
              </div>
            )}
          </section>
        </div>
      )}

      {stage === "done" && (
        <div className="ledger-card mt-10 p-6">
          <p className="rule-label mb-2">
            {trackMeta.unitLabel} {day.day} complete
          </p>
          <p className="font-display text-3xl font-semibold">
            {finalScore}/{day.quiz.length} correct
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            Saved to your action plan.{" "}
            {next
              ? "Ready for the next one?"
              : `That's every ${trackMeta.unitLabel.toLowerCase()} in ${trackMeta.title} — you've completed this track.`}
          </p>

          {suggestedJourney && (
            <div className="mt-5 border-l-2 border-vermillion pl-4">
              <p className="text-sm">
                You just covered <span className="font-medium">{day.title.toLowerCase()}</span> — put it to work with the{" "}
                <span className="font-medium">&ldquo;{suggestedJourney.title}&rdquo;</span> journey.
              </p>
              <Link href={`/journeys/${suggestedJourney.slug}`} className="mt-2 inline-block text-sm text-vermillion underline">
                Start that journey →
              </Link>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            {next && (
              <Link href={`/learn/${next.slug}`} className="btn-ink px-5 py-2.5 font-medium">
                {TRACKS[next.track].unitLabel} {next.day}: {next.title} →
              </Link>
            )}
            <Link href="/plan" className="btn-outline px-5 py-2.5 font-medium">
              View action plan
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
