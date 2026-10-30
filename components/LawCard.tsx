import Link from "next/link";
import type { Law } from "@/lib/knowledgeTypes";

export function LawCard({ law }: { law: Law }) {
  return (
    <Link
      href={`/laws/${law.slug}`}
      className="ledger-card-flat group p-5 transition-all hover:shadow-[4px_4px_0_0_var(--color-ink)]"
    >
      <h3 className="font-display text-xl font-semibold group-hover:text-vermillion">{law.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{law.oneLiner}</p>
    </Link>
  );
}
