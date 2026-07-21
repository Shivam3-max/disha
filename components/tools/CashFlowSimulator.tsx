"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("cash-flow-simulator")!;

const MONTHS = 6;

type Row = { revenue: string; cogs: string; opex: string };

export function CashFlowSimulator() {
  const [startingCash, setStartingCash] = useState("300000");
  const [rows, setRows] = useState<Row[]>(
    Array.from({ length: MONTHS }, () => ({ revenue: "", cogs: "", opex: "" })),
  );

  const set = (i: number, patch: Partial<Row>) =>
    setRows(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));

  let cumulative = +startingCash || 0;
  const computed = rows.map((r) => {
    const rev = +r.revenue || 0, cogs = +r.cogs || 0, opex = +r.opex || 0;
    const net = rev - cogs - opex;
    cumulative += net;
    return { ...r, rev, cogs, opex, net, cumulative };
  });

  const firstNegativeMonth = computed.findIndex((c) => c.cumulative < 0);
  const lastMonth = computed[computed.length - 1];

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <label className="mb-4 block max-w-xs">
          <span className="mb-1 block text-sm font-medium">Starting cash in bank</span>
          <div className="flex items-center gap-2">
            <span className="font-numeric text-ink-faint">₹</span>
            <input type="number" value={startingCash} onChange={(e) => setStartingCash(e.target.value)} className="font-numeric" />
          </div>
        </label>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="rule-label py-2 pr-3 font-normal">Month</th>
                {Array.from({ length: MONTHS }, (_, i) => (
                  <th key={i} className="rule-label py-2 pr-3 font-normal">M{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 pr-3 font-medium">Revenue</td>
                {rows.map((r, i) => (
                  <td key={i} className="py-1 pr-3">
                    <input type="number" value={r.revenue} onChange={(e) => set(i, { revenue: e.target.value })} className="font-numeric !w-24" />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">COGS</td>
                {rows.map((r, i) => (
                  <td key={i} className="py-1 pr-3">
                    <input type="number" value={r.cogs} onChange={(e) => set(i, { cogs: e.target.value })} className="font-numeric !w-24" />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Opex</td>
                {rows.map((r, i) => (
                  <td key={i} className="py-1 pr-3">
                    <input type="number" value={r.opex} onChange={(e) => set(i, { opex: e.target.value })} className="font-numeric !w-24" />
                  </td>
                ))}
              </tr>
              <tr className="border-t border-paper-line">
                <td className="py-2 pr-3 font-medium text-forest">Net profit</td>
                {computed.map((c, i) => (
                  <td key={i} className={`font-numeric py-2 pr-3 ${c.net < 0 ? "text-vermillion" : "text-forest"}`}>
                    {c.net >= 0 ? "+" : ""}{c.net.toLocaleString("en-IN")}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium">Cumulative cash</td>
                {computed.map((c, i) => (
                  <td key={i} className={`font-numeric py-2 pr-3 font-medium ${c.cumulative < 0 ? "text-vermillion" : ""}`}>
                    {c.cumulative.toLocaleString("en-IN")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Verdict label="six-month outlook">
        {firstNegativeMonth >= 0 ? (
          <p className="text-sm leading-relaxed">
            <span className="font-medium text-vermillion">Cash goes negative in Month {firstNegativeMonth + 1}.</span>{" "}
            At the current trajectory, you run out of cash before this window ends — cut costs, raise revenue, or raise capital before you get there, not after.
          </p>
        ) : (
          <p className="text-sm leading-relaxed">
            Cash stays positive through all six months, ending at{" "}
            <span className="font-numeric font-medium text-forest">{inr(lastMonth.cumulative)}</span>. Keep tracking actuals against this plan monthly — the value is in catching drift early, not in the forecast being perfectly right.
          </p>
        )}
        <SaveToPlan
          meta={meta}
          summary={
            firstNegativeMonth >= 0
              ? `Cash flow simulation: goes negative in Month ${firstNegativeMonth + 1} starting from ${inr(+startingCash)}.`
              : `Cash flow simulation: stays positive across 6 months, ending at ${inr(lastMonth.cumulative)}.`
          }
          actions={
            firstNegativeMonth >= 0
              ? [`Fix the cash gap before Month ${firstNegativeMonth + 1} — cut a specific cost or bring forward a specific revenue source`, "Revisit this simulation monthly with actual numbers, not projections"]
              : ["Revisit this simulation monthly with actual numbers to catch drift from the plan early"]
          }
          disabled={computed.every((c) => c.rev === 0 && c.cogs === 0 && c.opex === 0)}
        />
      </Verdict>
    </ToolShell>
  );
}
