import type { Law, LawCategory, LawCategorySlug } from "./knowledgeTypes";
import { LAWS_BUSINESS } from "./lawsBusiness";
import { LAWS_ECONOMICS } from "./lawsEconomics";
import { LAWS_MARKETING } from "./lawsMarketing";
import { LAWS_PERSUASION } from "./lawsPersuasion";
import { LAWS_BIASES } from "./lawsBiases";
import { LAWS_PRODUCTIVITY, LAWS_LEADERSHIP } from "./lawsWork";

export const LAW_CATEGORIES: LawCategory[] = [
  {
    slug: "business-strategy",
    name: "Business & strategy laws",
    seoTitle: "Famous business laws and principles every owner should know",
    description:
      "The Pareto principle, Murphy's law, Goodhart's law, Gall's law and more — famous business laws explained in plain language with real examples and how to apply them.",
    intro:
      "The rules of thumb that keep showing up in companies of every size: where results really come from, why plans fail, and how incentives and systems behave once real people get involved.",
  },
  {
    slug: "economics-markets",
    name: "Economics & market laws",
    seoTitle: "Laws of economics explained for business owners",
    description:
      "Supply and demand, diminishing returns, comparative advantage, Jevons paradox, Veblen goods and more — economic laws explained simply, with business examples.",
    intro:
      "The economic forces behind every price tag, cost curve, and competitor move — explained without the textbook graphs, and translated into decisions you can make this week.",
  },
  {
    slug: "marketing-ux",
    name: "Marketing, sales & UX laws",
    seoTitle: "Laws of marketing and UX design that drive conversions",
    description:
      "The law of leadership, law of focus, rule of seven, Hick's law, Fitts's law, Jakob's law, the peak-end rule and more — marketing and UX laws with practical examples.",
    intro:
      "How customers notice, remember, and choose: positioning laws from classic marketing, plus the design laws that decide whether a page, a pack, or a store actually converts.",
  },
  {
    slug: "persuasion-psychology",
    name: "Persuasion & consumer psychology",
    seoTitle: "Laws of persuasion and consumer psychology",
    description:
      "Reciprocity, scarcity, social proof, authority, anchoring, loss aversion, the endowment and IKEA effects and more — the psychology of why customers buy, explained.",
    intro:
      "The psychological principles behind why people say yes — Cialdini's principles of influence and the behavioural-economics effects that shape every price, offer, and pitch. Use them honestly.",
  },
  {
    slug: "cognitive-biases",
    name: "Cognitive biases & decision-making",
    seoTitle: "Cognitive biases list: how they affect business decisions",
    description:
      "Dunning–Kruger, confirmation bias, sunk cost fallacy, survivorship bias, planning fallacy, halo effect and more — cognitive biases explained with business examples and fixes.",
    intro:
      "The predictable mental shortcuts that mislead owners, managers, and investors — and the simple habits that catch them before they turn into expensive decisions.",
  },
  {
    slug: "productivity-time",
    name: "Productivity & time laws",
    seoTitle: "Laws of productivity and time management",
    description:
      "Parkinson's law, Hofstadter's law, Carlson's law, Illich's law, Laborit's law, the ninety-ninety rule and more — productivity laws explained, with ways to apply them.",
    intro:
      "Why work expands, why everything takes longer than planned, and why the important task keeps getting pushed to tomorrow — plus the fixes that actually stick.",
  },
  {
    slug: "leadership-teams",
    name: "Leadership, teams & operations",
    seoTitle: "Laws of leadership, management and teams",
    description:
      "The Peter principle, Brooks's law, Conway's law, Price's law, Dunbar's number, the Pygmalion and Hawthorne effects, Little's law and more — management laws explained.",
    intro:
      "What happens to people, teams, and processes as a business grows — promotions, team size, coordination, expectations, and the maths of getting work through the system.",
  },
];

export const LAWS: Law[] = [
  ...LAWS_BUSINESS,
  ...LAWS_ECONOMICS,
  ...LAWS_MARKETING,
  ...LAWS_PERSUASION,
  ...LAWS_BIASES,
  ...LAWS_PRODUCTIVITY,
  ...LAWS_LEADERSHIP,
];

export function getLaw(slug: string) {
  return LAWS.find((l) => l.slug === slug);
}

export function getLawCategory(slug: string) {
  return LAW_CATEGORIES.find((c) => c.slug === slug);
}

export function lawsInCategory(slug: LawCategorySlug) {
  return LAWS.filter((l) => l.category === slug);
}

/** Short name for titles — drops the parenthetical, e.g. "Pareto Principle (80/20 Rule)" → "Pareto Principle". */
export function lawShortName(law: Law) {
  return law.name.replace(/\s*\(.*\)\s*$/, "");
}

/** FAQ entries built from the law's own fields, used on the page and in FAQPage structured data. */
export function lawFaqs(law: Law): { q: string; a: string }[] {
  const short = lawShortName(law);
  return [
    { q: `What is ${short}?`, a: `${law.oneLiner} ${law.explanation[0]}` },
    { q: `Who came up with ${short}?`, a: law.origin },
    {
      q: `How do you apply ${short} in business?`,
      a: law.apply.map((s, i) => `${i + 1}. ${s}`).join(" "),
    },
    { q: `What is a common misunderstanding of ${short}?`, a: law.misread },
  ];
}
