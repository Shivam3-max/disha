import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Flagship Business Program \u2014 Day-by-Day Schedule",
  description:
    "The full day-by-day schedule for Disha's flagship business program: what to study each day, which tool to use and what to finish by the end of each week.",
  path: "/learn/flagship-schedule",
  keywords: ["business program schedule", "90 day business plan"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
