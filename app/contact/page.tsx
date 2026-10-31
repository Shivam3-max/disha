import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT_EMAIL, SITE_NAME, SITE_OPERATOR, SITE_URL, absoluteUrl, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Disha",
  description: `Contact the Disha team for questions, corrections, partnerships or feedback. Email ${CONTACT_EMAIL}.`,
  path: "/contact",
});

const REASONS = [
  ["Corrections", "Spotted an error in a case study, figure or definition? Tell us the page and what's wrong."],
  ["Suggestions", "A law, company, tool or topic you'd like us to cover next."],
  ["Partnerships", "Colleges, business associations and media who want to use or feature Disha."],
  ["Privacy requests", "Questions about your data or the cookies used on this site."],
];

export default function ContactPage() {
  return (
    <InfoPage
      label="contact"
      title="Contact us"
      path="/contact"
      intro="We read every message. The fastest way to reach the Disha team is by email."
      showUpdated={false}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          mainEntity: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            contactPoint: { "@type": "ContactPoint", email: CONTACT_EMAIL, contactType: "customer support" },
          },
        }}
      />

      <div className="ledger-card p-6">
        <p className="rule-label mb-2">email</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-display text-2xl font-semibold break-all">
          {CONTACT_EMAIL}
        </a>
        <p className="mt-2 text-sm">We usually reply within 2 working days.</p>
      </div>

      <h2>What to write to us about</h2>
      <ul>
        {REASONS.map(([title, body]) => (
          <li key={title}>
            <strong>{title}:</strong> {body}
          </li>
        ))}
      </ul>

      <h2>Before you write</h2>
      <p>
        Disha shares general business education. We can't give personal financial, legal, tax or investment advice
        about your specific situation — please speak to a qualified professional for that. See our{" "}
        <Link href="/disclaimer">disclaimer</Link>.
      </p>
      <p>
        Disha is run by {SITE_OPERATOR}. Learn more <Link href="/about">about us</Link>.
      </p>
    </InfoPage>
  );
}
