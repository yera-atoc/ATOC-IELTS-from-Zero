import type { Lesson } from "@/types/lesson";

const a12: Lesson = {
  id: "a12",
  level: "A12",
  band: "A",
  number: 12,
  title: "Present Perfect: for / since",
  subtitle: "Образование",
  grammarTopics: [
    "Present Perfect + for / since",
    "Разница между for и since",
    "Вопрос How long...?",
    "Разница Present Perfect и Past Simple",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "2 абзаца (110–120 слов)",
  prevLesson: "a11",
  nextLesson: "a13",

  grammar: [
    {
      id: "grammar-1",
      title: "for и since — в чём разница?",
      explanation: "С Present Perfect мы используем for (период времени) и since (точка начала) для выражения продолжительности действия.",
      tables: [
        {
          headers: ["Слово", "Значение", "После него стоит...", "Примеры"],
          rows: [
            ["for", "на протяжении (период)", "число + единица времени", "for two years, for six months, for a long time"],
            ["since", "с того момента, как (точка)", "конкретная дата или событие", "since 2019, since Monday, since I was a child"],
          ],
        },
      ],
      correctExamples: [
        "I have studied English for five years.",
        "She has worked here since 2019.",
      ],
      incorrectExamples: [
        "I have studied here since five years.",
        "She has worked here for 2019.",
      ],
      ieltsHint: "В IELTS Writing Task 1 (graphs): 'The number of students has increased for the past decade.'",
      taskInstruction: "Вставь for или since:\n1. I have been interested in biology ______ I was twelve.\n2. She has taught at this university ______ fifteen years.\n...",
    },
    {
      id: "grammar-2",
      title: "Вопрос How long...? — как долго?",
      explanation: "Вопрос How long...? используется с Present Perfect для уточнения продолжительности действия. Ответ всегда содержит for или since.",
      tables: [
        {
          headers: ["Вопрос", "Краткий ответ", "Полный ответ"],
          rows: [
            ["How long have you studied English?", "For three years.", "I have studied English for three years."],
            ["How long has she lived in London?", "Since 2021.", "She has lived in London since 2021."],
          ],
        },
      ],
      correctExamples: [
        "How long have you been here?",
        "How long has he worked here?",
      ],
      incorrectExamples: [
        "How long do you study English?",
        "How long you have been here?",
      ],
      ieltsHint: "В IELTS Speaking Part 1 часто спрашивают 'How long have you...?' Подготовь ответы заранее.",
      taskInstruction: "Составь вопрос How long...? и ответ:\n1. She studies at Oxford. (since 2022) → How long ______? → ______\n...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Education has changed dramatically in the last twenty years. Many students have studied online since the pandemic began. Universities have offered distance learning for several years now. Some learners have been using educational platforms for more than five years. However, many young people have not had access to quality education since childhood. Teachers have noticed that motivation has decreased in some cases. Despite this, technology has helped millions of students continue their studies. The education system continues to evolve.",
      wordCount: 95,
      taskInstruction: "Найди все примеры Present Perfect с for/since.",
      vocabulary: [
        { word: "dramatically", translation: "кардинально" },
        { word: "pandemic", translation: "пандемия" },
        { word: "distance learning", translation: "дистанционное обучение" },
        { word: "platform", translation: "платформа" },
        { word: "access", translation: "доступ" },
        { word: "motivation", translation: "мотивация" },
        { word: "evolve", translation: "развиваться" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 2 абзаца (110–120 слов) на тему Образование, используя Present Perfect with for/since.",
      structure: [
        "Абзац 1: Как долго ты/люди изучают английский или другой предмет (for/since)",
        "Абзац 2: Изменения в образовании за последние годы (Present Perfect)",
      ],
      requirements: ["110–120 слов", "Используй for, since, How long...?, already, yet"],
    },
  ],

  completedTopics: [
    "Grammar: Present Perfect + for/since · How long...? · Разница с Past Simple",
    "Тема: Образование",
    "Writing: 2 абзаца (110–120 слов)",
  ],
};

export default a12;
