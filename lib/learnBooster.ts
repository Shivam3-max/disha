import type { LearnDay } from "./learn";

export const BOOSTER_DAYS: LearnDay[] = [
  {
    day: 1,
    track: "booster",
    slug: "booster-mindset-opportunity",
    title: "Rewire the belief, then size the opportunity",
    subtitle: "How you interpret your past shapes what you'll attempt next — and how to score a lead before chasing it",
    suggestedJourney: "sales-have-stalled",
    lessons: [
      {
        heading: "You are not your past — you are the meaning you assigned it",
        body: [
          "Failure doesn't carry a fixed meaning; the meaning is added afterward, and it's that added meaning — not the event itself — that decides whether you try again. Two people can have the identical setback and walk away with opposite lessons, purely because of how they interpreted it.",
          "A workable formula for change is deliberately simple: choose a better reference point (who or what you associate this challenge with), reinterpret the event with fresh imagination instead of the automatic story, and back it with consistent action. Repeated with enough emotional intensity, a new interpretation becomes as real to you as the old one was.",
        ],
      },
      {
        heading: "Opportunity lives in the reason to switch, not in the industry",
        body: [
          "Judging an industry's attractiveness in the abstract is far less useful than judging one specific thing: how strong is the reason for a customer to switch away from what they use today? A tired, low-growth-looking industry can hide a huge opportunity if customers have a strong, specific reason to switch; a glamorous industry can be a trap if nobody has a real reason to move.",
          "The practical exercise is putting a number on it — estimating how many customers would switch, how fast, and how completely — because a vague sense of 'people seem unhappy with the current options' isn't yet a sized opportunity.",
        ],
      },
      {
        heading: "Score leads before you chase them",
        body: [
          "Chasing every lead with equal effort is a fast way to run out of time on the ones that were never going to close. A simple qualifying filter checks four things: can they actually afford it, are they the real decision maker, do they have a genuine need, and what's their realistic timeline to act.",
          "A lead that's missing more than one of these isn't necessarily worthless — but it belongs in a slower-nurture pile, not at the top of today's call list.",
        ],
        applyLink: { kind: "framework", slug: "bant-lead-scoring", label: "Score your own leads with BANT" },
      },
    ],
    quiz: [
      {
        q: "According to the belief-system reframe, what actually determines whether someone tries again after failure?",
        options: [
          "The objective severity of the failure itself",
          "The meaning they assign to the event afterward, not the event itself",
          "Whether other people witnessed the failure",
          "How much money was lost",
        ],
        correct: 1,
        explain: "The same event can produce opposite outcomes in two people, purely based on the interpretation each one attaches to it.",
      },
      {
        q: "Which is the better way to size a market opportunity?",
        options: [
          "Judge whether the industry sounds exciting or modern",
          "Estimate the strength and speed of customers' reason to switch away from their current option",
          "Only consider industries that are already growing fast",
          "Copy whatever industry a competitor recently entered",
        ],
        correct: 1,
        explain: "A strong, numerically estimated reason to switch is a better opportunity signal than the industry's general reputation.",
      },
      {
        q: "In BANT lead scoring, a prospect who loves your product but has no real budget and no clear timeline should be:",
        options: [
          "Treated identically to your hottest lead",
          "Moved to a slower-nurture pile rather than today's priority call list",
          "Dropped from your CRM entirely",
          "Given an automatic discount to force a close",
        ],
        correct: 1,
        explain: "Missing key BANT criteria doesn't make a lead worthless, but it does mean it shouldn't compete for today's limited selling time.",
      },
    ],
  },
  {
    day: 2,
    track: "booster",
    slug: "booster-hiring-culture-retention",
    title: "Hire for who they are, not just what they can do",
    subtitle: "Evaluate before you hire, design incentives that measure fairly, and talk to people before they quit",
    suggestedJourney: "cant-find-good-people",
    lessons: [
      {
        heading: "Potential, performance, skill, and will are four separate questions",
        body: [
          "It's easy to collapse hiring into one blurry impression, but four distinct questions deserve separate answers: can they perform this specific task (skill), have they actually delivered before (performance), how much room do they have to grow (potential), and do they actually want to do this work (will). A candidate can score high on skill and low on will, or the reverse — and each combination calls for a different hiring decision.",
          "Will is often the most under-weighted of the four, yet a moderately skilled person who genuinely wants the work regularly outperforms a highly skilled person who doesn't.",
        ],
      },
      {
        heading: "You can't train someone into being pleasant to work with",
        body: [
          "Culture-fit qualities — warmth, integrity, a bias toward helping — are far cheaper to hire for than to install afterward through training. Trying to coach basic disposition into someone after they've joined rarely works as well as simply not hiring against it in the first place.",
          "This doesn't mean hiring only agreeable people; it means being honest that some traits are basically fixed by the interview stage, and skills training should be reserved for the things training can actually fix.",
        ],
      },
      {
        heading: "A stay meeting is cheaper than an exit interview",
        body: [
          "Attrition often costs multiples of a departing employee's salary once recruiting, ramp-up time, and lost institutional knowledge are counted — which makes a conversation before someone decides to leave far more valuable than the one after. A 'stay' meeting asks what would make someone consider leaving while there's still time to fix it, instead of only learning the answer once it's too late.",
          "When someone does leave anyway, the exit conversation is still worth doing properly and documenting honestly, even for underperformers being let go — the patterns across multiple exits are often more revealing than any single one.",
        ],
        applyLink: { kind: "framework", slug: "stay-interview-plan", label: "Plan your own stay interviews" },
      },
      {
        heading: "What gets measured fairly gets improved",
        body: [
          "Productivity only becomes improvable once it's actually measured — a support agent's productivity might be resolution rate, a driver's might be trips per shift, a machine's might be output per rupee of input, but each role needs its own honest ratio, not a borrowed generic one. Profit-sharing tied to a fair, specific productivity measure builds loyalty in a way flat salary alone doesn't, because people can see their own effort reflected in their own number.",
        ],
      },
    ],
    quiz: [
      {
        q: "A candidate is highly skilled at the required task but shows little genuine enthusiasm for actually doing it. What does this lesson suggest?",
        options: [
          "Skill alone guarantees strong performance regardless of will",
          "This combination should be weighed carefully — moderately skilled but genuinely willing candidates often outperform skilled but unwilling ones",
          "Will is irrelevant to hiring decisions",
          "This candidate should always be rejected outright",
        ],
        correct: 1,
        explain: "Will is frequently under-weighted, yet genuine motivation to do the work often outperforms raw skill without it.",
      },
      {
        q: "Why is it usually more effective to hire for culture-fit traits like warmth and integrity than to train for them afterward?",
        options: [
          "Training programs are always too expensive",
          "Basic disposition is largely fixed by the time someone joins, and is far cheaper to screen for at hiring than to install afterward",
          "Culture-fit traits don't actually matter to team performance",
          "Only large companies can afford culture training",
        ],
        correct: 1,
        explain: "Disposition-level traits are difficult to coach after the fact — hiring for them upfront is far more reliable than trying to train them in later.",
      },
      {
        q: "What is the main advantage of a 'stay meeting' over a traditional exit interview?",
        options: [
          "Stay meetings are shorter to conduct",
          "It surfaces a person's reasons for possibly leaving while there's still time to address them, rather than learning only after they've already decided to go",
          "Exit interviews are no longer useful once stay meetings exist",
          "Stay meetings replace the need for fair compensation",
        ],
        correct: 1,
        explain: "A stay meeting happens before the decision is final, giving the business a chance to actually fix the underlying issue.",
      },
      {
        q: "Why should productivity measures differ by role (support agent vs. driver vs. machine) rather than using one generic company-wide ratio?",
        options: [
          "Different roles produce value in fundamentally different ways, so a fair measure has to reflect what that specific role actually controls",
          "It's simpler to use the same measure everywhere",
          "Only sales roles should ever be measured",
          "Generic measures are always more accurate",
        ],
        correct: 0,
        explain: "A fair, role-specific productivity ratio lets people see their own effort reflected honestly, which a borrowed generic metric can't do.",
      },
    ],
  },
  {
    day: 3,
    track: "booster",
    slug: "booster-mcd-leadership",
    title: "The three zoom levels of leadership",
    subtitle: "Managing, coaching, and delegating are different tools for different moments — not personality types",
    suggestedJourney: "business-cant-run-without-me",
    lessons: [
      {
        heading: "Managing (zoom in): the handcuff mode",
        body: [
          "Managing means close supervision, clear direction, and one-way instruction — appropriate when someone is brand new to a task, when a mistake would be costly, or when there simply isn't yet enough trust built to do otherwise. Used permanently on a capable, proven person, this same mode becomes a handcuff that signals distrust and kills initiative.",
          "The tell that managing has overstayed its usefulness: a competent team member still checking every small decision with you long after they've proven they don't need to.",
        ],
      },
      {
        heading: "Coaching (zoom mid): the handhold mode",
        body: [
          "Coaching shifts from instructing to developing — giving feed-forward instead of only feedback, listening more, and helping someone find their own answer rather than handing them yours. This is the right mode once basic competence exists but judgement is still being built; it moves faster than managing because the person is thinking, not just executing, but still has support close by.",
          "A useful coaching habit is asking 'what would you do?' before offering your own answer — it builds the exact judgement that later makes delegation possible.",
        ],
      },
      {
        heading: "Delegating (zoom out): the handsfree mode",
        body: [
          "Delegating hands over real accountability, not just a task list — the person owns the outcome, receives support from a distance rather than daily oversight, and is trusted to ask for help rather than being checked on constantly. This is the mode that actually scales a leader's time, because it's the only one that doesn't require their constant presence.",
          "Moving someone from managing straight to delegating, skipping the coaching stage, is a common and costly mistake — it hands over ownership before the judgement needed to carry it has actually been built.",
        ],
        applyLink: { kind: "framework", slug: "mcd-leadership-check", label: "Check your own zoom level per team member" },
      },
    ],
    quiz: [
      {
        q: "A proven, capable team member is still required to check every small decision with their manager. What does this suggest?",
        options: [
          "This is appropriate at any stage of someone's tenure",
          "The managing (zoom-in) mode has overstayed its usefulness and is now acting as a handcuff",
          "The team member needs less coaching",
          "This is a sign of strong leadership",
        ],
        correct: 1,
        explain: "Close supervision is appropriate early on, but continuing it on a proven performer signals distrust and suppresses initiative.",
      },
      {
        q: "What is the key shift between managing and coaching?",
        options: [
          "Coaching involves even closer supervision than managing",
          "Coaching moves from instructing toward developing judgement, asking questions rather than only giving direction",
          "There is no meaningful difference between the two",
          "Coaching means having no contact with the person at all",
        ],
        correct: 1,
        explain: "Coaching still offers support, but shifts toward helping someone build their own judgement rather than simply directing them.",
      },
      {
        q: "Why does skipping the coaching stage — moving someone straight from managing to delegating — tend to backfire?",
        options: [
          "It never causes any problems in practice",
          "It hands over real ownership before the judgement needed to carry it has actually been developed",
          "Delegating is always the wrong choice regardless of readiness",
          "Managing and delegating are functionally identical",
        ],
        correct: 1,
        explain: "Delegation requires judgement that coaching is what builds — skipping straight there leaves someone with authority but not yet the skill to use it well.",
      },
      {
        q: "Why is delegating described as the only mode that actually scales a leader's time?",
        options: [
          "Because it requires the most day-to-day presence from the leader",
          "Because it hands over real accountability and doesn't depend on the leader's constant oversight",
          "Because it removes the need for any team communication",
          "Delegating and managing scale time equally well",
        ],
        correct: 1,
        explain: "Only a mode that doesn't require constant leader presence can actually free up a leader's time as the business grows.",
      },
    ],
  },
  {
    day: 4,
    track: "booster",
    slug: "booster-content-that-spreads",
    title: "Why some content spreads and some doesn't",
    subtitle: "Ten reliable content triggers, six levers of virality, and turning rivals into partners",
    suggestedJourney: "competitor-could-copy-me",
    lessons: [
      {
        heading: "Ten situations reliably generate content people engage with",
        body: [
          "Celebrity moments, celebrations and occasions, current affairs, public condemnation of wrongdoing, genuine compliments to notable figures, awareness campaigns, comedy, public loss, crime stories, and controversy are ten recurring triggers that consistently draw attention across categories and eras — not because they're clever, but because they tap into things people already care about.",
          "Using this list responsibly means picking triggers that fit your brand's actual values and voice, not reaching for the most sensational one regardless of fit — a mismatch between trigger and brand tends to feel opportunistic rather than clever.",
        ],
      },
      {
        heading: "Virality has repeatable levers, even if any single result isn't guaranteed",
        body: [
          "Content spreads faster when it partners with an existing community rather than trying to address everyone at once, when it carries extreme or specific emotion rather than mild interest, when it delivers an unexpected delightful surprise, when it rides a trend that's already moving, or when it shares unusual but genuinely useful information.",
          "Targeting a specific community — a profession, a region, a shared identity — usually outperforms broad targeting, because content built for everyone tends to feel built for no one in particular.",
        ],
      },
      {
        heading: "Competitors can be collaborators for the right slice of the problem",
        body: [
          "Pure competition weeds out the weak and increases speed; collaboration expands what's possible for everyone involved and can make both parties stronger, and the sharpest operators know when each mode actually serves them better. Two businesses solving adjacent but different problems for the same customer — one arranging delivery, one arranging the ride — can serve that shared customer better together than either could separately.",
          "Cross-endorsement between complementary (not competing) brands lets each business borrow the other's trust and audience without spending on paid reach to build it from scratch.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why do the ten content triggers (celebrity, celebration, controversy, etc.) reliably draw engagement?",
        options: [
          "Because they require the largest production budgets",
          "Because they tap into things audiences already care about, rather than needing to create interest from nothing",
          "Because they are always appropriate for any brand",
          "Because they guarantee positive sentiment",
        ],
        correct: 1,
        explain: "These triggers work by connecting to existing attention and emotion, not by manufacturing interest from a neutral starting point.",
      },
      {
        q: "Content built to appeal to 'everyone' compared to content built for one specific community usually:",
        options: [
          "Performs better because it reaches more people",
          "Tends to feel built for no one in particular and underperforms narrowly targeted content",
          "Always performs identically",
          "Is the recommended default strategy",
        ],
        correct: 1,
        explain: "Content aimed at a specific community tends to resonate more deeply than content diluted to appeal broadly to everyone.",
      },
      {
        q: "Two businesses serve the same customer at different stages (one delivers food, one drives passengers) and choose to partner rather than compete. This illustrates:",
        options: [
          "A situation where collaboration expands what's possible for both, better than pure competition would",
          "An illegal business arrangement",
          "A strategy that only works for identical competitors",
          "A sign that both businesses are struggling",
        ],
        correct: 0,
        explain: "Collaboration between businesses solving adjacent problems for a shared customer can create mutual value competition alone wouldn't.",
      },
      {
        q: "What does cross-endorsement between two complementary (non-competing) brands primarily let each business do?",
        options: [
          "Eliminate the other brand from the market",
          "Borrow the other's existing trust and audience without paying to build that reach from scratch",
          "Avoid the need for any of their own marketing ever again",
          "Merge into a single legal entity automatically",
        ],
        correct: 1,
        explain: "Cross-endorsement lets each brand tap into the other's established trust and audience at low cost, rather than building that reach from zero.",
      },
    ],
  },
  {
    day: 5,
    track: "booster",
    slug: "booster-ads-funnels-training-roi",
    title: "Headlines, funnels, and proving training actually worked",
    subtitle: "The details that decide whether an ad gets read, a funnel converts, and money spent on people pays back",
    lessons: [
      {
        heading: "Most ad readership is decided by the headline alone",
        body: [
          "A large share of an ad's traffic and sales is lost before the body copy is ever read, purely because the headline failed to earn a second more of attention — which is why a disproportionate amount of effort should go into the headline relative to everything else in the ad. Headlines that name an authority, promise a specific outcome, target a named community, carry surprising emotion, use a number, or ask a sharp question all tend to outperform a flat, descriptive title.",
          "Beyond the headline, a strong ad still needs an offer worth responding to, a clear answer to 'what's in it for me', a way to remove the customer's fear of a bad decision, a specific call to action, and a genuine reason not to wait.",
        ],
      },
      {
        heading: "The 5 As show exactly where a brand loses people",
        body: [
          "Awareness, appeal, ask, act, and advocate map the full journey from a stranger knowing your brand exists to becoming someone who actively recommends it — and the ratio between any two adjacent stages reveals a specific, fixable gap. Strong awareness with weak appeal points to a perception problem; strong appeal with weak 'ask' points to unclear next steps; strong 'act' with weak 'advocate' points to a satisfaction or follow-up gap after the sale.",
          "Measuring all five separately, instead of only tracking overall sales, turns a vague 'growth is slow' complaint into a specific stage to fix.",
        ],
        applyLink: { kind: "framework", slug: "five-as-funnel-audit", label: "Audit your own 5 As funnel" },
      },
      {
        heading: "Training only proves its worth across four levels",
        body: [
          "Whether people enjoyed a training session is the weakest evidence that it worked — the stronger evidence checks whether they actually learned something, whether their on-the-job behaviour changed afterward, and finally whether business results moved because of it. Most training programs are only ever evaluated at the enjoyment level, which explains why so much training spend never visibly pays back.",
          "Before hiring an outside consultant or trainer, defining the goal in these same terms — with clear time, cost, and scope targets tied to an outcome, not just effort — makes it possible to actually judge afterward whether the engagement was worth what it cost.",
        ],
        applyLink: { kind: "framework", slug: "training-evaluation", label: "Design your own training evaluation" },
      },
    ],
    quiz: [
      {
        q: "Why does a disproportionate amount of ad-writing effort belong in the headline specifically?",
        options: [
          "Headlines are the easiest part to write",
          "A large share of traffic and sales is lost before the body copy is ever read if the headline fails to earn attention",
          "Body copy doesn't affect conversion at all",
          "Headlines are legally required to be the longest part of an ad",
        ],
        correct: 1,
        explain: "Poor headlines lose readers before the rest of the ad — including a strong offer — ever gets seen.",
      },
      {
        q: "A brand has strong awareness and appeal, but very few people take the 'ask' step (inquiring). Where is the actual problem?",
        options: [
          "Awareness is too high and should be reduced",
          "Somewhere between appeal and the inquiry step — likely an unclear or missing next step",
          "The product itself must be fundamentally flawed",
          "The 5 As can't diagnose this kind of gap",
        ],
        correct: 1,
        explain: "Measuring each of the 5 As separately localizes the actual gap — here, between people liking the brand and knowing how to take the next step.",
      },
      {
        q: "Why is 'people enjoyed the training' considered the weakest evidence that training actually worked?",
        options: [
          "Enjoyment doesn't confirm learning happened, behaviour changed, or results actually moved",
          "Enjoyment is the strongest possible evidence of training success",
          "Training should never be enjoyable",
          "This level of evaluation is no longer used anywhere",
        ],
        correct: 0,
        explain: "The strongest evaluation levels check learning, behaviour change, and business results — enjoyment alone doesn't confirm any of those actually happened.",
      },
      {
        q: "Before hiring an outside consultant, defining goals around clear time/cost/scope targets tied to an outcome (rather than effort) mainly helps by:",
        options: [
          "Guaranteeing the consultant will succeed",
          "Making it possible to actually judge afterward whether the engagement was worth its cost",
          "Removing the need for any contract",
          "This step is unnecessary if the consultant has a good reputation",
        ],
        correct: 1,
        explain: "Outcome-based goals set in advance are what make a fair after-the-fact judgment of the engagement's value possible.",
      },
    ],
  },
  {
    day: 6,
    track: "booster",
    slug: "booster-operations-debt-questions",
    title: "Faster processes, lighter debt, sharper questions",
    subtitle: "Turnaround time, the real causes of debt trouble, and the mindset behind every major discovery",
    suggestedJourney: "cash-is-always-tight",
    lessons: [
      {
        heading: "Turnaround time is a customer-trust metric disguised as an operations metric",
        body: [
          "The time between a request entering a process and the result coming out — turnaround time — directly shapes whether customers trust a business enough to return, which is why operationally excellent companies obsess over cutting it. The reliable levers are the same across industries: remove unnecessary steps, close communication gaps between handoffs, find and fix the specific bottleneck rather than optimizing everywhere equally, and replace manual paperwork-based steps with automated tracking wherever possible.",
          "A blueprint that assigns a timeline to every step of a process, plus a backup plan for when something goes wrong, consistently produces lower turnaround time than one that only optimizes the average case.",
        ],
      },
      {
        heading: "Debt trouble has identifiable, preventable causes",
        body: [
          "Businesses rarely fall into damaging debt for one dramatic reason — it's usually a combination of borrowing out of desperation rather than strategy, margins thinner than the cost of the debt itself, cash inflows and outflows that don't line up in time, and growth pursued aggressively without the margins to support it. Each of these is identifiable in advance, which means debt trouble is more preventable than it often looks in hindsight.",
          "Getting out the other side usually means restructuring the debt's timeline to ease the immediate cash burden, clearing the highest-cost debt first, trimming other expenses, and — sometimes the hardest step — selling assets that aren't earning their keep rather than protecting them out of attachment.",
        ],
        applyLink: { kind: "framework", slug: "borrowing-readiness", label: "Check your own debt ratios" },
      },
      {
        heading: "Every major discovery started as a sharper question",
        body: [
          "Behind nearly every significant breakthrough — in science, medicine, or business — sits a specific, well-formed question that most people around the same problem never thought to ask. The habit worth building isn't collecting more answers; it's getting better at noticing which everyday frustration deserves a real question instead of a shrug.",
          "Spending real time defining the right question before rushing to solve it — rather than treating question-framing as a formality to get past quickly — routinely pays off in a faster, more precise path to the actual answer.",
        ],
      },
    ],
    quiz: [
      {
        q: "Why do operationally excellent companies treat turnaround time as a priority metric?",
        options: [
          "It has no real connection to customer behaviour",
          "It directly shapes whether customers trust the business enough to return",
          "It only matters for manufacturing companies",
          "Shorter turnaround time always means lower quality",
        ],
        correct: 1,
        explain: "The speed between request and result is something customers directly feel, making it a trust-building metric, not just an internal efficiency number.",
      },
      {
        q: "A business optimizes every step of a process equally instead of finding its specific bottleneck. What does this lesson suggest about that approach?",
        options: [
          "This is the optimal strategy",
          "Identifying and fixing the actual bottleneck tends to outperform spreading effort evenly across every step",
          "Bottlenecks don't meaningfully affect turnaround time",
          "Equal optimization is always faster to implement",
        ],
        correct: 1,
        explain: "Finding and fixing the specific bottleneck is a more effective lever than optimizing everywhere without identifying where the real constraint is.",
      },
      {
        q: "Which combination of factors typically leads a business into damaging debt?",
        options: [
          "Strategic borrowing with margins well above the cost of debt",
          "Desperate borrowing, thin margins relative to debt cost, mismatched cash flow timing, and aggressive growth without supporting margins",
          "Any amount of borrowing at all, regardless of circumstances",
          "Only borrowing for long-term assets",
        ],
        correct: 1,
        explain: "Debt trouble tends to come from a specific, identifiable combination of causes rather than borrowing itself being inherently dangerous.",
      },
      {
        q: "What common thread connects historical discoveries like penicillin, the airplane, and gravity, as described in this lesson?",
        options: [
          "They were all discovered by accident with no real inquiry involved",
          "Each began with a specific, well-formed question that most people around the same problem never thought to ask",
          "They all required the same field of expertise",
          "None of them involved any real curiosity",
        ],
        correct: 1,
        explain: "A sharply framed question, more than raw effort or luck, is the common thread behind many significant discoveries.",
      },
    ],
  },
];
