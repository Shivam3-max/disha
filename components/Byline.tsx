import Link from "next/link";
import { CONTENT_REVIEWED, FOUNDER_NAME, formatDate } from "@/lib/site";

export function Byline() {
  return (
    <p className="mt-4 text-xs text-ink-faint">
      By <Link href="/about" className="text-ink-soft underline hover:text-vermillion">{FOUNDER_NAME}</Link> ·
      Reviewed {formatDate(CONTENT_REVIEWED)} ·{" "}
      <Link href="/editorial-policy" className="underline hover:text-vermillion">
        How we write
      </Link>
    </p>
  );
}
