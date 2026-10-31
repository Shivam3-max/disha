import Link from "next/link";
import { COMPARISONS } from "@/lib/comparisons";
import { pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Business Comparisons: Which Option Is Right for You?",
  description: "Clear side-by-side comparisons — proprietorship vs LLP vs private limited, GST composition vs regular, old vs new tax regime, markup vs margin, equity vs debt and more.",
  path: "/compare",
});

export default function CompareHub() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <Breadcrumbs items={[{ name: "Comparisons", path: "/compare" }]} />
      <p className="rule-label mb-3">{COMPARISONS.length} comparisons</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Business comparisons</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
        The choices business owners and students face most — explained side by side, with a clear verdict on which fits
        your situation.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {COMPARISONS.map((c) => (
          <Link key={c.slug} href={`/compare/${c.slug}`} className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]">
            <h2 className="font-display text-xl font-semibold group-hover:text-vermillion">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
