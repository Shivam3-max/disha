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

export type CaseRegion =
  | "North America"
  | "Europe"
  | "Asia-Pacific"
  | "India"
  | "Latin America"
  | "Middle East & Africa";

export const CASE_REGIONS: CaseRegion[] = [
  "North America",
  "Europe",
  "Asia-Pacific",
  "India",
  "Latin America",
  "Middle East & Africa",
];

export type CaseStudy = {
  slug: string;
  title: string;
  kind: CaseStudyKind;
  industrySlug: string;
  strategySlug?: string;
  summary: string;
  story: string[];
  lesson: string;
  /** Detailed-format fields (global case library). */
  company?: string;
  country?: string;
  region?: CaseRegion;
  period?: string;
  keyNumbers?: { label: string; value: string }[];
  timeline?: { year: string; event: string }[];
  /** What made it work — or, for failures, what went wrong. */
  drivers?: string[];
  takeaways?: string[];
  lawSlugs?: string[];
  /** Curated series the case belongs to, shown as its own hub. */
  collection?: "shark-tank-india";
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
  /** How-to guide shown under the template. */
  guide?: { intro: string[]; include: string[]; tips: string[]; faqs: { q: string; a: string }[] };
};

export type ComplianceTopic = {
  slug: string;
  title: string;
  appliesTo: string[];
  summary: string;
  points: { heading: string; body: string }[];
};

export type LawCategorySlug =
  | "business-strategy"
  | "economics-markets"
  | "marketing-ux"
  | "persuasion-psychology"
  | "cognitive-biases"
  | "productivity-time"
  | "leadership-teams";

export type LawCategory = {
  slug: LawCategorySlug;
  name: string;
  seoTitle: string;
  description: string;
  intro: string;
};

export type Law = {
  slug: string;
  name: string;
  aka?: string[];
  category: LawCategorySlug;
  oneLiner: string;
  origin: string;
  explanation: string[];
  examples: { title: string; body: string }[];
  apply: string[];
  misread: string;
  question: string;
  related: string[];
  strategySlugs?: string[];
  caseStudySlugs?: string[];
  link?: StarterKitLink;
};

export type CompanyAnalysis = {
  slug: string;
  name: string;
  /** Short descriptor shown under the name, e.g. "Dairy cooperative". */
  sector: string;
  industrySlug: string;
  founded: string;
  hq: string;
  overview: string[];
  swot: { strengths: string[]; weaknesses: string[]; opportunities: string[]; threats: string[] };
  model: {
    customers: string;
    value: string;
    revenue: string[];
    costs: string[];
    channels: string[];
    resources: string[];
  };
  marketing: {
    positioning: string;
    product: string;
    price: string;
    place: string;
    promotion: string;
    campaigns: string[];
  };
  takeaway: string;
  caseSlug?: string;
};
