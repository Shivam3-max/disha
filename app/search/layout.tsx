import { pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({ title: "Search", description: "Search every tool, framework, law, strategy, case study, lesson and glossary term on Disha.", path: "/search" }),
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
