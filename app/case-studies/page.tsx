import Link from "next/link";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { CASE_STUDY_KIND_LABEL } from "@/lib/knowledgeTypes";

export default function CaseStudiesIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">real stories, tagged and cross-linked</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {CASE_STUDIES.length} case studies & failure patterns
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Builds, pivots, turnarounds, and honest failures — Indian and global — each tagged to the
        industry and strategy it illustrates.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CASE_STUDIES.map((c) => {
          const industry = INDUSTRIES.find((i) => i.slug === c.industrySlug);
          return (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
            >
              <p className="rule-label">
                {CASE_STUDY_KIND_LABEL[c.kind]} · {industry?.name}
              </p>
              <h2 className="font-display mt-1 text-xl font-semibold group-hover:text-vermillion">
                {c.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{c.summary}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
