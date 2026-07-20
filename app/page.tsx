import Link from "next/link";
import { TOOLS } from "@/lib/registry";
import { WORKSHEETS } from "@/lib/worksheets";
import { JOURNEYS } from "@/lib/journeys";
import { LEARN_DAYS } from "@/lib/learn";
import { INDUSTRIES } from "@/lib/industries";
import { STRATEGIES } from "@/lib/strategies";
import { CASE_STUDIES } from "@/lib/caseStudies";

const ENTRY_POINTS = [
  {
    href: "/checkup",
    label: "Health checkup",
    desc: "Rate your business across five vital signs and get prescribed exactly what to work on.",
    stat: "5 min",
  },
  {
    href: "/journeys",
    label: "Journeys",
    desc: "Start from the problem you actually have — a guided sequence does the rest.",
    stat: `${JOURNEYS.length} journeys`,
  },
  {
    href: "/tools",
    label: "Tools",
    desc: "Interactive calculators that turn your numbers into a verdict, not a lecture.",
    stat: `${TOOLS.length} tools`,
  },
  {
    href: "/frameworks",
    label: "Frameworks",
    desc: "The full register of execution worksheets, organised by category.",
    stat: `${WORKSHEETS.length} worksheets`,
  },
  {
    href: "/learn",
    label: "Learn mode",
    desc: "Foundations, the full flagship program, and quick-fire booster days — with quizzes that track what you still need to review.",
    stat: `${LEARN_DAYS.length} lessons · 3 tracks`,
  },
  {
    href: "/knowledge",
    label: "Knowledge bank",
    desc: "Industry playbooks, a global strategy atlas, real case studies, a glossary, templates, and a compliance quick-reference.",
    stat: `${INDUSTRIES.length} industries · ${STRATEGIES.length} strategies · ${CASE_STUDIES.length} case studies`,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      <section className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
        <div className="rise">
          <p className="rule-label mb-4">entry no. 001 · why this exists</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Business knowledge is useless until it&apos;s{" "}
            <em className="text-vermillion not-italic underline decoration-2 underline-offset-8">
              applied to yours.
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Disha turns proven business frameworks into working tools. Diagnose
            your business in five minutes, follow a guided path for the
            problem you actually have, and leave every session with entries
            in your own action plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/checkup" className="btn-ink px-6 py-3 font-medium">
              Start the health checkup →
            </Link>
            <Link href="/journeys" className="btn-outline px-6 py-3 font-medium">
              Start from a problem
            </Link>
          </div>
        </div>
        <div className="rise rise-2 hidden items-center justify-center md:flex">
          <div className="stamp h-44 w-44 flex-col gap-1 text-center text-xs">
            <span className="text-2xl font-semibold">
              {TOOLS.length + WORKSHEETS.length}
            </span>
            <span>tools & frameworks</span>
            <span>· est. 2026 ·</span>
          </div>
        </div>
      </section>

      <section className="ledger-card rise rise-3 mb-20 grid gap-0 md:grid-cols-3">
        {[
          {
            n: "1",
            t: "Diagnose",
            d: "Rate your business across five vital signs, or pick the symptom that matches how you feel right now.",
          },
          {
            n: "2",
            t: "Apply",
            d: "A tool, a worksheet, or a lesson — each ends with numbers or decisions, not theory.",
          },
          {
            n: "3",
            t: "Act",
            d: "Everything you work out is saved into one action plan you can print and put on the wall.",
          },
        ].map((s, i) => (
          <div
            key={s.n}
            className={`p-7 ${i < 2 ? "border-b border-ink md:border-b-0 md:border-r" : ""}`}
          >
            <p className="font-numeric text-4xl text-vermillion">{s.n}</p>
            <h3 className="font-display mt-2 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="pb-20">
        <p className="rule-label mb-2">six ways in</p>
        <h2 className="font-display mb-8 text-3xl font-semibold md:text-4xl">
          Wherever you start, it all lands in one plan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRY_POINTS.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="ledger-card-flat group flex flex-col justify-between p-6 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold group-hover:text-vermillion">
                  {e.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.desc}</p>
              </div>
              <p className="rule-label mt-4">{e.stat} →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
