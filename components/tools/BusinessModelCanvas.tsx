"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("business-model-canvas")!;

const BLOCKS = [
  { key: "partners", label: "Key partners", hint: "Who do you depend on to deliver?" },
  { key: "activities", label: "Key activities", hint: "What must you actually do well?" },
  { key: "resources", label: "Key resources", hint: "What assets does this require?" },
  { key: "value", label: "Value proposition", hint: "What problem do you solve, for whom?" },
  { key: "relationships", label: "Customer relationships", hint: "How do you acquire, keep, and grow customers?" },
  { key: "channels", label: "Channels", hint: "How does your value reach the customer?" },
  { key: "segments", label: "Customer segments", hint: "Who exactly are you serving?" },
  { key: "costs", label: "Cost structure", hint: "What are the biggest costs in this model?" },
  { key: "revenue", label: "Revenue streams", hint: "How and when do you actually get paid?" },
] as const;

export function BusinessModelCanvas() {
  const [blocks, setBlocks] = useState<Record<string, string>>({});

  const filled = BLOCKS.filter((b) => (blocks[b.key] ?? "").trim()).length;

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">nine blocks, one page</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {BLOCKS.map((b) => (
            <label key={b.key} className="block">
              <span className="mb-1 block text-sm font-medium">{b.label}</span>
              <span className="mb-1 block text-xs text-ink-faint">{b.hint}</span>
              <textarea
                rows={4}
                value={blocks[b.key] ?? ""}
                onChange={(e) => setBlocks({ ...blocks, [b.key]: e.target.value })}
              />
            </label>
          ))}
        </div>
      </section>

      <Verdict label={`${filled}/9 blocks filled`}>
        <p className="text-sm text-ink-soft">
          {filled === 9
            ? "Full canvas. Read it as one system: does the cost structure actually support the value you're promising, given the channels and relationships you picked?"
            : "A canvas with empty blocks usually means a business model with a gap in the same place — fill every block, even with a rough guess."}
        </p>
        <SaveToPlan
          meta={meta}
          summary={`Business model canvas — ${filled}/9 blocks completed. Value proposition: ${(blocks.value ?? "not yet defined").slice(0, 140)}`}
          actions={[
            blocks.costs && blocks.revenue
              ? "Check that cost structure and revenue streams actually balance to a profitable model"
              : "Fill in cost structure and revenue streams — the two blocks that decide if this model actually works",
            "Share the filled canvas with one other person and ask what's missing",
          ]}
          disabled={filled === 0}
        />
      </Verdict>
    </ToolShell>
  );
}
