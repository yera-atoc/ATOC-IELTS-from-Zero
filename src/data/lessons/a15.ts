import type { Lesson } from "@/types/lesson";

const a15: Lesson = {
  id: "a15",
  level: "A15",
  band: "A",
  number: 15,
  title: "Second Conditional · If I were...",
  subtitle: "Общество и социальные проблемы",
  grammarTopics: [
    "Second Conditional (If + Past Simple, would + V1)",
    "If I were... (субъюнктив)",
    "Нереальные / воображаемые ситуации",
  ],
  readingInfo: "2 текста + 60 новых слов",
  writingInfo: "2 абзаца (110–130 слов)",
  prevLesson: "a14",
  nextLesson: "a16",

  grammar: [
    {
      id: "grammar-1",
      title: "Second Conditional: структура",
      explanation: "Second Conditional описывает нереальные, воображаемые или маловероятные ситуации в настоящем или будущем («что было бы, если бы...»).",
      tables: [
        {
          headers: ["Часть предложения", "Форма", "Пример (тема: общество)"],
          rows: [
            ["IF-clause (условие)", "if + Past Simple", "If everyone paid taxes honestly,"],
            ["Main clause (результат)", "would + bare infinitive", "governments would have more money for schools."],
          ],
        },
      ],
      correctExamples: [
        "If everyone had equal opportunities, society would improve.",
        "If there were no poverty, crime rates would fall.",
      ],
      incorrectExamples: [
        "If everyone will have equal opportunities, society will improve.",
      ],
      ieltsHint: "В IELTS Writing Task 2 Second Conditional идеально подходит для гипотез и аргументации: 'If governments invested more in education, inequality would decrease.'",
      taskInstruction: "Составьте предложения во втором условном наклонении:\n1. have free healthcare → people / live / longer\n2. reduce working hours → employees / be / more productive\n...",
    },
    {
      id: "grammar-2",
      title: "If I were... (специальная форма)",
      explanation: "В Second Conditional с глаголом to be используется were для всех лиц. Это формальный субъюнктив, стандарт в академическом английском и IELTS.",
      tables: [
        {
          headers: ["Лицо", "Разговорный", "Академический (IELTS)"],
          rows: [
            ["I", "If I was rich...", "If I were rich..."],
            ["He / She", "If he was president...", "If he were president..."],
          ],
        },
      ],
      correctExamples: [
        "If I were the president, I would reform the tax system.",
        "If education were free worldwide, millions of children would benefit.",
      ],
      ieltsHint: "В официальном IELTS Writing всегда используйте 'If I were' (не 'was'). Это признак высокого уровня (Band 7+).",
      taskInstruction: "Дополните предложения, используя If I/he/she... were...:\n1. If I ___ (be) a social worker, I would help homeless people.\n...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "If I were the president, I would make education free for everyone. If people worked less, they would be happier and more productive. If there were no corruption, society would develop much faster. Many problems would disappear if governments were more honest. If everyone had equal opportunities, the world would be a better place.",
      wordCount: 75,
      taskInstruction: "Найди все примеры Second Conditional.",
      vocabulary: [
        { word: "corruption", translation: "коррупция" },
        { word: "equal opportunities", translation: "равные возможности" },
        { word: "productive", translation: "продуктивный" },
        { word: "develop", translation: "развиваться" },
      ],
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task",
      instruction: "Напиши 2 абзаца (110–130 слов) на тему Общество, используя Second Conditional.",
      structure: [
        "Абзац 1: Что было бы, если бы изменились определённые социальные проблемы (If ... would ...)",
        "Абзац 2: Личные гипотезы с If I were...",
      ],
      requirements: ["110–130 слов", "Используй If + Past Simple, would + V1 и If I were..."],
    },
  ],

  completedTopics: [
    "Grammar: Second Conditional · If I were...",
    "Тема: Общество и социальные проблемы",
    "Writing: 2 абзаца (110–130 слов)",
  ],
};

export default a15;
