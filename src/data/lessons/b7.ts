import type { Lesson } from "@/types/lesson";

const b7: Lesson = {
  id: "b7",
  level: "B7",
  band: "B",
  number: 7,
  title: "Reported Speech (продвинутый)",
  subtitle: "СМИ и журналистика",
  grammarTopics: [
    "Advanced Reported Speech",
    "Reporting Verbs (argue, claim, suggest и др.)",
    "Reported Questions",
  ],
  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "Task 1 (180 слов) + Task 2 (180 слов)",
  prevLesson: "b6",
  nextLesson: "b8",

  grammar: [
    {
      id: "grammar-1",
      title: "Reporting Verbs и структуры",
      explanation: "claim, argue, suggest, reveal, acknowledge и др.",
      tables: [
        {
          headers: ["Структура", "Пример"],
          rows: [
            ["verb + that", "Experts argue that the data has been falsified."],
            ["verb + to-inf", "The editor agreed to publish the correction."],
          ],
        },
      ],
      ieltsHint: "Используй в Task 2 для представления разных мнений.",
      taskInstruction: "Замени said на reporting verb.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Media analysts have long argued that the digital revolution has fundamentally transformed...",
      wordCount: 150,
      taskInstruction: "Найди reporting verbs.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 1 + Task 2",
      instruction: "Task 1 (180 слов) + Task 2 (180 слов) на тему СМИ.",
      requirements: ["Используй минимум 4 reporting verbs"],
    },
  ],

  completedTopics: [
    "Advanced Reported Speech",
    "Тема: СМИ и журналистика",
    "Writing: Task 1 и Task 2",
  ],
};

export default b7;
