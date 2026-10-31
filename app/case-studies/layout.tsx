import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "200+ Business Case Studies: Builds, Pivots, Turnarounds & Failures",
  description:
    "Detailed business case studies with key numbers and timelines — Amazon, Apple, Tesla, Zara, Toyota, Jio, Flipkart, Zerodha, Theranos, Enron, Kodak and 200 more — and the lesson each one teaches.",
  path: "/case-studies",
  keywords: ["business case studies", "Indian business case studies", "business failure case study", "startup case studies", "business case studies with solutions", "famous business failures", "corporate turnaround examples"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
