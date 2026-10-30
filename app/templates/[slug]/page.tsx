import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { TemplateView } from "@/components/TemplateView";

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
  return pageMeta({ title: `${x.title} Template — Free & Printable`, description: x.description, path: `/templates/${x.slug}`, keywords: [`${x.title} template`, `${x.title} format`, x.category] });
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) notFound();
  return <TemplateView template={template} />;
}
