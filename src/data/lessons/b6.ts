import type { Lesson } from "@/types/lesson";

const b6: Lesson = {
  id: "b6",
  level: "B6",
  band: "B",
  number: 6,
  title: "Mixed Conditionals",
  subtitle: "Экология и окружающая среда",
  grammarTopics: [
    "Mixed Conditional Type 1 (Past → Present)",
    "Mixed Conditional Type 2 (Present → Past)",
    "Were it not for / Had it not been for",
  ],
  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — 170 слов",
  prevLesson: "b5",
  nextLesson: "b7",

  grammar: [
    {
      id: "grammar-1",
      title: "Mixed Conditional Type 1: прошлое условие → настоящий результат",
      explanation: "If + Past Perfect, would + V1 (now/today).",
      correctExamples: [
        "If governments had reduced emissions earlier, the climate would be more stable now.",
      ],
      ieltsHint: "Идеально для анализа экологических проблем.",
      taskInstruction: "Составь Mixed Conditional Type 1.",
    },
    {
      id: "grammar-2",
      title: "Were it not for / Had it not been for",
      explanation: "Формальная инверсия для выражения условия.",
      correctExamples: [
        "Were it not for international cooperation, the situation would be worse.",
      ],
      ieltsHint: "Band 7+ конструкция.",
      taskInstruction: "Перепиши с Were it not for / Had it not been for.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "The trajectory of global warming would arguably be far less alarming today had industrialised nations committed to meaningful emission reductions...",
      wordCount: 150,
      taskInstruction: "Найди Mixed Conditionals.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2",
      instruction: "Напиши эссе 170 слов на тему экологии.",
      requirements: ["Используй Mixed Conditionals и Were it not for"],
    },
  ],

  completedTopics: [
    "Mixed Conditionals",
    "Were it not for / Had it not been for",
    "Тема: Экология",
    "Writing: Task 2 (170 слов)",
  ],
};

export default b6;
