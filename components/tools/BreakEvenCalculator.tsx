"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, Num, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("break-even-calculator")!;

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState("150000");
  const [price, setPrice] = useState("500");
  const [variableCost, setVariableCost] = useState("200");

  const fc = +fixedCosts || 0, p = +price || 0, vc = +variableCost || 0;
  const contribution = p - vc;
  const breakEvenUnits = contribution > 0 ? fc / contribution : 0;
  const breakEvenRevenue = breakEvenUnits * p;
  const contributionMargin = p > 0 ? (contribution / p) * 100 : 0;

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">three numbers</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Fixed costs per month" prefix="₹" value={fixedCosts} onChange={setFixedCosts} hint="Rent, salaries — costs that don't change with sales" />
          <Num label="Price per unit" prefix="₹" value={price} onChange={setPrice} />
          <Num label="Variable cost per unit" prefix="₹" value={variableCost} onChange={setVariableCost} hint="Materials, packaging, commission — per unit" />
        </div>
      </section>

      <Verdict label="where the floor is">
        {contribution <= 0 ? (
          <p className="text-sm text-vermillion">
            Your variable cost is equal to or higher than your price — every unit sold loses money before fixed costs are even considered. No break-even point exists until this changes.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
              <div>
                <p className="text-sm text-ink-soft">Break-even units</p>
                <p className="font-numeric text-3xl font-medium">{Math.ceil(breakEvenUnits).toLocaleString("en-IN")}</p>
              </div>
              <div>
                <p className="text-sm text-ink-soft">Break-even revenue</p>
                <p className="font-numeric text-3xl font-medium">{inr(breakEvenRevenue)}</p>
              </div>
              <div>
                <p className="text-sm text-ink-soft">Contribution margin</p>
                <p className="font-numeric text-3xl font-medium text-forest">{contributionMargin.toFixed(0)}%</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed">
              Every unit past {Math.ceil(breakEvenUnits).toLocaleString("en-IN")} is where actual profit starts. Below that, you're still paying off fixed costs — a low contribution margin means you need a lot more volume to get there.
            </p>
            <SaveToPlan
              meta={meta}
              summary={`Break-even at ${Math.ceil(breakEvenUnits).toLocaleString("en-IN")} units (${inr(breakEvenRevenue)} revenue), ${contributionMargin.toFixed(0)}% contribution margin.`}
              actions={[
                contributionMargin < 30 ? "Contribution margin is thin — look at raising price or cutting variable cost before chasing volume" : "Margin is healthy — focus on hitting the unit volume consistently",
                "Recalculate whenever price or a major cost changes",
              ]}
            />
          </>
        )}
      </Verdict>
    </ToolShell>
  );
}
