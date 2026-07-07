import { WORKSHEETS_B } from "./worksheets2";

export type Block =
  | { type: "text"; label: string; hint?: string; rows?: number }
  | { type: "list"; label: string; count: number; hint?: string }
  | { type: "rating"; label: string; max?: number }
  | { type: "checklist"; label: string; options: string[]; hint?: string }
  | { type: "choice"; label: string; options: string[] };

export type WsCategory =
  | "Strategy"
  | "Marketing & brand"
  | "Customers"
  | "Money & finance"
  | "People & culture"
  | "Personal mastery";

export type Worksheet = {
  slug: string;
  title: string;
  category: WsCategory;
  question: string;
  description: string;
  blocks: Block[];
};

const WORKSHEETS_A: Worksheet[] = [
  // ---------- STRATEGY ----------
  {
    slug: "perfect-strategy",
    title: "The five perfects",
    category: "Strategy",
    question: "Is my whole strategy built around the right customer?",
    description:
      "Rebuild your strategy from first principles: the perfect problem, prospect, portfolio, positioning and profit — in that order.",
    blocks: [
      { type: "text", label: "Perfect problem — what problem is your customer struggling to solve on their own today?", rows: 3 },
      { type: "text", label: "Perfect prospect — describe your ideal customer: age, income, location, occupation, lifestyle, aspirations.", rows: 3 },
      { type: "list", label: "Perfect portfolio — your fast movers (high focus)", count: 3 },
      { type: "list", label: "Your slow or non-moving offerings (reduce or drop)", count: 3 },
      { type: "choice", label: "Perfect positioning — which single word should customers attach to you?", options: ["Best quality", "Most convenient", "Most affordable", "The specialist", "Most innovative", "Most trusted"] },
      { type: "text", label: "Perfect profit — what margin percentage will you defend, and how?" },
    ],
  },
  {
    slug: "critical-success-factors",
    title: "Critical success factors",
    category: "Strategy",
    question: "Which few numbers actually decide my success?",
    description:
      "Most businesses track everything and improve nothing. Pick the two or three factors that, if transformed, multiply your growth.",
    blocks: [
      { type: "list", label: "Three weak areas that, if transformed, could grow your business 5–10×", count: 3 },
      { type: "checklist", label: "Pick your 3 most critical factors from this menu", options: ["Profitability", "Customer satisfaction score", "Error rate", "Cycle / turnaround time", "Cost reduction", "Net promoter score", "Productivity", "Product range", "Repeat purchase rate", "References & referrals", "Customer loyalty", "Speed to market", "Revenue per customer", "Customer acquisition cost", "Customer lifetime value", "Concentration risk (few big clients)", "Monthly growth rate"], hint: "Choose exactly three — more than three means none" },
      { type: "text", label: "For your #1 factor: what is its number today, and what must it become in 90 days?" },
      { type: "list", label: "First three actions to move that number", count: 3 },
    ],
  },
  {
    slug: "pilot-market",
    title: "Pilot market qualifier",
    category: "Strategy",
    question: "Where should I launch first?",
    description:
      "Don't attack the whole market. Qualify one narrow beachhead segment, win it completely, then expand from strength.",
    blocks: [
      { type: "text", label: "The specific segment you're considering as your pilot market" },
      { type: "checklist", label: "Tick every statement that is true for this segment", options: ["They have money to spend", "My sales effort can actually reach them", "They have a compelling, urgent reason to buy", "I can deliver the complete solution (alone or with partners)", "Some would prepay or commit in advance", "Winning here opens a clear path to adjacent markets"], hint: "Five or six ticks = strong pilot. Three or fewer = keep looking." },
      { type: "text", label: "Persona — write a mini biography of the specific end user and decision maker", rows: 4 },
      { type: "list", label: "Three ways you'll dominate this segment in the next 90 days", count: 3 },
    ],
  },
  {
    slug: "non-customer-expansion",
    title: "Non-customer expansion",
    category: "Strategy",
    question: "Who wants to buy from me but can't?",
    description:
      "Your biggest growth may come from people who aren't customers yet — blocked by price, access, complexity or fit. Find the barrier, remove it.",
    blocks: [
      { type: "text", label: "Describe a group in your industry that doesn't buy from you (or anyone) today", rows: 3 },
      { type: "list", label: "The specific barriers blocking them — price, size, access, knowledge, trust…", count: 4 },
      { type: "list", label: "Customizations to your existing offering that would remove a barrier", count: 3 },
      { type: "list", label: "Entirely new additions (smaller pack, entry tier, rental, financing…)", count: 3 },
      { type: "text", label: "Which single idea has the highest headroom, and what's the first step?" },
    ],
  },
  {
    slug: "consumer-shift",
    title: "Consumer behaviour shift",
    category: "Strategy",
    question: "How do I respond when customer behaviour changes?",
    description:
      "When buying habits shift, react with a system, not panic: restate the need, generate ideas, pick the two easiest wins, and stress-test them.",
    blocks: [
      { type: "text", label: "Write the new need statement of your ideal customer — what do they want now that they didn't before?", rows: 3 },
      { type: "list", label: "Brainstorm game-changing ideas that answer this new need", count: 5 },
      { type: "list", label: "The two most implementable, low-hanging ideas", count: 2 },
      { type: "text", label: "Stress-test the winner across the 5 Ps: what changes in product, people, price, promotion, process?", rows: 4 },
    ],
  },
  {
    slug: "portfolio-audit",
    title: "Product portfolio audit",
    category: "Strategy",
    question: "Which of my products deserve to live?",
    description:
      "Every product must earn its place — in revenue, in profit, or in brand. Audit the portfolio and act on the laggards.",
    blocks: [
      { type: "list", label: "List your products or service lines", count: 6 },
      { type: "checklist", label: "For your weakest product, tick what is actually true", options: ["It contributes meaningfully to revenue", "It contributes meaningfully to profit", "Its quality matches my brand promise", "It supports (not dilutes) my brand identity", "Raw material / input quality is up to the mark", "It would be missed by loyal customers if dropped"] },
      { type: "choice", label: "Verdict on the weakest product", options: ["Invest and fix it", "Reprice or reposition it", "Bundle it with a winner", "Retire it gracefully"] },
      { type: "text", label: "What new product does the portfolio actually need next, and why?" },
    ],
  },
  {
    slug: "positioning-statement",
    title: "Positioning rewrite",
    category: "Strategy",
    question: "What do customers think I stand for?",
    description:
      "Positioning is the space you occupy in the customer's mind. Compare what you currently signal against what you want to own, then close the gap.",
    blocks: [
      { type: "text", label: "My perfect audience — who exactly am I positioning for?" },
      { type: "text", label: "Current positioning — if customers described you in one sentence today, what would they say?" },
      { type: "text", label: "New positioning — the one sentence you want them to say within a year" },
      { type: "list", label: "Changes needed in your own actions to earn that sentence", count: 3 },
      { type: "list", label: "Changes needed across the team / departments", count: 3 },
    ],
  },
  {
    slug: "execution-scoreboard",
    title: "Execution scoreboard",
    category: "Strategy",
    question: "Why do my plans die after the meeting?",
    description:
      "Strategy fails in the gap between intention and inspection. Build a scoreboard of effort and results, reviewed daily.",
    blocks: [
      { type: "text", label: "Your department's or business's single most essential goal right now" },
      { type: "list", label: "Effort scores (inputs you control): calls made, demos given, visits done…", count: 3 },
      { type: "list", label: "Result scores (outputs that follow): orders, revenue, sign-ups…", count: 3 },
      { type: "text", label: "Morning commitment ritual — what will each person commit to at the start of the day?" },
      { type: "text", label: "Evening review ritual — how will achievement be checked against commitment?" },
      { type: "text", label: "How will incentives reward effort scores, not just results?" },
    ],
  },
  {
    slug: "scale-up-plan",
    title: "Scale-up trio",
    category: "Strategy",
    question: "What makes my business faster, bigger and more durable?",
    description:
      "Growth has three axes: speed, scalability and sustainability. Choose deliberate new activities on each axis.",
    blocks: [
      { type: "text", label: "Your business, department or profession in one line" },
      { type: "list", label: "Speed — activities that make you serve or deliver faster", count: 2 },
      { type: "list", label: "Scalability — activities that let you serve 10× the customers without 10× the effort", count: 2 },
      { type: "list", label: "Sustainability — activities that make the growth survive shocks and time", count: 2 },
      { type: "text", label: "Which one activity starts this week, and who owns it?" },
    ],
  },
  // ---------- MARKETING & BRAND ----------
  {
    slug: "brand-signals",
    title: "Brand signal alignment",
    category: "Marketing & brand",
    question: "Is my brand sending mixed signals?",
    description:
      "A brand is the sum of its signals. When your price says premium but your packaging says cheap, customers trust neither.",
    blocks: [
      { type: "text", label: "What do you currently stand for in the market — honestly?" },
      { type: "text", label: "What should you be known for?" },
      { type: "list", label: "Mixed signals your brand gives today (price vs quality, promise vs delivery, look vs claim…)", count: 4 },
      { type: "list", label: "The five signals that would create your intended positioning", count: 5 },
      { type: "list", label: "Final three signals to enforce everywhere, consistently", count: 3 },
    ],
  },
  {
    slug: "ad-campaign-blueprint",
    title: "Ad campaign blueprint",
    category: "Marketing & brand",
    question: "Why do my ads get seen but not answered?",
    description:
      "A lead-generating campaign has seven parts in a fixed order. Miss one and the money leaks — write all seven before spending a rupee.",
    blocks: [
      { type: "text", label: "1 · Ideal client — who exactly is this campaign for?" },
      { type: "text", label: "2 · Magnetic headline — name their problem so precisely they stop scrolling" },
      { type: "text", label: "3 · Outcome promise — what result does your product deliver (feature → outcome)?" },
      { type: "text", label: "4 · Unique serving proposition — why you and not anyone else?" },
      { type: "text", label: "5 · Risk reversal — the guarantee that removes their fear of buying" },
      { type: "text", label: "6 · Social proof — which reviews, numbers or names will you show?" },
      { type: "text", label: "7 · Call to action — the one specific thing they should do next" },
    ],
  },
  {
    slug: "content-engine",
    title: "Content engine setup",
    category: "Marketing & brand",
    question: "How do I make content consistently, not occasionally?",
    description:
      "Consistent content needs a system: an owner, a signature style, a contact path, and measurable KPIs — not bursts of motivation.",
    blocks: [
      { type: "text", label: "Your signature line — the tagline, hook or call-to-action that defines your company" },
      { type: "checklist", label: "How should customers contact you from every piece of content?", options: ["WhatsApp", "Website", "QR code", "Phone number", "Email", "Social media DM"] },
      { type: "choice", label: "Who will own content creation?", options: ["Train someone internal", "Hire a dedicated creator", "Outsource to an agency", "Founder does it (for now)"] },
      { type: "checklist", label: "Pick the 3–4 KPIs that will judge the content's performance", options: ["Reach", "Impressions", "Link clicks", "Likes & reactions", "Shares", "Comments", "Follower growth", "Response rate", "Leads generated", "Designs produced per week"] },
      { type: "text", label: "Weekly cadence — what gets published, on which days?" },
    ],
  },
  {
    slug: "credibility-5r",
    title: "Credibility ladder",
    category: "Marketing & brand",
    question: "Do people believe me before I speak?",
    description:
      "Credibility compounds through five Rs: ratings, reviews, retention, references and revenue growth. Score each, then fix the weakest rung.",
    blocks: [
      { type: "rating", label: "Ratings — how strong are your public star ratings?" },
      { type: "rating", label: "Reviews — how many detailed, recent, genuine reviews do you have?" },
      { type: "rating", label: "Retention — do customers stay and repeat?" },
      { type: "rating", label: "References — do customers actively send you others?" },
      { type: "rating", label: "Revenue proof — can you show growth that backs your claims?" },
      { type: "text", label: "Your weakest R — three moves to raise it in 60 days", rows: 3 },
    ],
  },
  {
    slug: "switching-barriers",
    title: "Switching barrier designer",
    category: "Marketing & brand",
    question: "What makes leaving me feel expensive?",
    description:
      "Entry barriers keep competitors out; switching barriers keep customers in. Design the costs — practical and emotional — of leaving you.",
    blocks: [
      { type: "text", label: "Name the biggest player in your industry and the switching barrier they've built" },
      { type: "checklist", label: "Which switching costs could you build?", options: ["Accumulated points or credits lost on exit", "Effort of finding and vetting an alternative", "Learning cost of a new system", "Technical migration effort", "Equipment or setup investment", "Restart or onboarding cost elsewhere", "Financial risk of an unproven supplier", "Social risk — what will people say?", "Emotional bond with your team or brand", "Personalisation lost (history, preferences, fit)"] },
      { type: "list", label: "Five things you'll do so a customer never wants to leave", count: 5 },
    ],
  },
  // ---------- CUSTOMERS ----------
  {
    slug: "customer-money-model",
    title: "Customer's money model",
    category: "Customers",
    question: "Do I know how my customer earns their money?",
    description:
      "B2B selling transforms when you stop pitching your product and start serving the customer's own profit model. Map how they make money; then position yourself inside that map.",
    blocks: [
      { type: "text", label: "Pick one important customer — name them" },
      { type: "checklist", label: "What actually makes this customer successful?", options: ["Gross margin", "Revenue growth", "Customer retention", "New customer acquisition", "Cash flow & liquidity", "Inventory turnover", "Productivity", "Brand reputation", "Speed / velocity", "Reducing waste & unsalable stock"] },
      { type: "text", label: "Describe their money-making model in your own words — where does their profit really come from?", rows: 4 },
      { type: "text", label: "Rewrite your sales pitch so your product visibly improves their model (not just your specs)", rows: 4 },
    ],
  },
  {
    slug: "cx-touchpoints",
    title: "Experience touchpoint audit",
    category: "Customers",
    question: "Where does my customer's experience break?",
    description:
      "Customers judge you at four touchpoints: the product itself, the buying moment, the after-sales service, and every communication. Score each, then fix the worst.",
    blocks: [
      { type: "rating", label: "Product touchpoints — quality, packaging, unboxing, first use" },
      { type: "rating", label: "Sales touchpoints — the shop, site, staff, buying process" },
      { type: "rating", label: "Service touchpoints — complaints, repairs, follow-ups" },
      { type: "rating", label: "Communication touchpoints — ads, messages, invoices, tone" },
      { type: "list", label: "Two new moves for your lowest-scoring touchpoint", count: 2 },
      { type: "list", label: "Two new moves for your second-lowest", count: 2 },
    ],
  },
  {
    slug: "service-ladder",
    title: "Service maturity ladder",
    category: "Customers",
    question: "How professionally do I handle complaints?",
    description:
      "Customer service matures in four stages — from no complaint channel at all, to anticipating problems before customers feel them. Locate yourself; climb one rung.",
    blocks: [
      { type: "text", label: "Your product or service in one line" },
      { type: "rating", label: "How critical is service to your business?" },
      { type: "choice", label: "Which stage are you honestly at?", options: ["1 · No real channel for complaints", "2 · We capture complaints but resolution is reactive and slow", "3 · We resolve complaints excellently", "4 · We anticipate and fix issues before customers complain"] },
      { type: "list", label: "Three changes that move you one stage up", count: 3 },
      { type: "text", label: "Who owns service, and what number will they report weekly?" },
    ],
  },
  {
    slug: "nps-engine",
    title: "Recommendation score engine",
    category: "Customers",
    question: "Would my customers recommend me?",
    description:
      "One question predicts growth better than most dashboards: 'How likely are you to recommend us?' Measure it, then run the improvement cycle.",
    blocks: [
      { type: "rating", label: "Ask ten customers to rate (0–10): how likely are you to recommend us? Enter the average" },
      { type: "text", label: "What did the 9–10 scorers say they love? (ask them)" },
      { type: "text", label: "What did the 0–6 scorers say hurt them? (ask them — this is gold)" },
      { type: "rating", label: "Target average for 90 days from now" },
      { type: "list", label: "Three strategies to close the gap, each tied to a touchpoint", count: 3 },
    ],
  },
];

export const WORKSHEETS: Worksheet[] = [...WORKSHEETS_A, ...WORKSHEETS_B];

export const WS_CATEGORIES: WsCategory[] = [
  "Strategy",
  "Marketing & brand",
  "Customers",
  "Money & finance",
  "People & culture",
  "Personal mastery",
];

export function getWorksheet(slug: string) {
  return WORKSHEETS.find((w) => w.slug === slug);
}
