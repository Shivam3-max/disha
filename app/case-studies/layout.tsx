import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Business Case Studies: Builds, Pivots & Failures",
  description:
    "Real Indian and global business case studies — Amul, DMart, Zomato, boAt, Nokia, Kodak, WeWork and more — with the lesson each one teaches.",
  path: "/case-studies",
  keywords: ["business case studies", "Indian business case studies", "business failure case study", "startup case studies"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
