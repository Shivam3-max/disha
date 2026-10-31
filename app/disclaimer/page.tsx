import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { CONTACT_EMAIL, SITE_NAME, SITE_OPERATOR, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Disclaimer",
  description: `${SITE_NAME} provides general business education, not financial, legal, tax or investment advice. Read how to use our tools, figures and case studies.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <InfoPage label="legal" title="Disclaimer" path="/disclaimer">
      <h2>General information, not advice</h2>
      <p>
        The content on {SITE_NAME} — including tools, calculators, worksheets, lessons, laws, strategies, industry
        playbooks, case studies, templates and the India compliance guide — is for general educational purposes only.
        It is not financial, investment, legal, tax, accounting or other professional advice, and it does not take
        your personal circumstances into account.
      </p>
      <p>
        Before making important business, financial or legal decisions, consult a qualified professional such as a
        chartered accountant, lawyer or financial adviser.
      </p>

      <h2>Tools and calculators</h2>
      <p>
        Calculator results are estimates based on the numbers you enter and simplified assumptions. They are meant to
        help you think, not to replace detailed financial analysis.
      </p>

      <h2>Case studies and figures</h2>
      <p>
        Case studies summarise publicly available information about companies and events. Figures are rounded,
        dated to the period described, and drawn from public reports, company filings and widely cited coverage.
        They may since have changed. Mentioning a company does not imply any endorsement by, or affiliation with,
        that company.
      </p>

      <h2>Compliance information</h2>
      <p>
        Rules on registrations, taxes and compliance change frequently and vary by state and situation. Always check
        the latest official sources or with a professional.
      </p>

      <h2>Advertising</h2>
      <p>
        {SITE_NAME} may display advertisements, including through Google AdSense. Ads are served by third parties; we
        do not endorse the products or services advertised.
      </p>

      <h2>Errors and corrections</h2>
      <p>
        We work hard to be accurate, but mistakes can happen. If you spot one, please email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See our{" "}
        <Link href="/editorial-policy">editorial policy</Link> for how we handle corrections.
      </p>
      <p>
        {SITE_OPERATOR} is not liable for any loss arising from reliance on the information on this website.
      </p>
    </InfoPage>
  );
}
