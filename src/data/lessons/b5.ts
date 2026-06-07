import type { Lesson } from "@/types/lesson";

const b5: Lesson = {
  id: "b5",
  level: "B5",
  band: "B",
  number: 5,
  title: "Third Conditional · Could/Might have + V3 · Had... inversion",
  subtitle: "Политика и принятие решений",
  grammarTopics: [
    "Third Conditional",
    "Could / Might / Should have + V3",
    "Had... inversion",
  ],
  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — 170 слов",
  prevLesson: "b4",
  nextLesson: "b6",

  grammar: [
    {
      id: "grammar-1",
      title: "Third Conditional",
      explanation: "Third Conditional используется для обсуждения нереальных ситуаций в прошлом и их гипотетических результатов.",
      tables: [
        {
          headers: ["Структура", "Пример"],
          rows: [
            ["If + Past Perfect, would have + V3", "If the government had invested more, the economy would have grown faster."],
            ["Had + Past Perfect (инверсия)", "Had they acted sooner, the crisis would have been avoided."],
          ],
        },
      ],
      correctExamples: [
        "Had leaders cooperated, the conflict could have been prevented.",
      ],
      ieltsHint: "Отлично для анализа прошлых политических решений в Task 2.",
      taskInstruction: "Составь предложения в Third Conditional.",
    },
    {
      id: "grammar-2",
      title: "Could / Might / Should have + V3",
      explanation: "Используется для выражения упущенных возможностей, сожаления или критики в прошлом.",
      tables: [
        {
          headers: ["Конструкция", "Значение", "Пример"],
          rows: [
            ["could have + V3", "упущенная возможность", "They could have prevented the crisis."],
            ["might have + V3", "возможность в прошлом", "The treaty might have succeeded."],
            ["should have + V3", "критика / сожаление", "The government should have acted earlier."],
          ],
        },
      ],
      ieltsHint: "Используй в Body Paragraph для анализа прошлых ошибок.",
      taskInstruction: "Перефразируй с could/might/should have.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "The 2008 global financial crisis remains a subject of intense debate...",
      wordCount: 150,
      taskInstruction: "Найди Third Conditional и could/might/should have.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2",
      instruction: "Напиши эссе 170 слов на тему политики.",
      requirements: ["Используй Third Conditional и Had inversion минимум 1 раз"],
    },
  ],

  completedTopics: [
    "Third Conditional и Had inversion",
    "Could / Might / Should have + V3",
    "Тема: Политика",
    "Writing: Task 2 (170 слов)",
  ],
};

export default b5;
