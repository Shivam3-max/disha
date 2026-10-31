"use client";

import { useState } from "react";
import { ToolShell, Verdict, Num, inr } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";
import {
  amortisationByYear,
  cagr,
  compound,
  emi,
  gst,
  incomeTax,
  salaryBreakdown,
  sip,
  STANDARD_DEDUCTION,
  type AgeGroup,
} from "@/lib/calc";

// ---------- shared bits ----------

function Choice<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`px-3 py-1.5 text-sm ${value === o.value ? "btn-ink" : "btn-outline"}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, checked, onChange, hint }: { label: string; checked: boolean; onChange: (v: boolean) => void; hint?: string }) {
  return (
    <label className="flex items-start gap-3">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-vermillion)]" />
      <span>
        <span className="block text-sm font-medium">{label}</span>
        {hint && <span className="block text-xs text-ink-faint">{hint}</span>}
      </span>
    </label>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "good" | "bad" }) {
  return (
    <div>
      <p className="text-sm text-ink-soft">{label}</p>
      <p className={`font-numeric text-2xl font-medium md:text-3xl ${tone === "good" ? "text-forest" : tone === "bad" ? "text-vermillion" : ""}`}>
        {value}
      </p>
    </div>
  );
}

const pct = (n: number, d = 1) => `${Number.isFinite(n) ? n.toFixed(d) : "0"}%`;
const n = (s: string) => +s || 0;

function Inputs({ children, cols = 3 }: { children: React.ReactNode; cols?: 2 | 3 }) {
  return (
    <section className="ledger-card-flat p-6">
      <div className={`grid gap-5 ${cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>{children}</div>
    </section>
  );
}

// ---------- GST ----------

export function GstCalculator() {
  const meta = getTool("gst-calculator")!;
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [supply, setSupply] = useState<"intra" | "inter">("intra");
  const r = gst(n(amount), n(rate), mode);
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat space-y-5 p-6">
        <Choice label="What do you want to do?" value={mode} onChange={setMode} options={[{ value: "add", label: "Add GST to a price" }, { value: "remove", label: "Remove GST from a total" }]} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label={mode === "add" ? "Price before GST" : "Price including GST"} prefix="₹" value={amount} onChange={setAmount} />
          <Num label="GST rate %" value={rate} onChange={setRate} hint="Main rates since 22 Sep 2025: 5%, 18%, and 40% for luxury/sin goods" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["0", "5", "18", "40", "3"].map((x) => (
            <button key={x} type="button" onClick={() => setRate(x)} className={`px-3 py-1 text-sm ${rate === x ? "btn-ink" : "btn-outline"}`}>
              {x}%
            </button>
          ))}
        </div>
        <Choice label="Type of supply" value={supply} onChange={setSupply} options={[{ value: "intra", label: "Within the state (CGST + SGST)" }, { value: "inter", label: "Between states (IGST)" }]} />
      </section>
      <Verdict label="the breakdown">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Price before GST" value={inr(r.base)} />
          <Stat label="GST amount" value={inr(r.tax)} />
          <Stat label="Total price" value={inr(r.total)} tone="good" />
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          {supply === "intra"
            ? `Split as CGST ${inr(r.tax / 2)} (${pct(n(rate) / 2)}) + SGST ${inr(r.tax / 2)} (${pct(n(rate) / 2)}).`
            : `Charged as IGST ${inr(r.tax)} (${pct(n(rate))}).`}
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- EMI ----------

