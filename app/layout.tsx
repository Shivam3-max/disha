import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { MobileMenu, type MenuGroup } from "@/components/MobileMenu";
import { LAW_CATEGORIES } from "@/lib/laws";
import { CONTACT_EMAIL, FOUNDER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_OPERATOR, SITE_TAGLINE, SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

// Only link out to Paarth when its public URL is configured (avoids a localhost link in production).
const PAARTH_URL = process.env.NEXT_PUBLIC_PAARTH_URL;

const DESKTOP_LINKS: [string, string][] = [
  ["/checkup", "Health checkup"],
  ["/journeys", "Journeys"],
  ["/tools", "Tools"],
  ["/calculators", "Calculators"],
  ["/frameworks", "Frameworks"],
  ["/laws", "Laws"],
  ["/case-studies", "Case studies"],
  ["/learn", "Learn"],
  ["/knowledge", "Knowledge"],
  ["/search", "Search"],
];

const MOBILE_MENU: MenuGroup[] = [
  {
    label: "start here",
    links: [
      { href: "/", label: "Home" },
      { href: "/checkup", label: "Health checkup" },
      { href: "/journeys", label: "Journeys" },
      { href: "/plan", label: "My plan" },
    ],
  },
  {
    label: "do the work",
    links: [
      { href: "/tools", label: "Tools" },
      { href: "/calculators", label: "Calculators" },
      { href: "/frameworks", label: "Frameworks" },
      { href: "/templates", label: "Templates" },
      { href: "/learn", label: "Learn" },
    ],
  },
  {
    label: "knowledge bank",
    links: [
      { href: "/laws", label: "Laws" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/case-studies/shark-tank-india", label: "Shark Tank India" },
      { href: "/companies", label: "Company SWOTs" },
      { href: "/strategies", label: "Strategies" },
      { href: "/industries", label: "Industries" },
      { href: "/benchmarks", label: "Benchmarks" },
      { href: "/glossary", label: "Glossary" },
      { href: "/compliance", label: "India compliance" },
      { href: "/knowledge", label: "All knowledge" },
    ],
  },
  {
    label: "about",
    links: [
      { href: "/about", label: "About Disha" },
      { href: "/contact", label: "Contact" },
      { href: "/search", label: "Search" },
      ...(PAARTH_URL ? [{ href: PAARTH_URL, label: "Paarth", external: true }] : []),
    ],
  },
];

const LEGAL_LINKS: [string, string][] = [
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/editorial-policy", "Editorial policy"],
  ["/privacy-policy", "Privacy policy"],
  ["/terms", "Terms"],
  ["/disclaimer", "Disclaimer"],
];

const FOOTER_LINKS: [string, string][] = [
  ["/tools", "Business tools"],
  ["/calculators", "Calculators"],
  ["/frameworks", "Frameworks"],
  ["/laws", "Business & psychology laws"],
  ["/strategies", "Strategy atlas"],
  ["/industries", "Industry playbooks"],
  ["/case-studies", "Case studies"],
  ["/case-studies/shark-tank-india", "Shark Tank India"],
  ["/companies", "Company SWOT analyses"],
  ["/learn", "Free lessons"],
  ["/journeys", "Journeys"],
  ["/benchmarks", "Benchmarks"],
  ["/glossary", "Glossary"],
  ["/templates", "Templates"],
  ["/compliance", "India compliance"],
];


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${splineMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              email: CONTACT_EMAIL,
              founder: { "@type": "Person", name: FOUNDER_NAME },
              parentOrganization: { "@type": "Organization", name: SITE_OPERATOR },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              inLanguage: "en-IN",
              description: SITE_DESCRIPTION,
            },
          ]}
        />
        <Script
          id="adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8479869834059620"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script id="google-analytics-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QDZ5C02KLS');
          `}
        </Script>
        <Script
          id="google-analytics-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-QDZ5C02KLS"
          strategy="beforeInteractive"
        />
        <Script id="gtm-bootstrap" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-59X7NPXM');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59X7NPXM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
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
            <nav aria-label="Main" className="hidden items-center gap-4 text-sm xl:flex">
              {DESKTOP_LINKS.map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-vermillion">
                  {label}
                </Link>
              ))}
              <Link
                href="/plan"
                className="btn-outline whitespace-nowrap px-3 py-1.5 text-sm font-medium"
              >
                My plan
              </Link>
              {PAARTH_URL && (
                <a href={PAARTH_URL} className="text-ink-faint hover:text-vermillion">
                  Paarth
                </a>
              )}
            </nav>
            <div className="flex items-center gap-2 xl:hidden">
              <Link href="/search" aria-label="Search" className="btn-outline flex h-9 items-center px-3 text-sm">
                Search
              </Link>
              <MobileMenu groups={MOBILE_MENU} />
            </div>
          </div>
        </header>
        {children}
        <footer className="no-print mt-20 border-t border-ink">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Link href="/" className="font-display text-2xl font-semibold">
                Disha
              </Link>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                Practical business tools, frameworks, laws and lessons for owners and students.
              </p>
              <p className="mt-3 text-xs text-ink-faint">Your plan entries stay in this browser.</p>
              {PAARTH_URL && (
                <a href={PAARTH_URL} className="mt-2 inline-block text-xs text-vermillion underline">
                  Back to Paarth
                </a>
              )}
            </div>
            <nav aria-label="Explore">
              <p className="rule-label mb-3">explore</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {FOOTER_LINKS.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-vermillion">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Laws">
              <p className="rule-label mb-3">laws by category</p>
              <ul className="space-y-1.5 text-sm">
                {LAW_CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/laws/category/${c.slug}`} className="hover:text-vermillion">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="border-t border-paper-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {SITE_NAME} · run by {SITE_OPERATOR}
              </p>
              <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-1">
                {LEGAL_LINKS.map(([href, label]) => (
                  <Link key={href} href={href} className="hover:text-vermillion">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
