import type { DocTemplate } from "./knowledgeTypes";

type Guide = NonNullable<DocTemplate["guide"]>;

// Guides for the original templates, keyed by slug.
export const TEMPLATE_GUIDES: Record<string, Guide> = {
  "job-offer-letter": {
    intro: ["A job offer letter confirms that you want to hire a candidate and sets out the role, pay and joining date. It's the candidate's first formal document from you, so it should be clear and welcoming.", "A detailed appointment letter usually follows once they join."],
    include: ["Role and reporting manager", "Joining date and location", "CTC and key benefits", "Probation period", "Offer validity date", "Acceptance instructions"],
    tips: ["Send it soon after the final interview.", "Keep salary details consistent with the appointment letter.", "Set a deadline to accept.", "Mention documents to bring on day one."],
    faqs: [
      { q: "Is an offer letter legally binding?", a: "Once accepted, it can form part of the employment agreement. The detailed terms are usually in the appointment letter." },
      { q: "What is the difference between an offer letter and an appointment letter?", a: "An offer letter proposes employment; an appointment letter confirms detailed terms after joining." },
      { q: "Can an offer be withdrawn?", a: "It's possible but can damage your reputation and may have legal implications. Take advice if needed." },
    ],
  },
  "mutual-nda": {
    intro: ["A mutual non-disclosure agreement (NDA) protects confidential information both parties share — for example, when exploring a partnership, supplier deal or investment.", "It defines what is confidential, how it can be used and for how long."],
    include: ["Parties and effective date", "Purpose of sharing information", "Definition of confidential information", "Obligations and permitted use", "Exclusions", "Duration and return of information", "Governing law"],
    tips: ["Keep the definition of confidential information specific.", "Set a reasonable duration.", "Only share what's necessary even under an NDA.", "Have a lawyer review high-stakes NDAs."],
    faqs: [
      { q: "What is the difference between a mutual and one-way NDA?", a: "A mutual NDA protects both parties' information; a one-way NDA protects only one side." },
      { q: "How long does an NDA last?", a: "Commonly two to five years, depending on how sensitive the information is." },
      { q: "Are NDAs enforceable in India?", a: "Generally yes, under contract law, if they are reasonable and properly executed." },
    ],
  },
  "invoice-template": {
    intro: ["An invoice requests payment for goods or services you've supplied. For GST-registered businesses, a tax invoice must contain specific details.", "Clear invoices help you get paid faster and keep accounts clean."],
    include: ["Your name, address and GSTIN", "Invoice number and date", "Customer details and GSTIN (for B2B)", "HSN/SAC codes, quantity, rate", "Taxable value, GST rate and amount", "Total and payment terms"],
    tips: ["Number invoices sequentially.", "State the due date clearly.", "Send invoices immediately after delivery.", "Follow up on overdue invoices quickly."],
    faqs: [
      { q: "What must a GST invoice contain?", a: "Supplier and recipient details, GSTIN, invoice number and date, HSN/SAC, description, quantity, taxable value, tax rate and amount, place of supply and signature." },
      { q: "What is the difference between a proforma invoice and a tax invoice?", a: "A proforma invoice is a preliminary bill or quotation; a tax invoice is the final document for supply and GST." },
      { q: "How quickly should I send an invoice?", a: "As soon as goods or services are delivered, to avoid payment delays." },
    ],
  },
  "vendor-agreement-checklist": {
    intro: ["A vendor agreement checklist helps you make sure every important term is covered before you sign with a supplier.", "It reduces disputes over quality, delivery and payment."],
    include: ["Scope and specifications", "Pricing and payment terms", "Delivery schedule and penalties", "Quality standards and inspection", "Warranties", "Termination and dispute resolution"],
    tips: ["Define quality in measurable terms.", "Agree on what happens if delivery is late.", "Avoid single-supplier dependence for critical items.", "Review contracts annually."],
    faqs: [
      { q: "Why do I need a vendor agreement?", a: "To set clear expectations on price, quality and delivery, and to protect you if something goes wrong." },
      { q: "What is a service-level agreement (SLA)?", a: "A set of measurable standards a vendor must meet, often with penalties for missing them." },
      { q: "Should small businesses use written vendor agreements?", a: "Yes — even a short written agreement prevents many disputes." },
    ],
  },
  "performance-appraisal-form": {
    intro: ["A performance appraisal form records how an employee performed against goals and agreed competencies, and what they'll work on next.", "Used regularly, it makes feedback fair and focused."],
    include: ["Review period", "Goals and results", "Competency ratings", "Strengths and areas to improve", "Development plan", "Signatures of employee and manager"],
    tips: ["Base ratings on evidence.", "Hold reviews at least twice a year.", "Agree specific goals for the next period.", "Let employees self-assess first."],
    faqs: [
      { q: "How often should appraisals be done?", a: "Many businesses do them annually, but quarterly or half-yearly reviews give more timely feedback." },
      { q: "What is a self-appraisal?", a: "The employee's own assessment of their performance, discussed with the manager." },
      { q: "How do I make appraisals fair?", a: "Use clear criteria, evidence and consistent ratings across employees." },
    ],
  },
  "exit-interview-record": {
    intro: ["An exit interview record captures why an employee is leaving and what could be improved. Patterns across many exits reveal problems in pay, management or culture.", "Keep it confidential so people speak honestly."],
    include: ["Reason for leaving", "Feedback on role, manager and culture", "What could have retained them", "Suggestions", "Would they return or recommend the company"],
    tips: ["Have someone other than the direct manager conduct it.", "Look for patterns, not one-off comments.", "Act on repeated issues.", "Thank the employee for honest feedback."],
    faqs: [
      { q: "Why are exit interviews useful?", a: "They reveal reasons for attrition that current employees may not raise." },
      { q: "Should exit interviews be confidential?", a: "Yes, to encourage honest answers." },
      { q: "What should I do with the feedback?", a: "Review it every quarter for trends and take action on recurring issues." },
    ],
  },
  "partnership-term-sheet": {
    intro: ["A partnership term sheet summarises the key commercial terms of a proposed partnership before a full agreement is drafted.", "It aligns both sides early and saves legal time."],
    include: ["Partners and purpose", "Contributions", "Profit sharing", "Roles and decision-making", "Exclusivity", "Duration and exit"],
    tips: ["Agree the big terms first.", "Mark which clauses are binding.", "Set a target date for the full agreement.", "Get legal review before signing the final deal."],
    faqs: [
      { q: "Is a term sheet legally binding?", a: "Usually most clauses are non-binding, except confidentiality and exclusivity. State this clearly." },
      { q: "Why use a term sheet?", a: "To agree key terms quickly before investing in a full legal agreement." },
      { q: "What comes after a term sheet?", a: "Due diligence and a detailed partnership or joint venture agreement." },
    ],
  },
  "client-proposal": {
    intro: ["A client proposal explains how you'll solve a client's problem, what you'll deliver and what it will cost. Good proposals focus on the client's outcomes, not your company history.", "It often follows a discovery call."],
    include: ["Client's problem and goals", "Proposed solution and scope", "Deliverables and timeline", "Pricing options", "Why you", "Next steps"],
    tips: ["Mirror the client's language from the discovery call.", "Offer two or three pricing options.", "Include proof — case studies or results.", "Set an expiry date."],
    faqs: [
      { q: "What is the difference between a proposal and a quotation?", a: "A proposal explains the solution and value in detail; a quotation lists prices for defined items." },
      { q: "How long should a proposal be?", a: "Long enough to be clear — often 2–6 pages for small projects." },
      { q: "How do I improve proposal win rates?", a: "Understand the client's problem well, show outcomes and proof, and follow up promptly." },
    ],
  },
  "vendor-purchase-order": {
    intro: ["A purchase order (PO) is the buyer's formal order to a supplier, listing items, quantities, prices and delivery terms.", "It authorises the purchase and helps match invoices to orders."],
    include: ["PO number and date", "Supplier details", "Items, quantities and agreed prices", "Delivery date and address", "Payment terms", "Authorised signature"],
    tips: ["Use sequential PO numbers.", "Match every invoice to a PO before paying.", "Confirm the supplier accepts the PO.", "Record changes as amendments."],
    faqs: [
      { q: "What is the difference between a purchase order and an invoice?", a: "A PO is issued by the buyer to order goods; an invoice is issued by the seller to request payment." },
      { q: "Is a purchase order legally binding?", a: "Once accepted by the supplier, it forms a contract." },
      { q: "Do small businesses need POs?", a: "They help control spending and avoid disputes, even for small businesses." },
    ],
  },
  "rent-agreement": {
    intro: ["A commercial rent agreement records the terms for renting a shop, office or warehouse. In India, leases above certain durations need stamping and registration.", "This template captures key terms to agree before a formal agreement is drawn up."],
    include: ["Parties and property", "Rent, deposit and escalation", "Lease period and lock-in", "Maintenance and utilities", "Permitted use", "Notice and termination"],
    tips: ["Check stamp duty and registration rules in your state.", "Agree escalation in writing.", "Record the property's condition at handover.", "Clarify who pays for repairs."],
    faqs: [
      { q: "Does a commercial rent agreement need registration?", a: "Leases beyond 11 months generally need to be stamped and registered under Indian law; rules and duty vary by state." },
      { q: "What is a lock-in period?", a: "A minimum period during which neither party can terminate without penalty." },
      { q: "How much security deposit is typical?", a: "It varies by city and property type; commercial deposits are often several months' rent." },
    ],
  },
  "freelancer-contract": {
    intro: ["A freelancer or independent contractor agreement defines the work, payment and ownership of output between a business and a freelancer.", "It protects both sides and clarifies that the freelancer isn't an employee."],
    include: ["Scope of work and deliverables", "Timeline", "Fees and payment schedule", "Intellectual property ownership", "Confidentiality", "Termination"],
    tips: ["Define deliverables precisely.", "State who owns the final work.", "Use milestone payments for larger projects.", "Agree revision limits."],
    faqs: [
      { q: "Who owns work created by a freelancer?", a: "It depends on the contract — specify that ownership transfers to the client on payment if that's intended." },
      { q: "Is TDS applicable on payments to freelancers?", a: "TDS may apply depending on the nature and amount of payment. Check current rules with a professional." },
      { q: "How do I avoid disputes with freelancers?", a: "Clear scope, milestones, revision limits and written approvals." },
    ],
  },
  "marketing-calendar": {
    intro: ["A marketing calendar plans campaigns, content and promotions across the year, aligned with festivals, launches and seasonal demand.", "It helps teams prepare early and keep messaging consistent."],
    include: ["Key dates and festivals", "Campaigns and launches", "Channels", "Owners", "Budget", "Success metrics"],
    tips: ["Plan festival campaigns six to eight weeks ahead.", "Balance promotions with value content.", "Review results monthly.", "Use our content calendar tool for weekly posts."],
    faqs: [
      { q: "Why use a marketing calendar?", a: "It prevents last-minute campaigns, aligns teams and ensures consistent activity." },
      { q: "Which dates matter most in India?", a: "Major festivals such as Diwali, plus regional festivals, sale seasons and industry-specific events." },
      { q: "How far ahead should I plan?", a: "A yearly outline with detailed plans one quarter ahead works well." },
    ],
  },
  "board-meeting-minutes": {
    intro: ["Meeting minutes record what was discussed, decided and assigned in a board or leadership meeting. For companies, board minutes are a legal requirement.", "Good minutes make accountability clear."],
    include: ["Date, time and attendees", "Agenda items", "Key discussion points", "Decisions and resolutions", "Action items with owners and deadlines", "Next meeting date"],
    tips: ["Circulate minutes within 48 hours.", "Record decisions clearly, not every word.", "Track action items at the next meeting.", "Follow company law requirements for board minutes."],
    faqs: [
      { q: "Are board meeting minutes mandatory?", a: "For companies under the Companies Act, 2013, minutes of board meetings must be prepared and maintained." },
      { q: "Who signs the minutes?", a: "Typically the chairperson of the meeting or the next meeting." },
      { q: "What is a resolution?", a: "A formal decision approved by the board or shareholders." },
    ],
  },
};
