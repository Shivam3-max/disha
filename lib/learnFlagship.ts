import type { LearnDay } from "./learn";

export const FLAGSHIP_WEEKS: LearnDay[] = [
  {
    day: 1,
    track: "flagship",
    slug: "flagship-the-reset",
    title: "The reset: from learner to builder",
    subtitle: "Trade the course mindset for an operator mindset before touching any framework",
    suggestedJourney: "busy-but-not-moving",
    lessons: [
      {
        heading: "Information isn't capability",
        body: [
          "Collecting more marketing tips, more AI tricks, and more leadership quotes feels like progress but rarely changes outcomes. Capability shows up as a completed asset — a persona document, a live landing page, a signed customer — not as a page of notes.",
          "The useful question after any lesson isn't 'did I understand this?' but 'what will I build with it this week, and what evidence will prove I did?' Builders default to output; learners default to more input.",
        ],
      },
      {
        heading: "Modern businesses win on five levers, not one",
        body: [
          "Attention, trust, offer, conversion, and retention are the five things every growing business is doing well simultaneously — not sequentially. A business with brilliant attention but a weak offer burns money on traffic that never converts; a business with a great offer but no attention starves quietly.",
          "Auditing any business — including your own — starts with rating each of the five honestly, then fixing the lowest one first rather than polishing whichever one already feels comfortable.",
        ],
      },
      {
        heading: "AI is leverage, not a replacement for judgment",
        body: [
          "Treated well, AI compresses the time between an idea and a usable first draft — research, copy, a website outline, a workflow map. Treated badly, it becomes a way to skip thinking entirely and ship generic output nobody asked for.",
          "The reliable pattern is research → draft with AI → refine with your own judgment and specific customer knowledge → deploy. The refine step is where a builder's understanding of their actual market turns a generic AI draft into something only their business could have produced.",
        ],
      },
      {
        heading: "Clarity creates speed",
        body: [
          "Confusion about what you're building and who it's for is the single biggest cause of slow execution — every task takes longer when you're also silently deciding direction. A clear one-line statement of who you serve and what you're building removes that hidden tax on every decision afterward.",
          "This is worth writing down explicitly, even if it changes in a month: a wrong-but-clear direction can be corrected fast; no direction can't be corrected at all because there's nothing to test against reality.",
        ],
      },
    ],
    quiz: [
      {
        q: "A student finishes reading ten articles on positioning but hasn't written a single positioning statement. In the builder mindset, this is best described as:",
        options: [
          "Real progress, since understanding always comes first",
          "Input without capability — nothing changed until an asset exists",
          "Unnecessary, since positioning doesn't matter",
          "The correct amount of preparation before acting",
        ],
        correct: 1,
        explain: "Capability shows up as a built asset, not as consumed information — the ten articles are input, not output.",
      },
      {
        q: "A business has excellent ads driving heavy traffic, but very few people buy once they land on the page. Which lever is most likely broken?",
        options: ["Attention", "Offer or conversion", "Retention", "None — traffic alone means it's working"],
        correct: 1,
        explain: "High attention with poor results points to a weak offer or a broken conversion path, not an attention problem.",
      },
      {
        q: "Which best describes the reliable way to use AI in business building?",
        options: [
          "Use whatever AI produces first, unedited",
          "Avoid AI entirely to preserve originality",
          "Research, draft with AI, then refine with your own specific market judgment before deploying",
          "Only use AI for final published content, never for early drafts",
        ],
        correct: 2,
        explain: "AI accelerates the draft stage; human judgment and specific customer knowledge in the refine stage is what makes the output usable.",
      },
      {
        q: "Why does a clear (even if eventually wrong) direction beat no direction at all?",
        options: [
          "Wrong directions are never actually corrected",
          "A clear direction can be tested and corrected against reality; no direction has nothing to test",
          "Clarity guarantees success",
          "Direction doesn't affect execution speed",
        ],
        correct: 1,
        explain: "Confusion taxes every decision; a stated direction, even if later revised, gives you something concrete to check against results.",
      },
    ],
  },
  {
    day: 2,
    track: "flagship",
    slug: "flagship-customer-market-intelligence",
    title: "Seeing the market like a builder, not a visitor",
    subtitle: "Customer research, field observation, and design thinking replace assumption with evidence",
    suggestedJourney: "customers-dont-come-back",
    lessons: [
      {
        heading: "What customers say and what they do are different data sets",
        body: [
          "Interviews reveal stated preferences; behaviour reveals revealed preferences, and the two often disagree — people say they want the healthy option and buy the indulgent one. Strong customer research treats interviews as a starting hypothesis and watches actual behaviour (reviews, complaints, purchase patterns) as the correction.",
          "A pain map organized by desire, frustration, trigger, and barrier turns scattered customer comments into a structured picture you can design against, rather than a pile of anecdotes.",
        ],
      },
      {
        heading: "Field observation trains an eye most founders never develop",
        body: [
          "Visiting real businesses as a trained observer — not a customer — means watching for offer clarity, staff behaviour, pricing cues, trust signals, objections customers voice out loud, and the general 'feel' of the place. Most founders only ever experience competitors as customers, missing everything happening behind the transaction.",
          "The habit worth building: after any purchase anywhere, spend thirty seconds noting one thing that business did to earn or lose your trust. Repeated often enough, this becomes a genuine pattern library.",
        ],
      },
      {
        heading: "A persona is a decision-making tool, not a demographic sheet",
        body: [
          "A persona earns its keep when it resolves a real disagreement — which headline to use, which price to lead with, which channel to prioritize — by asking 'what would this specific person actually do?' A persona that's just age, income, and job title decides nothing.",
          "Most purchases also involve more than the buyer: an influencer, a decision-maker, and sometimes an approver who never speaks to you directly. Mapping this decision-making unit prevents building a pitch that convinces the wrong person in the room.",
        ],
        applyLink: { kind: "framework", slug: "customer-money-model", label: "Map your customer's decision drivers" },
      },
      {
        heading: "Competitor analysis is a search for white space, not a copy exercise",
        body: [
          "Watching what competitors post is the shallow version of competitor analysis. The useful version audits their offers, pricing, proof, and positioning across an entire category, then asks: what is everyone in this category saying, and what is nobody saying?",
          "The gap nobody is filling is usually more valuable than the crowded claim everyone is already making — differentiation lives in the unclaimed space, not in doing the same thing slightly better.",
        ],
      },
    ],
    quiz: [
      {
        q: "A customer says in an interview they'd love a healthier snack option, but sales data shows they consistently buy the indulgent one. What should this business trust more?",
        options: [
          "The stated preference from the interview",
          "The revealed preference from actual purchase behaviour",
          "Neither — the data is contradictory and unusable",
          "Whichever answer the founder personally prefers",
        ],
        correct: 1,
        explain: "Stated and revealed preferences often diverge; actual behaviour is the stronger signal for what people will really do.",
      },
      {
        q: "What separates a useful persona from a decorative one?",
        options: [
          "How many demographic details it lists",
          "Whether it can resolve a real decision by predicting what this specific person would do",
          "How professionally designed the persona document looks",
          "Whether it was built using AI",
        ],
        correct: 1,
        explain: "A persona earns its value by settling real disagreements about messaging, pricing, or channel — not by decorative detail.",
      },
      {
        q: "In a B2B sale, the person who uses the product daily is not the person who approves the budget. Ignoring this distinction risks:",
        options: [
          "Nothing — all buyers behave identically",
          "Building a pitch that convinces the wrong person in the decision-making unit",
          "Only affects consumer businesses, not B2B",
          "Making the sales cycle faster",
        ],
        correct: 1,
        explain: "Mapping the full decision-making unit (user, influencer, decision-maker, approver) prevents winning over someone who can't actually say yes.",
      },
      {
        q: "The most valuable output of a competitor category audit is usually:",
        options: [
          "A list of features to copy immediately",
          "Identifying the white space — what nobody in the category is saying or offering",
          "Proof that your product is already the best",
          "A reason to lower your prices",
        ],
        correct: 1,
        explain: "Differentiation tends to live in the unclaimed space a category has collectively ignored, not in incremental copying.",
      },
    ],
  },
  {
    day: 3,
    track: "flagship",
    slug: "flagship-positioning-offer-differentiation",
    title: "Why should anyone choose you?",
    subtitle: "Positioning, honest strategic thinking, and an offer people actually want",
    suggestedJourney: "competitor-could-copy-me",
    lessons: [
      {
        heading: "Positioning is a claim about perception, not a claim about product",
        body: [
          "Two identical products can occupy completely different positions in the customer's mind depending on the story told around them — one 'the affordable choice', another 'the trusted expert'. Weak positioning doesn't mean a bad product; it means marketing has to work far harder and spend far more to explain something that should have been obvious.",
          "A workable positioning statement names the audience, the promise, and the proof in one sentence — vague enough claims ('quality you can trust') fail this test because they apply equally to every competitor.",
        ],
        applyLink: { kind: "framework", slug: "positioning-statement", label: "Draft your own positioning rewrite" },
      },
      {
        heading: "Strategy done honestly, not generically",
        body: [
          "A real strategic review separates internal reality (what the business can actually execute) from external reality (what the market and competitors are doing), then names two or three strategic drivers — the specific moves that would actually change the trajectory, not a generic list of strengths and weaknesses nobody will act on.",
          "The test of a real strategy session: could a stranger read the output and know exactly what to do differently next quarter? If the answer is a polished but vague deck, the session produced a document, not a strategy.",
        ],
      },
      {
        heading: "An offer is engineered, not just priced",
        body: [
          "The gap between a mediocre offer and a compelling one is rarely the core product — it's the bonuses, the risk reversal, the urgency, and the way value is packaged and explained. The same service sold as 'consulting hours' and sold as 'a done-for-you outcome with a guarantee' can command very different prices from the same buyer.",
          "Offer laddering — a lower entry offer, a core offer, and a premium offer — lets different customers self-select their commitment level instead of forcing everyone through one take-it-or-leave-it price.",
        ],
      },
    ],
    quiz: [
      {
        q: "Two competitors sell nearly identical products, but one dominates the category. This is most likely explained by:",
        options: [
          "The dominant one has a technically superior product",
          "Positioning and perception, not necessarily the product itself",
          "Pure luck with no pattern behind it",
          "Lower pricing always wins regardless of positioning",
        ],
        correct: 1,
        explain: "Identical products can occupy very different positions in the customer's mind based on the story and claim built around them.",
      },
      {
        q: "'Quality you can trust' fails as a positioning statement mainly because:",
        options: [
          "It's too specific",
          "It could apply equally to every competitor in the category",
          "It's too long",
          "It doesn't mention the price",
        ],
        correct: 1,
        explain: "Vague claims that any competitor could equally make don't actually differentiate you in the customer's mind.",
      },
      {
        q: "What separates a real strategy session from a generic one that produces a polished but useless deck?",
        options: [
          "How many slides it contains",
          "Whether a stranger reading the output would know exactly what to do differently next quarter",
          "Whether it uses SWOT specifically",
          "How long the meeting lasted",
        ],
        correct: 1,
        explain: "A real strategic output is actionable and specific enough that someone unfamiliar with the business could act on it directly.",
      },
      {
        q: "Offer laddering (entry / core / premium) primarily helps by:",
        options: [
          "Forcing every customer to the highest price",
          "Letting different customers self-select their own commitment level",
          "Making pricing more confusing on purpose",
          "Replacing the need for a core offer",
        ],
        correct: 1,
        explain: "A ladder gives customers multiple entry points instead of one rigid price, capturing buyers at different readiness levels.",
      },
    ],
  },
  {
    day: 4,
    track: "flagship",
    slug: "flagship-digital-identity-content-trust",
    title: "Building a presence that signals competence",
    subtitle: "Profiles, portfolios, content pillars, and the proof that makes strangers trust you",
    lessons: [
      {
        heading: "Credibility is judged before a word is read",
        body: [
          "A profile, a website, or a portfolio is assessed for trustworthiness in seconds — before anyone reads a single claim — through headline clarity, visual consistency, and whether the basic proof (results, testimonials, work samples) is even present. A brilliant offer attached to a thin, inconsistent profile loses credibility it never gets a chance to earn back.",
          "The fastest credibility fix is rarely a redesign — it's filling in the gaps that make a stranger pause: a missing bio, no visible proof, no clear way to make contact.",
        ],
      },
      {
        heading: "Content needs pillars before it needs volume",
        body: [
          "Random posting fails not because of low effort but because of no purpose — each post exists in isolation instead of building toward a recognizable expertise. A small set of content pillars (three or four themes you consistently return to) does more for brand recall than daily posting without a pattern.",
          "A useful mix leans mostly educational and proof-driven, occasionally personal or behind-the-scenes, and rarely purely promotional — audiences tolerate a business account that mostly helps them and occasionally sells, not the reverse.",
        ],
      },
      {
        heading: "Attention needs a hook; retention needs a reason to keep watching",
        body: [
          "The first few seconds of any piece of content decide whether it gets consumed at all — a hook built on tension, curiosity, contradiction, or a sharp pain point earns that initial attention that a slow, polite opening doesn't. But a strong hook attached to a hollow middle just trains the audience to stop trusting your hooks.",
          "Good storytelling in business content follows a simple shape: a relatable starting point, a specific friction or struggle, and a concrete resolution or lesson — this shape works whether the story is thirty seconds or five minutes long.",
        ],
      },
      {
        heading: "Proof is often more persuasive than a persuasive pitch",
        body: [
          "A specific, believable testimonial or before/after case beats a well-written claim about your own quality, because customers trust other customers more than they trust the seller. Weak testimonials ('great service!') do almost nothing; specific ones ('cut our delivery time from 3 days to 6 hours') do the actual convincing.",
          "Collecting proof shouldn't wait for a large customer base — even a handful of specific, well-documented results early on gives new prospects the evidence a strong claim alone can't provide.",
        ],
      },
    ],
    quiz: [
      {
        q: "A visitor decides whether to trust a profile within a few seconds, mostly based on:",
        options: [
          "Reading every word of the bio carefully",
          "Headline clarity, visual consistency, and visible proof, before any claim is even read",
          "The number of followers alone",
          "Nothing — trust always requires a full conversation",
        ],
        correct: 1,
        explain: "First impressions of credibility form fast, driven by clarity and visible proof rather than detailed reading.",
      },
      {
        q: "Why does random daily posting without content pillars usually underperform?",
        options: [
          "Posting too often is always penalized by platforms",
          "Each post exists in isolation instead of building a recognizable, repeated expertise",
          "Daily posting is illegal on most platforms",
          "Audiences prefer accounts that never post",
        ],
        correct: 1,
        explain: "Without a small set of consistent themes, content fails to build the recognizable pattern that creates brand recall.",
      },
      {
        q: "A video opens with a strong hook but the middle has nothing valuable to say. The likely long-term effect is:",
        options: [
          "No effect — hooks are all that matter",
          "The audience learns to distrust future hooks from this account",
          "Guaranteed higher engagement regardless of content",
          "The video will always go viral anyway",
        ],
        correct: 1,
        explain: "A hook creates an expectation; consistently failing to deliver on it trains the audience to discount future hooks.",
      },
      {
        q: "Why does a specific testimonial ('cut delivery time from 3 days to 6 hours') outperform a vague one ('great service')?",
        options: [
          "It's shorter",
          "Specific, measurable proof is more believable and does more actual convincing than a generic compliment",
          "Vague testimonials are against platform policy",
          "There's no real difference in persuasive power",
        ],
        correct: 1,
        explain: "Specificity signals authenticity and gives prospects concrete evidence, unlike generic praise that could be written about anyone.",
      },
    ],
  },
  {
    day: 5,
    track: "flagship",
    slug: "flagship-demand-generation-content-systems",
    title: "Turning attention into a demand engine",
    subtitle: "Content becomes an asset when it's systemized, not improvised",
    lessons: [
      {
        heading: "Demand generation is different from visibility",
        body: [
          "Being seen and being wanted are not the same outcome — a viral post can generate enormous visibility and zero inquiries if it never connects to an offer. A genuine demand engine maps a path from awareness content (educational, broad reach) through consideration content (proof, comparisons) into content that directly invites a next step.",
          "Most creators over-invest in awareness content because it's the most rewarding to make, and under-invest in the consideration and conversion layers that actually produce customers.",
        ],
      },
      {
        heading: "A content calendar is a production system, not a wish list",
        body: [
          "A calendar that only lists topics still leaves the hardest questions unanswered: which platform, which format, what's the goal of this specific piece, and what happens after someone engages with it. A real content operating system assigns all four to every planned piece, plus a review step to catch what's actually working.",
          "Batching production (writing or filming several pieces in one sitting) protects consistency far better than daily improvisation, which collapses the first time a busy week arrives.",
        ],
        applyLink: { kind: "framework", slug: "content-engine", label: "Set up your own content system" },
      },
      {
        heading: "Unconventional attention still needs judgment",
        body: [
          "Creative marketing — pattern interrupts, seasonal hooks, regional cultural moments — earns disproportionate attention relative to spend, precisely because it breaks the pattern audiences have learned to scroll past. But the same boldness that earns attention can just as easily earn backlash if it misjudges taste, timing, or the audience's actual values.",
          "A useful filter before publishing anything unconventional: would this still feel proud and defensible a year from now, regardless of how much attention it gets this week?",
        ],
      },
    ],
    quiz: [
      {
        q: "A post goes viral with huge reach but generates almost no inquiries. This most likely reveals:",
        options: [
          "The content was too high quality",
          "Visibility without a connected path to an offer isn't the same as demand generation",
          "Viral content never converts, by definition",
          "The business should stop making content entirely",
        ],
        correct: 1,
        explain: "Demand requires a path from awareness through consideration into a next step — visibility alone doesn't guarantee that path exists.",
      },
      {
        q: "What's missing from a content calendar that only lists post topics?",
        options: [
          "Nothing — topics are the only thing that matters",
          "Platform, format, the specific goal of each piece, and what happens after engagement",
          "Only the publishing date is missing",
          "Content calendars should never include planning",
        ],
        correct: 1,
        explain: "A real content operating system defines the full path from creation through post-engagement action, not just what to talk about.",
      },
      {
        q: "Why does batching content production tend to protect consistency better than daily improvisation?",
        options: [
          "Batching produces worse quality content",
          "Daily improvisation collapses the first time a busy or difficult week arrives",
          "Batching is required by social platforms",
          "There's no real difference between the two approaches",
        ],
        correct: 1,
        explain: "Producing several pieces in one sitting builds a buffer that survives busy weeks, unlike daily on-the-spot creation.",
      },
      {
        q: "Before publishing a bold, unconventional campaign idea, the most useful filter is:",
        options: [
          "Whether it will definitely go viral",
          "Whether you'd still feel proud and defensible about it a year from now, regardless of attention gained",
          "Whether a competitor has done something similar",
          "Whether it costs less than a traditional ad",
        ],
        correct: 1,
        explain: "Boldness that earns attention can also earn backlash — judging it by long-term defensibility catches taste and timing risks in advance.",
      },
    ],
  },
  {
    day: 6,
    track: "flagship",
    slug: "flagship-campaigns-creative-marketing",
    title: "Creating attention people actually remember",
    subtitle: "Campaign thinking beats isolated posts, but memorability has to be earned honestly",
    lessons: [
      {
        heading: "A campaign is a system; a post is a single event",
        body: [
          "An isolated post lives and dies in one scroll. A campaign links an objective, an audience, a creative idea, a set of assets, a distribution plan, and a call to action into one coordinated push — which is why campaigns can build momentum a single post never can, even with the same creative quality.",
          "Before building any campaign asset, naming the objective and the single audience it's for prevents the common failure of a technically great campaign that nobody specific was actually meant for.",
        ],
      },
      {
        heading: "Most campaigns are forgotten because they aren't built to be remembered",
        body: [
          "Memorable campaigns tend to use a pattern interrupt — something that breaks the expected flow of the category — combined with a genuine cultural or emotional hook, not just a bigger budget. A predictable campaign executed perfectly is still forgettable; an unexpected idea executed roughly is often more memorable.",
          "Seasonal and regional relevance multiply a campaign's resonance because they tap into something the audience already feels strongly about, rather than asking them to feel something new from scratch.",
        ],
        applyLink: { kind: "framework", slug: "ad-campaign-blueprint", label: "Build your own campaign blueprint" },
      },
      {
        heading: "Bold attention still has an ethical floor",
        body: [
          "Unconventional marketing sits on a spectrum from clever and memorable to manipulative and damaging, and the difference isn't cleverness — it's honesty and respect for the audience. A campaign that generates attention by deceiving or offending buys short-term reach at the cost of long-term trust, which is far harder to rebuild than to earn the first time.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why can a campaign build momentum that a single strong post typically can't?",
        options: [
          "Campaigns always have bigger budgets",
          "A campaign coordinates objective, audience, assets, and distribution into one system rather than one isolated event",
          "Posts are inherently lower quality than campaigns",
          "There's no real difference between the two",
        ],
        correct: 1,
        explain: "A campaign's coordinated structure compounds attention over time in a way an isolated post cannot.",
      },
      {
        q: "What most reliably makes a campaign memorable rather than forgettable?",
        options: [
          "Spending the largest possible budget",
          "A pattern interrupt combined with a genuine emotional or cultural hook",
          "Following the exact same format as competitors",
          "Avoiding any regional or seasonal reference",
        ],
        correct: 1,
        explain: "Predictable execution, even done well, is easy to forget — breaking the expected pattern with real emotional relevance is what sticks.",
      },
      {
        q: "A campaign generates huge attention by mildly deceiving its audience about what's being offered. What's the likely longer-term cost?",
        options: [
          "None — attention is always worth it",
          "Trust damage that is harder to rebuild than the attention was to earn",
          "Guaranteed higher sales with no downside",
          "Competitors will be unable to respond",
        ],
        correct: 1,
        explain: "Attention earned through deception trades short-term reach for long-term trust, which is far more costly to repair.",
      },
      {
        q: "Before creating campaign assets, naming the objective and specific audience mainly prevents:",
        options: [
          "Spending any money on the campaign",
          "A technically well-made campaign that isn't actually built for anyone specific",
          "The need for any creative concept",
          "Using AI in the process",
        ],
        correct: 1,
        explain: "Without a defined objective and audience, even great creative execution can miss the mark on who it was supposed to move.",
      },
    ],
  },
  {
    day: 7,
    track: "flagship",
    slug: "flagship-sales-conversion-persuasion",
    title: "Attention is wasted if it doesn't convert",
    subtitle: "Sales as diagnosis and conviction, not performance and pressure",
    suggestedJourney: "sales-have-stalled",
    lessons: [
      {
        heading: "Sales conviction is built on understanding, not enthusiasm",
        body: [
          "A salesperson who deeply understands the product and the customer's actual situation sells with a calm certainty that pure enthusiasm can't fake — customers can tell the difference between someone performing confidence and someone who genuinely knows their offer solves this specific problem. Product knowledge and customer understanding are the real inputs to conviction, not tone of voice.",
          "This is why the strongest salespeople often ask more questions early in a conversation than they make claims — diagnosis has to happen before conviction can be honest.",
        ],
      },
      {
        heading: "Objections are information, not obstacles",
        body: [
          "'I'll think about it' rarely means what it says — it's usually a proxy for an unstated concern about price, timing, trust, or fit that the customer hasn't voiced directly. Treating this literally (backing off and waiting) wastes the opportunity to actually surface and resolve the real hesitation.",
          "A useful discipline is naming the likely category of objection out loud and inviting the customer to correct you — 'is it more about budget, or about timing?' — which often unlocks the honest answer politeness was hiding.",
        ],
      },
      {
        heading: "Risk reversal removes the reason to say no",
        body: [
          "Every purchase has an implicit fear attached — of wasting money, of the product not working, of being judged for a bad decision. A clear guarantee, trial period, or replacement policy directly answers that fear instead of hoping the customer overcomes it on their own.",
          "The strongest offers pair risk reversal with genuine urgency (a real deadline or real scarcity, not a manufactured one) — removing fear and giving a reason not to delay work together; either alone is weaker.",
        ],
      },
    ],
    quiz: [
      {
        q: "What actually produces sales conviction, according to this lesson?",
        options: [
          "Speaking with maximum enthusiasm regardless of product fit",
          "Deep product knowledge combined with genuine understanding of the customer's situation",
          "Reading from a fixed script without deviation",
          "Avoiding questions to keep the pitch moving quickly",
        ],
        correct: 1,
        explain: "Customers sense the difference between performed enthusiasm and grounded certainty that comes from real understanding.",
      },
      {
        q: "When a customer says 'I'll think about it,' the most useful response is usually to:",
        options: [
          "Accept it literally and end the conversation",
          "Gently name the likely real concern and invite them to correct you",
          "Immediately lower the price",
          "Repeat the same pitch louder",
        ],
        correct: 1,
        explain: "This phrase is often a proxy for an unstated concern — inviting clarification surfaces the real objection politeness was hiding.",
      },
      {
        q: "Why does risk reversal (guarantees, trials) work best when paired with genuine urgency, rather than either alone?",
        options: [
          "They cancel each other out",
          "Risk reversal removes fear while urgency removes the reason to delay — together they address two separate blockers",
          "Urgency alone is always sufficient",
          "Guarantees make urgency unnecessary",
        ],
        correct: 1,
        explain: "Fear of a bad decision and simple procrastination are two different blockers; addressing only one leaves the other in place.",
      },
      {
        q: "A salesperson who asks several diagnostic questions before making any claims is:",
        options: [
          "Wasting valuable pitch time",
          "Doing necessary diagnosis so their eventual conviction is honest, not performed",
          "Showing weakness or uncertainty",
          "Following an outdated sales approach",
        ],
        correct: 1,
        explain: "Genuine conviction requires understanding the specific customer's situation first — questions before claims is the diagnostic step that enables it.",
      },
    ],
  },
  {
    day: 8,
    track: "flagship",
    slug: "flagship-funnels-websites-digital-assets",
    title: "Building the machines that capture and convert demand",
    subtitle: "Landing pages, funnels, and websites are different tools for different jobs",
    lessons: [
      {
        heading: "A funnel maps what happens after the click, not before it",
        body: [
          "Traffic without a designed path after arrival leaks constantly — a visitor with no clear next step simply leaves. A funnel maps the exact sequence: what they see first, what convinces them, what they're asked to do, and what happens if they don't act immediately (a follow-up, not silence).",
          "Every stage of a funnel has its own conversion rate worth tracking separately — a weak result at the bottom is often actually caused by a leak much earlier that never gets diagnosed because only the final number gets watched.",
        ],
      },
      {
        heading: "Landing pages, websites, and funnels solve different problems",
        body: [
          "A website establishes ongoing credibility and answers broad questions about who you are; a landing page exists for one single conversion goal and removes every distraction that doesn't serve it; a funnel is the sequence connecting multiple pages toward that goal over time. Using a general website page to try to close a specific offer usually underperforms a page built with only that one job.",
          "The practical test for any page: if it has more than one possible next action, it's probably diluting the conversion it was actually built for.",
        ],
      },
      {
        heading: "A lead magnet has to earn its exchange rate",
        body: [
          "Asking for an email or phone number is a real exchange, not a free action — it has to feel worth it to the visitor in that instant, which means the free value promised has to be specific and immediately useful, not vague or generic. 'Free guide' converts far worse than a named, specific outcome the visitor actually wants right now.",
          "Nurture after the lead magnet matters as much as the magnet itself — capturing an email that then goes silent for weeks wastes the trust that was just extended.",
        ],
      },
    ],
    quiz: [
      {
        q: "A page gets strong traffic but very few conversions. Before touching the traffic source, what should be checked first?",
        options: [
          "Nothing — more traffic is always the answer",
          "Whether the funnel maps a clear next step after arrival, and where along it visitors are actually leaking",
          "The page's loading speed only",
          "Whether competitors have a similar page",
        ],
        correct: 1,
        explain: "Traffic without a mapped path after arrival leaks constantly — the leak point, not the traffic volume, is usually the real issue.",
      },
      {
        q: "Why does a dedicated landing page usually outperform a general website page for closing one specific offer?",
        options: [
          "Landing pages are always more visually attractive",
          "A landing page removes distractions and exists for exactly one conversion goal, unlike a general page with many possible actions",
          "Websites cannot include offers",
          "There's no real performance difference",
        ],
        correct: 1,
        explain: "Pages with a single possible next action convert better than pages diluted by multiple competing options.",
      },
      {
        q: "'Free guide' as a lead magnet typically underperforms because:",
        options: [
          "Free offers never work",
          "It's vague — visitors need a specific, immediately useful outcome to justify the exchange of their contact details",
          "Guides are an outdated format",
          "It should always be priced instead of free",
        ],
        correct: 1,
        explain: "The exchange has to feel worth it in that instant, which requires specificity — a vague generic offer doesn't clear that bar.",
      },
      {
        q: "What happens if a lead magnet captures an email but nurture afterward goes silent for weeks?",
        options: [
          "Nothing — the lead is captured, which is all that matters",
          "The trust just extended by the visitor is wasted, and the opportunity cools",
          "The visitor will always convert eventually regardless",
          "This is the correct and recommended approach",
        ],
        correct: 1,
        explain: "Nurture matters as much as capture — a captured lead with no follow-up wastes the trust that was just given.",
      },
    ],
  },
  {
    day: 9,
    track: "flagship",
    slug: "flagship-business-models-scale",
    title: "Moving from marketer to business thinker",
    subtitle: "Growth beyond promotion: business models, unit economics, and strategic alignment",
    suggestedJourney: "want-to-grow-safely",
    lessons: [
      {
        heading: "Growth beyond campaigns lives in retention and economics",
        body: [
          "A business can win every campaign and still fail if the unit economics don't work — if each customer costs more to acquire and serve than they're worth over their relationship with you. Marketing creates the top of the business; retention, margin, and repeat behaviour determine whether what marketing creates is actually profitable.",
          "The shift from marketer to business thinker is exactly this: asking not just 'did this campaign get attention' but 'does this business make sense as a system, campaign after campaign, customer after customer'.",
        ],
        applyLink: { kind: "tool", slug: "customer-lifetime", label: "Check your own unit economics" },
      },
      {
        heading: "Platform thinking can multiply reach without multiplying ownership",
        body: [
          "A pipe business creates value in a straight line with owned staff and owned assets. A platform business creates value by connecting two sides of a market — supply and demand — often without owning the underlying assets at all, which is why platform businesses can scale reach far faster than pipe businesses can scale headcount.",
          "Even a small business can borrow platform thinking: could you connect existing supply (freelancers, local vendors, spare capacity) to existing demand, instead of trying to own and produce everything yourself?",
        ],
      },
      {
        heading: "Strategic alignment means everyone rowing toward the same few priorities",
        body: [
          "Businesses lose coherence not from lacking ideas but from having too many uncoordinated ones — every department optimizing its own metric while the business as a whole drifts. Strategic alignment cascades a small number of top priorities down through every team so daily decisions, even small ones, add up in the same direction.",
          "A simple test for alignment: can someone two levels below the founder explain, in their own words, how their daily work connects to the company's top priority this quarter? If not, alignment exists on a slide, not in practice.",
        ],
      },
    ],
    quiz: [
      {
        q: "A business wins every marketing campaign it runs but is still losing money overall. This most likely points to:",
        options: [
          "The marketing team should just run more campaigns",
          "A unit economics problem — customers may cost more to acquire and serve than they're worth",
          "This scenario is impossible in practice",
          "The business should stop all marketing spend",
        ],
        correct: 1,
        explain: "Winning attention doesn't guarantee the underlying economics work — profitability depends on lifetime value versus acquisition and service cost.",
      },
      {
        q: "What allows platform businesses to scale reach faster than pipe businesses can scale headcount?",
        options: [
          "Platforms always have larger marketing budgets",
          "Platforms connect existing supply and demand without needing to own all the underlying assets",
          "Platforms avoid competition entirely",
          "There's no real structural difference",
        ],
        correct: 1,
        explain: "Platform businesses orchestrate connections rather than owning and staffing every part of the value chain, which removes a major scaling constraint.",
      },
      {
        q: "A company has an ambitious strategy slide, but a mid-level employee can't explain how their daily work connects to it. This indicates:",
        options: [
          "Strong strategic alignment",
          "Alignment exists on paper but hasn't cascaded into actual daily decisions",
          "The employee is underperforming",
          "Strategy documents are unnecessary in general",
        ],
        correct: 1,
        explain: "Real alignment shows up in how daily work connects to top priorities, not just in a polished strategic document.",
      },
      {
        q: "A small local business wants to 'think like a platform' without building a tech company. A reasonable first step is:",
        options: [
          "Hiring many more staff to own every part of production",
          "Looking for existing supply (freelancers, vendors, spare capacity) it could connect to existing demand, instead of owning everything itself",
          "This concept only applies to large tech companies",
          "Ignoring the idea entirely since it requires an app",
        ],
        correct: 1,
        explain: "Platform thinking is a mindset about connecting supply and demand — it can be borrowed at small scale without building full platform technology.",
      },
    ],
  },
  {
    day: 10,
    track: "flagship",
    slug: "flagship-systems-sops-operational-excellence",
    title: "Great businesses are built on repeatability",
    subtitle: "Moving from personality-driven chaos to process-driven scale",
    suggestedJourney: "business-cant-run-without-me",
    lessons: [
      {
        heading: "Businesses break at the seams nobody documented",
        body: [
          "Most operational breakdowns don't happen at the obvious pressure points — they happen at handoffs between people or steps that were never written down, where each person assumed the other knew what to do. A business running entirely on tribal knowledge is one absence, one resignation, or one busy week away from a visible failure.",
          "Thinking in systems means treating a recurring problem as a process design question ('what steps, in what order, owned by whom') rather than a people question ('who messed this up').",
        ],
      },
      {
        heading: "A standard operating procedure only works if it's actually usable",
        body: [
          "An SOP that's technically complete but unreadable under real working conditions — too long, too vague, buried in a folder nobody opens — provides no more consistency than having no SOP at all. Useful SOPs name the trigger that starts the process, the exact steps in order, who owns each step, and what 'done correctly' looks like.",
          "The best test of an SOP is handing it to someone unfamiliar with the process and watching whether they can execute it correctly without asking for help — any place they get stuck is a gap in the document, not a gap in that person's competence.",
        ],
        applyLink: { kind: "framework", slug: "sop-builder", label: "Write your own SOP" },
      },
      {
        heading: "Review rhythms are what keep systems alive",
        body: [
          "A system documented once and never revisited slowly drifts out of date as the business changes around it — the real value comes from a regular cadence of review (daily huddles, weekly checkpoints, monthly deeper reviews) that catches drift early. Without this rhythm, 'we have an SOP for that' quietly becomes untrue over time.",
          "The right review cadence matches the cost of the process breaking: customer-facing processes deserve tighter, more frequent review than internal ones with a longer tolerance for delay.",
        ],
      },
    ],
    quiz: [
      {
        q: "Where do most operational breakdowns actually occur, according to this lesson?",
        options: [
          "Always at the most obvious, high-visibility pressure points",
          "At undocumented handoffs between people or steps, where each side assumed the other knew what to do",
          "Only during major crises",
          "Nowhere — well-run businesses never break down",
        ],
        correct: 1,
        explain: "Undocumented handoffs, not obvious pressure points, are where tribal-knowledge businesses tend to break first.",
      },
      {
        q: "An SOP is technically complete but so long and vaguely written that nobody actually opens it. What does this provide?",
        options: [
          "Full protection against inconsistency",
          "Little more consistency than having no SOP at all, since it isn't actually usable",
          "Legal protection regardless of use",
          "Guaranteed training efficiency",
        ],
        correct: 1,
        explain: "An SOP only creates consistency if it's actually usable under real working conditions — an unreadable document isn't functionally different from no document.",
      },
      {
        q: "The best test of whether an SOP is genuinely usable is:",
        options: [
          "Whether it looks professionally formatted",
          "Handing it to someone unfamiliar with the process and seeing if they can execute it without help",
          "Whether senior leadership approved it",
          "How many pages it contains",
        ],
        correct: 1,
        explain: "A truly usable SOP lets an unfamiliar person execute the process correctly — any sticking point reveals a gap in the document.",
      },
      {
        q: "Why do customer-facing processes generally deserve a tighter review cadence than purely internal ones?",
        options: [
          "Internal processes never need review",
          "The cost of drift or failure is usually higher and more visible when it touches the customer directly",
          "Customer-facing processes are always simpler",
          "There's no meaningful difference in required cadence",
        ],
        correct: 1,
        explain: "Review frequency should match the cost of a process breaking — customer-facing failures tend to be more costly and visible.",
      },
    ],
  },
  {
    day: 11,
    track: "flagship",
    slug: "flagship-hiring-kpi-people",
    title: "Businesses grow when the right people and the right scoreboards exist",
    subtitle: "Hiring judgment, onboarding, and KPIs that actually drive accountability",
    suggestedJourney: "cant-find-good-people",
    lessons: [
      {
        heading: "Relevant hiring beats vanity hiring",
        body: [
          "A candidate with an impressive résumé from a well-known company isn't automatically the right hire for a specific role — relevant hiring asks whether this person has actually done the particular thing this role needs, not whether their history looks good on paper. Vanity hiring optimizes for how the hire looks; relevant hiring optimizes for what the role actually requires.",
          "The clearest defence against vanity hiring is writing the role's real outcomes down before meeting any candidate, so the evaluation compares candidates against the job, not against each other's general impressiveness.",
        ],
        applyLink: { kind: "tool", slug: "hiring-scorecard", label: "Define your role by outcomes" },
      },
      {
        heading: "Onboarding decides whether a good hire becomes a good employee",
        body: [
          "A strong hire can still fail in a business with no onboarding system, because talent doesn't compensate for not knowing what's expected, who to ask, or how success is measured in the first weeks. Structured onboarding — clear expectations, a named point of contact, an early check-in — converts hiring quality into performance instead of leaving it to chance.",
          "The first genuine test of onboarding isn't the welcome message; it's whether the new hire could correctly describe, in their own words within the first week, what success looks like in their role.",
        ],
      },
      {
        heading: "A KPI without an owner is just a number nobody's accountable for",
        body: [
          "Dashboards full of tracked metrics create an illusion of accountability if no single person's role is actually tied to moving that number. A KPI needs a named owner (whose performance it reflects), a clear target, and a review rhythm — without all three, it's decoration, not management.",
          "Distinguishing KPIs (the outcome a role is judged on) from KRAs (the specific responsibilities that produce that outcome) prevents the common failure of holding someone accountable for a result they don't actually have the authority or tools to influence.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why is 'relevant hiring' distinct from 'vanity hiring'?",
        options: [
          "Relevant hiring only considers candidates with prestigious résumés",
          "Relevant hiring evaluates whether a candidate has actually done this specific role's core work, not just whether their history looks generally impressive",
          "Vanity hiring is always the better approach for senior roles",
          "There is no meaningful difference between the two",
        ],
        correct: 1,
        explain: "Vanity hiring optimizes for how a candidate looks; relevant hiring optimizes for fit against the role's actual requirements.",
      },
      {
        q: "A talented new hire underperforms in their first month at a company with no onboarding system. What does this most likely indicate?",
        options: [
          "The hire was a mistake and lacks real talent",
          "Talent alone doesn't compensate for not knowing expectations, contacts, or how success is measured early on",
          "Onboarding doesn't meaningfully affect performance",
          "The company should have hired someone even more experienced",
        ],
        correct: 1,
        explain: "Structured onboarding converts hiring quality into actual performance — without it, even strong hires can flounder from unclear expectations.",
      },
      {
        q: "A dashboard tracks a KPI, but no specific person's role is tied to moving that number. This KPI is best described as:",
        options: [
          "Fully functional accountability",
          "Decoration — accountability requires a named owner, a target, and a review rhythm",
          "More useful than a KPI with an owner",
          "Sufficient as long as it's visible somewhere",
        ],
        correct: 1,
        explain: "A KPI only drives accountability when tied to a specific owner with a target and review cadence — otherwise it's just a tracked number.",
      },
      {
        q: "Why is it a problem to hold someone accountable for a KPI they don't have the authority or tools to influence?",
        options: [
          "It isn't a problem — accountability should be assigned regardless of authority",
          "It confuses KPI (the outcome) with KRA (the responsibilities that actually produce it), setting the person up to fail unfairly",
          "KPIs and KRAs are the same thing",
          "This situation never actually occurs in practice",
        ],
        correct: 1,
        explain: "Distinguishing the outcome (KPI) from the specific responsibilities that produce it (KRA) prevents holding people accountable for results outside their control.",
      },
    ],
  },
  {
    day: 12,
    track: "flagship",
    slug: "flagship-capstone-build-present-defend",
    title: "Integration: build, present, and defend",
    subtitle: "Everything learned becomes one coherent growth and leadership blueprint",
    lessons: [
      {
        heading: "A capstone tests integration, not memorization",
        body: [
          "Twelve weeks of separate frameworks — positioning, offers, funnels, SOPs, KPIs — only prove their worth when they connect into one coherent blueprint for a single real business. The hard part of a capstone isn't recalling any one framework; it's showing how the pieces reinforce each other: how the positioning shapes the offer, how the offer shapes the funnel, how the funnel's data should inform the KPIs.",
          "A blueprint that lists twelve separate frameworks side by side hasn't integrated anything — a stronger one shows explicitly how a decision in one area constrains or enables a decision in another.",
        ],
      },
      {
        heading: "Boardroom defense trains a different skill than boardroom presentation",
        body: [
          "Presenting a plan well is a performance skill; defending it under real questioning is a thinking skill — it exposes whether the presenter actually understands the reasoning behind their choices or has simply memorized a polished narrative. Good questioning targets the exact places a plan is weakest, which is precisely where genuine learning happens.",
          "The strongest response to a hard question is rarely a perfect answer — it's an honest, reasoned answer that shows the thinking, even when it reveals a genuine gap still to be solved.",
        ],
      },
      {
        heading: "Sustainable pace is part of the leadership blueprint too",
        body: [
          "A growth plan that assumes the founder can sustain unlimited hours indefinitely is not actually a complete plan — founder burnout is one of the most common, and most avoidable, reasons ambitious plans quietly collapse. Naming your own energy and capacity limits honestly, and building the team and systems to compensate for them, belongs in the same blueprint as the KPIs and the funnel.",
          "The operators who last longest tend to be the ones who treated their own sustainability as a business risk to manage, not a personal weakness to hide.",
        ],
      },
    ],
    quiz: [
      {
        q: "A capstone blueprint lists twelve separate frameworks side by side with no connections drawn between them. This blueprint has:",
        options: [
          "Fully integrated the program's learning",
          "Demonstrated recall but not actual integration — the frameworks aren't shown reinforcing each other",
          "Exceeded the requirements of a strong capstone",
          "No value at all",
        ],
        correct: 1,
        explain: "Integration means showing how a decision in one area (like positioning) shapes decisions elsewhere (like the offer or funnel) — a simple list doesn't do this.",
      },
      {
        q: "Why does defending a plan under tough questioning test something different from presenting it well?",
        options: [
          "They test exactly the same skill",
          "Presentation is a performance skill; defense reveals whether the reasoning behind choices is genuinely understood",
          "Defense is only about speaking loudly and confidently",
          "Good presenters are automatically good at defending their plans",
        ],
        correct: 1,
        explain: "Tough questioning targets the weakest points in a plan, exposing whether the presenter understands the underlying reasoning or just memorized a narrative.",
      },
      {
        q: "What's the strongest response to a hard question that exposes a genuine gap in the plan?",
        options: [
          "Deflecting and changing the subject",
          "An honest, reasoned answer that shows the thinking, even if it admits the gap isn't fully solved yet",
          "Insisting the plan has no weaknesses",
          "Refusing to answer difficult questions",
        ],
        correct: 1,
        explain: "Honest reasoning that acknowledges a genuine gap is stronger than a false claim of a flawless plan — it demonstrates real understanding.",
      },
      {
        q: "Why does founder sustainability belong in the same blueprint as KPIs and funnels, rather than being treated separately?",
        options: [
          "It doesn't really belong there",
          "Founder burnout is a common, avoidable cause of ambitious plans collapsing, making it a genuine business risk to plan around",
          "Personal energy has no effect on business outcomes",
          "Only large companies need to consider this",
        ],
        correct: 1,
        explain: "A growth plan that ignores the founder's actual capacity limits is incomplete — sustainable pace is a business risk, not just a personal concern.",
      },
    ],
  },
];
