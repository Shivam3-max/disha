import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT_EMAIL, FOUNDER_NAME, SITE_NAME, SITE_OPERATOR, SITE_URL, absoluteUrl, pageMeta } from "@/lib/site";
import { TOOLS } from "@/lib/registry";
import { WORKSHEETS } from "@/lib/worksheets";
import { LAWS } from "@/lib/laws";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { STRATEGIES } from "@/lib/strategies";

export const metadata = pageMeta({
  title: "About Disha",
  description: `Disha makes business knowledge, strategies, frameworks and case studies free for everyone. Founded by ${FOUNDER_NAME} and run by ${SITE_OPERATOR}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage
      label="about us"
      title="About Disha"
      path="/about"
      intro="Disha exists to make business knowledge, strategies, frameworks and case studies accessible to everyone — free, in plain language, and built to be used, not just read."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          mainEntity: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            email: CONTACT_EMAIL,
            founder: { "@type": "Person", name: FOUNDER_NAME },
            parentOrganization: { "@type": "Organization", name: SITE_OPERATOR },
          },
        }}
      />

      <h2>Why Disha exists</h2>
      <p>
        Good business thinking is usually locked away in expensive courses, consulting reports and books most
        owners never have time to read. Meanwhile, the people who need it most — small business owners, first-time
        founders and students — are left guessing. Disha (Hindi for “direction”) was built to change that.
      </p>
      <p>
        Everything on the site is free to use. You don't need an account, and the answers you type into our tools
        and worksheets stay in your own browser.
      </p>

      <h2>What you'll find here</h2>
      <ul>
        <li>
          <Link href="/tools">{TOOLS.length} interactive business tools</Link> — calculators for pricing, cash flow,
          break-even, customer value and more.
        </li>
        <li>
          <Link href="/frameworks">{WORKSHEETS.length} framework worksheets</Link> that turn proven ideas into
          step-by-step decisions.
        </li>
        <li>
          <Link href="/laws">{LAWS.length} famous laws of business and psychology</Link>, explained with real
          examples.
        </li>
        <li>
          <Link href="/case-studies">{CASE_STUDIES.length} case studies</Link> of builds, pivots, turnarounds and
          failures from India and around the world.
        </li>
        <li>
          <Link href="/strategies">{STRATEGIES.length} named strategies</Link>, industry playbooks, benchmarks,
          templates, a glossary and an India compliance guide.
        </li>
      </ul>

      <h2>Who is behind Disha</h2>
      <p>
        Disha was founded by <strong>{FOUNDER_NAME}</strong> and is run by <strong>{SITE_OPERATOR}</strong>, a
        business consulting, marketing and technology firm working with owners and growing companies. The content
        draws on hands-on work with businesses, alongside well-established business research, public company
        filings and widely reported coverage.
      </p>

      <h2 id="editorial">How we create content</h2>
      <p>
        Each law, case study and guide is researched, written in plain language and reviewed before publishing.
        Figures in case studies are rounded and dated, and drawn from public reports and filings. We correct errors
        when we find them or when readers point them out. Read our full{" "}
        <Link href="/editorial-policy">editorial policy</Link>.
      </p>
      <p>
        Disha provides general educational information. It is not financial, legal, tax or investment advice — see
        our <Link href="/disclaimer">disclaimer</Link>.
      </p>

      <h2>How Disha is funded</h2>
      <p>
        To keep everything free, Disha may show advertising, including ads served by Google AdSense. Advertisers do
        not influence what we write. Our <Link href="/privacy-policy">privacy policy</Link> explains how ads and
        cookies work on the site.
      </p>

      <h2>Get in touch</h2>
      <p>
        Questions, corrections or ideas for what we should cover next? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our <Link href="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
