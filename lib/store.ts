"use client";

export type SavedEntry = {
  slug: string;
  title: string;
  savedAt: string;
  summary: string;
  actions: string[];
  href?: string;
};

const KEY = "disha:entries";
const CHECKUP_KEY = "disha:checkup";

export function loadEntries(): SavedEntry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveEntry(entry: SavedEntry) {
  const rest = loadEntries().filter((e) => e.slug !== entry.slug);
  localStorage.setItem(KEY, JSON.stringify([entry, ...rest]));
}

export function removeEntry(slug: string) {
  localStorage.setItem(
    KEY,
    JSON.stringify(loadEntries().filter((e) => e.slug !== slug)),
  );
}

export type CheckupResult = {
  savedAt: string;
  scores: Record<string, number>;
};

export function loadCheckup(): CheckupResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CHECKUP_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCheckup(result: CheckupResult) {
  localStorage.setItem(CHECKUP_KEY, JSON.stringify(result));
}

const LEARN_KEY = "disha:learn";

export type LearnProgress = Record<string, { completedAt: string; score: number; total: number }>;

export function loadLearnProgress(): LearnProgress {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(LEARN_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function saveLearnProgress(slug: string, score: number, total: number) {
  const all = loadLearnProgress();
  all[slug] = { completedAt: new Date().toISOString(), score, total };
  localStorage.setItem(LEARN_KEY, JSON.stringify(all));
}

const MISSES_KEY = "disha:learn-misses";

export type MissedQuestion = {
  id: string;
  daySlug: string;
  dayTitle: string;
  track: string;
  q: string;
  options: string[];
  correct: number;
  explain: string;
  missedAt: string;
  timesMissed: number;
};

export function loadMissedQuestions(): Record<string, MissedQuestion> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(MISSES_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function recordMiss(mq: Omit<MissedQuestion, "missedAt" | "timesMissed">) {
  const all = loadMissedQuestions();
  const existing = all[mq.id];
  all[mq.id] = {
    ...mq,
    missedAt: new Date().toISOString(),
    timesMissed: (existing?.timesMissed ?? 0) + 1,
  };
  localStorage.setItem(MISSES_KEY, JSON.stringify(all));
}

export function clearMiss(id: string) {
  const all = loadMissedQuestions();
  delete all[id];
  localStorage.setItem(MISSES_KEY, JSON.stringify(all));
}

export type HiringCandidate = {
  id: string;
  name: string;
  role: string;
  stage: "Applied" | "Screening" | "Interview" | "Offer" | "Hired" | "Rejected";
  notes: string;
};

const HIRING_PIPELINE_KEY = "disha:hiring-pipeline";

export function loadHiringPipeline(): HiringCandidate[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(HIRING_PIPELINE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveHiringPipeline(candidates: HiringCandidate[]) {
  localStorage.setItem(HIRING_PIPELINE_KEY, JSON.stringify(candidates));
}

export type ContentItem = {
  id: string;
  title: string;
  platform: string;
  date: string;
  status: "Idea" | "Drafting" | "Scheduled" | "Published";
};

const CONTENT_CALENDAR_KEY = "disha:content-calendar";

export function loadContentCalendar(): ContentItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CONTENT_CALENDAR_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveContentCalendar(items: ContentItem[]) {
  localStorage.setItem(CONTENT_CALENDAR_KEY, JSON.stringify(items));
}
