import type { Lesson } from "@/types/lesson";

const a18: Lesson = {
  id: "a18",
  level: "A18",
  band: "A",
  number: 18,
  title: "Reported Speech · Косвенная речь",
  subtitle: "СМИ",
  grammarTopics: [
    "Reported Speech (Косвенная речь)",
    "Backshift of Tenses (сдвиг времён)",
    "said / told / asked",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "3 абзаца (140–160 слов)",
  prevLesson: "a17",
  nextLesson: "a19",

  grammar: [
    {
      id: "grammar-1",
      title: "Reported Speech (Косвенная речь)",
      explanation: "Когда мы пересказываем чужие слова, мы используем косвенную речь. Прямая речь → Косвенная речь.",
      tables: [
        {
          headers: ["Прямая речь (Direct Speech)", "Косвенная речь (Reported Speech)"],
          rows: [
            ["\"I am happy,\" she said.", "She said (that) she was happy."],
            ["\"We live in Almaty,\" they said.", "They said (that) they lived in Almaty."],
            ["\"I have finished the work,\" he said.", "He said (that) he had finished the work."],
          ],
        },
      ],
      correctExamples: [
        "He said that he worked every day.",
        "She said that she was tired.",
      ],
      incorrectExamples: [
        "He said that he \"works\" in a hospital.",
      ],
      ieltsHint: "В IELTS Reading и Listening часто нужно понимать косвенную речь. В Writing Task 2 можно использовать: 'Some people argue that...'",
      taskInstruction: "Переведите в косвенную речь:\n1. \"I work every day,\" he said. → He said that…\n2. \"She is tired,\" Tom said. → ...\n...",
    },
    {
      id: "grammar-2",
      title: "Сдвиг времён (Backshift of Tenses)",
      explanation: "При переводе в косвенную речь времена обычно сдвигаются назад (backshift).",
      tables: [
        {
          headers: ["Прямая речь", "Косвенная речь", "Пример"],
          rows: [
            ["Present Simple", "Past Simple", "\"I work\" → he said he worked"],
            ["Present Perfect", "Past Perfect", "\"I have seen\" → he said he had seen"],
            ["will", "would", "\"I will call\" → she said she would call"],
            ["can", "could", "\"I can help\" → he said he could help"],
          ],
        },
      ],
      correctExamples: [
        "She said she was a journalist.",
        "He said he would attend the conference.",
      ],
      incorrectExamples: [
        "She said she \"is\" a journalist.",
      ],
      ieltsHint: "Если факт всё ещё актуален, сдвиг времён не обязателен (например, 'He said the Earth is round').",
      taskInstruction: "Исправьте ошибки в сдвиге времён.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "The reporter said that the situation was serious. He told us that the government had already taken measures. Many people said they were worried about the future. Experts claimed that the economy would recover soon. The minister announced that new laws would be introduced next year.",
      wordCount: 65,
      taskInstruction: "Преобразуй предложения из косвенной речи обратно в прямую.",
      vocabulary: [
        { word: "reporter", translation: "репортёр" },
        { word: "situation", translation: "ситуация" },
        { word: "measure", translation: "мера" },
        { word: "announce", translation: "объявлять" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 3 абзаца (140–160 слов) на тему СМИ, используя Reported Speech.",
      structure: [
        "Абзац 1: Что говорят эксперты / правительство (Reported Speech)",
        "Абзац 2: Что говорят обычные люди",
        "Абзац 3: Твоё мнение",
      ],
      requirements: ["140–160 слов", "Используй said, told, that + backshift"],
    },
  ],

  completedTopics: [
    "Grammar: Reported Speech · Backshift of Tenses · said/told/asked",
    "Тема: СМИ",
    "Writing: 3 абзаца (140–160 слов)",
  ],
};

export default a18;
