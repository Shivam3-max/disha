import type { Law } from "./knowledgeTypes";

export const LAWS_MARKETING: Law[] = [
  {
    slug: "law-of-leadership",
    name: "Law of Leadership (Marketing)",
    category: "marketing-ux",
    oneLiner:
      "It is better to be first in the customer's mind than to be better — the first brand in a category usually stays the leader.",
    origin:
      "One of the laws in Al Ries and Jack Trout's The 22 Immutable Laws of Marketing (1993), building on their earlier work on positioning.",
    explanation: [
      "Customers remember the first name they learn in a category and tend to use it as the reference point. Being first in the mind — not necessarily first to market — gives a brand a lasting head start.",
      "The practical point: being ‘slightly better’ than the leader rarely wins. You either get there first or reframe the category so you are first in a new one.",
    ],
    examples: [
      { title: "Brand as category", body: "Many Indians still call any adhesive ‘Fevicol’ and any photocopy a ‘Xerox’ — the first strong name became the category word." },
      { title: "Local markets", body: "The first trusted coaching institute in a town often dominates for years even when newer ones are good." },
      { title: "B2B", body: "The first vendor a procurement team trusts becomes the benchmark every rival is compared against." },
    ],
    apply: [
      "Ask whether you can be the first name in a specific category for a specific customer.",
      "If a leader exists, find a narrower or newer category you can lead.",
      "Invest in being remembered — a clear name, one message, repeated.",
      "Claim leadership credibly (‘first in Tricity to…’) only if it is true.",
    ],
    misread:
      "First-to-market is not the same as first-in-mind; many first movers were overtaken by brands that captured attention better.",
    question: "In which specific category could your brand be the first name customers think of?",
    related: ["law-of-the-category", "law-of-focus", "matthew-effect", "mere-exposure-effect"],
    strategySlugs: ["first-mover-advantage", "category-creation"],
    caseStudySlugs: ["fevicol-category-ownership"],
  },
  {
    slug: "law-of-the-category",
    name: "Law of the Category",
    category: "marketing-ux",
    oneLiner:
      "If you can't be first in a category, create a new category you can be first in.",
    origin:
      "From Al Ries and Jack Trout's The 22 Immutable Laws of Marketing (1993).",
    explanation: [
      "Customers resist hearing that you are ‘better’ than the brand they know. They are much more open to hearing what is new. So instead of fighting the leader, define a new category and lead it.",
      "New categories are often a sharper slice of an old one: a segment, a use case, or a new way of delivering the same job.",
    ],
    examples: [
      { title: "D2C brands", body: "Rather than becoming another headphone brand, boAt positioned itself around affordable, fashionable audio for young Indians." },
      { title: "Food", body: "A ‘protein snack for office-goers’ stands out more than another chips brand." },
      { title: "Services", body: "An accountant who becomes ‘the GST expert for restaurants’ owns a category no generalist firm does." },
    ],
    apply: [
      "Write the category you compete in today and who leads it.",
      "List narrower categories based on customer type, use case, or delivery format.",
      "Pick one you can credibly lead and name it simply.",
      "Market the category first, your brand second.",
    ],
    misread:
      "Inventing a category nobody needs is not a strategy — the new category must match a real customer job.",
    question: "What new category could you name where you would be the obvious first choice?",
    related: ["law-of-leadership", "law-of-focus", "hotellings-law", "says-law"],
    strategySlugs: ["category-creation", "category-of-one", "blue-ocean-strategy"],
    caseStudySlugs: ["boat-d2c-audio-brand"],
    link: { kind: "framework", slug: "positioning-statement", label: "Write your positioning" },
  },
  {
    slug: "law-of-focus",
    name: "Law of Focus",
    category: "marketing-ux",
    oneLiner:
      "The most powerful idea in marketing is to own a single word or idea in the customer's mind.",
    origin:
      "From Al Ries and Jack Trout's The 22 Immutable Laws of Marketing (1993). Their classic example is Volvo owning the word ‘safety’.",
    explanation: [
      "Customers can only hold one simple idea per brand. Brands that try to stand for quality, price, service, and innovation all at once stand for nothing.",
      "Pick the word you want to own, make every message and decision reinforce it, and be willing to give up other positions to keep it.",
    ],
    examples: [
      { title: "Automobiles", body: "Volvo built decades of marketing around one idea: safety." },
      { title: "Retail", body: "DMart's message is relentlessly about low everyday prices." },
      { title: "Local services", body: "A plumber who becomes known as ‘the one who arrives in 30 minutes’ owns speed in the neighbourhood." },
    ],
    apply: [
      "Write the one word or phrase you want customers to associate with you.",
      "Check that it is true, important to customers, and not already owned by a competitor.",
      "Align product, service, and every ad with that word.",
      "Say no to campaigns that dilute it.",
    ],
    misread:
      "Focus does not mean having only one product — it means one clear idea that unites what you sell.",
    question: "If customers could remember only one word about your brand, what would you want it to be?",
    related: ["law-of-leadership", "law-of-the-category", "rule-of-seven", "millers-law"],
    strategySlugs: ["perceptual-positioning", "niche-domination"],
    caseStudySlugs: ["dmart-cash-and-carry"],
  },
  {
    slug: "rule-of-seven",
    name: "Rule of Seven (Marketing)",
    category: "marketing-ux",
    oneLiner:
      "A prospect typically needs to see or hear a message several times — traditionally ‘seven’ — before taking action.",
    origin:
      "An old marketing rule of thumb often traced to Hollywood studio marketing in the 1930s. The number seven is a convention, not a scientific constant.",
    explanation: [
      "People are busy and distracted. One ad or one cold email rarely gets attention, let alone action. Repetition across channels builds familiarity, trust, and recall.",
      "The rule is a reminder to plan campaigns as sequences, not one-off blasts — and to be patient before judging results.",
    ],
    examples: [
      { title: "B2B outreach", body: "A sales team plans a sequence of email, call, LinkedIn message, and case study over three weeks instead of one email." },
      { title: "Local business", body: "A new clinic appears on hoardings, in WhatsApp groups, on Google Maps, and at a local event before patients walk in." },
      { title: "Retargeting", body: "An online store reminds visitors with ads and emails after their first visit." },
    ],
    apply: [
      "Map the touchpoints a prospect sees before buying.",
      "Plan at least five to seven touches across two or more channels.",
      "Vary the message (proof, offer, story) while keeping the core idea the same.",
      "Judge campaign results after the full sequence, not the first touch.",
    ],
    misread:
      "It is not a magic number; some buyers act on the first touch and others need many more. Relevance matters more than count.",
    question: "How many times does a typical customer hear from you before you give up on them?",
    related: ["mere-exposure-effect", "serial-position-effect", "law-of-focus", "banner-blindness"],
    link: { kind: "tool", slug: "content-calendar", label: "Plan repeated touchpoints" },
  },
  {
    slug: "banner-blindness",
    name: "Banner Blindness",
    category: "marketing-ux",
    oneLiner:
      "People learn to ignore anything that looks like an ad, so banner-style content is often not seen at all.",
    origin:
      "Named after a 1998 study by Jan Panero Benway and David Lane, who found users frequently missed large, prominent banners on websites. Eye-tracking research by the Nielsen Norman Group has repeatedly confirmed it.",
    explanation: [
      "Users come to a page with a goal and scan for what helps them. Anything that looks like advertising — bright banners, sidebars, pop-ups — gets filtered out automatically.",
      "For marketers, the lesson is to make important messages look like useful content, place them where attention already goes, and avoid ad-like styling for key information.",
    ],
    examples: [
      { title: "Websites", body: "A store's free-shipping offer in a flashing top banner is ignored; the same message next to the price gets noticed." },
      { title: "Email", body: "Image-heavy promotional emails are skimmed past, while plain-text notes from a founder get read." },
      { title: "Apps", body: "Users close pop-ups instantly without reading them." },
    ],
    apply: [
      "Place key messages next to what users are already looking at (price, button, product image).",
      "Avoid ad-like styling for information you need people to read.",
      "Test plain, content-style formats against flashy ones.",
      "Use native formats — stories, guides, and useful tools — over display banners.",
    ],
    misread:
      "It does not mean ads never work — it means ad-looking content gets less attention than expected.",
    question: "Is your most important offer styled like an ad your customers have learned to ignore?",
    related: ["von-restorff-effect", "rule-of-seven", "jakobs-law"],
  },
  {
    slug: "jakobs-law",
    name: "Jakob's Law",
    category: "marketing-ux",
    oneLiner:
      "Users spend most of their time on other sites, so they expect yours to work the same way as the ones they already know.",
    origin:
      "Formulated by usability expert Jakob Nielsen, co-founder of the Nielsen Norman Group, around 2000.",
    explanation: [
      "People bring expectations from every other app and website they use: where the cart icon sits, how checkout flows, what a hamburger menu does. Breaking those conventions forces them to relearn and many simply leave.",
      "Jakob's law is a strong argument for familiar patterns in anything customers use — save creativity for brand and content, not navigation.",
    ],
    examples: [
      { title: "Checkout", body: "An online store with an unusual checkout layout loses buyers who cannot find the pay button." },
      { title: "Menus", body: "A restaurant website that hides the menu behind an artistic animation frustrates hungry visitors." },
      { title: "Apps", body: "Payment apps that follow familiar UPI flows feel safer and easier to adopt." },
    ],
    apply: [
      "Use the layout conventions customers know from leading sites in your category.",
      "Put cart, search, login, and contact where people expect them.",
      "Test new designs with real users before launching.",
      "Innovate in the value you offer, not in basic navigation.",
    ],
    misread:
      "It does not ban innovation — it says change conventions only when the gain clearly outweighs the learning cost.",
    question: "What on your website or app works differently from what customers expect elsewhere?",
    related: ["hicks-law", "teslers-law", "aesthetic-usability-effect", "status-quo-bias"],
  },
  {
    slug: "hicks-law",
    name: "Hick's Law",
    aka: ["Hick–Hyman law"],
    category: "marketing-ux",
    oneLiner:
      "The time it takes to make a decision increases with the number and complexity of choices.",
    origin:
      "Psychologists William Edmund Hick (1952) and Ray Hyman (1953) showed that reaction time grows roughly logarithmically with the number of options.",
    explanation: [
      "More options mean more thinking. On menus, websites, pricing pages, and forms, each extra choice slows people down and increases the chance they choose nothing.",
      "Reducing, grouping, or highlighting options speeds decisions — which is why good menus, plan pages, and landing pages feel simple.",
    ],
    examples: [
      { title: "Pricing pages", body: "A SaaS company cuts six plans down to three and sees more sign-ups." },
      { title: "Menus", body: "A restaurant highlights four chef's specials on a long menu so diners decide faster." },
      { title: "Forms", body: "A lead form with three fields converts better than one with twelve." },
    ],
    apply: [
      "Count the choices on your key pages, menus, and forms.",
      "Remove or hide options most customers do not need.",
      "Group remaining options into clear categories.",
      "Highlight a recommended choice to shortcut the decision.",
    ],
    misread:
      "It applies to simple, comparable choices. Experts browsing a familiar catalogue may want more options, not fewer.",
    question: "How many decisions does a customer have to make before they can pay you?",
    related: ["paradox-of-choice", "millers-law", "fitts-law", "jakobs-law"],
    strategySlugs: ["decoy-effect"],
  },
  {
    slug: "fitts-law",
    name: "Fitts's Law",
    category: "marketing-ux",
    oneLiner:
      "The time to reach a target depends on its distance and size — big, close targets are fastest to hit.",
    origin:
      "Psychologist Paul Fitts published it in 1954 after studying how quickly people could move to and tap targets.",
    explanation: [
      "On screens, Fitts's law means important buttons should be large and placed where the thumb or cursor already is. Small, distant buttons are slower to hit and easier to miss.",
      "It also explains why mobile designs put primary actions at the bottom of the screen within easy thumb reach.",
    ],
    examples: [
      { title: "Mobile checkout", body: "Making the ‘Pay now’ button full-width at the bottom of the screen reduces missed taps." },
      { title: "Retail", body: "Impulse items are placed right at the billing counter — the shortest possible ‘reach’." },
      { title: "Forms", body: "Tiny checkboxes are replaced by full-row tap areas on mobile." },
    ],
    apply: [
      "Make your main call-to-action the largest clickable element.",
      "Place it close to where attention and the thumb already are.",
      "Keep destructive actions (delete, cancel) smaller and farther away.",
      "Test key flows on a real phone with one hand.",
    ],
    misread:
      "Bigger is not always better — oversized elements can crowd the page. The goal is easy reach for the right actions.",
    question: "Is your most important button the easiest thing on the page to tap?",
    related: ["hicks-law", "jakobs-law", "doherty-threshold"],
  },
  {
    slug: "millers-law",
    name: "Miller's Law",
    aka: ["The magical number seven, plus or minus two"],
    category: "marketing-ux",
    oneLiner:
      "People can hold only a few items in working memory at once — so chunk information into small groups.",
    origin:
      "Psychologist George A. Miller's 1956 paper “The Magical Number Seven, Plus or Minus Two.” Later research, notably Nelson Cowan in 2001, suggests the real limit is closer to about four chunks.",
    explanation: [
      "Working memory is small. Long lists, dense pricing tables, and complex instructions overload it, so people forget, misread, or give up.",
      "Chunking — grouping items into a few meaningful blocks — makes information easier to remember and act on. It is why phone numbers are split into groups.",
    ],
    examples: [
      { title: "Pitches", body: "A salesperson structures a pitch around three benefits instead of listing twelve features." },
      { title: "Onboarding", body: "A new-employee checklist is split into Day 1, Week 1, and Month 1 blocks." },
      { title: "Navigation", body: "A website groups 30 product types into five clear categories." },
    ],
    apply: [
      "Limit key messages to three to five points.",
      "Group long lists into labelled chunks.",
      "Break processes into stages with a few steps each.",
      "Put the most important item first or last, where memory is strongest.",
    ],
    misread:
      "It does not mean menus should have exactly seven items — the point is to reduce memory load, not hit a number.",
    question: "How many things are you asking customers to remember at once?",
    related: ["hicks-law", "serial-position-effect", "law-of-proximity", "curse-of-knowledge"],
  },
  {
    slug: "teslers-law",
    name: "Tesler's Law",
    aka: ["Law of conservation of complexity"],
    category: "marketing-ux",
    oneLiner:
      "Every system has a certain amount of complexity that cannot be removed — only moved between the user and the business.",
    origin:
      "Attributed to computer scientist Larry Tesler, who worked at Xerox PARC and Apple, from the mid-1980s.",
    explanation: [
      "Some complexity is essential: a loan still needs income checks, a delivery still needs an address. The question is who handles it — the customer, or your systems and staff.",
      "Great products absorb complexity on the business side so the customer experience feels simple.",
    ],
    examples: [
      { title: "Taxes", body: "Accounting software that pre-fills GST data handles complexity so the shop owner doesn't have to." },
      { title: "Travel", body: "A tour operator handles visas, transfers, and bookings, so the customer only chooses dates." },
      { title: "Forms", body: "An insurer fetches vehicle details from the registration number instead of asking ten questions." },
    ],
    apply: [
      "List the complex steps in your customer's journey.",
      "Decide which ones your team or systems can absorb.",
      "Use defaults, pre-filling, and smart automation to remove work from the customer.",
      "Accept that simplifying for customers may add work internally — and price for it.",
    ],
    misread:
      "It does not mean complexity can never be reduced — accidental complexity can be removed; essential complexity can only be moved.",
    question: "What complexity are your customers carrying that your business could carry for them?",
    related: ["galls-law", "jakobs-law", "occams-razor", "hicks-law"],
    link: { kind: "framework", slug: "cx-touchpoints", label: "Map your customer touchpoints" },
  },
  {
    slug: "doherty-threshold",
    name: "Doherty Threshold",
    category: "marketing-ux",
    oneLiner:
      "Productivity and engagement soar when a system responds in under about 400 milliseconds.",
    origin:
      "From a 1982 IBM paper by Walter J. Doherty and Ahrvind J. Thadani, which challenged the then-common two-second response standard.",
    explanation: [
      "When a system responds almost instantly, people stay in flow and keep going. When it lags, attention breaks, frustration rises, and they abandon tasks.",
      "For online businesses, speed is a conversion feature. Slow pages and laggy apps quietly lose customers.",
    ],
    examples: [
      { title: "E-commerce", body: "A store that cuts page load time sees more product views per visit and fewer abandoned carts." },
      { title: "Apps", body: "Showing an instant skeleton screen while data loads makes the app feel faster." },
      { title: "Customer service", body: "Instant acknowledgement of a WhatsApp query reduces repeat messages, even if the full answer takes longer." },
    ],
    apply: [
      "Measure how long key pages and actions take to respond.",
      "Speed up the slowest steps in your conversion path first.",
      "Give instant feedback (loading states, confirmations) when real work takes longer.",
      "Treat speed as a feature in product decisions.",
    ],
    misread:
      "400ms is a guideline, not a hard cliff. The principle is that faster feedback keeps people engaged.",
    question: "How long does a customer wait between clicking and seeing something happen on your site?",
    related: ["fitts-law", "peak-end-rule", "aesthetic-usability-effect"],
  },
  {
    slug: "aesthetic-usability-effect",
    name: "Aesthetic-Usability Effect",
    category: "marketing-ux",
    oneLiner:
      "People perceive attractive designs as easier to use and are more forgiving of their flaws.",
    origin:
      "Researchers Masaaki Kurosu and Kaori Kashimura at Hitachi's Design Center reported it in 1995 after testing ATM interface layouts.",
    explanation: [
      "Beauty creates a positive first impression that colours how people judge everything else. An attractive product feels more trustworthy, and small usability issues are tolerated.",
      "This is powerful but risky: a pretty design can hide real problems in testing, because users blame themselves rather than the product.",
    ],
    examples: [
      { title: "Packaging", body: "A food brand redesigns tired packaging and customers describe the same product as ‘better quality’." },
      { title: "Websites", body: "A well-designed site makes a small business look more established and trustworthy." },
      { title: "Showrooms", body: "A clean, well-lit store makes customers more patient with slow service." },
    ],
    apply: [
      "Invest in visual quality at the points where first impressions form.",
      "Use consistent, clean design to build trust.",
      "In user testing, watch behaviour, not just what users say they like.",
      "Do not let good looks hide functional problems.",
    ],
    misread:
      "Aesthetics do not replace usability — they buy patience, not permanent loyalty.",
    question: "Does your brand look as trustworthy as the quality you actually deliver?",
    related: ["halo-effect", "jakobs-law", "peak-end-rule", "law-of-proximity"],
    strategySlugs: ["brand-moat"],
    link: { kind: "framework", slug: "brand-signals", label: "Audit your brand signals" },
  },
  {
    slug: "von-restorff-effect",
    name: "Von Restorff Effect",
    aka: ["Isolation effect"],
    category: "marketing-ux",
    oneLiner:
      "When several similar items are present, the one that differs from the rest is most likely to be remembered.",
    origin:
      "German psychologist Hedwig von Restorff demonstrated it in 1933 with memory experiments on lists of items.",
    explanation: [
      "Distinctive things stand out and stick. A single red item in a list of black ones, a surprising headline, or an unusual package design captures attention and memory.",
      "In marketing and design, use contrast deliberately for the one thing you most want noticed — overuse it and nothing stands out.",
    ],
    examples: [
      { title: "Pricing", body: "A ‘Most popular’ plan highlighted in a different colour draws most clicks." },
      { title: "Shelves", body: "A brand in bold colours stands out in a category where every pack is similar." },
      { title: "Ads", body: "An unexpected ad format gets remembered when everything else looks the same." },
    ],
    apply: [
      "Choose the single most important element on a page or pack.",
      "Make it visually different through colour, size, or shape.",
      "Keep surrounding elements consistent so the contrast works.",
      "Study competitors and look for a distinctive look in your category.",
    ],
    misread:
      "Highlighting everything highlights nothing. Contrast only works if it is rare.",
    question: "What on your page or shelf actually stands out from everything around it?",
    related: ["banner-blindness", "serial-position-effect", "law-of-proximity", "peak-end-rule"],
  },
  {
    slug: "serial-position-effect",
    name: "Serial Position Effect",
    aka: ["Primacy and recency effects"],
    category: "marketing-ux",
    oneLiner:
      "People best remember the first and last items in a series, and tend to forget the middle.",
    origin:
      "First described by Hermann Ebbinghaus in his memory studies in the 1880s; B. B. Murdock's 1962 free-recall experiments showed the classic U-shaped curve.",
    explanation: [
      "Primacy — the first items — get extra attention and rehearsal. Recency — the last items — are still fresh in memory. The middle gets lost.",
      "Place your most important points at the start and end of pitches, pages, menus, and presentations.",
    ],
    examples: [
      { title: "Sales pitches", body: "A salesperson opens with the biggest benefit and closes with the strongest proof." },
      { title: "Navigation", body: "Websites put the most important links at the left and right ends of the menu." },
      { title: "Interviews", body: "Candidates seen first or last are often remembered more vividly." },
    ],
    apply: [
      "Put your strongest message first.",
      "Repeat or summarise it at the end.",
      "Move less important details into the middle.",
      "Be aware of order effects when you evaluate options or people.",
    ],
    misread:
      "The middle is not worthless — it is just weaker in memory. Use it for supporting detail.",
    question: "What do customers hear first and last in your pitch?",
    related: ["peak-end-rule", "millers-law", "von-restorff-effect", "anchoring-bias"],
  },
  {
    slug: "peak-end-rule",
    name: "Peak-End Rule",
    category: "marketing-ux",
    oneLiner:
      "People judge an experience mostly by how it felt at its most intense moment and at its end, not by the average.",
    origin:
      "Proposed by Daniel Kahneman and Barbara Fredrickson in 1993; Donald Redelmeier and Kahneman's 1996 study of colonoscopy patients is the classic demonstration.",
    explanation: [
      "Memory is not a full recording. People remember the peak (best or worst moment) and the ending. A long, decent experience with a bad ending is remembered as bad.",
      "Businesses can design experiences with deliberate high points and strong endings — the last interaction often shapes the review.",
    ],
    examples: [
      { title: "Restaurants", body: "A free dessert or warm goodbye at the end lifts how the whole meal is remembered." },
      { title: "Service", body: "A support agent who ends a frustrating call with a clear fix and a follow-up leaves a better memory than the wait suggested." },
      { title: "Theme parks", body: "Parks place fireworks and parades at the end of the day to finish on a high." },
    ],
    apply: [
      "Map your customer experience and mark its peaks and the ending.",
      "Design at least one ‘wow’ moment.",
      "Make the last interaction — delivery, invoice, goodbye — warm and smooth.",
      "Fix the worst moment first, since it can become the remembered peak.",
    ],
    misread:
      "It does not mean the middle doesn't matter — a terrible middle can become the remembered peak.",
    question: "How does your customer's experience with you end?",
    related: ["serial-position-effect", "zeigarnik-effect", "doherty-threshold", "reciprocity-principle"],
    link: { kind: "framework", slug: "cx-touchpoints", label: "Design your experience peaks" },
  },
  {
    slug: "law-of-proximity",
    name: "Gestalt Law of Proximity",
    category: "marketing-ux",
    oneLiner:
      "Objects placed close together are seen as belonging to the same group.",
    origin:
      "One of the Gestalt principles of perception developed by German psychologists including Max Wertheimer, Wolfgang Köhler, and Kurt Koffka in the 1910s–1920s.",
    explanation: [
      "The brain groups things automatically based on spacing. Elements near each other feel related; elements far apart feel separate.",
      "Good layouts use spacing — not just lines and boxes — to show what belongs together, making pages easier to scan and understand.",
    ],
    examples: [
      { title: "Forms", body: "Placing each label right next to its field reduces form errors." },
      { title: "Retail", body: "Shops place related items near each other — chips next to cold drinks — to suggest they go together." },
      { title: "Pricing", body: "Keeping a plan's price close to its features makes comparison easier." },
    ],
    apply: [
      "Group related information with tight spacing.",
      "Separate unrelated groups with clear white space.",
      "Place labels, prices, and buttons next to what they refer to.",
      "Use physical proximity in stores to suggest product pairings.",
    ],
    misread:
      "It is about perceived grouping, not decoration — adding more borders often does less than adjusting space.",
    question: "Does the spacing on your page show customers what belongs together?",
    related: ["millers-law", "aesthetic-usability-effect", "von-restorff-effect"],
    strategySlugs: ["bundling"],
  },
];
