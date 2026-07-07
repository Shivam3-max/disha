"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("inventory-turns")!;

type Row = { name: string; sales: string; stock: string };

export function InventoryTurns() {
  const [rows, setRows] = useState<Row[]>([
    { name: "Product A", sales: "600000", stock: "50000" },
    { name: "Product B", sales: "240000", stock: "120000" },
    { name: "", sales: "", stock: "" },
  ]);

  const set = (i: number, patch: Partial<Row>) =>
    setRows(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));

  const ranked = rows
    .filter((r) => r.name.trim() && +r.sales > 0 && +r.stock > 0)
    .map((r) => ({ ...r, itr: +r.sales / +r.stock }))
    .sort((a, b) => b.itr - a.itr);

  const grade = (itr: number) =>
    itr >= 8 ? { l: "fast", c: "text-forest" } : itr >= 4 ? { l: "steady", c: "text-gold" } : { l: "slow / dead", c: "text-vermillion" };

  const fast = ranked.filter((r) => r.itr >= 8);
  const dead = ranked.filter((r) => r.itr < 4);
  const totalStock = ranked.reduce((a, r) => a + +r.stock, 0);
  const deadStock = dead.reduce((a, r) => a + +r.stock, 0);

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-1">step 1 · your product register (yearly figures)</p>
        <p className="mb-4 text-sm text-ink-soft">
          Turns = annual sales ÷ average stock held. A product turning 12×
          returns its cash every month; one turning 2× freezes it for six.
        </p>
        <div className="space-y-3">
          <div className="hidden grid-cols-[2fr_1fr_1fr] gap-3 sm:grid">
            <span className="rule-label">product / line</span>
            <span className="rule-label">annual sales ₹</span>
            <span className="rule-label">avg stock value ₹</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr]">
              <input type="text" placeholder="product name" value={r.name} onChange={(e) => set(i, { name: e.target.value })} />
              <input type="number" placeholder="sales" value={r.sales} onChange={(e) => set(i, { sales: e.target.value })} className="font-numeric" />
              <input type="number" placeholder="stock" value={r.stock} onChange={(e) => set(i, { stock: e.target.value })} className="font-numeric" />
            </div>
          ))}
        </div>
        <button onClick={() => setRows([...rows, { name: "", sales: "", stock: "" }])} className="btn-outline mt-4 px-3 py-1.5 text-sm">
          + Add product
        </button>
      </section>

      {ranked.length > 0 && (
        <Verdict label="ranked by how fast cash comes back">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="rule-label py-2 font-normal">product</th>
                <th className="rule-label py-2 text-right font-normal">turns / year</th>
                <th className="rule-label py-2 text-right font-normal">verdict</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((r) => {
                const g = grade(r.itr);
                return (
                  <tr key={r.name} className="border-b border-paper-line">
                    <td className="py-2 font-medium">{r.name}</td>
                    <td className="font-numeric py-2 text-right">{r.itr.toFixed(1)}×</td>
                    <td className={`py-2 text-right font-medium ${g.c}`}>{g.l}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {dead.length > 0 && (
            <p className="mt-4 text-sm leading-relaxed">
              <span className="font-medium text-vermillion">
                {inr(deadStock)} of your {inr(totalStock)} inventory
              </span>{" "}
              is sitting in slow movers. Classic rescue: bundle each slow item
              with your fastest mover{fast[0] ? ` (${fast[0].name})` : ""} at a
              small discount, and rebalance future orders roughly 70% fast /
              20% steady / 10% slow.
            </p>
          )}
          <SaveToPlan
            meta={meta}
            summary={`${ranked.length} products analyzed. ${dead.length} slow movers holding ${inr(deadStock)} of ${inr(totalStock)} total stock.`}
            actions={[
              dead.length > 0 ? `Clear dead stock: bundle ${dead.map((d) => d.name).join(", ")} with fast movers this month` : "No dead stock — keep reorders weighted toward fast movers",
              "Adopt the 70/20/10 ordering rule: fast / steady / slow",
              "Re-run this analysis before every major stock purchase",
            ]}
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
