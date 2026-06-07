import type { Lesson } from "@/types/lesson";

const a16: Lesson = {
  id: "a16",
  level: "A16",
  band: "A",
  number: 16,
  title: "Passive Voice — Present & Past Simple",
  subtitle: "Наука и открытия",
  grammarTopics: [
    "Passive Voice: Present Simple (am/is/are + V3)",
    "Passive Voice: Past Simple (was/were + V3)",
    "Active vs Passive",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "3 абзаца (140–160 слов)",
  prevLesson: "a15",
  nextLesson: "a17",

  grammar: [
    {
      id: "grammar-1",
      title: "Passive Voice: Present Simple",
      explanation: "Страдательный залог используется, когда важно действие, а не исполнитель. Особенно часто встречается в научных текстах и IELTS Reading.",
      tables: [
        {
          headers: ["Лицо / Число", "Формула", "Пример (наука)"],
          rows: [
            ["I / We", "am/are + V3", "Results are published every year."],
            ["He / She / It", "is + V3", "The vaccine is tested in laboratories."],
            ["You / They", "are + V3", "Experiments are conducted worldwide."],
          ],
        },
      ],
      correctExamples: [
        "The experiment is conducted by the team every week.",
        "New elements are discovered by scientists.",
      ],
      incorrectExamples: [
        "The experiment is conduct by the team every week.",
      ],
      ieltsHint: "В IELTS Writing Task 1 (процессы) и Task 2 Passive Voice обязателен для Band 7+.",
      taskInstruction: "Переведите в Passive Voice (Present Simple):\n1. Scientists conduct experiments in special laboratories.\n2. Researchers analyse data from different sources.\n...",
    },
    {
      id: "grammar-2",
      title: "Passive Voice: Past Simple",
      explanation: "Past Simple Passive используется для описания открытий, изобретений и исторических событий в науке.",
      tables: [
        {
          headers: ["Лицо / Число", "Формула", "Пример (открытия)"],
          rows: [
            ["I / He / She / It", "was + V3", "Penicillin was discovered by Fleming in 1928."],
            ["We / You / They", "were + V3", "The laws of motion were formulated by Newton."],
          ],
        },
      ],
      correctExamples: [
        "The telephone was invented by Alexander Bell.",
        "DNA structure was described in 1953.",
      ],
      ieltsHint: "В Writing Task 1 и Task 2 Passive Voice помогает описывать факты и процессы без указания исполнителя.",
      taskInstruction: "Составьте предложения в Past Simple Passive:\n1. Alexander Fleming / discover / penicillin / 1928\n2. The first computer / build / engineers / 1940s\n...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Many important discoveries were made in the 20th century. Penicillin was discovered by Alexander Fleming in 1928. The structure of DNA was described by Watson and Crick in 1953. Today, new medicines are developed every year in laboratories. Experiments are conducted by scientists all over the world. The results are usually published in scientific journals.",
      wordCount: 70,
      taskInstruction: "Найди все предложения в Passive Voice.",
      vocabulary: [
        { word: "discovery", translation: "открытие" },
        { word: "developed", translation: "разрабатывать" },
        { word: "conducted", translation: "проводить" },
        { word: "published", translation: "публиковать" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 3 абзаца (140–160 слов) на тему Наука и открытия, используя Passive Voice.",
      structure: [
        "Абзац 1: Важные открытия прошлого (Past Simple Passive)",
        "Абзац 2: Что происходит в науке сейчас (Present Simple Passive)",
        "Абзац 3: Значение науки для общества",
      ],
      requirements: ["140–160 слов", "Используй is/are + V3 и was/were + V3"],
    },
  ],

  completedTopics: [
    "Grammar: Passive Voice (Present & Past Simple)",
    "Тема: Наука и открытия",
    "Writing: 3 абзаца (140–160 слов)",
  ],
};

export default a16;
