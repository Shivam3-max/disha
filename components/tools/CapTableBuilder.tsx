"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("cap-table-builder")!;

type Holder = { name: string; shares: string };

export function CapTableBuilder() {
  const [holders, setHolders] = useState<Holder[]>([
    { name: "Founder", shares: "8000" },
    { name: "Co-founder", shares: "2000" },
  ]);
  const [newRoundShares, setNewRoundShares] = useState("2500");

  const set = (i: number, patch: Partial<Holder>) =>
    setHolders(holders.map((h, j) => (j === i ? { ...h, ...patch } : h)));

  const rows = holders.filter((h) => h.name.trim() && +h.shares > 0);
  const totalShares = rows.reduce((a, h) => a + +h.shares, 0);
  const newShares = +newRoundShares || 0;
  const postRoundTotal = totalShares + newShares;

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-1">step 1 · who owns what today</p>
        <p className="mb-4 text-sm text-ink-soft">List every shareholder and their share count.</p>
        <div className="space-y-3">
          {holders.map((h, i) => (
            <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr]">
              <input type="text" placeholder="Name" value={h.name} onChange={(e) => set(i, { name: e.target.value })} />
              <input type="number" placeholder="Shares" value={h.shares} onChange={(e) => set(i, { shares: e.target.value })} className="font-numeric" />
            </div>
          ))}
        </div>
        <button onClick={() => setHolders([...holders, { name: "", shares: "" }])} className="btn-outline mt-4 px-3 py-1.5 text-sm">
          + Add shareholder
        </button>
      </section>

      {rows.length > 0 && (
        <Verdict label="ownership today">
          <div className="space-y-2">
            {rows.map((h) => {
              const pct = (+h.shares / totalShares) * 100;
              return (
                <div key={h.name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{h.name}</span>
                    <span className="font-numeric">{pct.toFixed(1)}%</span>
                  </div>
                  <div className="mt-1 h-3 w-full bg-paper-deep">
                    <div className="h-3 bg-vermillion" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            Total shares outstanding: <span className="font-numeric font-medium">{totalShares.toLocaleString("en-IN")}</span>
          </p>
        </Verdict>
      )}

      {rows.length > 0 && (
        <section className="ledger-card-flat mt-6 p-6">
          <p className="rule-label mb-1">step 2 · what if you raised a new round?</p>
          <p className="mb-4 text-sm text-ink-soft">New shares issued to investors dilute everyone else proportionally.</p>
          <label className="block max-w-xs">
            <span className="mb-1 block text-sm font-medium">New shares issued to investors</span>
            <input type="number" value={newRoundShares} onChange={(e) => setNewRoundShares(e.target.value)} className="font-numeric" />
          </label>

          {newShares > 0 && (
            <div className="mt-5 space-y-2 border-t border-paper-line pt-4">
              <p className="rule-label mb-2">ownership after the round</p>
              {rows.map((h) => {
                const pctBefore = (+h.shares / totalShares) * 100;
                const pctAfter = (+h.shares / postRoundTotal) * 100;
                return (
                  <div key={h.name} className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{h.name}</span>
                    <span className="font-numeric">
                      {pctBefore.toFixed(1)}% → <span className="text-vermillion">{pctAfter.toFixed(1)}%</span>
                    </span>
                  </div>
                );
              })}
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium">New investor</span>
                <span className="font-numeric text-forest">{((newShares / postRoundTotal) * 100).toFixed(1)}%</span>
              </div>
              <SaveToPlan
                meta={meta}
                summary={`Cap table: ${rows.length} shareholders, ${totalShares.toLocaleString("en-IN")} shares. A ${newShares.toLocaleString("en-IN")}-share round dilutes existing holders to ${((totalShares / postRoundTotal) * 100).toFixed(1)}% combined.`}
                actions={[
                  "Confirm this dilution is acceptable to every existing shareholder before finalising a term sheet",
                  "Get a company secretary or lawyer to formalise any actual share issuance",
                ]}
              />
            </div>
          )}
        </section>
      )}
    </ToolShell>
  );
}
