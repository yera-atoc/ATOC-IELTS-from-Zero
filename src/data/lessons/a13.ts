import type { Lesson } from "@/types/lesson";

const a13: Lesson = {
  id: "a13",
  level: "A13",
  band: "A",
  number: 13,
  title: "Modal Verbs · Здоровье",
  subtitle: "Elementary",
  grammarTopics: [
    "Модальные глаголы: must / should / might / could / have to",
    "Выражение степени уверенности и необходимости",
    "Советы, обязательства и техника 'hedging' в академическом письме",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2–3 абзаца (110–140 слов)",
  prevLesson: "a12",
  nextLesson: "a14",

  grammar: [
    {
      id: "grammar-1",
      title: "must и have to: обязательство и необходимость",
      explanation:
        "Оба глагола выражают необходимость совершения действия, но из разных источников. Must — это личное убеждение, внутренний долг или строгое правило автора. Have to — внешнее обязательство, закон, регламент или чужие правила.",
      tables: [
        {
          headers: ["Модальный глагол", "Значение", "Структура", "Пример (тема: здоровье)"],
          rows: [
            ["must", "Личная уверенность / внутренняя обязанность", "must + инфинитив (без to)", "You must drink enough water every day."],
            ["must not / mustn't", "Категорический запрет", "mustn't + инфинитив", "You mustn't skip your medication."],
            ["have to", "Внешнее обязательство / правило, закон", "have to + инфинитив", "Patients have to follow the doctor's advice."],
            ["has to", "Форма для He / She / It", "has to + инфинитив", "She has to take this pill twice a day."],
            ["don't / doesn't have to", "Нет необходимости (не обязательно)", "don't have to + инфинитив", "You don't have to go to the hospital for a minor cold."],
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
        "Напиши рекомендации по ведению здорового образа жизни.",
      structure: [
        "Абзац 1: Советы по правильному питанию (используй must / have to)",
        "Абзац 2: Рекомендации по физической активности и спорту (используй should / shouldn't)",
        "Абзац 3: Ментальное здоровье — что может помочь (используй could / might)",
      ],
      requirements: [
        "Используй минимум 5 разных модальных глаголов",
        "Объём: 110–130 слов",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши Opinion Essay о роли правительства в здравоохранении. Вопрос: 'Governments should be responsible for the health of their citizens. To what extent do you agree?'",
      structure: [
        "Абзац 1: Позиция: обоснование роли государства через конструкции governments must / should + 1 аргумент",
        "Абзац 2: Контраргумент: личная ответственность граждан через individuals have to / should also...",
        "Абзац 3 (опционально): Заключительный вывод с использованием might / could для смягчения утверждений",
      ],
      requirements: [
        "Начни эссе с фразы: 'The question of who should be responsible for public health...'",
        "Обязательно используй по одному разу: must, should, have to, might/could",
        "Объём: 120–140 слов",
        "Шаблон сложного аргумента: 'Governments must fund hospitals AND individuals should take responsibility for their diet. While the state could provide education campaigns, people have to make their own daily choices.'",
        "IELTS Подсказка: Для получения высокого балла (Band 7+) в критериях Writing используй 'hedging' (смягчение категоричности) с помощью might/could в контраргументах и выводах. Пример: 'While this approach might not solve all health problems, it could significantly reduce the burden on healthcare systems.' Это звучит академично.",
      ],
    },
  ],
};

export default a13;
