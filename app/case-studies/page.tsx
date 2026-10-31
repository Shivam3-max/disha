import { CASE_STUDIES } from "@/lib/caseStudies";
import { INDUSTRIES } from "@/lib/industries";
import { CaseStudiesBrowser, type CaseListItem } from "@/components/CaseStudiesBrowser";

export default function CaseStudiesIndex() {
  // Send the browser only what the list needs, not every full story.
  const cases: CaseListItem[] = CASE_STUDIES.map(
    ({ slug, title, kind, industrySlug, summary, company, country, region, period }) => ({
      slug, title, kind, industrySlug, summary, company, country, region, period,
    }),
  );
  return <CaseStudiesBrowser cases={cases} industries={INDUSTRIES.map(({ slug, name }) => ({ slug, name }))} />;
}
