import Link from "next/link";
import { COMPLIANCE_TOPICS, COMPLIANCE_DISCLAIMER } from "@/lib/compliance";

export default function ComplianceIndex() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">general orientation, not legal advice</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">India compliance quick-reference</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        A plain-language map of what registrations and compliance areas commonly apply to a growing
        Indian business, so you know what to ask a professional about.
      </p>

      <div className="ledger-card mt-6 border-l-4 border-vermillion p-5">
        <p className="rule-label mb-1 text-vermillion">please read before relying on this</p>
        <p className="text-sm leading-relaxed">{COMPLIANCE_DISCLAIMER}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {COMPLIANCE_TOPICS.map((c) => (
          <Link
            key={c.slug}
            href={`/compliance/${c.slug}`}
            className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <h2 className="font-display text-xl font-semibold group-hover:text-vermillion">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
            <p className="rule-label mt-3">{c.appliesTo.join(" · ")}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
