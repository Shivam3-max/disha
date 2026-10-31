import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dishaclarity.com").replace(/\/$/, "");
export const SITE_NAME = "Disha";
export const SITE_TAGLINE = "Business clarity, one framework at a time";
export const SITE_DESCRIPTION =
  "Free business tools, frameworks, famous business and psychology laws, strategies, case studies and lessons — built for business owners and students in India and beyond.";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Trim a description to a search-friendly length without cutting mid-word. */
export function metaDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const desc = metaDescription(description);
  return {
    // Absolute so nested segment layouts can't drop the brand suffix.
    title: { absolute: `${title} | ${SITE_NAME}` },
    description: desc,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: desc,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_IN",
    },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Public contact and ownership details shown on the trust pages. */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "shivam@relytask.com";
export const SITE_OPERATOR = "RelyTask Solutions";
export const FOUNDER_NAME = "Shivam Bhandari";
export const SITE_DOMAIN = "dishaclarity.com";
/** Date the editorial content was last reviewed; shown in bylines and Article structured data. */
export const CONTENT_REVIEWED = "2026-10-31";

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
