"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, Num, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("revenue-multiplier")!;

const LEVERS = [
  { key: "customers", label: "More customers", how: "referral schemes, new channels, reactivating old leads" },
  { key: "ticket", label: "Bigger average bill", how: "bundles, add-ons, premium variants at checkout" },
  { key: "frequency", label: "More frequent purchases", how: "reminders, subscriptions, loyalty points, occasion marketing" },
  { key: "price", label: "Higher price", how: "reposition value, price laggards up, retire discounts" },
] as const;

export function RevenueMultiplier() {
  const [customers, setCustomers] = useState("500");
  const [ticket, setTicket] = useState("1200");
  const [frequency, setFrequency] = useState("4");
  const [lift, setLift] = useState<Record<string, number>>({
    customers: 10, ticket: 10, frequency: 10, price: 5,
  });

  const c = +customers || 0, t = +ticket || 0, f = +frequency || 0;
  const current = c * t * f;
  const projected =
    c * (1 + lift.customers / 100) *
    t * (1 + lift.ticket / 100) * (1 + lift.price / 100) *
    f * (1 + lift.frequency / 100);
  const growth = current > 0 ? ((projected - current) / current) * 100 : 0;

  const summary = `Current annual revenue ${inr(current)}. With lifts of ${LEVERS.map((l) => `${lift[l.key]}% ${l.label.toLowerCase()}`).join(", ")}, projected revenue is ${inr(projected)} — ${growth.toFixed(0)}% growth.`;
  const actions = LEVERS.filter((l) => lift[l.key] > 0).map(
    (l) => `Lift "${l.label.toLowerCase()}" by ${lift[l.key]}% — e.g. ${l.how}`,
  );

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">step 1 · your business today (yearly)</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Active customers" value={customers} onChange={setCustomers} />
          <Num label="Average bill size" prefix="₹" value={ticket} onChange={setTicket} />
          <Num label="Purchases per customer / year" value={frequency} onChange={setFrequency} />
        </div>
        <p className="mt-4 border-t border-paper-line pt-3 text-sm">
          Current annual revenue:{" "}
          <span className="font-numeric text-lg font-medium">{inr(current)}</span>
        </p>
      </section>

      <section className="ledger-card-flat mt-6 p-6">
        <p className="rule-label mb-1">step 2 · nudge the four levers</p>
        <p className="mb-5 text-sm text-ink-soft">
          Small improvements multiply. A 10% lift on every lever is not 40%
          growth — it compounds to much more.
        </p>
        <div className="space-y-6">
          {LEVERS.map((l) => (
            <div key={l.key}>
              <div className="flex items-baseline justify-between">
                <span className="font-medium">{l.label}</span>
                <span className="font-numeric text-vermillion">+{lift[l.key]}%</span>
              </div>
              <input
                type="range" min={0} max={50} step={1}
                value={lift[l.key]}
                onChange={(e) => setLift({ ...lift, [l.key]: +e.target.value })}
                className="mt-2 w-full"
              />
              <p className="mt-1 text-xs text-ink-faint">How: {l.how}</p>
            </div>
          ))}
        </div>
      </section>

      <Verdict label="the compound effect">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <div>
            <p className="text-sm text-ink-soft">Projected revenue</p>
            <p className="font-numeric text-3xl font-medium">{inr(projected)}</p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Growth</p>
            <p className="font-numeric text-3xl font-medium text-vermillion">
              +{growth.toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Extra revenue</p>
            <p className="font-numeric text-3xl font-medium text-forest">
              {inr(projected - current)}
            </p>
          </div>
        </div>
        <SaveToPlan meta={meta} summary={summary} actions={actions} disabled={current === 0} />
      </Verdict>
    </ToolShell>
  );
}
