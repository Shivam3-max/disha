"use client";

import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import WelcomeForm from "@/components/WelcomeForm";

export default function WelcomeGate({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current
      ?.querySelector<HTMLInputElement>('input:not([name="website"])')
      ?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function keepDialogOpen(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), a[href]',
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/75 px-4 py-4 backdrop-blur-sm sm:py-6 md:items-center">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
            onKeyDown={keepDialogOpen}
            className="my-auto grid w-full max-w-5xl grid-cols-1 items-stretch gap-0 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="flex flex-col justify-center bg-ink px-6 py-6 text-paper sm:px-9 sm:py-8 md:px-10">
              <p className="rule-label !text-paper/70">Welcome to Disha</p>
              <h1 id="welcome-title" className="font-display mt-3 text-3xl font-semibold leading-[1.08] sm:text-4xl">
                100+ frameworks for your next move.
              </h1>
              <p id="welcome-description" className="mt-4 max-w-lg text-sm leading-relaxed text-paper/80">
                Grow your business or build your business mind with practical calculators, strategies, frameworks, and lessons.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-paper/90">
                {["Calculators", "Strategies", "Frameworks", "Lessons"].map((item) => (
                  <span key={item} className="border border-paper/35 px-2.5 py-1.5">{item}</span>
                ))}
              </div>
            </div>
            <div className="md:max-h-[min(86dvh,820px)] md:overflow-y-auto">
              <WelcomeForm onSuccess={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
