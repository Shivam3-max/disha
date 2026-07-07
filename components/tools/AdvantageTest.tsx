"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("advantage-test")!;

const FILTERS = [
  { key: "valuable", q: "Valuable — does it directly help customers or cut your costs?" },
  { key: "rare", q: "Rare — do few or none of your competitors have it?" },
  { key: "inimitable", q: "Hard to copy — would it take a rival years or crores to replicate?" },
  { key: "organized", q: "Organized — is your business actually structured to exploit it?" },
] as const;

type Strength = { name: string; checks: Record<string, boolean | null> };

const blank = (): Strength => ({
  name: "",
  checks: { valuable: null, rare: null, inimitable: null, organized: null },
});

function classify(s: Strength) {
  const v = s.checks;
  if (v.valuable === false) return { label: "Not an advantage", note: "If customers don't feel it, it's a hobby, not a strength.", color: "text-vermillion" };
  if (v.rare === false) return { label: "Table stakes", note: "Needed to play, but everyone has it — it wins you nothing.", color: "text-ink-faint" };
  if (v.inimitable === false) return { label: "Temporary edge", note: "Enjoy it, but assume rivals copy it within a year. Keep innovating.", color: "text-gold" };
  if (v.organized === false) return { label: "Wasted advantage", note: "Real and rare, but your business isn't set up to use it. Fix the organization — fastest win available.", color: "text-gold" };
  if (Object.values(v).every((x) => x === true)) return { label: "Durable advantage", note: "This is the real thing. Protect it, invest in it, build your story around it.", color: "text-forest" };
  return null;
}

export function AdvantageTest() {
  const [strengths, setStrengths] = useState<Strength[]>([blank()]);

  const set = (i: number, patch: Partial<Strength>) =>
    setStrengths(strengths.map((s, j) => (j === i ? { ...s, ...patch } : s)));

  const results = strengths
    .map((s) => ({ s, r: s.name.trim() ? classify(s) : null }))
    .filter((x) => x.r);

  const durable = results.filter((x) => x.r!.label === "Durable advantage");

  return (
    <ToolShell meta={meta}>
      <p className="mb-6 text-sm text-ink-soft">
        List what you believe makes your business special — &ldquo;best
        quality&rdquo;, &ldquo;20 years of relationships&rdquo;, &ldquo;own
        manufacturing&rdquo; — and run each through the four filters.
      </p>

      <div className="space-y-6">
        {strengths.map((s, i) => {
          const r = s.name.trim() ? classify(s) : null;
          return (
            <section key={i} className="ledger-card-flat p-6">
              <input
                type="text"
                placeholder={`Strength ${i + 1} — e.g. "own delivery fleet"`}
                value={s.name}
                onChange={(e) => set(i, { name: e.target.value })}
                className="font-display !text-lg"
              />
              {s.name.trim() && (
                <div className="mt-4 space-y-3">
                  {FILTERS.map((f) => (
                    <div key={f.key} className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm">{f.q}</p>
                      <div className="flex gap-2">
                        {[true, false].map((v) => (
                          <button
                            key={String(v)}
                            onClick={() => set(i, { checks: { ...s.checks, [f.key]: v } })}
                            className={`border px-3 py-1 text-sm ${
                              s.checks[f.key] === v
                                ? v ? "border-forest bg-forest text-paper" : "border-vermillion bg-vermillion text-paper"
                                : "border-ink-faint text-ink-soft hover:border-ink"
                            }`}
                          >
                            {v ? "Yes" : "No"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {r && (
                <p className={`mt-4 border-t border-paper-line pt-3 text-sm`}>
                  <span className={`font-display text-lg font-semibold ${r.color}`}>{r.label}.</span>{" "}
                  {r.note}
                </p>
              )}
            </section>
          );
        })}
      </div>
      <button onClick={() => setStrengths([...strengths, blank()])} className="btn-outline mt-4 px-3 py-1.5 text-sm">
        + Test another strength
      </button>

      {results.length > 0 && (
        <Verdict label="the honest scoreboard">
          <p className="text-sm leading-relaxed">
            {durable.length > 0
              ? `You have ${durable.length} durable advantage${durable.length > 1 ? "s" : ""}: ${durable.map((d) => d.s.name).join(", ")}. Everything in your marketing and strategy should orbit around ${durable.length > 1 ? "these" : "this"}.`
              : "None of your strengths passed all four filters yet. That's common — and useful to know before a competitor teaches you the hard way. Pick the strength closest to passing and close its gap."}
          </p>
          <SaveToPlan
            meta={meta}
            summary={`${results.length} strengths tested; ${durable.length} durable. ${results.map((x) => `${x.s.name}: ${x.r!.label}`).join("; ")}.`}
            actions={
              durable.length > 0
                ? [`Rebuild your pitch around "${durable[0].s.name}" — it's your provable edge`, "Invest to deepen the durable advantage before spreading to new ones", "Retest in six months — advantages decay"]
                : ["Pick your closest-to-durable strength and close its failing filter", "Ask five customers why they really chose you — test those answers here", "Retest in three months"]
            }
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
