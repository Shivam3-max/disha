export type StarterKitLink = {
  kind: "tool" | "framework" | "journey" | "learn";
  slug: string;
  label: string;
};

export function starterKitHref(link: StarterKitLink): string {
  switch (link.kind) {
    case "tool":
      return `/tools/${link.slug}`;
    case "framework":
      return `/frameworks/${link.slug}`;
    case "journey":
      return `/journeys/${link.slug}`;
    case "learn":
      return `/learn/${link.slug}`;
  }
}

export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  structure: string[];
  strategies: { title: string; body: string }[];
  benchmarks: { metric: string; typical: string; note?: string }[];
  pitfalls: string[];
  caseStudySlugs: string[];
  starterKit: StarterKitLink[];
};

export type StrategyCategory =
  | "Growth & expansion"
  | "Market position & differentiation"
  | "Pricing & monetization"
  | "Platform & network effects"
  | "Competitive moats & defense"
  | "Customer growth loops"
  | "Operations & execution systems"
  | "Pricing psychology & negotiation"
  | "Guerrilla & attention marketing";

export const STRATEGY_CATEGORIES: StrategyCategory[] = [
  "Growth & expansion",
  "Market position & differentiation",
  "Pricing & monetization",
  "Platform & network effects",
  "Competitive moats & defense",
  "Customer growth loops",
  "Operations & execution systems",
  "Pricing psychology & negotiation",
  "Guerrilla & attention marketing",
];

export type Strategy = {
  slug: string;
  name: string;
  category: StrategyCategory;
  definition: string;
  originExample: string;
  whenToUse: string;
  whenItBackfires: string;
  relatedLink?: StarterKitLink;
  industrySlugs?: string[];
};

export type CaseStudyKind = "build" | "pivot" | "turnaround" | "failure";

export const CASE_STUDY_KIND_LABEL: Record<CaseStudyKind, string> = {
  build: "Build story",
  pivot: "Pivot",
  turnaround: "Turnaround",
  failure: "Failure pattern",
};

export type CaseStudy = {
  slug: string;
  title: string;
  kind: CaseStudyKind;
  industrySlug: string;
  strategySlug?: string;
  summary: string;
  story: string[];
  lesson: string;
};

export type GlossaryCategory = "Finance" | "Marketing" | "Sales" | "Operations" | "People" | "Strategy";

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  "Finance",
  "Marketing",
  "Sales",
  "Operations",
  "People",
  "Strategy",
];

export type GlossaryTerm = {
  term: string;
  category: GlossaryCategory;
  definition: string;
};

export type TemplateBlock =
  | { type: "field"; label: string; placeholder?: string; multiline?: boolean }
  | { type: "clause"; heading?: string; text: string };

export type DocTemplate = {
  slug: string;
  title: string;
  category: string;
  description: string;
  blocks: TemplateBlock[];
};

export type ComplianceTopic = {
  slug: string;
  title: string;
  appliesTo: string[];
  summary: string;
  points: { heading: string; body: string }[];
};
