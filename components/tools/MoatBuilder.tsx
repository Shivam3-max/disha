"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("moat-builder")!;

const MOATS: { name: string; how: string; group: string }[] = [
  { name: "Registered brand & trademarks", how: "Protect your name and identity legally before someone else does.", group: "Legal & IP" },
  { name: "Patents or proprietary methods", how: "A process or recipe competitors legally cannot copy.", group: "Legal & IP" },
  { name: "Licenses & certifications", how: "Regulatory approvals that take rivals years to obtain.", group: "Legal & IP" },
  { name: "Exclusive supplier or territory rights", how: "Lock the best source or region so rivals can't enter.", group: "Legal & IP" },
  { name: "Trade secrets", how: "Know-how kept inside the company, documented but protected.", group: "Legal & IP" },
  { name: "Distribution network", how: "Being on more shelves and in more channels than anyone.", group: "Scale & cost" },
  { name: "Economies of scale", how: "Volume makes your unit cost unbeatable.", group: "Scale & cost" },
  { name: "High capital requirement", how: "Playing in a game that costs too much for newcomers to join.", group: "Scale & cost" },
  { name: "Manufacturing efficiency", how: "Producing faster, cheaper, or with less waste than rivals.", group: "Scale & cost" },
  { name: "Speed of response", how: "Answering, delivering and adapting faster than anyone local.", group: "Scale & cost" },
  { name: "Brand people trust beyond logic", how: "Customers pick you on reputation without comparing.", group: "Customer bond" },
  { name: "Loyalty programs & memberships", how: "Accumulated points and perks that hurt to abandon.", group: "Customer bond" },
  { name: "Switching costs", how: "Moving to a rival costs the customer time, money or retraining.", group: "Customer bond" },
  { name: "Community & network effects", how: "Each new customer makes the product better for the rest.", group: "Customer bond" },
  { name: "Outstanding service memories", how: "Service so good it becomes the story customers tell.", group: "Customer bond" },
  { name: "Continuous innovation", how: "Shipping improvements faster than rivals can imitate.", group: "Product edge" },
  { name: "Genuine product differentiation", how: "A feature or quality the market can't find elsewhere.", group: "Product edge" },
  { name: "Deep niche expertise", how: "Being the acknowledged specialist in one narrow problem.", group: "Product edge" },
  { name: "Data & feedback advantage", how: "Years of customer data that make your decisions sharper.", group: "Product edge" },
  { name: "Local sentiment & relationships", how: "Roots, language and trust in your community that outsiders lack.", group: "Product edge" },
];

const GROUPS = ["Legal & IP", "Scale & cost", "Customer bond", "Product edge"];

export function MoatBuilder() {
  const [have, setHave] = useState<Set<string>>(new Set());
  const [next, setNext] = useState<string | null>(null);

  const toggle = (n: string) => {
    const s = new Set(have);
    if (s.has(n)) s.delete(n);
    else s.add(n);
    setHave(s);
    if (next === n) setNext(null);
  };

  const score = have.size;
  const verdict =
    score >= 8 ? "Fortress. Your defense is layered — competitors need to break several walls at once." :
    score >= 4 ? "Defended, with gaps. You have real barriers, but a determined competitor could route around them. Add one moat from a group where you have none." :
    score >= 1 ? "Exposed. One or two barriers is a fence, not a moat. Pick one buildable moat and make it this quarter's project." :
    "Wide open. Right now nothing stops a competitor with money from copying you. Choose your first moat below.";

  return (
    <ToolShell meta={meta}>
      {GROUPS.map((g) => (
        <section key={g} className="mb-6">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">{g}</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {MOATS.filter((m) => m.group === g).map((m) => (
              <button
                key={m.name}
                onClick={() => toggle(m.name)}
                className={`ledger-card-flat p-3 text-left transition-colors ${have.has(m.name) ? "!border-forest bg-forest/10" : "hover:border-ink"}`}
              >
                <span className="flex items-start gap-2">
                  <span className={`font-numeric mt-0.5 ${have.has(m.name) ? "text-forest" : "text-ink-faint"}`}>
                    {have.has(m.name) ? "✓" : "○"}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{m.name}</span>
                    <span className="block text-xs text-ink-soft">{m.how}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <Verdict label={`your moat score: ${score}/20`}>
        <p className="max-w-xl text-sm leading-relaxed">{verdict}</p>
        <div className="mt-5">
          <p className="mb-2 text-sm font-medium">Which moat will you build next?</p>
          <select value={next ?? ""} onChange={(e) => setNext(e.target.value || null)} className="max-w-md">
            <option value="">— choose one you don&apos;t have yet —</option>
            {MOATS.filter((m) => !have.has(m.name)).map((m) => (
              <option key={m.name} value={m.name}>{m.name}</option>
            ))}
          </select>
        </div>
        <SaveToPlan
          meta={meta}
          summary={`Moat score ${score}/20. Barriers in place: ${score > 0 ? [...have].slice(0, 5).join(", ") + (score > 5 ? "…" : "") : "none yet"}.`}
          actions={[
            next ? `Build "${next}" — break it into the first three concrete steps this week` : "Choose one new moat to build this quarter",
            "Ask three loyal customers: 'What would make you switch to a competitor?' — that answer is your weakest wall",
            "Re-score every quarter; a moat unmaintained is a moat draining",
          ]}
        />
      </Verdict>
    </ToolShell>
  );
}
