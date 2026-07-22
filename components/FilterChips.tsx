"use client";

export function FilterChips({
  options,
  active,
  onChange,
  counts,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
  counts?: Record<string, number>;
}) {
  return (
    <div className="no-print sticky top-0 z-20 -mx-5 border-b border-ink bg-paper px-5 py-3">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onChange("All")}
          className={`px-3 py-1.5 text-sm ${active === "All" ? "btn-ink" : "btn-outline"}`}
        >
          All{counts ? ` (${Object.values(counts).reduce((a, b) => a + b, 0)})` : ""}
        </button>
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-3 py-1.5 text-sm ${active === o ? "btn-ink" : "btn-outline"}`}
          >
            {o}
            {counts?.[o] !== undefined ? ` (${counts[o]})` : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
