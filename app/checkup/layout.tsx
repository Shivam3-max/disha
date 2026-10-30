import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free Business Health Checkup",
  description:
    "Rate your business across five vital signs in five minutes and get a prescription of exactly which tools, frameworks and lessons to work on next.",
  path: "/checkup",
  keywords: ["business health check", "business assessment", "small business checkup"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
