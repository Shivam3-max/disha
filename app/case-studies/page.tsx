"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { CASE_STUDY_KIND_LABEL, type CaseStudyKind } from "@/lib/knowledgeTypes";
import { FilterChips } from "@/components/FilterChips";

const KIND_LABELS = Object.values(CASE_STUDY_KIND_LABEL);

export default function CaseStudiesIndex() {
  const [kindLabel, setKindLabel] = useState("All");
  const [industrySlug, setIndustrySlug] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const label of KIND_LABELS)
      c[label] = CASE_STUDIES.filter((cs) => CASE_STUDY_KIND_LABEL[cs.kind] === label).length;
    return c;
  }, []);

  const visible = CASE_STUDIES.filter((cs) => {
    const kindOk = kindLabel === "All" || CASE_STUDY_KIND_LABEL[cs.kind as CaseStudyKind] === kindLabel;
    const industryOk = industrySlug === "All" || cs.industrySlug === industrySlug;
    return kindOk && industryOk;
  });

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

      <div className="mt-8">
        <FilterChips options={KIND_LABELS} active={kindLabel} onChange={setKindLabel} counts={counts} />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <label className="text-sm font-medium">Industry:</label>
        <select
          value={industrySlug}
          onChange={(e) => setIndustrySlug(e.target.value)}
          className="max-w-xs !w-auto"
        >
          <option value="All">All industries</option>
          {INDUSTRIES.map((i) => (
            <option key={i.slug} value={i.slug}>{i.name}</option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-ink-faint">{visible.length} matching</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {visible.map((c) => {
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
