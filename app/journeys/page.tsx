import Link from "next/link";
import { JOURNEYS } from "@/lib/journeys";

export default function JourneysIndex() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <p className="rule-label mb-3">start from the problem</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        What's actually going wrong?
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Sometimes the hard part isn't doing the work — it's knowing where to
        start. Pick the sentence closest to what you're feeling right now,
        and follow the sequence built for it.
      </p>

      <div className="mt-10 space-y-4">
        {JOURNEYS.map((j) => (
          <Link
            key={j.slug}
            href={`/journeys/${j.slug}`}
            className="ledger-card-flat group block p-6 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <p className="font-display text-xl italic text-vermillion">{j.symptom}</p>
            <h2 className="mt-2 text-lg font-medium group-hover:text-vermillion">{j.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{j.description}</p>
            <p className="rule-label mt-3">{j.steps.length}-step sequence</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
