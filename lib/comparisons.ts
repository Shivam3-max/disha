export type Comparison = {
  slug: string;
  title: string;
  options: string[];
  summary: string;
  rows: { aspect: string; values: string[] }[];
  choose: { option: string; points: string[] }[];
  verdict: string;
  faqs: { q: string; a: string }[];
  links?: { href: string; label: string }[];
  note?: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "proprietorship-vs-partnership-vs-llp-vs-private-limited",
    title: "Sole proprietorship vs partnership vs LLP vs private limited company",
    options: ["Sole proprietorship", "Partnership firm", "LLP", "Private limited"],
    summary: "The four most common business structures in India differ in liability, tax, compliance and how easily you can raise money. Choose based on risk, growth plans and how many owners you have.",
    rows: [
      { aspect: "Governing law", values: ["No specific law", "Indian Partnership Act, 1932", "LLP Act, 2008", "Companies Act, 2013"] },
      { aspect: "Owners", values: ["1", "2 or more", "Minimum 2 designated partners", "Minimum 2 shareholders and 2 directors"] },
      { aspect: "Separate legal entity", values: ["No", "No", "Yes", "Yes"] },
      { aspect: "Owner liability", values: ["Unlimited", "Unlimited (joint)", "Limited to contribution", "Limited to share capital"] },
      { aspect: "Income tax", values: ["Owner's slab rates", "Flat 30% + surcharge and cess", "Flat 30% + surcharge and cess", "22% (sec 115BAA) + surcharge and cess, or other rates"] },
      { aspect: "Compliance effort", values: ["Lowest", "Low", "Moderate (annual LLP filings)", "Highest (board meetings, audit, ROC filings)"] },
      { aspect: "Raising equity investment", values: ["Not possible", "Very difficult", "Difficult", "Easiest"] },
      { aspect: "Best for", values: ["Solo small businesses", "Small family or trusted partnerships", "Professional firms and small businesses wanting limited liability", "Start-ups planning to raise funds and scale"] },
    ],
    choose: [
      { option: "Sole proprietorship", points: ["You're starting alone and small.", "You want minimum cost and paperwork.", "Your business risk is low."] },
      { option: "Partnership firm", points: ["You have trusted partners.", "You want a simple structure.", "You accept shared unlimited liability."] },
      { option: "LLP", points: ["You want limited liability with lower compliance than a company.", "You run a professional or service firm.", "You don't plan to raise equity from investors soon."] },
      { option: "Private limited company", points: ["You plan to raise investment or issue ESOPs.", "You want maximum credibility with large clients.", "You can manage higher compliance."] },
    ],
    verdict: "Start simple if your risk is low, but choose an LLP or private limited company when liability, credibility or fundraising matter. Converting later is possible but costs time and money.",
    faqs: [
      { q: "Which business structure is best for a startup in India?", a: "Startups planning to raise investment usually choose a private limited company, because investors can buy shares and it's eligible for Startup India recognition." },
      { q: "Is an LLP better than a partnership?", a: "An LLP gives limited liability and a separate legal identity, which a traditional partnership doesn't, at the cost of slightly more compliance." },
      { q: "Can a sole proprietorship be converted into a company?", a: "Yes. The business can be transferred to a newly incorporated company, though it involves legal and tax steps." },
      { q: "Which structure pays the least tax?", a: "It depends on profit levels. Proprietors pay slab rates; LLPs and firms pay 30%; companies can opt for 22% plus surcharge and cess. Take professional advice." },
    ],
    links: [
      { href: "/compliance", label: "India compliance quick-reference" },
      { href: "/templates/partnership-deed", label: "Partnership deed format" },
    ],
    note: "Tax rates are for FY 2025-26 and may change. Confirm with a chartered accountant or company secretary.",
  },
  {
    slug: "llp-vs-private-limited-company",
    title: "LLP vs private limited company",
    options: ["LLP", "Private limited company"],
    summary: "Both give limited liability and a separate legal identity. The key differences are compliance, tax and the ability to raise equity.",
    rows: [
      { aspect: "Ownership", values: ["Partners", "Shareholders"] },
      { aspect: "Management", values: ["Designated partners", "Board of directors"] },
      { aspect: "Income tax", values: ["30% + surcharge and cess", "22% (sec 115BAA) + surcharge and cess, among other options"] },
      { aspect: "Statutory audit", values: ["Only above turnover/contribution thresholds", "Mandatory every year"] },
      { aspect: "Raising equity", values: ["Not suitable for venture capital", "Designed for equity investment"] },
      { aspect: "Employee stock options", values: ["Not available", "Available (ESOPs)"] },
      { aspect: "Compliance cost", values: ["Lower", "Higher"] },
    ],
    choose: [
      { option: "LLP", points: ["Professional services firms.", "Owner-run businesses not seeking investors.", "Lower compliance budget."] },
      { option: "Private limited company", points: ["You want venture capital or angel funding.", "You'll offer ESOPs.", "You need maximum credibility."] },
    ],
    verdict: "Pick a private limited company if fundraising is likely; an LLP if you want limited liability with lighter compliance.",
    faqs: [
      { q: "Can an LLP raise funding from investors?", a: "LLPs can bring in new partners, but most venture investors prefer companies because they can hold shares." },
      { q: "Is an LLP cheaper to run?", a: "Generally yes — fewer mandatory meetings and audits below thresholds." },
      { q: "Can an LLP become a company later?", a: "Yes, an LLP can convert into a company under the Companies Act, 2013." },
    ],
    links: [{ href: "/compare/proprietorship-vs-partnership-vs-llp-vs-private-limited", label: "Compare all four structures" }],
    note: "Rules and thresholds change — confirm current requirements with a professional.",
  },
  {
    slug: "gst-composition-vs-regular-scheme",
    title: "GST composition scheme vs regular scheme",
    options: ["Composition scheme", "Regular scheme"],
    summary: "Small businesses can choose the GST composition scheme to pay tax at a low fixed rate on turnover with simpler returns — but they give up input tax credit and some flexibility.",
    rows: [
      { aspect: "Who can opt", values: ["Turnover up to ₹1.5 crore for goods/restaurants (lower in some states); up to ₹50 lakh for services", "Any registered business"] },
      { aspect: "Tax rate", values: ["Fixed: 1% for manufacturers and traders, 5% for restaurants, 6% for services", "Normal GST rates on each supply"] },
      { aspect: "Input tax credit", values: ["Not available", "Available"] },
      { aspect: "Collect GST from customers", values: ["No — tax is paid from your own pocket", "Yes"] },
      { aspect: "Invoice type", values: ["Bill of supply", "Tax invoice"] },
      { aspect: "Inter-state sales", values: ["Not allowed", "Allowed"] },
      { aspect: "Returns", values: ["Quarterly CMP-08 and annual GSTR-4", "Monthly or quarterly returns"] },
    ],
    choose: [
      { option: "Composition scheme", points: ["You sell mainly to final consumers within your state.", "Your margins are healthy and purchases have little GST.", "You want simple compliance."] },
      { option: "Regular scheme", points: ["You sell to GST-registered businesses who want input credit.", "You make inter-state sales.", "You buy a lot with GST and want input credit."] },
    ],
    verdict: "Composition suits small, local B2C businesses; the regular scheme suits B2B sellers and anyone selling across states.",
    faqs: [
      { q: "What is the GST composition scheme turnover limit?", a: "Generally ₹1.5 crore for goods and restaurants (₹75 lakh in some special category states) and ₹50 lakh for service providers." },
      { q: "Can composition dealers claim input tax credit?", a: "No. That's the main trade-off for the low rate." },
      { q: "Can a composition dealer sell online?", a: "There are restrictions on certain e-commerce and inter-state supplies; check current rules before opting in." },
    ],
    links: [{ href: "/tools/gst-calculator", label: "GST calculator" }],
    note: "GST rules change frequently — confirm current limits and rates with a tax professional or the GST portal.",
  },
  {
    slug: "old-vs-new-tax-regime",
    title: "Old tax regime vs new tax regime",
    options: ["Old regime", "New regime"],
    summary: "The new regime has lower rates and a rebate making taxable income up to ₹12 lakh tax-free, but allows few deductions. The old regime has higher rates but allows deductions like 80C, 80D, HRA and home loan interest.",
    rows: [
      { aspect: "Default", values: ["Must opt in", "Default regime"] },
      { aspect: "Slab rates", values: ["5%, 20%, 30% (after ₹2.5L exemption)", "5% to 30% across seven slabs from ₹4L"] },
      { aspect: "Rebate", values: ["Up to ₹12,500 (income ≤ ₹5L)", "Up to ₹60,000 (income ≤ ₹12L)"] },
      { aspect: "Standard deduction (salaried)", values: ["₹50,000", "₹75,000"] },
      { aspect: "80C, 80D, HRA, home loan interest", values: ["Allowed", "Mostly not allowed"] },
      { aspect: "Best for", values: ["People with large deductions", "Most others, especially income up to about ₹12.75L salary"] },
    ],
    choose: [
      { option: "Old regime", points: ["You pay significant rent and claim HRA.", "You have a home loan.", "You fully use 80C and 80D."] },
      { option: "New regime", points: ["You have few deductions.", "Your salary is up to about ₹12.75 lakh.", "You want simplicity."] },
    ],
    verdict: "For most taxpayers the new regime is cheaper; run both with our calculator before deciding.",
    faqs: [
      { q: "Which regime is better for ₹15 lakh salary?", a: "With only 80C and 80D deductions, the new regime is usually much cheaper. Use the calculator with your actual deductions." },
      { q: "Can I switch regimes every year?", a: "Salaried individuals without business income can generally choose each year when filing. Business income has stricter rules." },
      { q: "Did Budget 2026 change the slabs?", a: "No — FY 2026-27 slabs are the same as FY 2025-26." },
    ],
    links: [
      { href: "/tools/income-tax-calculator", label: "Income tax calculator" },
      { href: "/tools/salary-calculator", label: "CTC to in-hand calculator" },
    ],
    note: "This is general information, not tax advice.",
  },
  {
    slug: "markup-vs-margin",
    title: "Markup vs margin",
    options: ["Markup", "Margin"],
    summary: "Markup is profit as a percentage of cost; margin is profit as a percentage of selling price. The same sale has a higher markup than margin, and confusing them leads to underpricing.",
    rows: [
      { aspect: "Formula", values: ["(Price − Cost) ÷ Cost × 100", "(Price − Cost) ÷ Price × 100"] },
      { aspect: "Example (cost ₹600, price ₹1,000)", values: ["66.7%", "40%"] },
      { aspect: "Used for", values: ["Setting prices from cost", "Understanding profitability"] },
      { aspect: "Can exceed 100%?", values: ["Yes", "No"] },
    ],
    choose: [
      { option: "Use markup when", points: ["Setting prices from supplier costs.", "Pricing many items quickly."] },
      { option: "Use margin when", points: ["Comparing profitability across products.", "Reporting financial performance."] },
    ],
    verdict: "Decide which one your targets are in. A 40% margin requires a 66.7% markup — not 40%.",
    faqs: [
      { q: "How do I convert markup to margin?", a: "Margin = markup ÷ (1 + markup). A 50% markup equals a 33.3% margin." },
      { q: "How do I convert margin to markup?", a: "Markup = margin ÷ (1 − margin). A 25% margin equals a 33.3% markup." },
      { q: "Which is better to use?", a: "Both are useful — markup for pricing, margin for analysing profit." },
    ],
    links: [
      { href: "/tools/profit-margin-calculator", label: "Profit margin calculator" },
      { href: "/tools/markup-calculator", label: "Markup calculator" },
    ],
  },
  {
    slug: "gross-margin-vs-net-margin",
    title: "Gross margin vs net margin",
    options: ["Gross margin", "Net margin"],
    summary: "Gross margin shows profit after direct product costs; net margin shows profit after every cost, including overheads, interest and tax.",
    rows: [
      { aspect: "Formula", values: ["(Revenue − COGS) ÷ Revenue", "Net profit ÷ Revenue"] },
      { aspect: "Costs deducted", values: ["Direct costs only", "All costs"] },
      { aspect: "Tells you", values: ["Product profitability", "Overall business profitability"] },
      { aspect: "Typical level", values: ["Higher", "Lower"] },
    ],
    choose: [
      { option: "Look at gross margin to", points: ["Price products.", "Compare suppliers.", "Decide which products to push."] },
      { option: "Look at net margin to", points: ["Judge overall health.", "Compare with competitors.", "Decide on overhead cuts."] },
    ],
    verdict: "Healthy gross margin with weak net margin means overheads are too high; weak gross margin means pricing or product costs need fixing.",
    faqs: [
      { q: "What is a good gross margin?", a: "It varies by industry — compare with peers in our benchmarks bank." },
      { q: "Why can net margin be negative while gross margin is positive?", a: "Overheads, interest and taxes can exceed gross profit." },
      { q: "Is EBITDA margin the same as net margin?", a: "No — EBITDA margin excludes interest, tax, depreciation and amortisation." },
    ],
    links: [
      { href: "/glossary/gross-margin", label: "What is gross margin?" },
      { href: "/glossary/net-margin", label: "What is net margin?" },
    ],
  },
  {
    slug: "ebitda-vs-net-profit",
    title: "EBITDA vs net profit",
    options: ["EBITDA", "Net profit"],
    summary: "EBITDA measures operating profit before interest, tax, depreciation and amortisation. Net profit is what remains after all expenses. EBITDA is useful for comparing operations; net profit shows what owners actually earn.",
    rows: [
      { aspect: "Includes interest", values: ["No", "Yes"] },
      { aspect: "Includes tax", values: ["No", "Yes"] },
      { aspect: "Includes depreciation", values: ["No", "Yes"] },
      { aspect: "Used for", values: ["Valuation multiples, comparing operations", "Earnings, dividends, profitability"] },
      { aspect: "Risk of misuse", values: ["Can hide heavy capital spending and debt", "Can be affected by one-off items"] },
    ],
    choose: [
      { option: "Use EBITDA when", points: ["Comparing companies with different financing.", "Valuing a business on multiples."] },
      { option: "Use net profit when", points: ["Judging what owners earn.", "Assessing dividends or reinvestment."] },
    ],
    verdict: "Use both — and always check cash flow, which neither fully captures.",
    faqs: [
      { q: "Why do investors use EBITDA?", a: "It strips out financing and accounting choices, making operating performance easier to compare." },
      { q: "Can a company have positive EBITDA but a loss?", a: "Yes — high interest, depreciation or tax can turn EBITDA into a net loss." },
      { q: "Is EBITDA the same as cash flow?", a: "No. It ignores working capital, capital spending and debt repayments." },
    ],
    links: [{ href: "/glossary/ebitda", label: "What is EBITDA?" }],
  },
  {
    slug: "cagr-vs-absolute-return",
    title: "CAGR vs absolute return",
    options: ["CAGR", "Absolute return"],
    summary: "Absolute return shows total growth; CAGR shows the equivalent steady yearly rate. CAGR lets you compare investments or businesses over different time periods.",
    rows: [
      { aspect: "Formula", values: ["(End ÷ Start)^(1/years) − 1", "(End − Start) ÷ Start"] },
      { aspect: "Considers time", values: ["Yes", "No"] },
      { aspect: "Example: ₹1L → ₹2L in 5 years", values: ["14.87% a year", "100%"] },
      { aspect: "Best for", values: ["Comparing over different periods", "Short periods or simple totals"] },
    ],
    choose: [
      { option: "Use CAGR for", points: ["Multi-year comparisons.", "Business growth rates.", "Investment performance."] },
      { option: "Use absolute return for", points: ["Periods under a year.", "Simple total gains."] },
    ],
    verdict: "Always ask ‘over how many years?’ — a 100% return over 10 years is only about 7.2% a year.",
    faqs: [
      { q: "Is CAGR better than absolute return?", a: "For periods longer than a year, CAGR is more meaningful because it accounts for time." },
      { q: "What is XIRR?", a: "XIRR calculates returns when there are multiple cash flows at different dates, such as SIPs." },
      { q: "Can CAGR be misleading?", a: "It hides year-to-year volatility, so check yearly returns too." },
    ],
    links: [{ href: "/tools/cagr-calculator", label: "CAGR calculator" }],
  },
  {
    slug: "sip-vs-lump-sum",
    title: "SIP vs lump sum investment",
    options: ["SIP", "Lump sum"],
    summary: "A SIP invests a fixed amount regularly; a lump sum invests all at once. SIPs average out entry prices and build discipline; lump sums give money more time in the market if invested early.",
    rows: [
      { aspect: "How it works", values: ["Fixed amount every month", "One-time investment"] },
      { aspect: "Market timing risk", values: ["Lower — buys at many prices", "Higher — depends on entry point"] },
      { aspect: "Suits", values: ["Regular income earners", "Those with a large sum available"] },
      { aspect: "Discipline", values: ["Builds a habit", "Requires a decision each time"] },
    ],
    choose: [
      { option: "SIP if", points: ["You invest from monthly income.", "You worry about market timing.", "You want automatic discipline."] },
      { option: "Lump sum if", points: ["You have a large amount and a long horizon.", "You're comfortable with volatility."] },
    ],
    verdict: "Many investors combine both. This is general education, not investment advice.",
    faqs: [
      { q: "Which gives higher returns, SIP or lump sum?", a: "It depends on market movements. In steadily rising markets, lump sums invested early can do better; in volatile markets, SIPs reduce timing risk." },
      { q: "Can I convert a lump sum into a SIP?", a: "Yes, through a systematic transfer plan (STP) offered by many funds." },
      { q: "Are returns guaranteed?", a: "No. Market-linked investments carry risk." },
    ],
    links: [{ href: "/tools/sip-calculator", label: "SIP calculator" }],
    note: "Educational information only, not investment advice. Consult a SEBI-registered adviser.",
  },
  {
    slug: "fixed-costs-vs-variable-costs",
    title: "Fixed costs vs variable costs",
    options: ["Fixed costs", "Variable costs"],
    summary: "Fixed costs stay the same regardless of sales; variable costs change with every unit sold. The mix determines your break-even point and risk.",
    rows: [
      { aspect: "Changes with sales", values: ["No", "Yes"] },
      { aspect: "Examples", values: ["Rent, salaries, insurance, software", "Raw materials, packaging, delivery, commission"] },
      { aspect: "Effect on risk", values: ["High fixed costs raise risk when sales fall", "Variable costs scale down with sales"] },
      { aspect: "Effect on profit at scale", values: ["Spread over more units, raising profit", "Stay the same per unit"] },
    ],
    choose: [
      { option: "Favour fixed costs when", points: ["Demand is predictable.", "You want profits to scale quickly."] },
      { option: "Favour variable costs when", points: ["Demand is uncertain.", "You're starting out."] },
    ],
    verdict: "Early-stage businesses should keep fixed costs low; mature businesses with steady demand can use fixed costs to gain scale.",
    faqs: [
      { q: "Is salary a fixed or variable cost?", a: "Fixed salaries are fixed costs; commissions and hourly pay tied to output are variable." },
      { q: "What are semi-variable costs?", a: "Costs with a fixed base plus a variable part, like electricity with a fixed charge and usage charges." },
      { q: "How do fixed costs affect break-even?", a: "Higher fixed costs raise the number of sales needed to break even." },
    ],
    links: [{ href: "/tools/break-even-calculator", label: "Break-even calculator" }],
  },
  {
    slug: "b2b-vs-b2c",
    title: "B2B vs B2C business",
    options: ["B2B", "B2C"],
    summary: "B2B businesses sell to other businesses; B2C businesses sell to consumers. They differ in sales cycle, pricing, marketing and relationships.",
    rows: [
      { aspect: "Customers", values: ["Businesses", "Individuals"] },
      { aspect: "Sales cycle", values: ["Longer, multiple decision makers", "Shorter, often impulse"] },
      { aspect: "Order size", values: ["Larger", "Smaller"] },
      { aspect: "Marketing", values: ["Relationships, LinkedIn, proposals, trade shows", "Brand, social media, ads, retail"] },
      { aspect: "Pricing", values: ["Negotiated, contracts", "Fixed, promotions"] },
    ],
    choose: [
      { option: "B2B if", points: ["You have industry expertise.", "You like long-term relationships.", "You can handle longer payment cycles."] },
      { option: "B2C if", points: ["You can build a brand.", "You can reach many customers cheaply.", "You prefer faster sales."] },
    ],
    verdict: "Neither is better — choose based on your strengths, cash flow and how you like to sell.",
    faqs: [
      { q: "Is B2B more profitable than B2C?", a: "Not necessarily. B2B often has larger orders but longer cycles; B2C has scale but higher marketing costs." },
      { q: "Can a business do both?", a: "Yes — many manufacturers sell to retailers (B2B) and directly to consumers (D2C)." },
      { q: "What is D2C?", a: "Direct-to-consumer: brands selling directly to customers without middlemen." },
    ],
    links: [{ href: "/frameworks/bant-lead-scoring", label: "B2B lead scoring" }],
  },
  {
    slug: "franchise-vs-own-brand",
    title: "Franchise vs starting your own brand",
    options: ["Franchise", "Own brand"],
    summary: "A franchise gives you a proven brand and system for a fee; your own brand gives freedom and full upside but more risk.",
    rows: [
      { aspect: "Brand recognition", values: ["Established", "Built from scratch"] },
      { aspect: "Upfront cost", values: ["Franchise fee plus setup", "Setup only"] },
      { aspect: "Ongoing fees", values: ["Royalties and marketing fees", "None"] },
      { aspect: "Freedom", values: ["Limited — must follow the system", "Full"] },
      { aspect: "Risk", values: ["Lower (proven model)", "Higher"] },
    ],
    choose: [
      { option: "Franchise if", points: ["You want a proven model.", "You value training and support.", "You accept rules and royalties."] },
      { option: "Own brand if", points: ["You have a unique idea.", "You want full control and upside.", "You can handle uncertainty."] },
    ],
    verdict: "Franchising suits operators; own brands suit builders. Check franchise unit economics carefully before signing.",
    faqs: [
      { q: "Is a franchise profitable?", a: "It depends on location, fees and execution. Ask existing franchisees about real profits." },
      { q: "What questions should I ask a franchisor?", a: "Total investment, royalties, territory rights, support, exit terms and existing franchisees' profitability." },
      { q: "Can I build a franchise from my own brand?", a: "Yes, once your model is proven and documented." },
    ],
    links: [{ href: "/strategies/franchise-expansion", label: "Franchise expansion strategy" }],
  },
  {
    slug: "profit-vs-cash-flow",
    title: "Profit vs cash flow",
    options: ["Profit", "Cash flow"],
    summary: "Profit is revenue minus expenses on paper; cash flow is money actually moving in and out. A profitable business can run out of cash.",
    rows: [
      { aspect: "Timing", values: ["When sales and costs are recorded", "When money moves"] },
      { aspect: "Affected by credit sales", values: ["Counts the sale immediately", "Only when customer pays"] },
      { aspect: "Affected by stock purchases", values: ["Only when sold", "When paid"] },
      { aspect: "Affected by loan repayment", values: ["Interest only", "Full repayment"] },
    ],
    choose: [
      { option: "Track profit to", points: ["Judge long-term viability.", "Set prices."] },
      { option: "Track cash flow to", points: ["Avoid running out of money.", "Plan payments and growth."] },
    ],
    verdict: "Watch both monthly — profit tells you if the model works, cash flow tells you if you'll survive.",
    faqs: [
      { q: "Can a profitable business fail?", a: "Yes, if it runs out of cash — for example because customers pay late or stock ties up money." },
      { q: "How do I improve cash flow?", a: "Collect faster, hold less stock, negotiate longer supplier terms, and arrange working capital finance." },
      { q: "What is a cash flow forecast?", a: "A month-by-month estimate of money in and out." },
    ],
    links: [
      { href: "/tools/cash-flow-simulator", label: "Cash flow simulator" },
      { href: "/tools/working-capital-calculator", label: "Working capital calculator" },
    ],
  },
  {
    slug: "equity-vs-debt-funding",
    title: "Equity vs debt funding",
    options: ["Equity", "Debt"],
    summary: "Equity means selling ownership for money; debt means borrowing and repaying with interest. Equity doesn't need repayment but dilutes owners; debt keeps ownership but adds fixed repayments.",
    rows: [
      { aspect: "Repayment", values: ["Not required", "Required with interest"] },
      { aspect: "Ownership", values: ["Diluted", "Retained"] },
      { aspect: "Cost", values: ["Share of future value", "Interest"] },
      { aspect: "Risk to business", values: ["Lower cash pressure", "Fixed repayments even in bad months"] },
      { aspect: "Suits", values: ["High-growth, uncertain businesses", "Stable, cash-generating businesses"] },
    ],
    choose: [
      { option: "Equity if", points: ["You need large capital for growth.", "Cash flow is uncertain.", "Investors add expertise."] },
      { option: "Debt if", points: ["You have steady cash flow.", "You want to keep ownership.", "You can service repayments."] },
    ],
    verdict: "Many businesses use both. Match the funding to the stability of your cash flow.",
    faqs: [
      { q: "Is debt cheaper than equity?", a: "Often yes, because interest is fixed and may be tax-deductible, while equity investors expect high returns." },
      { q: "What is dilution?", a: "The reduction in existing owners' percentage when new shares are issued." },
      { q: "What is a convertible note?", a: "A loan that can convert into equity later, often used in early-stage start-ups." },
    ],
    links: [
      { href: "/tools/cap-table-builder", label: "Cap table builder" },
      { href: "/tools/emi-calculator", label: "EMI calculator" },
    ],
  },
];

export function getComparison(slug: string) {
  return COMPARISONS.find((c) => c.slug === slug);
}
