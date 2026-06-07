// ─────────────────────────────────────────────────────────────
// AtoC · IELTS from Zero — Lessons Index
// ─────────────────────────────────────────────────────────────
import type { Lesson } from "@/types/lesson";

// ── A Band ──────────────────────────────────────────────────
import a1 from "./a1";
import a2 from "./a2";
import a3 from "./a3";
import a4 from "./a4";
import a5 from "./a5";
import a6 from "./a6";
import a7 from "./a7";
import a8 from "./a8";
import a9 from "./a9";
import a10 from "./a10";
import a11 from "./a11";
import a12 from "./a12";
import a13 from "./a13";
import a14 from "./a14";
import a15 from "./a15";
import a16 from "./a16";
import a17 from "./a17";
import a18 from "./a18";
import a19 from "./a19";
import a20 from "./a20";

// ── B Band ──────────────────────────────────────────────────
import b1 from "./b1";
import b2 from "./b2";
import b3 from "./b3";
import b4 from "./b4";
import b5 from "./b5";
import b6 from "./b6";
import b7 from "./b7";
import b8 from "./b8";
import b9 from "./b9";
import b10 from "./b10";
import b11 from "./b11";
import b12 from "./b12";
import b13 from "./b13";
import b14 from "./b14";
import b15 from "./b15";
import b16 from "./b16";
import b17 from "./b17";
import b18 from "./b18";
import b19 from "./b19";
import b20 from "./b20";

// ── C Band (пока пусто) ─────────────────────────────────────

// ─────────────────────────────────────────────────────────────
const lessons: Lesson[] = [
  // A Band
  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
  a11, a12, a13, a14, a15, a16, a17, a18, a19, a20,
  // B Band
  b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
  b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,
];

// ── Helpers ─────────────────────────────────────────────────
export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getLessonsByBand(band: "A" | "B" | "C"): Lesson[] {
  return lessons.filter((l) => l.band === band);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}

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
