import type { Worksheet } from "./worksheets";

export const WORKSHEETS_B: Worksheet[] = [
  // ---------- MONEY & FINANCE ----------
  {
    slug: "cash-projection",
    title: "90-day cash projection",
    category: "Money & finance",
    question: "Do I know what my bank balance looks like in three months?",
    description:
      "Financial planning starts with one discipline: projecting collections against payments, month by month, before the month begins.",
    blocks: [
      { type: "list", label: "Problems you're facing today because of missing financial planning", count: 3 },
      { type: "text", label: "Month 1 — expected collections vs total payments (materials, wages, salaries, rent, interest, EMIs). Write both numbers and the net.", rows: 3 },
      { type: "text", label: "Month 2 — same three numbers", rows: 3 },
      { type: "text", label: "Month 3 — same three numbers", rows: 3 },
      { type: "text", label: "Which month looks tight, and what will you do about it now — not then?" },
    ],
  },
  {
    slug: "working-capital-allocator",
    title: "Working capital allocator",
    category: "Money & finance",
    question: "Is my money working or sleeping?",
    description:
      "Money locked in fixed assets looks impressive and earns nothing. Decide deliberately how much capital works in the business day to day.",
    blocks: [
      { type: "text", label: "From your balance sheet: how much is in fixed assets vs working capital? Write both." },
      { type: "checklist", label: "Where would extra working capital earn the most right now?", options: ["Better technology or tooling", "Bulk raw material at better rates", "New products in the line", "More or better people", "Marketing that's already proven", "Faster delivery capability"] },
      { type: "text", label: "Which fixed asset could be rented, shared, or sold to free cash?" },
      { type: "text", label: "Your target split (e.g. 60% working / 40% fixed) and the first reallocation move" },
    ],
  },
  {
    slug: "borrowing-readiness",
    title: "Borrowing readiness check",
    category: "Money & finance",
    question: "Should I take that loan?",
    description:
      "Borrowing is fuel or fire depending on three ratios. Check them before the bank does.",
    blocks: [
      { type: "text", label: "Why exactly do you want to borrow? (growth asset vs plugging losses — be honest)", rows: 3 },
      { type: "text", label: "Debt-to-equity = total loans ÷ owner's investment. Write yours. (Healthy: under 2)" },
      { type: "text", label: "Interest cover = yearly operating profit ÷ yearly interest. Write yours. (Healthy: 1.5–2.5+)" },
      { type: "text", label: "Repayment cover = cash profit ÷ (interest + principal due). Write yours. (Healthy: 1.5+)" },
      { type: "choice", label: "Verdict after seeing the ratios", options: ["Borrow — the numbers support it", "Borrow less than planned", "Fix profitability first, then borrow", "Don't borrow — restructure instead"] },
    ],
  },
  {
    slug: "roi-check",
    title: "Project ROI check",
    category: "Money & finance",
    question: "Is this project worth my money?",
    description:
      "Before any new machine, branch or campaign: estimate return on investment honestly, and compare it against what a fixed deposit would pay you for zero effort.",
    blocks: [
      { type: "text", label: "The project or investment you're evaluating" },
      { type: "text", label: "Total money going in (include the costs you're tempted to ignore: setup, people, your time)" },
      { type: "text", label: "Realistic yearly return it will generate, in rupees" },
      { type: "text", label: "ROI % = return ÷ investment × 100. Write it. Would it beat ~12% (roughly what passive alternatives pay, with no risk and no sweat)?" },
      { type: "choice", label: "Decision", options: ["Proceed — clears the bar with margin", "Renegotiate costs, then proceed", "Pilot small before full investment", "Drop it — the FD wins"] },
    ],
  },
  {
    slug: "profit-ratios",
    title: "Profit ratio snapshot",
    category: "Money & finance",
    question: "Am I profitable, or just busy?",
    description:
      "Three numbers tell the truth about profitability: gross margin, net margin, and return on the capital you've employed.",
    blocks: [
      { type: "text", label: "Gross margin % = (revenue − direct costs) ÷ revenue. Write yours for the last year." },
      { type: "text", label: "Net margin % = profit after everything ÷ revenue. Write yours." },
      { type: "text", label: "Return on capital % = operating profit ÷ total capital employed. Write yours." },
      { type: "text", label: "Compare: does your return on capital beat a bank FD? If not, the business is consuming wealth, not creating it. What changes?", rows: 3 },
    ],
  },
  {
    slug: "value-at-risk",
    title: "Value at risk",
    category: "Money & finance",
    question: "How much can this venture actually lose me?",
    description:
      "Before starting anything new, write down the worst-case number — the total you could lose if it fails completely. Fear shrinks when it has a number.",
    blocks: [
      { type: "text", label: "The new project, branch or venture" },
      { type: "list", label: "Everything at risk: deposits, fit-out, equipment, staff costs, stock, your time…", count: 5 },
      { type: "text", label: "Total worst-case loss, in rupees" },
      { type: "choice", label: "Can you absorb that loss without endangering the core business?", options: ["Yes, comfortably", "Yes, but it would hurt for a year", "No — it could sink the main business"] },
      { type: "text", label: "How will you cap the downside? (rent don't buy, pilot first, partner, phase the spend…)" },
    ],
  },
  {
    slug: "passive-income-score",
    title: "Passive income score",
    category: "Money & finance",
    question: "Does my business pay me when I'm not there?",
    description:
      "Six questions separate an income machine from a self-built job. Score each from 1 (worst) to 5 (best).",
    blocks: [
      { type: "rating", label: "Does income arrive soon after effort? (1 = long delays)", max: 5 },
      { type: "rating", label: "Is the income regular and predictable?", max: 5 },
      { type: "rating", label: "Is the cash flow sustainable across seasons and shocks?", max: 5 },
      { type: "rating", label: "Does cash flow grow without proportional new effort?", max: 5 },
      { type: "rating", label: "How free is your personal time? (1 = business owns you)", max: 5 },
      { type: "rating", label: "How free are you from being physically present?", max: 5 },
      { type: "text", label: "Your lowest score — what system, person or product would raise it?", rows: 3 },
    ],
  },
  // ---------- PEOPLE & CULTURE ----------
  {
    slug: "capable-manpower",
    title: "Critical capability map",
    category: "People & culture",
    question: "Is my most important department in capable hands?",
    description:
      "Find the department your success depends on, its five critical activities, and whether the people running them can actually run them.",
    blocks: [
      { type: "text", label: "The single most critical department for your success right now" },
      { type: "list", label: "Its five critical activities — the ones that take it to the next level", count: 5 },
      { type: "list", label: "The people you'd trust with these activities", count: 3 },
      { type: "text", label: "Rate each person 1–10 on capability for their activity. Who has a gap?", rows: 3 },
      { type: "choice", label: "For the biggest gap, the answer is…", options: ["Train the person (skill gap)", "Move them to a better-fit role", "Hire above them", "Redesign the activity"] },
    ],
  },
  {
    slug: "talent-engagement",
    title: "Engagement lift plan",
    category: "People & culture",
    question: "Do my people bring their brains to work, or just their hands?",
    description:
      "Disengaged teams execute instructions; engaged teams solve problems. Score today, set a 100-day target, and pick deliberate engagement moves.",
    blocks: [
      { type: "rating", label: "Employee engagement today, honestly" },
      { type: "rating", label: "Where it must be in 100 days" },
      { type: "checklist", label: "Engagement moves you'll actually start", options: ["Weekly one-on-ones with direct reports", "Public recognition ritual (weekly)", "Clear growth paths per role", "Skill training budget per person", "Involve team in one real decision monthly", "Share monthly numbers openly with the team", "Celebrate customer wins together", "Exit interviews that actually change things"] },
      { type: "list", label: "Three strategic changes to how you lead", count: 3 },
      { type: "text", label: "Which team member will you personally re-engage first, and how?" },
    ],
  },
  {
    slug: "training-evaluation",
    title: "Training that sticks",
    category: "People & culture",
    question: "Does my training change behaviour or just fill a day?",
    description:
      "Training works when it has a named skill gap, a deadline, and a four-level check: did they like it, learn it, use it, and did results move?",
    blocks: [
      { type: "text", label: "Training goal statement: I will train ___ on ___ by ___ (date)" },
      { type: "list", label: "The three skills most lagging in your team", count: 3 },
      { type: "rating", label: "Current skill level of the person/team on skill #1", max: 5 },
      { type: "text", label: "How will you check the four levels: reaction (did they engage), learning (can they explain it), behaviour (do they do it), results (did numbers move)?", rows: 4 },
      { type: "text", label: "After the first session — what went well, what went wrong, what will you improve?", rows: 3 },
    ],
  },
  {
    slug: "esop-designer",
    title: "Ownership pool designer",
    category: "People & culture",
    question: "How do I make key people think like owners?",
    description:
      "Salary rents hands; ownership buys hearts. Decide who earns equity or profit-share, on what criteria, and how much.",
    blocks: [
      { type: "checklist", label: "Selection criteria — what earns a share of ownership?", options: ["Grows sales measurably", "Cuts costs measurably", "Improves profitability", "Builds customer satisfaction & reputation", "Long loyal tenure", "Irreplaceable skill or relationships"] },
      { type: "list", label: "People who meet the bar today", count: 4 },
      { type: "text", label: "Pool size — what % of shares (or profit) are you willing to set aside?" },
      { type: "text", label: "Vesting — over how many years is it earned, and what happens if they leave early?", rows: 3 },
      { type: "text", label: "If formal equity is too heavy: what profit-share formula gets 80% of the effect?" },
    ],
  },
  {
    slug: "navratna-mentoring",
    title: "Gem cultivation",
    category: "People & culture",
    question: "Who are my nine gems, and am I growing them?",
    description:
      "Every strong business has a handful of people who could run it tomorrow. Identify one, map their drives, and mentor them on a schedule.",
    blocks: [
      { type: "text", label: "Name your gem — the person with the most untapped potential" },
      { type: "text", label: "Their strongest competency (7/10+) and their weakest (3/10) — write both" },
      { type: "text", label: "Their inner map: what do they do to unwind, what do they aspire to, what are they proficient at, what problem weighs on them?", rows: 4 },
      { type: "text", label: "Their new role statement and goal statement — one line each", rows: 3 },
      { type: "text", label: "Your next mentoring conversation — date, time, and the one topic" },
    ],
  },
  {
    slug: "change-conversation",
    title: "Change conversation planner",
    category: "People & culture",
    question: "How do I change someone's behaviour without a fight?",
    description:
      "Behaviour changes when a person sees the full ledger themselves: what improves if they change, what it costs, and what happens if nothing changes.",
    blocks: [
      { type: "text", label: "Team member and the specific behaviour change you need" },
      { type: "list", label: "If the change happens — what do THEY gain?", count: 3 },
      { type: "list", label: "If the change happens — what does it cost them (be fair)?", count: 2 },
      { type: "list", label: "If nothing changes — what do they lose over a year?", count: 3 },
      { type: "text", label: "Draft your opening lines for the conversation — invitation, not accusation", rows: 3 },
    ],
  },
  {
    slug: "performance-culture",
    title: "High-performance story",
    category: "People & culture",
    question: "Does my team know why the work matters?",
    description:
      "High performance is 1% vision and 99% alignment. Give the team a compelling story, expected results, and the support each result needs.",
    blocks: [
      { type: "text", label: "The goal, in one sentence" },
      { type: "text", label: "The compelling story — why this goal matters to customers, the team, and each person's own growth. Write it as you'd say it aloud.", rows: 5 },
      { type: "list", label: "Expected results, each with an owner and a number", count: 3 },
      { type: "list", label: "The support each result needs from you (tools, budget, air cover)", count: 3 },
      { type: "text", label: "Where and when will you retell this story every single week?" },
    ],
  },
  {
    slug: "replace-yourself",
    title: "Replace yourself",
    category: "People & culture",
    question: "What am I doing that someone else should be?",
    description:
      "List what your week actually contains, decide what only you can do, and hand over the rest with a named person and date.",
    blocks: [
      { type: "list", label: "Tasks you personally did this week", count: 6 },
      { type: "list", label: "Of those — which truly need YOU? (founder-only work: vision, key relationships, top hires)", count: 3 },
      { type: "list", label: "Tasks to delegate, each with a name attached", count: 3 },
      { type: "text", label: "The training or documentation each handover needs, and the date it completes", rows: 3 },
      { type: "text", label: "What will you do with the reclaimed hours? (Be specific or they'll evaporate)" },
    ],
  },
  {
    slug: "core-values",
    title: "Core value charter",
    category: "People & culture",
    question: "What does my organisation refuse to compromise on?",
    description:
      "Values are only real when they cost you something. Define the belief, the story that proves it, the people who carry it, and the milestones that test it.",
    blocks: [
      { type: "text", label: "The core belief of your organisation — one sentence, no jargon" },
      { type: "text", label: "The story — a real moment when the business chose this belief over easy money", rows: 4 },
      { type: "list", label: "The carriers — people who already live this value", count: 3 },
      { type: "list", label: "Milestones with action steps where the value must show up next", count: 3 },
    ],
  },
  // ---------- PERSONAL MASTERY ----------
  {
    slug: "seven-step-goals",
    title: "Seven-step goal system",
    category: "Personal mastery",
    question: "How do I actually finish what I start?",
    description:
      "A goal survives contact with reality when it has difficulties pre-listed, rituals scheduled, measures defined, and a review loop.",
    blocks: [
      { type: "text", label: "Goal statement — I will do WHAT by WHEN" },
      { type: "list", label: "Potential difficulties you'll face", count: 3 },
      { type: "list", label: "Matching possibilities — how each difficulty converts to an opening", count: 3 },
      { type: "list", label: "Success rituals — daily/weekly actions that make progress automatic", count: 3 },
      { type: "list", label: "Measures of success — the numbers that prove movement", count: 3 },
      { type: "rating", label: "Weekly review — rate this week's execution" },
      { type: "text", label: "Improvement cycle: what went well, what went wrong, what could be improved?", rows: 3 },
    ],
  },
  {
    slug: "main-thing-calendar",
    title: "Main-thing calendar",
    category: "Personal mastery",
    question: "Why am I busy all day but the business doesn't move?",
    description:
      "Busyness dies when the day gets a spine: your prime hours belong to the main thing; everything else fights for the leftovers.",
    blocks: [
      { type: "text", label: "Your goal for the next 4 weeks — one line" },
      { type: "text", label: "Your prime block (e.g. 9 am–1 pm) — which hours will be protected for main-thing work only?" },
      { type: "list", label: "The 5 main-thing tasks for week 1 (prime block only)", count: 5 },
      { type: "list", label: "The 'multiple things' that must wait for afternoons — meetings, errands, calls", count: 4 },
      { type: "text", label: "Who or what usually invades your prime block, and what's your defence?" },
    ],
  },
  {
    slug: "solitude-ritual",
    title: "Sixty-minute solitude",
    category: "Personal mastery",
    question: "When did I last think, uninterrupted, for an hour?",
    description:
      "One daily hour of deliberate solitude — reading, reflection, planning — compounds into judgement no competitor can copy. Design the ritual and log a week.",
    blocks: [
      { type: "text", label: "Your goal for this season, one line — the ritual serves this" },
      { type: "list", label: "Current influences on your thinking (people, feeds, media) — honest list", count: 3 },
      { type: "list", label: "Upgraded influences you'll deliberately add (books, mentors, journals)", count: 3 },
      { type: "text", label: "The slot — which fixed 60 minutes, where, doing what (read / write / plan / review)?" },
      { type: "text", label: "After one week: key learnings from each session and a rating out of 10", rows: 4 },
    ],
  },
  {
    slug: "speed-resolution",
    title: "Resolution accelerator",
    category: "Personal mastery",
    question: "Why do my resolutions stall after week two?",
    description:
      "Speed of implementation separates dreamers from builders: one steel resolution, its pitfalls pre-named, consistent actions, and recruited support.",
    blocks: [
      { type: "text", label: "Your focused resolution — one sentence, steel-strong, no escape hatches", rows: 2 },
      { type: "list", label: "Potential pitfalls — what will cause stagnation?", count: 4 },
      { type: "list", label: "Pre-planned actions you can practise with consistency", count: 4 },
      { type: "list", label: "Recruited support — people who will hold you to it", count: 2 },
      { type: "text", label: "What will you do within 24 hours of writing this?" },
    ],
  },
  {
    slug: "thoughtful-response",
    title: "Response over reaction",
    category: "Personal mastery",
    question: "How much does my temper cost my business?",
    description:
      "Leadership is the gap between stimulus and response. Replay one incident, price the reaction, and script the response for next time.",
    blocks: [
      { type: "text", label: "A recent event where you reacted without thinking — what happened?", rows: 3 },
      { type: "text", label: "The outcome of that thoughtless reaction — relationship, money, morale" },
      { type: "text", label: "Rewrite it: the thoughtful response you'd give with a 10-second pause", rows: 3 },
      { type: "list", label: "Your triggers — situations where reaction hijacks you", count: 3 },
      { type: "text", label: "Your circuit-breaker — the physical pause ritual you'll use (breath, count, walk, water)" },
    ],
  },
  {
    slug: "reframe-incident",
    title: "Reframe the setback",
    category: "Personal mastery",
    question: "Can I see this problem better than it looks?",
    description:
      "The event is fixed; its meaning is negotiable. Take one setback and deliberately shift both psychology and physiology.",
    blocks: [
      { type: "text", label: "The incident weighing on you — describe it plainly", rows: 3 },
      { type: "list", label: "Psychology shifts — three more useful ways to read this event", count: 3 },
      { type: "list", label: "Physiology shifts — three body-level changes (posture, exercise, sleep, morning routine)", count: 3 },
      { type: "text", label: "One sentence: what this setback makes possible that wasn't before" },
    ],
  },
  {
    slug: "mighty-why",
    title: "The mighty why",
    category: "Personal mastery",
    question: "Is my reason strong enough to survive the hard months?",
    description:
      "Skill decides how far you go; your why decides whether you keep going. Write it deep enough that quitting becomes embarrassing.",
    blocks: [
      { type: "text", label: "Your mighty why — the real reason behind your goal. Go three layers deeper than money.", rows: 5 },
      { type: "text", label: "Who is watching you succeed or fail — and what does your success make possible for them?", rows: 3 },
      { type: "text", label: "The day you'll want to quit: describe it in advance, and write what you'll re-read that day", rows: 4 },
      { type: "list", label: "Three visible reminders of the why you'll place in your daily environment", count: 3 },
    ],
  },
  {
    slug: "effectiveness-audit",
    title: "Interpersonal effectiveness audit",
    category: "Personal mastery",
    question: "Am I as easy to work with as I think?",
    description:
      "Rate yourself honestly on the behaviours that decide whether people bring you truth or manage you. Then have someone who knows you rate you too.",
    blocks: [
      { type: "rating", label: "I can calm myself under stress", max: 5 },
      { type: "rating", label: "I think before I speak (not the reverse)", max: 5 },
      { type: "rating", label: "I model the standards I demand from others", max: 5 },
      { type: "rating", label: "In conflict I protect the relationship while getting needs met", max: 5 },
      { type: "rating", label: "My feedback is based on patterns, not one-off moods", max: 5 },
      { type: "rating", label: "I listen fully before forming my answer", max: 5 },
      { type: "text", label: "Ask one colleague to score you on the same six. Where do the two scores disagree most, and what does that tell you?", rows: 3 },
    ],
  },
  // ---------- FROM BUSINESS KA BOOSTER ----------
  {
    slug: "bant-lead-scoring",
    title: "BANT lead scoring",
    category: "Customers",
    question: "Which leads actually deserve my time today?",
    description:
      "Chasing every lead equally wastes time on the ones that were never going to close. Score budget, authority, need and timeline before your next call.",
    blocks: [
      { type: "list", label: "Your top 5 open leads right now", count: 5 },
      { type: "text", label: "Budget — which of these leads can actually afford this?", rows: 2 },
      { type: "text", label: "Authority — which are you talking to the real decision maker for, not just an influencer?", rows: 2 },
      { type: "text", label: "Need — which have a clear, specific need you could name back to them?", rows: 2 },
      { type: "text", label: "Timeline — which have a realistic timeline to act this month or quarter?", rows: 2 },
      { type: "text", label: "Based on all four, which lead gets your first call today — and why?" },
    ],
  },
  {
    slug: "mcd-leadership-check",
    title: "MCD leadership check",
    category: "People & culture",
    question: "Am I managing, coaching or delegating — and is it the right mode for this person?",
    description:
      "Managing, coaching and delegating are zoom levels, not personality types. Check whether you're using the right one per person.",
    blocks: [
      { type: "list", label: "Name your key team members", count: 4 },
      { type: "text", label: "For each name above, write which mode you currently use with them: managing (zoom in), coaching (zoom mid), or delegating (zoom out)", rows: 4 },
      { type: "text", label: "Which one is ready to move up a zoom level? What's actually stopping you from moving them?", rows: 3 },
      { type: "text", label: "Which one was pushed to delegate mode before they had the judgement to carry it, and needs to move back to coaching?", rows: 2 },
    ],
  },
  {
    slug: "stay-interview-plan",
    title: "Stay interview plan",
    category: "People & culture",
    question: "Who might I lose, and can I fix it before they decide to leave?",
    description:
      "Attrition costs multiples of a salary. A conversation before someone decides to leave is worth far more than the one after.",
    blocks: [
      { type: "list", label: "Name the 3 people you'd be most worried to lose this year", count: 3 },
      { type: "text", label: "For your top-priority person — what would make them consider leaving today?", rows: 3 },
      { type: "text", label: "What would make them want to stay for another two years?", rows: 3 },
      { type: "checklist", label: "Which questions will you actually ask them?", options: ["What part of your work energises you most right now?", "What would make your work easier?", "Do you feel recognised for what you contribute?", "Is anything close to making you look elsewhere?", "What would you change about how we work, if you could?", "Where do you want to be in two years, and are we building toward it?"] },
      { type: "text", label: "Schedule the conversation — date, and what you'll do with what you learn" },
    ],
  },
  {
    slug: "five-as-funnel-audit",
    title: "5 As funnel audit",
    category: "Customers",
    question: "Where exactly do people drop off between hearing about me and recommending me?",
    description:
      "Awareness, appeal, ask, act and advocate map the whole journey. Rate each stage honestly and find the one gap worth fixing first.",
    blocks: [
      { type: "rating", label: "Awareness — how many of your target audience have even heard of you?" },
      { type: "rating", label: "Appeal — of those who know you, how many actually like what they see?" },
      { type: "rating", label: "Ask — of those who like you, how many actually inquire or ask questions?" },
      { type: "rating", label: "Act — of those who inquire, how many actually buy?" },
      { type: "rating", label: "Advocate — of those who buy, how many actively recommend you to others?" },
      { type: "text", label: "Which single gap between two adjacent stages is the biggest? What's the first fix?", rows: 3 },
    ],
  },
  {
    slug: "sop-builder",
    title: "SOP builder",
    category: "Strategy",
    question: "Could someone else run this process without asking me anything?",
    description:
      "Turn one process that only lives in your head into a document a competent stranger could actually follow.",
    blocks: [
      { type: "text", label: "Name the recurring process you keep having to explain or fix personally" },
      { type: "text", label: "What triggers this process to start, and what marks it as finished?", rows: 2 },
      { type: "list", label: "Write the exact steps, in order", count: 6 },
      { type: "text", label: "Who owns each step, and what does 'done correctly' look like?", rows: 3 },
      { type: "text", label: "Who will you hand this to — someone unfamiliar with the process — to test whether they can follow it without asking for help?" },
    ],
  },
];
