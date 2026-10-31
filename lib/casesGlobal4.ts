import type { CaseStudy } from "./knowledgeTypes";

// Global case library, batch 4 — crises and how companies handled them. Figures are rounded from public reports.
export const CASES_GLOBAL_4: CaseStudy[] = [
  {
    slug: "tylenol-1982-recall",
    title: "Tylenol 1982: the recall that defined crisis management",
    company: "Johnson & Johnson",
    country: "United States",
    region: "North America",
    period: "1982–1983",
    kind: "turnaround",
    industrySlug: "pharma",
    summary:
      "After seven people died from cyanide-laced Tylenol capsules, Johnson & Johnson recalled about 31 million bottles nationwide and introduced tamper-proof packaging — and Tylenol recovered most of its market share.",
    story: [
      "In autumn 1982, seven people in the Chicago area died after taking Extra-Strength Tylenol capsules that someone had laced with cyanide after they reached store shelves. Tylenol was America's best-selling painkiller, with roughly a third of the market. The case has never been solved.",
      "J&J did not wait to prove the contamination was local. It warned the public, stopped advertising, and recalled about 31 million bottles across the country at a cost of about $100 million. Executives said they were guided by the company's credo, which put customers first. Market share collapsed to around 7%.",
      "Within weeks J&J relaunched Tylenol in triple-sealed, tamper-resistant packaging, supported by coupons and a large sales effort. Tylenol regained most of its share within about a year, and tamper-evident packaging became an industry and regulatory standard.",
    ],
    keyNumbers: [
      { label: "Deaths", value: "7" },
      { label: "Bottles recalled", value: "about 31 million" },
      { label: "Recall cost", value: "about $100 million" },
      { label: "Market share, before → low", value: "roughly 35% → about 7%" },
    ],
    timeline: [
      { year: "1982", event: "Poisonings in Chicago; nationwide recall (October)." },
      { year: "1982", event: "Relaunch in tamper-resistant packaging (November)." },
      { year: "1983", event: "Most market share regained." },
    ],
    drivers: [
      "Put public safety ahead of short-term cost.",
      "Acted fast and communicated openly.",
      "Fixed the vulnerability with a visible product change.",
    ],
    lesson:
      "In a crisis, acting quickly and visibly in customers' interest — even at great cost — protects the trust that brands depend on.",
    takeaways: [
      "Write down what your company will prioritise in a crisis, before one happens.",
      "Communicate early, even before you know everything.",
      "Show the fix, don't just announce it.",
    ],
    lawSlugs: ["loss-aversion", "authority-principle", "murphys-law"],
  },
  {
    slug: "chipotle-food-safety-crisis",
    title: "Chipotle: food-safety outbreaks and a long recovery",
    company: "Chipotle Mexican Grill",
    country: "United States",
    region: "North America",
    period: "2015–2020",
    kind: "turnaround",
    industrySlug: "restaurants-qsr",
    summary:
      "A series of E. coli, norovirus, and salmonella outbreaks in 2015 sank Chipotle's sales and shares. Overhauled safety and, later, new leadership and digital ordering brought it back.",
    story: [
      "Chipotle built its brand on ‘food with integrity’ — fresh, locally sourced ingredients. In 2015 multiple outbreaks of E. coli, norovirus, and salmonella were linked to its restaurants across several states, sickening hundreds of people. The brand promise itself became a liability.",
      "Comparable sales fell by about 30% in early 2016 and the share price roughly halved from its peak. Chipotle closed all its restaurants for a few hours on 8 February 2016 for a company-wide food-safety meeting, introduced new procedures such as preparing some ingredients centrally, and offered free burrito promotions to win customers back. Further incidents in 2017 slowed recovery.",
      "Brian Niccol, from Taco Bell, became CEO in 2018 and invested in digital ordering, drive-through ‘Chipotlanes’, and marketing. Sales recovered strongly, and the share price later rose far above its previous peak.",
    ],
    keyNumbers: [
      { label: "Comparable sales fall (Q1 2016)", value: "about 30%" },
      { label: "Company-wide closure", value: "8 February 2016" },
      { label: "Niccol becomes CEO", value: "2018" },
    ],
    timeline: [
      { year: "2015", event: "Multiple outbreaks linked to restaurants." },
      { year: "2016", event: "All stores close for safety meeting; new procedures." },
      { year: "2018", event: "Brian Niccol appointed CEO." },
      { year: "2020", event: "Digital orders surge during pandemic." },
    ],
    drivers: [
      "Fresh, decentralised preparation increased safety risk.",
      "Slow, defensive early communication.",
      "Recovery needed both safety fixes and new growth engines.",
    ],
    lesson:
      "When a crisis hits your core promise, fixing operations is necessary but not enough — you also need a fresh reason for customers to come back.",
    takeaways: [
      "Stress-test the risks hidden inside your brand promise.",
      "Discounts alone rarely restore trust.",
      "Pair operational fixes with new convenience for customers.",
    ],
    lawSlugs: ["availability-heuristic", "loss-aversion", "law-of-unintended-consequences"],
  },
  {
    slug: "samsung-galaxy-note-7-recall",
    title: "Samsung Galaxy Note 7: recalling a flagship twice",
    company: "Samsung Electronics",
    country: "South Korea",
    region: "Asia-Pacific",
    period: "2016–2017",
    kind: "turnaround",
    industrySlug: "electronics-retail",
    summary:
      "Samsung's Note 7 batteries caught fire, and so did the replacements. Samsung killed the phone at a cost of about $5 billion, published the root causes, and introduced an eight-point battery check.",
    story: [
      "Samsung launched the Galaxy Note 7 in August 2016 to strong reviews, aiming to beat Apple's next iPhone. Within weeks, reports emerged of phones overheating and catching fire. Samsung announced a recall of about 2.5 million phones in early September.",
      "Some replacement phones then caught fire too, including one on a plane. Airlines banned the device, and in October Samsung permanently discontinued the Note 7. The total cost was estimated at about $5 billion in lost profit, plus brand damage.",
      "In January 2017 Samsung published the findings of its investigation: two different battery design and manufacturing defects. It introduced an eight-point battery safety check and a new oversight group. The Galaxy S8, launched in spring 2017, sold strongly and the brand recovered.",
    ],
    keyNumbers: [
      { label: "Phones in first recall", value: "about 2.5 million" },
      { label: "Discontinued", value: "October 2016" },
      { label: "Estimated cost", value: "about $5 billion" },
      { label: "New battery checks", value: "8-point safety process" },
    ],
    timeline: [
      { year: "2016", event: "Launch (August); recall (September); discontinued (October)." },
      { year: "2017", event: "Root causes published (January); Galaxy S8 launches." },
    ],
    drivers: [
      "Rushed timeline to beat a competitor's launch.",
      "First fix was made before the cause was fully understood.",
      "Transparent root-cause report helped rebuild trust.",
    ],
    lesson:
      "Rushing to fix a problem before understanding its cause can double the damage; transparency about the real cause helps recovery.",
    takeaways: [
      "Don't let a competitor's deadline override quality checks.",
      "Find the root cause before rolling out a fix.",
      "Publish what went wrong and what you changed.",
    ],
    lawSlugs: ["murphys-law", "planning-fallacy", "optimism-bias"],
  },
  {
    slug: "volkswagen-dieselgate",
    title: "Volkswagen Dieselgate: cheating emissions tests",
    company: "Volkswagen Group",
    country: "Germany",
    region: "Europe",
    period: "2015–2020",
    kind: "failure",
    industrySlug: "manufacturing",
    summary:
      "Volkswagen installed software that detected emissions tests and cut pollution only during testing, in about 11 million cars. The scandal cost it over €30 billion and forced a pivot to electric cars.",
    story: [
      "Volkswagen aimed to become the world's largest carmaker and heavily promoted ‘clean diesel’ cars in the US. Its engines struggled to meet strict US nitrogen-oxide limits at acceptable cost, so engineers installed ‘defeat device’ software that recognised test conditions and switched on full emissions controls only then.",
      "Researchers from West Virginia University, working with the International Council on Clean Transportation, measured real-world emissions far above legal limits. In September 2015 the US Environmental Protection Agency announced violations. VW admitted about 11 million vehicles worldwide had the software, and CEO Martin Winterkorn resigned.",
      "Fines, buy-backs, and settlements cost VW more than €30 billion, and several executives faced criminal charges. VW responded by committing heavily to electric vehicles with its ID range.",
    ],
    keyNumbers: [
      { label: "Affected vehicles", value: "about 11 million worldwide" },
      { label: "EPA announcement", value: "September 2015" },
      { label: "Total cost", value: "over €30 billion" },
    ],
    timeline: [
      { year: "2014", event: "Independent tests reveal high real-world emissions." },
      { year: "2015", event: "EPA notice; VW admits; CEO resigns." },
      { year: "2016", event: "Major US settlements." },
      { year: "2020", event: "ID.3 electric car launches in Europe." },
    ],
    drivers: [
      "Aggressive growth targets with no room for failure.",
      "A culture where engineers felt unable to say no.",
      "Marketing promises the engineering couldn't deliver.",
    ],
    lesson:
      "When leaders demand results without listening to what's possible, people may cheat — and the eventual cost dwarfs the original problem.",
    takeaways: [
      "Make it safe to report that a target can't be met honestly.",
      "Never promise customers what you can't legally deliver.",
      "Audit high-pressure targets for incentives to cheat.",
    ],
    lawSlugs: ["goodharts-law", "cobra-effect", "yerkes-dodson-law"],
  },
  {
    slug: "boeing-737-max-crisis",
    title: "Boeing 737 MAX: two crashes and a culture under scrutiny",
    company: "Boeing",
    country: "United States",
    region: "North America",
    period: "2011–2024",
    kind: "failure",
    industrySlug: "manufacturing",
    summary:
      "Rushing to compete with Airbus, Boeing updated an old jet design rather than starting fresh. Software linked to two crashes killed 346 people, grounded the fleet for about 20 months, and cost Boeing over $20 billion.",
    story: [
      "In 2010–2011 Airbus launched the fuel-efficient A320neo and won large orders. Boeing chose to update its 1960s-era 737 with bigger engines instead of designing a new plane, partly so pilots could fly it without expensive simulator retraining. The engines changed the plane's handling, so Boeing added software called MCAS to push the nose down in certain conditions.",
      "MCAS relied on a single sensor, and many pilots were not told about it. In October 2018 Lion Air Flight 610 crashed off Indonesia, and in March 2019 Ethiopian Airlines Flight 302 crashed near Addis Ababa — 346 people died in total. Regulators grounded the MAX worldwide in March 2019.",
      "The MAX returned to US service in late 2020 after about 20 months. Boeing's CEO was replaced, it paid about $2.5 billion in a 2021 settlement with the US Justice Department, and direct costs exceeded $20 billion. A door-panel blowout on a new 737 MAX 9 in January 2024 renewed concerns about its quality culture.",
    ],
    keyNumbers: [
      { label: "Deaths in two crashes", value: "346" },
      { label: "Grounding length", value: "about 20 months" },
      { label: "DOJ settlement (2021)", value: "about $2.5 billion" },
      { label: "Direct costs", value: "over $20 billion" },
    ],
    timeline: [
      { year: "2011", event: "Boeing launches the 737 MAX." },
      { year: "2018", event: "Lion Air crash." },
      { year: "2019", event: "Ethiopian Airlines crash; global grounding; CEO replaced." },
      { year: "2020", event: "MAX returns to service in the US." },
      { year: "2024", event: "Alaska Airlines door-panel incident." },
    ],
    drivers: [
      "Speed and cost pressure shaped critical design choices.",
      "Single point of failure in safety-critical software.",
      "Information withheld from pilots and regulators.",
      "Engineering culture overshadowed by financial targets.",
    ],
    lesson:
      "Cutting corners to match a competitor's timeline can create risks far larger than the competitive threat.",
    takeaways: [
      "Never let cost or speed decide safety-critical choices.",
      "Remove single points of failure in critical processes.",
      "Engineering and quality voices must be heard at the top.",
    ],
    lawSlugs: ["murphys-law", "goodharts-law", "pournelles-iron-law"],
  },
  {
    slug: "toyota-2009-recall",
    title: "Toyota 2009–2010: growth that outpaced quality",
    company: "Toyota",
    country: "Japan",
    region: "Asia-Pacific",
    period: "2009–2014",
    kind: "turnaround",
    industrySlug: "manufacturing",
    summary:
      "Famous for quality, Toyota recalled about nine million vehicles over unintended acceleration. Its president admitted the company had grown too fast, and Toyota rebuilt its quality processes.",
    story: [
      "Toyota spent the 2000s growing rapidly to overtake General Motors as the world's largest carmaker. In 2009 reports of sudden unintended acceleration — including a fatal crash in California — focused attention on floor mats that could trap accelerators and pedals that could stick.",
      "Toyota recalled about nine million vehicles worldwide across 2009–2010 and temporarily halted sales of several models. Its initial responses were seen as slow and defensive. In February 2010 president Akio Toyoda testified before the US Congress, apologised, and said the company had grown too quickly.",
      "Toyota paid about $1.2 billion in a 2014 settlement with US prosecutors over how it handled the information. A NASA study found no electronic defect. Toyota created regional quality officers and gave local markets more authority over safety decisions, and its reputation recovered.",
    ],
    keyNumbers: [
      { label: "Vehicles recalled", value: "about 9 million" },
      { label: "Toyoda testifies to Congress", value: "February 2010" },
      { label: "US criminal settlement (2014)", value: "about $1.2 billion" },
    ],
    timeline: [
      { year: "2008", event: "Toyota becomes world's largest carmaker." },
      { year: "2009", event: "Floor-mat recall begins." },
      { year: "2010", event: "Sticky-pedal recall; congressional hearings." },
      { year: "2014", event: "Settlement with US Justice Department." },
    ],
    drivers: [
      "Rapid growth stretched quality systems and engineering talent.",
      "Centralised decision-making slowed responses abroad.",
      "Public apology from the top helped reset trust.",
    ],
    lesson:
      "Even the best quality culture can weaken under rapid growth — and slow, defensive communication magnifies the damage.",
    takeaways: [
      "Check whether your quality systems are keeping up with growth.",
      "Give local teams authority to act on safety issues.",
      "Leaders should front the apology.",
    ],
    lawSlugs: ["dunbars-number", "conways-law", "murphys-law"],
  },
  {
    slug: "maggi-india-ban-2015",
    title: "Maggi 2015: banned in India, back on shelves in five months",
    company: "Nestlé India",
    country: "India",
    region: "India",
    period: "2015–2016",
    kind: "turnaround",
    industrySlug: "fmcg-retail",
    summary:
      "Food regulators banned Maggi noodles over alleged lead levels and labelling. Nestlé destroyed about 38,000 tonnes of stock, won in court, relaunched, and regained most of its share within about a year.",
    story: [
      "Maggi held about 80% of India's instant noodle market. In 2015 a state food-safety test reported lead above permitted limits and questioned an ‘No added MSG’ label. In June 2015 the Food Safety and Standards Authority of India (FSSAI) ordered a nationwide recall and ban.",
      "Nestlé India initially defended its tests in technical terms while social media and news coverage exploded. It withdrew and destroyed about 38,000 tonnes of noodles, a loss of several hundred crore rupees, and its market share fell to almost nothing. In August 2015 the Bombay High Court set aside the ban, ordering fresh tests at accredited labs, which the product passed.",
      "Maggi relaunched in November 2015 with an emotional ‘We miss you too’ campaign, an e-commerce flash sale, and support from retailers. It regained more than half of the market within months and around 60% within about a year.",
    ],
    keyNumbers: [
      { label: "Market share before the ban", value: "about 80%" },
      { label: "Stock destroyed", value: "about 38,000 tonnes" },
      { label: "Ban to relaunch", value: "about 5 months (June → November 2015)" },
      { label: "Share regained within about a year", value: "around 60%" },
    ],
    timeline: [
      { year: "2015", event: "FSSAI ban (June); High Court sets aside ban (August); relaunch (November)." },
      { year: "2016", event: "Market leadership regained." },
    ],
    drivers: [
      "Deep emotional attachment to the brand.",
      "Early communication was too technical and defensive.",
      "Strong distribution relationships enabled a fast comeback.",
    ],
    lesson:
      "In a public scare, emotional and transparent communication matters as much as lab results — but deep brand love can survive a ban.",
    takeaways: [
      "Prepare simple, human crisis messages, not just technical ones.",
      "Retailer relationships are an asset in recovery.",
      "Emotional brand equity buys time — don't waste it.",
    ],
    lawSlugs: ["availability-heuristic", "endowment-effect", "loss-aversion"],
  },
  {
    slug: "cadbury-india-2003-worm-crisis",
    title: "Cadbury India 2003: worms in Dairy Milk during Diwali",
    company: "Cadbury India",
    country: "India",
    region: "India",
    period: "2003–2004",
    kind: "turnaround",
    industrySlug: "fmcg-retail",
    summary:
      "Just before Diwali, worms were found in Dairy Milk bars in Maharashtra. Cadbury invested in new sealed packaging, ran an education campaign, and brought in Amitabh Bachchan to restore trust.",
    story: [
      "In October 2003, in the run-up to Diwali — the biggest chocolate season — customers in Maharashtra reported finding worms in Dairy Milk bars. Regulators seized stock, the media covered it heavily, and sales reportedly fell by around a third.",
      "Cadbury argued the infestation came from poor storage at retailers rather than its factories, but recognised that blaming others would not restore trust. Under ‘Project Vishwas’ (trust), it invested in new metallised, tightly sealed packaging, educated retailers on storage, and made visits to shops.",
      "It then hired Amitabh Bachchan, one of India's most trusted celebrities, for adverts showing him visiting a factory and reassuring families. Sales recovered within months and Dairy Milk retained its leadership.",
    ],
    keyNumbers: [
      { label: "Timing", value: "October 2003, just before Diwali" },
      { label: "Reported sales fall", value: "around a third" },
      { label: "Packaging fix", value: "new sealed metallised wrapper" },
    ],
    timeline: [
      { year: "2003", event: "Worm complaints; stock seized in Maharashtra." },
      { year: "2004", event: "New packaging and Amitabh Bachchan campaign; recovery." },
    ],
    drivers: [
      "Fixed the vulnerability, even though the cause was in the supply chain.",
      "Educated the whole distribution chain.",
      "Borrowed trust from a credible public figure.",
    ],
    lesson:
      "Customers don't care whose fault it is — the brand must take ownership of the fix across the whole chain.",
    takeaways: [
      "Own problems in your distribution chain as your own.",
      "Make the fix visible in the product itself.",
      "Use trusted voices to rebuild confidence.",
    ],
    lawSlugs: ["authority-principle", "hanlons-razor", "halo-effect"],
  },
  {
    slug: "kfc-uk-chicken-shortage-fck",
    title: "KFC UK 2018: a chicken shop with no chicken",
    company: "KFC UK & Ireland",
    country: "United Kingdom",
    region: "Europe",
    period: "2018",
    kind: "turnaround",
    industrySlug: "restaurants-qsr",
    summary:
      "A switch to a new delivery partner left hundreds of KFC restaurants without chicken. KFC responded with a self-mocking ‘FCK’ apology ad that turned ridicule into goodwill.",
    story: [
      "In February 2018 KFC UK moved its logistics contract to a new partner, DHL, which ran deliveries from a single new depot. Problems at launch meant chicken didn't reach stores, and hundreds of KFC's roughly 900 UK restaurants had to close for days.",
      "The story spread widely on social media and news. Customers even called the police, prompting a police appeal not to report it. Rather than blame its partner in a dry statement, KFC published a full-page newspaper ad showing an empty bucket with the letters rearranged to read ‘FCK’, with a short, frank apology.",
      "The ad was widely praised and won creative awards. KFC brought back its previous supplier into part of the network to restore supplies, and the brand's reputation recovered quickly.",
    ],
    keyNumbers: [
      { label: "UK restaurants", value: "about 900" },
      { label: "Restaurants closed", value: "hundreds, for several days" },
      { label: "Apology format", value: "full-page ‘FCK’ newspaper ad" },
    ],
    timeline: [
      { year: "2018", event: "Logistics switch (February); closures; ‘FCK’ ad; supply restored." },
    ],
    drivers: [
      "Single-depot logistics created one point of failure.",
      "Humble, human, humorous apology matched the brand's voice.",
      "Quick operational fix with an extra supplier.",
    ],
    lesson:
      "A self-aware, honest apology in your brand's own voice can turn a public embarrassment into goodwill.",
    takeaways: [
      "Test new suppliers and systems before switching fully.",
      "Avoid single points of failure in supply.",
      "Apologise like a human, not a legal department.",
    ],
    lawSlugs: ["pratfall-effect", "murphys-law", "galls-law"],
  },
  {
    slug: "bp-deepwater-horizon",
    title: "BP Deepwater Horizon: the costliest oil spill",
    company: "BP",
    country: "United Kingdom",
    region: "Europe",
    period: "2010–2016",
    kind: "failure",
    industrySlug: "manufacturing",
    summary:
      "An explosion on the Deepwater Horizon rig killed 11 workers and spilled millions of barrels into the Gulf of Mexico over 87 days. Poor communication and safety culture cost BP over $60 billion.",
    story: [
      "On 20 April 2010, a blowout and explosion on the Deepwater Horizon rig, drilling BP's Macondo well in the Gulf of Mexico, killed 11 workers. The well leaked for 87 days before it was capped — the largest marine oil spill in US history, with millions of barrels released.",
      "Investigations pointed to a series of risky decisions, cost and time pressure, and failures by BP and its contractors. BP's communication made things worse: CEO Tony Hayward downplayed the spill early and was widely criticised for saying ‘I'd like my life back.’ He was replaced in October 2010.",
      "BP set up a $20 billion compensation fund, sold assets to raise money, and paid criminal and civil penalties. Total costs exceeded $60 billion.",
    ],
    keyNumbers: [
      { label: "Workers killed", value: "11" },
      { label: "Days until capped", value: "87" },
      { label: "Initial compensation fund", value: "$20 billion" },
      { label: "Total costs", value: "over $60 billion" },
    ],
    timeline: [
      { year: "2010", event: "Explosion (April); well capped (July); CEO replaced (October)." },
      { year: "2012", event: "Criminal settlement with US government." },
      { year: "2015", event: "Settlement with federal and state governments." },
    ],
    drivers: [
      "Cost and schedule pressure on safety-critical decisions.",
      "Multiple contractors with unclear responsibility.",
      "Leadership communication that seemed to put the company first.",
    ],
    lesson:
      "Small safety shortcuts in high-risk operations can create catastrophic, company-threatening losses — and tone-deaf leadership multiplies the damage.",
    takeaways: [
      "Identify your highest-risk operations and over-invest in their safety.",
      "Clarify responsibility when several partners work together.",
      "In a crisis, leaders must show they put victims first.",
    ],
    lawSlugs: ["murphys-law", "ringelmann-effect", "optimism-bias"],
  },
  {
    slug: "united-airlines-flight-3411",
    title: "United Airlines Flight 3411: a passenger dragged off a plane",
    company: "United Airlines",
    country: "United States",
    region: "North America",
    period: "2017",
    kind: "turnaround",
    industrySlug: "logistics-transport",
    summary:
      "Video of a passenger being dragged off an overbooked United flight went viral. The CEO's first statement made it worse; the airline later changed its policies, offering up to $10,000 to volunteers.",
    story: [
      "On 9 April 2017 United needed four seats on a full flight from Chicago to Louisville for crew members. When no passengers volunteered, four were selected. One, Dr David Dao, refused and was forcibly removed by airport security officers, suffering injuries. Passengers' videos spread worldwide within hours.",
      "CEO Oscar Munoz's first statement apologised for having to ‘re-accommodate’ customers — a phrase widely mocked — and an internal email praising staff leaked. United's market value briefly fell by hundreds of millions of dollars, and calls for boycotts trended.",
      "Munoz then apologised fully. United settled with Dr Dao, said it would no longer remove seated passengers unless for safety, reduced overbooking, and raised compensation for volunteers to up to $10,000.",
    ],
    keyNumbers: [
      { label: "Date", value: "9 April 2017" },
      { label: "New maximum volunteer compensation", value: "up to $10,000" },
    ],
    timeline: [
      { year: "2017", event: "Incident (April 9); first statement; full apology; policy changes (April 27)." },
    ],
    drivers: [
      "Rigid policy applied without judgement.",
      "Corporate jargon in the first response.",
      "Policy changes addressed the root cause.",
    ],
    lesson:
      "The first response sets the story — corporate language in a human crisis turns a bad incident into a brand disaster.",
    takeaways: [
      "Give frontline staff room to use judgement.",
      "Draft crisis statements in plain human language.",
      "Fix the policy that caused the problem, not just the PR.",
    ],
    lawSlugs: ["streisand-effect", "framing-effect", "law-of-unintended-consequences"],
  },
  {
    slug: "pepsi-kendall-jenner-ad",
    title: "Pepsi's Kendall Jenner ad: pulled within a day",
    company: "PepsiCo",
    country: "United States",
    region: "North America",
    period: "2017",
    kind: "failure",
    industrySlug: "fmcg-retail",
    summary:
      "Pepsi's ad showing a celebrity ending a protest standoff by handing a police officer a can of Pepsi was accused of trivialising social justice movements and withdrawn within about 24 hours.",
    story: [
      "In April 2017 Pepsi released a nearly three-minute ad in which model Kendall Jenner left a photo shoot to join a street protest and handed a police officer a Pepsi, prompting cheers. It was made by Pepsi's in-house content studio.",
      "Critics said the ad trivialised protests over police violence, echoing images from real protests such as Black Lives Matter. It was mocked widely online, including by Martin Luther King Jr.'s daughter Bernice King.",
      "Pepsi pulled the ad within about a day and apologised, including to Jenner. It became a textbook example of brands trying to borrow social causes without understanding them.",
    ],
    keyNumbers: [
      { label: "Ad length", value: "about 2.5 minutes" },
      { label: "Time before withdrawal", value: "about 24 hours" },
    ],
    timeline: [{ year: "2017", event: "Ad released and withdrawn (April)." }],
    drivers: [
      "Lack of diverse perspectives in creative review.",
      "Borrowed a serious cause to sell a product.",
      "Fast withdrawal limited longer-term damage.",
    ],
    lesson:
      "Brands that attach themselves to serious causes without real understanding or action risk backlash that overwhelms the message.",
    takeaways: [
      "Test sensitive campaigns with people from affected communities.",
      "Only speak on causes you genuinely act on.",
      "Withdraw quickly when you get it wrong.",
    ],
    lawSlugs: ["curse-of-knowledge", "confirmation-bias", "unity-principle"],
  },
  {
    slug: "luckin-coffee-fraud-and-comeback",
    title: "Luckin Coffee: from accounting fraud to overtaking Starbucks in China",
    company: "Luckin Coffee",
    country: "China",
    region: "Asia-Pacific",
    period: "2017–2023",
    kind: "turnaround",
    industrySlug: "restaurants-qsr",
    summary:
      "Luckin admitted fabricating about $310 million of sales and was delisted from Nasdaq. Under new management it restructured, focused on profitable app-based stores, and overtook Starbucks in China.",
    story: [
      "Luckin Coffee was founded in 2017 to take on Starbucks in China, using app-only ordering, small pickup stores, and heavy discounts. It opened thousands of stores in two years and listed on Nasdaq in 2019.",
      "In April 2020 Luckin disclosed that its chief operating officer and others had fabricated about RMB 2.2 billion (about $310 million) of 2019 sales. Its shares collapsed, it was delisted, executives were removed, and it paid a $180 million penalty to the US Securities and Exchange Commission.",
      "New management kept the app-driven model but cut losses, used data to locate stores, and launched hit drinks such as coconut lattes. In 2023 Luckin passed 10,000 stores and reported higher quarterly revenue in China than Starbucks.",
    ],
    keyNumbers: [
      { label: "Fabricated sales", value: "about $310 million (RMB 2.2 billion)" },
      { label: "SEC penalty", value: "$180 million" },
      { label: "Stores (mid-2023)", value: "over 10,000" },
    ],
    timeline: [
      { year: "2017", event: "Luckin founded." },
      { year: "2019", event: "Nasdaq IPO." },
      { year: "2020", event: "Fraud disclosed; delisted." },
      { year: "2023", event: "Passes 10,000 stores; overtakes Starbucks China on revenue." },
    ],
    drivers: [
      "Growth-at-all-costs culture enabled fraud.",
      "Underlying model — app ordering and small stores — was sound.",
      "New leadership focused on unit economics.",
    ],
    lesson:
      "Fraud can destroy a company's credibility overnight, but a fundamentally strong customer model can survive under honest leadership.",
    takeaways: [
      "Separate what's broken (people, controls) from what works (model).",
      "Independent financial controls protect founders too.",
      "Data-led store location boosts unit economics.",
    ],
    lawSlugs: ["goodharts-law", "cobra-effect", "law-of-supply-and-demand"],
  },
  {
    slug: "facebook-cambridge-analytica",
    title: "Facebook and Cambridge Analytica: a data scandal and a $5 billion fine",
    company: "Facebook (Meta)",
    country: "United States",
    region: "North America",
    period: "2014–2019",
    kind: "failure",
    industrySlug: "media-entertainment",
    summary:
      "Data from up to 87 million Facebook users was harvested through a quiz app and used by a political consulting firm. The scandal led to congressional hearings and a record $5 billion FTC fine.",
    story: [
      "In 2014 a researcher built a personality quiz app on Facebook. About 270,000 people took the quiz, but Facebook's rules at the time let the app collect data on their friends too, ultimately covering up to 87 million people. The data was passed to Cambridge Analytica, a political consulting firm.",
      "In March 2018 reports by The Guardian and The New York Times revealed the story. #DeleteFacebook trended, and Mark Zuckerberg testified before the US Congress in April 2018. Facebook tightened developer data access.",
      "In July 2019 the US Federal Trade Commission fined Facebook $5 billion, at that time the largest privacy penalty ever, and required new oversight. The scandal permanently changed how regulators and users viewed social media data.",
    ],
    keyNumbers: [
      { label: "Users whose data was affected", value: "up to 87 million" },
      { label: "Quiz takers", value: "about 270,000" },
      { label: "FTC fine (2019)", value: "$5 billion" },
    ],
    timeline: [
      { year: "2014", event: "Quiz app collects friends' data." },
      { year: "2015", event: "Facebook restricts friend data access." },
      { year: "2018", event: "Scandal reported; Zuckerberg testifies." },
      { year: "2019", event: "$5 billion FTC settlement." },
    ],
    drivers: [
      "Platform rules prioritised developer growth over user privacy.",
      "Weak enforcement after data left the platform.",
      "Slow, minimising early response.",
    ],
    lesson:
      "Customer data is a trust liability as much as an asset — loose rules can create scandals years later.",
    takeaways: [
      "Collect only the customer data you really need.",
      "Know where customer data goes when shared with partners.",
      "Treat privacy as part of the product, not just compliance.",
    ],
    lawSlugs: ["law-of-unintended-consequences", "tragedy-of-the-commons", "streisand-effect"],
  },
  {
    slug: "equifax-2017-data-breach",
    title: "Equifax 2017: an unpatched flaw exposes 147 million people",
    company: "Equifax",
    country: "United States",
    region: "North America",
    period: "2017–2019",
    kind: "failure",
    industrySlug: "financial-services",
    summary:
      "Hackers exploited a known software vulnerability that Equifax hadn't patched for months, stealing sensitive data on about 147 million people. The response was slow and confused.",
    story: [
      "Equifax, one of the three big US credit bureaus, holds detailed financial data about most American adults. In March 2017 a fix was released for a flaw in Apache Struts, a widely used web framework. Equifax did not apply it to a key system.",
      "Attackers got in from May to July 2017 and stole names, Social Security numbers, birth dates, and addresses of about 147 million people. Equifax announced the breach in September — weeks after discovering it — and its response website was confusing and initially seen as a phishing risk. Some executives had sold shares before disclosure; one was later convicted of insider trading.",
      "The CEO retired, and in 2019 Equifax agreed to a settlement of up to about $700 million with US regulators and states.",
    ],
    keyNumbers: [
      { label: "People affected", value: "about 147 million" },
      { label: "Months between patch release and breach", value: "about 2" },
      { label: "Settlement (2019)", value: "up to about $700 million" },
    ],
    timeline: [
      { year: "2017", event: "Patch released (March); breach (May–July); disclosure (September); CEO retires." },
      { year: "2019", event: "Regulatory settlement." },
    ],
    drivers: [
      "Basic security hygiene (patching) failed.",
      "Slow disclosure damaged trust.",
      "Poorly designed customer response.",
    ],
    lesson:
      "Catastrophic failures often come from basic tasks left undone — and slow disclosure turns a breach into a trust crisis.",
    takeaways: [
      "Have a clear owner and deadline for security updates.",
      "Prepare a breach response plan in advance.",
      "Disclose quickly and help affected customers simply.",
    ],
    lawSlugs: ["murphys-law", "ringelmann-effect", "parkinsons-law-of-triviality"],
  },
  {
    slug: "mattel-2007-toy-recall",
    title: "Mattel 2007: lead paint and magnets in millions of toys",
    company: "Mattel",
    country: "United States",
    region: "North America",
    period: "2007",
    kind: "turnaround",
    industrySlug: "manufacturing",
    summary:
      "Mattel recalled about 21 million China-made toys over lead paint and loose magnets, tightened supplier testing, and became a cautionary tale about outsourced quality.",
    story: [
      "In summer 2007 Mattel discovered lead paint on some toys made by Chinese subcontractors, including Fisher-Price characters. A sub-supplier had used cheaper, non-approved paint. Separately, small magnets in some toys could come loose and be swallowed.",
      "Mattel recalled about 21 million toys worldwide in August 2007. It required that paint be tested from every batch and increased inspections of suppliers. Later, Mattel acknowledged that most of the recalled toys involved its own magnet design flaw rather than Chinese manufacturing.",
      "The crisis led to stronger US toy safety laws in 2008 and pushed companies to audit deeper tiers of their supply chains.",
    ],
    keyNumbers: [
      { label: "Toys recalled", value: "about 21 million worldwide" },
      { label: "Year", value: "2007" },
      { label: "New US safety law", value: "2008" },
    ],
    timeline: [
      { year: "2007", event: "Lead-paint and magnet recalls (August)." },
      { year: "2008", event: "US Consumer Product Safety Improvement Act." },
    ],
    drivers: [
      "Sub-suppliers cut costs without approval.",
      "Insufficient testing of incoming materials.",
      "Design flaws also played a major part.",
    ],
    lesson:
      "Outsourcing production doesn't outsource responsibility — you must check suppliers' suppliers.",
    takeaways: [
      "Audit sub-suppliers, not just direct ones.",
      "Test critical inputs regularly.",
      "Be honest about which problems are your own design.",
    ],
    lawSlugs: ["murphys-law", "cobra-effect", "hanlons-razor"],
  },
  {
    slug: "exxon-valdez-oil-spill",
    title: "Exxon Valdez 1989: a slow response to a massive spill",
    company: "Exxon",
    country: "United States",
    region: "North America",
    period: "1989–2008",
    kind: "failure",
    industrySlug: "logistics-transport",
    summary:
      "The tanker Exxon Valdez ran aground in Alaska, spilling about 11 million gallons of crude oil. Exxon's slow, distant response became a classic example of how not to handle a crisis.",
    story: [
      "On 24 March 1989 the Exxon Valdez struck a reef in Prince William Sound, Alaska, spilling about 11 million gallons of crude oil. Oil spread along more than 1,000 miles of coastline, killing huge numbers of seabirds, otters, and fish.",
      "Clean-up equipment was slow to arrive. Exxon's chairman did not visit the site for weeks, and early statements seemed to downplay responsibility. The captain had been drinking, and fatigue and inadequate staffing on the bridge were cited.",
      "Exxon spent billions on clean-up and settlements. A jury awarded $5 billion in punitive damages, later reduced by the US Supreme Court to about $507 million. The disaster led to the Oil Pollution Act of 1990, requiring double-hulled tankers.",
    ],
    keyNumbers: [
      { label: "Oil spilled", value: "about 11 million gallons" },
      { label: "Coastline affected", value: "over 1,000 miles" },
      { label: "Punitive damages", value: "$5 billion, reduced to about $507 million" },
    ],
    timeline: [
      { year: "1989", event: "Grounding and spill (March)." },
      { year: "1990", event: "Oil Pollution Act passed." },
      { year: "2008", event: "Supreme Court reduces punitive damages." },
    ],
    drivers: [
      "Human error and fatigue in a high-risk operation.",
      "Slow emergency response capability.",
      "Leadership absent from the scene.",
    ],
    lesson:
      "Visible leadership and fast response matter as much as the clean-up itself — absence reads as indifference.",
    takeaways: [
      "Leaders should show up where the crisis is.",
      "Pre-position emergency resources for your biggest risks.",
      "Manage fatigue in safety-critical roles.",
    ],
    lawSlugs: ["murphys-law", "illichs-law", "streisand-effect"],
  },
  {
    slug: "perrier-benzene-recall-1990",
    title: "Perrier 1990: a worldwide recall and a confusing story",
    company: "Source Perrier",
    country: "France",
    region: "Europe",
    period: "1990–1992",
    kind: "failure",
    industrySlug: "fmcg-retail",
    summary:
      "Traces of benzene found in Perrier water led to a recall of about 160 million bottles. Shifting explanations undermined Perrier's ‘naturally pure’ image, and Nestlé bought the company in 1992.",
    story: [
      "Perrier's brand was built on purity: naturally sparkling water from a spring in southern France. In early 1990 a US laboratory found small traces of benzene in Perrier bottles.",
      "Perrier first blamed an isolated cleaning error at one plant, then announced a worldwide recall of about 160 million bottles. It later emerged that the carbon dioxide gas was not purely ‘natural’ in the way consumers assumed and that filters had not been changed. The shifting explanations damaged trust more than the trace contamination.",
      "Perrier lost significant market share, especially in the US, and never fully regained its earlier dominance. Nestlé acquired Source Perrier in 1992.",
    ],
    keyNumbers: [
      { label: "Bottles recalled", value: "about 160 million" },
      { label: "Year", value: "1990" },
      { label: "Acquired by Nestlé", value: "1992" },
    ],
    timeline: [
      { year: "1990", event: "Benzene found (February); worldwide recall." },
      { year: "1992", event: "Nestlé acquires Source Perrier." },
    ],
    drivers: [
      "Brand promise (‘naturally pure’) made any contamination worse.",
      "Inconsistent, changing explanations.",
      "Competitors took the shelf space during the recall.",
    ],
    lesson:
      "When the crisis contradicts your core promise, inconsistent explanations do more harm than the incident itself.",
    takeaways: [
      "Get the facts straight before your first statement.",
      "Make sure your brand claims are literally true.",
      "Protect your shelf space during a recall.",
    ],
    lawSlugs: ["framing-effect", "halo-effect", "confirmation-bias"],
  },
  {
    slug: "southwest-2022-holiday-meltdown",
    title: "Southwest Airlines 2022: the holiday meltdown",
    company: "Southwest Airlines",
    country: "United States",
    region: "North America",
    period: "2022–2023",
    kind: "failure",
    industrySlug: "logistics-transport",
    summary:
      "A winter storm exposed Southwest's outdated crew-scheduling technology. The airline cancelled about 16,700 flights in late December 2022, costing over $1 billion and a record government penalty.",
    story: [
      "Southwest operates a point-to-point network rather than hub-and-spoke, so disruptions spread across the system. Its crew scheduling relied on old software and manual phone calls. Unions had warned for years that the system couldn't cope with major disruption.",
      "When Winter Storm Elliott hit in December 2022, other airlines recovered within days. Southwest's systems couldn't track where crews were, and it cancelled about 16,700 flights between 21 and 31 December, stranding passengers over the holidays.",
      "Southwest refunded and reimbursed customers, and the disruption cost it over $1 billion. In December 2023 the US Department of Transportation imposed a record $140 million penalty. Southwest accelerated investment in technology upgrades.",
    ],
    keyNumbers: [
      { label: "Flights cancelled (Dec 21–31, 2022)", value: "about 16,700" },
      { label: "Estimated cost", value: "over $1 billion" },
      { label: "DOT penalty (2023)", value: "$140 million, a record" },
    ],
    timeline: [
      { year: "2022", event: "Winter Storm Elliott; mass cancellations (December)." },
      { year: "2023", event: "Record DOT penalty; technology investment." },
    ],
    drivers: [
      "Years of under-investment in core operating systems.",
      "Network design that spread disruption widely.",
      "Warnings from staff were not acted on.",
    ],
    lesson:
      "Technology debt is invisible in good times and catastrophic in bad ones.",
    takeaways: [
      "Stress-test your systems against a worst-case day.",
      "Listen to frontline warnings about tools.",
      "Budget for upgrading core systems before they fail.",
    ],
    lawSlugs: ["murphys-law", "status-quo-bias", "littles-law"],
  },
  {
    slug: "crowdstrike-2024-outage",
    title: "CrowdStrike 2024: one update crashes 8.5 million computers",
    company: "CrowdStrike",
    country: "United States",
    region: "North America",
    period: "2024",
    kind: "failure",
    industrySlug: "saas-tech",
    summary:
      "A faulty content update to CrowdStrike's security software crashed about 8.5 million Windows devices worldwide, grounding flights and disrupting hospitals, banks, and broadcasters.",
    story: [
      "CrowdStrike's Falcon software protects business computers against cyberattacks and runs deep inside the Windows operating system. On 19 July 2024 it pushed a routine configuration update to customers worldwide.",
      "The update contained an error that caused Windows computers to crash and fail to restart. Microsoft estimated about 8.5 million devices were affected. Airlines grounded flights, hospitals postponed procedures, and banks and broadcasters went offline. Many machines had to be fixed manually, one by one.",
      "CrowdStrike apologised, published a root-cause analysis, and committed to staged rollouts so updates reach small groups first. Delta Air Lines said the outage cost it about $500 million and pursued legal action.",
    ],
    keyNumbers: [
      { label: "Devices affected", value: "about 8.5 million" },
      { label: "Date", value: "19 July 2024" },
      { label: "Delta's estimated losses", value: "about $500 million" },
    ],
    timeline: [{ year: "2024", event: "Faulty update (July 19); root-cause report; staged rollouts introduced." }],
    drivers: [
      "Update pushed to all customers at once.",
      "Software ran at a deep level where errors crash the whole system.",
      "Testing failed to catch a malformed file.",
    ],
    lesson:
      "Releasing changes to everyone at once turns a small mistake into a global disaster — roll out gradually.",
    takeaways: [
      "Roll out changes to a small group first.",
      "Have a fast rollback plan for every release.",
      "Know which suppliers are single points of failure for you.",
    ],
    lawSlugs: ["murphys-law", "galls-law", "law-of-unintended-consequences"],
  },
];
