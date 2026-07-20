import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { STRATEGIES } from "@/lib/strategies";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { GLOSSARY } from "@/lib/glossary";
import { TEMPLATES } from "@/lib/templates";
import { COMPLIANCE_TOPICS } from "@/lib/compliance";

const SECTIONS = [
  {
    href: "/industries",
    label: "Industry playbooks",
    desc: "Deep, industry-specific strategy, benchmarks, and pitfalls — not generic advice.",
    stat: `${INDUSTRIES.length} industries`,
  },
  {
    href: "/strategies",
    label: "Strategy atlas",
    desc: "Named global strategies in plain language — what they mean, when to use them, when they backfire.",
    stat: `${STRATEGIES.length} strategies`,
  },
  {
    href: "/benchmarks",
    label: "Benchmarks bank",
    desc: "The numbers behind every tool — know if your margin, CAC, or turnover is actually good.",
    stat: `${INDUSTRIES.length} industries covered`,
  },
  {
    href: "/case-studies",
    label: "Case studies & failures",
    desc: "Real Indian and global business stories — builds, pivots, turnarounds, and honest failures.",
    stat: `${CASE_STUDIES.length} stories`,
  },
  {
    href: "/glossary",
    label: "Glossary",
    desc: "Every business and finance term, explained without jargon.",
    stat: `${GLOSSARY.length} terms`,
  },
  {
    href: "/templates",
    label: "Document templates",
    desc: "Fillable, printable starting drafts for common business documents.",
    stat: `${TEMPLATES.length} templates`,
  },
  {
    href: "/compliance",
    label: "India compliance quick-reference",
    desc: "General orientation on registrations and compliance areas — not legal advice.",
    stat: `${COMPLIANCE_TOPICS.length} topics`,
  },
];

export default function KnowledgeHub() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="rule-label mb-3">the knowledge bank</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">
        Everything that isn't a tool or a worksheet
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        Context, reference, and real-world proof to sit alongside the interactive tools —
        industry-specific strategy, a global strategy atlas, benchmarks, case studies, a glossary,
        templates, and a compliance quick-reference.
      </p>
      <Link href="/search" className="btn-ink mt-6 inline-block px-6 py-3 font-medium">
        Search the whole knowledge bank →
      </Link>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="ledger-card-flat group flex flex-col justify-between p-6 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold group-hover:text-vermillion">
                {s.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
            <p className="rule-label mt-4">{s.stat} →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
