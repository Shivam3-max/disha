"use client";

import { useState } from "react";
import { Verdict, SaveToPlan } from "@/components/ToolShell";
import type { Worksheet, Block } from "@/lib/worksheets";

type Answers = Record<string, string | number | string[]>;

function BlockField({
  block,
  id,
  value,
  onChange,
}: {
  block: Block;
  id: string;
  value: string | number | string[] | undefined;
  onChange: (v: string | number | string[]) => void;
}) {
  if (block.type === "text") {
    return (
      <div>
        <p className="mb-2 font-medium">{block.label}</p>
        {block.hint && <p className="-mt-1 mb-2 text-xs text-ink-faint">{block.hint}</p>}
        <textarea
          rows={block.rows ?? 2}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  if (block.type === "list") {
    const items = Array.isArray(value) ? value : Array(block.count).fill("");
    return (
      <div>
        <p className="mb-2 font-medium">{block.label}</p>
        {block.hint && <p className="-mt-1 mb-2 text-xs text-ink-faint">{block.hint}</p>}
        <div className="space-y-2">
          {Array.from({ length: block.count }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="font-numeric w-4 text-sm text-ink-faint">{i + 1}</span>
              <input
                type="text"
                value={items[i] ?? ""}
                onChange={(e) => {
                  const next = [...items];
                  next[i] = e.target.value;
                  onChange(next);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "rating") {
    const max = block.max ?? 10;
    return (
      <div>
        <p className="mb-2 font-medium">{block.label}</p>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: max }, (_, i) => i + 1).map((v) => (
            <button
              key={v}
              onClick={() => onChange(v)}
              className={`font-numeric h-9 w-9 border text-sm transition-colors ${
                value === v
                  ? "border-vermillion bg-vermillion text-paper"
                  : "border-ink-faint text-ink-soft hover:border-ink"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "checklist") {
    const picked = Array.isArray(value) ? value : [];
    return (
      <div>
        <p className="mb-2 font-medium">{block.label}</p>
        {block.hint && <p className="-mt-1 mb-2 text-xs text-ink-faint">{block.hint}</p>}
        <div className="grid gap-1.5 sm:grid-cols-2">
          {block.options.map((o) => {
            const on = picked.includes(o);
            return (
              <button
                key={o}
                onClick={() =>
                  onChange(on ? picked.filter((p) => p !== o) : [...picked, o])
                }
                className={`border px-3 py-1.5 text-left text-sm transition-colors ${
                  on
                    ? "border-forest bg-forest/10 text-ink"
                    : "border-ink-faint text-ink-soft hover:border-ink"
                }`}
              >
                <span className={`font-numeric mr-2 ${on ? "text-forest" : "text-ink-faint"}`}>
                  {on ? "✓" : "○"}
                </span>
                {o}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  // choice
  return (
    <div>
      <p className="mb-2 font-medium">{block.label}</p>
      <div className="flex flex-wrap gap-2">
        {block.options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`border px-3 py-1.5 text-sm transition-colors ${
              value === o
                ? "border-vermillion bg-vermillion text-paper"
                : "border-ink-faint text-ink-soft hover:border-ink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function summarize(ws: Worksheet, answers: Answers): { summary: string; actions: string[] } {
  const parts: string[] = [];
  const actions: string[] = [];
  ws.blocks.forEach((b, i) => {
    const v = answers[String(i)];
    if (v === undefined || v === "" || (Array.isArray(v) && v.filter(Boolean).length === 0)) return;
    if (b.type === "rating") parts.push(`${b.label.split("—")[0].trim()}: ${v}/${b.max ?? 10}`);
    else if (b.type === "choice") parts.push(`${String(v)}`);
    else if (b.type === "checklist") parts.push(`${(v as string[]).length} selected: ${(v as string[]).slice(0, 3).join(", ")}${(v as string[]).length > 3 ? "…" : ""}`);
    else if (b.type === "list") (v as string[]).filter(Boolean).slice(0, 3).forEach((item) => actions.push(item));
    else if (typeof v === "string" && v.trim()) parts.push(v.trim().slice(0, 140));
  });
  return {
    summary: parts.slice(0, 4).join(" · ") || `Worked through the ${ws.title} framework.`,
    actions: actions.slice(0, 5),
  };
}

export function WorksheetEngine({ ws, no }: { ws: Worksheet; no: number }) {
  const [answers, setAnswers] = useState<Answers>({});
  const filled = ws.blocks.filter((_, i) => {
    const v = answers[String(i)];
    return v !== undefined && v !== "" && !(Array.isArray(v) && v.filter(Boolean).length === 0);
  }).length;

  const { summary, actions } = summarize(ws, answers);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="rule-label mb-3">{ws.category} · framework worksheet</p>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {ws.title}
          </h1>
          <p className="mt-3 text-lg italic text-vermillion">&ldquo;{ws.question}&rdquo;</p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{ws.description}</p>
        </div>
        <div className="stamp hidden h-20 w-20 shrink-0 text-xs sm:flex">
          <span>
            no. {String(no).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {ws.blocks.map((b, i) => (
          <section key={i} className="ledger-card-flat p-6">
            <p className="rule-label mb-3">step {i + 1}</p>
            <BlockField
              block={b}
              id={String(i)}
              value={answers[String(i)]}
              onChange={(v) => setAnswers((prev) => ({ ...prev, [String(i)]: v }))}
            />
          </section>
        ))}
      </div>

      <Verdict label={`${filled}/${ws.blocks.length} steps filled`}>
        <p className="text-sm text-ink-soft">
          {filled === ws.blocks.length
            ? "Framework complete. Save it — your list answers become checkable actions in your plan."
            : "Fill every step, then save. Half-done frameworks produce half-done businesses."}
        </p>
        <SaveToPlan
          meta={{ slug: `fw-${ws.slug}`, title: ws.title }}
          summary={summary}
          actions={actions}
          href={`/frameworks/${ws.slug}`}
          disabled={filled === 0}
        />
      </Verdict>
    </main>
  );
}
