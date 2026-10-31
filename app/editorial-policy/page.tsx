import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { CONTACT_EMAIL, FOUNDER_NAME, SITE_NAME, SITE_OPERATOR, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Editorial Policy",
  description: `How ${SITE_NAME} researches, writes, reviews and corrects its business laws, case studies, guides and tools.`,
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <InfoPage
      label="how we work"
      title="Editorial Policy"
      path="/editorial-policy"
      intro={`${SITE_NAME}'s mission is to make business knowledge, strategies, frameworks and case studies accessible to everyone. That only works if the content can be trusted.`}
    >
      <h2>Who writes the content</h2>
      <p>
        Content is produced by the {SITE_NAME} editorial team at {SITE_OPERATOR}, under the direction of founder{" "}
        {FOUNDER_NAME}. It draws on hands-on experience working with businesses on strategy, marketing, operations and
        technology.
      </p>

      <h2>Our standards</h2>
      <ul>
        <li>
          <strong>Plain language.</strong> We explain ideas so a first-time founder or student can use them, without
          jargon.
        </li>
        <li>
          <strong>Practical.</strong> Every law, strategy and case study ends with how to apply it in a real business.
        </li>
        <li>
          <strong>Sourced.</strong> Laws and principles are attributed to the people and research behind them. Case
          study figures come from public reports, company filings and widely cited coverage, and are rounded and dated.
        </li>
        <li>
          <strong>Balanced.</strong> We note well-known criticisms and limits of an idea, and the common ways it is
          misread.
        </li>
        <li>
          <strong>Independent.</strong> Advertisers and companies we write about have no say over what we publish.
        </li>
      </ul>

      <h2>Review and updates</h2>
      <p>
        Content is reviewed before publishing and revisited periodically. Pages show when they were last reviewed.
        Fast-changing topics such as tax and compliance are flagged so readers check the latest official sources.
      </p>

      <h2>Corrections</h2>
      <p>
        If you find an error, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the page and the
        issue. We review every report and correct confirmed errors promptly.
      </p>

      <h2>Use of AI tools</h2>
      <p>
        We may use AI tools to help with research and drafting. Everything published is checked and edited by our
        team, who remain responsible for its accuracy.
      </p>

      <p>
        See also: <Link href="/about">About {SITE_NAME}</Link> · <Link href="/disclaimer">Disclaimer</Link>
      </p>
    </InfoPage>
  );
}
