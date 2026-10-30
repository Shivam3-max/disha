import type { Law } from "./knowledgeTypes";

export const LAWS_PRODUCTIVITY: Law[] = [
  {
    slug: "parkinsons-law",
    name: "Parkinson's Law",
    category: "productivity-time",
    oneLiner:
      "Work expands to fill the time available for its completion.",
    origin:
      "British naval historian C. Northcote Parkinson opened a satirical 1955 essay in The Economist with the line, using it to mock the growth of government bureaucracy.",
    explanation: [
      "Give a task a week and it takes a week; give it a day and it often gets done in a day. Without constraints, people polish, delay, and add scope.",
      "Parkinson also meant it about organisations: headcount and admin grow regardless of the actual work. For owners, deadlines and budgets are tools, not just limits.",
    ],
    examples: [
      { title: "Projects", body: "A proposal given two weeks is finished the night before; given two days, it is finished on time with similar quality." },
      { title: "Meetings", body: "Hour-long meetings fill an hour; 25-minute meetings end with the same decisions." },
      { title: "Budgets", body: "Departments spend their full budget by year-end, needed or not." },
    ],
    apply: [
      "Set tighter, realistic deadlines for tasks.",
      "Timebox meetings and work sessions.",
      "Break large projects into short sprints with visible checkpoints.",
      "Review budgets and headcount against actual output, not habit.",
    ],
    misread:
      "Impossibly tight deadlines cause errors and burnout. The aim is tight but realistic.",
    question: "Which task are you giving more time than it actually needs?",
    related: ["hofstadters-law", "parkinsons-law-of-triviality", "pareto-principle", "yerkes-dodson-law"],
    link: { kind: "framework", slug: "main-thing-calendar", label: "Timebox your main thing" },
  },
  {
    slug: "hofstadters-law",
    name: "Hofstadter's Law",
    category: "productivity-time",
    oneLiner:
      "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    origin:
      "Cognitive scientist Douglas Hofstadter introduced it in his 1979 book Gödel, Escher, Bach, writing about how chess-playing computers kept taking longer than predicted to beat humans.",
    explanation: [
      "The self-referential joke makes a serious point: even when you know you underestimate time and add a buffer, the buffer is usually too small. Complex work hides unknown problems.",
      "It is a cousin of the planning fallacy — and an argument for building slack into schedules, especially for new kinds of work.",
    ],
    examples: [
      { title: "Launches", body: "A website planned for one month, with a two-week buffer, still launches late." },
      { title: "Hiring", body: "Filling a senior role takes far longer than the most pessimistic early estimate." },
      { title: "Construction", body: "Office renovations routinely exceed padded schedules." },
    ],
    apply: [
      "Add buffers based on real history, not instinct.",
      "Be extra cautious with work you have never done before.",
      "Communicate ranges, not single dates, to customers.",
      "Prioritise so the most important parts finish first.",
    ],
    misread:
      "It is not an excuse for missed deadlines — it is a reason to plan more honestly.",
    question: "How much buffer did your last project actually need versus what you planned?",
    related: ["planning-fallacy", "ninety-ninety-rule", "parkinsons-law", "murphys-law"],
  },
  {
    slug: "carlsons-law",
    name: "Carlson's Law",
    category: "productivity-time",
    oneLiner:
      "Work done in one continuous block takes less time and energy than the same work done in interrupted pieces.",
    origin:
      "Based on Swedish economist Sune Carlson's 1951 study Executive Behaviour, which found managers were rarely able to work uninterrupted for more than about 20 minutes.",
    explanation: [
      "Every interruption costs more than its own length: you lose focus, have to recall where you were, and restart. A task interrupted five times can take far longer than one done in a single sitting.",
      "For business owners and teams, protecting blocks of uninterrupted time is one of the cheapest productivity upgrades available.",
    ],
    examples: [
      { title: "Owners", body: "A founder who answers every WhatsApp ping never finishes strategic work; blocking two quiet hours each morning changes that." },
      { title: "Teams", body: "A design team introduces ‘no-meeting afternoons’ and delivery speeds up." },
      { title: "Shop floor", body: "Batching similar tasks reduces setup time and errors." },
    ],
    apply: [
      "Block 60–120 minute focus periods in your calendar.",
      "Turn off notifications during those blocks.",
      "Batch similar tasks (emails, calls, approvals) together.",
      "Agree team norms for when interruptions are acceptable.",
    ],
    misread:
      "Not all interruptions are bad — urgent customer issues still need attention. The goal is to reduce avoidable ones.",
    question: "When did you last work for an hour without a single interruption?",
    related: ["parkinsons-law", "laborits-law", "illichs-law", "zeigarnik-effect"],
    link: { kind: "framework", slug: "solitude-ritual", label: "Build a focus ritual" },
  },
  {
    slug: "illichs-law",
    name: "Illich's Law",
    category: "productivity-time",
    oneLiner:
      "Beyond a certain number of hours, productivity falls and can turn negative — more work stops producing more results.",
    origin:
      "Commonly attributed to the Austrian philosopher and social critic Ivan Illich, whose writing on counterproductivity argued that institutions and tools beyond a threshold begin to work against their purpose.",
    explanation: [
      "After many hours of continuous work, fatigue lowers quality, increases errors, and slows decisions. The extra hours produce little or even cause rework.",
      "For owners and teams, regular breaks and sustainable hours often deliver more total output than marathon days.",
    ],
    examples: [
      { title: "Long shifts", body: "Factories running excessive overtime see accident and defect rates rise." },
      { title: "Founders", body: "A founder working 14-hour days makes poor late-night decisions that need undoing." },
      { title: "Studying", body: "Students revising for hours without breaks remember less than those who space sessions out." },
    ],
    apply: [
      "Track when your work quality drops during the day.",
      "Schedule breaks before that point.",
      "Put important decisions in your high-energy hours.",
      "Treat rest as part of the work system, not a luxury.",
    ],
    misread:
      "It isn't an argument against hard work — it's about getting more value from the hours you work.",
    question: "At what hour of the day do your decisions start getting worse?",
    related: ["law-of-diminishing-returns", "carlsons-law", "yerkes-dodson-law"],
  },
  {
    slug: "laborits-law",
    name: "Laborit's Law",
    aka: ["Law of least effort"],
    category: "productivity-time",
    oneLiner:
      "People naturally avoid unpleasant tasks and seek immediate rewards — so the hardest, most important work gets postponed.",
    origin:
      "Associated with French surgeon and neuroscientist Henri Laborit, who studied the brain's reward and avoidance behaviour and wrote widely on why people act as they do.",
    explanation: [
      "The brain prefers easy tasks with instant feedback — answering emails, tidying files — over difficult ones with delayed rewards, like strategy or tough conversations.",
      "The common productivity advice that follows is to tackle the most important, unpleasant task first, before easy rewards pull you away.",
    ],
    examples: [
      { title: "Owners", body: "A founder spends the morning on social media replies and never gets to the overdue pricing review." },
      { title: "Sales", body: "Salespeople update CRM notes instead of making difficult follow-up calls." },
      { title: "Managers", body: "A manager delays a necessary performance conversation for weeks." },
    ],
    apply: [
      "Each evening, choose tomorrow's most important hard task.",
      "Do it first, before checking messages.",
      "Break it into a small first step to lower resistance.",
      "Reward yourself after completing it.",
    ],
    misread:
      "It doesn't mean every hard task is important. Prioritise first, then tackle the hard, important ones early.",
    question: "What important task have you been avoiding because it is unpleasant?",
    related: ["premack-principle", "carlsons-law", "parkinsons-law", "law-of-effect"],
    link: { kind: "framework", slug: "main-thing-calendar", label: "Plan your main thing first" },
  },
  {
    slug: "ninety-ninety-rule",
    name: "Ninety-Ninety Rule",
    category: "productivity-time",
    oneLiner:
      "The first 90% of a project takes 90% of the time; the remaining 10% takes the other 90%.",
    origin:
      "Credited to Tom Cargill of Bell Labs and popularised by Jon Bentley's ‘Programming Pearls’ column in Communications of the ACM in 1985.",
    explanation: [
      "The joke adds up to 180% on purpose. The last details — testing, edge cases, polish, approvals — are routinely underestimated and take as long as everything before.",
      "For any project, plan seriously for the ‘last mile’ rather than treating it as nearly done.",
    ],
    examples: [
      { title: "Software", body: "An app is ‘almost ready’ for months while bugs and edge cases are fixed." },
      { title: "Store fit-out", body: "The shop looks complete, but signage, licences, and final inspections take weeks." },
      { title: "Content", body: "A report draft takes a week; editing, design, and sign-off take another." },
    ],
    apply: [
      "Plan explicitly for testing, polish, and approvals.",
      "Define ‘done’ clearly at the start.",
      "Track remaining tasks, not percentage complete.",
      "Launch a smaller version sooner rather than chasing perfection.",
    ],
    misread:
      "It is an exaggeration for effect — but the underestimation of finishing work is very real.",
    question: "What is ‘90% done’ in your business right now, and what is really left?",
    related: ["hofstadters-law", "planning-fallacy", "galls-law", "parkinsons-law"],
  },
  {
    slug: "parkinsons-law-of-triviality",
    name: "Parkinson's Law of Triviality (Bikeshedding)",
    aka: ["Bikeshedding", "Bike-shed effect"],
    category: "productivity-time",
    oneLiner:
      "Groups spend disproportionate time on trivial issues and too little on complex, important ones.",
    origin:
      "C. Northcote Parkinson described it in 1957: a committee approves a nuclear reactor in minutes but debates a staff bike shed at length. Software developer Poul-Henning Kamp popularised ‘bikeshedding’ in 1999.",
    explanation: [
      "Everyone understands simple topics, so everyone has an opinion. Complex topics feel intimidating, so discussion is brief. The result is long debates about logos and short approvals of big budgets.",
      "Good meetings fight this by putting important topics first and limiting time for trivia.",
    ],
    examples: [
      { title: "Meetings", body: "A team spends 40 minutes on the office party menu and five on next year's budget." },
      { title: "Branding", body: "Founders debate logo colours for weeks while pricing goes unexamined." },
      { title: "Approvals", body: "Small expenses get heavy scrutiny while large contracts are approved quickly." },
    ],
    apply: [
      "Put the most important agenda items first.",
      "Set time limits per item based on importance.",
      "Delegate trivial decisions to one person.",
      "Prepare simple summaries for complex topics so people can engage.",
    ],
    misread:
      "Small details aren't worthless — they just shouldn't crowd out big decisions.",
    question: "What did your last team meeting spend the most time on — and was it the most important topic?",
    related: ["parkinsons-law", "kidlins-law", "ringelmann-effect", "pareto-principle"],
  },
  {
    slug: "premack-principle",
    name: "Premack Principle",
    aka: ["Grandma's rule"],
    category: "productivity-time",
    oneLiner:
      "A preferred activity can be used to reward a less preferred one — do the hard thing first, then the enjoyable thing.",
    origin:
      "Psychologist David Premack proposed it in 1959 based on experiments with monkeys and children. It is nicknamed ‘Grandma's rule’: eat your vegetables, then you get dessert.",
    explanation: [
      "Activities people enjoy can reinforce activities they don't. Linking them — ‘first this, then that’ — builds habits without needing external rewards.",
      "Managers, parents, and individuals use it to schedule work so that the pleasant parts follow the important but less enjoyable parts.",
    ],
    examples: [
      { title: "Personal productivity", body: "‘No coffee break until I've called three overdue clients.’" },
      { title: "Teams", body: "A team does the weekly report first thing on Friday, then gets an early finish." },
      { title: "Customers", body: "An app unlocks fun features after users complete profile setup." },
    ],
    apply: [
      "List tasks you avoid and activities you enjoy.",
      "Pair them: avoided task first, enjoyed activity after.",
      "Keep the pairing consistent so the habit forms.",
      "Use the same structure in customer onboarding.",
    ],
    misread:
      "It works best when the reward truly follows the task — skipping the order breaks the habit.",
    question: "Which daily treat could you make conditional on your hardest task?",
    related: ["laborits-law", "law-of-effect", "zeigarnik-effect"],
  },
];

