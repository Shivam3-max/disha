import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPANIES, getCompany } from "@/lib/companies";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { CONTENT_REVIEWED, FOUNDER_NAME, SITE_NAME, absoluteUrl, pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Byline } from "@/components/Byline";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompany(slug);
  if (!c) return {};
  return pageMeta({
    title: `${c.name} SWOT Analysis, Business Model & Marketing Strategy`,
    description: `${c.name} SWOT analysis, business model and marketing strategy (4Ps) explained — strengths, weaknesses, opportunities, threats, revenue streams and campaigns.`,
    path: `/companies/${c.slug}`,
    keywords: [
      `${c.name} SWOT analysis`,
      `SWOT analysis of ${c.name}`,
      `${c.name} business model`,
      `${c.name} marketing strategy`,
      `${c.name} marketing mix`,
      `${c.name} case study`,
    ],
    type: "article",
  });
}

const SWOT_BOXES = [
  { key: "strengths", label: "Strengths", tone: "text-forest" },
  { key: "weaknesses", label: "Weaknesses", tone: "text-vermillion" },
  { key: "opportunities", label: "Opportunities", tone: "text-forest" },
  { key: "threats", label: "Threats", tone: "text-vermillion" },
] as const;

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCompany(slug);
  if (!c) notFound();

  const industry = INDUSTRIES.find((i) => i.slug === c.industrySlug);
  const caseStudy = c.caseSlug ? CASE_STUDIES.find((x) => x.slug === c.caseSlug) : undefined;
  const peers = COMPANIES.filter((x) => x.industrySlug === c.industrySlug && x.slug !== c.slug).slice(0, 6);
  const url = absoluteUrl(`/companies/${c.slug}`);

  const faqs = [
    { q: `What are ${c.name}'s main strengths?`, a: c.swot.strengths.join(" ") },
    { q: `What are ${c.name}'s weaknesses?`, a: c.swot.weaknesses.join(" ") },
    { q: `What is ${c.name}'s business model?`, a: `${c.model.value} It serves ${c.model.customers.charAt(0).toLowerCase()}${c.model.customers.slice(1)} Revenue comes from: ${c.model.revenue.join("; ")}.` },
    { q: `What is ${c.name}'s marketing strategy?`, a: `${c.marketing.positioning} ${c.marketing.promotion}` },
  ];

  return (
    <main className="mx-auto max-w-4xl px-5 py-14">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${c.name} SWOT analysis, business model and marketing strategy`,
            url,
            mainEntityOfPage: url,
            about: { "@type": "Organization", name: c.name, foundingDate: c.founded },
            author: { "@type": "Person", name: FOUNDER_NAME, url: absoluteUrl("/about") },
            publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
            datePublished: CONTENT_REVIEWED,
            dateModified: CONTENT_REVIEWED,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Company analyses", path: "/companies" },
          { name: c.name, path: `/companies/${c.slug}` },
        ]}
      />
      <p className="rule-label mb-3">{c.sector} · founded {c.founded} · {c.hq}</p>
      <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
        {c.name}: SWOT analysis, business model &amp; marketing strategy
      </h1>
      <Byline />

      <nav aria-label="On this page" className="no-print mt-6 flex flex-wrap gap-2 text-sm">
        {[
          ["#overview", "Overview"],
          ["#swot", "SWOT analysis"],
          ["#business-model", "Business model"],
          ["#marketing", "Marketing strategy"],
          ["#faq", "FAQs"],
        ].map(([href, label]) => (
          <a key={href} href={href} className="btn-outline px-3 py-1.5">
            {label}
          </a>
        ))}
      </nav>

      <section id="overview" className="mt-10 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">About {c.name}</h2>
        {c.overview.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </section>

      <section id="swot" className="mt-12 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">SWOT analysis of {c.name}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {SWOT_BOXES.map((b) => (
            <div key={b.key} className="ledger-card-flat p-5">
              <h3 className={`rule-label mb-3 ${b.tone}`}>{b.label}</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                {c.swot[b.key].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden className={b.tone}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="business-model" className="mt-12 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">{c.name} business model</h2>
        <div className="ledger-card mt-5 p-6">
          <p className="rule-label mb-1">value proposition</p>
          <p className="font-display text-xl leading-snug">{c.model.value}</p>
          <p className="rule-label mb-1 mt-5">customers</p>
          <p className="leading-relaxed text-ink-soft">{c.model.customers}</p>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["Revenue streams", c.model.revenue],
            ["Key costs", c.model.costs],
            ["Channels", c.model.channels],
            ["Key resources", c.model.resources],
          ].map(([label, items]) => (
            <div key={label as string} className="ledger-card-flat p-5">
              <h3 className="rule-label mb-2">{label as string}</h3>
              <ul className="space-y-1.5 text-sm leading-relaxed">
                {(items as string[]).map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="marketing" className="mt-12 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">{c.name} marketing strategy</h2>
        <p className="mt-4 leading-relaxed">
          <strong>Positioning:</strong> {c.marketing.positioning}
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold">Marketing mix (4Ps)</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            ["Product", c.marketing.product],
            ["Price", c.marketing.price],
            ["Place", c.marketing.place],
            ["Promotion", c.marketing.promotion],
          ].map(([label, text]) => (
            <div key={label} className="ledger-card-flat p-5">
              <h4 className="rule-label mb-2">{label}</h4>
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <h3 className="font-display mt-6 text-xl font-semibold">Notable campaigns and initiatives</h3>
        <ul className="mt-3 space-y-1.5 leading-relaxed text-ink-soft">
          {c.marketing.campaigns.map((x) => (
            <li key={x}>· {x}</li>
          ))}
        </ul>
      </section>

      <section className="ledger-card mt-12 p-6">
        <h2 className="rule-label mb-2">the lesson for your business</h2>
        <p className="font-display text-xl leading-snug">{c.takeaway}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy && (
            <Link href={`/case-studies/${caseStudy.slug}`} className="btn-ink px-4 py-2 text-sm font-medium">
              Read the case study →
            </Link>
          )}
          <Link href="/tools/swot-builder" className="btn-outline px-4 py-2 text-sm">
            Build your own SWOT →
          </Link>
          <Link href="/tools/business-model-canvas" className="btn-outline px-4 py-2 text-sm">
            Map your business model →
          </Link>
        </div>
      </section>

      <section id="faq" className="mt-12 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-ink border-y border-ink">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden group-open:text-vermillion">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {peers.length > 0 && (
        <section className="mt-12">
          <h2 className="rule-label mb-3 border-b border-ink pb-2 !text-sm text-ink">
            More company analyses{industry ? ` in ${industry.name}` : ""}
          </h2>
          <div className="flex flex-wrap gap-2">
            {peers.map((p) => (
              <Link key={p.slug} href={`/companies/${p.slug}`} className="btn-outline px-3 py-1.5 text-sm">
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <p className="mt-10 text-xs leading-relaxed text-ink-faint">
        This analysis is based on publicly available information and is for educational use. {SITE_NAME} is not
        affiliated with {c.name}. Company names and trademarks belong to their owners.
      </p>
    </main>
  );
}
