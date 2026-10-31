import { GLOSSARY } from "./glossary";
import type { GlossaryTerm } from "./knowledgeTypes";
import { GLOSSARY_DETAILS_1 } from "./glossaryDetails1";
import { GLOSSARY_DETAILS_2 } from "./glossaryDetails2";

export type GlossaryDetail = {
  explain: string;
  formula?: string;
  example: string;
  why: string;
  mistake: string;
  related: string[];
  link?: { href: string; label: string };
};

const DETAILS: Record<string, GlossaryDetail> = { ...GLOSSARY_DETAILS_1, ...GLOSSARY_DETAILS_2 };

/** "CAC (customer acquisition cost)" → "cac"; "Just-in-time (JIT)" → "just-in-time". */
export function glossarySlug(term: string) {
  return term
    .replace(/\(.*\)/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type GlossaryEntry = GlossaryTerm & { slug: string; detail?: GlossaryDetail };

export const GLOSSARY_ENTRIES: GlossaryEntry[] = GLOSSARY.map((g) => ({
  ...g,
  slug: glossarySlug(g.term),
  detail: DETAILS[g.term],
}));

export function getGlossaryEntry(slug: string) {
  return GLOSSARY_ENTRIES.find((g) => g.slug === slug);
}

export function getGlossaryEntryByTerm(term: string) {
  return GLOSSARY_ENTRIES.find((g) => g.term === term);
}

/** "CAC (customer acquisition cost)" → "CAC (Customer Acquisition Cost)" for titles. */
export function displayTerm(term: string) {
  return term.replace(/\(([^)]+)\)/, (_, inner: string) =>
    `(${inner.replace(/\b\w/g, (c) => c.toUpperCase())})`,
  );
}
