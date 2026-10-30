import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free Business Lessons with Quizzes",
  description:
    "Learn business step by step: foundations, a full flagship program and quick booster lessons on strategy, marketing, finance, sales and leadership — each with a short quiz.",
  path: "/learn",
  keywords: ["learn business online free", "business course free", "business lessons", "entrepreneurship course"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
