// ─────────────────────────────────────────────
//  AtoC · IELTS from Zero — Lesson Types
//  Supports A1–A20, B1–B20, C1–C20
// ─────────────────────────────────────────────

export type CEFRBand = "A" | "B" | "C";
export type LessonLevel = `${CEFRBand}${number}`; // A1, B2, C1, etc.

export interface VocabItem {
  word: string;
  translation: string;
}

export interface GrammarTable {
  headers: string[];
  rows: string[][];
}

export interface GrammarSection {
  id: string;               // "grammar-1", "grammar-2"
  title: string;            // "To Be: am / is / are"
  explanation: string;      // main explanation text (markdown ok)
  tables?: GrammarTable[];
  correctExamples?: string[];
  incorrectExamples?: string[];
  ieltsHint?: string;
  taskInstruction?: string;
}

export interface ReadingText {
  id: string;               // "reading-1"
  title?: string;
  text: string;
  wordCount: number;
  taskInstruction: string;
  vocabulary: VocabItem[];
  lifehack: string;
}

export interface WritingTask {
  id: string;               // "writing-1"
  title: string;
  instruction: string;
  requirements: string[];
  structure?: string[];
  example?: string;
}

export interface Lesson {
  id: string;               // "a1", "a2", "b1", "c1"
  level: LessonLevel;       // "A1", "B2", "C1"
  band: CEFRBand;           // "A", "B", "C"
  number: number;           // 1, 2, … 20
  title: string;            // "To Be · Артикли · Прилагательные"
  subtitle: string;         // "Absolute Beginner"
  grammarTopics: string[];
  readingInfo: string;      // "2 текста + 60 слов"
  writingInfo: string;      // "3–4 предложения"
  grammar: GrammarSection[];
  readings: ReadingText[];
  writingTasks: WritingTask[];
  completedTopics: string[];
  nextLesson: string;       // "a2", "b3", etc.
  prevLesson: string | null;
}
