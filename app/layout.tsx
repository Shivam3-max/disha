import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});
const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-splinemono",
});

export const metadata: Metadata = {
  title: "Disha — business clarity, one framework at a time",
  description:
    "Diagnose your business, work through practical frameworks, and leave with an action plan. Built for business owners and students.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${splineMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <header className="no-print border-b border-ink">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold tracking-tight">
                Disha
              </span>
              <span className="rule-label hidden sm:inline">
                business clarity ledger
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm sm:gap-5">
              <Link href="/checkup" className="hidden hover:text-vermillion sm:inline">
                Health checkup
              </Link>
              <Link href="/journeys" className="hover:text-vermillion">
                Journeys
              </Link>
              <Link href="/tools" className="hover:text-vermillion">
                Tools
              </Link>
              <Link href="/frameworks" className="hidden hover:text-vermillion sm:inline">
                Frameworks
              </Link>
              <Link href="/learn" className="hover:text-vermillion">
                Learn
              </Link>
              <Link
                href="/plan"
                className="btn-outline px-3 py-1.5 text-sm font-medium"
              >
                My plan
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="no-print mt-20 border-t border-ink">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="rule-label">
              Disha · practical business frameworks for owners and students
            </p>
            <p className="text-xs text-ink-faint">
              Your entries are saved only in your browser. Nothing is uploaded.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
