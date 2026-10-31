import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { TemplateView } from "@/components/TemplateView";
import { ToolGuideSection } from "@/components/ToolGuideSection";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = TEMPLATES.find((t) => t.slug === slug);
  if (!x) return {};
  return pageMeta({ title: /format|template/i.test(x.title) ? `${x.title} — Free Download (Word & PDF)` : `${x.title} Template — Free Download (Word & PDF)`, description: x.description, path: `/templates/${x.slug}`, keywords: [`${x.title} template`, `${x.title} format`, x.category] });
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) notFound();
  const g = template.guide;
  return (
    <>
      <TemplateView template={template} />
      {g && (
        <ToolGuideSection
          guide={{
            heading: `How to write a ${template.title.replace(/ (format|template)$/i, "").toLowerCase()}`,
            intro: g.intro,
            example: { title: "What to include", lines: g.include },
            tips: g.tips,
            faqs: g.faqs,
          }}
        />
      )}
    </>
  );
}
