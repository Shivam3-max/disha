"use client";

import { useState } from "react";
import Link from "next/link";
import type { ToolMeta } from "@/lib/registry";
import { saveEntry } from "@/lib/store";

export function ToolShell({
  meta,
  children,
}: {
  meta: ToolMeta;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="rule-label mb-3">
            {meta.category} · ~{meta.minutes} min
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg italic text-vermillion">
            &ldquo;{meta.question}&rdquo;
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
            {meta.description}
          </p>
        </div>
        <div className="stamp hidden h-20 w-20 shrink-0 text-xs sm:flex">
          <span>
            tool
            <br />
            no. {meta.no}
          </span>
        </div>
      </div>
      <div className="mt-10">{children}</div>
    </main>
  );
}

export function Verdict({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ledger-card mt-8 p-6">
      <p className="rule-label mb-2">{label}</p>
      {children}
    </div>
  );
}

export function SaveToPlan({
  meta,
  summary,
  actions,
  disabled,
  href,
}: {
  meta: { slug: string; title: string };
  summary: string;
  actions: string[];
  disabled?: boolean;
  href?: string;
}) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="no-print mt-6 flex flex-wrap items-center gap-3">
      <button
        disabled={disabled}
        onClick={() => {
          saveEntry({
            slug: meta.slug,
            title: meta.title,
            savedAt: new Date().toISOString(),
            summary,
            actions,
            href,
          });
          setSaved(true);
        }}
        className="btn-ink px-5 py-2.5 font-medium disabled:cursor-not-allowed disabled:opacity-40"
      >
        {saved ? "✓ Saved to plan" : "Save to my action plan"}
      </button>
      {saved && (
        <Link href="/plan" className="text-sm text-vermillion underline">
          View plan →
        </Link>
      )}
    </div>
  );
}

export function Num({
  label,
  value,
  onChange,
  prefix,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        {prefix && <span className="font-numeric text-ink-faint">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={0}
          onChange={(e) => onChange(e.target.value)}
          className="font-numeric"
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-ink-faint">{hint}</span>}
    </label>
  );
}

export const inr = (n: number) =>
  "₹" +
  Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });
