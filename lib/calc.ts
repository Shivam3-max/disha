// Pure finance formulas behind the calculators. Kept framework-free so they can be checked in isolation.

export function emi(principal: number, annualRatePct: number, months: number) {
  if (principal <= 0 || months <= 0) return { emi: 0, totalPaid: 0, totalInterest: 0 };
  const r = annualRatePct / 12 / 100;
  const e = r === 0 ? principal / months : (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1);
  const totalPaid = e * months;
  return { emi: e, totalPaid, totalInterest: totalPaid - principal };
}

/** Year-by-year principal and interest split for a loan. */
export function amortisationByYear(principal: number, annualRatePct: number, months: number) {
  const { emi: e } = emi(principal, annualRatePct, months);
  const r = annualRatePct / 12 / 100;
  const rows: { year: number; principal: number; interest: number; balance: number }[] = [];
  let balance = principal;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const princ = Math.min(e - interest, balance);
    balance -= princ;
    const year = Math.ceil(m / 12);
    const row = rows[year - 1] ?? (rows[year - 1] = { year, principal: 0, interest: 0, balance: 0 });
    row.principal += princ;
    row.interest += interest;
    row.balance = Math.max(balance, 0);
  }
  return rows;
}

/** SIP future value with contributions at the start of each month. */
export function sip(monthly: number, annualRatePct: number, years: number) {
  const n = Math.round(years * 12);
  const r = annualRatePct / 12 / 100;
  const invested = monthly * n;
  const value = r === 0 ? invested : monthly * (((1 + r) ** n - 1) / r) * (1 + r);
  return { invested, value, gains: value - invested };
}

export function cagr(start: number, end: number, years: number) {
  if (start <= 0 || end <= 0 || years <= 0) return 0;
  return ((end / start) ** (1 / years) - 1) * 100;
}

export function compound(principal: number, annualRatePct: number, years: number, timesPerYear: number) {
  const amount = principal * (1 + annualRatePct / 100 / timesPerYear) ** (timesPerYear * years);
  return { amount, interest: amount - principal };
}

export function gst(amount: number, ratePct: number, mode: "add" | "remove") {
  if (mode === "add") {
    const tax = (amount * ratePct) / 100;
    return { base: amount, tax, total: amount + tax };
  }
  const base = (amount * 100) / (100 + ratePct);
  return { base, tax: amount - base, total: amount };
}

// ---------- Income tax (India, FY 2025-26 and FY 2026-27 rates) ----------

type Slab = [from: number, to: number, rate: number];

const NEW_REGIME_SLABS: Slab[] = [
  [0, 4_00_000, 0],
  [4_00_000, 8_00_000, 0.05],
  [8_00_000, 12_00_000, 0.1],
  [12_00_000, 16_00_000, 0.15],
  [16_00_000, 20_00_000, 0.2],
  [20_00_000, 24_00_000, 0.25],
  [24_00_000, Infinity, 0.3],
];

export type AgeGroup = "below60" | "60to80" | "above80";

function oldRegimeSlabs(age: AgeGroup): Slab[] {
  const exempt = age === "above80" ? 5_00_000 : age === "60to80" ? 3_00_000 : 2_50_000;
  return [
    [0, exempt, 0],
    [exempt, 5_00_000, 0.05],
    [5_00_000, 10_00_000, 0.2],
    [10_00_000, Infinity, 0.3],
  ].filter(([from, to]) => to > from) as Slab[];
}

function slabTax(income: number, slabs: Slab[]) {
  return slabs.reduce((sum, [from, to, rate]) => sum + Math.max(0, Math.min(income, to) - from) * rate, 0);
}

function surchargeRate(income: number, regime: "new" | "old") {
  if (income > 5_00_00_000) return regime === "new" ? 0.25 : 0.37;
  if (income > 2_00_00_000) return 0.25;
  if (income > 1_00_00_000) return 0.15;
  if (income > 50_00_000) return 0.1;
  return 0;
}

export type TaxResult = {
  taxableIncome: number;
  slabTax: number;
  rebate: number;
  surcharge: number;
  cess: number;
  total: number;
};

/** Tax on taxable income (after deductions). Surcharge marginal relief is not applied. */
export function incomeTax(taxableIncome: number, regime: "new" | "old", age: AgeGroup = "below60"): TaxResult {
  const income = Math.max(0, taxableIncome);
  const base = slabTax(income, regime === "new" ? NEW_REGIME_SLABS : oldRegimeSlabs(age));
  let afterRebate = base;
  if (regime === "new") {
    if (income <= 12_00_000) afterRebate = 0;
    // Marginal relief: tax can't exceed the income earned above ₹12 lakh.
    else afterRebate = Math.min(base, income - 12_00_000);
  } else if (income <= 5_00_000) {
    afterRebate = Math.max(0, base - 12_500);
  }
  const surcharge = afterRebate * surchargeRate(income, regime);
  const cess = (afterRebate + surcharge) * 0.04;
  return {
    taxableIncome: income,
    slabTax: base,
    rebate: base - afterRebate,
    surcharge,
    cess,
    total: afterRebate + surcharge + cess,
  };
}

export const STANDARD_DEDUCTION = { new: 75_000, old: 50_000 } as const;

// ---------- Salary: CTC to in-hand ----------

export type SalaryInput = {
  ctc: number;
  basicPct: number;
  pfOnFullBasic: boolean;
  employerPfInCtc: boolean;
  gratuityInCtc: boolean;
  professionalTax: number;
  regime: "new" | "old";
  /** Old regime only: 80C investments other than employee PF, HRA exemption, other deductions. */
  extra80C: number;
  hraExemption: number;
  otherDeductions: number;
};

export function salaryBreakdown(i: SalaryInput) {
  const basic = (i.ctc * Math.min(100, Math.max(0, i.basicPct))) / 100;
  const pfBase = i.pfOnFullBasic ? basic : Math.min(basic, 15_000 * 12);
  const employerPf = i.employerPfInCtc ? pfBase * 0.12 : 0;
  const gratuity = i.gratuityInCtc ? basic * 0.0481 : 0;
  const gross = i.ctc - employerPf - gratuity;
  const employeePf = pfBase * 0.12;

  let taxable: number;
  if (i.regime === "new") {
    taxable = gross - STANDARD_DEDUCTION.new;
  } else {
    const sec80C = Math.min(1_50_000, employeePf + i.extra80C);
    taxable = gross - STANDARD_DEDUCTION.old - i.professionalTax - sec80C - i.hraExemption - i.otherDeductions;
  }
  const tax = incomeTax(taxable, i.regime);
  const inHandYear = gross - employeePf - i.professionalTax - tax.total;
  return { basic, employerPf, gratuity, gross, employeePf, taxable: Math.max(0, taxable), tax, inHandYear, inHandMonth: inHandYear / 12 };
}
