"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CASE_REGIONS, CASE_STUDY_KIND_LABEL, type CaseStudy, type CaseStudyKind } from "@/lib/knowledgeTypes";

import { FilterChips } from "@/components/FilterChips";

export type CaseListItem = Pick<
  CaseStudy,
  "slug" | "title" | "kind" | "industrySlug" | "summary" | "company" | "country" | "region" | "period"
>;

const KIND_LABELS = Object.values(CASE_STUDY_KIND_LABEL);

export function CaseStudiesBrowser({
  cases,
  industries,
}: {
  cases: CaseListItem[];
  industries: { slug: string; name: string }[];
}) {
  const [kindLabel, setKindLabel] = useState("All");
  const [industrySlug, setIndustrySlug] = useState("All");
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const label of KIND_LABELS)
      c[label] = cases.filter((cs) => CASE_STUDY_KIND_LABEL[cs.kind] === label).length;
    return c;
  }, [cases]);

  const visible = cases.filter((cs) => {
    const kindOk = kindLabel === "All" || CASE_STUDY_KIND_LABEL[cs.kind as CaseStudyKind] === kindLabel;
    const industryOk = industrySlug === "All" || cs.industrySlug === industrySlug;
    const regionOk = region === "All" || (cs.region ?? "India") === region;
    const q = query.trim().toLowerCase();
    const queryOk = !q || `${cs.title} ${cs.company ?? ""} ${cs.country ?? ""} ${cs.summary}`.toLowerCase().includes(q);
    return kindOk && industryOk && regionOk && queryOk;
  });

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">real stories, tagged and cross-linked</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {cases.length} case studies & failure patterns
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Builds, pivots, turnarounds, and honest failures from India and around the world — with the key
        numbers, a timeline, what made it work or fail, and how to apply the lesson to your own business.
      </p>

      <div className="mt-8">
        <FilterChips options={KIND_LABELS} active={kindLabel} onChange={setKindLabel} counts={counts} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a company, country or idea…"
          aria-label="Search case studies"
          className="max-w-xs !w-full sm:!w-64"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          aria-label="Region"
          className="max-w-xs !w-auto"
        >
          <option value="All">All regions</option>
          {CASE_REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select
          value={industrySlug}
          onChange={(e) => setIndustrySlug(e.target.value)}
          aria-label="Industry"
          className="max-w-xs !w-auto"
        >
          <option value="All">All industries</option>
          {industries.map((i) => (
            <option key={i.slug} value={i.slug}>{i.name}</option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-ink-faint">{visible.length} matching</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {visible.map((c) => {
          const industry = industries.find((i) => i.slug === c.industrySlug);
          return (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
            >
              <p className="rule-label">
                {CASE_STUDY_KIND_LABEL[c.kind]} · {c.country ?? industry?.name}
                {c.period ? ` · ${c.period}` : ""}
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
