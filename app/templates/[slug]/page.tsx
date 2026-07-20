import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";
import { TemplateView } from "@/components/TemplateView";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
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
