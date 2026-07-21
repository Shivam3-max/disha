import type { Strategy } from "./knowledgeTypes";

export const STRATEGIES_2: Strategy[] = [
  // ---------- PRICING PSYCHOLOGY & NEGOTIATION ----------
  {
    slug: "anchoring-effect",
    name: "Anchoring effect",
    category: "Pricing psychology & negotiation",
    definition:
      "The first number a customer sees becomes the reference point every later number is judged against — showing a higher price first makes a subsequent price feel like a relative bargain, even if it's still expensive in absolute terms.",
    originExample:
      "Retailers routinely display a crossed-out 'original price' next to a sale price — the crossed-out number's real job is setting the anchor, not describing what anyone actually paid before.",
    whenToUse:
      "Whenever a customer has no independent way to judge whether a price is fair — showing a credible higher reference point first shapes their sense of value before they've formed one themselves.",
    whenItBackfires:
      "An anchor that's obviously inflated or fake (a 'discount' off a price nobody ever paid) damages trust once customers notice, which is increasingly easy to check online.",
    relatedLink: { kind: "tool", slug: "pricing-strategy", label: "Pricing strategy picker" },
  },
  {
    slug: "decoy-effect",
    name: "Decoy effect",
    category: "Pricing psychology & negotiation",
    definition:
      "Adding a third option that's deliberately inferior to one of the other two — not to be bought, but to make that other option look like the obviously smarter choice by comparison.",
    originExample:
      "A pricing page with small, medium, and large tiers where the medium is priced only slightly below the large is a classic decoy — it exists to push buyers toward the large, which becomes the obvious better deal next to it.",
    whenToUse:
      "When you have a genuine preferred tier you want most customers to choose, and adding a deliberately weaker comparison point can make that choice feel obvious rather than pushed.",
    whenItBackfires:
      "A decoy that's too obviously pointless (nobody would ever choose it) can make the whole pricing structure feel manipulative once a customer notices the pattern.",
  },
  {
    slug: "charm-pricing",
    name: "Charm pricing",
    category: "Pricing psychology & negotiation",
    definition:
      "Ending a price just below a round number (₹999 instead of ₹1,000) so it's perceived and processed as meaningfully cheaper, even though the actual difference is negligible.",
    originExample:
      "Retail pricing overwhelmingly clusters just below round numbers across nearly every category and country, because buyers process the leftmost digit first and anchor their sense of price to it.",
    whenToUse:
      "Price-sensitive, value-positioned categories where customers are comparison shopping and the leftmost-digit effect genuinely shifts perception.",
    whenItBackfires:
      "In premium or luxury positioning, charm pricing can look cheap and undercut the very status the price is supposed to signal — round numbers often work better there.",
  },
  {
    slug: "scarcity-urgency-pricing",
    name: "Scarcity and urgency pricing",
    category: "Pricing psychology & negotiation",
    definition:
      "Signaling limited availability or a limited time window to purchase, which makes customers weigh the pain of missing out more heavily than they'd otherwise weigh the price itself.",
    originExample:
      "E-commerce sale banners showing a countdown timer or 'only 3 left in stock' are both designed to convert hesitation into action by making delay feel costly.",
    whenToUse:
      "When the scarcity or deadline is genuinely true — a real limited batch, a real sale end date — since real urgency reliably moves purchase decisions forward.",
    whenItBackfires:
      "Fake or repeated scarcity claims (a countdown timer that resets, 'limited stock' that's always available) get noticed and destroy the credibility of every future urgency claim you make.",
  },
  {
    slug: "prestige-pricing-threshold",
    name: "Prestige pricing threshold",
    category: "Pricing psychology & negotiation",
    definition:
      "Deliberately pricing above a round-number threshold rather than just below it, because in premium categories a higher, round price can itself signal quality and status rather than deterring purchase.",
    originExample:
      "Luxury goods routinely price at round or even upward-rounded figures rather than charm-pricing just below them — a price that looks 'too precise' can undercut the effortless status the category is selling.",
    whenToUse:
      "Genuinely premium or luxury positioning, where the price itself is part of the product's signal of exclusivity, not just a cost to be minimised in the customer's mind.",
    whenItBackfires:
      "Using prestige pricing without a genuine quality or status story behind it just makes an ordinary product needlessly expensive, with nothing to justify the number.",
  },
  {
    slug: "installment-payment-framing",
    name: "Installment / EMI framing",
    category: "Pricing psychology & negotiation",
    definition:
      "Presenting a large price as a smaller recurring payment (per month or per instalment) so the number that registers emotionally is the small one, not the total.",
    originExample:
      "High-ticket purchases — appliances, electronics, furniture — routinely advertise the monthly EMI figure prominently and the total price in smaller print, because the smaller number feels far more affordable.",
    whenToUse:
      "Genuinely high-ticket items where the total price would otherwise trigger hesitation, and a real, transparent instalment option is available.",
    whenItBackfires:
      "Emphasising the instalment number while obscuring the total cost or interest involved crosses from framing into deception, which damages trust once a customer does the full math.",
  },
  {
    slug: "batna-leverage",
    name: "BATNA leverage",
    category: "Pricing psychology & negotiation",
    definition:
      "Your BATNA — best alternative to a negotiated agreement — is what you'll do if this specific deal falls through. The stronger your genuine alternative, the more leverage and calm confidence you carry into any negotiation.",
    originExample:
      "A supplier who has multiple genuine buyers interested negotiates very differently — and gets better terms — than one who desperately needs this one deal to close, even if neither side says so explicitly.",
    whenToUse:
      "Before any significant negotiation — deliberately building or identifying your actual alternative beforehand changes both your leverage and your ability to walk away calmly if terms are poor.",
    whenItBackfires:
      "Bluffing about a BATNA you don't actually have is risky — a sophisticated counterpart can often sense desperation regardless of what's said, and being caught bluffing destroys trust for the rest of the negotiation.",
  },
  {
    slug: "walk-away-power",
    name: "Walk-away power",
    category: "Pricing psychology & negotiation",
    definition:
      "The genuine, demonstrated willingness to end a negotiation rather than accept unacceptable terms — which paradoxically often produces better terms, because it signals you won't be pressured into a bad deal.",
    originExample:
      "Skilled negotiators in high-stakes deals often deliberately create real deadlines or alternative options for themselves specifically so their walk-away threat is genuine, not performed.",
    whenToUse:
      "Any negotiation where the deal, while desirable, isn't the only path forward — genuine walk-away power only exists when there's truly something to walk toward instead.",
    whenItBackfires:
      "Threatening to walk away without any genuine willingness or alternative to back it up is a bluff that, once called, leaves you with much weaker leverage than if you'd never threatened it.",
  },
  {
    slug: "nibbling-technique",
    name: "Nibbling technique",
    category: "Pricing psychology & negotiation",
    definition:
      "Asking for a series of small additional concessions after the main terms are already agreed, when the other party's guard is down and the psychological cost of reopening the whole deal feels higher than granting the small ask.",
    originExample:
      "A buyer who agrees to a price and then, right at the signing stage, asks for a small extra — free delivery, an extended warranty — is nibbling, banking on the seller not wanting to risk the whole deal over a small add-on.",
    whenToUse:
      "As the receiving party, recognising this technique lets you decide deliberately whether to grant a small nibble or hold firm — the danger is granting it unconsciously simply to avoid friction.",
    whenItBackfires:
      "Repeated nibbling from the same counterpart erodes trust over time — a relationship-minded negotiator generally avoids nibbling with someone they intend to work with again.",
  },
  {
    slug: "win-win-framing",
    name: "Win-win framing",
    category: "Pricing psychology & negotiation",
    definition:
      "Structuring a negotiation around finding terms that genuinely benefit both sides — trading things each party values differently — rather than treating the negotiation as a fixed pie where one side's gain is the other's loss.",
    originExample:
      "A negotiation where one party values speed of closing more than price, and the other values price more than speed, can trade a faster timeline for a better price — a genuine win for both, not a compromise where each gives something up equally.",
    whenToUse:
      "Any negotiation where you'll have an ongoing relationship afterward, or where the two parties genuinely value different things — the trade often unlocks more value than a pure price fight would.",
    whenItBackfires:
      "Treating 'win-win' as a script rather than a genuine search for mutual value — insisting everything is a win-win while actually just pushing your own position — is transparent and erodes trust fast.",
  },

  // ---------- GUERRILLA & ATTENTION MARKETING ----------
  {
    slug: "ambush-marketing",
    name: "Ambush marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Associating your brand with a major event or moment without paying for official sponsorship rights, capturing some of the attention and goodwill the event generates at a fraction of the sponsorship cost.",
    originExample:
      "Brands have run cheeky, event-adjacent campaigns during major sporting tournaments without being official sponsors, deliberately timed to capture attention the official sponsors paid heavily for.",
    whenToUse:
      "Major cultural or sporting moments where official sponsorship is prohibitively expensive but genuine audience attention is high and can be captured tangentially, without infringing trademarks.",
    whenItBackfires:
      "Ambush campaigns that cross into using protected event trademarks or logos directly can trigger real legal action — the tactic has to stay clever and adjacent, not directly infringing.",
  },
  {
    slug: "flash-mob-marketing",
    name: "Flash mob marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Staging a sudden, choreographed public spectacle in an everyday location, designed to surprise bystanders and be recorded and shared, turning a small production budget into wide organic reach.",
    originExample:
      "Brand-sponsored flash mobs in train stations, malls, and public squares have repeatedly generated video views and press coverage far beyond what the production cost would buy in traditional advertising.",
    whenToUse:
      "Brands with a genuinely shareable, visually striking concept and an audience likely to film and post spontaneous public spectacle — the tactic depends entirely on organic amplification.",
    whenItBackfires:
      "A flash mob that feels obviously staged-for-marketing rather than genuinely surprising and delightful reads as try-hard and generates cynicism rather than shares.",
  },
  {
    slug: "stunt-marketing",
    name: "Stunt marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "A bold, sometimes risky, attention-grabbing public act — a physical feat, an outrageous claim, a provocative installation — designed specifically to generate press coverage and word of mouth.",
    originExample:
      "Brands have flown daredevils, launched objects to the edge of space, or staged extreme physical challenges specifically to generate global press coverage disproportionate to the campaign's actual budget.",
    whenToUse:
      "Categories where differentiation on product alone is hard, and a single bold, well-executed stunt can generate more brand recall than months of conventional advertising.",
    whenItBackfires:
      "A stunt that fails publicly, feels genuinely reckless, or endangers people can generate the wrong kind of attention entirely, turning a marketing win into a crisis.",
  },
  {
    slug: "wildposting-marketing",
    name: "Wildposting / sticker marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Blanketing a specific urban area with posters, stickers, or stencils at low cost, relying on sheer repeated visual presence in a walkable area to build recall rather than one polished large placement.",
    originExample:
      "Independent film, music, and fashion launches have historically relied heavily on dense street-level poster and sticker campaigns in cultural hubs to build underground buzz before wider release.",
    whenToUse:
      "Local or youth-culture-oriented launches where the target audience physically moves through a specific, walkable urban area repeatedly.",
    whenItBackfires:
      "Wildposting on private property or in violation of local regulations can result in fines and negative press that outweighs the low production cost.",
  },
  {
    slug: "reverse-graffiti-marketing",
    name: "Reverse graffiti / clean tagging",
    category: "Guerrilla & attention marketing",
    definition:
      "Creating a brand message or image by selectively cleaning dirt off a public surface (a wall, a pavement) rather than adding paint — a technique that avoids vandalism laws in many jurisdictions since nothing is actually added to the surface.",
    originExample:
      "Several brands have used reverse graffiti in dense urban areas specifically because its novelty and the 'how did they do that' curiosity factor generate disproportionate social sharing relative to cost.",
    whenToUse:
      "Urban, environmentally-conscious brand positioning where the technique's low environmental impact is itself part of the message being communicated.",
    whenItBackfires:
      "Even though nothing is technically added, using this technique on surfaces the brand doesn't have explicit permission to alter can still trigger legal or public relations issues in some jurisdictions.",
  },
  {
    slug: "viral-challenge-marketing",
    name: "Viral challenge marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Designing a simple, repeatable, participatory action — a dance, a physical challenge, a creative prompt — that spreads because participants want to create and share their own version, not just watch the brand's version.",
    originExample:
      "Several of the most-viewed branded campaigns on social platforms have been structured as challenges ordinary people can easily recreate and post themselves, turning the audience into the actual content production engine.",
    whenToUse:
      "Platforms and audiences where participatory, recreatable content already spreads faster than passively-consumed content, and the brand has a genuinely simple, low-barrier action to build around.",
    whenItBackfires:
      "A challenge that requires real skill, expensive props, or significant effort to participate in has a much lower ceiling on participation and rarely reaches genuine virality.",
  },
  {
    slug: "undercover-stealth-marketing",
    name: "Undercover / stealth marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Promoting a product without the audience immediately realising they're being marketed to — actors using a product visibly in public, or planted conversations — relying on the appearance of organic, unbiased endorsement.",
    originExample:
      "Product placement in film and television, and paid actors demonstrating products in public spaces without disclosing sponsorship, are both long-standing forms of stealth marketing designed to borrow the credibility of apparent non-endorsement.",
    whenToUse:
      "Categories where a disclosed advertisement is met with heavy scepticism, and an authentic-feeling, undisclosed demonstration could shift perception — while staying within advertising disclosure regulations.",
    whenItBackfires:
      "Increasingly strict disclosure regulations in many markets mean undisclosed stealth marketing can trigger real legal penalties, and audiences who discover the deception react with lasting distrust once revealed.",
  },
  {
    slug: "pop-up-experience-marketing",
    name: "Pop-up experience marketing",
    category: "Guerrilla & attention marketing",
    definition:
      "Creating a temporary, immersive physical space or event built entirely around a brand experience rather than direct selling, designed to generate social content and press through its short-lived, must-see-now nature.",
    originExample:
      "Brands across categories from beverages to fashion have built short-lived, highly Instagrammable pop-up installations specifically to generate a wave of user-created social content during the limited window the installation exists.",
    whenToUse:
      "Brands with a strong enough visual or experiential identity to translate into a physical space, and an audience concentrated enough geographically to make a temporary location worthwhile.",
    whenItBackfires:
      "A pop-up that's visually impressive but disconnected from what the brand actually sells generates attention that doesn't convert into any lasting brand association or sales lift.",
  },
  {
    slug: "shockvertising",
    name: "Shockvertising",
    category: "Guerrilla & attention marketing",
    definition:
      "Deliberately provocative, taboo-adjacent, or startling advertising designed to interrupt audience indifference through genuine shock value, betting that the resulting conversation outweighs any backlash.",
    originExample:
      "Fashion and social-cause campaigns have repeatedly used deliberately provocative or taboo imagery specifically to generate the kind of press coverage and public debate a conventional campaign never would.",
    whenToUse:
      "Brands with an audience and category tolerance for boldness, and a genuine message worth the controversy — shock without a message underneath it reads as empty provocation.",
    whenItBackfires:
      "Shock content that offends without a defensible underlying point generates backlash that damages the brand far more than the attention gained is worth, and can alienate exactly the customers the brand needs.",
  },
  {
    slug: "real-time-newsjacking",
    name: "Real-time newsjacking",
    category: "Guerrilla & attention marketing",
    definition:
      "Inserting a brand into a live, trending news or cultural moment within hours (or minutes) of it happening, riding the attention that moment is already generating instead of trying to create attention from scratch.",
    originExample:
      "Brands with fast-moving social teams have repeatedly generated outsized engagement by responding cleverly to live cultural events — award shows, sporting moments, viral news — within the narrow window while the moment is still trending.",
    whenToUse:
      "Brands with genuinely fast internal approval processes and a social team empowered to act within hours, since the entire value of newsjacking depends on speed.",
    whenItBackfires:
      "Newsjacking a tragedy, a sensitive news event, or a moment the brand has no authentic connection to reads as opportunistic and can generate immediate, sharp backlash.",
  },
];
