import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Business Glossary: Finance, Marketing & Sales Terms",
  description:
    "Plain-language definitions of business terms — gross margin, EBITDA, CAC, LTV, churn, BANT, KPI, working capital, unit economics and more.",
  path: "/glossary",
  keywords: ["business glossary", "business terms", "finance terms explained", "marketing terms"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
