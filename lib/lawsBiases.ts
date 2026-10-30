import type { Law } from "./knowledgeTypes";

export const LAWS_BIASES: Law[] = [
  {
    slug: "dunning-kruger-effect",
    name: "Dunning–Kruger Effect",
    category: "cognitive-biases",
    oneLiner:
      "People with low skill in an area tend to overestimate their ability, while experts often underestimate theirs.",
    origin:
      "Psychologists David Dunning and Justin Kruger at Cornell University published the study in 1999, testing people on logic, grammar, and humour. Some later researchers argue part of the pattern is a statistical artefact, but the practical lesson holds.",
    explanation: [
      "When you know little about a field, you also lack the knowledge to see your own mistakes. Confidence runs ahead of competence. As people learn more, they see how much they don't know and confidence often dips.",
      "For business owners, it explains overconfident first-time decisions in unfamiliar areas — tax, law, hiring, technology — and why outside expertise and feedback are so valuable.",
    ],
    examples: [
      { title: "New founders", body: "A first-time founder is sure they can build a sales team without help, then loses a year to bad hires." },
      { title: "DIY finance", body: "An owner handles GST filings alone and misses rules an accountant would have caught." },
      { title: "Hiring", body: "Confident candidates can outshine more capable but modest ones in interviews." },
    ],
    apply: [
      "In any new area, assume you know less than you think.",
      "Ask an expert to review your plan before you commit.",
      "Use structured tests, not confidence, to judge candidates.",
      "Seek honest feedback regularly from people who know more.",
    ],
    misread:
      "It is not a label to throw at others. Everyone is a beginner in most fields, including you.",
    question: "In which part of your business are you most confident — and least experienced?",
    related: ["optimism-bias", "confirmation-bias", "curse-of-knowledge", "peter-principle"],
    link: { kind: "tool", slug: "hiring-scorecard", label: "Score candidates on evidence" },
  },
  {
    slug: "confirmation-bias",
    name: "Confirmation Bias",
    category: "cognitive-biases",
    oneLiner:
      "People search for, notice, and remember information that confirms what they already believe, and ignore what contradicts it.",
    origin:
      "Psychologist Peter Wason demonstrated it in 1960 with his ‘2-4-6’ number task, where most people tested only examples that fit their first guess.",
    explanation: [
      "Once we have a view — this product will work, this hire is great, that market is dead — we unconsciously filter evidence to support it. Contradicting data feels like noise.",
      "In business, confirmation bias leads to doubling down on bad ideas, ignoring early warning signs, and building echo chambers in leadership teams.",
    ],
    examples: [
      { title: "Product launches", body: "A founder focuses on five enthusiastic customer comments and ignores 50 people who never came back." },
      { title: "Hiring", body: "An interviewer who likes a candidate early asks easy questions to confirm the impression." },
      { title: "Investing", body: "An investor reads only bullish news about a stock they already own." },
    ],
    apply: [
      "Before a decision, write down what evidence would prove you wrong.",
      "Actively seek that evidence.",
      "Assign someone to argue the opposite case in key meetings.",
      "Track decisions and outcomes to see where your beliefs misled you.",
    ],
    misread:
      "Having beliefs isn't the problem — refusing to update them is.",
    question: "What evidence would change your mind about your current biggest bet?",
    related: ["survivorship-bias", "hindsight-bias", "law-of-the-instrument", "dunning-kruger-effect"],
    link: { kind: "tool", slug: "swot-builder", label: "Force yourself to list weaknesses" },
  },
  {
    slug: "sunk-cost-fallacy",
    name: "Sunk Cost Fallacy",
    aka: ["Concorde fallacy"],
    category: "cognitive-biases",
    oneLiner:
      "People keep investing in a failing project because of what they have already spent, rather than what it will cost from here.",
    origin:
      "Studied by Hal Arkes and Catherine Blumer in 1985, including an experiment where people chose a less enjoyable ski trip because they had paid more for it. The Anglo-French Concorde jet is the classic business example.",
    explanation: [
      "Money, time, and effort already spent cannot be recovered. Rational decisions should only look at future costs and benefits. But losing what we have invested feels painful, so we throw good money after bad.",
      "Businesses fall into it with failing products, bad hires, underperforming branches, and long software projects.",
    ],
    examples: [
      { title: "Products", body: "A company keeps funding a product line for three more years ‘because we've already spent ₹2 crore on it’." },
      { title: "Hires", body: "A manager keeps an underperformer because of the time invested in training them." },
      { title: "Projects", body: "Governments and companies continue overrunning projects because stopping would ‘waste’ past spending." },
    ],
    apply: [
      "When reviewing a project, ignore past spend and ask: knowing what I know now, would I start this today?",
      "Set clear kill criteria at the start of projects.",
      "Review major investments at fixed checkpoints.",
      "Reward teams for stopping bad projects early.",
    ],
    misread:
      "It doesn't mean quitting at the first difficulty — only that past costs shouldn't drive future decisions.",
    question: "What are you continuing mainly because of what you have already put into it?",
    related: ["loss-aversion", "commitment-and-consistency", "endowment-effect", "planning-fallacy"],
    caseStudySlugs: ["kodak-digital-camera", "segway-failure"],
  },
  {
    slug: "survivorship-bias",
    name: "Survivorship Bias",
    category: "cognitive-biases",
    oneLiner:
      "Drawing conclusions only from the winners who survived, while ignoring the many who failed, leads to false lessons.",
    origin:
      "The classic example comes from statistician Abraham Wald at Columbia University's Statistical Research Group in World War II. Asked where to armour returning bombers, he pointed out that the holes showed where planes could be hit and still return — the missing planes were hit elsewhere.",
    explanation: [
      "Success stories are visible; failures disappear. If you only study successful founders who dropped out of college, you might conclude dropping out causes success — ignoring the thousands who dropped out and failed.",
      "Good business learning looks at failures and the full sample, not just famous winners.",
    ],
    examples: [
      { title: "Startup advice", body: "Following a famous founder's habits ignores many who did the same and failed." },
      { title: "Marketing", body: "Studying only the viral campaigns ignores the hundreds of similar ones that went nowhere." },
      { title: "Funds", body: "Mutual fund performance looks better on average because closed, failed funds disappear from the data." },
    ],
    apply: [
      "When studying success, ask: how many tried this and failed?",
      "Study failures in your industry as seriously as successes.",
      "Look at full data sets, not highlight reels.",
      "Be careful with advice from one successful person's story.",
    ],
    misread:
      "Success stories still contain lessons — just not reliable ones without the failures alongside.",
    question: "What business lesson have you learned only from the winners?",
    related: ["confirmation-bias", "sturgeons-law", "hindsight-bias", "lindy-effect"],
    caseStudySlugs: ["nokia-smartphone-fall", "wework-collapse"],
  },
  {
    slug: "availability-heuristic",
    name: "Availability Heuristic",
    category: "cognitive-biases",
    oneLiner:
      "People judge how likely something is by how easily examples come to mind, not by actual frequency.",
    origin:
      "Described by Amos Tversky and Daniel Kahneman in 1973 as one of the mental shortcuts people use to judge probability.",
    explanation: [
      "Vivid, recent, or emotional events feel more common than they are. One angry customer review sticks in memory more than a hundred quiet happy customers.",
      "Business decisions based on memorable anecdotes rather than data often over-react to rare events and ignore steady trends.",
    ],
    examples: [
      { title: "Customer feedback", body: "A founder redesigns a product after one loud complaint, though data shows most customers are satisfied." },
      { title: "Risk", body: "After hearing about a supplier fraud, a company over-invests in checks for that one risk while ignoring bigger ones." },
      { title: "Hiring", body: "A manager avoids hiring from a city because one bad hire came from there." },
    ],
    apply: [
      "When a vivid example drives a decision, check the data.",
      "Track key metrics so you can see actual frequencies.",
      "Separate memorable anecdotes from representative patterns.",
      "Ask: is this common, or just memorable?",
    ],
    misread:
      "Anecdotes can reveal real problems — they just need checking against the full picture.",
    question: "Which recent dramatic event is driving a decision that the data might not support?",
    related: ["confirmation-bias", "baader-meinhof-phenomenon", "hindsight-bias", "optimism-bias"],
  },
  {
    slug: "halo-effect",
    name: "Halo Effect",
    category: "cognitive-biases",
    oneLiner:
      "One positive trait — like looks, fame, or a single success — makes people judge everything else about a person or brand more favourably.",
    origin:
      "Psychologist Edward Thorndike named it in 1920 after finding military officers rated soldiers' traits in suspiciously consistent ways. Phil Rosenzweig's 2007 book The Halo Effect showed how it distorts business analysis.",
    explanation: [
      "A strong first impression spreads to unrelated judgements. A well-dressed candidate seems more competent; a profitable company's strategy seems brilliant; a beautiful product seems reliable.",
      "Brands benefit from halos, but leaders and investors must be careful not to let them cloud judgement.",
    ],
    examples: [
      { title: "Brands", body: "A trusted brand launches a new category and customers assume it is good quality." },
      { title: "Hiring", body: "A candidate from a famous college is assumed to be strong across all skills." },
      { title: "Business press", body: "When a company is doing well, its culture and CEO are praised; when it struggles, the same traits are blamed." },
    ],
    apply: [
      "Build a strong positive first impression for your brand.",
      "When judging people, rate each trait separately with evidence.",
      "Use structured interviews and scorecards.",
      "Look past a company's results when studying its strategy.",
    ],
    misread:
      "The halo can be negative too (the ‘horns effect’) — one flaw can colour everything.",
    question: "Where might a first impression be distorting how you judge someone on your team?",
    related: ["aesthetic-usability-effect", "authority-principle", "pratfall-effect", "confirmation-bias"],
    link: { kind: "tool", slug: "hiring-scorecard", label: "Use a structured hiring scorecard" },
  },
  {
    slug: "planning-fallacy",
    name: "Planning Fallacy",
    category: "cognitive-biases",
    oneLiner:
      "People underestimate how long tasks will take and how much they will cost, even when they know past projects ran over.",
    origin:
      "Proposed by Daniel Kahneman and Amos Tversky in 1979. Roger Buehler and colleagues confirmed it in 1994 with students predicting thesis completion times. The Sydney Opera House, planned in the 1950s for about A$7 million and finished in 1973 for over A$100 million, is a famous example.",
    explanation: [
      "We plan for the best-case scenario and imagine everything going smoothly. We focus on the specific project and ignore what usually happens to projects like it.",
      "The fix is ‘reference class forecasting’: look at how similar projects actually went and plan from that.",
    ],
    examples: [
      { title: "Store openings", body: "A retailer plans a new outlet in two months; permits, fit-out, and hiring take five." },
      { title: "Software", body: "A three-month app build stretches to nine months." },
      { title: "Budgets", body: "Marketing budgets for launches are routinely exceeded." },
    ],
    apply: [
      "Look at how long similar past projects actually took.",
      "Add a buffer based on that history, not on hope.",
      "Break projects into small steps and estimate each.",
      "Track estimates against actuals to improve over time.",
    ],
    misread:
      "It doesn't mean planning is useless — it means plans need realistic buffers.",
    question: "How long did your last similar project actually take compared with the plan?",
    related: ["hofstadters-law", "optimism-bias", "ninety-ninety-rule", "murphys-law"],
    link: { kind: "tool", slug: "cash-flow-simulator", label: "Stress-test your cash plan" },
  },
  {
    slug: "hindsight-bias",
    name: "Hindsight Bias",
    aka: ["I-knew-it-all-along effect"],
    category: "cognitive-biases",
    oneLiner:
      "After something happens, people believe they predicted it or that it was obvious all along.",
    origin:
      "Psychologist Baruch Fischhoff demonstrated it in 1975, showing that people told an outcome rated it as far more predictable than those who weren't told.",
    explanation: [
      "Once we know the outcome, our memory rewrites the past to make it seem inevitable. This makes us overconfident about predicting the future and unfair in judging past decisions.",
      "In business, hindsight bias distorts post-mortems and leads to blaming people for decisions that were reasonable at the time.",
    ],
    examples: [
      { title: "Post-mortems", body: "After a failed launch, everyone ‘knew’ it wouldn't work — though no one said so beforehand." },
      { title: "Investing", body: "After a crash, investors believe the signs were obvious." },
      { title: "Hiring", body: "When a hire fails, managers claim they had doubts all along." },
    ],
    apply: [
      "Write down predictions and reasons before making decisions.",
      "In reviews, judge decisions on information available at the time.",
      "Separate bad decisions from bad luck.",
      "Keep a decision journal.",
    ],
    misread:
      "Learning from the past is good — the bias is in thinking it was obvious, which blocks real learning.",
    question: "Did you write down your prediction before your last big decision?",
    related: ["confirmation-bias", "survivorship-bias", "availability-heuristic"],
  },
  {
    slug: "status-quo-bias",
    name: "Status Quo Bias",
    category: "cognitive-biases",
    oneLiner:
      "People prefer things to stay the same and tend to stick with defaults, even when change would benefit them.",
    origin:
      "Named by economists William Samuelson and Richard Zeckhauser in 1988. Eric Johnson and Daniel Goldstein's 2003 study showed organ donation rates were dramatically higher in countries where donation was the default.",
    explanation: [
      "Change requires effort and carries risk; staying put feels safe. So people keep the same bank, supplier, plan, or habit — even when better options exist.",
      "For businesses, this is both a barrier (getting customers to switch) and an asset (keeping customers once they are yours). Defaults are powerful.",
    ],
    examples: [
      { title: "Defaults", body: "Pre-selecting a ‘standard’ plan leads most customers to choose it." },
      { title: "Switching", body: "Customers stay with an old supplier even when a cheaper one is available." },
      { title: "Internal change", body: "Teams resist new software even if it is clearly better." },
    ],
    apply: [
      "Set smart, customer-friendly defaults.",
      "To win customers from competitors, make switching effortless.",
      "To keep customers, make staying the easy default.",
      "For internal change, reduce effort and show quick wins.",
    ],
    misread:
      "Defaults that trick people (hidden auto-renewals, pre-ticked add-ons) can breach consumer law and destroy trust.",
    question: "What default choice are your customers making without thinking — and is it the right one?",
    related: ["loss-aversion", "endowment-effect", "jakobs-law", "chestertons-fence"],
    strategySlugs: ["switching-costs"],
    link: { kind: "framework", slug: "switching-barriers", label: "Lower switching barriers" },
  },
  {
    slug: "optimism-bias",
    name: "Optimism Bias",
    category: "cognitive-biases",
    oneLiner:
      "People believe they are less likely than others to experience bad outcomes and more likely to experience good ones.",
    origin:
      "Psychologist Neil Weinstein documented ‘unrealistic optimism’ in 1980. Neuroscientist Tali Sharot's research and her 2011 book The Optimism Bias brought it wider attention.",
    explanation: [
      "Most people think they are above-average drivers, and most founders think their business will beat the odds. Optimism fuels entrepreneurship, but it also leads to underestimating risks and costs.",
      "The goal is not pessimism — it is planning that honestly accounts for the base rates of failure.",
    ],
    examples: [
      { title: "Startups", body: "Founders expect profitability in year one while most similar businesses take much longer." },
      { title: "Sales forecasts", body: "Sales teams routinely forecast more deals than they close." },
      { title: "Cash", body: "Owners assume all customers will pay on time and run short of cash." },
    ],
    apply: [
      "Check your forecasts against industry base rates.",
      "Build a downside scenario alongside your best case.",
      "Hold cash buffers for when optimism proves wrong.",
      "Ask a sceptical outsider to review your plan.",
    ],
    misread:
      "Optimism is not bad — it helps people start things. It needs to be paired with realistic planning.",
    question: "What would your plan look like if sales came in at half your forecast?",
    related: ["planning-fallacy", "dunning-kruger-effect", "hofstadters-law", "says-law"],
    link: { kind: "tool", slug: "cash-runway", label: "Check your downside runway" },
  },
  {
    slug: "spotlight-effect",
    name: "Spotlight Effect",
    category: "cognitive-biases",
    oneLiner:
      "People overestimate how much others notice their appearance, mistakes, and actions.",
    origin:
      "Psychologists Thomas Gilovich, Victoria Husted Medvec, and Kenneth Savitsky showed it in 2000: students wearing an embarrassing T-shirt thought about half the room noticed, when only around a quarter did.",
    explanation: [
      "Everyone is the centre of their own world, so we assume others pay close attention to us. In reality, people are mostly thinking about themselves.",
      "For business owners, the spotlight effect makes small mistakes feel catastrophic and stops people from posting content, launching, or asking for the sale.",
    ],
    examples: [
      { title: "Content", body: "A founder delays posting videos, worried about how they look; viewers care about the useful content." },
      { title: "Launches", body: "A small typo on a launch email causes panic, but almost no customers notice." },
      { title: "Sales", body: "A salesperson worries a pitch sounded awkward; the client only remembers the offer." },
    ],
    apply: [
      "Remember that customers are thinking about their own problems, not your mistakes.",
      "Ship and improve rather than waiting for perfection.",
      "Fix serious errors quickly; let small ones go.",
      "Ask a neutral person whether something is actually noticeable.",
    ],
    misread:
      "It doesn't mean nothing matters — major mistakes still get noticed. It means small ones matter less than you fear.",
    question: "What have you delayed because you overestimated how closely people would judge it?",
    related: ["pratfall-effect", "hanlons-razor", "curse-of-knowledge"],
  },
  {
    slug: "baader-meinhof-phenomenon",
    name: "Baader–Meinhof Phenomenon",
    aka: ["Frequency illusion"],
    category: "cognitive-biases",
    oneLiner:
      "After you notice something for the first time, you start seeing it everywhere — and wrongly assume it has become more common.",
    origin:
      "The name comes from a 1994 letter to a St. Paul, Minnesota newspaper by a reader who kept encountering the name of the German militant group. Linguist Arnold Zwicky coined the term ‘frequency illusion’ in 2005.",
    explanation: [
      "Your brain's attention system starts flagging something new as relevant, so you notice it more. Combined with confirmation bias, you believe it is suddenly everywhere.",
      "Marketers benefit from it — once customers notice a brand, they see it more — but owners should be careful about mistaking personal noticing for market trends.",
    ],
    examples: [
      { title: "Buying a car", body: "After buying a particular car model, you see the same model all over the road." },
      { title: "Trends", body: "An owner reads about a new business model and suddenly thinks everyone is doing it." },
      { title: "Brand awareness", body: "After a customer sees your ad, they start noticing your shop sign every day." },
    ],
    apply: [
      "Before acting on a ‘trend’ you've noticed, check actual data.",
      "Use consistent branding so customers keep noticing you after first contact.",
      "Retarget new visitors so your brand appears again soon after first exposure.",
      "Treat sudden ‘everywhere’ feelings as a prompt to measure, not a conclusion.",
    ],
    misread:
      "Sometimes things really are becoming more common — the illusion just means your perception isn't proof.",
    question: "Which ‘trend’ in your industry have you noticed recently — and do you have data to confirm it?",
    related: ["availability-heuristic", "confirmation-bias", "mere-exposure-effect"],
  },
  {
    slug: "yerkes-dodson-law",
    name: "Yerkes–Dodson Law",
    category: "cognitive-biases",
    oneLiner:
      "Performance improves with stress or arousal up to a point, then declines when pressure gets too high.",
    origin:
      "Psychologists Robert Yerkes and John Dodson published it in 1908 after experiments with mice learning tasks under different levels of mild shock. It is usually drawn as an inverted U-shaped curve.",
    explanation: [
      "Too little pressure leads to boredom and low effort; moderate pressure focuses attention; too much causes anxiety and mistakes. The ideal level is lower for complex tasks than for simple ones.",
      "For managers, the lesson is to set stretching but achievable goals, and to watch for burnout when pressure stays too high.",
    ],
    examples: [
      { title: "Deadlines", body: "A realistic deadline helps a team focus, while an impossible one causes errors and corner-cutting." },
      { title: "Sales", body: "Sales teams with stretch targets perform well; those with unachievable targets give up or game numbers." },
      { title: "Presentations", body: "A little nervousness sharpens a speaker; panic makes them forget their points." },
    ],
    apply: [
      "Set goals that stretch but are achievable.",
      "Use lower pressure for complex, creative tasks.",
      "Watch for signs of overload: errors, absenteeism, conflict.",
      "Add challenge when teams seem bored or disengaged.",
    ],
    misread:
      "It doesn't mean stress is good. The curve shows a sweet spot — beyond it, pressure destroys performance.",
    question: "Is your team bored, stretched, or overwhelmed right now?",
    related: ["parkinsons-law", "goodharts-law", "pygmalion-effect", "hedonic-treadmill"],
    link: { kind: "framework", slug: "talent-engagement", label: "Check team engagement" },
  },
  {
    slug: "hedonic-treadmill",
    name: "Hedonic Treadmill",
    aka: ["Hedonic adaptation"],
    category: "cognitive-biases",
    oneLiner:
      "People quickly adapt to improvements in their lives, so happiness tends to return to a baseline after gains or losses.",
    origin:
      "Psychologists Philip Brickman and Donald Campbell coined the term in 1971. A 1978 study by Brickman, Dan Coates, and Ronnie Janoff-Bulman found lottery winners were not much happier than others a while later.",
    explanation: [
      "A new car, a raise, or a bigger office feels great — for a while. Then it becomes normal. Customers adapt to product features the same way.",
      "For businesses, this means delight fades: what wowed customers last year is expected this year. It also explains why money alone rarely keeps employees happy for long.",
    ],
    examples: [
      { title: "Product features", body: "Free delivery was once a delight; now customers expect it." },
      { title: "Salaries", body: "A raise boosts morale briefly, then becomes the new baseline." },
      { title: "Service", body: "Hotels must keep finding new touches because guests adapt to old ones." },
    ],
    apply: [
      "Keep refreshing customer experience; yesterday's delight is today's baseline.",
      "Mix pay with meaningful recognition, growth, and purpose for staff.",
      "Introduce small surprises rather than one big upgrade.",
      "Remember your own adaptation when making lifestyle and business spending decisions.",
    ],
    misread:
      "Improvements still matter — they just need to be renewed and combined with things people adapt to more slowly.",
    question: "What do your customers now take for granted that once delighted them?",
    related: ["law-of-diminishing-marginal-utility", "peak-end-rule", "yerkes-dodson-law"],
  },
  {
    slug: "law-of-effect",
    name: "Thorndike's Law of Effect",
    category: "cognitive-biases",
    oneLiner:
      "Behaviours followed by satisfying results are more likely to be repeated; those followed by unpleasant results are less likely.",
    origin:
      "Psychologist Edward Thorndike proposed it around 1898–1911 after experiments with cats escaping puzzle boxes. It became a foundation for B. F. Skinner's work on reinforcement.",
    explanation: [
      "People and animals repeat what is rewarded. In business, this applies to customers (rewarded purchases), employees (rewarded behaviours), and yourself (rewarded habits).",
      "The timing and consistency of rewards matter: immediate, clear rewards shape behaviour more than distant or vague ones.",
    ],
    examples: [
      { title: "Loyalty programmes", body: "Instant cashback encourages repeat purchases more than points redeemable next year." },
      { title: "Management", body: "Praising good work immediately encourages more of it." },
      { title: "Unintended rewards", body: "Rewarding only loud complaints teaches customers to complain loudly." },
    ],
    apply: [
      "Identify the behaviours you want from customers and staff.",
      "Reward them quickly and clearly.",
      "Check what behaviours you are rewarding by accident.",
      "Remove rewards for behaviours you don't want.",
    ],
    misread:
      "Rewards can crowd out intrinsic motivation if overused for things people already enjoy doing.",
    question: "What behaviour is your business accidentally rewarding?",
    related: ["premack-principle", "cobra-effect", "goodharts-law", "hawthorne-effect"],
    strategySlugs: ["habit-forming-loop"],
  },
  {
    slug: "curse-of-knowledge",
    name: "Curse of Knowledge",
    category: "cognitive-biases",
    oneLiner:
      "Once you know something, it is hard to imagine not knowing it — so experts explain things badly to beginners.",
    origin:
      "Named by economists Colin Camerer, George Loewenstein, and Martin Weber in 1989. Elizabeth Newton's 1990 Stanford study showed people tapping songs predicted listeners would guess half of them; listeners guessed about 2.5%.",
    explanation: [
      "Experts skip steps, use jargon, and assume context that customers and new staff don't have. They genuinely can't see the gap.",
      "In business, the curse of knowledge damages marketing copy, product onboarding, training, and instructions.",
    ],
    examples: [
      { title: "Marketing copy", body: "A tech company describes its product in technical terms buyers don't understand." },
      { title: "Training", body: "A senior employee trains a new hire too fast and assumes knowledge they don't have." },
      { title: "Instructions", body: "Assembly instructions written by engineers confuse customers." },
    ],
    apply: [
      "Test your messages and instructions with real beginners.",
      "Replace jargon with plain words and examples.",
      "Use concrete stories and analogies.",
      "Watch new customers use your product without helping them.",
    ],
    misread:
      "Expertise is valuable — the curse is in forgetting what it is like not to have it.",
    question: "Would a complete beginner understand your homepage in ten seconds?",
    related: ["millers-law", "dunning-kruger-effect", "hanlons-razor", "spotlight-effect"],
    link: { kind: "framework", slug: "sop-builder", label: "Write SOPs a beginner can follow" },
  },
];
