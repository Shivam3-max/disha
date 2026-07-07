"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("pricing-strategy")!;

type Model = {
  name: string;
  gist: string;
  fitsWhen: string;
  risk: string;
  tags: { position: string[]; goal: string[]; kind: string[] };
};

const MODELS: Model[] = [
  { name: "Skimming", gist: "Launch high, drop price in steps as each buyer layer is exhausted.", fitsWhen: "you're first with something new and early adopters will pay for it", risk: "invites competitors under your price umbrella", tags: { position: ["premium"], goal: ["profit"], kind: ["product"] } },
  { name: "Penetration", gist: "Enter deliberately cheap to win volume fast, raise later.", fitsWhen: "the market is price-sensitive and scale drops your costs", risk: "customers anchored to the low price resist increases", tags: { position: ["value"], goal: ["share"], kind: ["product", "service"] } },
  { name: "Premium", gist: "Permanently high price backed by genuinely superior product and story.", fitsWhen: "your quality, brand and experience truly justify it", risk: "one bad experience destroys the story", tags: { position: ["premium"], goal: ["profit", "brand"], kind: ["product", "service"] } },
  { name: "Cost-plus", gist: "Total cost per unit plus a fixed margin percentage.", fitsWhen: "you sell commodities or tenders where transparency matters", risk: "ignores what the customer would happily pay", tags: { position: ["value"], goal: ["profit"], kind: ["product"] } },
  { name: "Value-based", gist: "Price a share of the measurable value you create for the buyer.", fitsWhen: "you can quantify the money you make or save the customer", risk: "requires proof and confident selling", tags: { position: ["premium", "mid"], goal: ["profit"], kind: ["service"] } },
  { name: "Anchor pricing", gist: "Show a deliberately expensive option to make your real offer feel fair.", fitsWhen: "buyers have no reference price for what you sell", risk: "anchors that feel fake erode trust", tags: { position: ["mid", "premium"], goal: ["profit"], kind: ["product", "service"] } },
  { name: "Bundling", gist: "Package slow and fast movers together at an attractive combined price.", fitsWhen: "you have a wide catalogue and some dead stock", risk: "can train customers to never buy items alone", tags: { position: ["value", "mid"], goal: ["share", "profit"], kind: ["product"] } },
  { name: "Loss leader", gist: "Sell one famous item near cost to pull footfall; earn on the basket.", fitsWhen: "customers reliably buy more once they're in", risk: "cherry-pickers take the deal and leave", tags: { position: ["value"], goal: ["share"], kind: ["product"] } },
  { name: "Subscription", gist: "Recurring price for ongoing access instead of one-time sale.", fitsWhen: "usage is repeated and you can keep delivering value monthly", risk: "churn quietly kills it; retention becomes the whole game", tags: { position: ["mid"], goal: ["share", "profit"], kind: ["service", "product"] } },
  { name: "Freemium", gist: "Free tier for everyone; a paid tier for the serious few.", fitsWhen: "serving a free user costs you almost nothing", risk: "free users may never convert", tags: { position: ["value"], goal: ["share"], kind: ["service"] } },
  { name: "Competitive matching", gist: "Track the market leader's price and position just beside it.", fitsWhen: "your product is genuinely interchangeable with rivals", risk: "you surrender pricing power entirely", tags: { position: ["mid", "value"], goal: ["share"], kind: ["product"] } },
  { name: "Dynamic pricing", gist: "Price moves with demand, season, or inventory pressure.", fitsWhen: "demand swings and you can reprice without friction", risk: "customers who compare notes feel cheated", tags: { position: ["mid"], goal: ["profit"], kind: ["service", "product"] } },
];

const Q = [
  { key: "kind", label: "What do you sell?", options: [{ v: "product", l: "Products" }, { v: "service", l: "Services" }] },
  { key: "position", label: "How do you want to be seen?", options: [{ v: "premium", l: "Premium / best-in-class" }, { v: "mid", l: "Quality at a fair price" }, { v: "value", l: "Most affordable" }] },
  { key: "goal", label: "What matters most right now?", options: [{ v: "profit", l: "Better margins" }, { v: "share", l: "More customers / market share" }, { v: "brand", l: "Building the brand" }] },
] as const;

export function PricingStrategy() {
  const [ans, setAns] = useState<Record<string, string>>({});
  const complete = Q.every((q) => ans[q.key]);

  const scored = MODELS.map((m) => {
    let s = 0;
    if (ans.kind && m.tags.kind.includes(ans.kind)) s++;
    if (ans.position && m.tags.position.includes(ans.position)) s += 2;
    if (ans.goal && m.tags.goal.includes(ans.goal)) s += 2;
    return { ...m, s };
  }).sort((a, b) => b.s - a.s);

  const top = scored.slice(0, 3);

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">step 1 · three questions</p>
        <div className="space-y-5">
          {Q.map((q) => (
            <div key={q.key}>
              <p className="mb-2 font-medium">{q.label}</p>
              <div className="flex flex-wrap gap-2">
                {q.options.map((o) => (
                  <button
                    key={o.v}
                    onClick={() => setAns({ ...ans, [q.key]: o.v })}
                    className={`border px-3 py-1.5 text-sm transition-colors ${
                      ans[q.key] === o.v
                        ? "border-vermillion bg-vermillion text-paper"
                        : "border-ink-faint text-ink-soft hover:border-ink"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {complete && (
        <Verdict label="your three best-fit models">
          <div className="space-y-5">
            {top.map((m, i) => (
              <div key={m.name} className="border-l-2 border-vermillion pl-4">
                <p className="font-display text-xl font-semibold">
                  {i + 1}. {m.name}
                </p>
                <p className="mt-1 text-sm">{m.gist}</p>
                <p className="mt-1 text-sm text-forest">Fits when {m.fitsWhen}.</p>
                <p className="text-sm text-vermillion-deep">Watch out: {m.risk}.</p>
              </div>
            ))}
          </div>
          <SaveToPlan
            meta={meta}
            summary={`Best-fit pricing models: ${top.map((m) => m.name).join(", ")} (based on ${ans.kind}, ${ans.position} positioning, priority: ${ans.goal}).`}
            actions={[
              `Test "${top[0].name}" pricing on one product or service line this month`,
              `Write down your current model and compare its margin against "${top[0].name}"`,
              "Decide price changes on data, not fear — review after 30 days",
            ]}
          />
        </Verdict>
      )}

      <details className="mt-8">
        <summary className="cursor-pointer text-sm text-ink-faint hover:text-ink">
          See all twelve models
        </summary>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {MODELS.map((m) => (
            <div key={m.name} className="ledger-card-flat p-4">
              <p className="font-medium">{m.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{m.gist}</p>
            </div>
          ))}
        </div>
      </details>
    </ToolShell>
  );
}
