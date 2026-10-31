import type { CompanyAnalysis } from "./knowledgeTypes";
import { COMPANIES_1 } from "./companies1";
import { COMPANIES_2 } from "./companies2";
import { COMPANIES_3 } from "./companies3";
import { COMPANIES_4 } from "./companies4";
import { COMPANIES_5 } from "./companies5";

export const COMPANIES: CompanyAnalysis[] = [...COMPANIES_1, ...COMPANIES_2, ...COMPANIES_3, ...COMPANIES_4, ...COMPANIES_5];

export function getCompany(slug: string) {
  return COMPANIES.find((c) => c.slug === slug);
}
