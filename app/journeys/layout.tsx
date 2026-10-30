import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Guided Business Problem-Solving Journeys",
  description:
    "Start from the problem you actually have — low sales, cash crunch, team issues, competition — and follow a guided sequence of tools, frameworks and lessons to fix it.",
  path: "/journeys",
  keywords: ["business problems and solutions", "small business help", "how to grow my business"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
