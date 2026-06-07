// ─────────────────────────────────────────────────────────────
// AtoC · IELTS from Zero — Lessons Index
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
import a15 from "./lessons/a15";
import a16 from "./lessons/a16";
import a17 from "./lessons/a17";
import a18 from "./lessons/a18";
import a19 from "./lessons/a19";
import a20 from "./lessons/a20";

// ── B Band ──────────────────────────────────────────────────
import b1 from "./lessons/b1";
import b2 from "./lessons/b2";
import b3 from "./lessons/b3";
import b4 from "./lessons/b4";
import b5 from "./lessons/b5";
import b6 from "./lessons/b6";
import b7 from "./lessons/b7";
import b8 from "./lessons/b8";
import b9 from "./lessons/b9";
import b10 from "./lessons/b10";
import b11 from "./lessons/b11";
import b12 from "./lessons/b12";
import b13 from "./lessons/b13";
import b14 from "./lessons/b14";
import b15 from "./lessons/b15";
import b16 from "./lessons/b16";
import b17 from "./lessons/b17";
import b18 from "./lessons/b18";
import b19 from "./lessons/b19";
import b20 from "./lessons/b20";

// ── C Band (пока пусто) ─────────────────────────────────────
// import c1 from "./lessons/c1";
// ...

// ─────────────────────────────────────────────────────────────
const lessons: Lesson[] = [
  // A Band
  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
  a11, a12, a13, a14, a15, a16, a17, a18, a19, a20,

  // B Band
  b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
  b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,

  // C Band (добавляй позже)
  // c1, c2, ...
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
