import type { ToolGuide } from "./toolGuides";

// Guides for the finance calculators. Worked examples match the calculators' own formulas.
export const TOOL_GUIDES_2: Record<string, ToolGuide> = {
  "gst-calculator": {
    heading: "How to calculate GST: add or remove GST from any price",
    intro: [
      "Goods and Services Tax (GST) is charged on most goods and services sold in India. Businesses add GST to their selling price and pass it on to the government, after claiming credit for GST paid on their own purchases.",
      "Since 22 September 2025, most items fall under two main rates — 5% and 18% — with a 40% rate for luxury and ‘sin’ goods, some items exempt (0%) and special rates for a few such as gold (3%). Always confirm the rate for your specific product or service code (HSN/SAC).",
    ],
    formula: {
      expression: "GST to add = Price × Rate ÷ 100  ·  Price without GST = Total × 100 ÷ (100 + Rate)",
      parts: [
        "Within a state, GST is split equally into CGST (central) and SGST (state).",
        "Between states, the full amount is charged as IGST.",
        "To remove GST, don't subtract the rate from the total — divide by (100 + rate) instead.",
      ],
    },
    example: {
      title: "Worked example",
      lines: [
        "Adding 18% GST to ₹10,000: GST = ₹1,800, total = ₹11,800.",
        "Within the state that's CGST ₹900 + SGST ₹900; to another state it's IGST ₹1,800.",
        "Removing 18% GST from ₹1,180: base = 1,180 × 100 ÷ 118 = ₹1,000, GST = ₹180.",
        "Common mistake: 18% of ₹1,180 is ₹212, which overstates the tax.",
      ],
    },
    tips: [
      "Show both pre-GST and GST-inclusive prices clearly on quotes to avoid disputes.",
      "Check rates whenever the GST Council announces changes.",
      "Claim input tax credit on eligible business purchases to reduce your GST payable.",
      "Keep invoices with GSTIN, HSN/SAC code, rate and tax amount for every sale.",
    ],
    faqs: [
      { q: "What are the current GST rates in India?", a: "Since 22 September 2025 the main rates are 5% and 18%, with 40% for luxury and sin goods. Some goods are exempt and a few have special rates, such as 3% on gold." },
      { q: "How do I remove GST from a total amount?", a: "Divide the total by (100 + GST rate) and multiply by 100. For example, ₹1,180 including 18% GST has a base price of ₹1,000." },
      { q: "What is the difference between CGST, SGST and IGST?", a: "For sales within a state, GST is split equally into Central GST and State GST. For sales between states, it is charged as Integrated GST." },
      { q: "Who needs to register for GST?", a: "Generally businesses whose turnover exceeds the threshold (₹40 lakh for most goods suppliers and ₹20 lakh for services, lower in some states), and certain others such as inter-state and e-commerce sellers. See our India compliance guide and confirm with a professional." },
    ],
  },

  "emi-calculator": {
    heading: "EMI calculator: how loan EMIs are calculated",
    intro: [
      "An EMI (equated monthly instalment) is the fixed amount you pay every month to repay a loan. Each EMI contains some interest and some principal. In the early months most of it is interest; later, most of it repays the principal.",
      "The EMI depends on three things: the loan amount, the interest rate and the tenure. A longer tenure lowers the EMI but increases the total interest you pay.",
    ],
    formula: {
      expression: "EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1]",
      parts: [
        "P = loan amount; r = monthly interest rate (annual rate ÷ 12 ÷ 100); n = number of monthly instalments.",
        "Total interest = EMI × n − P.",
      ],
    },
    example: {
      title: "Worked example: a ₹10 lakh business loan",
      lines: [
        "Loan ₹10,00,000 at 9% a year for 5 years (60 months).",
        "EMI ≈ ₹20,758 per month.",
        "Total paid ≈ ₹12,45,501, so interest ≈ ₹2,45,501.",
        "Stretching to 10 years would lower the EMI but nearly double the interest.",
      ],
    },
    tips: [
      "Keep total EMIs comfortably within your monthly cash flow — lenders often look at debt-service ratios.",
      "Prepay when you can; early prepayments save the most interest.",
      "Compare loans on total cost, including processing fees, not just the rate.",
      "Check whether the rate is fixed or floating.",
    ],
    faqs: [
      { q: "How is EMI calculated?", a: "EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1], where P is the loan amount, r the monthly interest rate and n the number of months." },
      { q: "Does a longer tenure reduce interest?", a: "No. A longer tenure lowers the monthly EMI but increases the total interest paid over the loan." },
      { q: "What happens if I prepay my loan?", a: "Prepayment reduces the outstanding principal, which cuts future interest. Check your loan agreement for any prepayment charges." },
      { q: "Is the EMI the same for the whole loan?", a: "For fixed-rate loans, yes. For floating-rate loans, lenders may change the EMI or tenure when rates change." },
    ],
  },

  "sip-calculator": {
    heading: "SIP calculator: what your monthly investment could grow to",
    intro: [
      "A Systematic Investment Plan (SIP) invests a fixed amount every month, usually in a mutual fund. Investing regularly builds discipline and averages out the price you pay over time.",
      "Returns compound — gains earn further gains — so time in the market matters a great deal. This calculator assumes a steady annual return for illustration; real market returns go up and down.",
    ],
    formula: {
      expression: "Future value = P × [((1 + r)ⁿ − 1) ÷ r] × (1 + r)",
      parts: [
        "P = monthly investment; r = expected monthly return (annual ÷ 12 ÷ 100); n = number of months.",
        "This assumes each instalment is invested at the start of the month.",
      ],
    },
    example: {
      title: "Worked example",
      lines: [
        "₹10,000 a month for 10 years at an assumed 12% a year.",
        "Total invested: ₹12,00,000.",
        "Estimated value: about ₹23,23,000 — gains of about ₹11,23,000.",
        "The same SIP for 20 years would grow to far more than double, because of compounding.",
      ],
    },
    tips: [
      "Start early — the extra years of compounding matter more than the amount.",
      "Increase your SIP when your income rises (a ‘step-up’).",
      "Use conservative return assumptions when planning goals.",
      "Read scheme documents and consider speaking to a registered adviser.",
    ],
    faqs: [
      { q: "How is SIP return calculated?", a: "It uses the future value of a series of monthly investments: P × [((1 + r)ⁿ − 1) ÷ r] × (1 + r), where r is the monthly return and n the number of months." },
      { q: "Are SIP returns guaranteed?", a: "No. Mutual fund returns depend on market performance and can be negative. Calculators show illustrations only." },
      { q: "What is a good return to assume?", a: "There is no guaranteed figure. Many planners use conservative assumptions and review regularly against actual performance." },
      { q: "Can I stop or change a SIP?", a: "Most SIPs can be paused, changed or stopped, subject to the fund's terms." },
    ],
  },

  "cagr-calculator": {
    heading: "CAGR: the compound annual growth rate explained",
    intro: [
      "CAGR, or compound annual growth rate, is the steady yearly growth rate that would take a value from its starting point to its ending point over a number of years.",
      "It is useful because real growth is uneven. A business might grow 40% one year and 5% the next; CAGR smooths this into one comparable number for revenue, profit, investments or market size.",
    ],
    formula: {
      expression: "CAGR = (Ending value ÷ Starting value)^(1 ÷ Years) − 1",
      parts: ["Multiply by 100 to express it as a percentage.", "Absolute growth = (End − Start) ÷ Start, which ignores time."],
    },
    example: {
      title: "Worked example: revenue growth",
      lines: [
        "Revenue grew from ₹10 lakh to ₹25 lakh over 5 years.",
        "CAGR = (25 ÷ 10)^(1/5) − 1 ≈ 20.11% a year.",
        "Absolute growth is 150%, but CAGR shows what that means each year.",
      ],
    },
    tips: [
      "Use CAGR to compare growth across businesses or investments over different periods.",
      "Remember CAGR hides volatility — check year-by-year numbers too.",
      "Be careful with very short periods, which can exaggerate CAGR.",
      "Use consistent start and end points (for example, financial years).",
    ],
    faqs: [
      { q: "What is CAGR?", a: "The compound annual growth rate — the constant yearly rate that would grow a starting value to an ending value over a given number of years." },
      { q: "How is CAGR different from average growth?", a: "Average growth adds yearly growth rates and divides; CAGR accounts for compounding and gives the true steady rate." },
      { q: "Can CAGR be negative?", a: "Yes — if the ending value is lower than the starting value, CAGR is negative." },
      { q: "What is a good CAGR for a business?", a: "It depends on industry, size and stage. Compare with competitors and your own targets rather than a single benchmark." },
    ],
  },

  "compound-interest-calculator": {
    heading: "Compound interest: how money grows on its own growth",
    intro: [
      "Compound interest is interest earned on both the original amount and the interest already added. Over time this ‘interest on interest’ makes money grow faster than simple interest.",
      "The more often interest is compounded — yearly, quarterly or monthly — the slightly higher the final amount. Most bank deposits in India compound quarterly.",
    ],
    formula: {
      expression: "A = P × (1 + r ÷ k)^(k × t)",
      parts: ["P = principal; r = annual rate (as a decimal); k = compounding periods per year; t = years.", "Compound interest = A − P."],
    },
    example: {
      title: "Worked example",
      lines: [
        "₹1,00,000 at 8% a year for 5 years, compounded quarterly.",
        "Final amount ≈ ₹1,48,595 — compound interest of about ₹48,595.",
        "Simple interest over the same period would be ₹40,000.",
      ],
    },
    tips: [
      "Start saving early — time is the biggest driver of compounding.",
      "Reinvest interest instead of withdrawing it.",
      "Compare the effective annual rate when products compound at different frequencies.",
      "Remember taxes and inflation reduce real returns.",
    ],
    faqs: [
      { q: "What is the formula for compound interest?", a: "A = P × (1 + r ÷ k)^(k × t), where P is principal, r the annual rate, k the compounding frequency and t the number of years." },
      { q: "What is the difference between simple and compound interest?", a: "Simple interest is calculated only on the principal; compound interest is calculated on the principal plus accumulated interest." },
      { q: "Does compounding frequency matter?", a: "Yes, but modestly. More frequent compounding gives a slightly higher final amount at the same rate." },
      { q: "What is the rule of 72?", a: "A quick estimate: divide 72 by the annual rate to find roughly how many years it takes money to double. At 8%, about 9 years." },
    ],
  },

  "profit-margin-calculator": {
    heading: "Profit margin vs markup: calculate both correctly",
    intro: [
      "Profit margin is profit as a percentage of the selling price. Markup is profit as a percentage of the cost. They describe the same sale from two angles, and mixing them up is one of the most common pricing mistakes.",
      "Margin matters for understanding how much of each sale you keep; markup is often how businesses set prices from costs.",
    ],
    formula: {
      expression: "Margin % = (Price − Cost) ÷ Price × 100  ·  Markup % = (Price − Cost) ÷ Cost × 100",
      parts: ["Margin is always lower than markup for the same sale.", "Calculate on prices before GST."],
    },
    example: {
      title: "Worked example",
      lines: [
        "Cost ₹600, selling price ₹1,000.",
        "Profit ₹400. Margin = 400 ÷ 1,000 = 40%. Markup = 400 ÷ 600 ≈ 66.7%.",
        "A retailer who wants a 40% margin needs a 66.7% markup, not 40%.",
      ],
    },
    tips: [
      "Decide whether your targets are in margin or markup — and use one consistently.",
      "Include all variable costs (packaging, delivery, payment fees) in cost.",
      "Check margins after discounts, not just at list price.",
      "Compare your gross margin with industry benchmarks.",
    ],
    faqs: [
      { q: "What is a good profit margin?", a: "It varies widely by industry — groceries may work on single-digit net margins while software can exceed 20%. Compare with your industry." },
      { q: "Why is margin lower than markup?", a: "Margin divides profit by the higher selling price; markup divides by the lower cost." },
      { q: "How do I convert markup to margin?", a: "Margin = Markup ÷ (1 + Markup). A 50% markup equals a 33.3% margin." },
      { q: "Should I include GST in margin calculations?", a: "No. Use prices before GST, because GST is collected for the government." },
    ],
  },

  "markup-calculator": {
    heading: "Markup calculator: set prices from your costs",
    intro: [
      "Markup pricing adds a percentage on top of cost to set a selling price. It is simple and ensures every sale covers its cost, which is why many retailers and manufacturers use it.",
      "If you think in margins instead, this calculator also works backwards from a target margin to the price you need.",
    ],
    formula: {
      expression: "Price = Cost × (1 + Markup %) · Price for target margin = Cost ÷ (1 − Margin %)",
      parts: ["Markup is based on cost; margin is based on price.", "A target margin must be below 100%."],
    },
    example: {
      title: "Worked example",
      lines: [
        "Cost ₹500 with a 40% markup → price ₹700, profit ₹200, margin 28.6%.",
        "Cost ₹500 with a 40% target margin → price ₹833, profit ₹333.",
        "The difference between ‘40% markup’ and ‘40% margin’ is ₹133 per unit.",
      ],
    },
    tips: [
      "Check that your markup still leaves room for discounts and returns.",
      "Use different markups for different product categories.",
      "Compare your markup-based price with what customers will pay (value-based pricing).",
      "Review markups when costs change.",
    ],
    faqs: [
      { q: "How do you calculate selling price from markup?", a: "Multiply cost by (1 + markup ÷ 100). A ₹500 cost with 40% markup sells at ₹700." },
      { q: "What is a typical retail markup?", a: "It varies by category — from low markups on groceries and electronics to much higher ones on fashion and jewellery." },
      { q: "Is markup pricing a good strategy?", a: "It is simple and safe, but ignores what customers are willing to pay. Combine it with value-based thinking." },
      { q: "How do I price for a target margin?", a: "Divide cost by (1 − target margin). For a 40% margin on a ₹500 cost, price = 500 ÷ 0.6 ≈ ₹833." },
    ],
  },

  "discount-calculator": {
    heading: "Discount calculator: the real price after discounts",
    intro: [
      "Discounts are everywhere — in festive sales, bulk deals and stacked offers like ‘50% + extra 20% off’. Successive discounts don't add up: each one applies to the already-reduced price.",
      "For businesses, understanding the effective discount protects margins; for buyers, it shows the real saving.",
    ],
    formula: {
      expression: "Final price = Price × (1 − D1%) × (1 − D2%)",
      parts: ["Effective discount = 1 − Final price ÷ Original price.", "Add GST after discount if the price is exclusive of GST."],
    },
    example: {
      title: "Worked example: stacked festive offer",
      lines: [
        "Original price ₹2,000 with 50% off plus an extra 20% off.",
        "After 50%: ₹1,000. After a further 20%: ₹800.",
        "Effective discount = 60%, not 70%.",
      ],
    },
    tips: [
      "As a seller, calculate margin after discount before launching a sale.",
      "Use stacked discounts carefully — they can look bigger than they are, and misleading claims can breach consumer law.",
      "Prefer value-adds (bundles, free shipping) to deep discounts where possible.",
      "Track how many discounted buyers return at full price.",
    ],
    faqs: [
      { q: "How do I calculate a discount percentage?", a: "Discount % = (Original price − Sale price) ÷ Original price × 100." },
      { q: "Is 50% + 20% the same as 70% off?", a: "No. The 20% applies to the already-halved price, so the effective discount is 60%." },
      { q: "Is GST charged before or after discount?", a: "Generally GST is charged on the transaction value after discounts shown on the invoice." },
      { q: "How do discounts affect my profit?", a: "A discount comes straight out of your margin. A 20% discount on a product with a 30% margin cuts profit per unit by two-thirds." },
    ],
  },

  "roi-calculator": {
    heading: "ROI calculator: total and annualised return on investment",
    intro: [
      "Return on investment (ROI) measures how much you gained compared with what you put in. It helps decide whether a machine, marketing campaign, property or other investment was worth it.",
      "Total ROI ignores time. Annualised ROI converts it into a yearly rate, so a 50% return over three years can be compared fairly with a 20% return over one year.",
    ],
    formula: {
      expression: "ROI % = (Return − Investment) ÷ Investment × 100  ·  Annualised = (Return ÷ Investment)^(1 ÷ Years) − 1",
      parts: ["Include all costs in the investment figure.", "Include all benefits (savings or income) in the return."],
    },
    example: {
      title: "Worked example",
      lines: [
        "₹5,00,000 invested; worth ₹7,50,000 after 3 years.",
        "Total ROI = 50%.",
        "Annualised ROI ≈ 14.47% a year.",
      ],
    },
    tips: [
      "Compare projects using annualised returns.",
      "Count hidden costs such as time, maintenance and financing.",
      "Measure marketing ROI on profit, not revenue.",
      "Compare ROI with your cost of capital or loan interest rate.",
    ],
    faqs: [
      { q: "How do you calculate ROI?", a: "ROI % = (Gain − Investment) ÷ Investment × 100." },
      { q: "What is annualised ROI?", a: "The equivalent yearly rate of return, calculated like CAGR, allowing investments of different lengths to be compared." },
      { q: "What is a good ROI?", a: "It depends on risk and alternatives. At minimum, ROI should beat your borrowing cost and safer options." },
      { q: "How do I calculate marketing ROI?", a: "(Profit from campaign − campaign cost) ÷ campaign cost × 100, using gross profit rather than revenue." },
    ],
  },

  "working-capital-calculator": {
    heading: "Working capital and the cash conversion cycle",
    intro: [
      "Working capital is the money tied up in day-to-day operations: cash, money customers owe you and stock, minus what you owe suppliers and other short-term bills.",
      "The cash conversion cycle shows how many days cash is locked up between paying for inputs and collecting from customers. Growing businesses often run out of cash because this cycle needs funding.",
    ],
    formula: {
      expression: "Working capital = Current assets − Current liabilities · Cash cycle = Debtor days + Inventory days − Creditor days",
      parts: [
        "Current ratio = Current assets ÷ Current liabilities; quick ratio excludes inventory.",
        "Debtor days = Receivables ÷ Sales × 365; inventory and creditor days use cost of goods sold.",
      ],
    },
    example: {
      title: "Worked example: a distributor",
      lines: [
        "Current assets ₹17 lakh (cash ₹3L, receivables ₹8L, stock ₹6L); current liabilities ₹7 lakh.",
        "Working capital ₹10 lakh; current ratio 2.43; quick ratio 1.57.",
        "Debtor days ≈ 49, inventory days ≈ 52, creditor days ≈ 43 → cash cycle ≈ 57 days.",
      ],
    },
    tips: [
      "Invoice promptly and follow up on overdue payments.",
      "Reduce slow-moving stock to free cash.",
      "Negotiate longer supplier terms without damaging relationships.",
      "Arrange working capital finance before growth strains cash.",
    ],
    faqs: [
      { q: "What is a good current ratio?", a: "Around 1.2 to 2 is often considered comfortable, but it varies by industry. Below 1 can signal difficulty paying short-term bills." },
      { q: "What is the cash conversion cycle?", a: "The number of days between paying for inventory and receiving cash from customers: debtor days + inventory days − creditor days." },
      { q: "How can I reduce working capital needs?", a: "Collect faster, hold less stock and pay suppliers on longer terms where possible." },
      { q: "Is negative working capital bad?", a: "Not always — some retailers collect cash before paying suppliers. But for most small businesses it signals cash stress." },
    ],
  },

  "salary-calculator": {
    heading: "CTC vs in-hand salary: how take-home pay is calculated",
    intro: [
      "Cost to Company (CTC) is the total amount an employer spends on you in a year, including items you don't receive as monthly cash — such as the employer's PF contribution and gratuity. Your in-hand (take-home) salary is what reaches your bank account after deductions.",
      "The main deductions are your own PF contribution (12% of basic), professional tax (set by your state) and income tax (TDS). The tax regime you choose can change take-home pay significantly.",
    ],
    formula: {
      expression: "In-hand = CTC − Employer PF − Gratuity − Employee PF − Professional tax − Income tax",
      parts: [
        "Employer and employee PF are usually 12% of basic each (sometimes capped at ₹15,000 basic a month).",
        "Gratuity is commonly provisioned at 4.81% of basic.",
        "The new regime gives a ₹75,000 standard deduction; the old regime ₹50,000 plus other deductions.",
      ],
    },
    example: {
      title: "Worked example: ₹18 lakh CTC, new regime",
      lines: [
        "Basic 50% = ₹9,00,000. Employer PF ₹1,08,000 and gratuity ₹43,290 → gross salary ₹16,48,710.",
        "Taxable income after ₹75,000 standard deduction: ₹15,73,710 → tax ≈ ₹1,20,699 including cess.",
        "After employee PF ₹1,08,000 and professional tax ₹2,400, take-home ≈ ₹1,18,134 a month.",
        "At ₹12 lakh CTC with the same structure, tax is zero under the new regime and take-home is about ₹85,395 a month.",
      ],
    },
    tips: [
      "Ask HR for the salary structure — basic %, PF and gratuity treatment change take-home pay.",
      "Compare both tax regimes every year with the income tax calculator.",
      "Remember PF is your savings, even though it reduces monthly cash.",
      "Declare investments to your employer early to avoid excess TDS.",
    ],
    faqs: [
      { q: "What is the difference between CTC and in-hand salary?", a: "CTC is the employer's total annual cost including PF, gratuity and benefits. In-hand is what you receive after PF, professional tax and income tax." },
      { q: "How much PF is deducted from salary?", a: "Typically 12% of basic salary from the employee, with the employer contributing a matching amount. Some employers cap it at 12% of ₹15,000 a month." },
      { q: "Is income up to ₹12 lakh tax-free?", a: "Under the new regime, taxable income up to ₹12 lakh has no tax due to the rebate. Salaried people also get a ₹75,000 standard deduction, so salary income up to about ₹12.75 lakh can be tax-free." },
      { q: "What is professional tax?", a: "A state tax on employment, deducted by employers in states that levy it, up to ₹2,500 a year." },
    ],
  },

  "income-tax-calculator": {
    heading: "Old vs new tax regime: which saves you more?",
    intro: [
      "India has two personal income tax regimes. The new regime (the default) has lower slab rates and a rebate that makes taxable income up to ₹12 lakh tax-free, but allows very few deductions. The old regime has higher rates but allows deductions such as 80C, 80D, HRA and home loan interest.",
      "Budget 2026 kept the slabs unchanged, so FY 2026-27 uses the same rates as FY 2025-26. Which regime is better depends on your income and how many deductions you can claim.",
    ],
    formula: {
      expression: "New regime slabs: 0–4L nil · 4–8L 5% · 8–12L 10% · 12–16L 15% · 16–20L 20% · 20–24L 25% · above 24L 30%",
      parts: [
        "Old regime: up to ₹2.5L nil (₹3L for 60–80, ₹5L for 80+) · to ₹5L 5% · 5–10L 20% · above 10L 30%.",
        "Rebate: new regime up to ₹60,000 (taxable income ≤ ₹12L); old regime up to ₹12,500 (≤ ₹5L).",
        "Surcharge applies above ₹50 lakh; a 4% health and education cess applies on all tax.",
      ],
    },
    example: {
      title: "Worked example: ₹15 lakh salary",
      lines: [
        "New regime: taxable ₹14,25,000 after standard deduction → tax ≈ ₹97,500.",
        "Old regime with ₹1.5L 80C and ₹25,000 80D: taxable ₹12,75,000 → tax ≈ ₹2,02,800.",
        "The new regime saves about ₹1,05,300 — the old regime only wins with large deductions such as HRA and home loan interest.",
      ],
    },
    tips: [
      "Run both regimes every year — your best choice can change.",
      "Total up all eligible old-regime deductions before deciding.",
      "Salaried employees usually choose a regime with their employer for TDS, and can still compare when filing (business income has stricter switching rules).",
      "Keep proofs of deductions in case they are needed.",
    ],
    faqs: [
      { q: "What are the income tax slabs for FY 2026-27?", a: "Under the new regime: nil up to ₹4 lakh, 5% from ₹4–8 lakh, 10% ₹8–12 lakh, 15% ₹12–16 lakh, 20% ₹16–20 lakh, 25% ₹20–24 lakh and 30% above ₹24 lakh. Budget 2026 made no changes." },
      { q: "Is income up to ₹12 lakh tax-free?", a: "Under the new regime, taxable income up to ₹12 lakh attracts no tax because of the rebate. Salaried taxpayers also get a ₹75,000 standard deduction." },
      { q: "Which deductions are allowed in the new regime?", a: "Very few — mainly the standard deduction for salaried taxpayers and the employer's NPS contribution. Most deductions like 80C, 80D and HRA are only in the old regime." },
      { q: "When is the old regime better?", a: "Usually when you have large deductions — for example HRA, home loan interest and full 80C and 80D — that reduce taxable income substantially." },
    ],
  },
};
