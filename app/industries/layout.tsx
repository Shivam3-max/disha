import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Industry Business Playbooks",
  description:
    "Industry-specific business playbooks with strategy, benchmarks, structure and pitfalls — retail, restaurants, manufacturing, D2C, services, healthcare, education and more.",
  path: "/industries",
  keywords: ["industry playbook", "business plan by industry", "industry benchmarks India"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
