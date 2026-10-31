"use client";

import { useState } from "react";
import type { DocTemplate } from "@/lib/knowledgeTypes";

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Builds a Word-compatible .doc from the template and whatever the user has filled in. */
function downloadDoc(template: DocTemplate, values: Record<number, string>) {
  const body = template.blocks
    .map((b, i) => {
      if (b.type === "clause") {
        return `${b.heading ? `<h3>${escape(b.heading)}</h3>` : ""}<p>${escape(b.text)}</p>`;
      }
      const v = values[i]?.trim();
      return `<p><b>${escape(b.label)}:</b> ${v ? escape(v).replace(/\n/g, "<br>") : "____________________"}</p>`;
    })
    .join("");
  const html = `<html><head><meta charset="utf-8"><title>${escape(template.title)}</title></head><body style="font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.5"><h1>${escape(template.title)}</h1>${body}</body></html>`;
  const url = URL.createObjectURL(new Blob(["\ufeff", html], { type: "application/msword" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${template.slug}.doc`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

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

      <div className="no-print mt-6 flex flex-wrap gap-3">
        <button onClick={() => downloadDoc(template, values)} className="btn-ink px-6 py-3 font-medium">
          Download as Word (.doc)
        </button>
        <button onClick={() => window.print()} className="btn-outline px-6 py-3 font-medium">
          Print / save as PDF
        </button>
      </div>
      <p className="no-print mt-2 text-xs text-ink-faint">Fill in the fields first — your entries are included in the download. Nothing is uploaded.</p>
    </main>
  );
}
