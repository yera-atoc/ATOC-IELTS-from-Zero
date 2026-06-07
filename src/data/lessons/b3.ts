import type { Lesson } from "@/types/lesson";

const b3: Lesson = {
  id: "b3",
  level: "B3",
  band: "B",
  number: 3,
  title: "Future Perfect · Future Continuous",
  subtitle: "Демография",
  grammarTopics: [
    "Future Continuous (will be + V-ing)",
    "Future Perfect (will have + V3)",
    "By the time / By 2050 и т.д.",
  ],
  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — 160 слов",
  prevLesson: "b2",
  nextLesson: "b4",

  grammar: [
    {
      id: "grammar-1",
      title: "Future Continuous: will be + V-ing",
      explanation: "Future Continuous описывает действие, которое будет в процессе в определённый момент будущего.",
      tables: [
        {
          headers: ["Структура", "Пример"],
          rows: [
            ["will be + V-ing", "By 2050, the world's population will be approaching 10 billion."],
            ["will not be + V-ing", "Governments will not be ignoring demographic shifts for long."],
          ],
        },
      ],
      correctExamples: [
        "In ten years, many countries will be facing a serious labour shortage.",
      ],
      ieltsHint: "Отлично подходит для прогнозов в Task 1 и Task 2.",
      taskInstruction: "Поставь глагол в Future Continuous.",
    },
    {
      id: "grammar-2",
      title: "Future Perfect: will have + V3",
      explanation: "Future Perfect показывает, что действие будет завершено к определённому моменту в будущем.",
      tables: [
        {
          headers: ["Структура", "Пример"],
          rows: [
            ["will have + V3", "By 2100, the global population will have reached 11 billion."],
            ["will not have + V3", "Many nations will not have solved their ageing crisis by 2050."],
          ],
        },
      ],
      correctExamples: [
        "By the time today's students retire, AI will have replaced many traditional jobs.",
      ],
      ieltsHint: "Идеально для долгосрочных прогнозов.",
      taskInstruction: "Закончи предложения, используя Future Perfect.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "The world's population is ageing at an unprecedented rate...",
      wordCount: 160,
      taskInstruction: "Найди примеры Future Continuous и Future Perfect.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2",
      instruction: "Напиши эссе 160 слов на тему демографии.",
      requirements: ["Используй Future Perfect и Future Continuous"],
    },
  ],

  completedTopics: [
    "Future Continuous и Future Perfect",
    "By the time / By 2050",
    "Тема: Демография",
    "Writing: Task 2 (160 слов)",
  ],
};

export default b3;
