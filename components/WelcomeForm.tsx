"use client";

import { FormEvent, useState } from "react";

type Audience = "owner" | "student";

export default function WelcomeForm() {
  const [audience, setAudience] = useState<Audience>("owner");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, audience }),
      });
      if (!response.ok) throw new Error("Unable to send");
      setStatus("sent");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="ledger-card bg-paper p-6 sm:p-8">
      <p className="rule-label mb-2">Your access starts here</p>
      <h2 className="font-display text-3xl font-semibold">Tell us a little about you</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        We’ll point you toward the right tools, strategies, and frameworks.
      </p>
      <div className="mt-6 grid grid-cols-2 border border-ink" role="group" aria-label="Choose your profile">
        {([
          ["owner", "Business owner"],
          ["student", "Student"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setAudience(value)}
            aria-pressed={audience === value}
            className={`px-3 py-3 text-sm font-medium transition-colors ${audience === value ? "bg-ink text-paper" : "hover:bg-paper-deep"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="mt-5 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="lead-name">Your name</label>
          <input id="lead-name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="e.g. Asha Mehta" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="lead-email">Email address</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
        </div>
        {audience === "owner" ? (
          <>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="lead-business">Business name</label>
              <input id="lead-business" name="businessName" type="text" required maxLength={160} placeholder="Your business" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="lead-industry">Industry</label>
              <input id="lead-industry" name="industry" type="text" required maxLength={120} placeholder="e.g. Retail, services, food" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="lead-challenge">What would you like help with?</label>
              <select id="lead-challenge" name="goal" defaultValue="" required>
                <option value="" disabled>Choose your biggest priority</option>
                <option>Growing sales</option>
                <option>Managing cash flow</option>
                <option>Pricing or profitability</option>
                <option>Marketing and customers</option>
                <option>Planning my next steps</option>
                <option>Something else</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="lead-course">School, college, or course</label>
              <input id="lead-course" name="course" type="text" required maxLength={160} placeholder="What are you studying?" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="lead-interest">What do you want to learn?</label>
              <select id="lead-interest" name="goal" defaultValue="" required>
                <option value="" disabled>Choose an area of interest</option>
                <option>How businesses work</option>
                <option>Entrepreneurship and startups</option>
                <option>Marketing and sales</option>
                <option>Finance and numbers</option>
                <option>Strategy and case studies</option>
                <option>Preparing for a career</option>
              </select>
            </div>
          </>
        )}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="lead-website">Leave this field empty</label>
          <input id="lead-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <button className="btn-ink w-full px-5 py-3 font-medium disabled:opacity-60" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get started →"}
        </button>
        <p className="min-h-5 text-sm" aria-live="polite">
          {status === "sent" && <span className="text-forest">Thanks — your details are on their way. Explore the tools below.</span>}
          {status === "error" && <span className="text-vermillion">We couldn’t send that just now. Please try again.</span>}
          {status === "idle" && <span className="text-ink-faint">We’ll use your details to understand what’s useful for you.</span>}
        </p>
      </form>
    </div>
  );
}