export const LAWS_LEADERSHIP: Law[] = [
  {
    slug: "peter-principle",
    name: "Peter Principle",
    category: "leadership-teams",
    oneLiner:
      "In a hierarchy, people tend to be promoted until they reach a role they are not competent at — and stay there.",
    origin:
      "Educator Laurence J. Peter and writer Raymond Hull set it out in their 1969 book The Peter Principle. A 2019 study by Alan Benson, Danielle Li, and Kelly Shue found top salespeople promoted to manager often became worse managers.",
    explanation: [
      "Promotions usually reward performance in the current role, not ability in the next one. A brilliant salesperson may be a poor sales manager, because the skills are different.",
      "For growing businesses, the lesson is to promote based on the skills the new role needs, and to create career paths that don't force experts into management.",
    ],
    examples: [
      { title: "Sales", body: "The top seller becomes sales head and the team's results fall, while the company loses its best seller." },
      { title: "Technical roles", body: "A great engineer promoted to manager spends days in meetings and is unhappy." },
      { title: "Family businesses", body: "Long-serving staff are promoted to senior roles out of loyalty rather than fit." },
    ],
    apply: [
      "Define the skills each senior role actually needs.",
      "Assess candidates on those skills, not past performance alone.",
      "Offer expert career tracks without management.",
      "Train people before promoting them, and allow a way back.",
    ],
    misread:
      "It doesn't mean promotions are bad — it means they should be based on fit for the next role.",
    question: "Did your last promotion reward fit for the new role, or success in the old one?",
    related: ["dunning-kruger-effect", "pournelles-iron-law", "halo-effect", "pygmalion-effect"],
    link: { kind: "framework", slug: "capable-manpower", label: "Assess capability for roles" },
  },
  {
    slug: "brooks-law",
    name: "Brooks's Law",
    category: "leadership-teams",
    oneLiner:
      "Adding people to a late project makes it later.",
    origin:
      "Fred Brooks, who managed IBM's OS/360 software project, stated it in his 1975 book The Mythical Man-Month.",
    explanation: [
      "New people need training from existing team members, and every extra person adds communication paths. In the short run, adding people slows a struggling project rather than speeding it up.",
      "The principle applies far beyond software: any complex, interdependent work suffers when headcount is thrown at a deadline.",
    ],
    examples: [
      { title: "Software", body: "A late app gets five new developers and slips another month as seniors stop to onboard them." },
      { title: "Events", body: "Adding volunteers the day before an event causes confusion rather than help." },
      { title: "Construction", body: "Extra crews on a site get in each other's way without careful planning." },
    ],
    apply: [
      "When a project is late, first cut scope or extend the deadline.",
      "Add people early, not late, in projects.",
      "Give new people tasks that are easy to separate.",
      "Keep teams small and clearly divided.",
    ],
    misread:
      "It isn't absolute — adding people to easily divided tasks can help. The cost comes from training and coordination.",
    question: "Before adding people to your late project, what scope could you cut instead?",
    related: ["conways-law", "dunbars-number", "ringelmann-effect", "littles-law"],
  },
  {
    slug: "conways-law",
    name: "Conway's Law",
    category: "leadership-teams",
    oneLiner:
      "Organisations design systems and products that mirror their own communication structures.",
    origin:
      "Computer programmer Melvin Conway proposed it in a 1967 paper, published in Datamation in 1968.",
    explanation: [
      "If three teams build a product, it will often have three parts that don't fit neatly together. Customer experience reflects internal silos: the sales promise, the delivery, and the invoice each come from a different department and it shows.",
      "Leaders can use Conway's law in reverse: design team structure around the experience you want customers to have.",
    ],
    examples: [
      { title: "Customer experience", body: "A customer must repeat their problem to three departments because each has its own system." },
      { title: "Websites", body: "A company website is organised by internal departments rather than customer needs." },
      { title: "Products", body: "Separate teams for app and web produce inconsistent experiences." },
    ],
    apply: [
      "Map your customer journey and the teams responsible for each step.",
      "Look for handoffs where the customer feels the seams.",
      "Organise teams around customer outcomes, not functions, where possible.",
      "Create shared ownership for cross-team experiences.",
    ],
    misread:
      "It is not about bad teams — it is a natural pattern that leaders can use deliberately.",
    question: "Where does your customer experience reveal your internal org chart?",
    related: ["brooks-law", "dunbars-number", "teslers-law"],
    link: { kind: "framework", slug: "cx-touchpoints", label: "Map customer touchpoints" },
  },
  {
    slug: "price-law",
    name: "Price's Law",
    category: "leadership-teams",
    oneLiner:
      "In any group, roughly the square root of the number of people produce half of the output.",
    origin:
      "Physicist and historian of science Derek J. de Solla Price proposed it in his 1963 book Little Science, Big Science, studying scientific publishing.",
    explanation: [
      "In a team of 100, about 10 people may produce half the work; in a team of 10, about 3. As organisations grow, output concentrates in a shrinking share of people.",
      "For leaders, it highlights the outsized value of top performers — and the risk when they leave.",
    ],
    examples: [
      { title: "Sales", body: "In a 25-person sales team, five people close half the revenue." },
      { title: "Content", body: "A handful of contributors write most of a community's useful posts." },
      { title: "Software", body: "A few engineers commit most of the critical code." },
    ],
    apply: [
      "Identify your highest-output people.",
      "Protect and retain them actively.",
      "Learn what makes them productive and share it.",
      "Reduce key-person risk with documentation and backup.",
    ],
    misread:
      "It is an empirical pattern from research output, not a precise law for every team — and output isn't the only form of value.",
    question: "If your top three performers left, how much of your output would go with them?",
    related: ["pareto-principle", "matthew-effect", "ringelmann-effect"],
    link: { kind: "framework", slug: "stay-interview-plan", label: "Plan stay interviews" },
  },
  {
    slug: "dunbars-number",
    name: "Dunbar's Number",
    category: "leadership-teams",
    oneLiner:
      "People can maintain only around 150 stable social relationships at a time.",
    origin:
      "Anthropologist Robin Dunbar proposed it in 1992, based on the relationship between brain size and group size in primates.",
    explanation: [
      "Beyond about 150 people, informal trust and shared knowledge break down. Groups that size need more structure, rules, and management.",
      "Some companies deliberately keep units below this size. W. L. Gore & Associates (maker of Gore-Tex) famously kept plants to around 150 people.",
    ],
    examples: [
      { title: "Company growth", body: "A company that ran on personal relationships at 80 people struggles with coordination at 200." },
      { title: "Factories", body: "Manufacturers split large sites into smaller units to keep teams close-knit." },
      { title: "Communities", body: "Online communities form sub-groups as they grow." },
    ],
    apply: [
      "Expect informal systems to break somewhere between 100 and 200 people.",
      "Add structure — clear roles, SOPs, team leads — before you reach that point.",
      "Keep teams and units small enough for trust.",
      "Use sub-communities to keep large customer groups engaged.",
    ],
    misread:
      "150 is an estimate with wide variation, and later studies debate it. The point is that relationship capacity has limits.",
    question: "Is your company approaching the size where informal ways of working stop scaling?",
    related: ["brooks-law", "conways-law", "metcalfes-law", "ringelmann-effect"],
    link: { kind: "framework", slug: "scale-up-plan", label: "Plan for scale" },
  },
  {
    slug: "ringelmann-effect",
    name: "Ringelmann Effect",
    aka: ["Social loafing"],
    category: "leadership-teams",
    oneLiner:
      "As group size increases, individual effort tends to decrease.",
    origin:
      "French agricultural engineer Max Ringelmann found in rope-pulling experiments (published 1913) that people pulled less hard in groups. Bibb Latané and colleagues later named it ‘social loafing’ in 1979.",
    explanation: [
      "In larger groups, individual contributions are less visible and responsibility is diffused. People coast, assuming others will carry the load.",
      "The fix is to keep teams small, make individual contributions visible, and give each person clear ownership.",
    ],
    examples: [
      { title: "Meetings", body: "In a 15-person meeting, most people stay quiet and few take action items." },
      { title: "Group projects", body: "One or two people do most of the work while others free-ride." },
      { title: "Shared tasks", body: "A shared office kitchen stays messy because nobody feels responsible." },
    ],
    apply: [
      "Keep teams small.",
      "Assign clear individual ownership for every task.",
      "Make individual contributions visible.",
      "Set shared goals that people care about.",
    ],
    misread:
      "It doesn't mean teamwork fails — well-designed teams outperform individuals. It means size and clarity matter.",
    question: "Which task in your business has many people responsible — and therefore no one?",
    related: ["brooks-law", "tragedy-of-the-commons", "price-law", "dunbars-number"],
  },
  {
    slug: "pygmalion-effect",
    name: "Pygmalion Effect",
    aka: ["Rosenthal effect"],
    category: "leadership-teams",
    oneLiner:
      "Higher expectations from leaders lead to higher performance from the people they lead.",
    origin:
      "Psychologists Robert Rosenthal and Lenore Jacobson's 1968 study Pygmalion in the Classroom found students whom teachers expected to improve did improve more. The name comes from the Greek myth of a sculptor whose statue came to life.",
    explanation: [
      "Expectations shape behaviour. Leaders who believe in someone give them more attention, feedback, and opportunity — and that person rises to meet it. Low expectations have the opposite effect (sometimes called the Golem effect).",
      "Managers can use this by setting high but realistic expectations and genuinely communicating belief in their team.",
    ],
    examples: [
      { title: "Management", body: "A manager who tells a new hire ‘I think you could lead this account’ sees them step up." },
      { title: "Training", body: "Trainees told they have high potential often outperform others with similar skills." },
      { title: "Family businesses", body: "Next-generation members given real responsibility early grow faster than those kept in junior roles." },
    ],
    apply: [
      "Communicate genuine belief in each team member's potential.",
      "Set stretching but achievable expectations.",
      "Back expectations with support, training, and feedback.",
      "Watch for low expectations you may be signalling without realising.",
    ],
    misread:
      "Expectations alone don't create skill — they must be paired with support and realistic goals.",
    question: "Who on your team would perform better if you told them you believed they could?",
    related: ["hawthorne-effect", "yerkes-dodson-law", "peter-principle", "halo-effect"],
    link: { kind: "framework", slug: "performance-culture", label: "Build a performance culture" },
  },
  {
    slug: "hawthorne-effect",
    name: "Hawthorne Effect",
    aka: ["Observer effect"],
    category: "leadership-teams",
    oneLiner:
      "People change their behaviour when they know they are being observed or studied.",
    origin:
      "Named after studies at Western Electric's Hawthorne Works near Chicago from 1924 to 1932, where productivity seemed to rise whenever conditions changed. Sociologist Henry Landsberger coined the term in 1958. Later reanalyses questioned the original data, but the general effect is widely accepted.",
    explanation: [
      "When people know they are being watched, they tend to work harder or behave better. That means short observations or pilots can show unrealistically good results.",
      "For managers, attention itself can improve performance — but measurement must account for it.",
    ],
    examples: [
      { title: "Pilots", body: "A new process shows great results during a closely watched pilot, then fades once attention moves on." },
      { title: "Audits", body: "Staff behaviour improves during visits from head office." },
      { title: "Customer research", body: "Customers behave differently in a usability test than at home." },
    ],
    apply: [
      "Run pilots long enough for novelty to wear off.",
      "Compare with a control group where possible.",
      "Use attention and recognition as a deliberate management tool.",
      "Measure outcomes over time, not just during observation.",
    ],
    misread:
      "It doesn't mean improvements are fake — attention genuinely helps. But results during observation may not last.",
    question: "Are your best pilot results just the effect of everyone paying close attention?",
    related: ["pygmalion-effect", "goodharts-law", "law-of-effect"],
  },
  {
    slug: "littles-law",
    name: "Little's Law",
    category: "leadership-teams",
    oneLiner:
      "Average work in progress equals throughput multiplied by average time each item spends in the system (L = λW).",
    origin:
      "Operations researcher John D. C. Little published the proof in 1961. It is now a foundation of queueing theory, lean manufacturing, and service operations.",
    explanation: [
      "If a clinic sees 10 patients an hour and each spends 30 minutes there, about 5 patients are inside at any time. Change any two numbers and the third follows.",
      "The business insight: to make things faster (shorter lead time), you either increase throughput or reduce work in progress. Starting more jobs at once usually makes everything slower.",
    ],
    examples: [
      { title: "Manufacturing", body: "A workshop with 60 jobs open and finishing 10 a day has an average lead time of six days; cutting open jobs to 30 halves it." },
      { title: "Agencies", body: "An agency juggling 20 projects with the same team delivers each one slower than if it took on 10 at a time." },
      { title: "Retail", body: "Restaurants use it to estimate wait times and table needs." },
    ],
    apply: [
      "Measure your work in progress, throughput, and lead time.",
      "To cut lead time, limit how many jobs are open at once.",
      "Increase throughput by fixing bottlenecks.",
      "Use the formula to plan staffing and capacity.",
    ],
    misread:
      "It describes averages in a stable system; it won't predict every individual job's time.",
    question: "How many jobs do you have open right now, and is that slowing everything down?",
    related: ["brooks-law", "parkinsons-law", "law-of-diminishing-returns"],
    strategySlugs: ["theory-of-constraints", "lean-kaizen", "just-in-time-inventory"],
    link: { kind: "tool", slug: "inventory-turns", label: "Check your inventory turns" },
  },
  {
    slug: "pournelles-iron-law",
    name: "Pournelle's Iron Law of Bureaucracy",
    category: "leadership-teams",
    oneLiner:
      "In any bureaucracy, the people devoted to the organisation itself eventually gain control over those devoted to its goals.",
    origin:
      "Formulated by American science-fiction author and essayist Jerry Pournelle, who wrote about it from the 1970s onward.",
    explanation: [
      "Organisations contain two kinds of people: those focused on the mission (teaching, building, selling) and those focused on the organisation (rules, reporting, internal politics). Over time, the second group tends to gain power.",
      "For growing businesses, this is a warning to keep customer-facing and mission-focused people in decision-making roles as admin layers grow.",
    ],
    examples: [
      { title: "Growing companies", body: "Approval layers multiply until frontline staff can't make simple customer decisions." },
      { title: "Education", body: "Administrative staff grow faster than teaching staff in many institutions." },
      { title: "Corporates", body: "Internal reporting consumes more time than customer work." },
    ],
    apply: [
      "Keep people close to customers in leadership decisions.",
      "Review admin processes and approvals regularly.",
      "Measure time spent on internal work versus customer work.",
      "Empower frontline staff to solve problems.",
    ],
    misread:
      "Administration is necessary — the warning is about it taking over the mission.",
    question: "Who makes the big decisions in your business: people close to customers, or people close to the paperwork?",
    related: ["parkinsons-law", "peter-principle", "goodharts-law", "chestertons-fence"],
  },
];
