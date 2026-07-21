"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("competitor-matrix")!;

const DEFAULT_ATTRS = ["Price", "Quality", "Service", "Brand trust", "Convenience"];

export function CompetitorMatrix() {
  const [competitors, setCompetitors] = useState(["Us", "Competitor A", "Competitor B"]);
  const [attrs, setAttrs] = useState(DEFAULT_ATTRS);
  const [scores, setScores] = useState<Record<string, number>>({});

  const key = (c: number, a: number) => `${c}-${a}`;
  const setScore = (c: number, a: number, v: number) => setScores({ ...scores, [key(c, a)]: v });

  const totals = competitors.map((_, ci) =>
    attrs.reduce((sum, _a, ai) => sum + (scores[key(ci, ai)] ?? 0), 0),
  );
  const maxTotal = attrs.length * 5;
  const usIdx = 0;
  const leader = totals.indexOf(Math.max(...totals));

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">who are you comparing?</p>
        <div className="flex flex-wrap gap-2">
          {competitors.map((c, i) => (
            <input
              key={i}
              type="text"
              value={c}
              onChange={(e) => setCompetitors(competitors.map((x, j) => (j === i ? e.target.value : x)))}
              className="max-w-[10rem]"
            />
          ))}
          <button onClick={() => setCompetitors([...competitors, `Competitor ${String.fromCharCode(65 + competitors.length - 1)}`])} className="btn-outline px-3 py-1.5 text-sm">
            + Add competitor
          </button>
        </div>
      </section>

      <section className="ledger-card-flat mt-6 p-6">
        <p className="rule-label mb-1">score each on the same attributes</p>
        <p className="mb-4 text-sm text-ink-soft">1 = weak, 5 = excellent. Score honestly — this only helps if you're not just flattering yourself.</p>
        <div className="flex flex-wrap gap-2">
          {attrs.map((a, i) => (
            <input
              key={i}
              type="text"
              value={a}
              onChange={(e) => setAttrs(attrs.map((x, j) => (j === i ? e.target.value : x)))}
              className="max-w-[9rem] !text-sm"
            />
          ))}
          <button onClick={() => setAttrs([...attrs, "New attribute"])} className="btn-outline px-3 py-1.5 text-sm">
            + Add attribute
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {attrs.map((a, ai) => (
            <div key={ai}>
              <p className="mb-2 text-sm font-medium">{a}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {competitors.map((c, ci) => (
                  <div key={ci}>
                    <p className="mb-1 text-xs text-ink-faint">{c}</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((v) => (
                        <button
                          key={v}
                          onClick={() => setScore(ci, ai, v)}
                          className={`font-numeric h-8 w-8 border text-sm ${
                            (scores[key(ci, ai)] ?? 0) === v
                              ? ci === usIdx
                                ? "border-forest bg-forest text-paper"
                                : "border-vermillion bg-vermillion text-paper"
                              : "border-ink-faint text-ink-soft hover:border-ink"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Verdict label="overall scoreboard">
        <div className="space-y-2">
          {competitors.map((c, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between text-sm">
                <span className={`font-medium ${i === usIdx ? "text-forest" : ""}`}>{c}</span>
                <span className="font-numeric">{totals[i]}/{maxTotal}</span>
              </div>
              <div className="mt-1 h-3 w-full bg-paper-deep">
                <div
                  className={`h-3 ${i === usIdx ? "bg-forest" : "bg-vermillion"}`}
                  style={{ width: `${(totals[i] / maxTotal) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          {leader === usIdx
            ? "You're leading on the attributes that matter here — the question is whether these are the attributes customers actually decide on."
            : `${competitors[leader]} scores highest overall. Look at which specific attributes are driving the gap — that's where to focus, not everywhere at once.`}
        </p>
        <SaveToPlan
          meta={meta}
          summary={`Competitor matrix across ${attrs.length} attributes. Scores: ${competitors.map((c, i) => `${c} ${totals[i]}/${maxTotal}`).join(", ")}.`}
          actions={[
            leader !== usIdx
              ? `Close the gap with ${competitors[leader]} on the specific attribute where the score difference is largest`
              : "Defend your lead on the attribute customers weight most heavily",
            "Re-run this matrix every quarter — competitor strengths shift",
          ]}
          disabled={totals.every((t) => t === 0)}
        />
      </Verdict>
    </ToolShell>
  );
}
