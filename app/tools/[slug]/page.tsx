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
import { BusinessModelCanvas } from "@/components/tools/BusinessModelCanvas";
import { BreakEvenCalculator } from "@/components/tools/BreakEvenCalculator";
import { CapTableBuilder } from "@/components/tools/CapTableBuilder";
import { HiringPipeline } from "@/components/tools/HiringPipeline";
import { ContentCalendar } from "@/components/tools/ContentCalendar";
import { CompetitorMatrix } from "@/components/tools/CompetitorMatrix";
import { CashFlowSimulator } from "@/components/tools/CashFlowSimulator";
import { SwotBuilder } from "@/components/tools/SwotBuilder";

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
  "business-model-canvas": BusinessModelCanvas,
  "break-even-calculator": BreakEvenCalculator,
  "cap-table-builder": CapTableBuilder,
  "hiring-pipeline": HiringPipeline,
  "content-calendar": ContentCalendar,
  "competitor-matrix": CompetitorMatrix,
  "cash-flow-simulator": CashFlowSimulator,
  "swot-builder": SwotBuilder,
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
