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

  grammar: [
    {
      id: "grammar-1",
      title: "Past Continuous: форма и значение",
      explanation: "Past Continuous описывает действие, которое было в процессе в определённый момент или период в прошлом.",
      tables: [
        {
          headers: ["Тип", "Структура", "Пример"],
          rows: [
            ["Утвердительное", "was/were + V-ing", "Scientists were developing new software in 2010."],
            ["Отрицательное", "was/were not + V-ing", "The team wasn't working on AI at that time."],
            ["Вопрос", "Was/Were + Subject + V-ing?", "Were companies investing in tech back then?"],
          ],
        },
      ],
      correctExamples: [
        "She was coding when the power went out.",
        "They were testing the prototype all night.",
      ],
      incorrectExamples: [
        "The engineers was developing a new app.",
      ],
      ieltsHint: "Используй Past Continuous для описания фона + Past Simple для прерывающего действия в IELTS Writing и Speaking.",
      taskInstruction: "Поставь глагол в Past Continuous.",
    },
    {
      id: "grammar-2",
      title: "Past Simple vs Past Continuous: while / when",
      explanation: "Past Continuous — длительное фоновое действие. Past Simple — короткое завершенное действие.",
      tables: [
        {
          headers: ["Ситуация", "Структура", "Пример"],
          rows: [
            ["Длинное + короткое", "was/were + V-ing + when + Past Simple", "Scientists were running tests when the system crashed."],
            ["Два длительных", "Past Continuous + while + Past Continuous", "While she was coding, he was designing the interface."],
          ],
        },
      ],
      ieltsHint: "В Task 1 и Task 2 используй while/when для описания параллельных процессов.",
      taskInstruction: "Выбери Past Simple или Past Continuous.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "In the early 1990s, only a small number of researchers were using the internet...",
      wordCount: 155,
      taskInstruction: "Найди все примеры Past Continuous и Past Simple.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2",
      instruction: "Напиши эссе 160 слов на тему технологий.",
      requirements: ["Используй Past Continuous минимум 1 раз"],
    },
  ],

  completedTopics: [
    "Past Continuous",
    "Past Simple vs Past Continuous (while/when)",
    "Тема: Технологии и инновации",
    "Writing: Task 2 (160 слов)",
  ],
};

export default b2;
