import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";

export default function TemplatesIndex() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">fill in, print, done</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Document templates</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Fillable starting drafts for common business documents. These are starting points, not legal
        advice — have a professional review anything binding before you sign it.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TEMPLATES.map((t) => (
          <Link
            key={t.slug}
            href={`/templates/${t.slug}`}
            className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <p className="rule-label">{t.category}</p>
            <h2 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">
              {t.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
