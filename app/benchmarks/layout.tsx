import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Business Benchmarks by Industry",
  description:
    "Typical margins, CAC, inventory turns, retention and other business benchmarks by industry — so you can tell whether your numbers are actually good.",
  path: "/benchmarks",
  keywords: ["business benchmarks", "industry benchmarks", "gross margin by industry", "average profit margin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
