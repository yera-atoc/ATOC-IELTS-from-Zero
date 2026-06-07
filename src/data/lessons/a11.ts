import type { Lesson } from "@/types/lesson";

const a11: Lesson = {
  id: "a11",
  level: "A11",
  band: "A",
  number: 11,
  title: "Present Perfect · have/has + V3",
  subtitle: "Технологии",
  grammarTopics: [
    "Present Perfect (have/has + V3)",
    "ever / never / just / already / yet",
    "V3 (Past Participle) — правильные и неправильные глаголы",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "2 абзаца (110–120 слов)",
  prevLesson: "a10",
  nextLesson: "a12",

  grammar: [
    {
      id: "grammar-1",
      title: "Present Perfect: have/has + V3",
      explanation: "Present Perfect связывает прошлое с настоящим. Мы говорим о действии, которое произошло в прошлом, но результат важен сейчас.",
      tables: [
        {
          headers: ["Местоимение", "Вспомогательный глагол", "V3", "Пример"],
          rows: [
            ["I/You/We/They", "have", "seen", "I have seen this film."],
            ["He/She/It", "has", "visited", "She has visited Tokyo."],
            ["I/You/We/They", "have not (haven't)", "eaten", "They haven't eaten yet."],
            ["He/She/It", "has not (hasn't)", "finished", "He hasn't finished the app."],
          ],
        },
      ],
      correctExamples: [
        "I have seen a new smartphone.",
        "She has gone to the office.",
      ],
      incorrectExamples: [
        "I have saw a new smartphone.",
        "She has go to the office.",
      ],
      ieltsHint: "В IELTS Writing Task 2 Present Perfect отлично подходит для обобщений: 'Technology has changed our lives dramatically.'",
      taskInstruction: "Поставь глагол в форму Present Perfect:\n1. Scientists ______ (discover) a new planet.\n2. My sister ______ (buy) the latest iPhone.\n...",
    },
    {
      id: "grammar-2",
      title: "Форма V3 — правильные и неправильные глаголы",
      explanation: "Для Present Perfect нужна форма V3 (Past Participle). Правильные глаголы: + -ed. Неправильные нужно запоминать.",
      tables: [
        {
          headers: ["Инфинитив", "Past Simple", "V3", "Перевод"],
          rows: [
            ["invent", "invented", "invented", "изобретать"],
            ["write", "wrote", "written", "писать"],
            ["make", "made", "made", "делать"],
            ["see", "saw", "seen", "видеть"],
          ],
        },
      ],
      correctExamples: [
        "Scientists have found a solution.",
        "She has written the code.",
      ],
      incorrectExamples: [
        "Scientists have founded a solution.",
        "She has writed the code.",
      ],
      ieltsHint: "Для IELTS полезно знать 40–50 неправильных глаголов. Начни с технологических: write→written, know→known, find→found и т.д.",
      taskInstruction: "Исправь ошибки в предложениях (V3):\n1. Engineers have builded a new bridge. → ______\n...",
    },
  ],

  readings: [
    // Здесь можно добавить чтение из PDF, если есть полный текст. Пока оставил placeholder
    {
      id: "reading-1",
      text: "...", // вставь полный текст из PDF при необходимости
      wordCount: 0,
      taskInstruction: "",
      vocabulary: [],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 2 абзаца (110–120 слов) на тему Технологии, используя Present Perfect.",
      structure: [
        "Абзац 1: Как технологии изменили нашу жизнь (Present Perfect + обобщения)",
        "Абзац 2: Примеры из личного опыта или современности",
      ],
      requirements: ["110–120 слов", "Используй have/has + V3, already, yet, just, ever/never"],
    },
  ],

  completedTopics: [
    "Grammar: Present Perfect · ever/never/just/already/yet · V3 формы",
    "Тема: Технологии",
    "Writing: 2 абзаца (110–120 слов)",
  ],
};

export default a11;
