import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { TOOLS } from "@/lib/registry";
import { WORKSHEETS } from "@/lib/worksheets";
import { JOURNEYS } from "@/lib/journeys";
import { LEARN_DAYS } from "@/lib/learn";
import { INDUSTRIES } from "@/lib/industries";
import { STRATEGIES } from "@/lib/strategies";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { TEMPLATES } from "@/lib/templates";
import { COMPLIANCE_TOPICS } from "@/lib/compliance";
import { LAWS, LAW_CATEGORIES } from "@/lib/laws";
import { GLOSSARY_ENTRIES } from "@/lib/glossaryDetails";
import { COMPANIES } from "@/lib/companies";
import { COMPARISONS } from "@/lib/comparisons";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  const hubs = [
    "/tools",
    "/calculators",
    "/frameworks",
    "/laws",
    "/strategies",
    "/industries",
    "/case-studies",
    "/case-studies/shark-tank-india",
    "/companies",
    "/compare",
    "/learn",
    "/learn/flagship-schedule",
    "/journeys",
    "/knowledge",
    "/benchmarks",
    "/glossary",
    "/templates",
    "/compliance",
    "/checkup",
  ];

  const trust = ["/about", "/contact", "/editorial-policy", "/privacy-policy", "/terms", "/disclaimer"];

  const entries: Entry[] = [
    page("/", 1, "weekly"),
    ...hubs.map((p) => page(p, 0.8, "weekly")),
    ...trust.map((p) => page(p, 0.3, "yearly")),
    ...LAW_CATEGORIES.map((c) => page(`/laws/category/${c.slug}`, 0.7)),
    ...LAWS.map((l) => page(`/laws/${l.slug}`, 0.7)),
    ...TOOLS.map((t) => page(`/tools/${t.slug}`, 0.7)),
    ...GLOSSARY_ENTRIES.filter((g) => g.detail).map((g) => page(`/glossary/${g.slug}`, 0.6)),
    ...WORKSHEETS.map((w) => page(`/frameworks/${w.slug}`, 0.6)),
    ...STRATEGIES.map((s) => page(`/strategies/${s.slug}`, 0.6)),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`, 0.6)),
    ...CASE_STUDIES.map((c) => page(`/case-studies/${c.slug}`, 0.6)),
    ...COMPANIES.map((c) => page(`/companies/${c.slug}`, 0.6)),
    ...COMPARISONS.map((c) => page(`/compare/${c.slug}`, 0.6)),
    ...JOURNEYS.map((j) => page(`/journeys/${j.slug}`, 0.5)),
    ...LEARN_DAYS.map((d) => page(`/learn/${d.slug}`, 0.5)),
    ...TEMPLATES.map((t) => page(`/templates/${t.slug}`, 0.5)),
    ...COMPLIANCE_TOPICS.map((c) => page(`/compliance/${c.slug}`, 0.5)),
  ];

  // Some data files list the same slug twice; keep the first occurrence.
  const seen = new Set<string>();
  return entries.filter((e) => (seen.has(e.url) ? false : (seen.add(e.url), true)));
}
