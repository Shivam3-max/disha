import { TOOLS } from "./registry";
import { WORKSHEETS } from "./worksheets";
import { JOURNEYS } from "./journeys";
import { LEARN_DAYS, TRACKS } from "./learn";
import { INDUSTRIES } from "./industries";
import { STRATEGIES } from "./strategies";
import { CASE_STUDIES } from "./caseStudies";
import { GLOSSARY } from "./glossary";
import { TEMPLATES } from "./templates";
import { COMPLIANCE_TOPICS } from "./compliance";

export type SearchItemType =
  | "Tool"
  | "Framework"
  | "Journey"
  | "Learn"
  | "Industry"
  | "Strategy"
  | "Case study"
  | "Glossary"
  | "Template"
  | "Compliance";

export type SearchItem = {
  type: SearchItemType;
  title: string;
  description: string;
  href: string;
  keywords: string;
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const t of TOOLS) {
    items.push({ type: "Tool", title: t.title, description: t.description, href: `/tools/${t.slug}`, keywords: `${t.title} ${t.question} ${t.category}` });
  }
  for (const w of WORKSHEETS) {
    items.push({ type: "Framework", title: w.title, description: w.description, href: `/frameworks/${w.slug}`, keywords: `${w.title} ${w.question} ${w.category}` });
  }
  for (const j of JOURNEYS) {
    items.push({ type: "Journey", title: j.title, description: j.description, href: `/journeys/${j.slug}`, keywords: `${j.title} ${j.symptom}` });
  }
  for (const l of LEARN_DAYS) {
    items.push({
      type: "Learn",
      title: `${TRACKS[l.track].unitLabel} ${l.day}: ${l.title}`,
      description: l.subtitle,
      href: `/learn/${l.slug}`,
      keywords: `${l.title} ${l.subtitle} ${TRACKS[l.track].title}`,
    });
  }
  for (const i of INDUSTRIES) {
    items.push({ type: "Industry", title: i.name, description: i.tagline, href: `/industries/${i.slug}`, keywords: `${i.name} ${i.tagline} ${i.summary}` });
  }
  for (const s of STRATEGIES) {
    items.push({ type: "Strategy", title: s.name, description: s.definition, href: `/strategies/${s.slug}`, keywords: `${s.name} ${s.category} ${s.definition}` });
  }
  for (const c of CASE_STUDIES) {
    items.push({ type: "Case study", title: c.title, description: c.summary, href: `/case-studies/${c.slug}`, keywords: `${c.title} ${c.summary} ${c.kind}` });
  }
  for (const g of GLOSSARY) {
    items.push({ type: "Glossary", title: g.term, description: g.definition, href: `/glossary?q=${encodeURIComponent(g.term)}`, keywords: `${g.term} ${g.category} ${g.definition}` });
  }
  for (const t of TEMPLATES) {
    items.push({ type: "Template", title: t.title, description: t.description, href: `/templates/${t.slug}`, keywords: `${t.title} ${t.category} ${t.description}` });
  }
  for (const c of COMPLIANCE_TOPICS) {
    items.push({ type: "Compliance", title: c.title, description: c.summary, href: `/compliance/${c.slug}`, keywords: `${c.title} ${c.summary} ${c.appliesTo.join(" ")}` });
  }

  return items;
}

export const SEARCH_INDEX: SearchItem[] = buildIndex();

export function searchKnowledgeBank(query: string, limit = 40): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return SEARCH_INDEX.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
    return terms.every((t) => haystack.includes(t));
  }).slice(0, limit);
}

export { slugify };
