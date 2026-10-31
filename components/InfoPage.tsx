import { Breadcrumbs } from "./Breadcrumbs";
import { CONTENT_REVIEWED, formatDate } from "@/lib/site";

export function InfoPage({
  label,
  title,
  path,
  intro,
  showUpdated = true,
  children,
}: {
  label: string;
  title: string;
  path: string;
  intro?: string;
  showUpdated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <Breadcrumbs items={[{ name: title, path }]} />
      <p className="rule-label mb-3">{label}</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
      {showUpdated && <p className="mt-3 text-xs text-ink-faint">Last updated: {formatDate(CONTENT_REVIEWED)}</p>}
      <div className="prose-ledger mt-8">{children}</div>
    </main>
  );
}
