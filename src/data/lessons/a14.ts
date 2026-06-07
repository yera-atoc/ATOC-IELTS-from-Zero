import type { Lesson } from "@/types/lesson";

const a14: Lesson = {
  id: "a14",
  level: "A14",
  band: "A",
  number: 14,
  title: "Passive Voice · Наука",
  subtitle: "Elementary",
  grammarTopics: [
    "Present Simple Passive (am/is/are + V3)",
    "Past Simple Passive (was/were + V3)",
    "Использование пассивного залога для описания процессов и научных фактов",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (110–130 слов)",
  prevLesson: "a13",
  nextLesson: "a15",

  grammar: [
    {
      id: "grammar-1",
      title: "Что такое Passive Voice (Пассивный залог)?",
      explanation:
        "Пассивный залог используется, когда само действие или его объект важнее, чем тот, кто это действие совершает. В научных текстах и описаниях процессов исполнитель часто опускается.",
      tables: [
        {
          headers: ["Время", "Структура", "Пример (Активный)", "Пример (Пассивный)"],
          rows: [
            ["Present Simple", "am / is / are + V3", "Scientists conduct experiments.", "Experiments are conducted by scientists."],
            ["Present Simple", "am / is / are + V3", "Water covers most of the Earth.", "Most of the Earth is covered by water."],
            ["Past Simple", "was / were + V3", "Alexander Fleming discovered penicillin.", "Penicillin was discovered by Alexander Fleming."],
            ["Past Simple", "was / were + V3", "The government built the laboratory in 2010.", "The laboratory was built in 2010."],
          ],
        },
        {
          headers: ["Конструкция", "Когда использовать", "Пример"],
          rows: [
            ["by + исполнитель", "Когда важно указать, КТО совершил действие", "The theory was developed by Einstein."],
            ["with + инструмент", "Когда важно указать, ЧЕМ совершено действие", "The data is analyzed with a special computer program."],
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
        "Опиши круговорот воды в природе или процесс научного эксперимента. Напиши 2 абзаца (110–120 слов).",
      structure: [
        "Абзац 1: Начало процесса (какие действия выполняются первыми, что нагревается / собирается)",
        "Абзац 2: Завершение процесса (какой результат достигается, куда направляется очищенная вода / данные)",
      ],
      requirements: [
        "Используй минимум 4 глагола в Present Simple Passive",
        "Используй слова-последовательности: First, Then, After that, Finally",
        "Объём: 110–120 слов",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши Opinion Essay о финансировании научных исследований. Ответь на вопрос: 'Should scientific research be funded by governments or private companies?'",
      structure: [
        "Абзац 1: Введение + тезис с использованием пассивного залога (например, о том, как распределяются деньги сейчас)",
        "Абзац 2: Аргумент в пользу государственного финансирования (почему важные открытия должны контролироваться обществом)",
      ],
      requirements: [
        "Начни введение с фразы: 'It is often argued that scientific research should be...'",
        "Минимум 2 предложения в Present Simple Passive и 2 предложения в Past Simple Passive",
        "Объём: 110–130 слов",
        "IELTS Подсказка: Пассивный залог — это основа академического стиля (Academic Tone) в IELTS Academic Task 1 (описание графиков/процессов) и Task 2. Он позволяет убрать местоимения 'I', 'we', 'people' и сделать текст объективным. Вместо 'People believe that...' пиши 'It is believed that...'.",
      ],
    },
  ],
};

export default a14;
