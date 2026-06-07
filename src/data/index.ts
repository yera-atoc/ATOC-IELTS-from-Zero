// ─────────────────────────────────────────────────────────────
// AtoC · IELTS from Zero — Lessons Index
//
// HOW TO ADD A NEW LESSON:
// 1. Create src/data/lessons/a15.ts (copy previous as template)
// 2. Import it below
// 3. Add it to the lessons array
// ─────────────────────────────────────────────────────────────

import type { Lesson } from "@/types/lesson";

// ── A Band ──────────────────────────────────────────────────
import a1 from "./lessons/a1";
import a2 from "./lessons/a2";
import a3 from "./lessons/a3";
import a4 from "./lessons/a4";
import a5 from "./lessons/a5";
import a6 from "./lessons/a6";
import a7 from "./lessons/a7";
import a8 from "./lessons/a8";
import a9 from "./lessons/a9";
import a10 from "./lessons/a10";
import a11 from "./lessons/a11";
import a12 from "./lessons/a12";
import a13 from "./lessons/a13";
import a14 from "./lessons/a14";

// ── B Band ──────────────────────────────────────────────────
// import b1 from "./lessons/b1";
// import b2 from "./lessons/b2";
// ...

// ── C Band ──────────────────────────────────────────────────
// import c1 from "./lessons/c1";
// import c2 from "./lessons/c2";
// ...

// ─────────────────────────────────────────────────────────────
const lessons: Lesson[] = [
  // A Band
  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14,
  
  // B Band (раскомментируй позже)
  // b1, b2, ...

  // C Band (раскомментируй позже)
  // c1, c2, ...
];

// ── Lookup helpers ───────────────────────────────────────────
/** Get a lesson by its id ("a1", "b3", "c2") */
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

/** Get all lessons for a given band ("A", "B", "C") */
export function getLessonsByBand(band: "A" | "B" | "C"): Lesson[] {
  return lessons.filter((l) => l.band === band);
}

/** Get the full ordered list */
export function getAllLessons(): Lesson[] {
  return lessons;
}

/** Get prev / next lesson */
export function getAdjacentLessons(id: string): {
  prev: Lesson | null;
  next: Lesson | null;
} {
  const idx = lessons.findIndex((l) => l.id === id);
  return {
    prev: idx > 0 ? lessons[idx - 1] : null,
    next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
  };
}

export default lessons;
