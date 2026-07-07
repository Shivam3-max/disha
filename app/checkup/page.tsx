"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { saveCheckup, saveEntry } from "@/lib/store";

type Dimension = {
  key: string;
  label: string;
  statements: string[];
  prescription: { slug: string; title: string }[];
};

const DIMENSIONS: Dimension[] = [
  {
    key: "profit",
    label: "Profitability",
    statements: [
      "I know my exact profit margin per product or service, not just overall.",
      "My prices are set deliberately, not just by copying competitors.",
      "Revenue has grown meaningfully over the last twelve months.",
    ],
    prescription: [
      { slug: "pricing-strategy", title: "Pricing strategy picker" },
      { slug: "revenue-multiplier", title: "Revenue multiplier" },
    ],
  },
  {
    key: "customers",
    label: "Customer engine",
    statements: [
      "I know what it costs me to acquire one new customer, per channel.",
      "A healthy share of my revenue comes from repeat customers.",
      "I know what a customer is worth to me over their lifetime.",
    ],
    prescription: [
      { slug: "acquisition-cost", title: "Acquisition cost auditor" },
      { slug: "customer-lifetime", title: "Customer lifetime value" },
    ],
  },
  {
    key: "cash",
    label: "Cash discipline",
    statements: [
      "I know how many months my business survives if sales stop today.",
      "Money owed to me gets collected on time, without drama.",
      "My cash isn't locked up in slow-moving stock or idle assets.",
    ],
    prescription: [
      { slug: "cash-runway", title: "Cash flow runway" },
      { slug: "inventory-turns", title: "Inventory turns analyzer" },
    ],
  },
  {
    key: "moat",
    label: "Competitive moat",
    statements: [
      "If a well-funded competitor copied me tomorrow, my customers would stay.",
      "Customers choose me for a specific reason they can name.",
      "I have at least one advantage that took years to build.",
    ],
    prescription: [
      { slug: "moat-builder", title: "Moat builder" },
      { slug: "advantage-test", title: "Advantage stress test" },
    ],
  },
  {
    key: "team",
    label: "Team & self",
    statements: [
      "The business runs for a week without me and nothing breaks.",
      "My last three hires turned out the way I hoped.",
      "I spend most of my time on work only I can do.",
    ],
    prescription: [
      { slug: "hiring-scorecard", title: "Hiring scorecard" },
      { slug: "goal-arrow", title: "Goal arrow" },
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

function Radar({ scores }: { scores: number[] }) {
  const cx = 190, cy = 150, r = 105;
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
    <svg viewBox="0 0 380 300" className="w-full max-w-sm" role="img" aria-label="Business health radar chart">
      {[0.33, 0.66, 1].map((f) => (
        <polygon key={f} points={poly(f)} fill="none" stroke="#ddd2b8" strokeWidth="1" />
      ))}
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = point(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#ddd2b8" strokeWidth="1" />;
      })}
      <polygon points={shape} fill="rgba(188,58,28,0.18)" stroke="#bc3a1c" strokeWidth="2" />
      {DIMENSIONS.map((d, i) => {
        const [x, y] = point(i, 1.22);
        return (
          <text
            key={d.key}
            x={x}
            y={y}
            textAnchor="middle"
            fontSize="11"
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

export default function Checkup() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

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

  const finish = () => {
    const scoreMap: Record<string, number> = {};
    DIMENSIONS.forEach((d, i) => (scoreMap[d.label] = scores[i]));
    saveCheckup({ savedAt: new Date().toISOString(), scores: scoreMap });
    saveEntry({
      slug: "checkup",
      title: "Business health checkup",
      savedAt: new Date().toISOString(),
      summary: `Overall health ${overall}/10. Weakest: ${ranked[0].label} (${ranked[0].score}/10), strongest: ${ranked[ranked.length - 1].label} (${ranked[ranked.length - 1].score}/10).`,
      actions: ranked
        .slice(0, 2)
        .flatMap((d) => d.prescription.map((p) => `Work through “${p.title}” to improve ${d.label.toLowerCase()}`)),
    });
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="rule-label mb-3">diagnosis complete</p>
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

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="ledger-card-flat flex items-center justify-center p-6">
            <Radar scores={scores} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Where to start
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              Don&apos;t fix everything at once. Your two weakest vital signs,
              and the tools prescribed for each:
            </p>
            <div className="mt-4 space-y-4">
              {ranked.slice(0, 2).map((d) => (
                <div key={d.key} className="border-l-2 border-vermillion pl-4">
                  <p className="font-medium">
                    {d.label}{" "}
                    <span className="font-numeric text-vermillion">
                      {d.score}/10
                    </span>
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {d.prescription.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/tools/${p.slug}`}
                        className="btn-outline px-3 py-1 text-sm"
                      >
                        {p.title} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              This result is saved to{" "}
              <Link href="/plan" className="text-vermillion underline">
                your action plan
              </Link>
              . Retake the checkup monthly to watch the shape change.
            </p>
            <button
              onClick={() => {
                setAnswers({});
                setDone(false);
              }}
              className="btn-outline mt-4 px-4 py-2 text-sm"
            >
              Retake checkup
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">the five vital signs</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
        Business health checkup
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Fifteen statements, five vital signs. Rate how true each statement is
        for your business today — not where you hope to be. Takes about five
        minutes.
      </p>

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
