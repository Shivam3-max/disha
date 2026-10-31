import type { CaseStudy } from "./knowledgeTypes";

// Global case library, batch 5 — failures and frauds. Figures are rounded from public reports and court records.
export const CASES_GLOBAL_5: CaseStudy[] = [
  {
    slug: "theranos-fraud-collapse",
    title: "Theranos: the $9 billion blood-testing fraud",
    company: "Theranos",
    country: "United States",
    region: "North America",
    period: "2003–2022",
    kind: "failure",
    industrySlug: "healthcare-clinics",
    summary:
      "Theranos claimed it could run hundreds of tests from a few drops of blood. It raised hundreds of millions, reached a $9 billion valuation, and collapsed when reporting showed the technology didn't work.",
    story: [
      "Elizabeth Holmes dropped out of Stanford at 19 and founded Theranos in 2003. She promised that its ‘Edison’ device could run many lab tests from a finger-prick of blood, making testing cheap and accessible. The board included former US secretaries of state and defence, and investors put in hundreds of millions of dollars. By 2014 Theranos was valued at about $9 billion.",
      "Theranos partnered with Walgreens to offer tests in stores in Arizona. Behind the scenes, the Edison devices were unreliable, and the company secretly ran most tests on modified commercial machines. Employees who raised concerns were silenced or left.",
      "In October 2015 Wall Street Journal reporter John Carreyrou exposed the problems. Regulators sanctioned the company, it voided years of test results, and it dissolved in 2018. Holmes was convicted of fraud in 2022 and sentenced to more than 11 years in prison.",
    ],
    keyNumbers: [
      { label: "Peak valuation (2014)", value: "about $9 billion" },
      { label: "Founder age at founding", value: "19" },
      { label: "Exposé", value: "October 2015, Wall Street Journal" },
      { label: "Holmes's sentence", value: "over 11 years" },
    ],
    timeline: [
      { year: "2003", event: "Theranos founded." },
      { year: "2013", event: "Walgreens partnership launches." },
      { year: "2015", event: "WSJ investigation published." },
      { year: "2018", event: "Company dissolves; Holmes charged." },
      { year: "2022", event: "Holmes convicted." },
    ],
    drivers: [
      "Promises far ahead of what the technology could do.",
      "Secrecy and intimidation silenced internal critics.",
      "A celebrity board with little scientific oversight.",
      "Investors trusted the story without checking the science.",
    ],
    lesson:
      "Charisma, secrecy, and famous backers are not evidence; products that touch health and safety must be independently verified.",
    takeaways: [
      "Verify claims before you invest or partner.",
      "Make it safe for employees to raise concerns.",
      "Build boards with real domain expertise.",
    ],
    lawSlugs: ["halo-effect", "authority-principle", "confirmation-bias"],
  },
  {
    slug: "enron-accounting-collapse",
    title: "Enron: ‘America's most innovative company’ goes bankrupt",
    company: "Enron",
    country: "United States",
    region: "North America",
    period: "1985–2001",
    kind: "failure",
    industrySlug: "financial-services",
    summary:
      "Enron used aggressive accounting and off-balance-sheet entities to hide debt and inflate profits. When the truth emerged in 2001, it went bankrupt and took its auditor, Arthur Andersen, down too.",
    story: [
      "Enron grew from a pipeline company into an energy trading giant, reporting about $100 billion in revenue in 2000. Fortune named it America's most innovative company six years running. Its share price peaked around $90 in 2000.",
      "Executives used ‘mark-to-market’ accounting to book expected future profits immediately and created special-purpose entities, some run by the finance chief, to hide debt and losses. Employees were encouraged to hold Enron shares in their retirement plans. Warning signs included sudden executive departures and questions from short sellers and journalists.",
      "In October 2001 Enron reported large losses and reduced shareholder equity by about $1.2 billion. It filed for bankruptcy in December 2001. Thousands of employees lost jobs and retirement savings. Auditor Arthur Andersen collapsed, and the US passed the Sarbanes-Oxley Act in 2002 to tighten corporate reporting.",
    ],
    keyNumbers: [
      { label: "Reported revenue (2000)", value: "about $100 billion" },
      { label: "Share price, peak → end", value: "about $90 → under $1" },
      { label: "Equity reduction disclosed (2001)", value: "about $1.2 billion" },
      { label: "Bankruptcy", value: "December 2001" },
    ],
    timeline: [
      { year: "2000", event: "Share price peaks." },
      { year: "2001", event: "CEO resigns (August); losses disclosed (October); bankruptcy (December)." },
      { year: "2002", event: "Arthur Andersen convicted; Sarbanes-Oxley Act." },
      { year: "2006", event: "Executives convicted." },
    ],
    drivers: [
      "Accounting that booked future profits as current earnings.",
      "Hidden debt in related-party entities.",
      "A culture that rewarded deal-making over truth.",
      "Auditors and board failed in oversight.",
    ],
    lesson:
      "When reported profits can't be traced to real cash, the business may be a story, not a company.",
    takeaways: [
      "Compare profit to actual cash flow.",
      "Be wary of complexity designed to confuse.",
      "Don't hold all your savings in your employer's stock.",
    ],
    lawSlugs: ["goodharts-law", "cobra-effect", "halo-effect"],
  },
  {
    slug: "lehman-brothers-bankruptcy",
    title: "Lehman Brothers: the largest bankruptcy in US history",
    company: "Lehman Brothers",
    country: "United States",
    region: "North America",
    period: "2003–2008",
    kind: "failure",
    industrySlug: "financial-services",
    summary:
      "A 158-year-old investment bank borrowed heavily to bet on property. When US housing collapsed, it failed in September 2008 with about $639 billion of assets, triggering the worst phase of the financial crisis.",
    story: [
      "Lehman Brothers, founded in 1850, grew aggressively in mortgage lending and commercial property in the 2000s. It operated with leverage of about 30 to 1 — so a fall of a few percent in its assets' value could wipe out its equity.",
      "As the US housing market turned in 2007, Lehman's mortgage-linked assets lost value. It used an accounting manoeuvre known as ‘Repo 105’ to temporarily move tens of billions of dollars off its balance sheet at quarter-ends, making its leverage look lower. Talks to sell the bank to Korea Development Bank, Bank of America, and Barclays failed, and the US government declined to rescue it.",
      "Lehman filed for bankruptcy on 15 September 2008, with about $639 billion of assets — the largest in US history. Credit markets froze worldwide, and governments then stepped in to rescue other banks.",
    ],
    keyNumbers: [
      { label: "Founded", value: "1850" },
      { label: "Leverage", value: "about 30 to 1" },
      { label: "Assets at bankruptcy", value: "about $639 billion" },
      { label: "Bankruptcy date", value: "15 September 2008" },
    ],
    timeline: [
      { year: "2006", event: "Aggressive expansion in property." },
      { year: "2007", event: "Housing downturn begins." },
      { year: "2008", event: "Rescue talks fail; bankruptcy (September)." },
    ],
    drivers: [
      "Extreme borrowing left no buffer for losses.",
      "Concentrated bets on one asset class.",
      "Accounting that obscured the true risk.",
    ],
    lesson:
      "Debt magnifies both gains and losses; with enough leverage, a small decline can destroy a business that seemed unshakeable.",
    takeaways: [
      "Know how much your asset values could fall before you're insolvent.",
      "Avoid concentrating risk in one market.",
      "Don't count on a rescue.",
    ],
    lawSlugs: ["optimism-bias", "murphys-law", "lindy-effect"],
  },
  {
    slug: "ftx-crypto-collapse",
    title: "FTX: a $32 billion crypto exchange gone in a week",
    company: "FTX",
    country: "Bahamas",
    region: "North America",
    period: "2019–2024",
    kind: "failure",
    industrySlug: "financial-services",
    summary:
      "Sam Bankman-Fried's FTX secretly moved customer deposits to his trading firm. When a news report triggered withdrawals, about $8 billion was missing and the company collapsed within days.",
    story: [
      "Sam Bankman-Fried founded FTX in 2019, alongside his trading firm Alameda Research. FTX grew rapidly, bought stadium naming rights and a Super Bowl ad, and was valued at about $32 billion in early 2022. Bankman-Fried was presented as a responsible face of crypto.",
      "On 2 November 2022 CoinDesk reported that Alameda's balance sheet was largely made up of FTT, a token FTX itself created. Days later Binance's CEO said he would sell his FTT holdings. Customers rushed to withdraw billions of dollars, and FTX couldn't pay — customer funds had been used by Alameda.",
      "FTX filed for bankruptcy on 11 November 2022. Its new CEO, who had overseen Enron's liquidation, said he had never seen such a complete failure of corporate controls. Bankman-Fried was convicted of fraud in 2023 and sentenced to 25 years in prison.",
    ],
    keyNumbers: [
      { label: "Peak valuation (January 2022)", value: "about $32 billion" },
      { label: "Missing customer funds", value: "about $8 billion" },
      { label: "Report to bankruptcy", value: "about 9 days" },
      { label: "Founder's sentence", value: "25 years" },
    ],
    timeline: [
      { year: "2019", event: "FTX founded." },
      { year: "2022", event: "Valued at $32B (January); CoinDesk report and collapse (November)." },
      { year: "2023", event: "Bankman-Fried convicted." },
      { year: "2024", event: "Sentenced to 25 years." },
    ],
    drivers: [
      "Customer money mixed with a related trading firm.",
      "No independent board, finance team, or controls.",
      "Value propped up by a self-issued token.",
      "Celebrity marketing created false confidence.",
    ],
    lesson:
      "A business that holds other people's money needs strict separation and controls; without them, one rumour can end it.",
    takeaways: [
      "Never mix customer funds with operating money.",
      "Independent oversight protects everyone, including founders.",
      "Ask what backs an asset's value.",
    ],
    lawSlugs: ["halo-effect", "social-proof", "goodharts-law"],
  },
  {
    slug: "wirecard-missing-billions",
    title: "Wirecard: the German fintech with €1.9 billion that didn't exist",
    company: "Wirecard",
    country: "Germany",
    region: "Europe",
    period: "2015–2020",
    kind: "failure",
    industrySlug: "financial-services",
    summary:
      "Wirecard joined Germany's top stock index, while journalists reported fraud for years. In 2020 it admitted €1.9 billion supposedly held in Asian bank accounts probably didn't exist, and collapsed.",
    story: [
      "Wirecard processed card payments and grew into a German tech champion, entering the DAX index in 2018 and reaching a market value of about €24 billion. Much of its reported profit came from partner businesses in Asia.",
      "From 2015 the Financial Times, led by reporter Dan McCrum, published evidence of accounting irregularities. Instead of investigating Wirecard, German regulator BaFin temporarily banned short-selling of its shares and filed a criminal complaint against the journalists.",
      "In June 2020 auditor EY refused to sign the accounts because €1.9 billion of cash could not be verified. Philippine banks said the documents were fake. Wirecard filed for insolvency on 25 June 2020. Its CEO was arrested, and its chief operating officer fled.",
    ],
    keyNumbers: [
      { label: "Peak market value", value: "about €24 billion" },
      { label: "Missing cash", value: "€1.9 billion" },
      { label: "DAX entry", value: "2018" },
      { label: "Insolvency", value: "25 June 2020" },
    ],
    timeline: [
      { year: "2015", event: "FT begins publishing concerns." },
      { year: "2018", event: "Joins the DAX." },
      { year: "2019", event: "BaFin bans short-selling of Wirecard shares." },
      { year: "2020", event: "Missing €1.9 billion; insolvency." },
    ],
    drivers: [
      "Profits from opaque third-party partners.",
      "Regulators protected a national champion instead of investigating.",
      "Auditors failed to verify cash directly for years.",
    ],
    lesson:
      "Prestige and national pride are no substitute for verification — confirm cash with the bank, not with documents from the company.",
    takeaways: [
      "Verify the most important numbers directly at source.",
      "Take critics seriously, especially persistent ones.",
      "Be wary of profits you can't trace.",
    ],
    lawSlugs: ["confirmation-bias", "authority-principle", "streisand-effect"],
  },
  {
    slug: "quibi-1-75-billion-failure",
    title: "Quibi: $1.75 billion raised, shut after six months",
    company: "Quibi",
    country: "United States",
    region: "North America",
    period: "2018–2020",
    kind: "failure",
    industrySlug: "media-entertainment",
    summary:
      "Hollywood veteran Jeffrey Katzenberg and Meg Whitman raised about $1.75 billion for premium short videos for phones. Quibi launched in a pandemic, had no sharing features, and shut down within months.",
    story: [
      "Quibi (‘quick bites’) planned to sell high-budget shows in episodes under ten minutes, watchable only on phones, for people on the move. It raised about $1.75 billion from studios and investors and signed big-name talent.",
      "Quibi launched on 6 April 2020 — just as Covid-19 lockdowns kept people at home, removing the commuting moments it was designed for. At launch users couldn't easily cast shows to TVs or share clips on social media, cutting off free word of mouth. Meanwhile TikTok and YouTube offered short videos free.",
      "Subscriber numbers fell far short of targets. In October 2020 Quibi announced it was shutting down, and its content was later sold to Roku.",
    ],
    keyNumbers: [
      { label: "Funding raised", value: "about $1.75 billion" },
      { label: "Launch", value: "6 April 2020" },
      { label: "Shutdown announced", value: "October 2020" },
    ],
    timeline: [
      { year: "2018", event: "Founded by Katzenberg; Whitman becomes CEO." },
      { year: "2020", event: "Launch (April); shutdown announced (October)." },
      { year: "2021", event: "Content sold to Roku." },
    ],
    drivers: [
      "Built for a use case without testing real demand.",
      "Blocked sharing — the main way short video spreads.",
      "Priced against strong free alternatives.",
      "Bad launch timing, without the flexibility to adapt.",
    ],
    lesson:
      "Money and famous founders can't replace evidence that customers want the product in the form you're selling.",
    takeaways: [
      "Test demand cheaply before spending heavily.",
      "Let customers share and spread your product.",
      "Compare your price with free alternatives honestly.",
    ],
    lawSlugs: ["says-law", "optimism-bias", "halo-effect"],
  },
  {
    slug: "juicero-700-dollar-juicer",
    title: "Juicero: the $400 juicer you didn't need",
    company: "Juicero",
    country: "United States",
    region: "North America",
    period: "2013–2017",
    kind: "failure",
    industrySlug: "manufacturing",
    summary:
      "Juicero raised about $120 million for a Wi-Fi-connected juice press costing $699. When reporters showed its juice packs could be squeezed by hand just as well, the company closed.",
    story: [
      "Juicero was founded in 2013 and raised about $120 million from well-known investors. Its press used proprietary packs of chopped fruit and vegetables, read QR codes, and connected to Wi-Fi. It launched in 2016 at $699, later cut to $399, with packs costing about $5–8 each.",
      "In April 2017 Bloomberg published a video showing that squeezing the packs by hand produced nearly as much juice, nearly as fast. The story went viral and became a symbol of over-engineered start-ups.",
      "Juicero offered refunds and shut down in September 2017.",
    ],
    keyNumbers: [
      { label: "Funding raised", value: "about $120 million" },
      { label: "Launch price", value: "$699, later $399" },
      { label: "Price per pack", value: "about $5–8" },
      { label: "Shutdown", value: "September 2017" },
    ],
    timeline: [
      { year: "2016", event: "Launches at $699." },
      { year: "2017", event: "Price cut; Bloomberg video (April); shutdown (September)." },
    ],
    drivers: [
      "Engineering complexity without a real customer problem.",
      "Price far above the value delivered.",
      "Investors backed the founder story over customer evidence.",
    ],
    lesson:
      "Technology must solve a problem customers care about at a price they'll pay — impressive engineering is not enough.",
    takeaways: [
      "Ask: could customers get the same result more simply?",
      "Match price to the value customers perceive.",
      "Test with real users early and honestly.",
    ],
    lawSlugs: ["occams-razor", "law-of-the-instrument", "ikea-effect"],
  },
  {
    slug: "pets-com-dot-com-bust",
    title: "Pets.com: the sock puppet that couldn't sell dog food at a profit",
    company: "Pets.com",
    country: "United States",
    region: "North America",
    period: "1998–2000",
    kind: "failure",
    industrySlug: "d2c-ecommerce",
    summary:
      "Pets.com spent heavily on a famous sock-puppet mascot and Super Bowl ad but sold heavy pet supplies below cost. It closed about 268 days after its IPO.",
    story: [
      "Pets.com launched in 1998 to sell pet food and supplies online, with Amazon among its investors. Its sock-puppet mascot became famous, appearing in a Super Bowl ad in January 2000 and in the Macy's Thanksgiving parade.",
      "The economics were poor. Bags of food and litter were heavy and cheap, so shipping costs were high relative to the price. Pets.com often sold below cost to win customers. It went public in February 2000, raising about $82.5 million, just before the dot-com crash.",
      "With investors no longer willing to fund losses, Pets.com announced its liquidation in November 2000. It became the symbol of the dot-com bubble.",
    ],
    keyNumbers: [
      { label: "IPO raised (February 2000)", value: "about $82.5 million" },
      { label: "Time from IPO to liquidation", value: "about 268 days" },
      { label: "Super Bowl ad", value: "January 2000" },
    ],
    timeline: [
      { year: "1998", event: "Pets.com launches." },
      { year: "2000", event: "Super Bowl ad (January); IPO (February); liquidation (November)." },
    ],
    drivers: [
      "Unit economics negative on every order.",
      "Marketing spent before the business model worked.",
      "Depended on endless investor funding.",
    ],
    lesson:
      "Brand awareness can't save a business that loses money on every sale.",
    takeaways: [
      "Calculate profit per order, including delivery.",
      "Fix unit economics before spending on brand.",
      "Plan for funding drying up.",
    ],
    lawSlugs: ["optimism-bias", "says-law", "law-of-diminishing-returns"],
  },
  {
    slug: "webvan-grocery-delivery-failure",
    title: "Webvan: building for millions of customers who hadn't arrived",
    company: "Webvan",
    country: "United States",
    region: "North America",
    period: "1996–2001",
    kind: "failure",
    industrySlug: "logistics-transport",
    summary:
      "Webvan raised about $800 million and ordered a billion dollars of automated warehouses before proving demand for online groceries. It went bankrupt in 2001.",
    story: [
      "Webvan was founded in 1996 by Louis Borders, co-founder of Borders bookstores, to deliver groceries ordered online within 30-minute windows. It raised about $800 million from top investors and went public in 1999 at a valuation of several billion dollars.",
      "Before proving demand in its first city, Webvan signed a contract worth about $1 billion with engineering firm Bechtel to build huge automated warehouses in many US cities. Each warehouse needed far more orders than Webvan was receiving to break even. It expanded rapidly while losing money on deliveries.",
      "When the dot-com bubble burst, Webvan couldn't raise more money and filed for bankruptcy in July 2001, losing about 2,000 jobs. Years later, online grocery succeeded through companies that scaled more gradually.",
    ],
    keyNumbers: [
      { label: "Funding raised", value: "about $800 million" },
      { label: "Warehouse contract with Bechtel", value: "about $1 billion" },
      { label: "Jobs lost", value: "about 2,000" },
      { label: "Bankruptcy", value: "July 2001" },
    ],
    timeline: [
      { year: "1996", event: "Founded." },
      { year: "1999", event: "Launches in San Francisco; IPO." },
      { year: "2000", event: "Expands to more cities; acquires HomeGrocer." },
      { year: "2001", event: "Bankruptcy." },
    ],
    drivers: [
      "Built massive fixed infrastructure before proving demand.",
      "Expanded to many cities at once.",
      "Losses per order grew with scale.",
    ],
    lesson:
      "Scale proven economics, not expected ones — large fixed costs before demand is proven can sink a company.",
    takeaways: [
      "Prove your model in one location first.",
      "Keep fixed costs flexible until demand is clear.",
      "Grow at the pace your unit economics allow.",
    ],
    lawSlugs: ["galls-law", "optimism-bias", "planning-fallacy"],
  },
  {
    slug: "fyre-festival-fraud",
    title: "Fyre Festival: influencer hype and a festival that didn't exist",
    company: "Fyre Media",
    country: "United States",
    region: "North America",
    period: "2016–2018",
    kind: "failure",
    industrySlug: "hospitality",
    summary:
      "Fyre Festival sold luxury tickets through a blitz of influencer posts. Guests arrived in the Bahamas to find disaster-relief tents and cheese sandwiches; its founder was jailed for fraud.",
    story: [
      "Billy McFarland and rapper Ja Rule promoted Fyre Festival as an ultra-luxury music festival on a private Bahamian island in April 2017. A slick video featured supermodels, and hundreds of influencers posted the same orange tile on Instagram on the same day. Kendall Jenner was reportedly paid about $250,000 for one post.",
      "Tickets and packages cost from hundreds to many thousands of dollars. Organisers had little experience, the location changed, and basic infrastructure — housing, food, sanitation — was not ready. Guests found tents and pre-packaged sandwiches, and the festival was cancelled on the first day.",
      "McFarland pleaded guilty to wire fraud and was sentenced to six years in prison in 2018. The case became a lesson in the power and risks of influencer marketing.",
    ],
    keyNumbers: [
      { label: "Reported fee for one influencer post", value: "about $250,000" },
      { label: "Festival date", value: "April 2017" },
      { label: "Founder's sentence", value: "6 years" },
    ],
    timeline: [
      { year: "2016", event: "Festival promoted with influencer campaign." },
      { year: "2017", event: "Festival collapses on day one (April)." },
      { year: "2018", event: "McFarland sentenced." },
    ],
    drivers: [
      "Marketing far ahead of operations.",
      "Founders lacked experience and ignored warnings.",
      "Fraudulent claims to investors and buyers.",
    ],
    lesson:
      "Marketing can create demand for anything — but if operations can't deliver, the hype magnifies the failure.",
    takeaways: [
      "Make sure you can deliver before you promote.",
      "Listen to experienced people who warn you.",
      "Be honest with investors and customers.",
    ],
    lawSlugs: ["social-proof", "scarcity-principle", "optimism-bias"],
  },
  {
    slug: "myspace-rise-and-fall",
    title: "MySpace: bought for $580 million, sold for $35 million",
    company: "MySpace",
    country: "United States",
    region: "North America",
    period: "2003–2011",
    kind: "failure",
    industrySlug: "media-entertainment",
    summary:
      "MySpace was briefly the most visited website in the US. After News Corp bought it, ad pressure, clutter, and slow product development let Facebook overtake it.",
    story: [
      "MySpace launched in 2003 and became the dominant social network, especially for music and young users, who could customise their pages heavily. News Corp bought its parent company in 2005 for about $580 million. In 2006 MySpace briefly became the most visited website in the US.",
      "Under pressure to meet revenue targets — including a large Google advertising deal — MySpace filled pages with ads. Customisation made pages slow and messy, and spam grew. Product development slowed while Facebook offered a cleaner, more reliable experience and opened to everyone.",
      "Facebook overtook MySpace globally in 2008. Users left rapidly, and in 2011 News Corp sold MySpace for about $35 million.",
    ],
    keyNumbers: [
      { label: "News Corp purchase (2005)", value: "about $580 million" },
      { label: "Overtaken by Facebook", value: "2008" },
      { label: "Sale price (2011)", value: "about $35 million" },
    ],
    timeline: [
      { year: "2003", event: "MySpace launches." },
      { year: "2005", event: "Acquired by News Corp." },
      { year: "2006", event: "Most visited US website for a time." },
      { year: "2011", event: "Sold for about $35 million." },
    ],
    drivers: [
      "Monetisation pressure degraded the experience.",
      "Slow product development after acquisition.",
      "A cleaner competitor offered a better experience.",
    ],
    lesson:
      "Squeezing revenue from a product at the expense of user experience can hand the market to a competitor.",
    takeaways: [
      "Watch whether monetisation is hurting the core experience.",
      "Keep investing in the product after success.",
      "Clean and simple can beat flexible and messy.",
    ],
    lawSlugs: ["banner-blindness", "aesthetic-usability-effect", "goodharts-law"],
  },
  {
    slug: "vine-six-second-video-shutdown",
    title: "Vine: six-second videos and the creators who left",
    company: "Vine (Twitter)",
    country: "United States",
    region: "North America",
    period: "2012–2017",
    kind: "failure",
    industrySlug: "media-entertainment",
    summary:
      "Twitter bought Vine before it launched and saw it grow into a cultural force — but without a way for creators to earn, its stars left for YouTube and Instagram, and Twitter shut it down.",
    story: [
      "Twitter bought Vine in October 2012, before launch, for a reported $30 million. Vine launched in January 2013 with six-second looping videos, and it quickly created a new style of comedy and a generation of creators.",
      "In June 2013 Instagram added 15-second videos. Vine's top creators asked for ways to earn money and for product improvements; when these didn't come, many moved to YouTube and Instagram, taking their audiences. Twitter itself was struggling and had limited resources for Vine.",
      "In October 2016 Twitter announced it would shut Vine down; the app was discontinued in early 2017. Its short, looping format later re-emerged in TikTok.",
    ],
    keyNumbers: [
      { label: "Reported acquisition price (2012)", value: "about $30 million" },
      { label: "Video length", value: "6 seconds" },
      { label: "Shutdown announced", value: "October 2016" },
    ],
    timeline: [
      { year: "2012", event: "Twitter acquires Vine." },
      { year: "2013", event: "Vine launches; Instagram adds video." },
      { year: "2016", event: "Shutdown announced." },
    ],
    drivers: [
      "No monetisation for the creators who drove usage.",
      "Parent company lacked resources and focus.",
      "Competitors copied the format quickly.",
    ],
    lesson:
      "Platforms depend on the people who create value on them — if they can't earn, they leave and take the audience with them.",
    takeaways: [
      "Help your key partners or creators make money.",
      "Listen to your most valuable users' requests.",
      "Assume competitors will copy your best feature.",
    ],
    lawSlugs: ["price-law", "metcalfes-law", "reciprocity-principle"],
  },
  {
    slug: "google-glass-consumer-flop",
    title: "Google Glass: a futuristic product without a reason to wear it",
    company: "Google",
    country: "United States",
    region: "North America",
    period: "2012–2015",
    kind: "failure",
    industrySlug: "electronics-retail",
    summary:
      "Google Glass, a $1,500 head-mounted display, generated huge hype but raised privacy fears and lacked compelling everyday uses. Consumer sales ended in 2015.",
    story: [
      "Google unveiled Glass in 2012 with a skydiving demo. In 2013 it sold an ‘Explorer Edition’ to developers and early adopters for $1,500. The headset could take photos and video, show notifications, and give directions.",
      "Glass made people around wearers uncomfortable, since it could record without obvious signals. Some bars and cinemas banned it, and wearers were mocked as ‘Glassholes’. Battery life was short and there were few compelling apps.",
      "Google stopped selling Glass to consumers in January 2015. It continued an Enterprise Edition for factory and logistics workers, where hands-free information was genuinely useful, until 2023.",
    ],
    keyNumbers: [
      { label: "Explorer Edition price", value: "$1,500" },
      { label: "Consumer sales ended", value: "January 2015" },
      { label: "Enterprise edition ended", value: "2023" },
    ],
    timeline: [
      { year: "2012", event: "Glass unveiled." },
      { year: "2013", event: "Explorer Edition on sale." },
      { year: "2015", event: "Consumer programme ends." },
      { year: "2017", event: "Enterprise Edition launched." },
    ],
    drivers: [
      "Technology-led without a clear everyday customer need.",
      "Social discomfort for people around the user.",
      "High price for an unfinished product.",
    ],
    lesson:
      "A product must work socially as well as technically — and the right first market may be businesses, not consumers.",
    takeaways: [
      "Define the specific job your product does daily.",
      "Consider how non-users react to your product.",
      "Look for the niche where the value is obvious.",
    ],
    lawSlugs: ["amaras-law", "law-of-the-instrument", "spotlight-effect"],
  },
  {
    slug: "google-plus-shutdown",
    title: "Google+: forcing users into a social network",
    company: "Google",
    country: "United States",
    region: "North America",
    period: "2011–2019",
    kind: "failure",
    industrySlug: "saas-tech",
    summary:
      "Google tied its social network to YouTube, Gmail, and other services to grow sign-ups, but few people used it. After a data exposure bug, Google shut down the consumer version in 2019.",
    story: [
      "Google launched Google+ in June 2011 to compete with Facebook. It had good ideas, such as ‘Circles’ for sharing with different groups. To grow quickly, Google required Google+ accounts for some services, including commenting on YouTube.",
      "Sign-up numbers looked large, but engagement was tiny. In 2018 Google said that 90% of Google+ user sessions lasted less than five seconds. Forced integration annoyed users, especially on YouTube.",
      "In October 2018 Google disclosed a software bug that had exposed profile data of up to 500,000 users and announced it would close Google+ for consumers. It shut down in April 2019.",
    ],
    keyNumbers: [
      { label: "Launch", value: "June 2011" },
      { label: "Sessions under five seconds", value: "90%" },
      { label: "Users exposed by bug", value: "up to 500,000" },
      { label: "Consumer shutdown", value: "April 2019" },
    ],
    timeline: [
      { year: "2011", event: "Google+ launches." },
      { year: "2013", event: "YouTube comments require Google+." },
      { year: "2015", event: "Google begins unbundling Google+." },
      { year: "2019", event: "Consumer version shut down." },
    ],
    drivers: [
      "Measured sign-ups instead of real engagement.",
      "Forced adoption bred resentment.",
      "Users had no reason to leave an established network.",
    ],
    lesson:
      "You can force sign-ups, but you can't force engagement — vanity metrics hide a product people don't want.",
    takeaways: [
      "Track active use, not just registrations.",
      "Give people a reason to switch, not a requirement.",
      "Network effects protect incumbents — find a different angle.",
    ],
    lawSlugs: ["goodharts-law", "metcalfes-law", "status-quo-bias"],
  },
  {
    slug: "microsoft-zune-vs-ipod",
    title: "Microsoft Zune: five years late to the iPod's party",
    company: "Microsoft",
    country: "United States",
    region: "North America",
    period: "2006–2011",
    kind: "failure",
    industrySlug: "electronics-retail",
    summary:
      "Microsoft launched the Zune music player in 2006, five years after the iPod. Despite decent hardware, it offered no compelling reason to switch and was discontinued in 2011.",
    story: [
      "Apple's iPod (2001) and iTunes Store (2003) dominated digital music. In November 2006 Microsoft launched the Zune, a capable player with a larger screen and wireless sharing.",
      "But Zune's headline feature — ‘squirting’ songs to nearby Zunes — required other people to own Zunes and limited shared songs to three plays or three days. The brown colour option became a joke. Apple's ecosystem of accessories, iTunes, and cultural cool was too strong.",
      "Zune captured only a small slice of the market. Microsoft discontinued Zune hardware in 2011, though some of its design ideas influenced Windows Phone.",
    ],
    keyNumbers: [
      { label: "Launch", value: "November 2006" },
      { label: "iPod head start", value: "about 5 years" },
      { label: "Shared-song limit", value: "3 plays or 3 days" },
      { label: "Discontinued", value: "2011" },
    ],
    timeline: [
      { year: "2001", event: "Apple launches iPod." },
      { year: "2006", event: "Zune launches." },
      { year: "2011", event: "Zune hardware discontinued." },
    ],
    drivers: [
      "Entered late against an entrenched ecosystem.",
      "Key feature depended on network effects it didn't have.",
      "No clear reason to switch from the iPod.",
    ],
    lesson:
      "Being slightly better than an entrenched leader isn't enough — you need a compelling reason for customers to switch.",
    takeaways: [
      "Ask why a happy competitor's customer would switch to you.",
      "Features that need many users are weak when you have few.",
      "Avoid head-on fights with entrenched ecosystems.",
    ],
    lawSlugs: ["law-of-leadership", "status-quo-bias", "metcalfes-law"],
  },
  {
    slug: "amazon-fire-phone-write-down",
    title: "Amazon Fire Phone: a $170 million lesson",
    company: "Amazon",
    country: "United States",
    region: "North America",
    period: "2014–2015",
    kind: "failure",
    industrySlug: "electronics-retail",
    summary:
      "Amazon's Fire Phone featured 3D effects and a tool to identify products to buy, but cost as much as an iPhone. Sales were so weak that Amazon wrote down about $170 million within months.",
    story: [
      "Amazon launched the Fire Phone in July 2014, exclusively with AT&T at $199 on contract. It had a ‘Dynamic Perspective’ 3D display effect and ‘Firefly’, which recognised products and media and linked them to Amazon's store.",
      "Customers saw a phone designed more to help Amazon sell than to help them, with a limited app store and a premium price. Within weeks Amazon cut the price to 99 cents on contract.",
      "In October 2014 Amazon took a write-down of about $170 million, largely for unsold inventory. The phone was discontinued in 2015. Lessons from the team helped Amazon succeed with Echo and Alexa.",
    ],
    keyNumbers: [
      { label: "Launch price (on contract)", value: "$199" },
      { label: "Price after cut", value: "$0.99 on contract" },
      { label: "Write-down (October 2014)", value: "about $170 million" },
    ],
    timeline: [
      { year: "2014", event: "Launch (July); price cut; write-down (October)." },
      { year: "2015", event: "Fire Phone discontinued." },
    ],
    drivers: [
      "Product built around the company's interests.",
      "Premium pricing without premium value.",
      "Exclusive carrier deal limited reach.",
    ],
    lesson:
      "Products built to serve the seller rather than the customer struggle — even from a company famous for customer obsession.",
    takeaways: [
      "Check whether each feature helps the customer or just you.",
      "Price must match perceived value.",
      "Treat failures as learning that feeds the next product.",
    ],
    lawSlugs: ["sunk-cost-fallacy", "law-of-the-instrument", "veblen-effect"],
  },
  {
    slug: "ford-edsel-failure",
    title: "Ford Edsel: the most researched car that nobody wanted",
    company: "Ford Motor Company",
    country: "United States",
    region: "North America",
    period: "1955–1959",
    kind: "failure",
    industrySlug: "manufacturing",
    summary:
      "Ford spent years and a fortune developing the Edsel, a new mid-priced brand. It launched into a recession with confusing positioning and unusual styling, and was dropped after about two years.",
    story: [
      "In the mid-1950s Ford wanted a brand between Ford and Mercury to compete with GM's mid-range cars. It spent years on research and development and set up a separate division and dealer network. Hype built around ‘E-Day’ in September 1957.",
      "The Edsel's distinctive vertical grille was widely mocked, early cars had quality problems, and its positioning overlapped with Ford's existing brands. It launched just as a recession hit and buyers moved toward smaller, cheaper cars.",
      "Sales were far below forecasts, and Ford discontinued the Edsel in November 1959 after losing an estimated $250 million — a huge sum at the time.",
    ],
    keyNumbers: [
      { label: "Launch", value: "September 1957" },
      { label: "Estimated loss", value: "about $250 million" },
      { label: "Discontinued", value: "November 1959" },
    ],
    timeline: [
      { year: "1955", event: "Development of new mid-price brand." },
      { year: "1957", event: "‘E-Day’ launch; recession begins." },
      { year: "1959", event: "Edsel discontinued." },
    ],
    drivers: [
      "Market shifted while the product was being developed.",
      "Positioning overlapped with existing brands.",
      "Hype raised expectations the car didn't meet.",
    ],
    lesson:
      "Long development cycles risk launching into a market that has changed; clear positioning matters more than heavy research.",
    takeaways: [
      "Re-check market conditions just before launch.",
      "Make sure new products don't compete with your own.",
      "Don't overhype what you haven't proven.",
    ],
    lawSlugs: ["planning-fallacy", "law-of-focus", "peak-end-rule"],
  },
  {
    slug: "new-coke-1985",
    title: "New Coke 1985: winning the taste test, losing the customer",
    company: "The Coca-Cola Company",
    country: "United States",
    region: "North America",
    period: "1985",
    kind: "failure",
    industrySlug: "fmcg-retail",
    summary:
      "Losing share to Pepsi's sweeter taste, Coca-Cola replaced its formula after about 200,000 taste tests. Public outrage forced it to bring back ‘Coca-Cola Classic’ just 79 days later.",
    story: [
      "In the early 1980s Pepsi's ‘Pepsi Challenge’ blind taste tests showed many people preferred Pepsi's sweeter taste, and Coke's share was slipping. Coca-Cola developed a sweeter formula that beat both old Coke and Pepsi in about 200,000 taste tests.",
      "On 23 April 1985 it announced New Coke would replace the original. The backlash was intense: hundreds of thousands of calls and letters, protest groups, and people stockpiling old Coke. Taste tests had measured a single sip, not people's emotional attachment to the brand.",
      "On 11 July 1985 — 79 days later — Coca-Cola brought back the original as ‘Coca-Cola Classic’. Sales of the classic rose, and some believe the episode actually strengthened customers' bond with the brand.",
    ],
    keyNumbers: [
      { label: "Taste tests", value: "about 200,000" },
      { label: "Announcement", value: "23 April 1985" },
      { label: "Days until Classic returned", value: "79" },
    ],
    timeline: [
      { year: "1985", event: "New Coke launched (April); Coca-Cola Classic returns (July)." },
    ],
    drivers: [
      "Research measured taste but not emotional attachment.",
      "Removed the original instead of adding a new option.",
      "Fast reversal limited lasting damage.",
    ],
    lesson:
      "Customers don't just buy a product's features — they buy what it means to them. Research that misses that can mislead.",
    takeaways: [
      "Test changes to iconic products very cautiously.",
      "Add options before removing beloved ones.",
      "Admit mistakes and reverse quickly.",
    ],
    lawSlugs: ["endowment-effect", "loss-aversion", "status-quo-bias"],
  },
  {
    slug: "blackberry-decline",
    title: "BlackBerry: from smartphone leader to exit from phones",
    company: "BlackBerry (Research In Motion)",
    country: "Canada",
    region: "North America",
    period: "2007–2016",
    kind: "failure",
    industrySlug: "electronics-retail",
    summary:
      "BlackBerry dominated business smartphones with keyboards and secure email. It underestimated the iPhone's touchscreen and app ecosystem, lost its market, and stopped making phones in 2016.",
    story: [
      "Research In Motion (RIM), based in Waterloo, Canada, made BlackBerry the essential device for professionals and governments, with physical keyboards, secure email, and long battery life. Its market value peaked at about $83 billion in 2008.",
      "When Apple launched the iPhone in 2007, RIM's leaders believed businesses would never give up keyboards and security. But consumers bought iPhones and Android phones, demanded them at work, and app ecosystems grew rapidly. RIM's touchscreen attempts were weak, and its new BlackBerry 10 platform arrived only in 2013.",
      "BlackBerry wrote down nearly $1 billion of unsold inventory in 2013. It stopped designing its own phones in 2016 and refocused on security software for businesses and cars.",
    ],
    keyNumbers: [
      { label: "Peak market value (2008)", value: "about $83 billion" },
      { label: "BlackBerry 10 launch", value: "2013" },
      { label: "Inventory write-down (2013)", value: "nearly $1 billion" },
      { label: "Stopped making phones", value: "2016" },
    ],
    timeline: [
      { year: "2007", event: "iPhone launches." },
      { year: "2008", event: "RIM's value peaks." },
      { year: "2013", event: "BlackBerry 10 launches; big write-down." },
      { year: "2016", event: "Exits phone hardware." },
    ],
    drivers: [
      "Leaders dismissed a new kind of competitor.",
      "Missed the shift from business buyers to consumer choice.",
      "Underestimated the importance of apps.",
    ],
    lesson:
      "Your best customers' current preferences may not protect you when the market changes who makes the buying decision.",
    takeaways: [
      "Watch who actually decides on purchases — it can shift.",
      "Take new entrants seriously, especially if customers love them.",
      "Ecosystems can matter more than hardware.",
    ],
    lawSlugs: ["confirmation-bias", "status-quo-bias", "amaras-law"],
  },
  {
    slug: "motorola-razr-one-hit",
    title: "Motorola Razr: the hit that wasn't followed up",
    company: "Motorola",
    country: "United States",
    region: "North America",
    period: "2004–2014",
    kind: "failure",
    industrySlug: "electronics-retail",
    summary:
      "The Razr sold more than 130 million units, but Motorola leaned on it for too long, missed smartphones, and was eventually split up and sold.",
    story: [
      "Motorola launched the ultra-thin Razr V3 flip phone in 2004. It became a fashion statement and one of the best-selling phones of its era, with more than 130 million units sold.",
      "Instead of building the next breakthrough, Motorola released many Razr variations and cut prices to keep volumes high, eroding margins. It fell behind as the iPhone and Android created the smartphone era. Motorola's phone business lost billions of dollars.",
      "Motorola split in 2011. Google bought Motorola Mobility for about $12.5 billion in 2012, then sold it to Lenovo in 2014 for about $2.9 billion.",
    ],
    keyNumbers: [
      { label: "Razr units sold", value: "over 130 million" },
      { label: "Google acquisition (2012)", value: "about $12.5 billion" },
      { label: "Sale to Lenovo (2014)", value: "about $2.9 billion" },
    ],
    timeline: [
      { year: "2004", event: "Razr V3 launches." },
      { year: "2007", event: "iPhone launches; Motorola struggles." },
      { year: "2011", event: "Motorola splits." },
      { year: "2012", event: "Google buys Motorola Mobility." },
      { year: "2014", event: "Sold to Lenovo." },
    ],
    drivers: [
      "Milked a single hit with endless variations.",
      "Price cuts traded margin for volume.",
      "Slow move into smartphones.",
    ],
    lesson:
      "A hit buys you time, not safety — use it to fund the next product, not to delay it.",
    takeaways: [
      "Start your next product while the current one is still winning.",
      "Avoid endless variations of a single success.",
      "Protect margins rather than chasing volume.",
    ],
    lawSlugs: ["hedonic-treadmill", "law-of-diminishing-returns", "lindy-effect"],
  },
];
