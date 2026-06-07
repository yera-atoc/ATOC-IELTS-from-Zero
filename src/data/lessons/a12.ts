import type { Lesson } from "@/types/lesson";

const a12: Lesson = {
  id: "a12",
  level: "A12",
  band: "A",
  number: 12,
  title: "Present Perfect (for/since) · Образование",
  subtitle: "Elementary",
  grammarTopics: [
    "Present Perfect: for / since",
    "Разница между Present Perfect и Past Simple",
    "Вопросительная структура How long...?",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (110–120 слов)",
  prevLesson: "a11",
  nextLesson: "a13",

  grammar: [
    {
      id: "grammar-1",
      title: "for и since: в чём разница?",
      explanation:
        "С Present Perfect мы часто говорим о том, как долго длится действие. Для этого используются маркеры for (указывает на период времени) и since (указывает на конкретную точку начала действия).",
      tables: [
        {
          headers: ["Слово", "Значение", "После него стоит...", "Примеры"],
          rows: [
            ["for", "на протяжении (период)", "число + единица времени", "for two years / for six months / for a long time"],
            ["for", "на протяжении (период)", "число + единица времени", "for three weeks / for ages / for a decade"],
            ["since", "с того момента, как (точка)", "конкретная дата или событие", "since 2019 / since Monday / since I was a child"],
            ["since", "с того момента, как (точка)", "конкретная дата или событие", "since September / since the school opened / since last year"],
          ],
        },
        {
          headers: ["Структура", "Пример", "Перевод"],
          rows: [
            ["Subject + have/has + V3 + for + период", "I have studied English for five years.", "Я учу английский уже пять лет."],
            ["Subject + have/has + V3 + since + точка", "She has lived in Almaty since 2015.", "Она живет в Алматы с 2015 года."],
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
        "Опиши свой опыт обучения. Ответь на вопрос: 'How long have you studied English?'",
      structure: [
        "Абзац 1: Расскажи, когда ты начал и сколько уже учишься, используя конструкции с for и since.",
      ],
      requirements: [
        "Минимум: 2 предложения в Past Simple + 3 предложения в Present Perfect (for/since)",
        "Объём: 110–120 слов",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши Opinion Essay об образовании. Ответь на вопрос: 'In recent years, the quality of education has improved greatly. Do you agree?'",
      structure: [
        "Абзац 1: Введение: позиция + 1 аргумент с шаблоном 'In recent years... has...'",
        "Абзац 2: Аргумент 2: конкретный пример в Past Simple + вывод в Present Perfect",
      ],
      requirements: [
        "Начни с фразы: 'In recent years, education systems around the world have...'",
        "Обязательно включи: 1 предложение с for, 1 предложение с since, 1 предложение с recently/lately",
        "Объём: 110–120 слов",
        "Шаблон аргументации: 'For instance, since [год/событие], [страна/школа] has [результат]. This demonstrates that...'",
        "IELTS Подсказка: Чередование Present Perfect и Past Simple в одном эссе — яркий маркер широкого грамматического диапазона (Grammar Range Band 7+). Пример: 'Governments invested heavily in education in the 1990s, and since then, literacy rates have risen dramatically.'",
      ],
    },
  ],
};

export default a12;
