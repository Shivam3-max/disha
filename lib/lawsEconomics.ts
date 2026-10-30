import type { Law } from "./knowledgeTypes";

export const LAWS_ECONOMICS: Law[] = [
  {
    slug: "law-of-supply-and-demand",
    name: "Law of Supply and Demand",
    category: "economics-markets",
    oneLiner:
      "Prices rise when demand exceeds supply and fall when supply exceeds demand, settling where the two meet.",
    origin:
      "The idea runs through Adam Smith's The Wealth of Nations (1776); economist Alfred Marshall drew the familiar crossing supply and demand curves in his Principles of Economics (1890).",
    explanation: [
      "Demand falls as price rises (fewer people will pay more), while supply rises as price rises (more sellers want in). The market price is where buyers' willingness to pay meets sellers' willingness to sell.",
      "For a business owner, the useful question is which side you can influence: you can shift demand up with branding and differentiation, or shift your own supply with capacity and cost decisions.",
    ],
    examples: [
      { title: "Seasonal pricing", body: "Hotel rooms in hill stations cost far more in peak summer than in monsoon because demand swings while room supply stays fixed." },
      { title: "Commodity inputs", body: "When onion prices spike after a poor harvest, restaurants either raise prices, shrink portions, or switch ingredients." },
      { title: "Scarce skills", body: "Salaries for experienced developers rise when many companies chase a small pool of talent." },
    ],
    apply: [
      "Track when demand for your product peaks and dips through the year.",
      "Price higher when demand outruns your capacity, and use offers to fill slow periods.",
      "Watch input supply risks and lock in prices or alternatives early.",
      "Differentiate so your demand is less sensitive to competitors' prices.",
    ],
    misread:
      "Real markets are messier than the textbook graph — brand loyalty, regulation, and information gaps all bend the curves.",
    question: "When is demand for your product higher than your capacity, and are you pricing for it?",
    related: ["law-of-diminishing-marginal-utility", "law-of-one-price", "veblen-effect", "says-law"],
    strategySlugs: ["dynamic-pricing", "value-based-pricing"],
    link: { kind: "tool", slug: "pricing-strategy", label: "Choose a pricing model" },
  },
  {
    slug: "law-of-diminishing-marginal-utility",
    name: "Law of Diminishing Marginal Utility",
    aka: ["Gossen's first law"],
    category: "economics-markets",
    oneLiner:
      "Each additional unit of something gives less extra satisfaction than the one before.",
    origin:
      "German economist Hermann Heinrich Gossen set it out in 1854. It became central to economics during the ‘marginal revolution’ of the 1870s, led by William Stanley Jevons, Carl Menger, and Léon Walras.",
    explanation: [
      "The first samosa on a hungry evening is wonderful; the fourth is barely wanted. Customers value additional units less, which is why per-unit willingness to pay falls as quantity rises.",
      "This underpins volume discounts, bundles, ‘second item half price’ offers, and why variety keeps customers coming back.",
    ],
    examples: [
      { title: "Bundles", body: "A café offers a second coffee at 50% off — the customer values it less, so a lower price makes the extra sale happen." },
      { title: "Subscriptions", body: "A streaming service keeps adding new content because the hundredth episode of the same show adds little value." },
      { title: "Feature bloat", body: "Adding a 30th feature to software gives users far less value than the first five did." },
    ],
    apply: [
      "Price extra units lower than the first to capture purchases customers would otherwise skip.",
      "Use variety and rotation to reset satisfaction.",
      "Focus product development on the features that add the most value first.",
      "Avoid assuming that more of the same will keep delighting customers.",
    ],
    misread:
      "It does not hold for everything — collectors and addictive products can show the opposite pattern for a while.",
    question: "Where are you offering customers more of the same when they would value something different?",
    related: ["law-of-diminishing-returns", "law-of-supply-and-demand", "paradox-of-choice", "hedonic-treadmill"],
    strategySlugs: ["bundling"],
  },
  {
    slug: "comparative-advantage",
    name: "Law of Comparative Advantage",
    category: "economics-markets",
    oneLiner:
      "Everyone gains when each party specialises in what it gives up least to produce, and trades for the rest — even if one party is better at everything.",
    origin:
      "Developed by David Ricardo in 1817 in On the Principles of Political Economy and Taxation, using the example of England trading cloth for Portuguese wine.",
    explanation: [
      "Comparative advantage is about opportunity cost, not absolute skill. A founder may be better than the accountant at bookkeeping, yet still be better off delegating it, because every hour spent on books is an hour not spent selling.",
      "It is the core logic behind outsourcing, delegation, partnerships, and trade.",
    ],
    examples: [
      { title: "Founders", body: "A founder who closes ₹5 lakh deals hires an assistant for admin, even though the founder is faster at it." },
      { title: "Manufacturing", body: "A garment brand outsources stitching to a specialist cluster and focuses on design and distribution." },
      { title: "Countries", body: "India's IT services exports grew by specialising where it had a cost-and-skill edge, while importing other goods." },
    ],
    apply: [
      "List the tasks you personally do in a week and estimate the value of each hour.",
      "Identify the tasks where your time is worth the most.",
      "Delegate or outsource the rest, even if you are good at them.",
      "Apply the same logic to your business: focus on what you do best relative to the market.",
    ],
    misread:
      "It does not mean you should outsource everything — core capabilities that create your edge should stay inside.",
    question: "What are you doing yourself only because you are good at it, not because it is your best use of time?",
    related: ["pareto-principle", "law-of-diminishing-returns", "baumols-cost-disease"],
    strategySlugs: ["asset-light-outsourcing"],
    link: { kind: "framework", slug: "replace-yourself", label: "Plan what to delegate" },
  },
  {
    slug: "greshams-law",
    name: "Gresham's Law",
    aka: ["Bad money drives out good"],
    category: "economics-markets",
    oneLiner:
      "Bad money drives out good: when two forms of money have the same official value, people hoard the more valuable one and spend the other.",
    origin:
      "Named after Sir Thomas Gresham, financial agent to Queen Elizabeth I in the 16th century. Economist Henry Dunning Macleod coined the term in 1858, though the idea is older.",
    explanation: [
      "If silver coins and debased coins are both worth one rupee by law, people keep the silver and spend the debased ones — so only bad coins circulate.",
      "Business writers use it more broadly: in markets where buyers cannot tell quality apart, low-quality offerings can push high-quality ones out, because good suppliers cannot get paid for their extra quality.",
    ],
    examples: [
      { title: "Used goods", body: "In a second-hand market without inspection, honest sellers of good items leave because buyers will only pay average prices." },
      { title: "Freelance platforms", body: "When clients judge only on price, cheap low-quality bids crowd out skilled freelancers." },
      { title: "Content", body: "Clickbait can crowd out careful reporting when readers cannot easily judge quality before clicking." },
    ],
    apply: [
      "If you sell quality, make it visible: certifications, guarantees, demos, reviews.",
      "Educate buyers on how to tell quality apart.",
      "Avoid competing purely on price in a market where buyers cannot see quality.",
      "Build a brand that signals quality so customers do not have to guess.",
    ],
    misread:
      "It holds when prices or values are fixed and quality is hidden. When buyers can see quality and prices are free, good money and good products win.",
    question: "Can your customers see your quality before they buy — or does it look just like the cheap option?",
    related: ["law-of-one-price", "veblen-effect", "authority-principle"],
    strategySlugs: ["brand-moat", "premiumization"],
  },
  {
    slug: "jevons-paradox",
    name: "Jevons Paradox",
    category: "economics-markets",
    oneLiner:
      "Making a resource more efficient to use can increase total consumption of it, because it becomes cheaper and more useful.",
    origin:
      "English economist William Stanley Jevons argued in The Coal Question (1865) that more efficient steam engines would increase, not reduce, Britain's coal use.",
    explanation: [
      "When something becomes cheaper per use, people find more uses for it. More fuel-efficient cars can lead to more driving; cheaper cloud computing leads to far more computing.",
      "For businesses, efficiency gains can expand the market rather than shrink costs — which is a growth opportunity and also a warning for cost forecasts.",
    ],
    examples: [
      { title: "Cloud costs", body: "A company moves to cheaper cloud servers and its total cloud bill rises because teams now run far more workloads." },
      { title: "Logistics", body: "Faster, cheaper delivery makes customers order smaller baskets more often, raising total delivery volume." },
      { title: "Data", body: "Cheap mobile data in India led to a massive increase in total data consumption, not savings." },
    ],
    apply: [
      "When you make something cheaper or faster for customers, plan for usage to rise.",
      "Use efficiency to open new markets, not only to cut costs.",
      "Do not assume efficiency projects will cut your total spend — set budgets and caps.",
      "Watch for rebound effects in energy, tech, and logistics costs.",
    ],
    misread:
      "Efficiency is still good. The paradox simply says total consumption may rise rather than fall.",
    question: "If you made your product twice as cheap to use, how much more would customers use it?",
    related: ["law-of-unintended-consequences", "law-of-supply-and-demand", "moores-law"],
  },
  {
    slug: "says-law",
    name: "Say's Law",
    aka: ["Supply creates its own demand"],
    category: "economics-markets",
    oneLiner:
      "Production creates the income that funds demand — summarised (and debated) as ‘supply creates its own demand’.",
    origin:
      "French economist Jean-Baptiste Say set out the idea in his Treatise on Political Economy (1803). The short phrase ‘supply creates its own demand’ comes from John Maynard Keynes, who criticised it in 1936.",
    explanation: [
      "At the level of a whole economy, Say argued that people produce in order to buy, so a general glut of everything is impossible. Keynes argued that during slumps people hoard money and demand can fall short.",
      "For a single business, the practical takeaway is narrower: building a product does not guarantee customers. ‘If we build it, they will come’ is the most common misreading of Say's law in startups.",
    ],
    examples: [
      { title: "Startups", body: "A team spends a year building a product without talking to customers and launches to silence." },
      { title: "Category creation", body: "Some genuinely new products do create demand — but usually alongside heavy education and marketing." },
      { title: "Slumps", body: "In a downturn, factories with full warehouses discover that supply alone does not create buyers." },
    ],
    apply: [
      "Validate demand with pre-orders, waitlists, or pilots before investing in supply.",
      "Budget for demand creation (marketing, sales) alongside production.",
      "In slowdowns, cut inventory exposure rather than assuming stock will sell.",
      "Treat a new category as a demand-building project, not just a product project.",
    ],
    misread:
      "It is a macroeconomic claim, not a promise that any individual product will sell.",
    question: "What evidence do you have that customers want this before you build more of it?",
    related: ["law-of-supply-and-demand", "law-of-the-category", "optimism-bias"],
    strategySlugs: ["category-creation"],
  },
  {
    slug: "engels-law",
    name: "Engel's Law",
    category: "economics-markets",
    oneLiner:
      "As household income rises, the share spent on food falls — even though the absolute amount spent on food may rise.",
    origin:
      "German statistician Ernst Engel observed it in 1857 while studying the budgets of Belgian working-class families.",
    explanation: [
      "Poorer households spend a large share of income on essentials. As incomes grow, people spend more on services, education, health, travel, and discretionary goods.",
      "For businesses, Engel's law is a map of where growth goes as a market gets richer — and why premium versions of essentials grow fast in rising-income economies.",
    ],
    examples: [
      { title: "Indian consumption", body: "As incomes rise, spending shifts towards eating out, packaged convenience food, and branded staples rather than just more raw grain." },
      { title: "Premiumisation", body: "A spice brand grows by moving up-market to organic and single-origin ranges as customers' incomes rise." },
      { title: "Services", body: "Fitness, tutoring, and travel businesses grow faster than basic grocery as cities get wealthier." },
    ],
    apply: [
      "Study how your customers' incomes are changing.",
      "If incomes are rising, offer upgraded or convenience versions of essentials.",
      "Expect slower share growth in basic categories and faster growth in discretionary ones.",
      "In downturns, expect spending to shift back toward essentials and value packs.",
    ],
    misread:
      "It describes the share of spending, not the amount — richer households still spend more rupees on food.",
    question: "As your customers get richer, which premium version of your product will they want?",
    related: ["veblen-effect", "law-of-diminishing-marginal-utility", "baumols-cost-disease"],
    strategySlugs: ["premiumization"],
  },
  {
    slug: "law-of-one-price",
    name: "Law of One Price",
    category: "economics-markets",
    oneLiner:
      "In an efficient market, identical goods should sell for the same price everywhere, after accounting for transport and taxes.",
    origin:
      "A core idea in classical and international economics, closely tied to arbitrage and purchasing-power parity. The Economist's Big Mac Index (since 1986) is a playful test of it.",
    explanation: [
      "If a phone is much cheaper in one city, traders buy it there and sell it in the other until prices converge. That arbitrage pressure is why online marketplaces make prices so transparent.",
      "Businesses escape the law of one price by making their product not identical — through brand, service, bundling, location, or convenience.",
    ],
    examples: [
      { title: "Electronics", body: "Price comparison sites push the same phone model to almost the same price across sellers." },
      { title: "Differentiation", body: "A local shop charges a little more than online for the same item but wins on same-day availability and returns." },
      { title: "Grey markets", body: "When a brand prices very differently across regions, parallel imports appear to exploit the gap." },
    ],
    apply: [
      "If your product is identical to competitors', expect price to be the battleground.",
      "Add something hard to compare: service, warranty, bundle, or speed.",
      "Keep regional price differences within the cost of moving goods, or expect arbitrage.",
      "Use exclusive SKUs or bundles to make price comparison harder.",
    ],
    misread:
      "Real markets rarely have one price because of transport costs, information gaps, and differentiation — the law describes the pressure, not a fixed rule.",
    question: "What makes your offer not identical to the cheapest competitor's?",
    related: ["law-of-supply-and-demand", "greshams-law", "hotellings-law"],
    strategySlugs: ["bundling", "category-of-one"],
  },
  {
    slug: "veblen-effect",
    name: "Veblen Effect (Veblen Goods)",
    aka: ["Conspicuous consumption"],
    category: "economics-markets",
    oneLiner:
      "For some luxury goods, demand rises as price rises, because a high price signals status.",
    origin:
      "Named after economist Thorstein Veblen, who coined ‘conspicuous consumption’ in The Theory of the Leisure Class (1899).",
    explanation: [
      "Most goods sell less at higher prices. Veblen goods break that rule: a cheaper luxury handbag can be less desirable because the price is part of what the buyer is paying for.",
      "Even outside true luxury, price signals quality. Underpricing a premium product can make customers suspicious.",
    ],
    examples: [
      { title: "Luxury fashion", body: "Luxury houses rarely discount publicly, because visible discounts erode the status that justifies their prices." },
      { title: "Weddings", body: "Premium wedding services often win clients precisely because they cost more than competitors." },
      { title: "Consulting", body: "A consultant who doubles fees finds that some clients take the advice more seriously." },
    ],
    apply: [
      "If your product signals status or identity, test higher price points before cutting price.",
      "Protect price integrity — avoid frequent public discounting.",
      "Invest in cues that support a premium price (packaging, service, scarcity).",
      "Use exclusivity rather than discounts to drive demand.",
    ],
    misread:
      "Most products are not Veblen goods. Raising prices on everyday products usually just reduces sales.",
    question: "Could a higher price make your product more desirable to the right customer?",
    related: ["scarcity-principle", "anchoring-bias", "engels-law", "weber-fechner-law"],
    strategySlugs: ["prestige-pricing-threshold", "premiumization"],
  },
  {
    slug: "tragedy-of-the-commons",
    name: "Tragedy of the Commons",
    category: "economics-markets",
    oneLiner:
      "When a shared resource is open to everyone, individuals acting in their own interest tend to overuse and ruin it.",
    origin:
      "Described by William Forster Lloyd in 1833 using the example of shared grazing land, and popularised by ecologist Garrett Hardin in a 1968 article in Science. Elinor Ostrom later won the 2009 Nobel Prize in economics for showing how communities can manage commons successfully.",
    explanation: [
      "Each herder gains fully from adding one more cow but shares the cost of overgrazing with everyone. The rational individual choice adds up to collective ruin.",
      "Inside companies, shared resources — a shared budget, a common inbox, the brand's reputation, a shared customer list — suffer the same fate without clear rules and ownership.",
    ],
    examples: [
      { title: "Email lists", body: "Every team emails the same customer list ‘just once more’ until unsubscribes soar." },
      { title: "Shared services", body: "Free internal design support is swamped with low-priority requests until a simple request system is introduced." },
      { title: "Markets", body: "Overfishing, groundwater depletion, and traffic congestion all follow the same pattern." },
    ],
    apply: [
      "Identify shared resources in your business that nobody owns.",
      "Assign an owner with authority to set usage rules.",
      "Introduce light limits or pricing (quotas, calendars, internal charge-backs).",
      "Make usage visible so overuse is noticed early.",
    ],
    misread:
      "Ostrom showed it is not inevitable — communities with clear rules, monitoring, and local ownership often manage commons well.",
    question: "Which shared resource in your company is being slowly overused because nobody owns it?",
    related: ["ringelmann-effect", "law-of-unintended-consequences", "jevons-paradox"],
  },
  {
    slug: "wrights-law",
    name: "Wright's Law (Experience Curve)",
    aka: ["Experience curve", "Learning curve"],
    category: "economics-markets",
    oneLiner:
      "Every time cumulative production doubles, the cost per unit falls by a roughly constant percentage.",
    origin:
      "Aeronautical engineer Theodore Wright published it in 1936 after studying aircraft manufacturing. Bruce Henderson's Boston Consulting Group turned it into the ‘experience curve’ strategy concept in the 1960s.",
    explanation: [
      "Teams get faster, processes improve, suppliers get better, and waste falls as volume accumulates. Many industries show 10–30% cost declines per doubling of cumulative output; solar panels are a famous modern example.",
      "Strategically, the experience curve rewards whoever builds volume first — they can cut prices and still earn margins competitors cannot match.",
    ],
    examples: [
      { title: "Solar", body: "Solar module prices have fallen dramatically over decades as global cumulative production multiplied." },
      { title: "Manufacturing", body: "A packaging unit's 10,000th order runs with far less waste and setup time than its 100th." },
      { title: "Services", body: "A tax-filing firm's cost per return falls as staff build templates and checklists from thousands of filings." },
    ],
    apply: [
      "Track your cost per unit against cumulative volume, not just time.",
      "Capture learning deliberately with SOPs and checklists.",
      "Price for future volume when competing for scale, if your cash allows.",
      "Watch competitors with more cumulative volume — they may have a lasting cost edge.",
    ],
    misread:
      "Cost declines are not automatic — they come from deliberate learning and process improvement.",
    question: "Is your cost per unit falling as you grow, or are you repeating the same work at the same cost?",
    related: ["moores-law", "law-of-diminishing-returns", "matthew-effect"],
    strategySlugs: ["economies-of-scale", "cost-leadership", "lean-kaizen"],
  },
  {
    slug: "law-of-diminishing-returns",
    name: "Law of Diminishing Returns",
    category: "economics-markets",
    oneLiner:
      "Adding more of one input while others stay fixed eventually produces smaller and smaller increases in output.",
    origin:
      "Discussed by economists including Anne-Robert-Jacques Turgot, Thomas Malthus, and David Ricardo in the 18th and early 19th centuries, originally about adding labour to a fixed plot of farmland.",
    explanation: [
      "The first extra worker in a crowded kitchen helps a lot; the fifth gets in the way. The same applies to ad spend, discounts, features, and hours worked.",
      "The key is to find the point where the next rupee or hour returns less than it costs — and redirect it elsewhere.",
    ],
    examples: [
      { title: "Ad spend", body: "Doubling a campaign's budget brings far fewer than double the leads, as the cheapest audiences are used up first." },
      { title: "Staffing", body: "Adding a fourth billing clerk to a small office barely raises output because the bottleneck is approvals." },
      { title: "Discounts", body: "Going from 10% to 20% off lifts sales a lot; going from 40% to 50% adds little and destroys margin." },
    ],
    apply: [
      "Measure the extra output from each additional unit of input, not just the total.",
      "Stop increasing an input when its extra return falls below its cost.",
      "Look for the fixed constraint causing the slowdown and invest there.",
      "Rebalance spending across channels where returns are still high.",
    ],
    misread:
      "It does not mean more input is useless — it means the gain per unit shrinks, so balance matters.",
    question: "Where are you adding more of the same input and getting less back each time?",
    related: ["law-of-diminishing-marginal-utility", "pareto-principle", "illichs-law", "brooks-law"],
    strategySlugs: ["theory-of-constraints"],
    link: { kind: "tool", slug: "acquisition-cost", label: "Compare returns by channel" },
  },
  {
    slug: "baumols-cost-disease",
    name: "Baumol's Cost Disease",
    category: "economics-markets",
    oneLiner:
      "Services with little productivity growth, like education and healthcare, get steadily pricier because their wages must keep pace with more productive sectors.",
    origin:
      "Economists William Baumol and William Bowen described it in the 1960s, using the example that a string quartet needs the same four musicians and time today as it did in the 1800s.",
    explanation: [
      "Factories and software get more productive every year, pushing wages up. Teachers, nurses, and barbers must be paid competitive wages too, even though their output per hour has barely changed — so their services get relatively pricier.",
      "For service businesses, it explains why costs rise faster than inflation and why productivity tools, packaging, and scale matter so much.",
    ],
    examples: [
      { title: "Education", body: "School and coaching fees tend to rise faster than general inflation." },
      { title: "Salons", body: "A haircut still takes 30 minutes, but stylist wages track the wider labour market." },
      { title: "Agencies", body: "Creative agencies face rising salary costs and respond with templates, productised services, and automation." },
    ],
    apply: [
      "If you run a service business, expect labour costs to rise faster than general prices.",
      "Productise services into packages so you can raise prices predictably.",
      "Use tools to raise output per person where quality allows.",
      "Review pricing every year to keep pace with wage costs.",
    ],
    misread:
      "It is not a ‘disease’ of bad management — it is a structural result of productivity growth elsewhere.",
    question: "Are your service prices rising as fast as the wages you need to pay?",
    related: ["wrights-law", "engels-law", "comparative-advantage"],
    link: { kind: "framework", slug: "service-ladder", label: "Productise your services" },
  },
  {
    slug: "hotellings-law",
    name: "Hotelling's Law",
    aka: ["Principle of minimum differentiation"],
    category: "economics-markets",
    oneLiner:
      "Competitors tend to make their products very similar and cluster together, because each one moves toward the middle of the market.",
    origin:
      "Economist Harold Hotelling set it out in 1929 in “Stability in Competition,” using the example of two ice-cream sellers on a beach who both end up in the middle.",
    explanation: [
      "Each seller moves toward the centre to capture more customers, and they end up side by side, offering nearly identical products. You see it in clusters of jewellers on one street and in look-alike smartphones.",
      "For strategy, Hotelling's law explains the drift toward sameness — and why deliberately moving away from the crowded middle can open space.",
    ],
    examples: [
      { title: "Retail clusters", body: "Car showrooms, mobile shops, and jewellers cluster on the same roads in Indian cities." },
      { title: "Products", body: "Budget phones from different brands converge on almost identical specs and prices." },
      { title: "Politics and media", body: "Major parties or channels drift toward the same middle positions." },
    ],
    apply: [
      "Map where competitors sit on price and features.",
      "Decide whether to stay in the crowded middle (high traffic, high competition) or move to an edge.",
      "If you cluster, differentiate on service or experience.",
      "If you move away, own a specific customer segment clearly.",
    ],
    misread:
      "Clustering is not always bad — shared footfall can benefit everyone. The risk is becoming indistinguishable.",
    question: "Is your business drifting to look exactly like your nearest competitor?",
    related: ["law-of-focus", "law-of-the-category", "law-of-one-price"],
    strategySlugs: ["blue-ocean-strategy", "perceptual-positioning", "niche-domination"],
    link: { kind: "tool", slug: "competitor-matrix", label: "Map your competitors" },
  },
];
