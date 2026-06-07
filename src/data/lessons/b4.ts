import type { Lesson } from "@/types/lesson";

const b4: Lesson = {
  id: "b4",
  level: "B4",
  band: "B",
  number: 4,
  title: "Passive Voice (все времена) · Impersonal Passive",
  subtitle: "Наука и исследования",
  grammarTopics: [
    "Passive Voice во всех временах",
    "Impersonal Passive (It is believed / argued / suggested...)",
    "Modal Passive",
  ],
  readingInfo: "2 текста + 60+ новых слов",
  writingInfo: "IELTS Task 2 — 170 слов",
  prevLesson: "b3",
  nextLesson: "b5",

  grammar: [
    {
      id: "grammar-1",
      title: "Passive Voice: все времена",
      explanation: "Passive Voice используется, когда важно действие, а не исполнитель. Особенно часто в научных и академических текстах.",
      tables: [
        {
          headers: ["Время", "Структура", "Пример"],
          rows: [
            ["Present Simple", "am/is/are + V3", "Vaccines are administered annually."],
            ["Present Perfect", "have/has been + V3", "Significant advances have been made in gene therapy."],
            ["Future Simple", "will be + V3", "A new treatment will be introduced next year."],
          ],
        },
      ],
      ieltsHint: "Impersonal Passive (It is believed / argued...) — ключ к академическому стилю Band 7.",
      taskInstruction: "Преобразуй в Passive Voice.",
    },
    {
      id: "grammar-2",
      title: "Impersonal Passive",
      explanation: "It is believed / argued / suggested / reported / estimated that... — объективный академический стиль.",
      tables: [
        {
          headers: ["Структура", "Пример"],
          rows: [
            ["It is believed that...", "It is believed that early intervention improves outcomes."],
            ["It has been shown that...", "It has been shown that exercise reduces the risk of chronic disease."],
          ],
        },
      ],
      ieltsHint: "Используй в Task 2 для представления аргументов без 'I think'.",
      taskInstruction: "Перепиши, используя Impersonal Passive.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Few scientific developments have generated as much excitement as CRISPR...",
      wordCount: 160,
      taskInstruction: "Найди все формы Passive Voice.",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "IELTS Task 2",
      instruction: "Напиши эссе 170 слов на тему науки.",
      requirements: ["Используй Passive Voice и Impersonal Passive"],
    },
  ],

  completedTopics: [
    "Passive Voice во всех временах",
    "Impersonal Passive",
    "Тема: Наука и исследования",
    "Writing: Task 2 (170 слов)",
  ],
};

export default b4;
