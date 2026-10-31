// Long-form guides shown under each interactive tool, so every tool page explains the concept, not just the calculator.

export type ToolGuide = {
  heading: string;
  intro: string[];
  formula?: { expression: string; parts: string[] };
  example?: { title: string; lines: string[] };
  tips: string[];
  faqs: { q: string; a: string }[];
};

export const TOOL_GUIDES: Record<string, ToolGuide> = {
  "revenue-multiplier": {
    heading: "How to increase revenue: the four-lever formula",
    intro: [
      "Revenue looks like one big number, but it is really a few smaller numbers multiplied together: how many customers you have, how much they spend each time, what you charge, and how often they come back. Because they multiply, small improvements in each one compound into a large jump in turnover.",
      "This is why chasing only new customers is often the slowest way to grow. Raising the average bill with a sensible add-on, or getting existing customers to buy one more time a year, is usually cheaper than winning strangers — and the effect stacks with everything else.",
    ],
    formula: {
      expression: "Revenue = Customers × Average bill size × Purchases per customer per year",
      parts: [
        "Customers — active buyers in the year, not every name in your contact list.",
        "Average bill size — total sales divided by number of transactions.",
        "Purchases per year — how many times an average customer buys from you.",
        "Price changes act on the bill size, which is why the tool shows price as a separate lever.",
      ],
    },
    example: {
      title: "Worked example: a café",
      lines: [
        "500 customers × ₹2,000 average bill × 4 visits a year = ₹40,00,000 revenue.",
        "Improve each of four levers by 10% — customers, bill size, price and frequency.",
        "1.1 × 1.1 × 1.1 × 1.1 = 1.4641, so revenue becomes about ₹58,56,000.",
        "Four modest 10% improvements produce a 46% increase in turnover.",
      ],
    },
    tips: [
      "Raise the average bill with bundles, combos and ‘most popular’ upgrades rather than discounts.",
      "Increase frequency with reminders, subscriptions, loyalty rewards and seasonal launches.",
      "Review prices at least once a year; small, explained increases rarely lose good customers.",
      "Track all four numbers monthly so you know which lever is actually moving.",
    ],
    faqs: [
      {
        q: "What is the fastest way to increase business revenue?",
        a: "Usually by improving several levers a little at once — average bill, purchase frequency and price — rather than relying only on new customers. Because the levers multiply, small gains compound.",
      },
      {
        q: "How do I calculate average bill size?",
        a: "Divide total sales for a period by the number of transactions in that period. For example, ₹6,00,000 of sales across 300 bills is an average bill of ₹2,000.",
      },
      {
        q: "Is it better to raise prices or get more customers?",
        a: "It depends on your margins and market, but a price rise goes straight to profit while new customers cost money to acquire. Most businesses benefit from doing some of both.",
      },
      {
        q: "Does revenue growth always mean more profit?",
        a: "No. If growth comes from heavy discounts or expensive marketing, profit can fall. Check margins alongside revenue.",
      },
    ],
  },

  "pricing-strategy": {
    heading: "Pricing strategies explained: how to choose the right model",
    intro: [
      "A pricing strategy is the logic you use to set prices — not just the number itself. The same product can be priced on cost, on the value it creates, against competitors, by subscription, or with a free tier, and each choice sends a different signal and attracts a different customer.",
      "The right model depends on three things: what you sell, where you sit in the market (cheapest, middle or premium), and what you're trying to achieve right now — growth, profit or loyalty. This tool asks those questions and suggests the models that fit best.",
    ],
    example: {
      title: "Common pricing models at a glance",
      lines: [
        "Cost-plus: cost + a fixed markup. Simple, but ignores what customers would pay.",
        "Value-based: priced on the value to the customer. Highest profit potential; needs strong proof.",
        "Competitive: priced against rivals. Safe, but can trap you in price wars.",
        "Penetration: low entry price to win share fast, raised later.",
        "Skimming: high launch price for early adopters, lowered over time.",
        "Freemium and subscription: free entry or recurring fees that build lifetime value.",
        "Tiered and bundled: good-better-best options and packages that raise the average bill.",
      ],
    },
    tips: [
      "Know your full cost per unit before choosing any model, so you never price below it by accident.",
      "Show three options; most buyers pick the middle one, so make it the one you want to sell.",
      "Use charm pricing (₹499) for everyday products and round pricing (₹500) for premium ones.",
      "Test a price change on one product or one city before rolling it out everywhere.",
    ],
    faqs: [
      {
        q: "What are the main types of pricing strategy?",
        a: "Cost-plus, value-based, competitive, penetration, skimming, premium, freemium, subscription, tiered, bundle and dynamic pricing are the most common.",
      },
      {
        q: "Which pricing strategy is best for a small business?",
        a: "Many small businesses start with cost-plus for safety, then move toward value-based pricing once they can show clear benefits. Bundles and tiers are easy ways to raise the average bill.",
      },
      {
        q: "What is the difference between markup and margin?",
        a: "Markup is profit as a percentage of cost; margin is profit as a percentage of the selling price. A product costing ₹100 sold at ₹150 has a 50% markup but a 33% margin.",
      },
      {
        q: "How often should I review my prices?",
        a: "At least once a year, and whenever your costs or competitors change significantly.",
      },
    ],
  },

  "acquisition-cost": {
    heading: "Customer acquisition cost (CAC): how to calculate it by channel",
    intro: [
      "Customer acquisition cost, or CAC, is what you spend to win one new customer. It is one of the most important numbers in any business, because if a customer costs more to win than they bring in profit, growth only makes losses bigger.",
      "Looking at CAC channel by channel — Instagram, Google, referrals, events, sales calls — usually reveals that one or two channels bring customers far more cheaply than the rest. That is where the next rupee of marketing should go.",
    ],
    formula: {
      expression: "CAC = Total sales and marketing spend ÷ Number of new customers won",
      parts: [
        "Include ad spend, agency fees, discounts given to new customers and, ideally, the share of salaries spent on winning customers.",
        "Count only genuinely new customers in the same period.",
      ],
    },
    example: {
      title: "Worked example: one month, three channels",
      lines: [
        "Instagram ads: ₹30,000 ÷ 60 new customers = ₹500 per customer.",
        "Google ads: ₹45,000 ÷ 50 new customers = ₹900 per customer.",
        "Referral rewards: ₹10,000 ÷ 40 new customers = ₹250 per customer.",
        "Blended CAC: ₹85,000 ÷ 150 = about ₹567. Referrals are the clear winner.",
      ],
    },
    tips: [
      "Compare CAC with customer lifetime value — aim for lifetime profit of at least three times CAC.",
      "Track CAC monthly; rising CAC often means a channel is saturating.",
      "Ask every new customer how they found you to fill gaps in tracking.",
      "Shift budget gradually toward the cheapest channels and test whether they scale.",
    ],
    faqs: [
      {
        q: "What is a good customer acquisition cost?",
        a: "There is no single number — a good CAC is one that is well below the profit a customer brings over their lifetime. A common rule of thumb is lifetime profit of at least 3× CAC.",
      },
      {
        q: "What is blended CAC?",
        a: "Blended CAC is total acquisition spend divided by all new customers across every channel, including those who came for free through word of mouth.",
      },
      {
        q: "How can I reduce my customer acquisition cost?",
        a: "Improve conversion on your website or shop, invest in referrals and reviews, focus on your best-performing channels, and target audiences more precisely.",
      },
      {
        q: "Should salaries be included in CAC?",
        a: "For a complete view, yes — include the portion of sales and marketing salaries spent on acquiring customers.",
      },
    ],
  },

  "customer-lifetime": {
    heading: "Customer lifetime value (CLV): what one customer is really worth",
    intro: [
      "Customer lifetime value is the total profit you can expect from one customer over the whole time they buy from you. It changes how you think about marketing: a customer who spends ₹800 today but comes back six times a year for three years is worth far more than that first bill.",
      "CLV tells you how much you can afford to spend winning a customer. Comparing lifetime profit with acquisition cost is one of the clearest health checks a business can run.",
    ],
    formula: {
      expression: "Lifetime profit = Average bill × Purchases per year × Years retained × Profit margin",
      parts: [
        "Lifetime revenue = average bill × purchases per year × years a customer stays.",
        "Multiply by your gross margin to turn revenue into profit.",
        "LTV-to-CAC ratio = lifetime profit ÷ cost to acquire one customer. Aim for 3× or more.",
      ],
    },
    example: {
      title: "Worked example: a salon",
      lines: [
        "₹800 average bill × 6 visits a year × 3 years = ₹14,400 lifetime revenue.",
        "At a 40% margin, lifetime profit is ₹5,760.",
        "If it costs ₹1,200 to win a new customer, the ratio is 5,760 ÷ 1,200 = 4.8×.",
        "Healthy — the salon can afford to spend more to win customers like this.",
      ],
    },
    tips: [
      "Improve retention first; adding a year to the average customer life raises CLV dramatically.",
      "Segment CLV by channel — customers from referrals often stay longer than those from discounts.",
      "Use honest numbers for years retained by checking your oldest repeat customers.",
      "Below 1× LTV:CAC, every new customer loses money — fix this before scaling marketing.",
    ],
    faqs: [
      {
        q: "How do you calculate customer lifetime value?",
        a: "Multiply average purchase value by purchases per year and by the number of years a customer stays, then multiply by your profit margin to get lifetime profit.",
      },
      {
        q: "What is a good LTV to CAC ratio?",
        a: "A ratio of 3:1 or higher is widely considered healthy. Below 1:1 means you lose money on each customer.",
      },
      {
        q: "How can I increase customer lifetime value?",
        a: "Improve retention, increase purchase frequency with reminders or subscriptions, raise the average bill with bundles, and protect margins.",
      },
      {
        q: "Should CLV use revenue or profit?",
        a: "Profit is more useful for decisions, because it shows what you can actually afford to spend on acquiring customers.",
      },
    ],
  },

  "cash-runway": {
    heading: "Cash runway: how long your business can survive on current cash",
    intro: [
      "Cash runway is the number of months your business can keep paying its bills if nothing changes. Profitable businesses still fail when cash runs out — customers pay late, stock ties up money, and fixed costs keep coming. Runway turns that risk into one clear number.",
      "This tool counts the cash you have, adds a cautious share of money owed to you, subtracts what you owe, and divides by your monthly burn — the amount by which costs exceed reliable income.",
    ],
    formula: {
      expression: "Runway (months) = Available cash ÷ Monthly net burn",
      parts: [
        "Available cash = cash in bank + 70% of receivables − payables. We count only 70% of receivables because some always arrives late.",
        "Monthly net burn = fixed costs + variable costs − reliable monthly inflow.",
        "If inflow is higher than costs, you have a monthly surplus and no burn.",
      ],
    },
    example: {
      title: "Worked example: a small manufacturer",
      lines: [
        "Cash ₹6,00,000 + 70% of ₹4,00,000 receivables (₹2,80,000) − ₹1,80,000 payables = ₹7,00,000 available.",
        "Costs ₹4,00,000 a month (₹2,50,000 fixed + ₹1,50,000 variable) against ₹3,00,000 reliable inflow = ₹1,00,000 monthly burn.",
        "Runway = ₹7,00,000 ÷ ₹1,00,000 = 7 months.",
        "Seven months gives room to act, but the owner should set a date by which cash flow must turn positive.",
      ],
    },
    tips: [
      "Below 3 months is a danger zone: collect receivables, renegotiate terms and pause non-essential spending now.",
      "Recalculate runway monthly — and immediately after any big contract win or loss.",
      "Shorten customer payment terms and lengthen supplier terms where you can.",
      "Raise money or arrange credit when runway is long, not when it is nearly gone.",
    ],
    faqs: [
      {
        q: "What is cash runway?",
        a: "Cash runway is how many months a business can operate before running out of cash at its current rate of spending and income.",
      },
      {
        q: "What is burn rate?",
        a: "Burn rate is how much more cash goes out than comes in each month. Gross burn is total monthly spending; net burn subtracts income.",
      },
      {
        q: "How many months of runway should a business have?",
        a: "Many advisers suggest at least 6 months for established businesses and 12–18 months for start-ups that are still loss-making.",
      },
      {
        q: "How can I extend my runway quickly?",
        a: "Collect overdue payments, cut or delay discretionary costs, negotiate longer payment terms with suppliers, reduce slow-moving stock and secure a credit line.",
      },
    ],
  },

  "inventory-turns": {
    heading: "Inventory turnover: find the stock that's freezing your cash",
    intro: [
      "Inventory turnover measures how many times you sell through your average stock in a year. Fast-moving products turn cash into more cash quickly; slow movers sit on shelves, tie up working capital and often end in discounting or write-offs.",
      "Ranking products by how fast they turn shows exactly where money is stuck — and which items to reorder, bundle, promote or stop stocking.",
    ],
    formula: {
      expression: "Inventory turnover = Cost of goods sold ÷ Average inventory value",
      parts: [
        "Average inventory = (opening stock + closing stock) ÷ 2, valued at cost.",
        "Days of inventory = 365 ÷ inventory turnover.",
      ],
    },
    example: {
      title: "Worked example: a hardware store",
      lines: [
        "Cost of goods sold for the year: ₹24,00,000. Average stock at cost: ₹4,00,000.",
        "Turnover = 24,00,000 ÷ 4,00,000 = 6 times a year.",
        "Days of inventory = 365 ÷ 6 ≈ 61 days — stock sits about two months before selling.",
        "If one product line turns only twice a year, it is holding cash three times longer than average.",
      ],
    },
    tips: [
      "Bundle slow movers with best-sellers instead of deep discounting.",
      "Reorder fast movers in smaller, more frequent batches to cut average stock.",
      "Review dead stock (no sales in 90+ days) every month and decide its fate.",
      "Compare your turnover with typical figures for your industry in the benchmarks bank.",
    ],
    faqs: [
      {
        q: "What is a good inventory turnover ratio?",
        a: "It varies widely by industry — groceries may turn very fast while furniture or jewellery turn slowly. Compare against your own history and industry benchmarks.",
      },
      {
        q: "How do you calculate days of inventory?",
        a: "Divide 365 by the inventory turnover ratio. A turnover of 6 means about 61 days of inventory.",
      },
      {
        q: "Is high inventory turnover always good?",
        a: "Mostly, but extremely high turnover can mean you are running out of stock and losing sales. Balance turnover with availability.",
      },
      {
        q: "What should I do with dead stock?",
        a: "Bundle it, sell it through outlet channels, return it to suppliers if possible, or write it off — holding it indefinitely just ties up cash and space.",
      },
    ],
  },

  "moat-builder": {
    heading: "Economic moats: how businesses stop competitors copying them",
    intro: [
      "An economic moat is anything that makes it hard for competitors to take your customers or copy your success — like a moat around a castle. Investor Warren Buffett popularised the term for businesses with durable competitive advantages.",
      "Moats include strong brands, network effects, switching costs, cost advantages, exclusive locations, licences, patents, data and deep customer relationships. Most small businesses don't have one strong moat yet, but they can build several smaller ones deliberately. This tool helps you score the moats you have and pick the next one to build.",
    ],
    example: {
      title: "Common types of moat",
      lines: [
        "Brand: customers trust and prefer you even when alternatives are cheaper.",
        "Switching costs: changing to a rival is costly, risky or inconvenient.",
        "Network effects: your product becomes more valuable as more people use it.",
        "Cost advantage: scale, location or process lets you sell profitably at lower prices.",
        "Intangible assets: patents, licences, exclusive contracts and proprietary data.",
      ],
    },
    tips: [
      "Ask: if a well-funded competitor opened next door tomorrow, why would customers stay with me?",
      "Build relationships and service quality — they are the most accessible moats for small firms.",
      "Make switching inconvenient in honest ways: saved preferences, integrations, loyalty benefits.",
      "Revisit your moats every year; technology and competitors can erode them.",
    ],
    faqs: [
      {
        q: "What is an economic moat?",
        a: "A durable competitive advantage that protects a business's profits from competitors, such as a strong brand, network effects or high switching costs.",
      },
      {
        q: "Can a small business have a moat?",
        a: "Yes. Local reputation, exclusive supplier relationships, specialised expertise, community and excellent service can all act as moats.",
      },
      {
        q: "Who coined the term economic moat?",
        a: "Warren Buffett popularised the idea of companies with wide ‘moats’ in his letters to Berkshire Hathaway shareholders.",
      },
      {
        q: "What is the strongest type of moat?",
        a: "Network effects and high switching costs are often considered the strongest, because they get stronger as the business grows.",
      },
    ],
  },

  "advantage-test": {
    heading: "VRIO analysis: is your competitive advantage real?",
    intro: [
      "Many businesses list ‘quality’ or ‘good service’ as their advantage — but so does every competitor. The VRIO framework, developed from the work of strategy scholar Jay Barney in the early 1990s, tests whether a strength is a genuine, lasting advantage.",
      "Each strength passes through four filters: is it Valuable, Rare, hard to Imitate, and is the business Organised to use it? Only strengths that pass all four create a sustained competitive advantage.",
    ],
    example: {
      title: "The four VRIO questions",
      lines: [
        "Valuable — does it help you win customers or lower costs?",
        "Rare — do few competitors have it?",
        "Inimitable — is it hard or expensive to copy?",
        "Organised — do your processes and people actually capture its value?",
        "Fail at V: a weakness. Pass V only: parity. Pass V and R: temporary edge. Pass all four: sustained advantage.",
      ],
    },
    tips: [
      "Be brutally honest — ask customers what they value, not just your team.",
      "Combine several resources; combinations are harder to copy than single strengths.",
      "Invest in the ‘O’ — many good resources are wasted by poor processes.",
      "Revisit the test when a new competitor enters your market.",
    ],
    faqs: [
      {
        q: "What does VRIO stand for?",
        a: "Valuable, Rare, Inimitable (hard to imitate) and Organised. A resource that meets all four can provide a sustained competitive advantage.",
      },
      {
        q: "Who created the VRIO framework?",
        a: "It grew out of the resource-based view of the firm, especially Jay Barney's research from 1991 onwards.",
      },
      {
        q: "What is the difference between VRIO and SWOT?",
        a: "SWOT lists strengths, weaknesses, opportunities and threats broadly; VRIO tests whether specific internal strengths are true advantages.",
      },
      {
        q: "Can a competitive advantage last forever?",
        a: "Rarely. Competitors and technology change, so advantages need to be renewed and strengthened over time.",
      },
    ],
  },

  "hiring-scorecard": {
    heading: "Hiring scorecards: how to hire the right people consistently",
    intro: [
      "Most bad hires happen because interviewers judge on gut feeling and first impressions. A hiring scorecard fixes this by defining, before you meet anyone, what success in the role looks like and which skills and behaviours matter most.",
      "Every candidate is then scored against the same criteria, ideally using the same questions. Research on employee selection has consistently found that structured interviews predict job performance better than unstructured conversations.",
    ],
    example: {
      title: "How to build a scorecard",
      lines: [
        "1. Write the role's mission in one sentence.",
        "2. List 3–5 measurable outcomes for the first 6–12 months.",
        "3. Choose the 4–6 competencies that drive those outcomes.",
        "4. Write questions or tasks that test each competency.",
        "5. Score each candidate 1–5 per competency, independently, before discussing.",
      ],
    },
    tips: [
      "Use work-sample tasks — a short real assignment reveals more than any question.",
      "Have each interviewer score independently before the group discussion to avoid groupthink.",
      "Watch for the halo effect: one impressive trait shouldn't lift every score.",
      "Check references against the specific outcomes on your scorecard.",
    ],
    faqs: [
      {
        q: "What is a hiring scorecard?",
        a: "A document that defines a role's outcomes and required competencies and is used to score every candidate on the same criteria.",
      },
      {
        q: "Why are structured interviews better?",
        a: "Asking every candidate the same job-related questions and scoring them consistently reduces bias and has been shown to predict performance better than informal interviews.",
      },
      {
        q: "How many criteria should a scorecard have?",
        a: "Usually 4 to 6 competencies. Too many makes scoring meaningless.",
      },
      {
        q: "How can small businesses reduce hiring mistakes?",
        a: "Define the role clearly, use a scorecard, give a short paid trial task, and check references against specific outcomes.",
      },
    ],
  },

  "goal-arrow": {
    heading: "How to set goals that actually get achieved",
    intro: [
      "Vague goals like ‘grow the business’ rarely happen because there is no clear target, no honest starting point and no next step. This tool walks you from ambition to a measurable goal, an honest view of where you are today, and three concrete actions.",
      "It combines two widely used methods: SMART goals (specific, measurable, achievable, relevant and time-bound) and the GROW coaching model popularised by Sir John Whitmore — Goal, Reality, Options and Will.",
    ],
    example: {
      title: "From vague to actionable",
      lines: [
        "Vague: ‘Get more customers.’",
        "SMART: ‘Increase monthly repeat customers from 120 to 180 by 31 March.’",
        "Reality: ‘Today, 30% of first-time buyers return within 60 days.’",
        "Next three actions: start a WhatsApp follow-up, launch a second-visit offer, track returns weekly.",
      ],
    },
    tips: [
      "Write the goal down — written goals are easier to track and commit to.",
      "Pick one main goal per quarter; too many goals dilute effort.",
      "Make actions small enough to start this week.",
      "Review progress weekly and adjust actions, not the goal, unless facts change.",
    ],
    faqs: [
      {
        q: "What is a SMART goal?",
        a: "A goal that is Specific, Measurable, Achievable, Relevant and Time-bound — for example, ‘increase repeat customers from 120 to 180 by 31 March’.",
      },
      {
        q: "What is the GROW model?",
        a: "A coaching framework: Goal (what you want), Reality (where you are), Options (what you could do) and Will (what you will do). It was popularised by Sir John Whitmore.",
      },
      {
        q: "Why do business goals fail?",
        a: "Usually because they are vague, too many, lack a measurable target or have no specific next actions and review rhythm.",
      },
      {
        q: "How often should I review goals?",
        a: "Check actions weekly and review the goal itself monthly or quarterly.",
      },
    ],
  },

  "business-model-canvas": {
    heading: "Business model canvas: map your whole business on one page",
    intro: [
      "The business model canvas, created by Alexander Osterwalder and popularised in the 2010 book Business Model Generation, describes how a business creates, delivers and captures value in nine building blocks on a single page.",
      "Seeing all nine blocks side by side makes gaps obvious — a great value proposition with no clear channel, or revenue streams that don't cover the cost structure. It is useful for new ideas and for checking an existing business.",
    ],
    example: {
      title: "The nine blocks",
      lines: [
        "Customer segments — who you serve.",
        "Value propositions — the problem you solve or benefit you give.",
        "Channels — how you reach and deliver to customers.",
        "Customer relationships — how you win, keep and grow them.",
        "Revenue streams — how you earn money from each segment.",
        "Key resources, key activities and key partners — what you need and who helps.",
        "Cost structure — the main costs of running the model.",
      ],
    },
    tips: [
      "Start with customer segments and value propositions — everything else follows.",
      "Write short phrases, not paragraphs, so the canvas stays readable.",
      "Make one canvas per distinct customer segment if their needs differ.",
      "Treat each block as an assumption to test with real customers.",
    ],
    faqs: [
      {
        q: "What are the 9 blocks of the business model canvas?",
        a: "Customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partners and cost structure.",
      },
      {
        q: "Who created the business model canvas?",
        a: "Alexander Osterwalder, who developed it from his research and popularised it with Yves Pigneur in Business Model Generation (2010).",
      },
      {
        q: "Is a business model canvas the same as a business plan?",
        a: "No. The canvas is a one-page overview of how the business works; a business plan adds detailed market analysis, operations and financial projections.",
      },
      {
        q: "What is the lean canvas?",
        a: "A variation by Ash Maurya for start-ups that replaces some blocks with problem, solution, key metrics and unfair advantage.",
      },
    ],
  },

  "break-even-calculator": {
    heading: "Break-even point: how many sales before you make a profit",
    intro: [
      "Your break-even point is the number of units — or the amount of sales — at which total revenue exactly covers total costs. Below it you are losing money; above it, every sale contributes to profit.",
      "It needs only three numbers: your fixed costs (rent, salaries and other costs that don't change with sales), your selling price per unit, and your variable cost per unit (materials, packaging, commission). The difference between price and variable cost is the contribution margin — what each sale contributes towards fixed costs.",
    ],
    formula: {
      expression: "Break-even units = Fixed costs ÷ (Price per unit − Variable cost per unit)",
      parts: [
        "Contribution margin per unit = price − variable cost.",
        "Break-even sales value = break-even units × price.",
        "Contribution margin ratio = contribution ÷ price; break-even sales = fixed costs ÷ that ratio.",
      ],
    },
    example: {
      title: "Worked example: a bakery",
      lines: [
        "Fixed costs: ₹1,50,000 a month. Price per cake: ₹500. Variable cost per cake: ₹200.",
        "Contribution per cake = ₹500 − ₹200 = ₹300.",
        "Break-even = ₹1,50,000 ÷ ₹300 = 500 cakes a month, or ₹2,50,000 of sales.",
        "Raise the price to ₹550 and break-even falls to 429 cakes — a small price change moves the floor a lot.",
      ],
    },
    tips: [
      "Lower fixed costs or raise contribution margin to reach break-even faster.",
      "Recalculate whenever rent, salaries, prices or input costs change.",
      "Use break-even to test new products, locations or hires before committing.",
      "For many products, use a weighted average contribution margin across your sales mix.",
    ],
    faqs: [
      {
        q: "What is the break-even point formula?",
        a: "Break-even units = fixed costs ÷ (selling price per unit − variable cost per unit). Multiply by price to get break-even sales value.",
      },
      {
        q: "What is contribution margin?",
        a: "The selling price minus variable cost per unit. It is the amount each sale contributes to covering fixed costs and then profit.",
      },
      {
        q: "How can I lower my break-even point?",
        a: "Reduce fixed costs, increase prices, or reduce variable costs per unit. Each raises profit per sale or lowers the cost to cover.",
      },
      {
        q: "What are examples of fixed and variable costs?",
        a: "Fixed: rent, salaries, insurance, software subscriptions. Variable: raw materials, packaging, delivery and sales commission.",
      },
    ],
  },

  "cap-table-builder": {
    heading: "Cap table and dilution: who owns what after funding",
    intro: [
      "A capitalisation table, or cap table, lists every owner of a company and their percentage stake — founders, investors, and any employee stock option pool. It is the single source of truth for ownership.",
      "When a company raises money by issuing new shares, every existing owner's percentage falls. This is called dilution. Modelling a funding round before you agree to it shows exactly how much of the company you'll keep.",
    ],
    formula: {
      expression: "Investor stake = Investment ÷ Post-money valuation",
      parts: [
        "Post-money valuation = pre-money valuation + new investment.",
        "Each existing owner's new stake = old stake × (pre-money ÷ post-money).",
      ],
    },
    example: {
      title: "Worked example: a seed round",
      lines: [
        "Pre-money valuation ₹4 crore; the company raises ₹1 crore. Post-money = ₹5 crore.",
        "New investor owns ₹1 crore ÷ ₹5 crore = 20%.",
        "A founder who owned 60% now owns 60% × (4 ÷ 5) = 48%.",
        "The founder's percentage fell, but the value of their stake is unchanged at ₹2.4 crore.",
      ],
    },
    tips: [
      "Keep the cap table updated after every share issue, transfer or ESOP grant.",
      "Model two or three future rounds to see founder ownership at later stages.",
      "Include an employee option pool in your planning; investors often ask for it.",
      "Take professional legal and tax advice before issuing shares.",
    ],
    faqs: [
      {
        q: "What is a cap table?",
        a: "A table showing who owns a company's shares and options and what percentage each holds.",
      },
      {
        q: "What is dilution?",
        a: "The reduction in existing owners' percentage stakes when a company issues new shares, for example in a funding round.",
      },
      {
        q: "What is the difference between pre-money and post-money valuation?",
        a: "Pre-money is the company's value before new investment; post-money is pre-money plus the new money raised.",
      },
      {
        q: "Is dilution always bad?",
        a: "Not necessarily. Owning a smaller share of a more valuable company can be worth more, if the money is used well.",
      },
    ],
  },

  "hiring-pipeline": {
    heading: "Recruitment pipeline: track every candidate from application to hire",
    intro: [
      "A hiring pipeline is the sequence of stages a candidate moves through — applied, screening, interview, offer and hired. Tracking it on one board stops good candidates from slipping through the cracks and shows where your process stalls.",
      "Slow hiring loses strong candidates to faster competitors. A visible pipeline lets you follow up quickly, see how many people you need at the top to make one hire, and measure time-to-hire.",
    ],
    example: {
      title: "Useful pipeline numbers",
      lines: [
        "Stage conversion: if 40 apply, 12 pass screening, 5 interview and 1 is hired, you need about 40 applicants per hire.",
        "Time-to-hire: days from first contact to accepted offer.",
        "Offer acceptance rate: offers accepted ÷ offers made.",
        "Source quality: which job boards or referrals produce hires, not just applicants.",
      ],
    },
    tips: [
      "Reply to every candidate within 48 hours — speed signals respect.",
      "Move candidates forward or close them out every week; don't let anyone sit in limbo.",
      "Ask your team for referrals; referred candidates are often a better fit.",
      "Pair the pipeline with a hiring scorecard so every stage uses the same criteria.",
    ],
    faqs: [
      {
        q: "What are the stages of a recruitment pipeline?",
        a: "Typically sourcing or application, screening, interviews, assessment, offer and hire, followed by onboarding.",
      },
      {
        q: "What is time-to-hire?",
        a: "The number of days between a candidate entering your process (or first contact) and accepting your offer.",
      },
      {
        q: "How can I hire faster?",
        a: "Write clear job descriptions, screen quickly, schedule interviews close together, decide promptly and keep candidates updated.",
      },
      {
        q: "Is my pipeline data stored online?",
        a: "No. This tool saves your candidates only in your own browser.",
      },
    ],
  },

  "content-calendar": {
    heading: "Content calendar: plan and publish consistently",
    intro: [
      "A content calendar is a schedule of what you'll publish, where and when — Instagram posts, blog articles, YouTube videos, emails and WhatsApp updates. It turns scattered ideas into a steady publishing rhythm.",
      "Consistency matters because audiences and algorithms reward regular posting, and customers often need to see a brand several times before buying. A calendar also helps you plan around festivals, launches and seasonal demand.",
    ],
    example: {
      title: "A simple weekly rhythm for a small business",
      lines: [
        "Monday: a useful tip or how-to for your customers.",
        "Wednesday: a product or service spotlight.",
        "Friday: a customer story, review or behind-the-scenes post.",
        "Monthly: one longer piece — a guide, video or newsletter — repurposed into shorter posts.",
      ],
    },
    tips: [
      "Batch-create content once a week instead of scrambling every day.",
      "Repurpose each long piece into several short posts across platforms.",
      "Plan around festivals and seasonal peaks in your industry weeks in advance.",
      "Track which posts bring enquiries or sales, and make more like them.",
    ],
    faqs: [
      {
        q: "What is a content calendar?",
        a: "A schedule showing what content will be published, on which platform, on which date, and its current status.",
      },
      {
        q: "How often should a small business post on social media?",
        a: "Consistency matters more than volume. Three good posts a week that you can sustain beat daily posts you abandon after a month.",
      },
      {
        q: "What should I post about?",
        a: "Mix helpful tips, product information, customer stories, behind-the-scenes content and timely posts around festivals or events.",
      },
      {
        q: "Where is my calendar saved?",
        a: "This tool stores your content plan in your own browser, so it is there when you come back on the same device.",
      },
    ],
  },

  "competitor-matrix": {
    heading: "Competitor analysis matrix: compare yourself head to head",
    intro: [
      "A competitor analysis matrix scores your business and each competitor on the same set of attributes — price, quality, range, speed, service, location, brand — in one table. Seeing everything side by side shows exactly where you win and where you're exposed.",
      "It's more useful than a general list of competitors, because it forces specific comparisons and reveals gaps you can exploit or weaknesses you need to fix.",
    ],
    example: {
      title: "How to build a useful matrix",
      lines: [
        "Pick 3–5 real competitors your customers actually compare you with.",
        "Choose 5–8 attributes customers care about — ask them if unsure.",
        "Score everyone 1–5 on each attribute, using evidence like reviews, mystery shopping and prices.",
        "Look for attributes where you score high and competitors score low — that's your positioning.",
      ],
    },
    tips: [
      "Weight attributes by importance to customers, not to you.",
      "Update the matrix every quarter or when a new competitor appears.",
      "Use online reviews of competitors to find their recurring complaints.",
      "Don't try to win on every attribute; choose where to stand out.",
    ],
    faqs: [
      {
        q: "What is a competitive analysis matrix?",
        a: "A table that compares your business with competitors on the same attributes, using scores, to reveal relative strengths and weaknesses.",
      },
      {
        q: "How many competitors should I analyse?",
        a: "Three to five direct competitors is usually enough for a small business.",
      },
      {
        q: "Where can I find information about competitors?",
        a: "Their websites, online reviews, social media, price lists, mystery shopping, and conversations with customers and suppliers.",
      },
      {
        q: "How often should I do competitor analysis?",
        a: "At least once a quarter, and whenever a new competitor enters your market.",
      },
    ],
  },

  "cash-flow-simulator": {
    heading: "Cash flow forecast: see your cash position months ahead",
    intro: [
      "A cash flow forecast estimates the money coming in and going out of your business month by month, and keeps a running total of cash in the bank. It shows problems — such as a month where cash goes negative — before they happen.",
      "Profit and cash are not the same. Sales on credit, stock purchases, loan repayments and tax payments can make a profitable business short of cash. A six-month forecast gives you time to act.",
    ],
    formula: {
      expression: "Closing cash = Opening cash + Cash in − Cash out",
      parts: [
        "Cash in: customer payments actually received, loans, investment.",
        "Cash out: suppliers, salaries, rent, EMIs, taxes and other payments actually made.",
        "Each month's closing cash becomes the next month's opening cash.",
      ],
    },
    example: {
      title: "Worked example: three months",
      lines: [
        "Month 1: opening ₹2,00,000 + ₹5,00,000 in − ₹5,50,000 out = ₹1,50,000 closing.",
        "Month 2: ₹1,50,000 + ₹4,00,000 − ₹5,00,000 = ₹50,000.",
        "Month 3: ₹50,000 + ₹6,00,000 − ₹5,20,000 = ₹1,30,000.",
        "Month 2 is the danger point — the owner can arrange credit or chase receivables in advance.",
      ],
    },
    tips: [
      "Forecast cash when you expect to be paid, not when you invoice.",
      "Include irregular payments such as annual insurance, GST and bonuses.",
      "Compare forecast with actual every month and improve your assumptions.",
      "Keep a minimum cash buffer, such as one or two months of fixed costs.",
    ],
    faqs: [
      {
        q: "What is a cash flow forecast?",
        a: "A month-by-month estimate of cash coming in and going out, used to predict future cash balances.",
      },
      {
        q: "Why is cash flow different from profit?",
        a: "Profit counts sales when made and costs when incurred; cash flow counts money when it actually moves. Credit sales, stock and loan repayments create the difference.",
      },
      {
        q: "How far ahead should I forecast cash flow?",
        a: "Most small businesses benefit from a rolling 3–6 month forecast, updated monthly.",
      },
      {
        q: "What causes cash flow problems?",
        a: "Late customer payments, excess stock, rapid growth, seasonal sales, large one-off payments and thin margins.",
      },
    ],
  },

  "swot-builder": {
    heading: "SWOT analysis: an honest look at your business position",
    intro: [
      "SWOT analysis lists a business's internal Strengths and Weaknesses and its external Opportunities and Threats. It is one of the most widely used strategic planning tools, commonly traced to business-planning research at the Stanford Research Institute in the 1960s.",
      "A SWOT is only useful if it is honest and specific. ‘Good quality’ is not a strength unless customers say so and competitors fall short. The real value comes from connecting the quadrants: using strengths to seize opportunities and fixing weaknesses that threats could exploit.",
    ],
    example: {
      title: "Example: a neighbourhood bakery",
      lines: [
        "Strengths: loyal local customers, signature cakes, owner's 15 years of experience.",
        "Weaknesses: no online ordering, single location, owner does all baking.",
        "Opportunities: growing demand for custom celebration cakes, delivery apps, corporate gifting.",
        "Threats: new café chain nearby, rising butter and flour prices.",
        "Action: launch online custom-cake orders (strength + opportunity) and train a second baker (fix a weakness).",
      ],
    },
    tips: [
      "Base each point on evidence — reviews, sales data, competitor checks.",
      "Keep strengths and weaknesses internal; opportunities and threats external.",
      "Turn the SWOT into 3–5 specific actions, or it's just a list.",
      "Revisit your SWOT every six to twelve months.",
    ],
    faqs: [
      {
        q: "What does SWOT stand for?",
        a: "Strengths, Weaknesses, Opportunities and Threats.",
      },
      {
        q: "What is the difference between strengths and opportunities?",
        a: "Strengths are internal advantages you control; opportunities are external conditions in the market you could take advantage of.",
      },
      {
        q: "How do you turn a SWOT analysis into strategy?",
        a: "Match strengths to opportunities, use strengths to counter threats, fix weaknesses that limit opportunities, and reduce exposure where weaknesses meet threats (sometimes called a TOWS matrix).",
      },
      {
        q: "What are the limitations of SWOT analysis?",
        a: "It can be vague, subjective and static. Use evidence, prioritise points and link them to actions to make it useful.",
      },
    ],
  },
};
