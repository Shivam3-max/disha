"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan, Num, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("cash-runway")!;

export function CashRunway() {
  const [cash, setCash] = useState("500000");
  const [receivable, setReceivable] = useState("150000");
  const [inflow, setInflow] = useState("200000");
  const [fixed, setFixed] = useState("120000");
  const [variable, setVariable] = useState("90000");
  const [payable, setPayable] = useState("80000");

  const bank = +cash || 0, rec = +receivable || 0, inM = +inflow || 0;
  const fx = +fixed || 0, vr = +variable || 0, pay = +payable || 0;

  const monthlyNet = inM - fx - vr;
  const available = bank + rec * 0.7 - pay;
  const runway = monthlyNet >= 0 ? Infinity : available / -monthlyNet;

  const status =
    monthlyNet >= 0
      ? { label: "Cash positive", color: "text-forest", note: "You add cash every month. The question becomes where to invest the surplus — debt reduction, stock that turns fast, or growth experiments." }
      : runway >= 6
        ? { label: `${runway.toFixed(1)} months of runway`, color: "text-gold", note: "Breathing room, but a slow leak. Set a date by which monthly cash flow must turn positive, and track it weekly." }
        : { label: `${runway.toFixed(1)} months of runway`, color: "text-vermillion", note: "Danger zone. Collect receivables aggressively, renegotiate payment terms, cut the two biggest costs, and pause all non-essential spending this week." };

  return (
    <ToolShell meta={meta}>
      <div className="grid gap-6 sm:grid-cols-2">
        <section className="ledger-card-flat p-6">
          <p className="rule-label mb-4">money in</p>
          <div className="space-y-4">
            <Num label="Cash in bank today" prefix="₹" value={cash} onChange={setCash} />
            <Num label="Receivables (owed to you)" prefix="₹" value={receivable} onChange={setReceivable} hint="We count only 70% — some always comes late" />
            <Num label="Reliable monthly inflow" prefix="₹" value={inflow} onChange={setInflow} />
          </div>
        </section>
        <section className="ledger-card-flat p-6">
          <p className="rule-label mb-4">money out</p>
          <div className="space-y-4">
            <Num label="Fixed monthly costs" prefix="₹" value={fixed} onChange={setFixed} hint="Rent, salaries, EMIs — what you pay even with zero sales" />
            <Num label="Variable monthly costs" prefix="₹" value={variable} onChange={setVariable} hint="Stock, materials, commissions" />
            <Num label="Payables (you owe)" prefix="₹" value={payable} onChange={setPayable} />
          </div>
        </section>
      </div>

      <Verdict label="the survival math">
        <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
          <div>
            <p className="text-sm text-ink-soft">Usable cash position</p>
            <p className="font-numeric text-3xl font-medium">{inr(available)}</p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Monthly net cash flow</p>
            <p className={`font-numeric text-3xl font-medium ${monthlyNet >= 0 ? "text-forest" : "text-vermillion"}`}>
              {monthlyNet >= 0 ? "+" : "−"}{inr(Math.abs(monthlyNet))}
            </p>
          </div>
          <div>
            <p className="text-sm text-ink-soft">Verdict</p>
            <p className={`font-display text-3xl font-semibold ${status.color}`}>{status.label}</p>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">{status.note}</p>
        <SaveToPlan
          meta={meta}
          summary={`Usable cash ${inr(available)}, monthly net ${monthlyNet >= 0 ? "+" : "−"}${inr(Math.abs(monthlyNet))}. ${monthlyNet >= 0 ? "Cash positive." : `Runway ≈ ${runway.toFixed(1)} months.`}`}
          actions={
            monthlyNet >= 0
              ? ["Decide a rule for the monthly surplus: % to buffer, % to growth", "Keep at least 3 months of fixed costs as untouchable buffer", "Review this sheet on the 1st of every month"]
              : [`Collect the ${inr(rec)} owed to you — call your five biggest debtors this week`, "List your three largest costs and cut or renegotiate one of them", "Set a hard date for reaching cash-flow positive and review weekly"]
          }
        />
      </Verdict>
    </ToolShell>
  );
}
