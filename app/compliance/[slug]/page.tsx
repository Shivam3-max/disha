import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPLIANCE_TOPICS, COMPLIANCE_DISCLAIMER } from "@/lib/compliance";

export function generateStaticParams() {
  return COMPLIANCE_TOPICS.map((c) => ({ slug: c.slug }));
}

export default async function ComplianceTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = COMPLIANCE_TOPICS.find((c) => c.slug === slug);
  if (!topic) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="rule-label mb-3">{topic.appliesTo.join(" · ")}</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{topic.title}</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{topic.summary}</p>

      <div className="ledger-card mt-6 border-l-4 border-vermillion p-5">
        <p className="text-sm leading-relaxed">{COMPLIANCE_DISCLAIMER}</p>
      </div>

      <section className="mt-10 space-y-5">
        {topic.points.map((p, i) => (
          <div key={i} className="ledger-card-flat p-5">
            <p className="font-display text-lg font-semibold">{p.heading}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
          </div>
        ))}
      </section>

      <Link href="/compliance" className="mt-8 inline-block text-sm text-vermillion underline">
        ← Back to all compliance topics
      </Link>
    </main>
  );
}