export function EmiCalculator() {
  const meta = getTool("emi-calculator")!;
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("9");
  const [years, setYears] = useState("5");
  const months = Math.round(n(years) * 12);
  const r = emi(n(principal), n(rate), months);
  const rows = months > 0 && months <= 600 ? amortisationByYear(n(principal), n(rate), months) : [];
  return (
    <ToolShell meta={meta}>
      <Inputs>
        <Num label="Loan amount" prefix="₹" value={principal} onChange={setPrincipal} />
        <Num label="Interest rate % per year" value={rate} onChange={setRate} />
        <Num label="Tenure in years" value={years} onChange={setYears} />
      </Inputs>
      <Verdict label="your repayment">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Monthly EMI" value={inr(r.emi)} tone="good" />
          <Stat label="Total interest" value={inr(r.totalInterest)} tone="bad" />
          <Stat label="Total amount paid" value={inr(r.totalPaid)} />
        </div>
        {rows.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-ink text-left">
                  <th className="rule-label py-2 font-normal">Year</th>
                  <th className="rule-label py-2 font-normal">Principal paid</th>
                  <th className="rule-label py-2 font-normal">Interest paid</th>
                  <th className="rule-label py-2 font-normal">Balance</th>
                </tr>
              </thead>
              <tbody className="font-numeric">
                {rows.map((row) => (
                  <tr key={row.year} className="border-b border-paper-line">
                    <td className="py-1.5">{row.year}</td>
                    <td>{inr(row.principal)}</td>
                    <td>{inr(row.interest)}</td>
                    <td>{inr(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Verdict>
    </ToolShell>
  );
}

// ---------- SIP ----------

export function SipCalculator() {
  const meta = getTool("sip-calculator")!;
  const [monthly, setMonthly] = useState("10000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("10");
  const r = sip(n(monthly), n(rate), n(years));
  return (
    <ToolShell meta={meta}>
      <Inputs>
        <Num label="Monthly investment" prefix="₹" value={monthly} onChange={setMonthly} />
        <Num label="Expected return % per year" value={rate} onChange={setRate} hint="Returns are not guaranteed" />
        <Num label="Years" value={years} onChange={setYears} />
      </Inputs>
      <Verdict label="estimated value">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Total invested" value={inr(r.invested)} />
          <Stat label="Estimated gains" value={inr(r.gains)} tone="good" />
          <Stat label="Estimated value" value={inr(r.value)} tone="good" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          Illustration only. Market-linked returns vary year to year and can be negative. This is not investment advice.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- CAGR ----------

export function CagrCalculator() {
  const meta = getTool("cagr-calculator")!;
  const [start, setStart] = useState("1000000");
  const [end, setEnd] = useState("2500000");
  const [years, setYears] = useState("5");
  const g = cagr(n(start), n(end), n(years));
  const absolute = n(start) > 0 ? ((n(end) - n(start)) / n(start)) * 100 : 0;
  return (
    <ToolShell meta={meta}>
      <Inputs>
        <Num label="Starting value" prefix="₹" value={start} onChange={setStart} hint="Revenue, investment or any value" />
        <Num label="Ending value" prefix="₹" value={end} onChange={setEnd} />
        <Num label="Number of years" value={years} onChange={setYears} />
      </Inputs>
      <Verdict label="growth rate">
        <div className="grid gap-5 sm:grid-cols-2">
          <Stat label="CAGR" value={pct(g, 2)} tone={g >= 0 ? "good" : "bad"} />
          <Stat label="Total (absolute) growth" value={pct(absolute)} />
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          Growing at a steady {pct(g, 2)} a year turns {inr(n(start))} into {inr(n(end))} in {n(years)} years.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Compound interest ----------

export function CompoundInterestCalculator() {
  const meta = getTool("compound-interest-calculator")!;
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("5");
  const [freq, setFreq] = useState<"1" | "2" | "4" | "12">("4");
  const r = compound(n(principal), n(rate), n(years), +freq);
  const simple = n(principal) * (n(rate) / 100) * n(years);
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat space-y-5 p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Principal" prefix="₹" value={principal} onChange={setPrincipal} />
          <Num label="Interest rate % per year" value={rate} onChange={setRate} />
          <Num label="Years" value={years} onChange={setYears} />
        </div>
        <Choice label="Compounding" value={freq} onChange={setFreq} options={[{ value: "1", label: "Yearly" }, { value: "2", label: "Half-yearly" }, { value: "4", label: "Quarterly" }, { value: "12", label: "Monthly" }]} />
      </section>
      <Verdict label="your money grows to">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Final amount" value={inr(r.amount)} tone="good" />
          <Stat label="Compound interest" value={inr(r.interest)} />
          <Stat label="Simple interest would be" value={inr(simple)} />
        </div>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Profit margin ----------

export function ProfitMarginCalculator() {
  const meta = getTool("profit-margin-calculator")!;
  const [cost, setCost] = useState("600");
  const [price, setPrice] = useState("1000");
  const profit = n(price) - n(cost);
  const margin = n(price) > 0 ? (profit / n(price)) * 100 : 0;
  const markup = n(cost) > 0 ? (profit / n(cost)) * 100 : 0;
  return (
    <ToolShell meta={meta}>
      <Inputs cols={2}>
        <Num label="Cost per unit" prefix="₹" value={cost} onChange={setCost} hint="Purchase or production cost" />
        <Num label="Selling price per unit" prefix="₹" value={price} onChange={setPrice} hint="Before GST" />
      </Inputs>
      <Verdict label="your numbers">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Profit per unit" value={inr(profit)} tone={profit >= 0 ? "good" : "bad"} />
          <Stat label="Profit margin" value={pct(margin)} tone={margin >= 0 ? "good" : "bad"} />
          <Stat label="Markup on cost" value={pct(markup)} />
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          Margin is profit as a share of the selling price; markup is profit as a share of cost. The same sale is a {pct(margin, 0)} margin but a {pct(markup, 0)} markup.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Markup ----------

export function MarkupCalculator() {
  const meta = getTool("markup-calculator")!;
  const [cost, setCost] = useState("500");
  const [target, setTarget] = useState("40");
  const [mode, setMode] = useState<"markup" | "margin">("markup");
  const t = n(target);
  const price = mode === "markup" ? n(cost) * (1 + t / 100) : t < 100 ? n(cost) / (1 - t / 100) : 0;
  const profit = price - n(cost);
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat space-y-5 p-6">
        <Choice label="Set price by" value={mode} onChange={setMode} options={[{ value: "markup", label: "Markup on cost %" }, { value: "margin", label: "Target margin %" }]} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Cost per unit" prefix="₹" value={cost} onChange={setCost} />
          <Num label={mode === "markup" ? "Markup %" : "Target margin %"} value={target} onChange={setTarget} />
        </div>
      </section>
      <Verdict label="your selling price">
        {mode === "margin" && t >= 100 ? (
          <p className="text-sm text-vermillion">A margin must be below 100% — at 100% the cost would have to be zero.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-3">
            <Stat label="Selling price" value={inr(price)} tone="good" />
            <Stat label="Profit per unit" value={inr(profit)} />
            <Stat label={mode === "markup" ? "Equivalent margin" : "Equivalent markup"} value={pct(mode === "markup" ? (price > 0 ? (profit / price) * 100 : 0) : (n(cost) > 0 ? (profit / n(cost)) * 100 : 0))} />
          </div>
        )}
      </Verdict>
    </ToolShell>
  );
}

// ---------- Discount ----------

export function DiscountCalculator() {
  const meta = getTool("discount-calculator")!;
  const [price, setPrice] = useState("2000");
  const [d1, setD1] = useState("50");
  const [d2, setD2] = useState("20");
  const [gstRate, setGstRate] = useState("0");
  const after1 = n(price) * (1 - n(d1) / 100);
  const after2 = after1 * (1 - n(d2) / 100);
  const effective = n(price) > 0 ? (1 - after2 / n(price)) * 100 : 0;
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Original price" prefix="₹" value={price} onChange={setPrice} />
          <Num label="GST to add after discount %" value={gstRate} onChange={setGstRate} hint="Leave 0 if the price already includes GST" />
          <Num label="Discount %" value={d1} onChange={setD1} />
          <Num label="Extra discount % (optional)" value={d2} onChange={setD2} hint="Applied on the already-discounted price" />
        </div>
      </section>
      <Verdict label="what you pay">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Final price" value={inr(after2 * (1 + n(gstRate) / 100))} tone="good" />
          <Stat label="You save" value={inr(n(price) - after2)} />
          <Stat label="Effective discount" value={pct(effective)} />
        </div>
        {n(d2) > 0 && (
          <p className="mt-4 text-sm leading-relaxed">
            {n(d1)}% + {n(d2)}% is not {n(d1) + n(d2)}% off — the second discount applies to the reduced price, so the real discount is {pct(effective)}.
          </p>
        )}
      </Verdict>
    </ToolShell>
  );
}

// ---------- ROI ----------

export function RoiCalculator() {
  const meta = getTool("roi-calculator")!;
  const [invested, setInvested] = useState("500000");
  const [returned, setReturned] = useState("750000");
  const [years, setYears] = useState("3");
  const gain = n(returned) - n(invested);
  const roi = n(invested) > 0 ? (gain / n(invested)) * 100 : 0;
  const annual = cagr(n(invested), n(returned), n(years));
  return (
    <ToolShell meta={meta}>
      <Inputs>
        <Num label="Amount invested" prefix="₹" value={invested} onChange={setInvested} />
        <Num label="Amount returned (or current value)" prefix="₹" value={returned} onChange={setReturned} />
        <Num label="Holding period in years" value={years} onChange={setYears} />
      </Inputs>
      <Verdict label="your return">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Net gain" value={inr(gain)} tone={gain >= 0 ? "good" : "bad"} />
          <Stat label="Total ROI" value={pct(roi)} tone={roi >= 0 ? "good" : "bad"} />
          <Stat label="Annualised ROI" value={pct(annual, 2)} />
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          Use the annualised figure to compare investments held for different lengths of time.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Working capital ----------

export function WorkingCapitalCalculator() {
  const meta = getTool("working-capital-calculator")!;
  const [cash, setCash] = useState("300000");
  const [receivables, setReceivables] = useState("800000");
  const [inventory, setInventory] = useState("600000");
  const [payables, setPayables] = useState("500000");
  const [otherLiab, setOtherLiab] = useState("200000");
  const [sales, setSales] = useState("6000000");
  const [cogs, setCogs] = useState("4200000");
  const ca = n(cash) + n(receivables) + n(inventory);
  const cl = n(payables) + n(otherLiab);
  const wc = ca - cl;
  const current = cl > 0 ? ca / cl : 0;
  const quick = cl > 0 ? (ca - n(inventory)) / cl : 0;
  const dso = n(sales) > 0 ? (n(receivables) / n(sales)) * 365 : 0;
  const dio = n(cogs) > 0 ? (n(inventory) / n(cogs)) * 365 : 0;
  const dpo = n(cogs) > 0 ? (n(payables) / n(cogs)) * 365 : 0;
  const ccc = dso + dio - dpo;
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">current assets</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Cash and bank" prefix="₹" value={cash} onChange={setCash} />
          <Num label="Receivables (debtors)" prefix="₹" value={receivables} onChange={setReceivables} />
          <Num label="Inventory" prefix="₹" value={inventory} onChange={setInventory} />
        </div>
        <p className="rule-label mb-4 mt-6">current liabilities</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Payables (creditors)" prefix="₹" value={payables} onChange={setPayables} />
          <Num label="Other short-term liabilities" prefix="₹" value={otherLiab} onChange={setOtherLiab} hint="Short-term loans, taxes and salaries due" />
        </div>
        <p className="rule-label mb-4 mt-6">annual figures (for the cash cycle)</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Annual sales" prefix="₹" value={sales} onChange={setSales} />
          <Num label="Annual cost of goods sold" prefix="₹" value={cogs} onChange={setCogs} />
        </div>
      </section>
      <Verdict label="your working capital">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="Working capital" value={inr(wc)} tone={wc >= 0 ? "good" : "bad"} />
          <Stat label="Current ratio" value={current.toFixed(2)} tone={current >= 1.2 ? "good" : current < 1 ? "bad" : undefined} />
          <Stat label="Quick ratio" value={quick.toFixed(2)} />
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-4">
          <Stat label="Debtor days" value={dso.toFixed(0)} />
          <Stat label="Inventory days" value={dio.toFixed(0)} />
          <Stat label="Creditor days" value={dpo.toFixed(0)} />
          <Stat label="Cash cycle (days)" value={ccc.toFixed(0)} tone={ccc > 90 ? "bad" : undefined} />
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          Your cash is tied up for about {ccc.toFixed(0)} days between paying suppliers and collecting from customers. Shorter is better — collect faster, hold less stock, or negotiate longer supplier terms.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Salary (CTC to in-hand) ----------

export function SalaryCalculator() {
  const meta = getTool("salary-calculator")!;
  const [ctc, setCtc] = useState("1200000");
  const [basicPct, setBasicPct] = useState("50");
  const [pt, setPt] = useState("2400");
  const [regime, setRegime] = useState<"new" | "old">("new");
  const [pfFull, setPfFull] = useState(true);
  const [pfInCtc, setPfInCtc] = useState(true);
  const [gratuityInCtc, setGratuityInCtc] = useState(true);
  const [extra80C, setExtra80C] = useState("0");
  const [hra, setHra] = useState("0");
  const [other, setOther] = useState("0");
  const s = salaryBreakdown({
    ctc: n(ctc), basicPct: n(basicPct), pfOnFullBasic: pfFull, employerPfInCtc: pfInCtc, gratuityInCtc,
    professionalTax: n(pt), regime, extra80C: n(extra80C), hraExemption: n(hra), otherDeductions: n(other),
  });
  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat space-y-5 p-6">
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Annual CTC" prefix="₹" value={ctc} onChange={setCtc} />
          <Num label="Basic salary % of CTC" value={basicPct} onChange={setBasicPct} hint="Often 40–50%; check your offer letter" />
          <Num label="Professional tax per year" prefix="₹" value={pt} onChange={setPt} hint="Varies by state; up to ₹2,500" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Toggle label="Employer PF is part of CTC" checked={pfInCtc} onChange={setPfInCtc} />
          <Toggle label="PF on full basic" checked={pfFull} onChange={setPfFull} hint="Off = capped at ₹15,000 basic/month" />
          <Toggle label="Gratuity is part of CTC" checked={gratuityInCtc} onChange={setGratuityInCtc} hint="4.81% of basic" />
        </div>
        <Choice label="Tax regime" value={regime} onChange={setRegime} options={[{ value: "new", label: "New regime (default)" }, { value: "old", label: "Old regime" }]} />
        {regime === "old" && (
          <div className="grid gap-5 sm:grid-cols-3">
            <Num label="Other 80C investments" prefix="₹" value={extra80C} onChange={setExtra80C} hint="Your PF counts too; total capped at ₹1.5 lakh" />
            <Num label="HRA exemption" prefix="₹" value={hra} onChange={setHra} hint="Exempt portion of HRA, if you pay rent" />
            <Num label="Other deductions" prefix="₹" value={other} onChange={setOther} hint="80D, home loan interest, NPS etc." />
          </div>
        )}
      </section>
      <Verdict label="your take-home pay">
        <div className="grid gap-5 sm:grid-cols-3">
          <Stat label="In-hand per month" value={inr(s.inHandMonth)} tone="good" />
          <Stat label="In-hand per year" value={inr(s.inHandYear)} />
          <Stat label="Income tax per year" value={inr(s.tax.total)} tone={s.tax.total > 0 ? "bad" : undefined} />
        </div>
        <dl className="mt-6 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          {[
            ["Basic salary", s.basic],
            ["Employer PF (in CTC)", s.employerPf],
            ["Gratuity (in CTC)", s.gratuity],
            ["Gross salary", s.gross],
            ["Employee PF deducted", s.employeePf],
            ["Professional tax", n(pt)],
            [`Taxable income (after ₹${STANDARD_DEDUCTION[regime].toLocaleString("en-IN")} standard deduction)`, s.taxable],
          ].map(([label, value]) => (
            <div key={label as string} className="flex justify-between gap-4 border-b border-paper-line py-1">
              <dt className="text-ink-soft">{label}</dt>
              <dd className="font-numeric">{inr(value as number)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          Estimate for FY 2025-26 / FY 2026-27 rates. Actual salary structures, allowances and employer policies vary — check with your HR or a tax professional.
        </p>
      </Verdict>
    </ToolShell>
  );
}

// ---------- Income tax: old vs new ----------

export function IncomeTaxCalculator() {
  const meta = getTool("income-tax-calculator")!;
  const [income, setIncome] = useState("1500000");
  const [salaried, setSalaried] = useState(true);
  const [age, setAge] = useState<AgeGroup>("below60");
  const [d80c, setD80c] = useState("150000");
  const [d80d, setD80d] = useState("25000");
  const [hra, setHra] = useState("0");
  const [homeLoan, setHomeLoan] = useState("0");
  const [nps, setNps] = useState("0");
  const [other, setOther] = useState("0");

  const oldDeductions =
    (salaried ? STANDARD_DEDUCTION.old : 0) +
    Math.min(n(d80c), 1_50_000) +
    Math.min(n(d80d), 1_00_000) +
    n(hra) +
    Math.min(n(homeLoan), 2_00_000) +
    Math.min(n(nps), 50_000) +
    n(other);
  const newT = incomeTax(n(income) - (salaried ? STANDARD_DEDUCTION.new : 0), "new");
  const oldT = incomeTax(n(income) - oldDeductions, "old", age);
  const better = newT.total <= oldT.total ? "new" : "old";
  const saving = Math.abs(newT.total - oldT.total);

  const Col = ({ title, t, highlight }: { title: string; t: ReturnType<typeof incomeTax>; highlight: boolean }) => (
    <div className={`p-5 ${highlight ? "ledger-card" : "ledger-card-flat"}`}>
      <p className="rule-label">{title}</p>
      <p className={`font-numeric mt-1 text-3xl font-medium ${highlight ? "text-forest" : ""}`}>{inr(t.total)}</p>
      <dl className="mt-3 space-y-1 text-sm">
        {[
          ["Taxable income", t.taxableIncome],
          ["Tax on slabs", t.slabTax],
          ["Rebate / relief", -t.rebate],
          ["Surcharge", t.surcharge],
          ["Health & education cess (4%)", t.cess],
        ].map(([l, v]) => (
          <div key={l as string} className="flex justify-between gap-3">
            <dt className="text-ink-soft">{l}</dt>
            <dd className="font-numeric">{inr(v as number)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat space-y-5 p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <Num label="Gross annual income" prefix="₹" value={income} onChange={setIncome} hint="Salary and other income taxed at slab rates" />
          <div className="space-y-4">
            <Toggle label="Salaried or pensioner" checked={salaried} onChange={setSalaried} hint="Applies the standard deduction (₹75,000 new / ₹50,000 old)" />
            <Choice label="Age" value={age} onChange={setAge} options={[{ value: "below60", label: "Below 60" }, { value: "60to80", label: "60–80" }, { value: "above80", label: "80+" }]} />
          </div>
        </div>
        <p className="rule-label">old-regime deductions</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <Num label="Section 80C" prefix="₹" value={d80c} onChange={setD80c} hint="PF, PPF, ELSS, insurance — max ₹1.5 lakh" />
          <Num label="Section 80D (health insurance)" prefix="₹" value={d80d} onChange={setD80d} />
          <Num label="HRA exemption" prefix="₹" value={hra} onChange={setHra} />
          <Num label="Home loan interest (self-occupied)" prefix="₹" value={homeLoan} onChange={setHomeLoan} hint="Max ₹2 lakh" />
          <Num label="NPS 80CCD(1B)" prefix="₹" value={nps} onChange={setNps} hint="Max ₹50,000" />
          <Num label="Other deductions" prefix="₹" value={other} onChange={setOther} />
        </div>
      </section>
      <Verdict label="old vs new regime">
        <div className="grid gap-4 md:grid-cols-2">
          <Col title="New regime" t={newT} highlight={better === "new"} />
          <Col title="Old regime" t={oldT} highlight={better === "old"} />
        </div>
        <p className="mt-5 text-lg leading-relaxed">
          {saving < 1 ? "Both regimes give the same tax." : <>The <strong>{better} regime</strong> saves you about <strong>{inr(saving)}</strong> a year.</>}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-ink-faint">
          FY 2025-26 and FY 2026-27 slab rates (Budget 2026 made no change). New-regime rebate makes income up to ₹12 lakh tax-free, with marginal relief above it. Special-rate income such as capital gains, and marginal relief on surcharge, are not included. This is an estimate, not tax advice.
        </p>
      </Verdict>
    </ToolShell>
  );
}
