"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("swot-builder")!;

const QUADRANTS = [
  { key: "strengths", label: "Strengths", hint: "Internal, working in your favour", color: "text-forest", border: "border-forest" },
  { key: "weaknesses", label: "Weaknesses", hint: "Internal, working against you", color: "text-vermillion", border: "border-vermillion" },
  { key: "opportunities", label: "Opportunities", hint: "External, could work in your favour", color: "text-forest", border: "border-forest" },
  { key: "threats", label: "Threats", hint: "External, could work against you", color: "text-vermillion", border: "border-vermillion" },
] as const;

export function SwotBuilder() {
  const [items, setItems] = useState<Record<string, string[]>>({
    strengths: [""],
    weaknesses: [""],
    opportunities: [""],
    threats: [""],
  });
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const add = (key: string) => {
    const val = (drafts[key] ?? "").trim();
    if (!val) return;
    setItems({ ...items, [key]: [...items[key].filter(Boolean), val] });
    setDrafts({ ...drafts, [key]: "" });
  };

  const remove = (key: string, i: number) =>
    setItems({ ...items, [key]: items[key].filter((_, j) => j !== i) });

  const totalItems = QUADRANTS.reduce((sum, q) => sum + items[q.key].filter(Boolean).length, 0);

  return (
    <ToolShell meta={meta}>
      <div className="grid gap-4 sm:grid-cols-2">
        {QUADRANTS.map((q) => (
          <section key={q.key} className={`ledger-card-flat border-l-4 p-5 ${q.border}`}>
            <p className={`font-display text-xl font-semibold ${q.color}`}>{q.label}</p>
            <p className="mb-3 text-xs text-ink-faint">{q.hint}</p>
            <ul className="mb-3 space-y-2">
              {items[q.key].filter(Boolean).map((item, i) => (
                <li key={i} className="flex items-start justify-between gap-2 text-sm">
                  <span>{item}</span>
                  <button onClick={() => remove(q.key, i)} className="shrink-0 text-ink-faint hover:text-vermillion">✕</button>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add an item…"
                value={drafts[q.key] ?? ""}
                onChange={(e) => setDrafts({ ...drafts, [q.key]: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && add(q.key)}
                className="!text-sm"
              />
              <button onClick={() => add(q.key)} className="btn-outline shrink-0 px-3 py-1.5 text-sm">Add</button>
            </div>
          </section>
        ))}
      </div>

      <Verdict label={`${totalItems} items mapped`}>
        <p className="text-sm text-ink-soft">
          The useful move isn&apos;t listing items — it&apos;s pairing them. Which strength could defend
          against your biggest threat? Which weakness could sink your best opportunity if left unfixed?
          Write one pairing before you close this.
        </p>
        <SaveToPlan
          meta={meta}
          summary={`SWOT: ${items.strengths.filter(Boolean).length} strengths, ${items.weaknesses.filter(Boolean).length} weaknesses, ${items.opportunities.filter(Boolean).length} opportunities, ${items.threats.filter(Boolean).length} threats mapped.`}
          actions={[
            items.weaknesses.filter(Boolean).length > 0
              ? `Address the weakness most likely to block your top opportunity: "${items.weaknesses.filter(Boolean)[0]}"`
              : "Fill in weaknesses honestly — a SWOT with no weaknesses listed usually means avoidance, not strength",
            "Revisit this quarterly — your position shifts faster than a static SWOT suggests",
          ]}
          disabled={totalItems === 0}
        />
      </Verdict>
    </ToolShell>
  );
}
