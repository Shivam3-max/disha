"use client";

import { useEffect, useState } from "react";
import { ToolShell, Verdict, SaveToPlan } from "@/components/ToolShell";
import { getTool } from "@/lib/registry";
import { loadContentCalendar, saveContentCalendar, type ContentItem } from "@/lib/store";

const meta = getTool("content-calendar")!;

const STATUSES: ContentItem["status"][] = ["Idea", "Drafting", "Scheduled", "Published"];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function ContentCalendar() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [date, setDate] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(loadContentCalendar());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveContentCalendar(items);
  }, [items, loaded]);

  const add = () => {
    if (!title.trim()) return;
    setItems([...items, { id: uid(), title, platform, date, status: "Idea" }]);
    setTitle("");
    setPlatform("");
    setDate("");
  };

  const setStatus = (id: string, status: ContentItem["status"]) =>
    setItems(items.map((i) => (i.id === id ? { ...i, status } : i)));

  const remove = (id: string) => setItems(items.filter((i) => i.id !== id));

  const sorted = [...items].sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"));
  const counts = STATUSES.map((s) => ({ status: s, n: items.filter((i) => i.status === s).length }));

  return (
    <ToolShell meta={meta}>
      <section className="ledger-card-flat p-6">
        <p className="rule-label mb-4">add a piece</p>
        <div className="grid gap-3 sm:grid-cols-[2fr_1fr_1fr_auto]">
          <input type="text" placeholder="Content title / topic" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button onClick={add} className="btn-ink px-4 py-2 text-sm font-medium">Add</button>
        </div>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        {counts.map((c) => (
          <div key={c.status} className="ledger-card-flat p-3 text-center">
            <p className="font-numeric text-2xl font-medium">{c.n}</p>
            <p className="rule-label mt-1">{c.status}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {sorted.length === 0 && (
          <p className="text-sm text-ink-faint">Nothing in the pipeline yet — add your first piece above.</p>
        )}
        {sorted.map((i) => (
          <div key={i.id} className="ledger-card-flat flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-medium">{i.title}</p>
              <p className="text-sm text-ink-soft">
                {i.platform || "No platform"} {i.date ? `· ${new Date(i.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}` : ""}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(i.id, s)}
                  className={`px-2.5 py-1 text-xs ${i.status === s ? "btn-ink" : "btn-outline"}`}
                >
                  {s}
                </button>
              ))}
              <button onClick={() => remove(i.id)} className="px-2 py-1 text-xs text-ink-faint hover:text-vermillion">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <Verdict label="pipeline snapshot">
          <p className="text-sm text-ink-soft">
            This calendar is saved automatically. Use &ldquo;Save to plan&rdquo; to log where content stands today.
          </p>
          <SaveToPlan
            meta={meta}
            summary={`Content calendar: ${counts.map((c) => `${c.n} ${c.status.toLowerCase()}`).join(", ")}.`}
            actions={[
              counts.find((c) => c.status === "Idea")!.n > counts.find((c) => c.status === "Published")!.n
                ? "You have more ideas than published pieces — pick the strongest idea and move it to drafting today"
                : "Ideas are converting to published content — keep the pipeline fed with new ideas",
            ]}
          />
        </Verdict>
      )}
    </ToolShell>
  );
}
