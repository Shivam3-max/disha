import type { CompanyAnalysis } from "./knowledgeTypes";

/** Flat authoring format for company analyses, expanded to the nested shape. */
export type CompanyShort = Omit<CompanyAnalysis, "model" | "marketing" | "swot"> & {
  s: string[]; w: string[]; o: string[]; t: string[];
  customers: string; value: string; revenue: string[]; costs: string[]; channels: string[]; resources: string[];
  positioning: string; product: string; price: string; place: string; promotion: string; campaigns: string[];
};

export function expand(c: CompanyShort): CompanyAnalysis {
  const { s, w, o, t, customers, value, revenue, costs, channels, resources, positioning, product, price, place, promotion, campaigns, ...rest } = c;
  return {
    ...rest,
    swot: { strengths: s, weaknesses: w, opportunities: o, threats: t },
    model: { customers, value, revenue, costs, channels, resources },
    marketing: { positioning, product, price, place, promotion, campaigns },
  };
}

