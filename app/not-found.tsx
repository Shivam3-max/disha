import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <p className="rule-label mb-3">404 · off the ledger</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        The link may be old or mistyped. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/" className="btn-ink px-4 py-2 text-sm font-medium">
          Home →
        </Link>
        <Link href="/tools" className="btn-outline px-4 py-2 text-sm">
          Tools
        </Link>
        <Link href="/laws" className="btn-outline px-4 py-2 text-sm">
          Laws
        </Link>
        <Link href="/search" className="btn-outline px-4 py-2 text-sm">
          Search
        </Link>
      </div>
    </main>
  );
}
