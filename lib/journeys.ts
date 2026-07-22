import { JOURNEYS_2 } from "./journeys2";
import { JOURNEYS_3 } from "./journeys3";

export type JourneyStep = {
  kind: "tool" | "framework";
  slug: string;
  title: string;
  why: string;
};

export type JourneyCategory =
  | "Sales & revenue"
  | "Marketing & visibility"
  | "Pricing & profit"
  | "Money & cash flow"
  | "Customers & retention"
  | "Team & hiring"
  | "Operations & systems"
  | "Competition & strategy"
  | "Growth & expansion"
  | "Founder & personal";

export const JOURNEY_CATEGORIES: JourneyCategory[] = [
  "Sales & revenue",
  "Marketing & visibility",
  "Pricing & profit",
  "Money & cash flow",
  "Customers & retention",
  "Team & hiring",
  "Operations & systems",
  "Competition & strategy",
  "Growth & expansion",
  "Founder & personal",
];

export type Journey = {
  slug: string;
  category: JourneyCategory;
  symptom: string;
  title: string;
  description: string;
  steps: JourneyStep[];
};

export const JOURNEYS_1: Journey[] = [
  {
    slug: "sales-have-stalled",
    category: "Sales & revenue",
    symptom: "“Sales have gone flat and I don’t know why.”",
    title: "Sales have stalled",
    description:
      "Before touching the product, find out where the leak actually is — acquisition, price, or delivery — then fix that one thing.",
    steps: [
      { kind: "tool", slug: "acquisition-cost", title: "Acquisition cost auditor", why: "Rule out that your channels have simply gotten more expensive per customer." },
      { kind: "tool", slug: "pricing-strategy", title: "Pricing strategy picker", why: "Check whether your pricing model still fits your position — flat sales sometimes mean the wrong model, not the wrong product." },
      { kind: "tool", slug: "revenue-multiplier", title: "Revenue multiplier", why: "See which single lever — customers, ticket size, frequency, or price — has the most room to move." },
      { kind: "framework", slug: "ad-campaign-blueprint", title: "Ad campaign blueprint", why: "Rebuild the actual campaign copy if the real issue is a weak or stale message." },
      { kind: "framework", slug: "cx-touchpoints", title: "Experience touchpoint audit", why: "Rule out that customers are trying you and quietly leaving unhappy." },
    ],
  },
  {
    slug: "cash-is-always-tight",
    category: "Money & cash flow",
    symptom: "“I'm profitable on paper but the bank balance never agrees.”",
    title: "Cash is always tight",
    description:
      "Profit and cash are different animals. Find where your money is stuck before you cut anything or borrow anything.",
    steps: [
      { kind: "tool", slug: "cash-runway", title: "Cash flow runway", why: "Get the honest number: how many months you can survive at today's burn rate." },
      { kind: "framework", slug: "cash-projection", title: "90-day cash projection", why: "Project the next three months so surprises become visible weeks in advance." },
      { kind: "framework", slug: "working-capital-allocator", title: "Working capital allocator", why: "Check if money is sitting idle in fixed assets instead of working day to day." },
      { kind: "tool", slug: "inventory-turns", title: "Inventory turns analyzer", why: "Find out how much cash is frozen in slow-moving stock." },
      { kind: "framework", slug: "borrowing-readiness", title: "Borrowing readiness check", why: "If a loan is genuinely the answer, verify the ratios support it before you sign." },
    ],
  },
  {
    slug: "customers-dont-come-back",
    category: "Customers & retention",
    symptom: "“People try me once and I never see them again.”",
    title: "Customers don't come back",
    description:
      "One-time customers are the most expensive kind. Find the exact touchpoint where trust breaks, then make leaving inconvenient.",
    steps: [
      { kind: "framework", slug: "cx-touchpoints", title: "Experience touchpoint audit", why: "Score product, sales, service and communication separately — the leak is rarely everywhere at once." },
      { kind: "framework", slug: "nps-engine", title: "Recommendation score engine", why: "Ask the one question that predicts repeat behaviour better than a satisfaction survey." },
      { kind: "framework", slug: "service-ladder", title: "Service maturity ladder", why: "Find out if complaints even reach you before customers quietly disappear." },
      { kind: "tool", slug: "customer-lifetime", title: "Customer lifetime value", why: "Put a rupee number on what fixing retention is actually worth." },
      { kind: "framework", slug: "switching-barriers", title: "Switching barrier designer", why: "Make staying the easy choice, not just the good experience." },
    ],
  },
  {
    slug: "competitor-could-copy-me",
    category: "Competition & strategy",
    symptom: "“A well-funded competitor could copy my whole business tomorrow.”",
    title: "A competitor could copy me tomorrow",
    description:
      "Find out honestly whether you have a real moat or just a temporary lead, then build the one barrier that would actually hold.",
    steps: [
      { kind: "tool", slug: "advantage-test", title: "Advantage stress test", why: "Test each strength you believe you have against four honest filters." },
      { kind: "tool", slug: "moat-builder", title: "Moat builder", why: "See the full menu of twenty barriers and score what you actually hold today." },
      { kind: "framework", slug: "switching-barriers", title: "Switching barrier designer", why: "Even without a legal moat, make switching away from you costly." },
      { kind: "framework", slug: "positioning-statement", title: "Positioning rewrite", why: "Make sure the market actually knows the advantage you've built." },
      { kind: "framework", slug: "credibility-5r", title: "Credibility ladder", why: "Turn your advantage into trust signals competitors can't fake overnight." },
    ],
  },
  {
    slug: "cant-find-good-people",
    category: "Team & hiring",
    symptom: "“I can't find good people, and the ones I hire don't stay.”",
    title: "Can't find or keep good people",
    description:
      "Hiring problems are usually definition problems. Get precise about the role and the culture before blaming the job market.",
    steps: [
      { kind: "framework", slug: "capable-manpower", title: "Critical capability map", why: "Find out if the department itself, not the hiring process, is the real gap." },
      { kind: "tool", slug: "hiring-scorecard", title: "Hiring scorecard", why: "Define the role by measurable outcomes before you meet a single candidate." },
      { kind: "framework", slug: "talent-engagement", title: "Engagement lift plan", why: "New hires leave engaged teams less often — check the team they're joining." },
      { kind: "framework", slug: "training-evaluation", title: "Training that sticks", why: "Make sure people who stay are actually being developed, not just onboarded." },
      { kind: "framework", slug: "core-values", title: "Core value charter", why: "People stay for a culture with a real, lived belief — write yours down and mean it." },
    ],
  },
  {
    slug: "business-cant-run-without-me",
    category: "Operations & systems",
    symptom: "“If I take a week off, everything stalls.”",
    title: "The business doesn't run without me",
    description:
      "Founder dependency isn't solved by working harder. It's solved by naming what only you should do, and building people and systems for the rest.",
    steps: [
      { kind: "framework", slug: "replace-yourself", title: "Replace yourself", why: "Get an honest list of what you did this week that someone else should be doing." },
      { kind: "framework", slug: "execution-scoreboard", title: "Execution scoreboard", why: "Build a review rhythm that doesn't depend on you personally checking everything." },
      { kind: "framework", slug: "capable-manpower", title: "Critical capability map", why: "Find who on the team is ready for more ownership, and where the gap really is." },
      { kind: "framework", slug: "navratna-mentoring", title: "Gem cultivation", why: "Deliberately grow the one or two people who could eventually run this without you." },
      { kind: "tool", slug: "goal-arrow", title: "Goal arrow", why: "Set your own next chapter — freed time is only valuable if it's aimed at something." },
    ],
  },
  {
    slug: "want-to-grow-safely",
    category: "Growth & expansion",
    symptom: "“I want to grow, but I'm scared of breaking what already works.”",
    title: "Ready to grow, afraid to break it",
    description:
      "Expansion fails when it's a leap of faith. Make it a sequence: prove the model small, then multiply what's proven.",
    steps: [
      { kind: "framework", slug: "portfolio-audit", title: "Product portfolio audit", why: "Know exactly what's earning its keep today before you add anything new." },
      { kind: "framework", slug: "pilot-market", title: "Pilot market qualifier", why: "Pick one narrow segment or location to prove the expansion before committing fully." },
      { kind: "framework", slug: "non-customer-expansion", title: "Non-customer expansion", why: "Look for growth in people who want you but can't buy yet, before chasing new markets cold." },
      { kind: "framework", slug: "scale-up-plan", title: "Scale-up trio", why: "Check speed, scalability and sustainability aren't fighting each other in the growth plan." },
      { kind: "framework", slug: "roi-check", title: "Project ROI check", why: "Put a number on the expansion before you commit the capital." },
    ],
  },
  {
    slug: "busy-but-not-moving",
    category: "Founder & personal",
    symptom: "“I'm busy every single day, but the business isn't actually moving forward.”",
    title: "Busy all day, no real progress",
    description:
      "Busyness and progress are different things. Rebuild your calendar around the one thing that actually compounds.",
    steps: [
      { kind: "framework", slug: "main-thing-calendar", title: "Main-thing calendar", why: "Protect your best hours for the work that actually grows the business." },
      { kind: "framework", slug: "seven-step-goals", title: "Seven-step goal system", why: "Turn a vague ambition into a goal with rituals, measures, and a review loop." },
      { kind: "framework", slug: "solitude-ritual", title: "Sixty-minute solitude", why: "Build in the thinking time that busyness has been quietly crowding out." },
      { kind: "framework", slug: "speed-resolution", title: "Resolution accelerator", why: "Turn this week's intentions into a resolution that survives past day three." },
      { kind: "framework", slug: "mighty-why", title: "The mighty why", why: "Reconnect with the reason strong enough to keep this going on the hard days." },
    ],
  },
];

export const JOURNEYS: Journey[] = [...JOURNEYS_1, ...JOURNEYS_2, ...JOURNEYS_3];

export function getJourney(slug: string) {
  return JOURNEYS.find((j) => j.slug === slug);
}

export function stepSavedSlug(step: JourneyStep) {
  return step.kind === "tool" ? step.slug : `fw-${step.slug}`;
}

export function stepHref(step: JourneyStep) {
  return step.kind === "tool" ? `/tools/${step.slug}` : `/frameworks/${step.slug}`;
}
