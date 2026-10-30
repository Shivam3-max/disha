import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbLd } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb" className="no-print mb-4">
        <ol className="rule-label flex flex-wrap items-center gap-1.5">
          {all.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {i < all.length - 1 ? (
                <Link href={item.path} className="hover:text-vermillion">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink-soft">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
