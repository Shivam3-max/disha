import type { Law } from "./knowledgeTypes";

export const LAWS_BUSINESS: Law[] = [
  {
    slug: "pareto-principle",
    name: "Pareto Principle (80/20 Rule)",
    aka: ["80/20 rule", "Law of the vital few", "Principle of factor sparsity"],
    category: "business-strategy",
    oneLiner:
      "Roughly 80% of results come from 20% of causes — a small share of customers, products, or efforts drives most of the outcome.",
    origin:
      "Italian economist Vilfredo Pareto noticed in 1896 that about 80% of Italy's land was owned by 20% of the population. Quality-management pioneer Joseph Juran generalised the idea in the 1940s as “the vital few and the trivial many” and named it after Pareto.",
    explanation: [
      "The 80/20 split is not a magic ratio — it might be 70/30 or 95/5 — but the pattern is remarkably common: outcomes in business are rarely spread evenly. A handful of customers produce most of the profit, a few products carry the range, and a few defects cause most complaints.",
      "The practical value is focus. Once you can see which 20% is doing the heavy lifting, you can protect it, feed it, and stop spending equal energy on everything else.",
    ],
    examples: [
      { title: "Customers", body: "A distributor finds 18% of retailers generate 76% of gross margin. Their account managers now spend most visits on those stores and move the long tail to phone ordering." },
      { title: "Products", body: "A sweet shop with 120 SKUs discovers 22 items make up 80% of sales. Trimming slow movers frees shelf space and cuts wastage." },
      { title: "Problems", body: "A software team logs every bug report and finds three root causes behind most tickets. Fixing those three clears the backlog faster than fixing tickets one by one." },
    ],
    apply: [
      "Export a year of sales by customer and by product, then sort from highest to lowest contribution.",
      "Mark the point where the running total crosses 80% — that is your vital few.",
      "Decide what extra attention the vital few deserve (service, stock, pricing) and what the trivial many can live without.",
      "Repeat the exercise for costs, complaints, and time spent — the same pattern usually appears.",
    ],
    misread:
      "It does not mean you can drop 80% of your work and keep 80% of the results. The long tail often feeds the top (a small customer today may be a big one tomorrow), so trim deliberately, not blindly.",
    question: "Which 20% of your customers would hurt most to lose — and do they get 80% of your attention?",
    related: ["law-of-diminishing-returns", "matthew-effect", "price-law", "parkinsons-law"],
    link: { kind: "tool", slug: "customer-lifetime", label: "Find your most valuable customers" },
  },
  {
    slug: "murphys-law",
    name: "Murphy's Law",
    aka: ["Anything that can go wrong will go wrong"],
    category: "business-strategy",
    oneLiner:
      "Anything that can go wrong will go wrong — so design plans, processes, and products assuming failure will eventually happen.",
    origin:
      "Named after Edward A. Murphy Jr., an engineer working on US Air Force rocket-sled experiments (project MX981) at Edwards Air Force Base in 1949, after sensors were wired backwards. The team turned his remark into a design rule.",
    explanation: [
      "Murphy's law is less pessimism than engineering discipline: if a process allows a mistake, someone will eventually make it. Given enough repetitions, rare failures become certain.",
      "Good businesses respond by making errors hard to commit and cheap to recover from — checklists, backups, buffers, and mistake-proofing rather than relying on everyone being careful forever.",
    ],
    examples: [
      { title: "Launch day", body: "An online store plans for its payment gateway to fail during a festive sale and keeps a second gateway switched on. When the first one drops, orders keep flowing." },
      { title: "Cash", body: "A contractor assumes at least one big client will pay late every quarter and holds a two-month cash buffer instead of running to zero." },
      { title: "Operations", body: "A kitchen colour-codes chopping boards so raw meat and vegetables can never share one, instead of trusting staff memory." },
    ],
    apply: [
      "List the five steps in your business where a single failure would stop revenue.",
      "For each, ask: what is the most likely way this goes wrong, and what would it cost?",
      "Add one safeguard per step — a backup, a checklist, a buffer, or a design that makes the error impossible.",
      "Run a small fire drill once a quarter to check the safeguard actually works.",
    ],
    misread:
      "It is not a reason to stop acting or to plan for every imaginable disaster. Protect the failures that are likely and expensive; accept the ones that are rare and cheap.",
    question: "If your single most important supplier, system, or person disappeared tomorrow, what would break first?",
    related: ["law-of-unintended-consequences", "hofstadters-law", "planning-fallacy", "galls-law"],
    link: { kind: "tool", slug: "cash-runway", label: "Check your cash buffer" },
  },
  {
    slug: "goodharts-law",
    name: "Goodhart's Law",
    aka: ["When a measure becomes a target, it ceases to be a good measure"],
    category: "business-strategy",
    oneLiner:
      "When a measure becomes a target, it stops being a good measure — people optimise the number instead of the result it was meant to track.",
    origin:
      "British economist Charles Goodhart described the effect in 1975 while writing about monetary policy. The popular wording comes from anthropologist Marilyn Strathern in 1997.",
    explanation: [
      "Metrics are proxies. Calls made is a proxy for sales effort; tickets closed is a proxy for customer help. The moment pay or praise depends on the proxy, people find ways to move the number without moving the real goal.",
      "Goodhart's law does not say measuring is bad. It says single numbers tied to rewards get gamed, so you need balancing metrics and regular conversations about what the number is supposed to mean.",
    ],
    examples: [
      { title: "Support desk", body: "Agents rewarded on tickets closed per hour start closing tickets before problems are solved. Reopen rates climb and customers get angrier." },
      { title: "Sales", body: "A team targeted purely on revenue offers deep discounts in the last week of each month. Revenue hits target while margin quietly collapses." },
      { title: "Hiring", body: "Recruiters measured on time-to-hire fill roles quickly with weak candidates, and attrition six months later wipes out the gain." },
    ],
    apply: [
      "For every target, write down the real outcome it is meant to represent.",
      "Pair each target with a counter-metric that catches gaming (revenue with margin, speed with quality, volume with repeat rate).",
      "Review the numbers alongside real examples — read the tickets, listen to the calls.",
      "Rotate or retire metrics that have clearly been gamed.",
    ],
    misread:
      "It is not an argument against targets. Teams without measures drift; the fix is better, balanced measures — not none.",
    question: "Which number in your business could your team hit next month while the business actually gets worse?",
    related: ["cobra-effect", "law-of-unintended-consequences", "hawthorne-effect", "pournelles-iron-law"],
    link: { kind: "framework", slug: "execution-scoreboard", label: "Build a balanced scoreboard" },
  },
  {
    slug: "galls-law",
    name: "Gall's Law",
    category: "business-strategy",
    oneLiner:
      "A complex system that works is always found to have evolved from a simple system that worked — complex systems designed from scratch rarely do.",
    origin:
      "Paediatrician and systems writer John Gall set it out in his 1975 book Systemantics, a witty study of why large organisations and systems so often fail.",
    explanation: [
      "Every working complex system — a franchise network, an ERP, a 50-person sales team — started as something small that worked and then grew. Trying to design the whole complex version up front usually fails because you cannot predict all the interactions.",
      "For founders and managers this is a strong argument for minimum viable versions, pilots, and incremental rollouts over grand launches.",
    ],
    examples: [
      { title: "Franchising", body: "A food brand perfects operations in one outlet, then three, before writing the franchise manual — instead of designing a 100-outlet system on paper." },
      { title: "Software", body: "A company replaces a planned two-year ERP project with a simple order tracker that works in month one, then adds modules as the team actually uses it." },
      { title: "Marketing", body: "A D2C brand proves one channel profitably before adding five more at once." },
    ],
    apply: [
      "Write the smallest version of the system that would deliver real value.",
      "Run it until it works reliably with real customers or staff.",
      "Add one layer of complexity at a time, and only when the current version is stable.",
      "If a complex system is failing, step back to the last simple version that worked.",
    ],
    misread:
      "It does not forbid ambition. You can aim for a large, complex business — Gall's law is about the route there, not the destination.",
    question: "What is the simplest version of your next big project that could work in 30 days?",
    related: ["occams-razor", "teslers-law", "ninety-ninety-rule", "murphys-law"],
    link: { kind: "framework", slug: "pilot-market", label: "Plan a pilot first" },
  },
  {
    slug: "sturgeons-law",
    name: "Sturgeon's Law",
    aka: ["Ninety percent of everything is crud"],
    category: "business-strategy",
    oneLiner:
      "Ninety percent of everything is crud — in any field, most output is mediocre, so quality is judged by the best ten percent.",
    origin:
      "Science-fiction writer Theodore Sturgeon coined it in the 1950s, defending his genre: critics who judged sci-fi by its worst work should note that 90% of every genre is poor.",
    explanation: [
      "Sturgeon's law is a reminder that averages mislead. Most ideas, hires, suppliers, ads, and content will be ordinary. The value sits in the small top slice.",
      "It is also freeing: you do not need every experiment to work. You need a process that generates many attempts and is ruthless about keeping only the best.",
    ],
    examples: [
      { title: "Content", body: "A brand posts 40 pieces of content a month. Three drive most of the follows and leads; the team studies those and makes more like them." },
      { title: "Hiring", body: "A founder screens 200 applications expecting most to be weak and builds a quick filter so time goes only to the top 20." },
      { title: "Ideas", body: "A product team generates 30 feature ideas, scores them, and builds just three." },
    ],
    apply: [
      "Expect most attempts to be average and plan volume accordingly.",
      "Define in advance what the top 10% looks like so you can spot it fast.",
      "Cut the rest quickly rather than polishing mediocre work.",
      "Study your best outputs and turn their traits into a checklist.",
    ],
    misread:
      "It is not an excuse for cynicism or for shipping low-quality work yourself. The point is to aim for and recognise the top slice.",
    question: "What would change if you produced twice as many attempts and kept only the best third?",
    related: ["pareto-principle", "survivorship-bias", "law-of-diminishing-returns"],
    link: { kind: "tool", slug: "content-calendar", label: "Plan content volume" },
  },
  {
    slug: "lindy-effect",
    name: "Lindy Effect",
    category: "business-strategy",
    oneLiner:
      "For non-perishable things like ideas, books, and technologies, every extra year of survival implies a longer remaining life expectancy.",
    origin:
      "Named after Lindy's delicatessen in New York, where comedians joked in the 1960s about career longevity (written up by Albert Goldman in 1964). Mathematician Benoît Mandelbrot formalised it and Nassim Nicholas Taleb popularised it in Antifragile (2012).",
    explanation: [
      "A business practice that has survived 100 years — double-entry bookkeeping, apprenticeships, retail credit — has been stress-tested in ways a two-year-old trend has not. Its age is evidence of robustness.",
      "For decisions, Lindy suggests building on proven fundamentals and treating brand-new fads with healthy scepticism, while still testing them in small doses.",
    ],
    examples: [
      { title: "Retail", body: "Kirana stores have outlasted several waves of predicted disruption because their core — credit, proximity, relationships — is old and robust." },
      { title: "Marketing", body: "Word of mouth and referrals have worked for centuries; a new social platform may vanish in three years. Invest in both, but weight accordingly." },
      { title: "Management", body: "A founder adopts a decades-old weekly review ritual rather than a new productivity app that keeps changing." },
    ],
    apply: [
      "When choosing between methods, ask how long each has already survived.",
      "Build your core on long-surviving fundamentals (cash discipline, customer service, clear pricing).",
      "Test new trends with small, reversible bets rather than betting the company.",
      "Revisit the trend after a year — if it survived, it has earned more trust.",
    ],
    misread:
      "It does not apply to perishable things like people or machines, which wear out. And old does not mean right — it means battle-tested.",
    question: "Which parts of your business rely on something less than three years old?",
    related: ["amaras-law", "survivorship-bias", "chestertons-fence"],
  },
  {
    slug: "matthew-effect",
    name: "Matthew Effect",
    aka: ["Cumulative advantage", "The rich get richer"],
    category: "business-strategy",
    oneLiner:
      "Advantage compounds: those who already have status, customers, or capital tend to gain more, while those behind fall further back.",
    origin:
      "Sociologist Robert K. Merton named it in 1968 after a verse in the Gospel of Matthew, while studying how famous scientists received more credit than lesser-known colleagues for similar work.",
    explanation: [
      "Early leads snowball. A shop with more reviews ranks higher, gets more customers, and earns more reviews. A brand with more distribution gets better shelf space and more sales.",
      "Understanding this helps in two ways: invest heavily in early momentum, and if you are behind, avoid head-on competition where the leader's compounding advantage is strongest.",
    ],
    examples: [
      { title: "Marketplaces", body: "A seller with 2,000 ratings appears first in search, while a new seller with 10 ratings struggles to be seen — so new sellers often launch with aggressive early offers to collect reviews." },
      { title: "Talent", body: "A well-known employer attracts the best applicants, which makes the company stronger and more attractive still." },
      { title: "Funding", body: "Startups with one marquee investor find the next round easier because other investors follow the signal." },
    ],
    apply: [
      "Identify which advantage in your market compounds (reviews, distribution, data, reputation).",
      "Concentrate early effort on building that advantage fast.",
      "If a competitor already owns it, pick a niche where it matters less.",
      "Track your compounding metric monthly and protect it.",
    ],
    misread:
      "It is a tendency, not destiny. Leaders do fall — usually when they stop investing in the advantage that made them lead.",
    question: "Which advantage in your market snowballs, and are you building it or fighting against it?",
    related: ["metcalfes-law", "pareto-principle", "law-of-leadership", "social-proof"],
    strategySlugs: ["flywheel", "network-effects", "niche-domination"],
  },
  {
    slug: "law-of-unintended-consequences",
    name: "Law of Unintended Consequences",
    category: "business-strategy",
    oneLiner:
      "Actions taken by people, companies, or governments always have effects that were not intended — some helpful, some harmful.",
    origin:
      "Sociologist Robert K. Merton analysed it in his 1936 essay “The Unanticipated Consequences of Purposive Social Action,” citing ignorance, error, and short-term interest as the main causes.",
    explanation: [
      "Businesses are systems of people reacting to incentives. Change one rule and people adapt in ways no one planned — a new policy can fix one problem and quietly create two more.",
      "The defence is to think one step further: “and then what?” Ask how each group affected will react, not only what the change is meant to do.",
    ],
    examples: [
      { title: "Return policy", body: "A retailer introduces free returns to boost conversions. Sales rise, but so does ‘wardrobing’ — buying for one event and returning — eating into margins." },
      { title: "Commission", body: "A company pays commission on signed contracts rather than collected cash, and receivables balloon." },
      { title: "Cost cutting", body: "Cutting the training budget saves money this year and raises error and attrition costs the next." },
    ],
    apply: [
      "Before any policy change, list every group it touches: customers, staff, suppliers, competitors.",
      "For each, ask how they will change their behaviour in response.",
      "Pilot the change with a small group and watch for surprises.",
      "Set a review date to check side-effects, not only the intended result.",
    ],
    misread:
      "It is not an argument against change. It is a reminder to watch the second-order effects and adjust quickly.",
    question: "What is the most likely way your next policy change could backfire?",
    related: ["cobra-effect", "goodharts-law", "chestertons-fence", "jevons-paradox"],
  },
  {
    slug: "cobra-effect",
    name: "Cobra Effect",
    aka: ["Perverse incentive"],
    category: "business-strategy",
    oneLiner:
      "An incentive meant to solve a problem makes it worse because people find a way to profit from the problem itself.",
    origin:
      "German economist Horst Siebert coined the term, after a widely told (and loosely documented) story of a bounty on dead cobras in colonial Delhi that led people to breed cobras. A better-documented case is the 1902 rat bounty in Hanoi, where people cut off rat tails and released the rats to breed.",
    explanation: [
      "The cobra effect is a sharp version of Goodhart's law: the reward is attached to something people can manufacture. Instead of reducing the problem, the incentive creates a market for it.",
      "In business it shows up in bonuses, discounts, and partner schemes that reward activity which can be faked or inflated.",
    ],
    examples: [
      { title: "Referral schemes", body: "A fintech pays ₹500 per sign-up and gets thousands of fake accounts created by the same few people." },
      { title: "Bug bounties inside a team", body: "Paying developers per bug fixed can tempt people to ship bugs they later fix." },
      { title: "Dealer targets", body: "Dealers rewarded on units sold to them push stock into the channel that never sells through to customers." },
    ],
    apply: [
      "For any incentive, ask: can someone earn this by creating the problem or faking the result?",
      "Reward the final outcome (paying customer retained 90 days) rather than an easy-to-fake activity.",
      "Cap, audit, or delay payouts until results are verified.",
      "Watch for sudden spikes that look too good — they often are.",
    ],
    misread:
      "Incentives still work; the lesson is to tie them to outcomes that are hard to game.",
    question: "Could anyone make money from your current incentive without actually helping the business?",
    related: ["goodharts-law", "law-of-unintended-consequences", "law-of-effect"],
    strategySlugs: ["referral-engine"],
  },
  {
    slug: "chestertons-fence",
    name: "Chesterton's Fence",
    category: "business-strategy",
    oneLiner:
      "Don't remove a rule, process, or ‘fence’ until you know why it was put there in the first place.",
    origin:
      "From English writer G. K. Chesterton's 1929 book The Thing, where a reformer wants to clear away a fence across a road and a wiser one says: first find out why it was built.",
    explanation: [
      "New managers and founders love cleaning up legacy processes. Many really are useless — but some exist because of a painful past failure that no one remembers.",
      "Chesterton's fence asks for a small amount of investigation before removal. If you find the reason and it no longer applies, remove it with confidence.",
    ],
    examples: [
      { title: "Approval step", body: "A new COO scraps a second sign-off on vendor payments as ‘bureaucracy’. Months later a duplicate-invoice fraud recurs — the exact reason it was introduced." },
      { title: "Packaging", body: "A brand removes an ‘unnecessary’ inner carton to save cost and breakage claims jump in monsoon season." },
      { title: "Pricing rule", body: "A sales head learns a minimum order rule exists because small orders were loss-making after delivery costs." },
    ],
    apply: [
      "Before cutting a process, ask the oldest team member or check records for why it started.",
      "Write the original reason down next to the process.",
      "If the reason is gone, remove it; if not, redesign it to be lighter.",
      "Document the reason for every new rule you create, for the next person.",
    ],
    misread:
      "It does not mean ‘never change anything’. It means do the homework first — then change boldly.",
    question: "Which process are you itching to remove, and do you actually know why it exists?",
    related: ["law-of-unintended-consequences", "lindy-effect", "status-quo-bias"],
    link: { kind: "framework", slug: "sop-builder", label: "Document why each process exists" },
  },
  {
    slug: "occams-razor",
    name: "Occam's Razor",
    aka: ["Law of parsimony"],
    category: "business-strategy",
    oneLiner:
      "When several explanations fit the facts, prefer the simplest one — the one that needs the fewest assumptions.",
    origin:
      "Named after William of Ockham, a 14th-century English friar and logician, who argued that one should not multiply entities beyond necessity.",
    explanation: [
      "When sales drop, it is tempting to build elaborate theories about the economy, competitors, and algorithms. Often the explanation is simpler: a price change, a stock-out, a broken checkout page.",
      "Occam's razor is a debugging rule for business: check the simple causes first, and prefer simple solutions that are easier to execute and maintain.",
    ],
    examples: [
      { title: "Falling conversions", body: "A team plans a full website redesign — then discovers the coupon field was throwing an error on mobile." },
      { title: "Staff turnover", body: "Before launching a culture programme, a factory checks wages against the unit next door and finds a ₹2,000 gap." },
      { title: "Strategy", body: "A simple offer — one product, one price, one promise — outperforms a complex tiered bundle." },
    ],
    apply: [
      "List every explanation for the problem.",
      "Rank them by how many assumptions each requires.",
      "Test the simplest ones first — they are usually cheapest to check.",
      "Prefer the simplest fix that fully solves the problem.",
    ],
    misread:
      "Simplest is not always correct — it is the best starting point. If evidence contradicts it, move to the next explanation.",
    question: "What is the most boring explanation for your biggest current problem?",
    related: ["hanlons-razor", "galls-law", "kidlins-law", "teslers-law"],
  },
  {
    slug: "hanlons-razor",
    name: "Hanlon's Razor",
    category: "business-strategy",
    oneLiner:
      "Never attribute to malice what is adequately explained by mistake, ignorance, or busyness.",
    origin:
      "Credited to Robert J. Hanlon, who submitted it to a 1980 collection of Murphy's-law-style sayings. Similar ideas appear much earlier, including in Goethe.",
    explanation: [
      "When a supplier misses a deadline, a colleague drops a ball, or a customer sends a rude email, the instinct is to assume bad intent. Usually the real cause is overload, confusion, or a broken process.",
      "Assuming error rather than malice keeps relationships intact and points you to fixable causes — while still letting you act if a pattern of bad faith appears.",
    ],
    examples: [
      { title: "Vendors", body: "A late delivery turns out to be caused by your own unclear purchase order, not a vendor playing games." },
      { title: "Teams", body: "A manager assumes a missed report is laziness; it was actually stuck in a shared drive permission problem." },
      { title: "Customers", body: "An angry complaint comes from a confusing invoice format; redesigning it cuts complaints in half." },
    ],
    apply: [
      "When something goes wrong, first ask: what process or information gap could explain this?",
      "Ask the person directly and neutrally before drawing conclusions.",
      "Fix the system cause if you find one.",
      "Only treat it as bad faith after a repeated, clear pattern.",
    ],
    misread:
      "It is not naïvety. Fraud and bad actors exist; Hanlon's razor is a default starting assumption, not a blindfold.",
    question: "Who are you currently annoyed with, and what non-malicious explanation have you not checked?",
    related: ["occams-razor", "curse-of-knowledge", "spotlight-effect"],
  },
  {
    slug: "law-of-the-instrument",
    name: "Law of the Instrument (Maslow's Hammer)",
    aka: ["Maslow's hammer", "If all you have is a hammer, everything looks like a nail"],
    category: "business-strategy",
    oneLiner:
      "People over-rely on the tool or skill they know best — if all you have is a hammer, every problem looks like a nail.",
    origin:
      "Philosopher Abraham Kaplan described it in 1964; psychologist Abraham Maslow gave it the famous hammer wording in 1966.",
    explanation: [
      "Marketers see every problem as a marketing problem, engineers as a tech problem, finance people as a cost problem. Expertise narrows the solutions we even consider.",
      "Good decision-makers deliberately borrow other lenses — or other people — before committing to a fix.",
    ],
    examples: [
      { title: "Agency bias", body: "A performance-marketing agency recommends more ad spend for a brand whose real issue is poor repeat purchase." },
      { title: "Tech solutions", body: "A founder builds an app to fix a problem that a WhatsApp group and a spreadsheet would solve." },
      { title: "Discounting", body: "A sales team that only knows discounts uses them for every objection, even when the real concern is delivery time." },
    ],
    apply: [
      "Describe the problem without naming a solution.",
      "Ask people from two other functions how they would solve it.",
      "List at least three different types of solution before choosing.",
      "Notice which tool you reach for by default — and question it.",
    ],
    misread:
      "Deep expertise is valuable; the law warns against applying it where it does not fit.",
    question: "What is your default fix for every problem, and when was it last the wrong one?",
    related: ["confirmation-bias", "occams-razor", "curse-of-knowledge"],
    link: { kind: "tool", slug: "swot-builder", label: "Look at the problem from four angles" },
  },
  {
    slug: "amaras-law",
    name: "Amara's Law",
    category: "business-strategy",
    oneLiner:
      "We tend to overestimate the effect of a new technology in the short run and underestimate it in the long run.",
    origin:
      "Attributed to Roy Amara, a researcher and long-time president of the Institute for the Future in Palo Alto, from around the 1960s–70s.",
    explanation: [
      "New technologies go through hype, disappointment, and then quiet, deep adoption. The internet, UPI, and AI tools all looked overhyped at first and then changed businesses more than early critics expected.",
      "For business owners, Amara's law argues for steady experimentation: do not bet everything on the hype peak, but do not dismiss a technology during the slump either.",
    ],
    examples: [
      { title: "Digital payments", body: "Many small shops ignored QR payments early on; a few years later, customers expected them everywhere." },
      { title: "E-commerce", body: "The dot-com bust made online retail look like a fad in 2001; it reshaped retail over the next 20 years." },
      { title: "AI tools", body: "A business that trials AI for one workflow per quarter builds real capability without betting the company on early hype." },
    ],
    apply: [
      "List the new technologies relevant to your industry.",
      "For each, run one small, cheap experiment per quarter.",
      "Measure real outcomes (time saved, sales gained), not demos.",
      "Scale only what works; keep watching what does not work yet.",
    ],
    misread:
      "Not every hyped technology becomes important. Amara's law describes a common pattern, not a guarantee.",
    question: "Which technology have you dismissed as hype that your customers may expect in five years?",
    related: ["moores-law", "lindy-effect", "status-quo-bias", "optimism-bias"],
  },
  {
    slug: "metcalfes-law",
    name: "Metcalfe's Law",
    category: "business-strategy",
    oneLiner:
      "The value of a network grows roughly with the square of its number of users — each new member adds value for everyone already there.",
    origin:
      "Proposed by Robert Metcalfe, co-inventor of Ethernet, around 1980 to sell the value of connected devices. Writer George Gilder named it Metcalfe's law in 1993.",
    explanation: [
      "A phone network with two users has one connection; with ten users it has 45. Communication platforms, marketplaces, and communities become more useful as they grow, which is why network businesses chase scale early.",
      "Real networks rarely grow value exactly by n² — many connections are low-value — but the core insight holds: networks have increasing returns to size.",
    ],
    examples: [
      { title: "Messaging", body: "WhatsApp is valuable because everyone you know is on it; a better app with no users is worthless." },
      { title: "B2B marketplaces", body: "A wholesale platform becomes more attractive to buyers with every new supplier, and vice versa." },
      { title: "Communities", body: "A business owners' association becomes more valuable to join as membership grows." },
    ],
    apply: [
      "Ask whether your product gets better for each user as more users join.",
      "If yes, prioritise growth of the network over short-term profit per user.",
      "Seed one side of the network first (often supply) in a small geography.",
      "Measure engagement between members, not just member count.",
    ],
    misread:
      "Not every business is a network business. Adding customers to a restaurant does not make the food better for each of them.",
    question: "Does your product become more valuable to each customer as you add more customers?",
    related: ["matthew-effect", "moores-law", "dunbars-number"],
    strategySlugs: ["network-effects", "platform-strategy", "marketplace-liquidity"],
  },
  {
    slug: "moores-law",
    name: "Moore's Law",
    category: "business-strategy",
    oneLiner:
      "The number of transistors on a chip doubles about every two years — shorthand for computing getting exponentially cheaper and more powerful.",
    origin:
      "Intel co-founder Gordon Moore predicted in 1965 that component counts would double every year, revising it in 1975 to every two years. The trend held for decades, though it has slowed.",
    explanation: [
      "Moore's law is why a phone today out-computes a 1990s supercomputer. For businesses, it means tasks that are expensive to automate today may be cheap in a few years.",
      "The strategic lesson is to plan for falling technology costs: build business models that assume compute, storage, and bandwidth keep getting cheaper.",
    ],
    examples: [
      { title: "Storage", body: "Cloud storage that once cost a fortune now costs pennies, making photo- and video-heavy apps viable." },
      { title: "Automation", body: "Inventory tracking that needed expensive hardware is now possible with a cheap phone and a barcode app." },
      { title: "Product planning", body: "A hardware startup designs for the chip price it expects at launch, not today's price." },
    ],
    apply: [
      "List tasks in your business that are expensive mainly because of technology cost.",
      "Re-check their automation cost every year.",
      "Avoid long, locked-in tech contracts priced at today's costs.",
      "Design products assuming better, cheaper tech in two to three years.",
    ],
    misread:
      "It is an observation about one industry's progress, not a law of nature, and the classic doubling has slowed.",
    question: "Which expensive manual task in your business would be cheap to automate if tech cost halved?",
    related: ["amaras-law", "wrights-law", "metcalfes-law"],
  },
  {
    slug: "kidlins-law",
    name: "Kidlin's Law",
    aka: ["A problem well stated is half solved"],
    category: "business-strategy",
    oneLiner:
      "If you can write the problem down clearly, the matter is half solved.",
    origin:
      "A popular modern saying whose exact source is unclear. It echoes the line widely attributed to inventor Charles Kettering, head of research at General Motors: “A problem well stated is a problem half solved.”",
    explanation: [
      "Most business problems feel big because they are vague: ‘sales are bad’, ‘the team isn't working’. Writing a precise problem statement — what, where, since when, how much — exposes the real cause and the options.",
      "The act of writing forces clarity that conversation often skips.",
    ],
    examples: [
      { title: "Sales slump", body: "‘Sales are down’ becomes ‘repeat orders from Chandigarh retailers fell 30% since our price change in March’ — now the fix is obvious to test." },
      { title: "Team conflict", body: "Writing down exactly which handover fails reveals a missing owner, not a personality clash." },
      { title: "Investor pitch", body: "A founder who writes the customer problem in one sentence finds the pitch, the product, and the ad copy all improve." },
    ],
    apply: [
      "Write the problem in one or two sentences, with numbers and dates.",
      "State what success would look like, also with numbers.",
      "List what you know and what you are assuming.",
      "Only then brainstorm solutions.",
    ],
    misread:
      "Writing it down is half the work, not all of it — you still have to act.",
    question: "Can you write your biggest problem in one sentence with a number in it?",
    related: ["occams-razor", "parkinsons-law-of-triviality", "galls-law"],
    link: { kind: "tool", slug: "goal-arrow", label: "Turn the problem into a goal" },
  },
  {
    slug: "streisand-effect",
    name: "Streisand Effect",
    category: "business-strategy",
    oneLiner:
      "Trying to hide, remove, or censor information usually makes it spread further.",
    origin:
      "In 2003 singer Barbra Streisand sued to remove an aerial photo of her Malibu home from a public coastline archive. The photo had been downloaded only a handful of times; after the lawsuit, hundreds of thousands of people viewed it. Techdirt's Mike Masnick named the effect in 2005.",
    explanation: [
      "Heavy-handed attempts to suppress a bad review, a complaint video, or an embarrassing story turn a small issue into a news story about the suppression itself.",
      "For businesses, the lesson is that transparent, fast, human responses to criticism usually contain damage better than legal threats or takedowns.",
    ],
    examples: [
      { title: "Bad reviews", body: "A restaurant threatens a reviewer with legal action; the screenshot of the threat goes viral and does far more damage than the review." },
      { title: "Complaint videos", body: "A brand that publicly apologises and fixes a customer's issue within a day often earns praise instead of a pile-on." },
      { title: "Leaks", body: "Aggressive takedown notices against a leaked product photo create headlines that amplify it." },
    ],
    apply: [
      "Before suppressing anything, ask whether the suppression could become the story.",
      "Respond to criticism publicly, calmly, and quickly.",
      "Fix the underlying problem and say so.",
      "Reserve legal action for genuinely false and damaging claims, and expect it to be public.",
    ],
    misread:
      "It does not mean you can never correct false information — it means heavy-handed suppression backfires.",
    question: "How would your response to your last public complaint look as a screenshot on social media?",
    related: ["pratfall-effect", "law-of-unintended-consequences", "social-proof"],
  },
];
