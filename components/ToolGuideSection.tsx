import type { ToolGuide } from "@/lib/toolGuides";
import { JsonLd } from "./JsonLd";
import { Byline } from "./Byline";

export function ToolGuideSection({ guide }: { guide: ToolGuide }) {
  return (
    <section aria-labelledby="tool-guide" className="no-print mx-auto max-w-3xl px-5 pb-6 pt-4">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="border-t border-ink pt-10">
        <p className="rule-label mb-2">the guide</p>
        <h2 id="tool-guide" className="font-display text-3xl font-semibold leading-tight">
          {guide.heading}
        </h2>
        <Byline />
        {guide.intro.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}

        {guide.formula && (
          <div className="ledger-card mt-8 p-6">
            <h3 className="rule-label mb-2">the formula</h3>
            <p className="font-numeric text-base leading-relaxed md:text-lg">{guide.formula.expression}</p>
            <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-soft">
              {guide.formula.parts.map((p, i) => (
                <li key={i}>· {p}</li>
              ))}
            </ul>
          </div>
        )}

        {guide.example && (
          <div className="ledger-card-flat mt-6 p-6">
            <h3 className="font-display text-xl font-semibold">{guide.example.title}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {guide.example.lines.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        )}

        <h3 className="font-display mt-10 text-2xl font-semibold">Tips</h3>
        <ol className="mt-4 space-y-3">
          {guide.tips.map((t, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-numeric text-xl leading-none text-vermillion">{i + 1}</span>
              <span className="leading-relaxed">{t}</span>
            </li>
          ))}
        </ol>

        <h3 className="font-display mt-10 text-2xl font-semibold">Frequently asked questions</h3>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {guide.faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
