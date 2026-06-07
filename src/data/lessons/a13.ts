import type { Lesson } from "@/types/lesson";

const a13: Lesson = {
  id: "a13",
  level: "A13",
  band: "A",
  number: 13,
  title: "Modal Verbs: must / should / might / could / have to",
  subtitle: "Здоровье",
  grammarTopics: [
    "must / mustn't",
    "have to / don't have to / had to",
    "should / might / could",
    "Степень уверенности и необходимости",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "2–3 абзаца (110–140 слов)",
  prevLesson: "a12",
  nextLesson: "a14",

  grammar: [
    {
      id: "grammar-1",
      title: "must и have to — обязательство и необходимость",
      explanation: "Оба глагола выражают необходимость, но с разным источником. Must — личное убеждение или правило. Have to — внешнее требование.",
      tables: [
        {
          headers: ["Модальный глагол", "Значение", "Структура", "Пример (тема: здоровье)"],
          rows: [
            ["must", "Личная уверенность / внутренняя обязанность", "must + инфинитив", "You must drink enough water every day."],
            ["mustn't", "Запрет", "mustn't + инфинитив", "You mustn't skip your medication."],
            ["have to", "Внешнее обязательство / правило", "have to + инфинитив", "Patients have to follow the doctor's advice."],
            ["don't have to", "Не обязательно", "don't have to + инфинитив", "You don't have to go to hospital — it's just a cold."],
          ],
        },
      ],
      correctExamples: [
        "You mustn't smoke here.",
        "She must see a doctor.",
        "I didn't have to go.",
      ],
      incorrectExamples: [
        "You mustn't to smoke here.",
        "She must to see a doctor.",
        "I didn't have to went.",
      ],
      ieltsHint: "В IELTS Writing Task 2: 'Governments must invest in preventive healthcare' (личное мнение) vs 'Doctors have to follow strict ethical guidelines' (правило).",
      taskInstruction: "Вставь must / mustn't / have to / don't have to:\n1. Doctors ______ wash their hands before examining patients.\n2. You ______ eat fast food every day...\n...",
    },
    {
      id: "grammar-2",
      title: "should, might, could",
      explanation: "Should — совет, might/could — возможность или мягкий совет.",
      tables: [
        {
          headers: ["Модальный глагол", "Значение", "Пример"],
          rows: [
            ["should", "Совет / рекомендация", "You should exercise more."],
            ["might / could", "Возможность", "This medicine might help you."],
          ],
        },
      ],
      ieltsHint: "Используй модальные глаголы в Writing Task 2 для выражения мнения и рекомендаций.",
      taskInstruction: "Составь предложения с модальными глаголами по теме здоровья.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Good health is very important. People must take care of their bodies. Doctors say that everyone should eat healthy food and exercise regularly. However, many people don't have to go to the hospital if they have a simple cold. Smoking is very dangerous — you mustn't smoke. In the future, scientists might discover new treatments for serious diseases. We could live longer if we follow medical advice.",
      wordCount: 85,
      taskInstruction: "Найди все модальные глаголы и определи их значение.",
      vocabulary: [
        { word: "take care of", translation: "заботиться о" },
        { word: "exercise regularly", translation: "заниматься спортом регулярно" },
        { word: "dangerous", translation: "опасный" },
        { word: "treatment", translation: "лечение" },
        { word: "medical advice", translation: "медицинская рекомендация" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 2–3 абзаца (110–140 слов) на тему Здоровье, используя модальные глаголы.",
      structure: [
        "Абзац 1: Что люди должны/обязаны делать для здоровья (must / have to / should)",
        "Абзац 2: Что не обязательно или запрещено (don't have to / mustn't)",
        "Абзац 3 (по желанию): Возможные решения в будущем (might / could)",
      ],
      requirements: ["110–140 слов", "Используй must, have to, should, mustn't, don't have to"],
    },
  ],

  completedTopics: [
    "Grammar: Modal Verbs (must, have to, should, might, could)",
    "Тема: Здоровье",
    "Writing: 2–3 абзаца (110–140 слов)",
  ],
};

export default a13;
