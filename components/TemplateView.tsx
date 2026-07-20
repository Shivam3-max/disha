"use client";

import { useState } from "react";
import type { DocTemplate } from "@/lib/knowledgeTypes";

export function TemplateView({ template }: { template: DocTemplate }) {
  const [values, setValues] = useState<Record<number, string>>({});

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{template.category} · document template</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{template.title}</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{template.description}</p>

      <div className="no-print ledger-card-flat mt-6 p-4 text-sm text-ink-soft">
        This is a starting draft, not legal advice. Have a qualified professional review anything
        binding before you sign or send it.
      </div>

      <div className="ledger-card mt-8 p-8">
        <div className="space-y-5">
          {template.blocks.map((b, i) =>
            b.type === "clause" ? (
              <div key={i}>
                {b.heading && <p className="font-display mb-1 text-lg font-semibold">{b.heading}</p>}
                <p className="text-sm leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            ) : (
              <label key={i} className="block">
                <span className="mb-1 block text-sm font-medium">{b.label}</span>
                {b.multiline ? (
                  <textarea
                    rows={3}
                    placeholder={b.placeholder}
                    value={values[i] ?? ""}
                    onChange={(e) => setValues((v) => ({ ...v, [i]: e.target.value }))}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={b.placeholder}
                    value={values[i] ?? ""}
                    onChange={(e) => setValues((v) => ({ ...v, [i]: e.target.value }))}
                  />
                )}
              </label>
            ),
          )}
        </div>
      </div>

      <button onClick={() => window.print()} className="no-print btn-ink mt-6 px-6 py-3 font-medium">
        Print / save as PDF
      </button>
    </main>
  );
}
