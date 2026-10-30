import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free Business Tools & Calculators",
  description:
    "Free interactive business calculators: break-even, cash runway, pricing strategy, customer lifetime value, acquisition cost, cap table, SWOT and more — turn your numbers into a clear decision.",
  path: "/tools",
  keywords: ["free business tools", "business calculators", "break-even calculator", "cash flow calculator", "pricing calculator"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
