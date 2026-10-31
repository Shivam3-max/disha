import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_OPERATOR, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} (${SITE_DOMAIN}) handles your information, cookies, analytics and Google AdSense advertising, and the choices you have.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      label="legal"
      title="Privacy Policy"
      path="/privacy-policy"
      intro={`This policy explains what information ${SITE_NAME} collects when you use ${SITE_DOMAIN}, how it is used, and the choices you have.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {SITE_NAME} ({SITE_DOMAIN}) is an educational website run by {SITE_OPERATOR} (“we”, “us”, “our”). For any
        privacy question, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>2. Information we collect</h2>
      <p>
        <strong>You don't need an account to use {SITE_NAME}.</strong> We do not ask for your name, phone number or
        payment details to use the site.
      </p>
      <ul>
        <li>
          <strong>Information you type into tools, worksheets, quizzes and “My plan”</strong> is stored only in your
          own browser (local storage). It is not sent to our servers, and clearing your browser data deletes it.
        </li>
        <li>
          <strong>Usage information</strong> collected automatically through analytics and advertising services —
          such as pages visited, time on page, approximate location (city or country), device type, browser,
          referring website and an IP address.
        </li>
        <li>
          <strong>Information you send us</strong>, such as your email address and message when you contact us.
        </li>
      </ul>

      <h2>3. Cookies and similar technologies</h2>
      <p>
        Cookies are small text files stored on your device. We and our partners use cookies and similar technologies
        to keep the site working, understand how it is used, and show and measure advertising. You can block or
        delete cookies in your browser settings; some features may not work as expected if you do.
      </p>

      <h2>4. Google Analytics and Google Tag Manager</h2>
      <p>
        We use Google Analytics to understand how visitors use the site (for example, which pages are popular) and
        Google Tag Manager to manage these tags. Google may collect information such as your IP address, device and
        browsing activity on our site. Learn more in{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          how Google uses information from sites that use its services
        </a>
        . You can opt out with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics opt-out browser add-on
        </a>
        .
      </p>

      <h2>5. Advertising and Google AdSense</h2>
      <p>
        We use Google AdSense to show advertisements, which helps keep {SITE_NAME} free.
      </p>
      <ul>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website
          or other websites.
        </li>
        <li>
          Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to
          this site and/or other sites on the internet.
        </li>
        <li>
          You may opt out of personalised advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . You can also opt out of some third-party vendors' use of cookies for personalised advertising at{" "}
          <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">
            www.aboutads.info
          </a>
          .
        </li>
        <li>
          If you opt out, you will still see ads, but they will be less relevant to you.
        </li>
      </ul>
      <p>
        Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent before
        personalised ads and non-essential cookies are used, through a consent message shown on the site.
      </p>

      <h2>6. How we use information</h2>
      <ul>
        <li>To operate, maintain and improve the website and its content.</li>
        <li>To understand which topics and tools are most useful.</li>
        <li>To show advertising that funds the site.</li>
        <li>To reply to messages you send us.</li>
        <li>To protect the site against abuse, fraud and security threats.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>7. Sharing information</h2>
      <p>
        We share information only with service providers that help us run the site — such as our hosting provider,
        Google Analytics and Google AdSense — under their own privacy policies, or when required by law.
      </p>

      <h2>8. How long we keep information</h2>
      <p>
        Analytics data is kept for the period set in our analytics settings and then deleted. Emails you send us are
        kept as long as needed to respond and for reasonable record-keeping. Information stored in your browser stays
        there until you clear it.
      </p>

      <h2>9. Your rights and choices</h2>
      <p>
        Depending on where you live — including under India's Digital Personal Data Protection Act, 2023 and, for
        visitors in Europe, the GDPR — you may have the right to access, correct or delete personal information we
        hold about you, to withdraw consent, and to raise a grievance. To make a request, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You can also manage cookies in your browser and
        through the ad settings links above.
      </p>

      <h2>10. Children's privacy</h2>
      <p>
        {SITE_NAME} is intended for a general audience of business owners and students. It is not directed at
        children under 13, and we do not knowingly collect personal information from them. If you believe a child
        has sent us personal information, contact us and we will delete it.
      </p>

      <h2>11. Security</h2>
      <p>
        The site is served over HTTPS. No method of transmission or storage is completely secure, but we take
        reasonable steps to protect information.
      </p>

      <h2>12. Links to other websites</h2>
      <p>
        Our pages may link to other websites. We are not responsible for their content or privacy practices.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The “last updated” date at the top shows when it was last
        changed.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or see our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
