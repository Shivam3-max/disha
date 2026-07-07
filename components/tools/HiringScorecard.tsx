"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("hiring-scorecard")!;

export function HiringScorecard() {
  const [role, setRole] = useState("");
  const [outcomes, setOutcomes] = useState<string[]>(["", "", ""]);
  const [candidates, setCandidates] = useState<{ name: string; scores: number[] }[]>([
    { name: "", scores: [0, 0, 0] },
  ]);

  const setOutcome = (i: number, v: string) =>
    setOutcomes(outcomes.map((o, j) => (j === i ? v : o)));

  const validOutcomes = outcomes.filter((o) => o.trim());

  const setScore = (ci: number, oi: number, v: number) =>
    setCandidates(candidates.map((c, j) =>
      j === ci ? { ...c, scores: c.scores.map((s, k) => (k === oi ? v : s)) } : c,
    ));

  const totals = candidates.map((c) => ({
    ...c,
    total: c.scores.slice(0, validOutcomes.length).reduce((a, b) => a + b, 0),
    max: validOutcomes.length * 5,
  }));
  const ranked = [...totals].filter((c) => c.name.trim()).sort((a, b) => b.total - a.total);

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-1">step 1 · define the role by outcomes, not duties</p>
        <p className="mb-4 text-sm text-ink-soft">
          Bad hires happen when the sheet says &ldquo;handle marketing&rdquo;
          instead of &ldquo;bring 50 qualified leads a month by month three.&rdquo;
          Write what success looks like after twelve months.
        </p>
        <label className="mb-4 block">
          <span className="mb-1 block text-sm font-medium">Role you&apos;re hiring for</span>
          <input type="text" placeholder="e.g. Sales manager" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <div className="space-y-3">
          {outcomes.map((o, i) => (
            <label key={i} className="block">
              <span className="mb-1 block text-sm font-medium">Outcome {i + 1}</span>
              <input
                type="text"
                placeholder={["e.g. Grows monthly sales from ₹8L to ₹12L within 6 months", "e.g. Builds and documents the full sales process", "e.g. Recruits and trains 2 junior salespeople"][i] ?? "Another measurable outcome"}
                value={o}
                onChange={(e) => setOutcome(i, e.target.value)}
              />
            </label>
          ))}
        </div>
        <button onClick={() => setOutcomes([...outcomes, ""])} className="btn-outline mt-3 px-3 py-1.5 text-sm">
          + Add outcome
        </button>
      </section>

      {validOutcomes.length > 0 && (
        <section className="ledger-card-flat mt-6 p-6">
          <p className="rule-label mb-1">step 2 · score candidates against the same sheet</p>
          <p className="mb-4 text-sm text-ink-soft">
            For each outcome ask: &ldquo;Tell me about a time you achieved
            something like this.&rdquo; Score the evidence 1–5, never the charm.
          </p>
          <div className="space-y-6">
            {candidates.map((c, ci) => (
              <div key={ci} className="border-l-2 border-ink pl-4">
                <input
                  type="text"
                  placeholder={`Candidate ${ci + 1} name`}
                  value={c.name}
                  onChange={(e) => setCandidates(candidates.map((x, j) => (j === ci ? { ...x, name: e.target.value } : x)))}
                  className="mb-3 max-w-xs font-medium"
                />
                {validOutcomes.map((o, oi) => (
                  <div key={oi} className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="max-w-md text-sm text-ink-soft">{o}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((v) => (
                        <button
                          key={v}
                          onClick={() => setScore(ci, oi, v)}
                          className={`font-numeric h-8 w-8 border text-sm ${
                            (c.scores[oi] ?? 0) === v
                              ? "border-vermillion bg-vermillion text-paper"
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
            ))}
          </div>
          <button
            onClick={() => setCandidates([...candidates, { name: "", scores: outcomes.map(() => 0) }])}
            className="btn-outline mt-4 px-3 py-1.5 text-sm"
          >
            + Add candidate
          </button>
        </section>
      )}

      {ranked.length > 0 && (
        <Verdict label="the ranking">
          <div className="space-y-2">
            {ranked.map((c, i) => (
              <div key={c.name} className="flex items-baseline justify-between border-b border-paper-line pb-2">
                <span className="font-medium">{i + 1}. {c.name}</span>
                <span className={`font-numeric ${c.total / c.max >= 0.7 ? "text-forest" : "text-ink-soft"}`}>
                  {c.total}/{c.max}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Rule: below 70%, keep looking. An empty seat costs less than the
            wrong person in it.
          </p>
          <SaveToPlan
            meta={meta}
            summary={`Hiring for ${role || "role"} with ${validOutcomes.length} defined outcomes. Top candidate: ${ranked[0].name} (${ranked[0].total}/${ranked[0].max}).`}
            actions={[
              ranked[0].total / ranked[0].max >= 0.7 ? `Reference-check ${ranked[0].name} against each outcome before offering` : "No candidate cleared 70% — widen the search rather than settle",
              "Share the outcome sheet with the new hire on day one — it becomes their review sheet",
              "Score every future role this way before the first interview",
            ]}
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
