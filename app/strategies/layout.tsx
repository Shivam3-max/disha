import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Business Strategy Atlas: Named Strategies Explained",
  description:
    "Named business strategies explained in plain language — blue ocean, flywheel, land-and-expand, freemium, network effects, cost leadership, pricing psychology and guerrilla marketing — with examples.",
  path: "/strategies",
  keywords: ["business strategies", "types of business strategy", "growth strategies", "pricing strategies", "marketing strategies examples"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
