import type { Lesson } from "@/types/lesson";

const a19: Lesson = {
  id: "a19",
  level: "A19",
  band: "A",
  number: 19,
  title: "Linking Words · Союзы и связки",
  subtitle: "Экономика",
  grammarTopics: [
    "Причина и следствие (Cause & Effect)",
    "Уступка и противопоставление (Contrast & Concession)",
    "because / due to / therefore / although / however / despite и др.",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "3 абзаца (140–160 слов)",
  prevLesson: "a18",
  nextLesson: "a20",

  grammar: [
    {
      id: "grammar-1",
      title: "Причина и следствие (Cause & Effect)",
      explanation: "Слова-связки помогают объяснить, почему что-то происходит и каков результат. Очень важны для высокого балла в IELTS Writing.",
      tables: [
        {
          headers: ["Функция", "Связки", "Пример"],
          rows: [
            ["Причина (Cause)", "because, since, as, due to, owing to", "Prices rose because demand increased."],
            ["Следствие (Effect)", "therefore, thus, hence, as a result, consequently", "Demand increased; therefore, prices rose."],
            ["Причина", "because of, due to + noun", "Due to inflation, savings lost value."],
          ],
        },
      ],
      correctExamples: [
        "Prices rose because demand increased.",
        "High debt can lead to economic instability.",
      ],
      incorrectExamples: [
        "Prices rose because of demand increased.",
      ],
      ieltsHint: "В IELTS Writing Task 2 экзаменаторы ищут разнообразие связок. Чередуйте because, due to, therefore, consequently и т.д.",
      taskInstruction: "Соедините причину и следствие, используя указанную связку:\n1. The economy grew. / Many new jobs were created. → (as a result)\n...",
    },
    {
      id: "grammar-2",
      title: "Противопоставление и уступка (Contrast & Concession)",
      explanation: "Эти связки показывают контраст или неожиданный результат. Ключ к хорошо аргументированному эссе.",
      tables: [
        {
          headers: ["Тип", "Связки", "Позиция", "Пример"],
          rows: [
            ["Уступка", "although, even though, though", "начало или середина", "Although inflation was high, the economy grew."],
            ["Противопоставление", "however, nevertheless", "новое предложение", "Prices rose. However, demand remained strong."],
            ["Уступка", "despite, in spite of", "despite + noun/-ing", "Despite the recession, exports increased."],
          ],
        },
      ],
      correctExamples: [
        "Despite the crisis, banks survived.",
        "While some benefit, others suffer.",
      ],
      incorrectExamples: [
        "Despite the crisis was severe, banks survived.",
      ],
      ieltsHint: "Despite / In spite of + noun, Although + clause. Это частая ошибка.",
      taskInstruction: "Напиши предложения с although, however, despite и while.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Although the economy grew last year, many people still struggle with high prices. Due to inflation, the cost of living increased significantly. Therefore, the government raised minimum wages. However, this led to higher costs for businesses. Despite these challenges, the country continues to develop rapidly.",
      wordCount: 70,
      taskInstruction: "Найди все linking words и определи их функцию (причина, следствие, уступка и т.д.).",
      vocabulary: [
        { word: "inflation", translation: "инфляция" },
        { word: "cost of living", translation: "стоимость жизни" },
        { word: "minimum wage", translation: "минимальная зарплата" },
        { word: "recession", translation: "рецессия" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 3 абзаца (140–160 слов) на тему Экономика, используя linking words.",
      structure: [
        "Абзац 1: Причины экономических проблем (because, due to)",
        "Абзац 2: Последствия (therefore, as a result)",
        "Абзац 3: Уступка и контраст (although, however, despite)",
      ],
      requirements: ["140–160 слов", "Используй минимум 6–8 разных linking words"],
    },
  ],

  completedTopics: [
    "Grammar: Linking Words (Cause & Effect, Contrast & Concession)",
    "Тема: Экономика",
    "Writing: 3 абзаца (140–160 слов)",
  ],
};

export default a19;
