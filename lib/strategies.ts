import type { Strategy } from "./knowledgeTypes";
import { STRATEGIES_2 } from "./strategies2";

export const STRATEGIES_1: Strategy[] = [
  // ---------- GROWTH & EXPANSION ----------
  {
    slug: "blitzscaling",
    name: "Blitzscaling",
    category: "Growth & expansion",
    definition:
      "Prioritising speed of growth over efficiency, deliberately over-investing in capacity and burning cash faster than a 'safe' business would, in markets where being the biggest wins disproportionately more than being profitable early.",
    originExample:
      "Amazon ran at thin or negative margins for years while investing heavily in warehouses and infrastructure, betting that scale and customer loyalty would eventually make the economics work.",
    whenToUse:
      "Markets with strong network effects or winner-take-most dynamics, where being first and biggest creates a durable advantage competitors can't easily erase.",
    whenItBackfires:
      "In markets without real network effects, blitzscaling just means burning money faster than a disciplined competitor — speed without a structural moat is just expensive.",
    relatedLink: { kind: "tool", slug: "cash-runway", label: "Cash flow runway" },
  },
  {
    slug: "land-and-expand",
    name: "Land-and-expand",
    category: "Growth & expansion",
    definition:
      "Winning a customer with a small, low-risk initial purchase or pilot, then growing the relationship over time into a much larger account once trust and proof are established.",
    originExample:
      "Enterprise software companies routinely start with one team or one department inside a large company, then expand across the organisation once the initial group proves the value.",
    whenToUse:
      "Selling into organisations with multiple departments or decision-makers, where a single company can become many times more valuable over its lifetime than its first purchase.",
    whenItBackfires:
      "If the entry offer is priced or scoped so thin that it never proves real value, there's nothing to expand from — the account stalls at the pilot stage indefinitely.",
    relatedLink: { kind: "tool", slug: "customer-lifetime", label: "Customer lifetime value" },
  },
  {
    slug: "product-led-growth",
    name: "Product-led growth",
    category: "Growth & expansion",
    definition:
      "Letting the product itself — not a sales team — do the work of acquiring, converting, and retaining customers, usually through a free trial or freemium tier that lets people experience value before paying.",
    originExample:
      "Tools like file-sharing and design software spread inside companies employee by employee, with usage itself driving upgrades to paid plans, long before any salesperson gets involved.",
    whenToUse:
      "Products simple enough to deliver a meaningful 'aha moment' without training or a sales conversation, where individual users can adopt without needing organisational approval first.",
    whenItBackfires:
      "Complex products that genuinely need a guided setup or a champion inside the customer's organisation fail quietly when left to self-serve — the trial expires before value is ever felt.",
  },
  {
    slug: "geographic-rollout",
    name: "Geographic rollout",
    category: "Growth & expansion",
    definition:
      "Deliberately proving a business model completely in one city or region before methodically replicating it elsewhere, rather than expanding everywhere at once.",
    originExample:
      "Retail and restaurant chains typically dominate one metro market — building supply chains, brand recall, and operational playbooks — before opening in a second city.",
    whenToUse:
      "Businesses where local operations, supply chains, or brand trust take real time to build, and where a failed rollout in one city can be contained rather than draining the whole company.",
    whenItBackfires:
      "Expanding to a second and third city before the first market's unit economics are proven multiplies an unsolved problem instead of a working model.",
    relatedLink: { kind: "framework", slug: "scale-up-plan", label: "Scale-up trio" },
  },
  {
    slug: "franchise-expansion",
    name: "Franchise expansion",
    category: "Growth & expansion",
    definition:
      "Licensing a proven business model, brand, and operating system to independent owners who bring their own capital and local knowledge, in exchange for fees and a share of revenue.",
    originExample:
      "Quick-service restaurant chains scaled to thousands of outlets far faster than they could have with owned capital alone, by having franchisees fund each new location.",
    whenToUse:
      "A business model that's genuinely repeatable and documented well enough that someone else can run it to the same standard, in a category where local presence matters.",
    whenItBackfires:
      "Franchising a model that isn't actually documented or proven yet just multiplies inconsistency — every franchisee inherits and compounds the same undiscovered flaws.",
    relatedLink: { kind: "framework", slug: "sop-builder", label: "SOP builder" },
  },
  {
    slug: "category-creation",
    name: "Category creation",
    category: "Growth & expansion",
    definition:
      "Instead of competing for share of an existing market, defining and naming an entirely new category that the business can credibly claim to lead from day one.",
    originExample:
      "Several well-known SaaS companies grew by naming a new category (rather than positioning as 'a better version of X'), becoming the reference point new entrants get compared against.",
    whenToUse:
      "When a product genuinely does something existing category labels don't capture well, and the business can sustain the education effort a new category requires.",
    whenItBackfires:
      "Category creation is expensive and slow — it requires teaching an entire market a new concept, which smaller businesses often can't afford to fund long enough to succeed.",
    relatedLink: { kind: "framework", slug: "positioning-statement", label: "Positioning rewrite" },
  },
  {
    slug: "non-consumer-expansion",
    name: "Non-consumer expansion",
    category: "Growth & expansion",
    definition:
      "Growing not by fighting competitors for existing customers, but by finding people who want the outcome your product delivers but are currently blocked by price, complexity, or access.",
    originExample:
      "Affordable smartphone brands grew enormous user bases by serving people who wanted a smartphone but couldn't afford premium options — competing against 'no purchase' rather than other phone brands.",
    whenToUse:
      "Mature categories where the visible competitive fight is crowded, but a meaningful population still isn't being served at all for a structural reason.",
    whenItBackfires:
      "If the barrier blocking non-consumers is bigger than the business can actually remove (regulation, infrastructure, genuine unaffordability), the expansion stays theoretical.",
    relatedLink: { kind: "framework", slug: "non-customer-expansion", label: "Non-customer expansion" },
  },
  {
    slug: "ma-roll-up",
    name: "M&A roll-up",
    category: "Growth & expansion",
    definition:
      "Growing by acquiring several smaller competitors in a fragmented industry and consolidating them under shared systems, brand, and purchasing power, rather than growing organically outlet by outlet.",
    originExample:
      "Fragmented service industries (like accounting practices, clinics, or auto workshops) have seen well-funded players buy up many independent operators and standardise them under one operating system.",
    whenToUse:
      "Fragmented industries with many small, similar operators where consolidation genuinely creates purchasing power, shared systems, or brand advantages the standalone businesses couldn't reach alone.",
    whenItBackfires:
      "Buying growth without a real integration plan just creates a loose federation of the same small businesses under one logo, with acquisition debt and none of the promised synergy.",
  },

  // ---------- MARKET POSITION & DIFFERENTIATION ----------
  {
    slug: "blue-ocean-strategy",
    name: "Blue ocean strategy",
    category: "Market position & differentiation",
    definition:
      "Instead of competing head-on in a crowded, price-pressured market ('red ocean'), redesigning the offer to make direct comparison irrelevant — creating a new space with far less competitive pressure.",
    originExample:
      "A well-known circus company famously dropped expensive elements (animal acts) that competitors fought over, while adding elements (theatrical storytelling) no circus had emphasised, creating a new audience entirely.",
    whenToUse:
      "Mature, commoditised categories where every player competes on the same few dimensions and margins are being ground down by direct comparison.",
    whenItBackfires:
      "A 'blue ocean' that turns out to be blue because nobody actually wants what's being offered isn't a new market — it's an empty one.",
    relatedLink: { kind: "framework", slug: "perfect-strategy", label: "The five perfects" },
  },
  {
    slug: "jobs-to-be-done",
    name: "Jobs-to-be-done",
    category: "Market position & differentiation",
    definition:
      "Understanding what 'job' a customer is really hiring a product to do in their life, rather than describing customers only by demographics — because two very different products can compete for the same job.",
    originExample:
      "A famous retail analysis found that milkshakes sold in the morning were competing with breakfast bars and bananas, not other milkshakes, because commuters were 'hiring' them to make a boring commute interesting and stay full until lunch.",
    whenToUse:
      "Whenever a product's real competition doesn't look like other products in its own category — the job framing reveals who you're actually up against.",
    whenItBackfires:
      "Treating every stated 'job' as equally important without prioritising the job with the biggest, most underserved population dilutes the product into solving many jobs poorly.",
    relatedLink: { kind: "framework", slug: "customer-money-model", label: "Customer's money model" },
  },
  {
    slug: "perceptual-positioning",
    name: "Perceptual positioning",
    category: "Market position & differentiation",
    definition:
      "Deliberately claiming a specific, ownable space in the customer's mind relative to competitors — since customers judge brands by comparison whether a company intends it or not.",
    originExample:
      "Positioning classics point to how challenger soft drink and rental car brands claimed being 'the alternative' or 'trying harder' rather than competing directly with the established leader on the leader's own terms.",
    whenToUse:
      "Any market with an established leader — a challenger's positioning task is defining what makes them different, not proving they're generally 'better'.",
    whenItBackfires:
      "A position built around 'we do everything the leader does, slightly better' rarely displaces an incumbent — it just confirms the leader's own claim in the customer's mind.",
    relatedLink: { kind: "framework", slug: "positioning-statement", label: "Positioning rewrite" },
  },
  {
    slug: "niche-domination",
    name: "Niche domination",
    category: "Market position & differentiation",
    definition:
      "Deliberately serving a narrow, specific segment extremely well rather than serving a broad market adequately — becoming the obvious choice for that segment before considering expansion.",
    originExample:
      "Many category leaders in specialised B2B software began by serving one specific industry vertical exceptionally well before expanding into adjacent verticals with proof already established.",
    whenToUse:
      "Early-stage businesses without the resources to win a broad market outright, or any business facing well-funded generalist competitors.",
    whenItBackfires:
      "Staying in the niche long after it's fully won, out of comfort rather than strategy, caps growth that a deliberate expansion plan could have unlocked.",
    relatedLink: { kind: "framework", slug: "pilot-market", label: "Pilot market qualifier" },
  },
  {
    slug: "premiumization",
    name: "Premiumization",
    category: "Market position & differentiation",
    definition:
      "Moving a brand upmarket deliberately — better materials, service, packaging, and story — to command higher margins from customers who value status, quality, or experience over price.",
    originExample:
      "Jewellery and watch brands that shifted from purely transactional selling to an experience-and-trust-led retail model captured significantly higher margins from the same underlying product category.",
    whenToUse:
      "Categories where trust, craftsmanship, or experience genuinely varies between providers and customers can perceive and will pay for that difference.",
    whenItBackfires:
      "Raising prices and packaging without a genuine quality or experience upgrade to back it just prices out existing customers without earning new ones.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "cost-leadership",
    name: "Cost leadership",
    category: "Market position & differentiation",
    definition:
      "Winning by being the structurally lowest-cost producer in a category — through scale, process efficiency, or supply chain advantage — and passing enough of that saving to customers to win on price sustainably.",
    originExample:
      "Discount retail chains built entire operating models — no-frills stores, bulk purchasing, thin overhead — specifically engineered to sustain the lowest prices in their category profitably.",
    whenToUse:
      "Commoditised categories where customers genuinely can't tell providers apart on anything except price, and where the business can build a real structural cost advantage, not just cut margin.",
    whenItBackfires:
      "Competing on price without an actual structural cost advantage is a margin race to the bottom that ends when cash runs out, not when a competitor gives up.",
    relatedLink: { kind: "framework", slug: "profit-ratios", label: "Profit ratio snapshot" },
  },
  {
    slug: "category-of-one",
    name: "Category of one",
    category: "Market position & differentiation",
    definition:
      "Combining several ordinary capabilities in a way no competitor has bothered to combine, so the resulting offer can't be fairly compared to any single competitor at all.",
    originExample:
      "Brands that fuse categories that weren't previously connected — fitness plus community plus content, for instance — end up being compared to no single existing competitor, which is the point.",
    whenToUse:
      "Businesses that genuinely span more than one traditional category and are being unfairly compared only against single-category specialists.",
    whenItBackfires:
      "Claiming to be a 'category of one' when the offer is really just an ordinary competitor with extra marketing language convinces nobody and can look evasive about real weaknesses.",
    relatedLink: { kind: "tool", slug: "advantage-test", label: "Advantage stress test" },
  },
  {
    slug: "fast-follower-strategy",
    name: "Fast-follower strategy",
    category: "Market position & differentiation",
    definition:
      "Deliberately letting a competitor take the risk of proving a new market or product category, then entering quickly with a better-executed, better-funded, or better-distributed version once demand is validated.",
    originExample:
      "Large technology and consumer companies have repeatedly let smaller innovators prove new product categories, then entered with superior distribution and resources to win the category the innovator opened.",
    whenToUse:
      "Businesses with strong execution, distribution, or capital advantages but limited appetite for the specific risk of proving an unproven market.",
    whenItBackfires:
      "Following too slowly lets the pioneer build a defensible moat (brand, data, network effects) that speed and resources alone can no longer overcome.",
  },

  // ---------- PRICING & MONETIZATION ----------
  {
    slug: "razor-and-blade",
    name: "Razor-and-blade model",
    category: "Pricing & monetization",
    definition:
      "Selling a durable base product near or below cost to build an installed base, then earning the real profit on a recurring consumable or accessory that only fits that base product.",
    originExample:
      "Printer manufacturers, razor brands, and gaming console makers have long priced the base hardware thin while the ongoing cartridges, blades, or software carry the actual margin.",
    whenToUse:
      "Products with a genuine recurring consumable that's hard to substitute once the base product is purchased, and where the base purchase itself is a meaningful adoption barrier.",
    whenItBackfires:
      "If the 'blade' can be easily substituted with a cheaper generic, the model collapses — you've sold the razor at a loss and lost the blade revenue too.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "loss-leader-pricing",
    name: "Loss leader pricing",
    category: "Pricing & monetization",
    definition:
      "Pricing one well-known, frequently compared item near or below cost to pull customers through the door, trusting that the rest of their basket or visit makes the trip profitable overall.",
    originExample:
      "Supermarkets are famous for pricing a handful of high-visibility staples aggressively, knowing shoppers rarely leave having bought only the discounted item.",
    whenToUse:
      "Retail or bundled businesses where the loss-leading item reliably brings customers who then buy other, healthier-margin items in the same visit.",
    whenItBackfires:
      "Customers who cherry-pick only the discounted item and leave (common online, where there's no physical basket) turn the 'loss leader' into just a loss.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "value-based-pricing",
    name: "Value-based pricing",
    category: "Pricing & monetization",
    definition:
      "Setting price based on the quantified value or outcome delivered to the customer, rather than on production cost or competitor price — capturing a fair share of the value created.",
    originExample:
      "Consultants and specialised service providers who can point to a specific rupee outcome delivered (cost saved, revenue added) routinely command prices far above the hours actually worked.",
    whenToUse:
      "Whenever the value delivered can be credibly quantified and clearly exceeds the cost of delivery — the gap between cost and value is the room value-based pricing captures.",
    whenItBackfires:
      "Without credible proof of the value claimed, value-based pricing just looks like an arbitrary high price with a confident story attached.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "subscription-model",
    name: "Subscription & recurring revenue",
    category: "Pricing & monetization",
    definition:
      "Charging customers on a recurring basis for continued access rather than a one-time sale, converting revenue from an unpredictable event into a compounding, forecastable stream.",
    originExample:
      "Media and software businesses that shifted from one-time purchases to subscriptions transformed both their revenue predictability and their incentive to keep improving the product continuously.",
    whenToUse:
      "Any product or service that delivers ongoing value over time, where customers would rationally prefer to pay a little continuously over paying a lot once.",
    whenItBackfires:
      "A subscription wrapped around something customers only need occasionally creates constant cancellation pressure and high churn instead of the intended stability.",
    relatedLink: { kind: "tool", slug: "customer-lifetime", label: "Customer lifetime value" },
  },
  {
    slug: "dynamic-pricing",
    name: "Dynamic pricing",
    category: "Pricing & monetization",
    definition:
      "Adjusting prices in real time based on demand, timing, inventory, or customer segment, rather than holding one fixed price for everyone at all times.",
    originExample:
      "Ride-hailing and airline pricing both move constantly with demand and remaining capacity, extracting more revenue at peak times and filling capacity during slow periods with lower prices.",
    whenToUse:
      "Businesses with perishable capacity (a seat, a room, a ride) where unsold inventory expires worthless and demand genuinely fluctuates by time or event.",
    whenItBackfires:
      "Price swings that feel exploitative rather than logical (surging during emergencies, for instance) can generate lasting brand damage that outweighs the short-term revenue gain.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "bundling",
    name: "Bundling",
    category: "Pricing & monetization",
    definition:
      "Packaging multiple products or services together at a combined price lower than buying each separately, increasing average transaction size and moving slower-selling items alongside popular ones.",
    originExample:
      "Fast food combo meals and software 'suites' both use bundling to increase what a customer buys per visit while making the bundle feel like the better deal.",
    whenToUse:
      "When you have complementary products of uneven popularity, and bundling can move slower items while increasing the average basket size of a purchase already happening.",
    whenItBackfires:
      "Bundling items customers don't actually want together just makes the whole offer feel padded and can suppress purchases of the strong item on its own.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "freemium",
    name: "Freemium",
    category: "Pricing & monetization",
    definition:
      "Offering a genuinely useful free tier to build a large user base at near-zero marginal cost, then converting a smaller percentage into paying customers for advanced features or capacity.",
    originExample:
      "Many cloud software and communication tools built enormous user bases on free tiers, relying on a small conversion percentage of a very large free base to fund the whole business.",
    whenToUse:
      "Digital products where serving an additional free user costs almost nothing, and where free usage itself creates value (habit, network effects, word of mouth) beyond direct conversion.",
    whenItBackfires:
      "If the free tier is generous enough to satisfy most users completely, there's no genuine reason to convert — the model quietly becomes just 'free' with a very thin paying layer.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },

  // ---------- PLATFORM & NETWORK EFFECTS ----------
  {
    slug: "platform-strategy",
    name: "Platform strategy",
    category: "Platform & network effects",
    definition:
      "Building a business that creates value primarily by connecting two or more distinct groups (buyers and sellers, riders and drivers) rather than by producing and selling a good in a straight line.",
    originExample:
      "The largest accommodation and ride-hailing companies in the world own comparatively little of the physical inventory (rooms, vehicles) their entire business depends on — they own the connection, not the assets.",
    whenToUse:
      "Markets with fragmented, underused supply on one side and unmet, inconvenient demand on the other, where a trusted intermediary can genuinely improve the match.",
    whenItBackfires:
      "Platforms fail without enough of both sides simultaneously — supply with no demand or demand with no supply is just an empty marketplace, and building both at once is genuinely hard.",
  },
  {
    slug: "network-effects",
    name: "Network effects",
    category: "Platform & network effects",
    definition:
      "A product that becomes more valuable to each user as more people join it — turning growth itself into a defensive moat, since a large existing network becomes hard for a new entrant to replicate.",
    originExample:
      "Communication and social platforms are the clearest example: a messaging app with none of your contacts on it has almost no value, no matter how well-designed it is.",
    whenToUse:
      "Products whose core value genuinely increases with more users (communication, marketplaces, communities) — not every product has this property just because it's popular.",
    whenItBackfires:
      "Claiming 'network effects' for a product that's just popular, without a real mechanism where more users make it better for existing users, overestimates how defensible the growth actually is.",
    relatedLink: { kind: "tool", slug: "moat-builder", label: "Moat builder" },
  },
  {
    slug: "aggregation-theory",
    name: "Aggregation theory",
    category: "Platform & network effects",
    definition:
      "Winning by owning the customer relationship and demand, then commoditising fragmented suppliers who compete to be included — inverting the traditional power balance between distributor and supplier.",
    originExample:
      "Large online marketplaces and search engines aggregate enormous demand, which gives them leverage over the many individual suppliers competing to reach that same audience.",
    whenToUse:
      "Fragmented supplier markets with no dominant distribution channel, where owning the customer relationship — not the supply — becomes the real position of power.",
    whenItBackfires:
      "Aggregators that grow too dependent on suppliers they don't control can be squeezed if those suppliers organise, integrate forward, or find another route to the same customers.",
  },
  {
    slug: "flywheel",
    name: "Flywheel effect",
    category: "Platform & network effects",
    definition:
      "Designing a set of reinforcing loops where growth in one area (say, more customers) automatically fuels growth in another (lower costs, more selection), which then fuels the first area again.",
    originExample:
      "A well-known flywheel example links lower prices to more customers, which brings more sellers and selection, which enables further scale economies — each turn making the next turn easier.",
    whenToUse:
      "Businesses with genuinely interconnected parts, where investment in one loop measurably strengthens another — the flywheel only works if the loops are real, not aspirational.",
    whenItBackfires:
      "Drawing a flywheel diagram doesn't create one — if the loops aren't actually reinforcing each other in practice, it's just a hopeful org chart, not a growth mechanism.",
    relatedLink: { kind: "framework", slug: "execution-scoreboard", label: "Execution scoreboard" },
  },
  {
    slug: "marketplace-liquidity",
    name: "Marketplace liquidity",
    category: "Platform & network effects",
    definition:
      "The speed and reliability with which a marketplace can match supply to demand — a buyer finding a seller quickly, or a seller finding a buyer quickly — which is the real measure of a marketplace's health.",
    originExample:
      "Ride-hailing platforms obsess over how quickly a rider gets matched to a nearby driver, because slow matches (poor liquidity) push both sides to abandon the platform for alternatives.",
    whenToUse:
      "Any two-sided marketplace business, where liquidity — not just total user count — should be the primary health metric tracked and optimised for.",
    whenItBackfires:
      "A marketplace with impressive total sign-ups but poor liquidity (long waits, frequent no-matches) loses both sides quietly, even while headline growth numbers look strong.",
  },
  {
    slug: "two-sided-market-balancing",
    name: "Two-sided market balancing",
    category: "Platform & network effects",
    definition:
      "Deliberately subsidising or prioritising whichever side of a marketplace is currently the scarcer, harder-to-attract side, since a two-sided market grows only as fast as its more constrained side.",
    originExample:
      "Food delivery platforms have often subsidised restaurant onboarding or delivery riders more heavily than customer acquisition, whichever side was the actual bottleneck to more completed orders.",
    whenToUse:
      "Any platform business — identifying and subsidising the genuinely scarcer side, rather than spreading resources evenly across both sides, unlocks growth faster.",
    whenItBackfires:
      "Subsidising the side that's already abundant, out of habit or convenience, wastes resources on a side that was never actually the constraint.",
  },

  // ---------- COMPETITIVE MOATS & DEFENSE ----------
  {
    slug: "porters-five-forces",
    name: "Porter's five forces",
    category: "Competitive moats & defense",
    definition:
      "A lens for judging how attractive an industry really is by examining five pressures on it: rivalry among existing competitors, threat of new entrants, supplier power, buyer power, and threat of substitutes.",
    originExample:
      "Industries with low entry barriers, powerful buyers, and easy substitutes (like many local retail categories) are structurally harder to earn strong margins in than industries protected on all five fronts.",
    whenToUse:
      "Before committing significant investment to a new industry or category — the framework reveals whether attractive-looking revenue potential is actually defensible.",
    whenItBackfires:
      "Treating the five forces as a one-time analysis rather than revisiting them periodically misses how industries shift — today's high barrier can erode within a few years.",
    relatedLink: { kind: "framework", slug: "perfect-strategy", label: "The five perfects" },
  },
  {
    slug: "economies-of-scale",
    name: "Economies of scale",
    category: "Competitive moats & defense",
    definition:
      "The cost-per-unit advantage that comes purely from producing or operating at greater volume — spreading fixed costs, negotiating better input prices, and specialising processes that only make sense at scale.",
    originExample:
      "Large discount retailers and manufacturers can negotiate input costs and logistics rates smaller competitors simply cannot access, purely because of the volume they represent.",
    whenToUse:
      "Categories with meaningful fixed costs (manufacturing, logistics, technology infrastructure) where volume genuinely reduces cost per unit, not just total cost.",
    whenItBackfires:
      "Chasing scale before the underlying unit economics work just multiplies losses faster — scale amplifies whatever economics already exist, good or bad.",
    relatedLink: { kind: "framework", slug: "profit-ratios", label: "Profit ratio snapshot" },
  },
  {
    slug: "switching-costs",
    name: "Switching costs",
    category: "Competitive moats & defense",
    definition:
      "The real friction — financial, technical, social, or emotional — a customer faces if they wanted to leave for a competitor, which is often a stronger retention force than satisfaction alone.",
    originExample:
      "Enterprise software with deep integrations and years of accumulated data creates switching costs so high that even mildly dissatisfied customers rarely leave, because migration itself is costly and risky.",
    whenToUse:
      "Any business relationship that deepens over time (data, integrations, learned workflows, loyalty history) — deliberately building legitimate switching costs protects the relationship.",
    whenItBackfires:
      "Switching costs built through customer hostility (data lock-in, punitive cancellation terms) breed resentment that shows up in reviews and reputation, even if it technically works short-term.",
    relatedLink: { kind: "framework", slug: "switching-barriers", label: "Switching barrier designer" },
  },
  {
    slug: "brand-moat",
    name: "Brand moat",
    category: "Competitive moats & defense",
    definition:
      "A level of trust and preference built over years of consistent experience, strong enough that customers will pay more or wait longer for this brand specifically, even when a technically similar alternative exists.",
    originExample:
      "Certain consumer brands command loyalty and premium pricing not because their product is undeniably superior on paper, but because of accumulated trust that a new entrant can't buy or copy quickly.",
    whenToUse:
      "Categories where quality is hard for customers to verify directly before purchase — trust becomes the deciding factor, and trust compounds slowly over consistent experience.",
    whenItBackfires:
      "A brand moat is only as strong as the most recent bad experience — one well-publicised failure can erode years of accumulated trust much faster than it was built.",
    relatedLink: { kind: "framework", slug: "brand-signals", label: "Brand signal alignment" },
  },
  {
    slug: "regulatory-licensing-moat",
    name: "Regulatory & licensing moat",
    category: "Competitive moats & defense",
    definition:
      "A competitive protection that comes from legal or regulatory barriers — licenses, certifications, or compliance requirements — that are costly or slow for new entrants to obtain, regardless of their capital or talent.",
    originExample:
      "Highly regulated industries like pharmaceuticals, banking, and healthcare protect incumbents partly through the years-long approval and licensing processes new entrants must complete before competing at all.",
    whenToUse:
      "Industries with genuine, legitimate regulatory requirements — the moat is real when it protects consumers, not just when it happens to also protect incumbents.",
    whenItBackfires:
      "Relying entirely on regulation while neglecting genuine product or service quality leaves a business exposed the moment deregulation or a policy shift removes the barrier.",
    relatedLink: { kind: "tool", slug: "moat-builder", label: "Moat builder" },
  },
  {
    slug: "first-mover-advantage",
    name: "First-mover advantage",
    category: "Competitive moats & defense",
    definition:
      "The temporary edge gained by being first into a market — early customer relationships, brand association with the category, and a head start on learning — which fades unless converted into something durable.",
    originExample:
      "Being first with a water-purification or bottled beverage brand in a new market has repeatedly given companies years of head start in distribution and brand recall that later entrants had to fight hard to overcome.",
    whenToUse:
      "New or newly-defined categories, where the first credible entrant gets outsized attention and can use that window to build real moats before competitors arrive.",
    whenItBackfires:
      "First-mover advantage alone fades fast — being first with no durable core (distribution, brand, data, cost structure) just means being first to be overtaken.",
    relatedLink: { kind: "tool", slug: "moat-builder", label: "Moat builder" },
  },
  {
    slug: "patent-ip-protection",
    name: "Patent & IP protection",
    category: "Competitive moats & defense",
    definition:
      "Legally protecting a genuine invention, process, or design so competitors cannot copy it directly for a fixed period, buying time to build other, more durable advantages before the protection expires.",
    originExample:
      "Pharmaceutical and technology companies routinely build years of exclusive market position around patented compounds or mechanisms, using that window to establish brand and distribution before competitors can enter.",
    whenToUse:
      "Genuinely novel inventions or processes worth the cost and time of formal protection — patents work best combined with other moats built during the protected window.",
    whenItBackfires:
      "A patent with no other business advantage behind it just delays the inevitable — once it expires, a business with nothing else built during that time faces the same competition, later.",
    relatedLink: { kind: "tool", slug: "moat-builder", label: "Moat builder" },
  },

  // ---------- CUSTOMER GROWTH LOOPS ----------
  {
    slug: "viral-loop",
    name: "Viral loop",
    category: "Customer growth loops",
    definition:
      "Designing the product so that using it naturally exposes it to new potential users — each user's normal usage becomes a distribution channel, rather than growth depending only on paid marketing.",
    originExample:
      "File-sharing and scheduling tools that email non-users as part of normal product usage (a shared document, a meeting invite) turned everyday use into a constant, free acquisition channel.",
    whenToUse:
      "Products where the core use case naturally involves other people — collaboration, sharing, or communication tools have this built in more easily than solitary-use products.",
    whenItBackfires:
      "Forcing artificial virality into a product that isn't naturally social (mandatory invite walls, spammy sharing prompts) annoys users without producing real, sustained growth.",
  },
  {
    slug: "community-led-growth",
    name: "Community-led growth",
    category: "Customer growth loops",
    definition:
      "Investing in a genuine community of users who help each other, generate content, and advocate for the product — turning customers into a growth engine that operates independently of the company's own marketing.",
    originExample:
      "Software and hobbyist brands with strong user forums or communities often see new customers arrive already convinced, having been guided there by existing users rather than company advertising.",
    whenToUse:
      "Products complex or passionate enough to generate genuine peer discussion, and companies willing to invest in community infrastructure without controlling every conversation.",
    whenItBackfires:
      "A 'community' that's really just a company broadcast channel, with no real peer-to-peer value, doesn't generate the organic advocacy the strategy depends on.",
    relatedLink: { kind: "framework", slug: "content-engine", label: "Content engine setup" },
  },
  {
    slug: "habit-forming-loop",
    name: "Habit-forming product loop",
    category: "Customer growth loops",
    definition:
      "Designing a repeatable cycle of trigger, action, reward, and investment so that using the product becomes an ingrained habit rather than a deliberate decision each time.",
    originExample:
      "Social and productivity apps engineer notification triggers, quick rewarding actions, and small ongoing investments (streaks, saved data) specifically to make daily return usage automatic rather than considered.",
    whenToUse:
      "Products meant for frequent, repeated use, where building genuine habitual value (not just addictive tricks) increases retention and lifetime value substantially.",
    whenItBackfires:
      "Habit loops built on manipulation rather than genuine value create backlash, regulatory attention, and reputational risk once users notice they're being engineered rather than served.",
  },
  {
    slug: "referral-engine",
    name: "Referral engine",
    category: "Customer growth loops",
    definition:
      "A structured, incentivised system that turns satisfied customers into an active acquisition channel, rather than leaving word-of-mouth to happen by chance.",
    originExample:
      "Ride-hailing and fintech apps built rapid early growth substantially through structured referral rewards for both the referrer and the new user, turning existing users into a paid-performance-style acquisition channel.",
    whenToUse:
      "Products with genuinely satisfied customers and a natural reason to mention them to peers — referral engines amplify existing satisfaction, they don't manufacture it.",
    whenItBackfires:
      "Referral incentives generous enough to attract reward-chasers rather than genuine advocates bring in low-quality, low-retention users who game the system for the reward alone.",
    relatedLink: { kind: "tool", slug: "acquisition-cost", label: "Acquisition cost auditor" },
  },
  {
    slug: "customer-success-growth-engine",
    name: "Customer success as a growth engine",
    category: "Customer growth loops",
    definition:
      "Treating post-sale customer success not as a cost centre but as the function most responsible for expansion revenue, renewals, and referrals — because a thriving existing customer is cheaper to grow than a new one is to acquire.",
    originExample:
      "Subscription businesses that invested heavily in proactive customer success — checking in before problems surface, not just reacting to complaints — consistently show materially higher renewal and expansion rates than reactive-support peers.",
    whenToUse:
      "Any recurring-revenue business, where the cost of proactive customer success is reliably smaller than the acquisition cost of replacing a churned customer.",
    whenItBackfires:
      "Treating customer success as purely a support cost to minimise, rather than a growth investment, shows up months later as quiet churn that's expensive to reverse.",
    relatedLink: { kind: "framework", slug: "service-ladder", label: "Service maturity ladder" },
  },
  {
    slug: "nps-driven-growth",
    name: "NPS-driven growth",
    category: "Customer growth loops",
    definition:
      "Using a simple, regularly tracked recommendation score not just as a satisfaction gauge but as an operating input — routing detractors to immediate recovery and promoters to referral and advocacy programs.",
    originExample:
      "Businesses known for exceptional loyalty treat their recommendation score as a leading indicator of growth, often correlating it directly with revenue trends months in advance.",
    whenToUse:
      "Any business willing to act on the score, not just measure it — the value is entirely in the follow-up action, not in the number itself.",
    whenItBackfires:
      "Measuring the score without a real system to act on detractors and promoters turns it into a vanity metric that gets reported but never actually changes anything.",
    relatedLink: { kind: "framework", slug: "nps-engine", label: "Recommendation score engine" },
  },

  // ---------- OPERATIONS & EXECUTION SYSTEMS ----------
  {
    slug: "theory-of-constraints",
    name: "Theory of constraints",
    category: "Operations & execution systems",
    definition:
      "The idea that any system has exactly one bottleneck limiting its total output at a time, and that improving anything other than that specific bottleneck produces no real improvement in overall throughput.",
    originExample:
      "Manufacturing operations that identified and fixed their single slowest station — rather than uniformly speeding up every station — often saw total output rise dramatically with far less total investment.",
    whenToUse:
      "Any process with a visible backlog or delay — the discipline is finding the actual constraint through data, not assuming it's wherever effort feels most obviously needed.",
    whenItBackfires:
      "Optimising non-bottleneck steps feels productive but doesn't move total output at all — effort and money spent there is essentially wasted until the real constraint is fixed.",
    relatedLink: { kind: "framework", slug: "execution-scoreboard", label: "Execution scoreboard" },
  },
  {
    slug: "lean-kaizen",
    name: "Lean & kaizen",
    category: "Operations & execution systems",
    definition:
      "A philosophy of continuous, incremental improvement driven by the people doing the work, combined with systematically removing any step that doesn't add value the customer would actually pay for.",
    originExample:
      "Japanese manufacturing systems built global reputations for quality and efficiency substantially through kaizen — frontline workers empowered to flag and fix small inefficiencies constantly, not through occasional big overhauls.",
    whenToUse:
      "Any repeatable operational process, especially where frontline workers see waste and friction management doesn't — kaizen works by trusting and structuring their input.",
    whenItBackfires:
      "Kaizen imposed top-down as a slogan, without actually empowering frontline staff to change anything, produces posters on the wall and no real improvement.",
    relatedLink: { kind: "framework", slug: "sop-builder", label: "SOP builder" },
  },
  {
    slug: "just-in-time-inventory",
    name: "Just-in-time inventory",
    category: "Operations & execution systems",
    definition:
      "Receiving inventory only as close as possible to when it's actually needed, minimising the cash tied up in stock sitting idle, at the cost of requiring near-perfect supplier reliability and demand forecasting.",
    originExample:
      "Automotive manufacturing pioneered just-in-time parts delivery, dramatically cutting the working capital tied up in warehoused parts compared to traditional stockpiling approaches.",
    whenToUse:
      "Businesses with reliable, nearby suppliers and reasonably predictable demand, where the cash freed from reduced inventory is worth more than the safety buffer given up.",
    whenItBackfires:
      "Just-in-time systems are fragile against supply shocks — a single disrupted supplier with no buffer stock can halt an entire operation that a more conservative inventory policy would have absorbed.",
    relatedLink: { kind: "tool", slug: "inventory-turns", label: "Inventory turns analyzer" },
  },
  {
    slug: "vertical-integration",
    name: "Vertical integration",
    category: "Operations & execution systems",
    definition:
      "Owning more stages of your own supply or distribution chain — from raw material to manufacturing to retail — rather than depending on external partners at each stage.",
    originExample:
      "Fashion retailers who own design, manufacturing, and retail stores directly can move a design from sketch to shelf far faster than competitors dependent on external manufacturers at every stage.",
    whenToUse:
      "When speed, quality control, or margin capture depends critically on stages currently controlled by external partners who don't share the same incentives.",
    whenItBackfires:
      "Owning stages the business has no real expertise in adds complexity and fixed costs without the flexibility external specialists would have provided.",
  },
  {
    slug: "horizontal-integration",
    name: "Horizontal integration",
    category: "Operations & execution systems",
    definition:
      "Growing by acquiring or merging with businesses at the same stage of the value chain — direct competitors or near-adjacent players — to gain scale, market share, or capability quickly.",
    originExample:
      "Consolidation waves in fragmented retail and hospitality categories have repeatedly combined many similar independent operators into larger groups with shared purchasing and branding power.",
    whenToUse:
      "Fragmented categories where combined scale delivers real purchasing, branding, or operational advantages that standalone competitors of similar size can't access.",
    whenItBackfires:
      "Merging similar businesses without integrating their systems and culture just creates a bigger, messier version of the same underlying problems.",
  },
  {
    slug: "hub-and-spoke-distribution",
    name: "Hub-and-spoke distribution",
    category: "Operations & execution systems",
    definition:
      "Routing goods or services through a small number of central hubs that then distribute outward to many smaller spokes, rather than connecting every point to every other point directly.",
    originExample:
      "Logistics and airline networks route through regional hubs specifically because it dramatically reduces the number of direct routes needed to connect a large number of origins and destinations.",
    whenToUse:
      "Businesses serving many scattered locations, where direct point-to-point connections would require an unmanageable number of individual routes or relationships.",
    whenItBackfires:
      "Hub congestion or a hub failure can disrupt the entire network at once — the efficiency of centralisation comes with a concentrated single point of failure.",
  },
  {
    slug: "direct-to-consumer-bypass",
    name: "Direct-to-consumer bypass",
    category: "Operations & execution systems",
    definition:
      "Selling directly to end customers instead of through traditional wholesalers and retailers, capturing the margin those middlemen would have taken and gaining direct customer data and relationships.",
    originExample:
      "A wave of digital-first consumer brands built entire businesses by selling directly online, skipping traditional retail entirely and using the margin saved to fund better product and marketing.",
    whenToUse:
      "Categories where digital channels can reach the target customer directly and cost-effectively, and where owning the customer relationship and data is strategically valuable.",
    whenItBackfires:
      "Bypassing retail also means losing the discovery and trust that physical or established retail channels provide — direct-to-consumer businesses often still need significant marketing spend to replace that discovery function.",
  },
  {
    slug: "asset-light-outsourcing",
    name: "Asset-light outsourcing",
    category: "Operations & execution systems",
    definition:
      "Deliberately not owning the capital-intensive parts of the business — manufacturing, delivery fleets, real estate — and instead partnering with specialists, keeping the company's own capital focused on its actual core advantage.",
    originExample:
      "Many well-known consumer brands own no factories at all, focusing entirely on design, brand, and demand while contract manufacturers handle production — keeping the brand's capital light and flexible.",
    whenToUse:
      "When a business's real advantage is design, brand, or demand generation rather than operational execution, and capable specialist partners already exist for the capital-intensive parts.",
    whenItBackfires:
      "Outsourcing a function that's actually your core differentiator hollows out the business — you can't out-execute competitors on something you no longer directly control.",
    relatedLink: { kind: "framework", slug: "working-capital-allocator", label: "Working capital allocator" },
  },
];

export const STRATEGIES: Strategy[] = [...STRATEGIES_1, ...STRATEGIES_2];
