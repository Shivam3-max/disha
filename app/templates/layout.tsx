import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Free Business Document Templates",
  description:
    "Free fillable, printable business document templates — agreements, offer letters, quotations, policies and more — as a starting draft for your business.",
  path: "/templates",
  keywords: ["business templates", "free business document templates", "offer letter template", "agreement template"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
