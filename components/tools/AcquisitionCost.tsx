"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("acquisition-cost")!;

type Channel = { name: string; spend: string; customers: string };

export function AcquisitionCost() {
  const [channels, setChannels] = useState<Channel[]>([
    { name: "Instagram / Meta ads", spend: "20000", customers: "40" },
    { name: "Word of mouth / referrals", spend: "5000", customers: "25" },
    { name: "", spend: "", customers: "" },
  ]);

  const set = (i: number, patch: Partial<Channel>) =>
    setChannels(channels.map((c, j) => (j === i ? { ...c, ...patch } : c)));

  const rows = channels
    .filter((c) => c.name.trim() && +c.spend > 0 && +c.customers > 0)
    .map((c) => ({ ...c, coca: +c.spend / +c.customers }))
    .sort((a, b) => a.coca - b.coca);

  const totalSpend = rows.reduce((a, c) => a + +c.spend, 0);
  const totalCust = rows.reduce((a, c) => a + +c.customers, 0);
  const blended = totalCust > 0 ? totalSpend / totalCust : 0;

  const best = rows[0];
  const worst = rows[rows.length - 1];

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-1">step 1 · last month, channel by channel</p>
        <p className="mb-4 text-sm text-ink-soft">
          Count everything the channel really cost — ad spend, agency fees,
          commissions, even the salary time it consumed.
        </p>
        <div className="space-y-3">
          <div className="hidden grid-cols-[2fr_1fr_1fr] gap-3 sm:grid">
            <span className="rule-label">channel</span>
            <span className="rule-label">total spend ₹</span>
            <span className="rule-label">new customers</span>
          </div>
          {channels.map((c, i) => (
            <div key={i} className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_1fr_1fr]">
              <input type="text" placeholder="e.g. Google ads, exhibitions…" value={c.name} onChange={(e) => set(i, { name: e.target.value })} />
              <input type="number" placeholder="spend" value={c.spend} onChange={(e) => set(i, { spend: e.target.value })} className="font-numeric" />
              <input type="number" placeholder="customers" value={c.customers} onChange={(e) => set(i, { customers: e.target.value })} className="font-numeric" />
            </div>
          ))}
        </div>
        <button
          onClick={() => setChannels([...channels, { name: "", spend: "", customers: "" }])}
          className="btn-outline mt-4 px-3 py-1.5 text-sm"
        >
          + Add channel
        </button>
      </section>

      {rows.length > 0 && (
        <Verdict label="cost per customer, ranked">
          <div className="space-y-3">
            {rows.map((r) => {
              const max = rows[rows.length - 1].coca;
              const w = Math.max((r.coca / max) * 100, 6);
              return (
                <div key={r.name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{r.name}</span>
                    <span className="font-numeric">{inr(r.coca)} / customer</span>
                  </div>
                  <div className="mt-1 h-4 w-full bg-paper-deep">
                    <div
                      className="h-4"
                      style={{ width: `${w}%`, background: r === rows[0] ? "var(--color-forest)" : r === rows[rows.length - 1] && rows.length > 1 ? "var(--color-vermillion)" : "var(--color-ink-faint)" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-5 border-t border-paper-line pt-4 text-sm">
            Blended acquisition cost:{" "}
            <span className="font-numeric text-lg font-medium">{inr(blended)}</span>{" "}
            across {totalCust} customers. Rule of thumb: a customer&apos;s
            lifetime value should be at least 3× this number — check it with
            the customer lifetime value tool.
          </p>
          <SaveToPlan
            meta={meta}
            summary={`Blended acquisition cost ${inr(blended)}. Cheapest channel: ${best?.name} at ${inr(best?.coca ?? 0)}; costliest: ${worst?.name} at ${inr(worst?.coca ?? 0)}.`}
            actions={[
              `Shift more budget into "${best?.name}" — currently your cheapest source of customers`,
              rows.length > 1 ? `Fix or pause "${worst?.name}" — it costs ${(worst!.coca / best!.coca).toFixed(1)}× more per customer` : "Add a second channel so you're not dependent on one source",
              "Recalculate monthly — acquisition costs drift as channels saturate",
            ]}
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
