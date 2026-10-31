"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type MenuGroup = { label: string; links: { href: string; label: string; external?: boolean }[] };

export function MobileMenu({ groups }: { groups: MenuGroup[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll and allow Escape to close while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="btn-outline flex h-9 w-10 items-center justify-center"
      >
        <span aria-hidden className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[65px] z-50 overflow-y-auto border-t border-ink bg-paper"
        >
          <nav aria-label="Site" className="mx-auto max-w-6xl px-5 pb-16 pt-4">
            {groups.map((g) => (
              <div key={g.label} className="border-b border-paper-line py-4">
                <p className="rule-label mb-2">{g.label}</p>
                <ul className="grid grid-cols-2 gap-x-4">
                  {g.links.map((l) => {
                    const active = !l.external && (pathname === l.href || pathname.startsWith(`${l.href}/`));
                    const cls = `block py-2 font-display text-lg ${active ? "text-vermillion" : "hover:text-vermillion"}`;
                    return (
                      <li key={l.href}>
                        {l.external ? (
                          <a href={l.href} className={cls}>
                            {l.label}
                          </a>
                        ) : (
                          <Link href={l.href} className={cls} aria-current={active ? "page" : undefined}>
                            {l.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
