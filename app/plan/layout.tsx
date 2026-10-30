import { pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({ title: "My Action Plan", description: "Your saved answers and decisions from Disha's tools and frameworks, in one printable action plan.", path: "/plan" }),
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
