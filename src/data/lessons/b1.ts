import type { Lesson } from "@/types/lesson";

const b1: Lesson = {
  id: "b1",
  level: "B1",
  band: "B",
  number: 1,
  title: "Present Perfect Continuous",
  subtitle: "Урбанизация и города",

  grammarTopics: [
    "Present Perfect Continuous (have/has been + V-ing)",
    "For / Since / How long с PPC",
    "Present Perfect vs Present Perfect Continuous",
    "Impersonal Passive и академический стиль",
  ],

  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — Introduction (150 слов)",

  prevLesson: "a20",
  nextLesson: "b2",

  grammar: [
    {
      id: "grammar-1",
      title: "Present Perfect Continuous: форма и значение",
      explanation: "Present Perfect Continuous показывает действие, которое началось в прошлом, продолжается сейчас или только что завершилось с видимым результатом.",
      tables: [
        {
          headers: ["Тип", "Структура", "Пример"],
          rows: [
            ["Утвердительное", "have/has + been + V-ing", "She has been living in the city for 5 years."],
            ["Отрицательное", "have/has not + been + V-ing", "They haven't been working on the project."],
            ["Вопрос", "Have/Has + Subject + been + V-ing?", "Have you been studying English long?"],
          ],
        },
      ],
      correctExamples: [
        "She has been living in London for 10 years.",
        "The city has been growing rapidly.",
      ],
      incorrectExamples: [
        "She has been live in London for 10 years.",
      ],
      ieltsHint: "Отличная конструкция для описания продолжающихся тенденций в IELTS Writing Task 2: 'Urban populations have been growing rapidly for the past three decades.'",
      taskInstruction: "Поставь глагол в Present Perfect Continuous.",
    },
    {
      id: "grammar-2",
      title: "Present Perfect vs Present Perfect Continuous",
      explanation: "Разница между результатом (PP) и процессом/длительностью (PPC).",
      tables: [
        {
          headers: ["Время", "Фокус", "Пример"],
          rows: [
            ["Present Perfect", "Результат / факт", "I have written the essay."],
            ["Present Perfect Continuous", "Процесс / длительность", "I have been writing the essay."],
          ],
        },
      ],
      ieltsHint: "В академических текстах PPC подчёркивает продолжающийся процесс — ключ к Band 7.",
      taskInstruction: "Выбери Present Perfect или Present Perfect Continuous.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Over the past century, cities around the world have been growing at a remarkable pace...",
      wordCount: 155,
      taskInstruction: "Найди все глаголы в Present Perfect Continuous.",
      vocabulary: [
        { word: "urbanisation", translation: "урбанизация" },
        { word: "infrastructure", translation: "инфраструктура" },
        { word: "congestion", translation: "пробки" },
      ],
      lifehack: "Ищи глаголы с have been + V-ing — они показывают продолжающиеся тенденции.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2 — Introduction",
      instruction: "Напиши Introduction (2 предложения) к теме урбанизации.",
      requirements: ["Используй Present Perfect Continuous минимум 1 раз"],
    },
  ],

  completedTopics: [
    "Present Perfect Continuous + for/since",
    "Разница PP vs PPC",
    "IELTS Task 2 Introduction",
    "Тема: Урбанизация",
  ],
};

export default b1;
