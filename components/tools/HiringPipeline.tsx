"use client";

import { useEffect, useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";
import { loadHiringPipeline, saveHiringPipeline, type HiringCandidate } from "@/lib/store";

const meta = getTool("hiring-pipeline")!;

const STAGES: HiringCandidate["stage"][] = ["Applied", "Screening", "Interview", "Offer", "Hired"];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function HiringPipeline() {
  const [candidates, setCandidates] = useState<HiringCandidate[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCandidates(loadHiringPipeline());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveHiringPipeline(candidates);
  }, [candidates, loaded]);

  const add = () => {
    if (!name.trim()) return;
    setCandidates([...candidates, { id: uid(), name, role, stage: "Applied", notes: "" }]);
    setName("");
    setRole("");
  };

  const move = (id: string, dir: 1 | -1) => {
    setCandidates(
      candidates.map((c) => {
        if (c.id !== id) return c;
        const idx = STAGES.indexOf(c.stage);
        const nextIdx = Math.min(Math.max(idx + dir, 0), STAGES.length - 1);
        return { ...c, stage: STAGES[nextIdx] };
      }),
    );
  };

  const reject = (id: string) =>
    setCandidates(candidates.map((c) => (c.id === id ? { ...c, stage: "Rejected" } : c)));

  const remove = (id: string) => setCandidates(candidates.filter((c) => c.id !== id));

  const active = candidates.filter((c) => c.stage !== "Rejected");
  const counts = STAGES.map((s) => ({ stage: s, n: candidates.filter((c) => c.stage === s).length }));

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">add a candidate</p>
        <div className="grid gap-3 sm:grid-cols-[2fr_2fr_auto]">
          <input type="text" placeholder="Candidate name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
          <button onClick={add} className="btn-ink px-4 py-2 text-sm font-medium">Add</button>
        </div>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {counts.map((c) => (
          <div key={c.stage} className="ledger-card-flat p-3 text-center">
            <p className="font-numeric text-2xl font-medium">{c.n}</p>
            <p className="rule-label mt-1">{c.stage}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {active.length === 0 && (
          <p className="text-sm text-ink-faint">No candidates yet — add one above to start the pipeline.</p>
        )}
        {active.map((c) => (
          <div key={c.id} className="ledger-card-flat flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-medium">{c.name}</p>
              <p className="text-sm text-ink-soft">{c.role || "No role specified"} · {c.stage}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => move(c.id, -1)}
                disabled={c.stage === "Applied"}
                className="btn-outline px-2 py-1 text-xs disabled:opacity-30"
              >
                ← back
              </button>
              <button
                onClick={() => move(c.id, 1)}
                disabled={c.stage === "Hired"}
                className="btn-ink px-2 py-1 text-xs disabled:opacity-30"
              >
                {c.stage === "Offer" ? "Mark hired →" : "advance →"}
              </button>
              <button onClick={() => reject(c.id)} className="px-2 py-1 text-xs text-vermillion hover:underline">
                Reject
              </button>
              <button onClick={() => remove(c.id)} className="px-2 py-1 text-xs text-ink-faint hover:text-vermillion">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {candidates.length > 0 && (
        <Verdict label="pipeline snapshot">
          <p className="text-sm text-ink-soft">
            This board is saved automatically and will still be here next time you visit. Use &ldquo;Save to plan&rdquo; to log a snapshot of where things stand today.
          </p>
          <SaveToPlan
            meta={meta}
            summary={`Hiring pipeline: ${counts.map((c) => `${c.n} ${c.stage.toLowerCase()}`).join(", ")}.`}
            actions={[
              counts.find((c) => c.stage === "Applied")!.n > 3 ? "Move stalled 'Applied' candidates to screening or reject them — don't let a pipeline silently rot" : "Keep sourcing — a healthy pipeline has more candidates entering than stalling",
            ]}
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
