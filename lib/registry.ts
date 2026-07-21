export type ToolMeta = {
  slug: string;
  no: string;
  title: string;
  category: "Grow revenue" | "Fix money" | "Beat competition" | "Build the team" | "Lead yourself" | "Plan strategy";
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
  {
    slug: "business-model-canvas",
    no: "11",
    title: "Business model canvas",
    category: "Plan strategy",
    question: "Does my business actually hang together as one system?",
    description:
      "Nine blocks — partners, activities, resources, value, relationships, channels, segments, costs, revenue — filled in side by side so the gaps become obvious.",
    minutes: 12,
  },
  {
    slug: "break-even-calculator",
    no: "12",
    title: "Break-even calculator",
    category: "Fix money",
    question: "How many units do I need to sell before I stop losing money?",
    description:
      "Three numbers — fixed costs, price, and variable cost per unit — tell you exactly where the floor is.",
    minutes: 4,
  },
  {
    slug: "cap-table-builder",
    no: "13",
    title: "Cap table builder",
    category: "Fix money",
    question: "Who actually owns how much of this business?",
    description:
      "List every shareholder and their stake, then model how a new funding round dilutes everyone.",
    minutes: 8,
  },
  {
    slug: "hiring-pipeline",
    no: "14",
    title: "Hiring pipeline tracker",
    category: "Build the team",
    question: "Where is every candidate stuck right now?",
    description:
      "A living board — applied, screening, interview, offer, hired — that remembers your candidates between visits.",
    minutes: 5,
  },
  {
    slug: "content-calendar",
    no: "15",
    title: "Content calendar",
    category: "Grow revenue",
    question: "What am I actually publishing this month?",
    description:
      "A running pipeline of content pieces by platform and status, so ideas stop dying in a notes app.",
    minutes: 6,
  },
  {
    slug: "competitor-matrix",
    no: "16",
    title: "Competitor comparison matrix",
    category: "Beat competition",
    question: "Where do I actually beat each competitor, head to head?",
    description:
      "Score yourself and every competitor on the same attributes, side by side, and see exactly where you're winning or exposed.",
    minutes: 8,
  },
  {
    slug: "cash-flow-simulator",
    no: "17",
    title: "Cash flow simulator",
    category: "Fix money",
    question: "What does my cash position look like six months from now?",
    description:
      "A month-by-month table of revenue, costs and profit that keeps a running cumulative cash total as you fill it in.",
    minutes: 10,
  },
  {
    slug: "swot-builder",
    no: "18",
    title: "SWOT builder",
    category: "Plan strategy",
    question: "What do I actually know about my position, laid out honestly?",
    description:
      "The four-quadrant classic — strengths, weaknesses, opportunities, threats — built as a living list instead of a static box.",
    minutes: 7,
  },
];

export const CATEGORIES = [
  "Grow revenue",
  "Fix money",
  "Beat competition",
  "Build the team",
  "Lead yourself",
  "Plan strategy",
] as const;

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}
