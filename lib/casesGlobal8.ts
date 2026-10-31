import type { CaseStudy } from "./knowledgeTypes";

// Global case library, batch 8 — brand and marketing. Figures are rounded from public reports.
export const CASES_GLOBAL_8: CaseStudy[] = [
  {
    slug: "nike-air-jordan-just-do-it",
    title: "Nike: Air Jordan, ‘Just Do It’, and building a brand on athletes",
    company: "Nike",
    country: "United States",
    region: "North America",
    period: "1964–2023",
    kind: "build",
    industrySlug: "apparel-textiles",
    strategySlug: "brand-moat",
    summary:
      "Nike started by importing Japanese running shoes, bet on a rookie named Michael Jordan in 1984, and launched ‘Just Do It’ in 1988 — growing into the world's largest sportswear company.",
    story: [
      "Phil Knight and his running coach Bill Bowerman founded Blue Ribbon Sports in 1964, each putting in $500, to import Onitsuka Tiger shoes from Japan. In 1971 they launched their own brand, Nike, with a swoosh logo designed by student Carolyn Davidson for $35.",
      "In 1984 Nike signed rookie Michael Jordan to a then-large endorsement deal and built a signature shoe line around him. Air Jordan sales far exceeded Nike's expectations in the first year and created a sub-brand that still sells billions. In 1988 agency Wieden+Kennedy created the ‘Just Do It’ campaign, which spoke to everyday athletes, not just elites.",
      "Over the following decade Nike's share of the US sports-shoe market rose sharply and revenue grew roughly tenfold. Nike outsourced manufacturing and focused on design and marketing; its revenue reached about $51 billion in fiscal 2023.",
    ],
    keyNumbers: [
      { label: "Founders' starting investment", value: "$500 each (1964)" },
      { label: "Swoosh design fee", value: "$35" },
      { label: "Air Jordan launch", value: "1984–1985" },
      { label: "Revenue (fiscal 2023)", value: "about $51 billion" },
    ],
    timeline: [
      { year: "1964", event: "Blue Ribbon Sports founded." },
      { year: "1971", event: "Nike brand and swoosh introduced." },
      { year: "1984", event: "Michael Jordan signs with Nike." },
      { year: "1988", event: "‘Just Do It’ campaign launches." },
    ],
    drivers: [
      "Bet early on an athlete who became a legend.",
      "Marketing that sold identity and aspiration.",
      "Outsourced manufacturing, invested in design and brand.",
    ],
    lesson:
      "Brands built on what customers aspire to become can command loyalty and prices far beyond the product's cost.",
    takeaways: [
      "Partner early with rising stars in your niche.",
      "Market the customer's aspiration, not just features.",
      "Focus your money where you add the most value.",
    ],
    lawSlugs: ["halo-effect", "liking-principle", "unity-principle"],
  },
  {
    slug: "old-spice-man-your-man-campaign",
    title: "Old Spice: ‘The Man Your Man Could Smell Like’",
    company: "Procter & Gamble (Old Spice)",
    country: "United States",
    region: "North America",
    period: "2010",
    kind: "turnaround",
    industrySlug: "fmcg-retail",
    summary:
      "An ageing brand seen as ‘your grandfather's aftershave’ reinvented itself with absurd humour aimed at women who buy men's body wash — and then replied to fans with nearly 200 personalised videos.",
    story: [
      "Old Spice was associated with older men, while younger men bought brands like Axe. Research showed women bought a large share of men's body wash for their partners.",
      "In February 2010 Wieden+Kennedy launched ‘The Man Your Man Could Smell Like’, starring Isaiah Mustafa, speaking directly to women in one surreal, continuous shot. It spread rapidly online. In July 2010 the team filmed about 186 short personalised video replies to fans and celebrities on social media over roughly two days.",
      "The campaign became one of the most viral of its time. Old Spice body wash sales reportedly roughly doubled in the following months, and the brand's image was transformed for a younger generation.",
    ],
    keyNumbers: [
      { label: "Campaign launch", value: "February 2010" },
      { label: "Personalised video replies", value: "about 186 in roughly 2 days" },
      { label: "Reported body-wash sales lift", value: "roughly doubled" },
    ],
    timeline: [
      { year: "2010", event: "Campaign launch (February); real-time replies (July)." },
    ],
    drivers: [
      "Targeted the actual buyer, not just the user.",
      "Memorable, absurd humour that people wanted to share.",
      "Real-time personalised responses built engagement.",
    ],
    lesson:
      "Know who actually makes the purchase decision — and give people something worth sharing.",
    takeaways: [
      "Identify who buys, not just who uses, your product.",
      "Humour and surprise drive sharing.",
      "Respond personally to fans when they engage.",
    ],
    lawSlugs: ["von-restorff-effect", "reciprocity-principle", "mere-exposure-effect"],
  },
  {
    slug: "dove-campaign-for-real-beauty",
    title: "Dove: the Campaign for Real Beauty",
    company: "Unilever (Dove)",
    country: "United Kingdom",
    region: "Europe",
    period: "2004–2014",
    kind: "build",
    industrySlug: "beauty-wellness",
    summary:
      "Research showing only 2% of women described themselves as beautiful led Dove to feature real women instead of models. The campaign became one of the longest-running and most-discussed in advertising.",
    story: [
      "In 2004 Unilever's Dove commissioned research finding that only about 2% of women around the world described themselves as beautiful. With agency Ogilvy, it launched the ‘Campaign for Real Beauty’, using women of different ages, sizes, and skin tones in its ads.",
      "Videos such as ‘Evolution’ (2006), showing how a model's image was digitally altered, and ‘Real Beauty Sketches’ (2013), in which a forensic artist drew women from their own and strangers' descriptions, spread widely online. ‘Real Beauty Sketches’ became one of the most-viewed online ads of its time.",
      "Dove's sales grew substantially over the campaign's first decade. The campaign also drew criticism, since Unilever sold other brands with very different messages — a reminder that purpose must be consistent.",
    ],
    keyNumbers: [
      { label: "Women describing themselves as beautiful", value: "about 2% (2004 research)" },
      { label: "Campaign launch", value: "2004" },
      { label: "‘Real Beauty Sketches’", value: "2013" },
    ],
    timeline: [
      { year: "2004", event: "Campaign for Real Beauty launches." },
      { year: "2006", event: "‘Evolution’ video." },
      { year: "2013", event: "‘Real Beauty Sketches’." },
    ],
    drivers: [
      "Based on a real customer insight.",
      "Emotional stories people wanted to share.",
      "Long-term consistency over many years.",
    ],
    lesson:
      "A campaign rooted in a genuine customer insight can build emotional loyalty — but purpose must be consistent across a company.",
    takeaways: [
      "Research what your customers feel, not just what they buy.",
      "Tell stories that reflect your real customers.",
      "Stay consistent with your message for years.",
    ],
    lawSlugs: ["unity-principle", "liking-principle", "framing-effect"],
  },
  {
    slug: "patagonia-dont-buy-this-jacket",
    title: "Patagonia: ‘Don't Buy This Jacket’",
    company: "Patagonia",
    country: "United States",
    region: "North America",
    period: "1973–2022",
    kind: "build",
    industrySlug: "apparel-textiles",
    summary:
      "On Black Friday 2011 Patagonia ran a full-page ad telling people not to buy its jacket unless they needed it. The message reinforced its brand — and sales grew.",
    story: [
      "Climber Yvon Chouinard founded Patagonia in 1973 to make durable outdoor clothing. It became known for environmental activism, donating 1% of sales to environmental causes and repairing garments.",
      "On Black Friday 2011 Patagonia placed a full-page ad in The New York Times showing its best-selling R2 jacket with the headline ‘Don't Buy This Jacket’, explaining the environmental cost of making it and urging customers to buy only what they needed. It promoted repair, reuse, and resale.",
      "The ad drew huge attention and was consistent with the brand's long-standing actions. Patagonia's sales reportedly grew strongly the following year. In 2022 Chouinard transferred ownership of the roughly $3 billion company to a trust and non-profit, so profits fund environmental work.",
    ],
    keyNumbers: [
      { label: "Founded", value: "1973" },
      { label: "Ad date", value: "Black Friday 2011" },
      { label: "Company value at ownership transfer (2022)", value: "about $3 billion" },
    ],
    timeline: [
      { year: "1973", event: "Patagonia founded." },
      { year: "1985", event: "Begins giving 1% of sales to environmental groups." },
      { year: "2011", event: "‘Don't Buy This Jacket’ ad." },
      { year: "2022", event: "Ownership transferred to a trust and non-profit." },
    ],
    drivers: [
      "Message matched decades of real behaviour.",
      "Contrarian timing on the biggest shopping day.",
      "Durability supported premium prices.",
    ],
    lesson:
      "A bold message works when it is backed by years of consistent action — authenticity is the brand.",
    takeaways: [
      "Make sure your actions match your message.",
      "Contrarian messages stand out on crowded days.",
      "Durability and repair can justify premium pricing.",
    ],
    lawSlugs: ["von-restorff-effect", "pratfall-effect", "commitment-and-consistency"],
  },
  {
    slug: "dollar-shave-club-viral-video",
    title: "Dollar Shave Club: a $4,500 video and a $1 billion exit",
    company: "Dollar Shave Club",
    country: "United States",
    region: "North America",
    period: "2011–2016",
    kind: "build",
    industrySlug: "d2c-ecommerce",
    strategySlug: "direct-to-consumer-bypass",
    summary:
      "Michael Dubin's funny launch video, made for about $4,500, brought 12,000 orders in two days. Four years later Unilever bought the razor subscription company for about $1 billion.",
    story: [
      "Razor blades were expensive and locked behind store counters, with prices set by a few big brands. Michael Dubin launched Dollar Shave Club to send affordable razors by monthly subscription, starting at about $1 a month plus shipping.",
      "In March 2012 he released a launch video, reportedly made for about $4,500, in which he walked through a warehouse delivering deadpan jokes about overpriced razors. It went viral, bringing about 12,000 orders in the first 48 hours and crashing the website.",
      "Dollar Shave Club expanded into other grooming products. In July 2016 Unilever bought it for about $1 billion in cash, a landmark for direct-to-consumer brands.",
    ],
    keyNumbers: [
      { label: "Launch video cost", value: "about $4,500" },
      { label: "Orders in first 48 hours", value: "about 12,000" },
      { label: "Starting price", value: "about $1 a month plus shipping" },
      { label: "Unilever acquisition (2016)", value: "about $1 billion" },
    ],
    timeline: [
      { year: "2011", event: "Company founded." },
      { year: "2012", event: "Viral launch video." },
      { year: "2016", event: "Acquired by Unilever." },
    ],
    drivers: [
      "Attacked a clear customer frustration (overpriced blades).",
      "Humour made the message memorable and shareable.",
      "Subscription removed the hassle of buying.",
    ],
    lesson:
      "A clear enemy, a simple offer, and a memorable message can launch a brand without a big budget.",
    takeaways: [
      "Name the frustration your product fixes.",
      "Use humour and personality in your marketing.",
      "Make repeat purchase automatic.",
    ],
    lawSlugs: ["von-restorff-effect", "pratfall-effect", "status-quo-bias"],
  },
  {
    slug: "warby-parker-home-try-on",
    title: "Warby Parker: $95 glasses and five frames at home",
    company: "Warby Parker",
    country: "United States",
    region: "North America",
    period: "2010–2023",
    kind: "build",
    industrySlug: "d2c-ecommerce",
    strategySlug: "direct-to-consumer-bypass",
    summary:
      "Four students launched online glasses at $95 with free home try-on. They hit their first-year sales target in about three weeks and later listed at a valuation of about $6 billion.",
    story: [
      "Four Wharton business school students started Warby Parker in 2010 after one lost his glasses and balked at the cost of replacing them. Prescription glasses commonly cost hundreds of dollars, partly because a few large companies controlled brands, manufacturing, and retail.",
      "Warby Parker designed its own frames and sold them online for $95 including lenses. To overcome the fear of buying glasses without trying them, it let customers order five frames to try at home free. For each pair sold it funded a pair for someone in need. After early press coverage in GQ and Vogue, it reportedly met its first-year sales target in about three weeks and built a long waiting list.",
      "Warby Parker later opened physical stores and listed directly on the NYSE in 2021 at a valuation of about $6 billion.",
    ],
    keyNumbers: [
      { label: "Price including lenses", value: "$95" },
      { label: "Frames in home try-on", value: "5" },
      { label: "Time to hit first-year target", value: "about 3 weeks" },
      { label: "Valuation at listing (2021)", value: "about $6 billion" },
    ],
    timeline: [
      { year: "2010", event: "Launch." },
      { year: "2013", event: "First standalone retail store." },
      { year: "2021", event: "Direct listing on the NYSE." },
    ],
    drivers: [
      "Cut out the middlemen to lower prices.",
      "Removed purchase risk with free home try-on.",
      "Social mission built emotional connection.",
    ],
    lesson:
      "When an industry is dominated by a few players with high prices, a direct model with a clear risk-reducer can win quickly.",
    takeaways: [
      "Find industries where middlemen inflate prices.",
      "Remove the reason customers hesitate to buy online.",
      "Give customers a story they can share.",
    ],
    lawSlugs: ["endowment-effect", "loss-aversion", "anchoring-bias"],
  },
  {
    slug: "gymshark-influencer-brand",
    title: "Gymshark: from a garage sewing machine to a £1 billion brand",
    company: "Gymshark",
    country: "United Kingdom",
    region: "Europe",
    period: "2012–2022",
    kind: "build",
    industrySlug: "d2c-ecommerce",
    summary:
      "Ben Francis started Gymshark at 19 in Birmingham, sewing gym wear in his parents' garage. Early partnerships with fitness YouTubers grew it into a brand valued at over £1 billion.",
    story: [
      "In 2012 Ben Francis, a university student and pizza delivery driver, started selling fitness supplements online with friends, then began making gym clothing on a sewing machine in his parents' garage in Birmingham.",
      "Gymshark sent clothing to fitness YouTubers and Instagram creators early — before influencer marketing was mainstream — and built relationships with them. Its ‘Fit’ seamless range sold out at a fitness expo, and a Black Friday sale overwhelmed its website. It sold directly online and focused on community events.",
      "In 2020 investment firm General Atlantic bought a minority stake, valuing Gymshark at over £1 billion. Revenue reached about £500 million in 2022.",
    ],
    keyNumbers: [
      { label: "Founder's age at start", value: "19" },
      { label: "Founded", value: "2012" },
      { label: "Valuation (2020)", value: "over £1 billion" },
      { label: "Revenue (2022)", value: "about £500 million" },
    ],
    timeline: [
      { year: "2012", event: "Gymshark started." },
      { year: "2013", event: "Influencer partnerships and expo breakthrough." },
      { year: "2020", event: "General Atlantic investment." },
      { year: "2022", event: "First flagship store in London." },
    ],
    drivers: [
      "Early, genuine relationships with creators.",
      "Direct-to-consumer model kept margins and data.",
      "Community-first brand building.",
    ],
    lesson:
      "Partnering with creators your customers already trust can build a brand faster than traditional advertising.",
    takeaways: [
      "Find the creators your customers follow.",
      "Build long-term relationships, not one-off posts.",
      "Sell direct to keep customer data.",
    ],
    lawSlugs: ["social-proof", "liking-principle", "unity-principle"],
  },
  {
    slug: "glossier-community-beauty",
    title: "Glossier: a beauty brand built from a blog's comments",
    company: "Glossier",
    country: "United States",
    region: "North America",
    period: "2010–2023",
    kind: "build",
    industrySlug: "beauty-wellness",
    summary:
      "Emily Weiss's beauty blog Into The Gloss gave her a loyal readership and insight into what they wanted. Glossier launched in 2014 and reached a valuation of over $1 billion by 2019.",
    story: [
      "Emily Weiss started the blog Into The Gloss in 2010, interviewing women about their beauty routines. It built a large, engaged audience whose comments revealed what they wanted: simple, natural-looking products.",
      "Glossier launched in 2014 with a handful of products and minimalist pink packaging. It treated customers as co-creators, developing products from community feedback, and used customers' own photos and reviews in marketing. Sales were largely direct online and through pop-up showrooms.",
      "Glossier was valued at over $1 billion in 2019. It later cut staff and changed leadership as growth slowed, and began selling through Sephora in 2023.",
    ],
    keyNumbers: [
      { label: "Into The Gloss launch", value: "2010" },
      { label: "Glossier launch", value: "2014" },
      { label: "Valuation (2019)", value: "over $1 billion" },
    ],
    timeline: [
      { year: "2010", event: "Into The Gloss blog launches." },
      { year: "2014", event: "Glossier launches." },
      { year: "2019", event: "Unicorn valuation." },
      { year: "2023", event: "Sephora partnership." },
    ],
    drivers: [
      "Built an audience before a product.",
      "Product decisions shaped by community feedback.",
      "Customers' own content as marketing.",
    ],
    lesson:
      "An audience you've built and listened to can tell you exactly what to make — and help sell it.",
    takeaways: [
      "Build an audience through useful content first.",
      "Involve customers in product development.",
      "Share real customer photos and stories.",
    ],
    lawSlugs: ["ikea-effect", "social-proof", "unity-principle"],
  },
  {
    slug: "spanx-bootstrapped-billionaire",
    title: "Spanx: $5,000, a pair of scissors, and no outside investors",
    company: "Spanx",
    country: "United States",
    region: "North America",
    period: "1998–2021",
    kind: "build",
    industrySlug: "apparel-textiles",
    summary:
      "Sara Blakely cut the feet off her pantyhose, invested her $5,000 savings, wrote her own patent, and built Spanx without outside funding until a 2021 deal valued it at about $1.2 billion.",
    story: [
      "Sara Blakely was selling fax machines door to door when, in 1998, she cut the feet off her pantyhose to get a smooth look under trousers. She put her $5,000 savings into developing the product, researched and wrote much of her patent herself, and persuaded a hosiery mill to make it.",
      "She pitched a Neiman Marcus buyer by taking her into the bathroom to show the before-and-after. In 2000 Oprah Winfrey named Spanx one of her ‘Favorite Things’, and sales took off. Blakely kept full ownership and marketed through word of mouth and her own story rather than big advertising budgets.",
      "Forbes named her the youngest self-made female billionaire in 2012. In 2021 Blackstone bought a majority stake in a deal valuing Spanx at about $1.2 billion.",
    ],
    keyNumbers: [
      { label: "Starting savings", value: "$5,000" },
      { label: "Founded", value: "1998" },
      { label: "Oprah's ‘Favorite Things’", value: "2000" },
      { label: "Valuation in Blackstone deal (2021)", value: "about $1.2 billion" },
    ],
    timeline: [
      { year: "1998", event: "Idea and product development." },
      { year: "2000", event: "Neiman Marcus and Oprah feature." },
      { year: "2012", event: "Named billionaire by Forbes." },
      { year: "2021", event: "Blackstone deal." },
    ],
    drivers: [
      "Solved a personal problem many women shared.",
      "Demonstrated the product in person.",
      "One powerful endorsement drove awareness.",
      "Kept ownership by growing profitably.",
    ],
    lesson:
      "A simple product that solves a real, personal problem — demonstrated directly — can build a large business without investors.",
    takeaways: [
      "Start with a problem you personally experience.",
      "Show buyers the before-and-after in person.",
      "One credible endorsement can change everything.",
    ],
    lawSlugs: ["authority-principle", "kidlins-law", "social-proof"],
  },
  {
    slug: "lululemon-community-premium",
    title: "Lululemon: yoga pants, ambassadors, and premium pricing",
    company: "Lululemon",
    country: "Canada",
    region: "North America",
    period: "1998–2023",
    kind: "build",
    industrySlug: "apparel-textiles",
    summary:
      "Lululemon built a premium athleisure brand through local fitness ambassadors and free in-store classes. A 2013 sheer-pants recall hurt, but it grew to about $9.6 billion in revenue.",
    story: [
      "Chip Wilson opened Lululemon in Vancouver in 1998 as a design studio by day and a yoga studio by night. Its technical fabrics and fit made yoga wear something people wanted to wear all day.",
      "Instead of paying celebrities, Lululemon recruited local yoga teachers and fitness instructors as ambassadors, gave them clothing, and hosted free classes in stores. This built community and word of mouth. It sold at premium prices, often around $100 for leggings, and rarely discounted.",
      "In 2013 it recalled black yoga pants that were too sheer, a quality and PR crisis that contributed to leadership changes. Lululemon recovered, expanded into men's wear and international markets, and reported revenue of about $9.6 billion in fiscal 2023.",
    ],
    keyNumbers: [
      { label: "Founded", value: "1998, Vancouver" },
      { label: "Typical legging price", value: "around $100" },
      { label: "Sheer-pants recall", value: "2013" },
      { label: "Revenue (fiscal 2023)", value: "about $9.6 billion" },
    ],
    timeline: [
      { year: "1998", event: "First store opens." },
      { year: "2007", event: "IPO." },
      { year: "2013", event: "Sheer-pants recall." },
      { year: "2023", event: "Revenue nears $10 billion." },
    ],
    drivers: [
      "Local ambassadors built authentic credibility.",
      "Stores as community hubs.",
      "Premium positioning protected margins.",
    ],
    lesson:
      "Turning respected local people into ambassadors can create a premium brand rooted in community.",
    takeaways: [
      "Partner with trusted local experts.",
      "Make your space a place customers gather.",
      "Protect premium pricing by avoiding constant discounts.",
    ],
    lawSlugs: ["authority-principle", "unity-principle", "veblen-effect"],
  },
  {
    slug: "chobani-greek-yogurt",
    title: "Chobani: buying a closed Kraft factory and creating a category",
    company: "Chobani",
    country: "United States",
    region: "North America",
    period: "2005–2016",
    kind: "build",
    industrySlug: "dairy-livestock",
    strategySlug: "category-creation",
    summary:
      "Turkish immigrant Hamdi Ulukaya bought a closed yogurt factory with a small-business loan and made Greek yogurt mainstream in America, reaching $1 billion in sales within about five years.",
    story: [
      "In 2005 Hamdi Ulukaya, who ran a small feta cheese business in upstate New York, saw an ad for a closed Kraft yogurt plant. He bought it with the help of a Small Business Administration loan and spent about two years perfecting a thick, strained Greek-style yogurt.",
      "Chobani launched in 2007. Greek yogurt was a tiny niche in the US, but Ulukaya priced it accessibly and pushed for placement in mainstream supermarket aisles alongside regular yogurt, rather than in specialty sections. Its higher protein appealed to health-conscious shoppers.",
      "Chobani passed $1 billion in annual sales around 2012, and Greek yogurt became a large share of the US yogurt market. In 2016 Ulukaya gave employees shares worth up to 10% of the company.",
    ],
    keyNumbers: [
      { label: "Factory purchase", value: "2005" },
      { label: "Launch", value: "2007" },
      { label: "Annual sales around 2012", value: "over $1 billion" },
      { label: "Employee equity (2016)", value: "up to 10%" },
    ],
    timeline: [
      { year: "2005", event: "Buys closed Kraft plant." },
      { year: "2007", event: "Chobani launches." },
      { year: "2012", event: "Passes $1 billion in sales." },
      { year: "2016", event: "Employee shares announced." },
    ],
    drivers: [
      "Turned a niche product into a mainstream one.",
      "Fought for placement where most shoppers look.",
      "Accessible pricing for a premium product.",
    ],
    lesson:
      "Taking a niche product into the mainstream aisle — at a mainstream price — can create a whole new category.",
    takeaways: [
      "Look for niche products ready for the mass market.",
      "Placement can matter as much as product.",
      "Underused assets can be bought cheaply.",
    ],
    lawSlugs: ["law-of-the-category", "law-of-leadership", "mere-exposure-effect"],
  },
  {
    slug: "havaianas-flip-flop-premiumisation",
    title: "Havaianas: from cheap sandal to fashion icon",
    company: "Alpargatas (Havaianas)",
    country: "Brazil",
    region: "Latin America",
    period: "1962–2023",
    kind: "turnaround",
    industrySlug: "apparel-textiles",
    strategySlug: "premiumization",
    summary:
      "Havaianas were cheap rubber sandals associated with poorer Brazilians. A 1990s repositioning with bright colours, celebrities, and the Brazilian flag turned them into a global fashion brand.",
    story: [
      "Alpargatas launched Havaianas in 1962, with a textured rubber sole inspired by Japanese zori sandals. They became a cheap staple, mostly in blue and white, and by the early 1990s were seen as a low-status commodity, with sales declining.",
      "From 1994 Alpargatas repositioned the brand. It launched solid-coloured ‘Top’ models, used celebrities in ads, and sold through more upmarket shops. During the 1998 World Cup it added a small Brazilian flag to the strap, tying the sandal to national pride. International fashion boutiques and designers began stocking them.",
      "Havaianas became a global brand sold in dozens of countries, with prices abroad far above those in Brazil, while remaining affordable at home.",
    ],
    keyNumbers: [
      { label: "Launch", value: "1962" },
      { label: "Repositioning began", value: "1994" },
      { label: "Brazilian flag detail", value: "1998 World Cup" },
    ],
    timeline: [
      { year: "1962", event: "Havaianas launched." },
      { year: "1994", event: "Colourful ‘Top’ range and new marketing." },
      { year: "1998", event: "Flag design during World Cup." },
      { year: "2000s", event: "International fashion expansion." },
    ],
    drivers: [
      "Changed perception without changing the core product.",
      "Tied the brand to national identity.",
      "Shifted distribution upmarket.",
    ],
    lesson:
      "A commodity can become a fashion brand through new design, distribution, and identity — without changing what it fundamentally is.",
    takeaways: [
      "Could new colours, packaging, or stores reposition your product?",
      "Connect your brand to identity or pride.",
      "Distribution choices shape perception.",
    ],
    lawSlugs: ["framing-effect", "unity-principle", "halo-effect"],
  },
  {
    slug: "de-beers-diamond-is-forever",
    title: "De Beers: ‘A Diamond Is Forever’ creates a tradition",
    company: "De Beers",
    country: "South Africa",
    region: "Middle East & Africa",
    period: "1938–2018",
    kind: "build",
    industrySlug: "jewellery",
    summary:
      "De Beers, which controlled most of the world's rough diamond supply, used advertising to make diamond engagement rings a near-universal tradition — then faced a threat from lab-grown diamonds.",
    story: [
      "In the 1930s diamond demand was weak and De Beers, which controlled most global rough diamond supply, hired US agency N.W. Ayer to change attitudes. Campaigns linked diamonds with romance and commitment. In 1947 copywriter Frances Gerety wrote the line ‘A Diamond Is Forever’, which also discouraged people from reselling diamonds.",
      "The share of American brides receiving a diamond engagement ring rose dramatically in the following decades, and the ‘two months' salary’ guideline set expectations for price. De Beers ran a similar campaign in Japan from the late 1960s, where diamond engagement rings were previously rare, and they became common within about 15 years.",
      "De Beers' supply control weakened from the 2000s, and lab-grown diamonds — chemically identical and much cheaper — became a serious threat. In 2018 De Beers launched its own lab-grown brand, Lightbox, at low prices.",
    ],
    keyNumbers: [
      { label: "‘A Diamond Is Forever’ line", value: "1947" },
      { label: "Japan campaign begins", value: "late 1960s" },
      { label: "Lightbox lab-grown brand", value: "2018" },
    ],
    timeline: [
      { year: "1938", event: "De Beers hires N.W. Ayer." },
      { year: "1947", event: "‘A Diamond Is Forever’ coined." },
      { year: "1967", event: "Japan campaign launched." },
      { year: "2018", event: "Lightbox launched." },
    ],
    drivers: [
      "Linked a product to life's most emotional moment.",
      "Controlled supply to protect prices.",
      "Discouraged resale to keep diamonds off the market.",
    ],
    lesson:
      "Marketing can turn a product into a tradition — but control built on scarcity is vulnerable when technology changes supply.",
    takeaways: [
      "Link your product to meaningful life events.",
      "Set clear social norms around buying.",
      "Watch for technology that could undercut scarcity.",
    ],
    lawSlugs: ["anchoring-bias", "scarcity-principle", "endowment-effect"],
  },
  {
    slug: "share-a-coke-names",
    title: "Share a Coke: putting names on bottles",
    company: "The Coca-Cola Company",
    country: "Australia",
    region: "Asia-Pacific",
    period: "2011–2014",
    kind: "build",
    industrySlug: "fmcg-retail",
    summary:
      "Coca-Cola replaced its logo with popular first names on bottles in Australia in 2011. People hunted for their names and shared photos, and the idea spread to more than 80 countries.",
    story: [
      "Coca-Cola wanted to reconnect with young adults in Australia. In 2011 agency Ogilvy replaced the Coca-Cola logo on bottles with about 150 of the country's most popular first names, under the line ‘Share a Coke with…’.",
      "People searched shops for their own and friends' names, bought bottles as gifts, and posted photos on social media. Kiosks let people print custom names. The campaign generated huge earned media at low cost.",
      "After strong results in Australia, Coca-Cola rolled the idea out to more than 80 countries. In the US, where soft-drink sales had been declining, the 2014 campaign helped lift Coke sales for the first time in years.",
    ],
    keyNumbers: [
      { label: "Names in first campaign", value: "about 150" },
      { label: "Launch", value: "2011, Australia" },
      { label: "Countries reached", value: "more than 80" },
    ],
    timeline: [
      { year: "2011", event: "Launch in Australia." },
      { year: "2013", event: "Expansion to Europe." },
      { year: "2014", event: "US launch." },
    ],
    drivers: [
      "Personalisation made a mass product feel personal.",
      "Built-in reason to share and gift.",
      "Encouraged user-generated content.",
    ],
    lesson:
      "Personalising a mass product gives people a reason to search for it, buy it for others, and share it.",
    takeaways: [
      "Can you personalise your packaging or product?",
      "Design a reason for customers to share.",
      "Turn purchases into gifts.",
    ],
    lawSlugs: ["endowment-effect", "reciprocity-principle", "ikea-effect"],
  },
  {
    slug: "absolut-vodka-bottle-ads",
    title: "Absolut: a 25-year campaign built on a bottle",
    company: "Absolut Vodka",
    country: "Sweden",
    region: "Europe",
    period: "1979–2008",
    kind: "build",
    industrySlug: "fmcg-retail",
    summary:
      "Absolut entered the US in 1979 with an unusual bottle and no heritage in a Russian-dominated category. A long-running print campaign built around the bottle made it a leading premium vodka.",
    story: [
      "Swedish state-owned Vin & Sprit launched Absolut in the US in 1979. Vodka was associated with Russia, and the clear, label-less bottle — inspired by old Swedish medicine bottles — was unconventional.",
      "Agency TBWA created a print campaign from 1980 in which every ad featured the bottle with a two-word headline such as ‘Absolut Perfection’. Over about 25 years it ran around 1,500 ads, including collaborations with artists such as Andy Warhol. People collected the ads.",
      "Absolut's US sales grew from a few thousand cases to millions of cases a year, and it became one of the world's best-known premium vodkas. Pernod Ricard bought Absolut in 2008 for about €5.6 billion.",
    ],
    keyNumbers: [
      { label: "US launch", value: "1979" },
      { label: "Ads in the campaign", value: "around 1,500" },
      { label: "Campaign length", value: "about 25 years" },
      { label: "Pernod Ricard acquisition (2008)", value: "about €5.6 billion" },
    ],
    timeline: [
      { year: "1979", event: "US launch." },
      { year: "1980", event: "‘Absolut Perfection’ campaign begins." },
      { year: "1985", event: "Andy Warhol artwork." },
      { year: "2008", event: "Acquired by Pernod Ricard." },
    ],
    drivers: [
      "Distinctive packaging became the hero.",
      "Long-term consistency with endless creativity.",
      "Art partnerships made ads collectable.",
    ],
    lesson:
      "A simple, consistent creative idea repeated with fresh variations for years can build iconic brand recognition.",
    takeaways: [
      "Make your packaging distinctive.",
      "Keep one creative format and vary it.",
      "Partner with artists to raise brand prestige.",
    ],
    lawSlugs: ["mere-exposure-effect", "von-restorff-effect", "law-of-focus"],
  },
  {
    slug: "always-like-a-girl",
    title: "Always #LikeAGirl: turning an insult into a movement",
    company: "Procter & Gamble (Always)",
    country: "United States",
    region: "North America",
    period: "2014–2015",
    kind: "build",
    industrySlug: "fmcg-retail",
    summary:
      "Always asked people to show what it means to run or throw ‘like a girl’ and contrasted adults' mocking responses with young girls' confident ones. The video drew tens of millions of views and a Super Bowl slot.",
    story: [
      "Always, a feminine hygiene brand, wanted to connect with girls at puberty, when research showed their confidence often drops. Agency Leo Burnett and filmmaker Lauren Greenfield created a short documentary-style film.",
      "Released in June 2014, the video asked teenagers and adults to act out running or fighting ‘like a girl’; they did so weakly and mockingly. Younger girls asked the same question ran and fought with full strength. The contrast made viewers reconsider the phrase.",
      "The video gathered tens of millions of views within months, was adapted for the 2015 Super Bowl, and won major advertising awards.",
    ],
    keyNumbers: [
      { label: "Release", value: "June 2014" },
      { label: "Views", value: "tens of millions within months" },
      { label: "Super Bowl version", value: "2015" },
    ],
    timeline: [
      { year: "2014", event: "#LikeAGirl video released." },
      { year: "2015", event: "Super Bowl ad; Cannes awards." },
    ],
    drivers: [
      "Built on a real insight about the audience.",
      "Simple, powerful contrast.",
      "Purpose linked closely to the product's customer.",
    ],
    lesson:
      "Campaigns that challenge a familiar phrase or belief, through real people, can create emotional impact and conversation.",
    takeaways: [
      "Find a belief your customers want challenged.",
      "Use real people over actors when possible.",
      "Tie the message closely to your customer's life stage.",
    ],
    lawSlugs: ["framing-effect", "pygmalion-effect", "unity-principle"],
  },
  {
    slug: "liquid-death-branding",
    title: "Liquid Death: selling canned water like a heavy-metal band",
    company: "Liquid Death",
    country: "United States",
    region: "North America",
    period: "2019–2024",
    kind: "build",
    industrySlug: "fmcg-retail",
    summary:
      "Liquid Death sold ordinary canned water with skull branding and dark humour, making water ‘cool’ and reaching a valuation of about $1.4 billion within five years.",
    story: [
      "Former creative director Mike Cessario noticed that musicians and skaters drank water from energy-drink cans to look cool. In 2019 he launched Liquid Death — mountain water in tall cans with heavy-metal branding and the slogan ‘Murder Your Thirst’.",
      "The product itself was ordinary; the brand was the differentiator. Liquid Death made comedic videos, sold merchandise, ran absurd campaigns, and positioned aluminium cans as a better alternative to plastic bottles. It priced itself above most bottled water.",
      "Liquid Death expanded into flavoured sparkling water and iced tea and was valued at about $1.4 billion in 2024.",
    ],
    keyNumbers: [
      { label: "Launch", value: "2019" },
      { label: "Valuation (2024)", value: "about $1.4 billion" },
    ],
    timeline: [
      { year: "2019", event: "Liquid Death launches." },
      { year: "2022", event: "Expands into flavoured drinks." },
      { year: "2024", event: "Valued at about $1.4 billion." },
    ],
    drivers: [
      "Brand as differentiation in a commodity category.",
      "Humour and entertainment as marketing.",
      "Sustainability angle with cans versus plastic.",
    ],
    lesson:
      "In a commodity category, a bold and entertaining brand can be the product's biggest advantage.",
    takeaways: [
      "Ask what would make your category feel different.",
      "Entertainment can be marketing.",
      "A strong identity justifies premium pricing.",
    ],
    lawSlugs: ["von-restorff-effect", "unity-principle", "veblen-effect"],
  },
  {
    slug: "dumb-ways-to-die-safety-campaign",
    title: "Dumb Ways to Die: a catchy song that made rail safety go viral",
    company: "Metro Trains Melbourne",
    country: "Australia",
    region: "Asia-Pacific",
    period: "2012–2013",
    kind: "build",
    industrySlug: "logistics-transport",
    summary:
      "Melbourne's rail operator used a cute, darkly funny animated song to promote safety around trains. It went viral globally, won major awards, and Metro reported fewer risky incidents.",
    story: [
      "Metro Trains Melbourne wanted young people to take rail safety seriously without lecturing them. In November 2012 agency McCann launched ‘Dumb Ways to Die’, a catchy song and animation featuring cute characters dying in silly ways, ending with dangerous behaviour around trains.",
      "The video spread rapidly online, reaching tens of millions of views within weeks, and the song charted. A mobile game extended the campaign.",
      "Metro reported a significant reduction in near-miss incidents in the following months. The campaign became one of the most awarded in the history of the Cannes Lions festival.",
    ],
    keyNumbers: [
      { label: "Launch", value: "November 2012" },
      { label: "Views", value: "tens of millions within weeks" },
    ],
    timeline: [
      { year: "2012", event: "Campaign launched." },
      { year: "2013", event: "Mobile game; Cannes Lions awards." },
    ],
    drivers: [
      "Entertainment instead of lectures.",
      "Catchy music built memory.",
      "Content worth sharing for its own sake.",
    ],
    lesson:
      "Serious messages can spread further when they are entertaining, memorable, and not preachy.",
    takeaways: [
      "Make important messages entertaining.",
      "Music and characters aid memory.",
      "Build follow-on formats like games.",
    ],
    lawSlugs: ["von-restorff-effect", "mere-exposure-effect", "serial-position-effect"],
  },
  {
    slug: "volkswagen-think-small",
    title: "Volkswagen ‘Think Small’: honesty that sold the Beetle",
    company: "Volkswagen of America",
    country: "United States",
    region: "North America",
    period: "1959–1960s",
    kind: "build",
    industrySlug: "auto-dealerships",
    summary:
      "In an era of big American cars, DDB advertised the tiny Volkswagen Beetle with self-deprecating honesty and white space. It became one of the most celebrated ad campaigns ever.",
    story: [
      "In the late 1950s Americans favoured large, chrome-covered cars. The Volkswagen Beetle was small, odd-looking, and made by a German company only 15 years after the Second World War.",
      "Agency Doyle Dane Bernbach created ads in 1959 with a tiny photo of the Beetle surrounded by white space and the headline ‘Think Small’. Copy was witty and honest about the car's modesty, emphasising low running costs and reliability. A later ad, ‘Lemon’, said a car had been rejected for a small blemish, showing VW's strict quality checks.",
      "The Beetle became one of the best-selling imported cars in the US, and ‘Think Small’ was later named the best ad campaign of the 20th century by Advertising Age.",
    ],
    keyNumbers: [
      { label: "Campaign launch", value: "1959" },
      { label: "‘Lemon’ ad", value: "1960" },
      { label: "Ad Age ranking", value: "#1 campaign of the 20th century" },
    ],
    timeline: [
      { year: "1959", event: "‘Think Small’ launches." },
      { year: "1960", event: "‘Lemon’ ad." },
      { year: "1999", event: "Named top campaign of the century." },
    ],
    drivers: [
      "Turned perceived weaknesses into strengths.",
      "Honest, witty tone stood out.",
      "Visually distinctive in a cluttered market.",
    ],
    lesson:
      "Owning your weaknesses honestly can make your strengths more believable and your brand more likeable.",
    takeaways: [
      "Frame your limitations as benefits.",
      "Honesty can be a competitive advantage.",
      "Look different from the rest of your category.",
    ],
    lawSlugs: ["pratfall-effect", "von-restorff-effect", "framing-effect"],
  },
  {
    slug: "avis-we-try-harder",
    title: "Avis ‘We Try Harder’: turning second place into a selling point",
    company: "Avis",
    country: "United States",
    region: "North America",
    period: "1962–1966",
    kind: "turnaround",
    industrySlug: "logistics-transport",
    summary:
      "Avis, a distant second to Hertz and losing money for years, admitted it was number two and promised to ‘try harder’. Within about a year it became profitable.",
    story: [
      "In the early 1960s Avis was a distant second to Hertz in US car rental and had lost money for over a decade. New CEO Robert Townsend hired agency DDB.",
      "Copywriter Paula Green and the team created ads stating plainly: ‘Avis is only No. 2 in rent a cars. So why go with us? We try harder.’ The campaign explained that, as underdog, Avis had to keep cars cleaner and counters faster. Employees wore ‘We try harder’ buttons, so the promise shaped behaviour.",
      "Avis turned a loss into a profit within about a year, and its market share grew substantially over the next few years. The slogan was used for about 50 years.",
    ],
    keyNumbers: [
      { label: "Campaign launch", value: "1962" },
      { label: "Return to profit", value: "within about a year" },
      { label: "Slogan lifespan", value: "about 50 years" },
    ],
    timeline: [
      { year: "1962", event: "‘We Try Harder’ launches." },
      { year: "1963", event: "Avis becomes profitable." },
    ],
    drivers: [
      "Honest positioning as the underdog.",
      "Promise turned into employee behaviour.",
      "Clear reason to choose the challenger.",
    ],
    lesson:
      "Being number two can be a strength if you turn it into a clear promise customers believe — and staff deliver.",
    takeaways: [
      "Use your position honestly in your messaging.",
      "Make your promise part of daily behaviour.",
      "Give customers a reason to choose the challenger.",
    ],
    lawSlugs: ["pratfall-effect", "law-of-leadership", "commitment-and-consistency"],
  },
];
