import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_OPERATOR, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms of Use",
  description: `The terms that apply when you use ${SITE_NAME} (${SITE_DOMAIN}), its tools, worksheets, templates and content.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      label="legal"
      title="Terms of Use"
      path="/terms"
      intro={`By using ${SITE_DOMAIN}, you agree to these terms. If you don't agree, please don't use the site.`}
    >
      <h2>1. About the service</h2>
      <p>
        {SITE_NAME} is a free educational website run by {SITE_OPERATOR}. It offers business tools, worksheets,
        templates, lessons, laws, strategies, case studies and related content.
      </p>

      <h2>2. Educational use only</h2>
      <p>
        Everything on {SITE_NAME} is general information for learning. It is not professional financial, legal, tax,
        accounting or investment advice, and it is not tailored to your situation. Results from tools depend on the
        numbers you enter. Read the full <Link href="/disclaimer">disclaimer</Link>.
      </p>

      <h2>3. Using our content</h2>
      <ul>
        <li>You may use the tools, worksheets and templates for your own business or study.</li>
        <li>
          You may quote short extracts with a link back to the original page on {SITE_DOMAIN}.
        </li>
        <li>
          You may not copy, republish or sell substantial parts of the site, or scrape it in bulk, without written
          permission.
        </li>
      </ul>
      <p>
        The site's text, design, code and branding belong to {SITE_OPERATOR} unless stated otherwise. Company names
        and trademarks mentioned in case studies belong to their owners and are used only to describe and discuss
        them.
      </p>

      <h2>4. Templates</h2>
      <p>
        Document templates are starting drafts only. Laws and requirements vary, so have important documents reviewed
        by a qualified professional before you rely on them.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        Don't misuse the site — for example by trying to disrupt it, gain unauthorised access, introduce malicious
        code, or generate fake clicks on advertisements.
      </p>

      <h2>6. Third-party links and advertising</h2>
      <p>
        The site may show advertisements and link to other websites. We don't control and aren't responsible for
        third-party sites, products or services. See our <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <h2>7. No warranty</h2>
      <p>
        We work to keep content accurate and up to date, but the site is provided “as is”, without warranties of any
        kind. Content may contain errors or become outdated.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent permitted by law, {SITE_OPERATOR} is not liable for any loss or damage arising from your use of,
        or reliance on, the site or its content.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these terms or change the site at any time. Continued use after changes means you accept the
        updated terms.
      </p>

      <h2>10. Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </InfoPage>
  );
}
