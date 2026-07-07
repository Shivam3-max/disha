import { FLAGSHIP_WEEKS } from "./learnFlagship";
import { BOOSTER_DAYS } from "./learnBooster";

export type Quiz = {
  q: string;
  options: string[];
  correct: number;
  explain: string;
};

export type ApplyLink = {
  kind: "tool" | "framework";
  slug: string;
  label: string;
};

export type Lesson = {
  heading: string;
  body: string[];
  example?: string;
  applyLink?: ApplyLink;
};

export type Track = "foundations" | "flagship" | "booster";

export type LearnDay = {
  day: number;
  track: Track;
  slug: string;
  title: string;
  subtitle: string;
  lessons: Lesson[];
  quiz: Quiz[];
  suggestedJourney?: string;
};

export const TRACKS: Record<Track, { title: string; description: string; unitLabel: string }> = {
  foundations: {
    title: "Foundations",
    description: "The 9-day core course — one subject a day, covering how a business actually works.",
    unitLabel: "Day",
  },
  flagship: {
    title: "Flagship program",
    description: "The full 12-week Business Builder Fellowship — marketing, AI leverage, and leadership run in parallel every week.",
    unitLabel: "Week",
  },
  booster: {
    title: "Business ka Booster",
    description: "Six quick-fire days of extra frameworks — mindset, hiring, leadership, virality, ads, and operations.",
    unitLabel: "Day",
  },
};

export const DIMENSION_TO_DAY: Record<string, string> = {
  Profitability: "strategy-for-success",
  "Customer engine": "market-research-product",
  "Cash discipline": "operations-and-expansion",
  "Competitive moat": "solo-to-entrepreneur",
  "Team & self": "hiring-and-hr",
};

