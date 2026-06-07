import type { Lesson } from "@/types/lesson";

const a20: Lesson = {
  id: "a20",
  level: "A20",
  band: "A",
  number: 20,
  title: "Повторение уровня A · Финал",
  subtitle: "Повторение A1–A19 · Все грамматические темы",
  grammarTopics: [
    "Мега-повторение всех времён и грамматики уровня A",
    "IELTS Task 1: как начать",
    "Чеклист уровня A",
  ],
  readingInfo: "Повторение + 60 слов",
  writingInfo: "Финальное эссе 140–160 слов",
  prevLesson: "a19",
  nextLesson: null, // Финал уровня A

  grammar: [
    {
      id: "grammar-1",
      title: "Мега-повторение: Времена глагола (A1–A12)",
      explanation: "Сводная таблица всех времён уровня A — твой главный инструмент перед переходом к уровню B.",
      tables: [
        {
          headers: ["Время", "Урок", "Формула", "Маркеры", "Пример"],
          rows: [
            ["Present Simple", "A1–A2", "V / V+s", "every day, usually", "She works in finance."],
            ["Present Continuous", "A3", "is/are + V-ing", "now, at the moment", "They are discussing the budget."],
            ["Past Simple", "A7–A8", "V-ed / V2", "yesterday, last year", "The economy grew last decade."],
            ["Present Perfect", "A11–A12", "have/has + V3", "for, since, already", "Interest rates have risen."],
          ],
        },
      ],
      correctExamples: [
        "I saw him yesterday at the conference.",
        "Since 2015, GDP has grown by 3% annually.",
      ],
      incorrectExamples: [
        "I have seen him yesterday at the conference.",
      ],
      ieltsHint: "В IELTS Writing Task 1: Past Simple для конкретных дат, Present Perfect для тенденций.",
      taskInstruction: "Выберите правильное время глагола:\n1. The unemployment rate ___ (rise) sharply in 2008.\n2. Since 2015, GDP ___ (grow) by 3% annually.\n...",
    },
    {
      id: "grammar-2",
      title: "Повторение: Модальные, Условные, Passive Voice (A13–A16)",
      explanation: "Четыре ключевые темы среднего уровня A — основа академического письма IELTS.",
      tables: [
        {
          headers: ["Тема", "Урок", "Ключевые формы", "Пример для IELTS"],
          rows: [
            ["Modal Verbs", "A13", "must / have to / should", "Governments must address inequality."],
            ["First Conditional", "A14", "If + PS, will + V", "If inflation rises, the bank will increase rates."],
            ["Second Conditional", "A15", "If + Past Simple, would + V", "If we invested more, growth would accelerate."],
            ["Passive Voice", "A16", "is/are + V3 / was/were + V3", "The report was published by the IMF."],
          ],
        },
      ],
      ieltsHint: "Passive Voice обязателен в Task 1. Условные наклонения — для сильной аргументации в Task 2.",
      taskInstruction: "Напиши по одному предложению на каждую тему (Modal, Conditionals, Passive).",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Level A is now complete. You have learned Present Simple and Continuous, Past tenses, Present Perfect, modals, conditionals, passive voice, reported speech and linking words. This strong foundation will help you achieve a good score in IELTS.",
      wordCount: 45,
      taskInstruction: "Составь краткое summary того, что ты выучил на уровне A.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Final Writing Task (Level A Exam)",
      instruction: "Напиши финальное эссе 140–160 слов на одну из изученных тем (Технологии, Образование, Здоровье, Экология, Общество, Наука, История, Экономика).",
      structure: [
        "Введение + 2–3 основных абзаца",
        "Используй как минимум 3–4 разные грамматические структуры из уровня A",
        "Linking words + varied vocabulary",
      ],
      requirements: ["140–160 слов", "Минимум 2 разных времени, conditional или modal, passive или reported speech"],
    },
  ],

  completedTopics: [
    "Полное повторение всей грамматики уровня A (A1–A19)",
    "Финальное Writing Task",
    "Подготовка к уровню B",
  ],
};

export default a20;
