import type { ComplianceTopic } from "./knowledgeTypes";

export const COMPLIANCE_DISCLAIMER =
  "This section is general educational orientation, not legal, tax, or professional advice. Registration thresholds, rates, and rules change and often vary by state — always confirm current requirements with a qualified chartered accountant, company secretary, or lawyer before acting.";

export const COMPLIANCE_TOPICS: ComplianceTopic[] = [
  {
    slug: "choosing-a-business-structure",
    title: "Choosing a business structure",
    appliesTo: ["New businesses", "Anyone formalising an existing informal business"],
    summary:
      "The legal structure you register under shapes your liability, tax treatment, ability to raise funding, and compliance burden — it's usually the first formal decision a new business makes.",
    points: [
      { heading: "Sole proprietorship", body: "The simplest structure — you and the business are legally the same entity. Easiest to start, but you carry unlimited personal liability for business debts." },
      { heading: "Partnership", body: "Two or more owners share ownership, profit, and liability under a partnership deed. Like a proprietorship, liability is typically personal and unlimited unless structured otherwise." },
      { heading: "Limited liability partnership (LLP)", body: "Combines partnership flexibility with limited liability — partners generally aren't personally liable beyond their investment, subject to the specific agreement and law." },
      { heading: "Private limited company", body: "A separate legal entity from its owners, offering limited liability and generally seen as more credible to investors and larger clients, at the cost of more compliance and reporting." },
      { heading: "What to weigh", body: "Consider your liability comfort, whether you plan to raise outside investment, how much compliance overhead you can handle, and your growth ambitions — a chartered accountant or company secretary can help match the structure to your actual plans." },
    ],
  },
  {
    slug: "gst-registration-orientation",
    title: "GST registration — what it is and when it applies",
    appliesTo: ["Businesses selling goods or services", "E-commerce sellers", "Service providers"],
    summary:
      "Goods and Services Tax (GST) registration is required once your business crosses certain activity or turnover conditions, and it changes how you invoice, collect tax, and file returns.",
    points: [
      { heading: "What GST registration means", body: "Once registered, a business collects GST on applicable sales, can claim credit for GST paid on business purchases, and must file periodic returns." },
      { heading: "Turnover-based and activity-based triggers", body: "Registration is generally required beyond certain annual turnover levels, and separately required for certain activities (like inter-state sales or e-commerce) regardless of turnover. These thresholds are set by law and do change — verify the current figures on the official GST portal or with a CA rather than assuming a remembered number is still current." },
      { heading: "Voluntary registration", body: "Even businesses below the mandatory threshold can register voluntarily, which is sometimes worthwhile to claim input tax credit or to appear more credible to B2B customers who prefer GST-registered vendors." },
      { heading: "Ongoing compliance", body: "Registration brings recurring obligations — periodic return filing and accurate invoicing — that are easier to build into your systems from day one than to retrofit later." },
    ],
  },
  {
    slug: "shops-establishment-registration",
    title: "Shops & Establishment registration",
    appliesTo: ["Retail shops", "Offices", "Restaurants", "Any commercial establishment with a physical premises"],
    summary:
      "Most states require any commercial establishment — a shop, office, or other place of business — to register under the state's Shops & Establishment Act, which also governs basic working conditions.",
    points: [
      { heading: "Why it exists", body: "This registration is typically the base-level legal recognition of your establishment, often required before you can open certain other accounts (like a current bank account) or apply for other licenses." },
      { heading: "What it usually covers", body: "The Act typically regulates working hours, holidays, and basic working conditions for employees at the registered establishment, alongside registration itself." },
      { heading: "It's state-specific", body: "Because this is state legislation, exact rules, forms, and fees vary by state — check with your local municipal or labour department, or a local compliance professional." },
    ],
  },
  {
    slug: "employee-related-registrations",
    title: "Employee-related registrations (PF, ESI, and labour compliance)",
    appliesTo: ["Any business hiring employees beyond a small headcount"],
    summary:
      "Once a business hires beyond a certain number of employees, various labour-law registrations — provident fund, employee state insurance, and others — typically become mandatory.",
    points: [
      { heading: "Provident Fund (PF)", body: "A retirement savings scheme where both employer and employee contribute a percentage of wages, generally becoming mandatory once employee headcount crosses a legally defined threshold." },
      { heading: "Employee State Insurance (ESI)", body: "A health and social security scheme for employees below a certain wage level, again triggered by headcount and wage thresholds set in law." },
      { heading: "Other labour law obligations", body: "Depending on your state and sector, additional registrations or compliance (minimum wages, professional tax, gratuity, and others) may apply as headcount grows." },
      { heading: "Why to get this right early", body: "Labour compliance is one of the areas where get-it-right-later is genuinely risky — back-dated penalties and employee disputes are far more costly than setting up correctly from the first qualifying hire. A CA or labour law consultant can confirm exactly which registrations apply to your specific headcount and sector." },
    ],
  },
  {
    slug: "msme-udyam-registration",
    title: "MSME / Udyam registration",
    appliesTo: ["Micro, small, and medium enterprises across manufacturing and services"],
    summary:
      "Udyam registration formally classifies your business as a micro, small, or medium enterprise, unlocking a range of government support schemes, credit benefits, and procurement preferences.",
    points: [
      { heading: "Why it's worth doing", body: "Registered MSMEs often get preferential lending terms, protection against delayed payments from larger buyers, and eligibility for various government schemes and subsidies not available to unregistered businesses." },
      { heading: "Classification", body: "Businesses are classified as micro, small, or medium based on investment in plant/equipment and annual turnover, with specific thresholds set and periodically revised by the government — check the current classification criteria on the official Udyam portal." },
      { heading: "How to register", body: "Registration is done online through the official Udyam portal and is generally free — be cautious of third parties charging significant fees for a straightforward self-service process." },
    ],
  },
  {
    slug: "trademark-ip-basics",
    title: "Trademark and IP protection basics",
    appliesTo: ["Any business with a brand name, logo, or proprietary product/process worth protecting"],
    summary:
      "Registering a trademark gives you legal exclusivity over your brand name or logo in your registered category, which becomes valuable the moment your brand has any recognition worth protecting.",
    points: [
      { heading: "Why register early", body: "Trademark rights are generally granted on a first-to-register basis in many respects — waiting until a brand is already valuable increases the risk that someone else registers a similar mark first." },
      { heading: "What can be protected", body: "Brand names, logos, taglines, and in some cases distinctive packaging or product shapes can potentially be registered, each requiring a separate application and search process." },
      { heading: "Patents and copyrights are separate", body: "A genuinely novel invention or process may be eligible for patent protection, and original creative works for copyright — these are legally distinct from trademark protection and involve different application processes." },
      { heading: "Getting it done properly", body: "A trademark or IP attorney can run a proper clearance search before you invest heavily in a brand name, which is far cheaper than rebranding after a conflict is discovered later." },
    ],
  },
  {
    slug: "fssai-license-food-businesses",
    title: "FSSAI license for food businesses",
    appliesTo: ["Restaurants", "Food manufacturers", "Food delivery and cloud kitchens", "Packaged food sellers"],
    summary:
      "Any business that manufactures, processes, stores, distributes, or sells food in India generally requires registration or licensing under the Food Safety and Standards Authority of India.",
    points: [
      { heading: "Tiered licensing", body: "Requirements are generally tiered by business scale — smaller food businesses typically need basic registration, while larger manufacturers and processors need a more comprehensive license, with specific thresholds set by FSSAI." },
      { heading: "What it covers", body: "The license framework covers food safety standards, hygiene practices, labelling requirements, and periodic inspections relevant to your specific food business category." },
      { heading: "Why it matters beyond legality", body: "Beyond being a legal requirement, valid FSSAI registration is increasingly expected by customers, delivery platforms, and B2B buyers as a basic trust signal in the food category." },
    ],
  },
  {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    appliesTo: ["Businesses importing goods", "Businesses exporting goods or services internationally"],
    summary:
      "Any business that wants to import or export goods or services across Indian borders generally needs an Import Export Code issued by the Directorate General of Foreign Trade.",
    points: [
      { heading: "When it's needed", body: "An IEC is generally required before customs clearance for imports or exports, and is also often required by international payment gateways and banks for cross-border transactions." },
      { heading: "How to get one", body: "The application is done online through the DGFT portal and is a one-time registration, though periodic updates may be required to keep it active." },
      { heading: "Related compliance", body: "Depending on your product category and destination markets, additional export/import compliance (quality certifications, restricted goods rules) may apply — a customs or trade compliance consultant can confirm what's relevant to your specific goods." },
    ],
  },
  {
    slug: "gst-invoicing-and-e-way-bills",
    title: "GST invoicing and e-way bills",
    appliesTo: ["GST-registered businesses", "Businesses transporting goods above certain value thresholds"],
    summary:
      "Once GST-registered, invoices must follow a specific format, and moving goods above certain value thresholds generally requires an accompanying e-way bill.",
    points: [
      { heading: "Invoice requirements", body: "GST invoices generally need to include specific details — GSTIN, HSN/SAC codes, tax breakup, and other prescribed fields — that differ from a simple informal bill." },
      { heading: "E-way bills", body: "Transporting goods above certain value thresholds generally requires generating an e-way bill before the goods move, which can be checked by authorities in transit — the exact threshold and rules are set by GST law and worth confirming currently rather than assuming." },
      { heading: "Why systemising this early helps", body: "Building compliant invoicing into your billing software or process from the start avoids the disruption of retrofitting it later once volume grows and mistakes become more costly to unwind." },
    ],
  },
];
