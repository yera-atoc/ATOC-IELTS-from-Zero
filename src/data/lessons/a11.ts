import type { Lesson } from "@/types/lesson";

const a11: Lesson = {
  id: "a11",
  level: "A11",
  band: "A",
  number: 11,
  title: "Present Perfect · Технологии",
  subtitle: "Elementary",
  grammarTopics: [
    "Present Perfect (have/has + V3)",
    "Маркеры времени: ever, never, just, already, yet",
    "Использование Present Perfect в академическом введении",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (110–120 слов)",
  prevLesson: "a10",
  nextLesson: "a12",

  grammar: [
    {
      id: "grammar-1",
      title: "Что такое Present Perfect?",
      explanation:
        "Present Perfect — это время, которое связывает прошлое с настоящим. Мы говорим о действии, которое произошло в прошлом, но его результат важен сейчас.",
      tables: [
        {
          headers: ["Местоимение", "Вспомогательный глагол", "V3 (причастие II)", "Пример"],
          rows: [
            ["I / You / We / They", "have", "seen", "I have seen this film."],
            ["He / She / It", "has", "visited", "She has visited Tokyo."],
            ["I / You / We / They", "have not (haven't)", "eaten", "They haven't eaten yet."],
            ["He / She / It", "has not (hasn't)", "finished", "He hasn't finished the app."],
            ["Have I / you / we / they", "—", "used", "Have you used this software?"],
            ["Has he / she / it", "—", "worked", "Has she worked here long?"],
          ],
        },
        {
          headers: ["Неверно", "Верно"],
          rows: [
            ["I have saw a new smartphone.", "I have seen a new smartphone."],
            ["She has go to the laboratory.", "She has gone to the laboratory."],
          ],
        },
      ],
    },
  ],

  writing: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши, как технологии изменили твою жизнь. Напиши 2 абзаца (110–120 слов).",
      structure: [
        "Абзац 1: Технологии, которые ты уже использовал (already, just)",
        "Абзац 2: Технологии, которые ты ещё не пробовал, но хочешь (yet, never, ever)",
      ],
      requirements: [
        "Используй минимум 4 конструкции Present Perfect",
        "Объём: 110–120 слов",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши мнение о влиянии технологий на общение. Ответь на вопрос: 'Technology has improved the way people communicate. Do you agree?'",
      structure: [
        "Абзац 1: Введение + позиция (согласен/не согласен) + 1 аргумент с Present Perfect",
        "Абзац 2: 2-й аргумент / конкретный пример + вывод в конце",
      ],
      requirements: [
        "Начни введение с фразы: 'Technology has dramatically changed...'",
        "Минимум 5 глаголов в Present Perfect (например: has changed, have developed, have created, have connected, have improved)",
        "Объём: 110–120 слов",
        "IELTS Подсказка: В Writing Task 2 Band 7+ часто используется Present Perfect в начале: 'In recent decades, technology has transformed every aspect of human life.' Это делает введение сильным и академическим.",
      ],
    },
  ],
};

export default a11;
