import type { Lesson } from "@/types/lesson";

const b2: Lesson = {
  id: "b2",
  level: "B2",
  band: "B",
  number: 2,
  title: "Past Continuous · Past Simple vs Continuous",
  subtitle: "Технологии и инновации",

  grammarTopics: [
    "Past Continuous (was/were + V-ing)",
    "Past Simple vs Past Continuous",
    "While / When",
  ],

  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — 160 слов",

  prevLesson: "b1",
  nextLesson: "b3",

  grammar: [ /* ваш код без изменений */ ],

  readings: [
    {
      id: "reading-1",
      text: "In the early 1990s, only a small number of researchers were using the internet...",
      wordCount: 155,
      taskInstruction: "Найди все примеры Past Continuous и Past Simple.",
      vocabulary: [],
      lifehack: "Используй Past Continuous, чтобы описывать фон событий в IELTS Speaking Part 2 (long turn).", // ← Добавьте это!
    },
  ],

  writingTasks: [ /* ваш код без изменений */ ],

  completedTopics: [
    "Past Continuous",
    "Past Simple vs Past Continuous (while/when)",
    "Тема: Технологии и инновации",
    "Writing: Task 2 (160 слов)",
  ],
};

export default b2;
