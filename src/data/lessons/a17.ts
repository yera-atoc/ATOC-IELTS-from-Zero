import type { Lesson } from "@/types/lesson";

const a17: Lesson = {
  id: "a17",
  level: "A17",
  band: "A",
  number: 17,
  title: "Past Perfect · By the time · Before / After",
  subtitle: "История и исторические события",
  grammarTopics: [
    "Past Perfect (had + V3)",
    "By the time",
    "Before / After",
    "Хронология событий в прошлом",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "3 абзаца (140–160 слов)",
  prevLesson: "a16",
  nextLesson: "a18",

  grammar: [
    {
      id: "grammar-1",
      title: "Past Perfect: структура и значение",
      explanation: "Past Perfect показывает, что одно действие произошло раньше другого действия в прошлом. Незаменимо для исторических текстов.",
      tables: [
        {
          headers: ["Форма", "Структура", "Пример (история)"],
          rows: [
            ["Утверждение", "had + V3", "By 1945, the war had ended in Europe."],
            ["Отрицание", "had not (hadn't) + V3", "The soldiers hadn't received orders yet."],
            ["Вопрос", "Had + subject + V3?", "Had the emperor already fled the capital?"],
          ],
        },
      ],
      correctExamples: [
        "By the time Columbus arrived, the natives had already lived there for centuries.",
        "The city had been abandoned when the invaders arrived.",
      ],
      incorrectExamples: [
        "By the time Columbus arrived, the natives already lived there for centuries.",
      ],
      ieltsHint: "В IELTS Writing Task 2 по историческим темам Past Perfect помогает выстроить чёткую хронологию событий.",
      taskInstruction: "Раскройте скобки, используя Past Perfect или Past Simple:\n1. By the time the peace treaty (sign), thousands of soldiers (die).\n...",
    },
    {
      id: "grammar-2",
      title: "By the time: два события в прошлом",
      explanation: "By the time соединяет два прошлых события: одно произошло ДО второго.",
      tables: [
        {
          headers: ["Структура", "Значение", "Исторический пример"],
          rows: [
            ["By the time + PS, PP", "К тому времени, как X, уже Y", "By the time Napoleon reached Moscow, the city had been abandoned."],
            ["By [year], PP", "К [году] уже произошло", "By 1815, Napoleon had been defeated twice."],
          ],
        },
      ],
      correctExamples: [
        "By the time the war ended, millions of people had lost their homes.",
        "The empire had collapsed by the time help arrived.",
      ],
      ieltsHint: "Используйте 'By the time + Past Perfect' в Writing Task 2 для чёткой хронологии.",
      taskInstruction: "Составьте предложения с By the time:\n1. 1945: WWII ended. Before that: 70 million people / die.\n...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "By the time World War II ended in 1945, millions of people had died. The Roman Empire had already collapsed by the time the invaders arrived. Many great civilizations had disappeared before modern historians could study them. By 1492, Columbus had sailed for over two months when he reached the Americas. History shows us that by the time one era ends, another had already begun.",
      wordCount: 85,
      taskInstruction: "Найди все примеры Past Perfect и By the time.",
      vocabulary: [
        { word: "collapse", translation: "рухнуть, collapse" },
        { word: "civilization", translation: "цивилизация" },
        { word: "era", translation: "эра, эпоха" },
        { word: "invader", translation: "захватчик" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 3 абзаца (140–160 слов) на тему История, используя Past Perfect.",
      structure: [
        "Абзац 1: Важные события прошлого (Past Perfect + Past Simple)",
        "Абзац 2: By the time конструкции",
        "Абзац 3: Значение этих событий сегодня",
      ],
      requirements: ["140–160 слов", "Используй had + V3, By the time, before/after"],
    },
  ],

  completedTopics: [
    "Grammar: Past Perfect · By the time · Before / After",
    "Тема: История и исторические события",
    "Writing: 3 абзаца (140–160 слов)",
  ],
};

export default a17;
