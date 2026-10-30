import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Business Framework Worksheets (Free)",
  description:
    "Free fillable business framework worksheets — strategy, positioning, cash, hiring, leadership and execution. Work through each one and save the answers into your action plan.",
  path: "/frameworks",
  keywords: ["business frameworks", "business worksheets", "strategy framework", "management frameworks"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
