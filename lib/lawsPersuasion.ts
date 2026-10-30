import type { Law } from "./knowledgeTypes";

export const LAWS_PERSUASION: Law[] = [
  {
    slug: "reciprocity-principle",
    name: "Law of Reciprocity",
    aka: ["Reciprocity principle"],
    category: "persuasion-psychology",
    oneLiner:
      "People feel obliged to return favours — when you give first, others are more likely to give back.",
    origin:
      "Reciprocity is found in almost every human culture. Psychologist Robert Cialdini made it the first of his six principles of persuasion in Influence: The Psychology of Persuasion (1984).",
    explanation: [
      "A free sample, useful advice, or an unexpected favour creates a sense of debt. Most people want to even the balance, which makes them more open to buying, helping, or saying yes.",
      "It works best when the gift is genuine, personal, and unexpected — not a transparent bribe.",
    ],
    examples: [
      { title: "Free samples", body: "A sweet shop offers a taste of a new mithai; many customers who taste it buy a box." },
      { title: "Content", body: "A consultant shares a genuinely useful free checklist; readers later choose them when they need paid help." },
      { title: "Restaurants", body: "Studies of restaurant mints found that a small personal gift with the bill increased tips." },
    ],
    apply: [
      "Find something valuable you can give before asking for anything.",
      "Make it personal and relevant to the customer's actual problem.",
      "Give without strings — pressure destroys the effect.",
      "Follow up naturally after the value has been received.",
    ],
    misread:
      "Using fake ‘gifts’ to manipulate people backfires once they notice. Reciprocity rewards genuine generosity.",
    question: "What could you give your best prospects before you ever ask them to buy?",
    related: ["ben-franklin-effect", "liking-principle", "commitment-and-consistency", "peak-end-rule"],
    strategySlugs: ["freemium", "referral-engine"],
    link: { kind: "framework", slug: "content-engine", label: "Build a give-first content engine" },
  },
  {
    slug: "scarcity-principle",
    name: "Scarcity Principle",
    category: "persuasion-psychology",
    oneLiner:
      "People value things more when they are rare, limited, or about to run out.",
    origin:
      "One of Robert Cialdini's six principles in Influence (1984). A classic study by Stephen Worchel and colleagues in 1975 found people rated cookies from a nearly empty jar as more desirable than identical cookies from a full one.",
    explanation: [
      "Scarcity triggers fear of missing out and implies that others want the item. Limited editions, seasonal products, and limited seats all draw on this.",
      "It works only when the scarcity is real. Fake countdown timers and permanent ‘last 2 left’ messages erode trust.",
    ],
    examples: [
      { title: "Limited editions", body: "A clothing brand releases small festive collections that sell out because customers know they won't return." },
      { title: "Events", body: "A workshop capped at 30 seats fills faster than an unlimited webinar." },
      { title: "Seasonal products", body: "Mango-season desserts create annual demand spikes." },
    ],
    apply: [
      "Find genuine limits in your business: capacity, season, stock, or time.",
      "Communicate them clearly and honestly.",
      "Use limited editions to create excitement without discounting.",
      "Never fake scarcity — customers will notice and distrust you.",
    ],
    misread:
      "Scarcity is not the same as making things hard to buy. If customers can't get the product when they genuinely need it, they go elsewhere.",
    question: "What in your business is genuinely limited, and do customers know it?",
    related: ["loss-aversion", "veblen-effect", "social-proof", "zeigarnik-effect"],
    strategySlugs: ["scarcity-urgency-pricing"],
  },
  {
    slug: "social-proof",
    name: "Social Proof",
    category: "persuasion-psychology",
    oneLiner:
      "When unsure, people look at what others like them are doing and copy it.",
    origin:
      "Named by Robert Cialdini in Influence (1984). It builds on Solomon Asch's 1950s conformity experiments and Muzafer Sherif's 1930s studies of group norms.",
    explanation: [
      "Reviews, ratings, testimonials, client logos, and crowded shops all reduce the risk of choosing. If many similar people chose something, it feels safer.",
      "Social proof is strongest when the ‘others’ are similar to the customer and the situation is uncertain.",
    ],
    examples: [
      { title: "Reviews", body: "Products with hundreds of ratings outsell similar products with few ratings, even at slightly higher prices." },
      { title: "B2B", body: "A software vendor shows logos of well-known clients in the same industry as the prospect." },
      { title: "Restaurants", body: "A busy dhaba on a highway attracts more stops than an empty one next door." },
    ],
    apply: [
      "Collect reviews and testimonials systematically after every sale.",
      "Show proof from customers similar to the one you are targeting.",
      "Use specific numbers (‘2,300 shops use us’) rather than vague claims.",
      "Place proof right where decisions are made — product pages, checkout, proposals.",
    ],
    misread:
      "Negative social proof also works — saying ‘many people fail to pay on time’ can normalise the behaviour you want to stop.",
    question: "Where does a nervous first-time customer see proof that people like them trust you?",
    related: ["authority-principle", "matthew-effect", "unity-principle", "liking-principle"],
    strategySlugs: ["nps-driven-growth", "referral-engine"],
    link: { kind: "framework", slug: "credibility-5r", label: "Build your credibility" },
  },
  {
    slug: "authority-principle",
    name: "Authority Principle",
    category: "persuasion-psychology",
    oneLiner:
      "People tend to follow and trust those who appear to be credible experts or authorities.",
    origin:
      "One of Robert Cialdini's principles in Influence (1984), drawing on Stanley Milgram's obedience experiments at Yale in the early 1960s.",
    explanation: [
      "Titles, certifications, uniforms, credentials, and media mentions all signal expertise. People use them as shortcuts to decide whom to believe.",
      "In business, authority builds trust faster than persuasion. But it must be real — exaggerated claims damage credibility quickly.",
    ],
    examples: [
      { title: "Healthcare", body: "A clinic displays doctors' qualifications prominently, which reassures new patients." },
      { title: "B2B", body: "A consulting firm publishes research reports that position it as the expert in its niche." },
      { title: "Products", body: "Lab-tested and certified claims on packaging improve trust in food and supplements." },
    ],
    apply: [
      "List your real credentials: years, certifications, awards, results.",
      "Display them where customers make decisions.",
      "Create expert content that shows, not just claims, your knowledge.",
      "Have someone else introduce your expertise — it is more credible than self-promotion.",
    ],
    misread:
      "Authority without honesty is fragile. Fake credentials or false claims destroy trust and can be illegal.",
    question: "What proof of expertise would make a sceptical customer trust you in 30 seconds?",
    related: ["social-proof", "halo-effect", "greshams-law", "liking-principle"],
    link: { kind: "framework", slug: "credibility-5r", label: "Build your credibility" },
  },
  {
    slug: "liking-principle",
    name: "Liking Principle",
    category: "persuasion-psychology",
    oneLiner:
      "People are more easily persuaded by those they like — people who are similar, friendly, and familiar.",
    origin:
      "Described by Robert Cialdini in Influence (1984), using the example of Tupperware parties where friends sold to friends.",
    explanation: [
      "We like people who are similar to us, who compliment us, who cooperate with us, and whom we see often. And we say yes more to people we like.",
      "For business, this is why relationships, local presence, friendly service, and relatable founders sell.",
    ],
    examples: [
      { title: "Local businesses", body: "A shopkeeper who remembers customers' names and families keeps loyal customers despite cheaper online options." },
      { title: "Sales", body: "Salespeople who find genuine common ground early in a call build trust faster." },
      { title: "Founder brands", body: "Founders who share their story openly on social media build fans who buy from them." },
    ],
    apply: [
      "Train staff to be genuinely warm and to remember regular customers.",
      "Find real common ground with prospects.",
      "Show the people behind your brand.",
      "Be consistent and visible so familiarity builds.",
    ],
    misread:
      "Fake friendliness is easy to spot. Liking works when it is genuine.",
    question: "Would your customers describe your team as people they actually like dealing with?",
    related: ["mere-exposure-effect", "reciprocity-principle", "pratfall-effect", "unity-principle"],
  },
  {
    slug: "commitment-and-consistency",
    name: "Commitment and Consistency Principle",
    category: "persuasion-psychology",
    oneLiner:
      "Once people commit to something, especially publicly or in writing, they feel pressure to act consistently with it.",
    origin:
      "Robert Cialdini's principle in Influence (1984). A well-known 1966 study by Jonathan Freedman and Scott Fraser showed people who agreed to a small request were far more likely to agree to a bigger one later (the ‘foot-in-the-door’ technique).",
    explanation: [
      "People want to see themselves as consistent. Small yeses lead to bigger yeses, and written commitments are kept more often than verbal ones.",
      "In business, start with small, easy commitments, and get customers and teams to state goals in their own words.",
    ],
    examples: [
      { title: "Sales", body: "A free trial or small first order makes a bigger contract more likely." },
      { title: "Teams", body: "Team members who write their own goals follow through more than those assigned goals." },
      { title: "Appointments", body: "Clinics that ask patients to write down their own appointment time see fewer no-shows." },
    ],
    apply: [
      "Design a small first step that customers can easily say yes to.",
      "Ask people to write down or say their commitments in their own words.",
      "Make commitments visible (public pledges, signed plans).",
      "Build a ladder of increasing commitments.",
    ],
    misread:
      "Trapping people in commitments they regret damages trust. Use it to help people follow through on what they actually want.",
    question: "What small first yes could lead a customer to your bigger offer?",
    related: ["reciprocity-principle", "sunk-cost-fallacy", "ikea-effect", "endowment-effect"],
    strategySlugs: ["land-and-expand"],
    link: { kind: "tool", slug: "goal-arrow", label: "Write a goal in your own words" },
  },
  {
    slug: "unity-principle",
    name: "Unity Principle",
    category: "persuasion-psychology",
    oneLiner:
      "People are more influenced by those they see as part of their own group — a shared identity of ‘we’.",
    origin:
      "Robert Cialdini added unity as a seventh principle of persuasion in his 2016 book Pre-Suasion.",
    explanation: [
      "Unity goes beyond liking. It is about shared identity — family, region, language, profession, or values. People trust and support those they see as ‘one of us’.",
      "Brands use unity when they build communities around shared identity and values, not just products.",
    ],
    examples: [
      { title: "Regional brands", body: "A Punjabi food brand uses language and culture that make customers feel it is ‘ours’." },
      { title: "Communities", body: "A fitness brand builds a running community where members identify as part of the tribe." },
      { title: "Founders", body: "Industry insiders who become founders win early customers who share their background." },
    ],
    apply: [
      "Define the identity your best customers share.",
      "Speak their language — literally and culturally.",
      "Build community spaces (events, groups) around that identity.",
      "Show that your team shares the identity too.",
    ],
    misread:
      "Unity can easily become exclusion. Build belonging without insulting outsiders.",
    question: "What shared identity do your best customers have — and does your brand speak to it?",
    related: ["liking-principle", "social-proof", "ikea-effect"],
    strategySlugs: ["community-led-growth"],
  },
  {
    slug: "anchoring-bias",
    name: "Anchoring Bias",
    aka: ["Anchoring effect"],
    category: "persuasion-psychology",
    oneLiner:
      "The first number people see heavily influences their later judgements, even if that number is irrelevant.",
    origin:
      "Demonstrated by Amos Tversky and Daniel Kahneman in 1974: people who saw a random number from a spun wheel gave estimates of the share of African countries in the UN that were pulled toward that number.",
    explanation: [
      "The first figure in a negotiation, price list, or estimate becomes a mental reference point. Later numbers are judged relative to it, not on their own merits.",
      "This is why opening offers matter, why original prices appear next to sale prices, and why premium options are shown first.",
    ],
    examples: [
      { title: "Negotiation", body: "The first salary figure mentioned tends to shape the final offer." },
      { title: "Retail", body: "A ‘₹4,999 → ₹2,999’ tag makes the sale price feel like a bargain." },
      { title: "Pricing pages", body: "Showing the enterprise plan first makes mid-tier plans feel reasonable." },
    ],
    apply: [
      "In negotiations, make the first credible offer when you can.",
      "Show your premium option before your standard one.",
      "Use honest reference prices to frame value.",
      "When you are the buyer, set your own anchor before hearing theirs.",
    ],
    misread:
      "Inflated or fake ‘original’ prices can mislead customers and break consumer law. Anchors must be honest.",
    question: "What is the first number your customer sees, and is it working for you?",
    related: ["framing-effect", "weber-fechner-law", "serial-position-effect", "loss-aversion"],
    strategySlugs: ["anchoring-effect", "decoy-effect", "charm-pricing"],
    caseStudySlugs: ["festive-sale-anchoring-ecommerce"],
    link: { kind: "tool", slug: "pricing-strategy", label: "Choose your pricing model" },
  },
  {
    slug: "loss-aversion",
    name: "Loss Aversion",
    category: "persuasion-psychology",
    oneLiner:
      "Losses feel roughly twice as painful as equivalent gains feel good, so people work harder to avoid losing than to win.",
    origin:
      "Central to prospect theory, developed by Daniel Kahneman and Amos Tversky in 1979. Kahneman later won the 2002 Nobel Prize in economics partly for this work.",
    explanation: [
      "Losing ₹1,000 feels worse than gaining ₹1,000 feels good. That asymmetry shapes how customers react to price rises, lost features, and the risk of switching.",
      "Framing a choice around what customers stand to lose often motivates more than framing it around what they could gain — but it must be honest.",
    ],
    examples: [
      { title: "Trials", body: "‘Your free trial ends in 3 days — keep your saved projects’ converts better than ‘upgrade for more features’." },
      { title: "Energy efficiency", body: "‘You are losing ₹2,000 a month on electricity’ motivates more than ‘save ₹2,000 a month’." },
      { title: "Switching", body: "Customers stay with mediocre suppliers because the risk of loss from switching feels larger than the potential gain." },
    ],
    apply: [
      "Show customers what they risk losing by not acting — honestly.",
      "Reduce perceived loss in switching to you: guarantees, free trials, easy returns.",
      "Be careful with price rises and feature removals; they feel like losses.",
      "Frame renewals around keeping what customers already value.",
    ],
    misread:
      "Fear-based marketing used dishonestly destroys trust. Use loss framing to clarify real stakes.",
    question: "What does your customer lose by not choosing you — and do they know it?",
    related: ["endowment-effect", "status-quo-bias", "framing-effect", "sunk-cost-fallacy"],
    strategySlugs: ["switching-costs"],
  },
  {
    slug: "endowment-effect",
    name: "Endowment Effect",
    category: "persuasion-psychology",
    oneLiner:
      "People value things more simply because they own them.",
    origin:
      "Named by economist Richard Thaler in 1980. Daniel Kahneman, Jack Knetsch, and Thaler's 1990 experiments showed people given a coffee mug demanded about twice as much to sell it as others would pay to buy it.",
    explanation: [
      "Once something feels like ‘mine’, giving it up feels like a loss. That is why trials, test drives, and money-back guarantees are so effective.",
      "Ownership can be psychological: customising a product or using it for a while creates the same effect.",
    ],
    examples: [
      { title: "Test drives", body: "Car dealers encourage long test drives so buyers start to feel ownership." },
      { title: "Free trials", body: "A software trial that lets users import their own data makes leaving feel like losing something." },
      { title: "Home trials", body: "Furniture and eyewear brands offer home trials because few customers send items back." },
    ],
    apply: [
      "Let customers experience ownership before paying (trials, samples, demos).",
      "Encourage personalisation early.",
      "Offer easy, genuine returns — few customers use them once they own the item.",
      "Price your own assets realistically; you overvalue what you own too.",
    ],
    misread:
      "It also affects you as a seller — you may overvalue your inventory, business, or ideas.",
    question: "How could a customer start to feel ownership of your product before they buy?",
    related: ["loss-aversion", "ikea-effect", "status-quo-bias", "sunk-cost-fallacy"],
    strategySlugs: ["freemium"],
  },
  {
    slug: "ikea-effect",
    name: "IKEA Effect",
    category: "persuasion-psychology",
    oneLiner:
      "People place higher value on things they have helped create, even partly.",
    origin:
      "Named by Michael Norton, Daniel Mochon, and Dan Ariely in research published in 2012, where people valued furniture and origami they had assembled themselves far more than others did.",
    explanation: [
      "Effort creates attachment. When customers or employees put work into something, they value it more and are more committed to it.",
      "Businesses can use this through co-creation, customisation, and involving teams in designing their own processes.",
    ],
    examples: [
      { title: "Customisation", body: "A gift company that lets buyers design their own hamper sees higher satisfaction." },
      { title: "Teams", body: "Employees who help design a new process follow it more reliably than those who receive it as an order." },
      { title: "Product feedback", body: "Customers whose suggestions are built into a product become loyal advocates." },
    ],
    apply: [
      "Give customers small, satisfying ways to customise or create.",
      "Involve your team in designing the systems they will use.",
      "Ask loyal customers for input and show what you built from it.",
      "Keep the effort meaningful but not frustrating.",
    ],
    misread:
      "Too much effort becomes a burden. The effect works when the task is completed successfully.",
    question: "Where could your customers or team put a little of themselves into what you build?",
    related: ["endowment-effect", "commitment-and-consistency", "ben-franklin-effect", "unity-principle"],
    strategySlugs: ["community-led-growth"],
  },
  {
    slug: "mere-exposure-effect",
    name: "Mere Exposure Effect",
    aka: ["Familiarity principle"],
    category: "persuasion-psychology",
    oneLiner:
      "People tend to like things more the more often they are exposed to them.",
    origin:
      "Demonstrated by psychologist Robert Zajonc in 1968, who showed that repeated exposure to words, faces, and symbols increased how much people liked them.",
    explanation: [
      "Familiarity breeds comfort. Repeated, low-pressure exposure to a brand, logo, or person makes them feel safer and more likeable.",
      "This underpins brand advertising, consistent visual identity, and showing up regularly in customers' feeds and neighbourhoods.",
    ],
    examples: [
      { title: "Brand ads", body: "Consistent jingles and logos build familiarity long before a customer needs the product." },
      { title: "Local presence", body: "A business that sponsors local events becomes the familiar choice." },
      { title: "Social media", body: "Founders who post consistently build trust with followers who later become customers." },
    ],
    apply: [
      "Keep a consistent brand look and message.",
      "Show up regularly where your customers spend time.",
      "Prioritise steady frequency over occasional big bursts.",
      "Avoid overexposure that becomes annoying.",
    ],
    misread:
      "It works best for neutral or positive first impressions. Repeated exposure to something disliked can deepen dislike.",
    question: "How often does your target customer see your brand in a normal week?",
    related: ["rule-of-seven", "liking-principle", "law-of-leadership", "baader-meinhof-phenomenon"],
    link: { kind: "tool", slug: "content-calendar", label: "Plan consistent presence" },
  },
  {
    slug: "paradox-of-choice",
    name: "Paradox of Choice",
    aka: ["Choice overload"],
    category: "persuasion-psychology",
    oneLiner:
      "Too many options can overwhelm people, making them less likely to choose and less satisfied when they do.",
    origin:
      "Popularised by psychologist Barry Schwartz's 2004 book The Paradox of Choice. It draws on Sheena Iyengar and Mark Lepper's 2000 ‘jam study’, where a display of 24 jams attracted more browsers but far fewer buyers than a display of 6.",
    explanation: [
      "More choice sounds better, but beyond a point it raises effort, regret, and fear of choosing wrong. Many customers respond by choosing nothing.",
      "Later research shows the effect varies a lot: it is strongest when options are hard to compare and customers lack clear preferences.",
    ],
    examples: [
      { title: "Menus", body: "A café that trims its menu sees faster orders and fewer wasted ingredients." },
      { title: "E-commerce", body: "Filters, curated collections, and ‘bestseller’ tags help shoppers decide in large catalogues." },
      { title: "Services", body: "An agency replacing custom quotes with three fixed packages closes more deals." },
    ],
    apply: [
      "Offer a small, curated set of options for first-time buyers.",
      "Use recommendations, bestsellers, and comparisons to guide choice.",
      "Keep the full range available for experts who want it.",
      "Test simpler choice sets against your current ones.",
    ],
    misread:
      "Choice is not always bad — the issue is unstructured choice. Curation and guidance fix most of the problem.",
    question: "Are your customers choosing, or giving up because there are too many options?",
    related: ["hicks-law", "millers-law", "status-quo-bias", "law-of-diminishing-marginal-utility"],
    strategySlugs: ["decoy-effect", "bundling"],
  },
  {
    slug: "framing-effect",
    name: "Framing Effect",
    category: "persuasion-psychology",
    oneLiner:
      "The same information leads to different decisions depending on how it is presented.",
    origin:
      "Demonstrated by Amos Tversky and Daniel Kahneman in 1981 with the ‘Asian disease problem’, where people chose differently depending on whether outcomes were described as lives saved or lives lost.",
    explanation: [
      "‘90% fat-free’ sounds better than ‘10% fat’. ‘₹10 a day’ feels smaller than ‘₹3,650 a year’. The facts are identical; the frame changes the reaction.",
      "Every price, offer, and message has a frame. Choosing it deliberately — and honestly — changes how customers respond.",
    ],
    examples: [
      { title: "Subscriptions", body: "‘Just ₹199 a month’ feels lighter than ‘₹2,388 a year’." },
      { title: "Healthcare", body: "Patients accept a treatment more readily when told it has a 90% survival rate than a 10% mortality rate." },
      { title: "Discounts", body: "‘Buy one, get one free’ often outperforms ‘50% off each’ even though the value is similar." },
    ],
    apply: [
      "Write your key message in at least three frames and test them.",
      "Break large prices into daily or monthly amounts where honest.",
      "Frame benefits positively and risks of inaction clearly.",
      "Check that your frame does not mislead.",
    ],
    misread:
      "Framing is not lying, but misleading frames are. Use frames that clarify, not deceive.",
    question: "How would your offer sound if you described the same facts a completely different way?",
    related: ["anchoring-bias", "loss-aversion", "weber-fechner-law"],
    strategySlugs: ["installment-payment-framing", "win-win-framing"],
  },
  {
    slug: "weber-fechner-law",
    name: "Weber–Fechner Law",
    aka: ["Weber's law", "Just-noticeable difference"],
    category: "persuasion-psychology",
    oneLiner:
      "People notice changes relative to the starting amount, not in absolute terms — a ₹50 change matters on ₹200 but not on ₹20,000.",
    origin:
      "German physiologist Ernst Heinrich Weber found in 1834 that the smallest noticeable change in weight was a constant fraction of the original. Gustav Fechner extended it in 1860.",
    explanation: [
      "Perception is proportional. Customers barely notice small price changes on large purchases but react strongly to the same rupee change on small ones.",
      "This explains why small, gradual price increases often go unnoticed, why add-ons sell well at checkout for big purchases, and why discounts must be large enough to be felt.",
    ],
    examples: [
      { title: "Add-ons", body: "A ₹999 extended warranty feels small next to a ₹60,000 laptop." },
      { title: "Price changes", body: "A brand raises a ₹500 product to ₹520 with little reaction, but customers notice a ₹10 to ₹30 change instantly." },
      { title: "Discounts", body: "A 5% discount may not be noticed; 20% usually is." },
    ],
    apply: [
      "Offer add-ons and upgrades alongside large purchases.",
      "Make discounts big enough to cross the ‘noticeable’ threshold.",
      "Keep price increases on low-priced items gentle and well-explained.",
      "Express savings as percentages or rupees, whichever looks larger.",
    ],
    misread:
      "Using it to hide quality cuts (‘shrinkflation’) erodes trust when customers notice.",
    question: "Are your discounts large enough for customers to actually notice?",
    related: ["anchoring-bias", "framing-effect", "veblen-effect"],
    strategySlugs: ["charm-pricing"],
  },
  {
    slug: "pratfall-effect",
    name: "Pratfall Effect",
    category: "persuasion-psychology",
    oneLiner:
      "Competent people and brands become more likeable when they show a small mistake or flaw.",
    origin:
      "Social psychologist Elliot Aronson showed in 1966 that a highly competent quiz contestant who spilled coffee was rated as more likeable than one who did not.",
    explanation: [
      "Perfection feels distant. A small, honest flaw makes a competent person or brand more human and relatable.",
      "It only works if competence is already established. For someone seen as incompetent, a mistake just confirms the view.",
    ],
    examples: [
      { title: "Advertising", body: "Volkswagen's 1960s ‘Lemon’ ad openly admitted a flaw in one car, signalling strict quality checks." },
      { title: "Founders", body: "A founder who shares a mistake and how they fixed it earns more trust than one who claims perfection." },
      { title: "Service recovery", body: "A restaurant that openly apologises for a slow evening and offers a free dessert can win more loyalty than a flawless night." },
    ],
    apply: [
      "Establish real competence first.",
      "Be open about small weaknesses or trade-offs.",
      "Turn honest mistakes into stories of how you fixed them.",
      "Never fake flaws — admit real ones.",
    ],
    misread:
      "It does not excuse repeated errors. The flaw must be small and the overall competence clear.",
    question: "What small, honest weakness could you admit that would make your brand more believable?",
    related: ["streisand-effect", "liking-principle", "spotlight-effect", "halo-effect"],
  },
  {
    slug: "zeigarnik-effect",
    name: "Zeigarnik Effect",
    category: "persuasion-psychology",
    oneLiner:
      "People remember unfinished or interrupted tasks better than completed ones.",
    origin:
      "Psychologist Bluma Zeigarnik studied it in 1927 under Kurt Lewin, after noticing that waiters remembered unpaid orders better than paid ones. Later replications have been mixed, but the idea is widely used.",
    explanation: [
      "Open loops create mental tension that keeps a task on our minds until it is resolved. That is why cliffhangers, progress bars, and unfinished checklists keep attention.",
      "Businesses use this to drive completion (‘Your profile is 70% complete’) and to keep curiosity alive in content.",
    ],
    examples: [
      { title: "Onboarding", body: "A progress bar in a sign-up flow encourages users to finish setting up." },
      { title: "Content", body: "A video series ends each episode with a question answered in the next one." },
      { title: "Loyalty", body: "A punch card with two stamps already filled gets completed more often than a blank one." },
    ],
    apply: [
      "Show progress toward completion in onboarding and loyalty programmes.",
      "Start customers partway so the finish line feels close.",
      "Use open questions in content to keep audiences coming back.",
      "For yourself, write down unfinished tasks to free your mind.",
    ],
    misread:
      "Too many open loops cause stress, not engagement. Use them sparingly and close them reliably.",
    question: "Where could a progress bar or partly completed step help customers finish?",
    related: ["peak-end-rule", "commitment-and-consistency", "parkinsons-law"],
    strategySlugs: ["habit-forming-loop"],
  },
  {
    slug: "ben-franklin-effect",
    name: "Ben Franklin Effect",
    category: "persuasion-psychology",
    oneLiner:
      "People who do you a favour tend to like you more afterwards — asking for help can build a relationship.",
    origin:
      "Named after Benjamin Franklin, who described in his autobiography winning over a rival legislator by asking to borrow a rare book. Jon Jecker and David Landy tested it experimentally in 1969.",
    explanation: [
      "When people help someone, they justify it to themselves by deciding they must like that person. A small favour can turn a stranger or rival into an ally.",
      "In business, asking for advice, feedback, or a small favour can open doors that a sales pitch cannot.",
    ],
    examples: [
      { title: "Networking", body: "Asking a senior industry figure for advice often leads to a warmer relationship than asking for business." },
      { title: "Customers", body: "Asking loyal customers for feedback on a new product makes them more invested in it." },
      { title: "Teams", body: "A new manager asks a sceptical senior colleague for help and gains an ally." },
    ],
    apply: [
      "Ask key prospects or partners for their advice or opinion.",
      "Keep the favour small and easy.",
      "Thank them sincerely and show what you did with their help.",
      "Use feedback requests to deepen customer relationships.",
    ],
    misread:
      "Asking for too much, too soon backfires. The favour should be small and respectful.",
    question: "Whose advice could you ask for this week that would strengthen a key relationship?",
    related: ["reciprocity-principle", "ikea-effect", "liking-principle", "commitment-and-consistency"],
  },
];
