import type { Lesson } from "@/types/lesson";

const a14: Lesson = {
  id: "a14",
  level: "A14",
  band: "A",
  number: 14,
  title: "First Conditional · Unless · As long as",
  subtitle: "Экология и окружающая среда",
  grammarTopics: [
    "First Conditional (If + Present Simple, will + V1)",
    "Порядок частей предложения",
    "Unless / As long as",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "2 абзаца (110–130 слов)",
  prevLesson: "a13",
  nextLesson: "a15",

  grammar: [
    {
      id: "grammar-1",
      title: "First Conditional: структура",
      explanation: "First Conditional используется для реальных условий и возможных результатов в настоящем или будущем. Это одно из самых важных условных наклонений в IELTS.",
      tables: [
        {
          headers: ["Часть предложения", "Форма", "Пример (тема: экология)"],
          rows: [
            ["IF-clause (условие)", "if + Present Simple", "If we reduce carbon emissions,"],
            ["Main clause (результат)", "will + bare infinitive", "the climate will improve."],
          ],
        },
      ],
      correctExamples: [
        "If it rains, the forest will suffer.",
        "If we use renewable energy, we will reduce air pollution.",
      ],
      incorrectExamples: [
        "If it will rain, the forest will suffer.",
      ],
      ieltsHint: "В IELTS Writing Task 2 и Speaking используйте First Conditional для обсуждения реальных будущих последствий.",
      taskInstruction: "Составьте предложения в First Conditional:\n1. use renewable energy → reduce air pollution\n2. cut down fewer trees → protect wildlife habitats\n...",
    },
    {
      id: "grammar-2",
      title: "Позиции условия и результата",
      explanation: "Предложение можно строить двумя способами. Запятая ставится только когда IF-clause стоит в начале.",
      tables: [
        {
          headers: ["Порядок", "Структура", "Пример"],
          rows: [
            ["Условие → Результат", "If + PS, will + V1", "If we act now, we will save the planet."],
            ["Результат → Условие", "Will + V1 + if + PS", "We will save the planet if we act now."],
          ],
        },
      ],
      correctExamples: [
        "Air will be cleaner if we pollute less.",
        "Glaciers will melt if temperatures rise.",
      ],
      ieltsHint: "Используйте обе позиции в Writing Task 2 для разнообразия стиля и повышения Grammatical Range.",
      taskInstruction: "Переставьте части предложения (поставьте результат перед условием):\n1. If forests disappear, many species will become extinct.\n...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "If we continue to pollute the environment, global temperatures will rise. If governments invest in clean energy, many problems will be solved. As long as people recycle, we can reduce waste. Unless we change our habits, the planet will suffer greatly. If everyone plants trees, the air will become cleaner. Environmental protection is possible if we all take action now.",
      wordCount: 85,
      taskInstruction: "Найди все примеры First Conditional и unless/as long as.",
      vocabulary: [
        { word: "pollute", translation: "загрязнять" },
        { word: "global temperatures", translation: "глобальная температура" },
        { word: "invest in", translation: "инвестировать в" },
        { word: "recycle", translation: "перерабатывать" },
        { word: "take action", translation: "принимать меры" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 2 абзаца (110–130 слов) на тему Экология, используя First Conditional.",
      structure: [
        "Абзац 1: Что произойдёт, если мы не изменим поведение (If ... will ...)",
        "Абзац 2: Что улучшится, если мы будем действовать (If ... will ... / Unless ...)",
      ],
      requirements: ["110–130 слов", "Используй if, will, unless, as long as"],
    },
  ],

  completedTopics: [
    "Grammar: First Conditional · Unless · As long as",
    "Тема: Экология и окружающая среда",
    "Writing: 2 абзаца (110–130 слов)",
  ],
};

export default a14;
