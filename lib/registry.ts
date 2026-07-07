export type ToolMeta = {
  slug: string;
  no: string;
  title: string;
  category: "Grow revenue" | "Fix money" | "Beat competition" | "Build the team" | "Lead yourself";
  question: string;
  description: string;
  minutes: number;
};

export const TOOLS: ToolMeta[] = [
  {
    slug: "revenue-multiplier",
    no: "01",
    title: "Revenue multiplier",
    category: "Grow revenue",
    question: "How do I increase my turnover?",
    description:
      "Your revenue is four numbers multiplied together. Nudge each lever a little and watch the compound effect on your topline.",
    minutes: 5,
  },
  {
    slug: "pricing-strategy",
    no: "02",
    title: "Pricing strategy picker",
    category: "Grow revenue",
    question: "Am I charging the right way?",
    description:
      "Twelve classic pricing models, matched to your product, market position and goal — with the trade-offs spelled out.",
    minutes: 7,
  },
  {
    slug: "acquisition-cost",
    no: "03",
    title: "Acquisition cost auditor",
    category: "Grow revenue",
    question: "What does each new customer really cost me?",
    description:
      "Compare your marketing channels by true cost per customer, then see which to double down on and which to cut.",
    minutes: 6,
  },
  {
    slug: "customer-lifetime",
    no: "04",
    title: "Customer lifetime value",
    category: "Grow revenue",
    question: "How much is one loyal customer worth?",
    description:
      "Work out what a customer is worth over their whole relationship with you — and how much you can afford to spend winning one.",
    minutes: 5,
  },
  {
    slug: "cash-runway",
    no: "05",
    title: "Cash flow runway",
    category: "Fix money",
    question: "How long can my business survive on current cash?",
    description:
      "Map money in against money out, find your monthly burn or surplus, and see your runway in plain months.",
    minutes: 6,
  },
  {
    slug: "inventory-turns",
    no: "06",
    title: "Inventory turns analyzer",
    category: "Fix money",
    question: "Which products are freezing my cash?",
    description:
      "Rank your products by how fast they turn. Spot dead stock, and get bundling and reorder strategies to free the cash.",
    minutes: 8,
  },
  {
    slug: "moat-builder",
    no: "07",
    title: "Moat builder",
    category: "Beat competition",
    question: "Why can't a competitor copy me tomorrow?",
    description:
      "Twenty ways businesses build barriers that keep competitors out and customers in. Score yourself, pick your next moat.",
    minutes: 8,
  },
  {
    slug: "advantage-test",
    no: "08",
    title: "Advantage stress test",
    category: "Beat competition",
    question: "Is my edge real or imaginary?",
    description:
      "Run each strength through four filters — valuable, rare, hard to copy, organized around — to see if it is a true advantage.",
    minutes: 7,
  },
  {
    slug: "hiring-scorecard",
    no: "09",
    title: "Hiring scorecard",
    category: "Build the team",
    question: "How do I stop hiring the wrong people?",
    description:
      "Define the role's real outcomes before you meet anyone, then score every candidate against the same sheet.",
    minutes: 9,
  },
  {
    slug: "goal-arrow",
    no: "10",
    title: "Goal arrow",
    category: "Lead yourself",
    question: "Why haven't I reached my goal yet?",
    description:
      "A guided sequence that moves you from vague ambition to a measurable goal, an honest current reality, and the next three actions.",
    minutes: 10,
  },
];

export const CATEGORIES = [
  "Grow revenue",
  "Fix money",
  "Beat competition",
  "Build the team",
  "Lead yourself",
] as const;

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}
