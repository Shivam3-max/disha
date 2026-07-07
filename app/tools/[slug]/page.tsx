import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/lib/registry";
import { RevenueMultiplier } from "@/components/tools/RevenueMultiplier";
import { PricingStrategy } from "@/components/tools/PricingStrategy";
import { AcquisitionCost } from "@/components/tools/AcquisitionCost";
import { CustomerLifetime } from "@/components/tools/CustomerLifetime";
import { CashRunway } from "@/components/tools/CashRunway";
import { InventoryTurns } from "@/components/tools/InventoryTurns";
import { MoatBuilder } from "@/components/tools/MoatBuilder";
import { AdvantageTest } from "@/components/tools/AdvantageTest";
import { HiringScorecard } from "@/components/tools/HiringScorecard";
import { GoalArrow } from "@/components/tools/GoalArrow";

const COMPONENTS: Record<string, React.ComponentType> = {
  "revenue-multiplier": RevenueMultiplier,
  "pricing-strategy": PricingStrategy,
  "acquisition-cost": AcquisitionCost,
  "customer-lifetime": CustomerLifetime,
  "cash-runway": CashRunway,
  "inventory-turns": InventoryTurns,
  "moat-builder": MoatBuilder,
  "advantage-test": AdvantageTest,
  "hiring-scorecard": HiringScorecard,
  "goal-arrow": GoalArrow,
};

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getTool(slug);
  const Component = COMPONENTS[slug];
  if (!meta || !Component) notFound();
  return <Component />;
}
