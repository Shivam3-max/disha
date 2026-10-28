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
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/75 px-4 py-6 backdrop-blur-sm">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
            onKeyDown={keepDialogOpen}
            className="my-auto w-full max-w-xl"
          >
            <div className="mb-4 text-center text-paper">
              <p className="rule-label !text-paper/75">Welcome to Disha</p>
              <h1 id="welcome-title" className="font-display mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                100+ frameworks to grow your business or build your business mind.
              </h1>
              <p id="welcome-description" className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-paper/80">
                Get access to practical calculators, strategies, frameworks, and lessons. Tell us a little about yourself to get started.
              </p>
            </div>
            <WelcomeForm onSuccess={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
