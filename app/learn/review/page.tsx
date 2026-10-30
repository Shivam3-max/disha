import { ReviewDeck } from "@/components/ReviewDeck";
import { pageMeta } from "@/lib/site";

export const metadata = {
  ...pageMeta({ title: "Review Missed Questions", description: "Revisit the quiz questions you missed in Disha's business lessons.", path: "/learn/review" }),
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  return <ReviewDeck />;
}
