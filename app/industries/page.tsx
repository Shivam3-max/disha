"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { FilterChips } from "@/components/FilterChips";

const SECTORS: Record<string, string> = {
  "fmcg-retail": "Retail & consumer",
  "d2c-ecommerce": "Retail & consumer",
  "apparel-textiles": "Retail & consumer",
  jewellery: "Retail & consumer",
  "electronics-retail": "Retail & consumer",
  "beauty-wellness": "Retail & consumer",
  "restaurants-qsr": "Services & hospitality",
  "healthcare-clinics": "Services & hospitality",
  "education-coaching": "Services & hospitality",
  hospitality: "Services & hospitality",
  "b2b-services-agencies": "Services & hospitality",
  "auto-dealerships": "Services & hospitality",
  manufacturing: "Industrial & supply chain",
  "real-estate": "Industrial & supply chain",
  "logistics-transport": "Industrial & supply chain",
  "wholesale-distribution": "Industrial & supply chain",
  pharma: "Industrial & supply chain",
  "construction-infrastructure": "Industrial & supply chain",
  "agriculture-agribusiness": "Agri & primary",
  "dairy-livestock": "Agri & primary",
  "handicrafts-exports": "Agri & primary",
  "saas-tech": "Digital & finance",
  "financial-services": "Digital & finance",
  "media-entertainment": "Digital & finance",
  "it-ites-services": "Digital & finance",
};

const SECTOR_ORDER = [
  "Retail & consumer",
  "Services & hospitality",
  "Industrial & supply chain",
  "Agri & primary",
  "Digital & finance",
];

export default function IndustriesIndex() {
  const [sector, setSector] = useState("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const s of SECTOR_ORDER) c[s] = INDUSTRIES.filter((i) => SECTORS[i.slug] === s).length;
    return c;
  }, []);

  const visibleSectors = sector === "All" ? SECTOR_ORDER : [sector];

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">industry by industry</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        {INDUSTRIES.length} deep industry playbooks
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Not generic advice — the specific strategies, benchmarks, and pitfalls that decide winners
        and losers inside each industry, with real case studies and a starter kit of tools linked in.
      </p>

      <div className="mt-8">
        <FilterChips options={SECTOR_ORDER} active={sector} onChange={setSector} counts={counts} />
      </div>

      {visibleSectors.map((sec) => {
        const items = INDUSTRIES.filter((i) => SECTORS[i.slug] === sec);
        if (items.length === 0) return null;
        return (
          <div key={sec} className="mt-10">
            <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
              {sec} · {items.length}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="ledger-card-flat group p-6 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <h3 className="font-display text-2xl font-semibold group-hover:text-vermillion">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-vermillion">{ind.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ind.summary}</p>
                  <p className="rule-label mt-4">
                    {ind.strategies.length} strategies · {ind.caseStudySlugs.length} case studies
                  </p>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
