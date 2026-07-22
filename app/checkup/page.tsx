"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { saveCheckup, saveEntry, loadCheckupHistory, type CheckupResult } from "@/lib/store";
import { starterKitHref, type StarterKitLink } from "@/lib/knowledgeTypes";

type Dimension = {
  key: string;
  label: string;
  statements: string[];
  prescriptions: StarterKitLink[];
};

const DIMENSIONS: Dimension[] = [
  {
    key: "profit",
    label: "Profitability",
    statements: [
      "I know my exact profit margin per product or service, not just overall.",
      "My prices are set deliberately with a strategy, not just by copying competitors.",
      "I review which products or services make money and which quietly lose it.",
    ],
    prescriptions: [
      { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
      { kind: "tool", slug: "break-even-calculator", label: "Break-even calculator" },
      { kind: "framework", slug: "profit-ratios", label: "Profit ratio snapshot" },
      { kind: "journey", slug: "profits-thin-despite-sales", label: "Profits thin despite sales journey" },
    ],
  },
  {
    key: "sales",
    label: "Sales engine",
    statements: [
      "I have a clear, repeatable sales process from first contact to closed deal.",
      "Leads are followed up on time, every time — nothing dies from silence.",
      "I know my conversion rate from inquiry to closed sale.",
    ],
    prescriptions: [
      { kind: "framework", slug: "bant-lead-scoring", label: "BANT lead scoring" },
      { kind: "framework", slug: "five-as-funnel-audit", label: "5 As funnel audit" },
      { kind: "tool", slug: "revenue-multiplier", label: "Revenue multiplier" },
      { kind: "journey", slug: "sales-have-stalled", label: "Sales have stalled journey" },
    ],
  },
  {
    key: "marketing",
    label: "Marketing & brand",
    statements: [
      "New customers consistently discover us without me personally chasing each one.",
      "Customers can name a specific reason we're different from competitors.",
      "We publish and promote consistently — not just in bursts when sales dip.",
    ],
    prescriptions: [
      { kind: "framework", slug: "brand-signals", label: "Brand signal alignment" },
      { kind: "framework", slug: "content-engine", label: "Content engine setup" },
      { kind: "framework", slug: "ad-campaign-blueprint", label: "Ad campaign blueprint" },
      { kind: "journey", slug: "nobody-knows-we-exist", label: "Nobody knows we exist journey" },
    ],
  },
  {
    key: "retention",
    label: "Customer retention",
    statements: [
      "A healthy share of my revenue comes from repeat customers.",
      "I know why customers leave when they leave.",
      "Customers actively recommend us without being asked.",
    ],
    prescriptions: [
      { kind: "framework", slug: "nps-engine", label: "Recommendation score engine" },
      { kind: "framework", slug: "cx-touchpoints", label: "Experience touchpoint audit" },
      { kind: "tool", slug: "customer-lifetime", label: "Customer lifetime value" },
      { kind: "journey", slug: "customers-dont-come-back", label: "Customers don't come back journey" },
    ],
  },
  {
    key: "cash",
    label: "Cash discipline",
    statements: [
      "I know how many months my business survives if sales stop today.",
      "Money owed to me gets collected on time, without drama.",
      "I plan next month's cash position before the month begins.",
    ],
    prescriptions: [
      { kind: "tool", slug: "cash-runway", label: "Cash flow runway" },
      { kind: "tool", slug: "cash-flow-simulator", label: "Cash flow simulator" },
      { kind: "framework", slug: "cash-projection", label: "90-day cash projection" },
      { kind: "journey", slug: "cash-is-always-tight", label: "Cash is always tight journey" },
    ],
  },
  {
    key: "moat",
    label: "Competitive moat",
    statements: [
      "If a well-funded competitor copied me tomorrow, my customers would stay.",
      "I have at least one advantage that took years to build.",
      "Switching away from us would genuinely cost customers something.",
    ],
    prescriptions: [
      { kind: "tool", slug: "moat-builder", label: "Moat builder" },
      { kind: "tool", slug: "advantage-test", label: "Advantage stress test" },
      { kind: "framework", slug: "switching-barriers", label: "Switching barrier designer" },
      { kind: "journey", slug: "competitor-could-copy-me", label: "Competitor could copy me journey" },
    ],
  },
  {
    key: "team",
    label: "Team & people",
    statements: [
      "My last three hires turned out the way I hoped.",
      "My best people stay, grow, and take on more ownership over time.",
      "Difficult conversations happen early instead of being avoided.",
    ],
    prescriptions: [
      { kind: "tool", slug: "hiring-scorecard", label: "Hiring scorecard" },
      { kind: "framework", slug: "talent-engagement", label: "Engagement lift plan" },
      { kind: "framework", slug: "stay-interview-plan", label: "Stay interview plan" },
      { kind: "journey", slug: "cant-find-good-people", label: "Can't find good people journey" },
    ],
  },
  {
    key: "systems",
    label: "Systems & operations",
    statements: [
      "The business runs for a week without me and nothing breaks.",
      "Our key processes are written down, not living in one person's head.",
      "We review our numbers on a fixed rhythm — weekly and monthly, without fail.",
    ],
    prescriptions: [
      { kind: "framework", slug: "sop-builder", label: "SOP builder" },
      { kind: "framework", slug: "replace-yourself", label: "Replace yourself" },
      { kind: "framework", slug: "execution-scoreboard", label: "Execution scoreboard" },
      { kind: "journey", slug: "business-cant-run-without-me", label: "Business can't run without me journey" },
    ],
  },
];

const SCALE = [
  { v: 1, l: "Not true" },
  { v: 2, l: "Rarely" },
  { v: 3, l: "Partly" },
  { v: 4, l: "Mostly" },
  { v: 5, l: "Fully true" },
];

function severity(score: number) {
  if (score < 4) return { label: "Critical", color: "text-vermillion", note: "needs urgent attention" };
  if (score < 6) return { label: "Weak", color: "text-gold", note: "actively costing you" };
  if (score < 8) return { label: "Solid", color: "text-ink-soft", note: "working, with room to grow" };
  return { label: "Strong", color: "text-forest", note: "a genuine asset" };
}

function Radar({ scores }: { scores: number[] }) {
  const cx = 190, cy = 160, r = 105;
  const n = scores.length;
  const point = (i: number, frac: number) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(a) * r * frac, cy + Math.sin(a) * r * frac];
  };
  const poly = (frac: number) =>
    Array.from({ length: n }, (_, i) => point(i, frac).join(",")).join(" ");
  const shape = scores
    .map((s, i) => point(i, Math.max(s / 10, 0.04)).join(","))
    .join(" ");
  return (
    <svg viewBox="0 0 380 320" className="w-full max-w-sm" role="img" aria-label="Business health radar chart">
      {[0.33, 0.66, 1].map((f) => (
        <polygon key={f} points={poly(f)} fill="none" stroke="#ddd2b8" strokeWidth="1" />
      ))}
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = point(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#ddd2b8" strokeWidth="1" />;
      })}
      <polygon points={shape} fill="rgba(188,58,28,0.18)" stroke="#bc3a1c" strokeWidth="2" />
      {DIMENSIONS.map((d, i) => {
        const [x, y] = point(i, 1.24);
        return (
          <text
            key={d.key}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="10.5"
            fill="#57503f"
            fontFamily="var(--font-numeric)"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}

function TrendLine({ history }: { history: CheckupResult[] }) {
  if (history.length < 2) return null;
  const overalls = history.map((h) => h.overall ?? 0);
  const w = 220, h = 48, pad = 6;
  const min = Math.min(...overalls), max = Math.max(...overalls);
  const range = max - min || 1;
  const pts = overalls
    .map((v, i) => {
      const x = pad + (i / (overalls.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-56" role="img" aria-label="Score trend over time">
      <polyline points={pts} fill="none" stroke="#bc3a1c" strokeWidth="2" />
    </svg>
  );
}

export default function Checkup() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState<CheckupResult[]>([]);

  useEffect(() => {
    setHistory(loadCheckupHistory());
  }, []);

  const total = DIMENSIONS.length * 3;
  const answered = Object.keys(answers).length;

  const scores = useMemo(
    () =>
      DIMENSIONS.map((d) => {
        const vals = d.statements.map((_, i) => answers[`${d.key}-${i}`] ?? 0);
        const sum = vals.reduce((a, b) => a + b, 0);
        return Math.round((sum / 15) * 100) / 10;
      }),
    [answers],
  );

  const overall = Math.round((scores.reduce((a, b) => a + b, 0) / DIMENSIONS.length) * 10) / 10;

  const ranked = DIMENSIONS.map((d, i) => ({ ...d, score: scores[i] })).sort(
    (a, b) => a.score - b.score,
  );

  const previous = history.length > 0 ? history[history.length - 1] : null;

  const finish = () => {
    const scoreMap: Record<string, number> = {};
    DIMENSIONS.forEach((d, i) => (scoreMap[d.label] = scores[i]));
    saveCheckup({ savedAt: new Date().toISOString(), scores: scoreMap, overall });
    saveEntry({
      slug: "checkup",
      title: "Business health checkup",
      savedAt: new Date().toISOString(),
      summary: `Overall health ${overall}/10 across 8 vital signs. Weakest: ${ranked[0].label} (${ranked[0].score}/10), strongest: ${ranked[ranked.length - 1].label} (${ranked[ranked.length - 1].score}/10).`,
      actions: ranked
        .slice(0, 2)
        .map((d) => `Work through the prescriptions for ${d.label.toLowerCase()} (${d.score}/10)`),
    });
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="rule-label mb-3">diagnosis complete · 8 vital signs</p>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <h1 className="font-display max-w-md text-4xl font-semibold leading-tight">
            Your business health:{" "}
            <span className="text-vermillion">{overall}/10</span>
          </h1>
          <div className="stamp h-24 w-24 text-[10px]">
            <span>
              scored
              <br />
              {new Date().toLocaleDateString("en-IN")}
            </span>
          </div>
        </div>

        {previous && (
          <div className="ledger-card-flat mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 p-4">
            <p className="text-sm">
              Last checkup ({new Date(previous.savedAt).toLocaleDateString("en-IN")}):{" "}
              <span className="font-numeric">{previous.overall ?? "—"}/10</span>
              {previous.overall !== undefined && (
                <span className={`ml-2 font-numeric ${overall >= previous.overall ? "text-forest" : "text-vermillion"}`}>
                  {overall >= previous.overall ? "▲" : "▼"} {Math.abs(Math.round((overall - previous.overall) * 10) / 10)}
                </span>
              )}
            </p>
            <TrendLine history={[...history, { savedAt: "", scores: {}, overall }]} />
          </div>
        )}

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="ledger-card-flat flex items-center justify-center p-6">
            <Radar scores={scores} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">All eight vital signs</h2>
            <div className="mt-4 space-y-2">
              {DIMENSIONS.map((d, i) => {
                const s = severity(scores[i]);
                const prevScore = previous?.scores?.[d.label];
                return (
                  <div key={d.key} className="flex items-baseline justify-between gap-3 border-b border-paper-line pb-1.5 text-sm">
                    <span className="font-medium">{d.label}</span>
                    <span className="flex items-baseline gap-2">
                      {prevScore !== undefined && prevScore !== scores[i] && (
                        <span className={`font-numeric text-xs ${scores[i] > prevScore ? "text-forest" : "text-vermillion"}`}>
                          {scores[i] > prevScore ? "▲" : "▼"}
                        </span>
                      )}
                      <span className="font-numeric">{scores[i]}/10</span>
                      <span className={`rule-label ${s.color}`}>{s.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-semibold">Your prescription</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Don&apos;t fix everything at once. Your two weakest vital signs, each with the exact
            tools, worksheets, and guided journey built for it:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {ranked.slice(0, 2).map((d) => {
              const s = severity(d.score);
              return (
                <div key={d.key} className="ledger-card p-5">
                  <p className="flex items-baseline justify-between">
                    <span className="font-display text-xl font-semibold">{d.label}</span>
                    <span className={`font-numeric ${s.color}`}>{d.score}/10 · {s.label}</span>
                  </p>
                  <p className="mt-1 text-xs text-ink-faint">This area {s.note}.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.prescriptions.map((p) => (
                      <Link key={p.slug + p.kind} href={starterKitHref(p)} className="btn-outline px-3 py-1.5 text-sm">
                        {p.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="no-print mt-8 flex flex-wrap gap-3">
          <button onClick={() => window.print()} className="btn-ink px-5 py-2.5 font-medium">
            Print / save report as PDF
          </button>
          <Link href="/plan" className="btn-outline px-5 py-2.5 font-medium">
            View action plan
          </Link>
          <button
            onClick={() => {
              setAnswers({});
              setDone(false);
              setHistory(loadCheckupHistory());
            }}
            className="btn-outline px-5 py-2.5 font-medium"
          >
            Retake checkup
          </button>
        </div>
        <p className="no-print mt-4 text-xs text-ink-faint">
          Every checkup is saved locally — retake monthly and the trend line above tracks your progress.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">the eight vital signs</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
        Business health checkup
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Twenty-four statements across eight vital signs. Rate how true each is for your business
        today — not where you hope to be. About seven minutes, and every retake is tracked so you
        can watch the shape change month to month.
      </p>
      {history.length > 0 && (
        <p className="mt-2 text-sm text-ink-faint">
          You&apos;ve taken this {history.length} time{history.length === 1 ? "" : "s"} — last overall score:{" "}
          <span className="font-numeric">{history[history.length - 1].overall ?? "—"}/10</span>
        </p>
      )}

      <div className="mt-10 space-y-12">
        {DIMENSIONS.map((d, di) => (
          <section key={d.key}>
            <h2 className="font-display border-b border-ink pb-2 text-2xl font-semibold">
              <span className="font-numeric text-base text-ink-faint">
                {di + 1} —{" "}
              </span>
              {d.label}
            </h2>
            <div className="mt-4 space-y-6">
              {d.statements.map((s, si) => {
                const k = `${d.key}-${si}`;
                return (
                  <div key={k}>
                    <p className="mb-2 font-medium">{s}</p>
                    <div className="flex flex-wrap gap-2">
                      {SCALE.map((o) => (
                        <button
                          key={o.v}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [k]: o.v }))
                          }
                          className={`border px-3 py-1.5 text-sm transition-colors ${
                            answers[k] === o.v
                              ? "border-vermillion bg-vermillion text-paper"
                              : "border-ink-faint text-ink-soft hover:border-ink"
                          }`}
                        >
                          {o.l}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="sticky bottom-4 mt-12">
        <div className="ledger-card flex items-center justify-between gap-4 p-4">
          <p className="font-numeric text-sm">
            {answered}/{total} answered
          </p>
          <button
            onClick={finish}
            disabled={answered < total}
            className="btn-ink px-6 py-2.5 font-medium disabled:cursor-not-allowed disabled:opacity-40"
          >
            Get my diagnosis →
          </button>
        </div>
      </div>
    </main>
  );
}
