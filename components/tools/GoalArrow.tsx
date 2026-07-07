"use client";

import { useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";

const meta = getTool("goal-arrow")!;

const STEPS = [
  { key: "goal", title: "Name the target", prompt: "Write your goal so a stranger could measure it. Not 'grow the business' — 'reach ₹2 crore turnover by March 2027'.", placeholder: "My measurable goal, with a date…" },
  { key: "why", title: "Anchor the why", prompt: "What actually changes in your life when you hit this? If the why is weak, the how will collapse at the first obstacle.", placeholder: "What this goal really buys me…" },
  { key: "reality", title: "Face current reality", prompt: "Where are you today against that number, honestly? No optimism, no despair — just the reading on the dial.", placeholder: "Today I am at…" },
  { key: "gap", title: "Find the real blocker", prompt: "You haven't reached it yet. What was genuinely missing — skill, system, courage, focus, people? The first answer is usually an excuse; write the second one.", placeholder: "The honest reason I'm not there yet…" },
  { key: "strengths", title: "Load your strengths", prompt: "Which of your existing strengths — things people already come to you for — can be aimed at this goal? And name one person who has done something similar you can learn from.", placeholder: "Strengths I'll use, and who I'll learn from…" },
  { key: "actions", title: "Fire: next three actions", prompt: "Three concrete actions, each small enough to start within 72 hours. An arrow leaves the bow or it hits nothing.", placeholder: "1.\n2.\n3.", multi: true },
] as const;

export function GoalArrow() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [confidence, setConfidence] = useState(5);

  const filled = STEPS.filter((s) => (answers[s.key] ?? "").trim().length > 0).length;
  const complete = filled === STEPS.length;

  const actionLines = (answers.actions ?? "")
    .split("\n")
    .map((l) => l.replace(/^\d+[.)]\s*/, "").trim())
    .filter(Boolean);

  return (
    <ToolShell meta={meta}>
      <div className="space-y-8">
        {STEPS.map((s, i) => (
          <section key={s.key}>
            <h2 className="font-display text-2xl font-semibold">
              <span className="font-numeric text-base text-vermillion">{i + 1} → </span>
              {s.title}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-ink-soft">{s.prompt}</p>
            <textarea
              rows={"multi" in s && s.multi ? 4 : 2}
              placeholder={s.placeholder}
              value={answers[s.key] ?? ""}
              onChange={(e) => setAnswers({ ...answers, [s.key]: e.target.value })}
              className="mt-3"
            />
          </section>
        ))}

        <section>
          <h2 className="font-display text-2xl font-semibold">
            <span className="font-numeric text-base text-vermillion">7 → </span>
            Rate your position
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Where are you today, on a scale of 1–10, relative to this goal?
          </p>
          <div className="mt-3 flex items-center gap-4">
            <input type="range" min={1} max={10} value={confidence} onChange={(e) => setConfidence(+e.target.value)} className="max-w-xs flex-1" />
            <span className="font-numeric text-2xl text-vermillion">{confidence}/10</span>
          </div>
        </section>
      </div>

      <Verdict label={complete ? "your arrow is drawn" : `${filled}/${STEPS.length} steps filled`}>
        {complete ? (
          <>
            <p className="text-sm leading-relaxed">
              <span className="font-medium">Goal:</span> {answers.goal}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              <span className="font-medium">Starting from:</span> {answers.reality} ({confidence}/10)
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              <span className="font-medium">First actions:</span>{" "}
              {actionLines.join(" · ") || answers.actions}
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Save it, print it, and put the date in your calendar to re-rate
              yourself in 30 days.
            </p>
          </>
        ) : (
          <p className="text-sm text-ink-soft">
            Work through all six steps — the power is in the sequence, not any
            single answer.
          </p>
        )}
        <SaveToPlan
          meta={meta}
          summary={`Goal: ${answers.goal ?? ""} — starting position ${confidence}/10. Real blocker identified: ${answers.gap ?? ""}`}
          actions={actionLines.length > 0 ? actionLines.map((a) => `Within 72 hours: ${a}`) : ["Complete the six steps"]}
          disabled={!complete}
        />
      </Verdict>
    </ToolShell>
  );
}
