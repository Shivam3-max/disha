"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, Num, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("customer-lifetime")!;

export function CustomerLifetime() {
  const [ticket, setTicket] = useState("1500");
  const [freq, setFreq] = useState("6");
  const [years, setYears] = useState("3");
  const [margin, setMargin] = useState("30");
  const [coca, setCoca] = useState("500");

  const t = +ticket || 0, f = +freq || 0, y = +years || 0;
  const m = (+margin || 0) / 100, ac = +coca || 0;

  const revenue = t * f * y;
  const profit = revenue * m;
  const ratio = ac > 0 ? profit / ac : 0;
  const maxSpend = profit / 3;

  const verdictText =
    ac === 0
      ? "Enter your acquisition cost to get a verdict."
      : ratio >= 3
        ? "Healthy. Each customer pays back their acquisition cost at least three times over — you can afford to grow faster."
        : ratio >= 1
          ? "Thin. You make money on each customer, but not enough cushion. Either raise lifetime value or cut acquisition cost."
          : "Losing money. Each new customer costs more than they'll ever return. Stop scaling and fix the economics first.";

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">the five numbers that define a customer</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Average bill per purchase" prefix="₹" value={ticket} onChange={setTicket} />
          <Num label="Purchases per year" value={freq} onChange={setFreq} />
          <Num label="Years a customer stays with you" value={years} onChange={setYears} hint="Be honest — check your oldest repeat customers" />
          <Num label="Profit margin %" value={margin} onChange={setMargin} hint="Gross margin after direct costs" />
          <Num label="Cost to acquire one customer" prefix="₹" value={coca} onChange={setCoca} hint="From the acquisition cost auditor, or estimate" />
        </div>
      </section>

      <Verdict label="what one customer is worth">
        <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <div>
            <p className="text-sm text-ink-soft">Lifetime revenue</p>
            <p className="font-numeric text-3xl font-medium">{inr(revenue)}</p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Lifetime profit</p>
            <p className="font-numeric text-3xl font-medium text-forest">{inr(profit)}</p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Profit ÷ acquisition cost</p>
            <p className={`font-numeric text-3xl font-medium ${ratio >= 3 ? "text-forest" : ratio >= 1 ? "text-gold" : "text-vermillion"}`}>
              {ratio.toFixed(1)}×
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">{verdictText}</p>
        <p className="mt-2 text-sm text-ink-soft">
          Safe maximum to spend acquiring one customer:{" "}
          <span className="font-numeric font-medium">{inr(maxSpend)}</span>
        </p>
        <SaveToPlan
          meta={meta}
          summary={`One customer is worth ${inr(revenue)} in revenue and ${inr(profit)} in profit over ${y} years. Profit-to-acquisition ratio: ${ratio.toFixed(1)}× (target ≥ 3×).`}
          actions={[
            ratio < 3 ? "Raise lifetime value first: increase repeat purchases before chasing new customers" : `You can spend up to ${inr(maxSpend)} per customer — scale your best channel`,
            "Identify your top 20 customers by lifetime value and design a retention perk for them",
            "Recheck these numbers quarterly",
          ]}
          disabled={revenue === 0}
        />
      </Verdict>
    </ToolShell>
  );
}