export const FOUNDATIONS_DAYS: LearnDay[] = [
  {
    day: 1,
    track: "foundations",
    slug: "solo-to-entrepreneur",
    title: "From working alone to running a business",
    subtitle: "Freelancer instincts, focus markets, and the moat that protects you",
    suggestedJourney: "competitor-could-copy-me",
    lessons: [
      {
        heading: "Everyone isn't your customer",
        body: [
          "The most common way a new business dies isn't lack of demand — it's trying to serve too many kinds of customers at once. Every segment you add multiplies your marketing message, your product variants, and your team's confusion.",
          "The fix is picking one small, winnable market first — a 'focused pilot market' — and dominating it completely before moving outward. A narrow market lets you make small, cheap mistakes instead of large, expensive ones, and word of mouth travels faster in a tight community than a spread-out one.",
        ],
        example:
          "Amazon began by selling only books. LinkedIn targeted recruiters first, not job seekers. Tinder launched only to college students on one coast. Each used their beachhead as a foundation before expanding into the wider market.",
        applyLink: { kind: "framework", slug: "pilot-market", label: "Qualify your own pilot market" },
      },
      {
        heading: "Build a core that can't be copied overnight",
        body: [
          "A 'core' is the one advantage your competitors would need years — not months — to replicate. Without one, every price war and every new entrant chips away at you.",
          "A strong core has three qualities: it's unique (hard for anyone else to build), it's important (customers genuinely value it, not just notice it), and it grows stronger over time rather than eroding.",
        ],
        example:
          "A distribution network built over a decade, a patented process, or a subscriber base that took years to earn are all cores. Being first to market is not a core by itself — it only buys time to build one.",
        applyLink: { kind: "tool", slug: "moat-builder", label: "Score your moat with Moat builder" },
      },
      {
        heading: "Price on value, not on hours",
        body: [
          "New business owners instinctively price by time spent. Customers, however, pay for outcomes: money saved, risk removed, time returned to them. Two providers can do the same task in the same hours and deserve wildly different prices if one changes the customer's business more.",
          "A practical discipline: before quoting, put a rupee number on what you deliver — cost cut, revenue added, customers retained, risk avoided. That number, not your hours, should anchor the conversation.",
        ],
      },
      {
        heading: "Replace yourself before you scale",
        body: [
          "A business that only runs when the owner is present isn't a business — it's a job with extra steps. Five moves convert a founder-dependent operation into one that runs by itself: combine similar tasks into fewer roles, hand off what you shouldn't be doing, cut what doesn't need doing at all, build simple systems or tools to do repeatable work, and outsource what a specialist does better.",
          "Growth compounds only once your own time is no longer the ceiling on how much the business can do.",
        ],
        applyLink: { kind: "framework", slug: "replace-yourself", label: "Start your own replace-yourself list" },
      },
    ],
    quiz: [
      {
        q: "Why does picking one narrow market first usually beat targeting everyone?",
        options: [
          "It requires no marketing budget",
          "Mistakes are smaller and word of mouth travels faster in a tight market",
          "It guarantees higher prices",
          "Competitors won't notice a small market",
        ],
        correct: 1,
        explain: "A focused market lets you learn cheaply and build momentum through concentrated word of mouth before expanding.",
      },
      {
        q: "Which of these is NOT one of the three qualities of a strong business 'core'?",
        options: ["Unique", "Cheap to build", "Important to the customer", "Grows stronger over time"],
        correct: 1,
        explain: "A core doesn't need to be cheap — it needs to be hard to copy, genuinely valuable, and durable.",
      },
      {
        q: "A customer asks 'why does this cost so much for just two hours of work?' What does value-based pricing tell you to say?",
        options: [
          "Apologise and lower the price",
          "Explain the measurable outcome the work delivers, not the hours spent",
          "Refuse to discuss price",
          "Match a competitor's hourly rate",
        ],
        correct: 1,
        explain: "Value-based pricing anchors the conversation on the rupee impact you create, not the clock.",
      },
      {
        q: "'Being first to market' is best described as:",
        options: [
          "A permanent core advantage",
          "Irrelevant to strategy",
          "A temporary edge that buys time to build a real core",
          "The only advantage a startup needs",
        ],
        correct: 2,
        explain: "First-mover advantage fades fast unless it's used to build something durable — distribution, data, brand, or technology.",
      },
    ],
  },
  {
    day: 2,
    track: "foundations",
    slug: "market-research-product",
    title: "Market research and building the right product",
    subtitle: "Testing assumptions before betting the business on them",
    suggestedJourney: "customers-dont-come-back",
    lessons: [
      {
        heading: "Intuition is a hypothesis, not a plan",
        body: [
          "Every founder has instincts about what customers want. The mistake is treating that instinct as proven fact. Market research exists to test the guess cheaply, before the guess is tested expensively by the market itself.",
          "A useful litmus test for real demand: would the customer prepay, put down a deposit, sign a letter of intent, or at minimum agree to a trial? Polite interest without any of these is not yet validated demand.",
        ],
      },
      {
        heading: "Two research paths, used together",
        body: [
          "Primary research is direct contact with your actual or potential customers — interviews, surveys, watching them use a product, focus groups. It's slower but tells you the truth about your specific market.",
          "Secondary research pulls from what already exists — industry reports, government data, competitor filings, news. It's fast and free, and it's the right place to start before spending money on primary research.",
        ],
      },
      {
        heading: "Design thinking: empathy before invention",
        body: [
          "Good products come from a sequence, not a flash of genius: build empathy with the user, define their real problem precisely, generate many possible solutions, build a cheap prototype, then test it on real users and iterate.",
          "The defining move is the 'define' stage — asking 'why' repeatedly until you reach the root cause, not the surface complaint. A customer who says they want a faster checkout might actually be short on time in their whole day, which points to a different, bigger solution.",
        ],
        example:
          "A room-rental platform noticed people weren't booking despite heavy traffic. Instead of changing the pricing or ads, they investigated and found the listing photos looked amateur and untrustworthy. Replacing them with professional photography — not a discount — doubled weekly bookings.",
      },
      {
        heading: "Platforms beat pipelines",
        body: [
          "A traditional ('pipe') business creates value in a straight line: make the product, sell the product. A platform business creates value by connecting two sides — buyers and sellers, riders and drivers, hosts and guests — and earns from the connection itself.",
          "Platform businesses often own none of the underlying assets. The largest accommodation network owns no rooms; the largest ride-hailing service owns no cars. This is worth asking about your own business: could a version of you connect existing supply to existing demand, instead of owning and running everything yourself?",
        ],
      },
      {
        heading: "Service is a product too",
        body: [
          "Customers don't separate 'the product' from 'how they were treated while buying and using it' — the experience is the product. A single act of unexpected care, at the moment it's needed most, creates loyalty that advertising cannot buy.",
          "The compounding version of this is anticipation: solving a problem before the customer even complains. That's a higher stage than fast complaint resolution, which is itself higher than having no complaint channel at all.",
        ],
        applyLink: { kind: "framework", slug: "cx-touchpoints", label: "Audit your own experience touchpoints" },
      },
    ],
    quiz: [
      {
        q: "What's the strongest signal that customer interest is real, not just polite?",
        options: [
          "They say 'sounds interesting'",
          "They agree to a prepayment, deposit, or trial",
          "They follow your social media page",
          "They ask for your business card",
        ],
        correct: 1,
        explain: "Money or a real commitment on the table is a far stronger signal than verbal enthusiasm.",
      },
      {
        q: "In design thinking, what is the purpose of repeatedly asking 'why'?",
        options: [
          "To make the customer feel heard",
          "To reach the root cause behind a surface complaint",
          "To slow down the process deliberately",
          "To justify the product you already built",
        ],
        correct: 1,
        explain: "Repeated 'whys' peel back the stated complaint to reveal the actual underlying problem worth solving.",
      },
      {
        q: "What best defines a 'platform' business model?",
        options: [
          "A company that owns all its inventory",
          "A company that creates value by connecting two sides of a market it doesn't own",
          "Any business with a website",
          "A business that only sells digital products",
        ],
        correct: 1,
        explain: "Platforms orchestrate interactions between independent producers and consumers rather than owning the supply themselves.",
      },
      {
        q: "Which is the most advanced stage of customer service maturity?",
        options: [
          "No channel for complaints exists",
          "Complaints are captured but resolved slowly",
          "Complaints are resolved excellently",
          "Problems are anticipated and fixed before the customer notices",
        ],
        correct: 3,
        explain: "The highest maturity stage moves from reacting well to anticipating needs before they become complaints.",
      },
    ],
  },
  {
    day: 3,
    track: "foundations",
    slug: "strategy-for-success",
    title: "Strategy that survives contact with reality",
    subtitle: "Fewer numbers, watched closely, beat many numbers watched loosely",
    suggestedJourney: "cash-is-always-tight",
    lessons: [
      {
        heading: "Pick your critical few, not your comprehensive many",
        body: [
          "Dashboards with forty metrics create the illusion of control while hiding what actually matters. A critical success factor is a number that, if moved, disproportionately moves the whole business — profitability, error rate, customer acquisition cost, repeat purchase rate.",
          "The discipline is choosing two or three, not twenty. Watching everything means truly watching nothing.",
        ],
        applyLink: { kind: "framework", slug: "critical-success-factors", label: "Pick your own critical few" },
      },
      {
        heading: "Protect your margin with a fixed structure",
        body: [
          "One durable approach to pricing splits the maximum retail price into thirds: roughly a third for the cost of making the product, a third for distribution and marketing to get it to the shelf, and the remaining third as the margin you protect.",
          "The insight is discipline about the split staying fixed as a percentage, not as whatever's left over after other costs run wild. When margin is treated as a residual, expenses always expand to consume it.",
        ],
      },
      {
        heading: "Read both environments before deciding anything",
        body: [
          "Every strategic decision sits inside two environments: the internal one you control (team, cash, capability, culture) and the external one you don't (competitors, regulation, technology shifts, customer behaviour changes).",
          "Strategy that ignores the internal environment produces plans your team can't execute. Strategy that ignores the external environment produces plans a competitor or a market shift can flatten. Both checks are non-negotiable before committing resources.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why is choosing 2–3 critical success factors better than tracking 20 metrics?",
        options: [
          "It's faster to build a spreadsheet",
          "Watching too many numbers loosely means truly watching none of them closely",
          "Investors prefer fewer numbers",
          "It reduces accounting costs",
        ],
        correct: 1,
        explain: "Focus on a small number of factors that disproportionately move the business, rather than diluting attention across everything.",
      },
      {
        q: "In the thirds-based margin structure, what happens if margin is treated as 'whatever is left over'?",
        options: [
          "Margin naturally increases",
          "Nothing changes",
          "Other costs tend to expand and consume the margin",
          "Distribution costs disappear",
        ],
        correct: 2,
        explain: "Costs expand to fill available room unless margin is protected as a fixed, non-negotiable percentage.",
      },
      {
        q: "A strategy that only accounts for the external environment (market, competitors) but ignores internal capability risks:",
        options: [
          "Being too cautious",
          "Producing a plan the team can't actually execute",
          "Having no risks at all",
          "Being too focused",
        ],
        correct: 1,
        explain: "Even a brilliant market read fails if the internal team, cash, or systems can't deliver on it.",
      },
    ],
  },
  {
    day: 4,
    track: "foundations",
    slug: "marketing-and-brand",
    title: "Marketing that earns attention without a big budget",
    subtitle: "Creativity as a substitute for spend, and brand as a consistent promise",
    suggestedJourney: "sales-have-stalled",
    lessons: [
      {
        heading: "Guerrilla marketing: creativity instead of budget",
        body: [
          "Guerrilla marketing wins attention through an unconventional idea in an everyday place, rather than through paid reach. It works because it interrupts a routine moment in a way people want to photograph and share themselves — turning the audience into the distribution channel.",
          "The requirement is not a large budget; it's a genuinely surprising execution of a simple idea, placed where the target audience already is.",
        ],
        example:
          "A chocolate brand shaped public benches to look like its own chocolate bars — a permanent, free advertisement that people sat on and photographed for years, at a fraction of a billboard's cost.",
      },
      {
        heading: "Brand equity is what customers say when you're not in the room",
        body: [
          "A brand isn't the logo or the tagline — it's the sum of every experience a customer has had with you, repeated consistently enough that they trust what happens next before it happens.",
          "The danger is 'mixed signals': a premium price paired with cheap packaging, or a trustworthy tagline paired with slow complaint resolution. Customers resolve inconsistency by trusting you less, not by giving you credit for the good half.",
        ],
        applyLink: { kind: "framework", slug: "brand-signals", label: "Check your own brand signals" },
      },
      {
        heading: "Moment marketing rides a wave you didn't create",
        body: [
          "When a cultural event, meme, or news moment briefly holds everyone's attention, brands that respond within hours — with relevant, well-made content — borrow that attention cheaply. The cost of being slow is total: a joke that's a week late isn't a joke.",
          "This only works with genuine relevance and good taste; forced or tone-deaf attempts damage the brand faster than silence would have.",
        ],
      },
    ],
    quiz: [
      {
        q: "What makes guerrilla marketing effective without a large budget?",
        options: [
          "It uses more TV airtime",
          "A surprising idea in an everyday place turns the audience into the distributor",
          "It always requires celebrity endorsement",
          "It avoids public spaces",
        ],
        correct: 1,
        explain: "Guerrilla marketing spreads through genuine audience surprise and sharing, not paid reach.",
      },
      {
        q: "Mixed brand signals (e.g. premium pricing with cheap packaging) typically cause customers to:",
        options: [
          "Average the two into a neutral opinion",
          "Trust the brand less overall",
          "Only notice the positive signal",
          "Assume it's intentional pricing strategy",
        ],
        correct: 1,
        explain: "Inconsistency erodes trust rather than being averaged out — customers weight the worse signal more heavily.",
      },
      {
        q: "The biggest risk in moment marketing is:",
        options: [
          "Responding too quickly",
          "Being too relevant",
          "Being slow or tone-deaf, which can damage the brand faster than staying silent",
          "Using too much creativity",
        ],
        correct: 2,
        explain: "A late or poorly judged attempt at riding a cultural moment often backfires worse than not participating at all.",
      },
    ],
  },
  {
    day: 5,
    track: "foundations",
    slug: "personality-and-communication",
    title: "Communication that moves people to act",
    subtitle: "Influence is a skill, built through preparation and story, not a gift",
    lessons: [
      {
        heading: "Charisma is judged in seconds, built over years",
        body: [
          "Listeners form an impression of whether a speaker is credible within the first half-minute — long before the content has had a chance to prove itself. That first impression is carried by posture, voice, and energy, not vocabulary.",
          "The reassuring flip side: this impression is a trainable skill, not an inborn trait. It responds directly to preparation and rehearsal, which most people skip.",
        ],
      },
      {
        heading: "Facts inform, stories move",
        body: [
          "Audiences forget statistics quickly but remember stories for years, because a story gives an abstract point a face, a stake, and an emotional stake the listener can attach to their own memory.",
          "The practical version: wrap your key facts inside a specific, concrete story rather than presenting the fact alone. 'Sales grew 20%' is forgettable; the story of the one customer whose life changed because of that growth is not.",
        ],
      },
      {
        heading: "Preparation is invisible but decisive",
        body: [
          "The speakers who look most 'natural' are usually the most rehearsed — they've removed the friction of remembering what comes next, freeing their attention for connecting with the room in the moment.",
          "Preparation also means anticipating objections before they're raised, so a difficult question lands as something you expected, not something that destabilizes you live.",
        ],
        applyLink: { kind: "framework", slug: "effectiveness-audit", label: "Rate your interpersonal effectiveness" },
      },
    ],
    quiz: [
      {
        q: "How quickly do listeners typically judge whether a speaker is credible?",
        options: ["Within the first few seconds", "Only after the full talk", "Never — it's fixed beforehand", "Only if they already know the speaker"],
        correct: 0,
        explain: "First impressions of credibility form within roughly the first 30 seconds, driven by delivery more than content.",
      },
      {
        q: "Why do stories tend to stick better than statistics?",
        options: [
          "Stories are shorter",
          "Stories give an abstract point a face and an emotional anchor",
          "Statistics are always wrong",
          "Audiences dislike numbers",
        ],
        correct: 1,
        explain: "A story attaches the message to something concrete and emotional, which memory retains far better than an abstract number.",
      },
      {
        q: "What is the main benefit of heavy rehearsal before speaking?",
        options: [
          "It makes the speech sound robotic",
          "It frees attention to connect with the audience instead of remembering content",
          "It removes the need for a message",
          "It guarantees no questions will be asked",
        ],
        correct: 1,
        explain: "Preparation shifts effort away from recall and toward genuine, present connection with the room.",
      },
    ],
  },
  {
    day: 6,
    track: "foundations",
    slug: "sales-that-doesnt-feel-like-selling",
    title: "Sales built on needs, not pressure",
    subtitle: "Techniques that make saying yes feel like the customer's own decision",
    suggestedJourney: "sales-have-stalled",
    lessons: [
      {
        heading: "Sell the need, not the feature",
        body: [
          "Products succeed commercially when marketing connects them to a need the customer already feels, even if the literal feature seems unrelated. A product framed around convenience, status, or fear removal usually outsells one framed around specifications.",
          "The exercise for any product: list the surface feature, then ask what deeper need it actually answers — time saved, risk avoided, status signaled, guilt relieved.",
        ],
      },
      {
        heading: "'You're free to say no' often increases yes",
        body: [
          "Explicitly telling a customer they have the freedom to decline paradoxically increases agreement, because it removes the feeling of being cornered and restores their sense of choice — which most people resist giving up under pressure.",
          "This works because compliance driven by pressure is fragile and often reversed later (cancellations, returns); compliance chosen freely tends to stick.",
        ],
      },
      {
        heading: "Contrast makes a fair price feel like a bargain",
        body: [
          "A price shown next to a more expensive option feels cheaper than the identical price shown alone, because customers judge value in comparison, not in isolation. This is why a genuinely premium option is often displayed even when few people buy it — it recalibrates what 'reasonable' looks like.",
          "The same principle applies to negotiation: opening with a higher, defensible anchor makes the eventual agreed price feel like a win for the other side.",
        ],
        applyLink: { kind: "tool", slug: "pricing-strategy", label: "Re-check your pricing model" },
      },
      {
        heading: "Silence is a negotiating tool, not a gap to fill",
        body: [
          "After stating a price or a position, the instinct to fill silence with justification often talks the seller down before the buyer has even objected. Holding silence puts the next move — and often the next concession — on the other side.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why does explicitly saying 'you're free to say no' often increase agreement?",
        options: [
          "It confuses the customer",
          "It restores the customer's sense of choice, reducing resistance to pressure",
          "It's legally required",
          "It lowers the price automatically",
        ],
        correct: 1,
        explain: "Removing the feeling of being cornered makes people more willing to agree, and the agreement tends to be more durable.",
      },
      {
        q: "What is the purpose of showing a more expensive option that few people actually buy?",
        options: [
          "To confuse competitors",
          "To recalibrate what price feels 'reasonable' by contrast",
          "To increase manufacturing costs",
          "It serves no real purpose",
        ],
        correct: 1,
        explain: "The pricier option acts as an anchor, making the intended option look like better value by comparison.",
      },
      {
        q: "After stating your price, what does staying silent typically accomplish?",
        options: [
          "It guarantees the sale is lost",
          "It puts pressure on the other party to respond or move first",
          "It's considered rude and should be avoided",
          "It has no effect on negotiation",
        ],
        correct: 1,
        explain: "Silence resists the urge to self-negotiate and shifts the next move onto the other party.",
      },
    ],
  },
  {
    day: 7,
    track: "foundations",
    slug: "hiring-and-hr",
    title: "Hiring and human resources as a growth function",
    subtitle: "The multiplier effect of the right people in the right roles",
    suggestedJourney: "cant-find-good-people",
    lessons: [
      {
        heading: "One capable person outperforms many ordinary ones",
        body: [
          "In roles requiring judgment, creativity, or ownership, hiring more average people doesn't substitute for one genuinely capable person — the tasks aren't purely additive. A machine can replace repetitive manual effort, but no amount of ordinary effort replaces someone with the drive and mindset to think independently and push the work forward.",
          "This argues for spending disproportionate time and rigor on roles that require judgment, and being comfortable paying more for fewer, stronger hires there.",
        ],
      },
      {
        heading: "Culture is downstream of who you hire",
        body: [
          "An organisation's culture isn't set by a poster on the wall — it's set by the accumulated behaviour of the people inside it. A toxic culture is usually traceable to hiring decisions made under pressure, where 'available' was mistaken for 'right fit'.",
          "Watch for early toxic-culture signs: gossip tolerated without consequence, credit hoarded upward, feedback only flowing downward, and high performers quietly leaving while low performers stay comfortable.",
        ],
        applyLink: { kind: "tool", slug: "hiring-scorecard", label: "Build a hiring scorecard" },
      },
      {
        heading: "Leadership earns belief before it demands compliance",
        body: [
          "Two contrasting leadership patterns show up repeatedly: one that manages by monitoring, correcting, and controlling from the outside, and one that builds capability, belief, and ownership from the inside so people execute well even unsupervised.",
          "The second pattern takes longer to build but scales without the leader's constant presence — which is the entire point of leadership in a growing business.",
        ],
      },
    ],
    quiz: [
      {
        q: "For roles that require judgment and creativity, why doesn't hiring several average people substitute for one exceptional one?",
        options: [
          "Average people are always more expensive",
          "The output isn't purely additive — judgment-heavy work depends on quality of thinking, not headcount",
          "It's illegal to hire fewer people",
          "There's no difference in outcomes",
        ],
        correct: 1,
        explain: "Repetitive tasks scale with headcount; judgment and ownership don't multiply the same way across average performers.",
      },
      {
        q: "Which is an early warning sign of toxic culture forming?",
        options: [
          "Regular team celebrations",
          "High performers quietly leaving while low performers remain comfortable",
          "Frequent constructive feedback in both directions",
          "Clear career growth paths",
        ],
        correct: 1,
        explain: "Quiet attrition of your best people while underperformance is tolerated is one of the clearest early culture warnings.",
      },
      {
        q: "The leadership style that 'scales without the leader's constant presence' is one that:",
        options: [
          "Monitors and corrects constantly",
          "Builds capability and ownership so people execute well unsupervised",
          "Avoids giving any feedback",
          "Relies on strict daily check-ins forever",
        ],
        correct: 1,
        explain: "Leadership that builds internal ownership lets the team perform even when the leader isn't watching — the real test of scale.",
      },
    ],
  },
  {
    day: 8,
    track: "foundations",
    slug: "productivity-and-delegation",
    title: "Productivity, meetings, and the discipline of delegation",
    subtitle: "Time is the one resource you can't buy back",
    suggestedJourney: "business-cant-run-without-me",
    lessons: [
      {
        heading: "Every meeting is a company expense, not a free event",
        body: [
          "A one-hour meeting with eight attendees doesn't cost one hour — it costs eight hours of collective time, plus the cost of the interrupted work each person was pulled from. Treating meetings as free leads to more of them, longer, with more people invited 'just in case'.",
          "A useful discipline: before scheduling, calculate the real cost (attendees × duration × their approximate value per hour) and ask whether the decision or output justifies it.",
        ],
      },
      {
        heading: "Delegating tasks builds followers; delegating authority builds leaders",
        body: [
          "Handing someone a task keeps you as the decision-maker and them as the executor — useful, but limited. Handing someone real authority over an outcome forces them to develop judgement, because they now own the decisions, not just the actions.",
          "Most founders under-delegate authority even when they over-delegate tasks, which is why teams stay dependent on the founder for every decision long after they're capable of more.",
        ],
        applyLink: { kind: "framework", slug: "replace-yourself", label: "List what you should hand off" },
      },
      {
        heading: "Spending time vs investing time",
        body: [
          "Spent time produces a result once. Invested time produces a system, a document, or a trained person that produces results repeatedly afterward. The same hour looks identical in a calendar but compounds completely differently.",
          "A weekly gut-check: of the hours logged this week, how many were spent (gone once used) versus invested (still paying out next month)?",
        ],
      },
    ],
    quiz: [
      {
        q: "The true cost of a one-hour meeting with eight people is best measured as:",
        options: [
          "One hour, regardless of attendance",
          "Roughly eight hours of collective time plus interrupted work",
          "Zero, since no money changes hands",
          "Half an hour, since meetings run efficiently",
        ],
        correct: 1,
        explain: "Meetings cost the sum of every attendee's time and the cost of pulling them away from other work.",
      },
      {
        q: "What's the key difference between delegating a task and delegating authority?",
        options: [
          "There is no meaningful difference",
          "Delegating authority forces the person to own decisions and build judgement, not just execute",
          "Delegating tasks is always better",
          "Authority can only be delegated to senior staff",
        ],
        correct: 1,
        explain: "Task delegation keeps decision-making with you; authority delegation transfers real ownership and grows capability.",
      },
      {
        q: "'Invested time' differs from 'spent time' because it:",
        options: [
          "Takes less effort",
          "Produces a system or capability that keeps paying out afterward",
          "Is always shorter in duration",
          "Doesn't need to be tracked",
        ],
        correct: 1,
        explain: "Invested time compounds — building a document, system, or trained person that keeps producing value beyond that single hour.",
      },
    ],
  },
  {
    day: 9,
    track: "foundations",
    slug: "operations-and-expansion",
    title: "Operations, systems, and expanding without breaking",
    subtitle: "Making the business repeatable before making it bigger",
    suggestedJourney: "want-to-grow-safely",
    lessons: [
      {
        heading: "Document the process before you scale it",
        body: [
          "A standard operating procedure exists to make quality consistent regardless of who is doing the work — turning a skill that lives in one person's head into a repeatable, teachable process. Without it, every new hire or new branch reintroduces the same mistakes and re-learns the same lessons.",
          "Building one starts by naming the recurring problem it solves, defining where the process starts and ends, then writing the concrete steps in between — sequenced, and reviewed by more than one person before being rolled out.",
        ],
        applyLink: { kind: "framework", slug: "sop-builder", label: "Write your first SOP" },
      },
      {
        heading: "Job shadowing beats a training manual alone",
        body: [
          "Skills that involve judgement transfer faster through structured observation than through documents: the trainee first watches the expert do the work, then does it themselves while being watched, then reports back immediately after doing it independently, and finally reports routinely as they take full ownership.",
          "This staged handover catches mistakes while they're still cheap to fix, rather than after the new person has been unsupervised for months.",
        ],
      },
      {
        heading: "Growth often dips before it rises",
        body: [
          "New investments — a new market, a new hire, a new system — usually create a temporary dip in performance or profit before the payoff appears, because the business is absorbing a learning curve and a setup cost simultaneously. Expecting an immediate uptick leads founders to abandon good decisions too early.",
          "The discipline is deciding in advance how long the dip is allowed to last and what signs would show the investment is or isn't working, rather than judging it emotionally after two disappointing weeks.",
        ],
      },
      {
        heading: "Expansion has more than one shape",
        body: [
          "Growing doesn't only mean opening more locations. It can mean adding an adjacent product line, acquiring a company that already has what you'd take years to build, or licensing your model to a franchisee who brings their own capital and local knowledge in exchange for a share of the upside.",
          "Each shape trades different things: acquisitions trade cash for speed, franchising trades control for capital and reach, and organic expansion trades speed for full control. The right shape depends on which resource — cash, time, or control — you can least afford to give up right now.",
        ],
        applyLink: { kind: "framework", slug: "scale-up-plan", label: "Plan your own scale-up" },
      },
    ],
    quiz: [
      {
        q: "What is the main purpose of a standard operating procedure?",
        options: [
          "To make the process look more official",
          "To make quality consistent regardless of who performs the work",
          "To reduce the number of employees needed",
          "To remove the need for training entirely",
        ],
        correct: 1,
        explain: "SOPs turn tacit, person-dependent skill into a repeatable, teachable process that holds quality steady.",
      },
      {
        q: "In staged job shadowing, what comes right after 'I do, you watch'?",
        options: [
          "The trainee is left alone immediately",
          "You do, I watch — the trainee performs while being observed",
          "The training ends",
          "The trainee trains someone else",
        ],
        correct: 1,
        explain: "The handover progresses from watching, to guided practice, to independent reporting, catching errors while cheap to fix.",
      },
      {
        q: "Why do new investments often show a temporary dip before improving results?",
        options: [
          "They're usually a mistake",
          "The business is absorbing a learning curve and setup cost at the same time",
          "Dips never actually happen in practice",
          "It only happens with financial investments",
        ],
        correct: 1,
        explain: "Setup costs and learning curves create a lag before payoff — deciding the acceptable dip length in advance prevents premature abandonment.",
      },
      {
        q: "Franchising primarily trades away __ in exchange for __.",
        options: [
          "Speed; nothing",
          "Direct control; access to the franchisee's capital and local knowledge",
          "Profit; brand recognition",
          "Quality; lower costs",
        ],
        correct: 1,
        explain: "Franchising accelerates reach and reduces capital need at the cost of direct day-to-day control over each location.",
      },
    ],
  },
];

export const LEARN_DAYS: LearnDay[] = [...FOUNDATIONS_DAYS, ...FLAGSHIP_WEEKS, ...BOOSTER_DAYS];

export function getLearnDay(slug: string) {
  return LEARN_DAYS.find((d) => d.slug === slug);
}
