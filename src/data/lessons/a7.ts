import type { Lesson } from "@/types/lesson";

const a7: Lesson = {
  id: "a7",
  level: "A7",
  band: "A",
  number: 7,
  title: "Past Simple · Правильные глаголы · Путешествия",
  subtitle: "Elementary",
  grammarTopics: [
    "Past Simple (правильные глаголы, -ed)",
    "Отрицание и вопрос: did / didn't",
    "Маркеры прошлого времени",
    "Произношение -ed",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (80–90 слов)",
  prevLesson: "a6",
  nextLesson: "a8",

  grammar: [
    {
      id: "grammar-1",
      title: "Past Simple: правильные глаголы (-ed)",
      explanation:
        "В английском языке Past Simple выражает действие, которое началось и завершилось в прошлом. Для правильных глаголов мы просто добавляем -ed к основе.",
      tables: [
        {
          headers: ["Инфинитив", "Правило", "Past Simple", "Перевод"],
          rows: [
            ["work", "+ ed", "worked", "работал(а)"],
            ["visit", "+ ed", "visited", "посетил(а)"],
            ["travel", "+ led", "travelled", "путешествовал(а)"],
            ["stop", "CVC → двойная согл.", "stopped", "остановил(ся)"],
            ["live", "e → drop + d", "lived", "жил(а)"],
            ["study", "y → ied", "studied", "учился/учился"],
            ["arrive", "e → + d", "arrived", "прибыл(а)"],
            ["pack", "+ ed", "packed", "упаковал(а)"],
          ],
        },
      ],
      correctExamples: [
        "Yesterday I worked in the office.",
        "She visited London last year.",
        "They arrived late.",
      ],
      incorrectExamples: [
        "Yesterday I work in the office.",
        "She visit London last year.",
        "They arrive late.",
      ],
      ieltsHint:
        "Правило «CVC»: если глагол — 1 слог, последний согласный удвоить (stop→stopped). Но: visit→visited — без удвоения, потому что ударение на первом слоге.",
      taskInstruction:
        "Образуйте Past Simple от глаголов:\n• carry → _______ plan → _______ dance → _______\n• book → _______ love → _______ drop → _______\n• open → _______ enjoy → _______ prefer → _______",
    },
    {
      id: "grammar-2",
      title: "Отрицание и вопрос в Past Simple",
      explanation:
        "Для отрицания и вопросов используем вспомогательный глагол did / didn't. Основной глагол всегда стоит в базовой форме (без -ed).",
      tables: [
        {
          headers: ["Тип", "Структура", "Пример"],
          rows: [
            ["Утверждение", "Subject + V-ed", "She visited London last year."],
            ["Отрицание", "Subject + didn't + V", "She didn't visit Paris."],
            ["Вопрос", "Did + Subject + V?", "Did she visit the museum?"],
            ["Краткий ответ (+)", "Yes, + subject + did.", "Yes, she did."],
            ["Краткий ответ (−)", "No, + subject + didn't.", "No, she didn't."],
          ],
        },
      ],
      correctExamples: [
        "Did you travel last summer?",
        "They didn't stay at a hotel.",
        "He didn't pack his bag.",
      ],
      incorrectExamples: [
        "Did you travelled last summer?",
        "They didn't stayed at a hotel.",
        "He didn't packed his bag.",
      ],
      ieltsHint:
        "В IELTS Writing Task 1 и Task 2 Past Simple часто используется для описания данных прошлого периода: «Sales increased in 2019.» Избегай смешения времён!",
      taskInstruction:
        "Составь вопрос и отрицание:\n• She booked a hotel. → Did _______ ? / She didn't _______.\n• They arrived late. → _______ ? / _______ didn't _______.\n• He travelled by train. → _______ ? / _______ didn't _______.",
    },
    {
      id: "grammar-3",
      title: "Маркеры прошлого времени",
      explanation:
        "Маркеры прошлого времени — это слова-указатели, которые сигнализируют, что нужен Past Simple. Запомни их — они часто встречаются в IELTS.",
      tables: [
        {
          headers: ["Маркер", "Значение", "Пример"],
          rows: [
            ["yesterday", "вчера", "Yesterday I packed my suitcase."],
            ["last week / month / year", "прошлая неделя/месяц/год", "Last year we visited Japan."],
            ["ago", "назад (+ период)", "Two days ago she arrived in Paris."],
            ["in 2019 / in the past", "в 2019-м / в прошлом", "In 2020 the borders closed."],
            ["when I was…", "когда я был(а)…", "When I was a child, I travelled a lot."],
            ["at that time", "в то время", "At that time, tourism boomed."],
          ],
        },
      ],
      correctExamples: [
        "Three years ago I visited Spain.",
        "Last year we travelled to Portugal.",
        "When I was a student, I backpacked Europe.",
      ],
      incorrectExamples: [
        "Ago three years I visited Spain.",
        "I visited Spain three years before.",
      ],
      ieltsHint:
        "Маркер «ago» стоит ПОСЛЕ периода: three years ago (не «ago three years»). В IELTS это частая ошибка!",
      taskInstruction:
        "Выбери правильный маркер и заверши предложение:\n• _______ (Yesterday / Last) I arrived in Bangkok.\n• We booked the hotel two months _______ (ago / before).\n• _______ (In / At) 2018, they opened a new airport.\n• _______ (When / While) I was a student, I backpacked Europe.",
    },
    {
      id: "grammar-4",
      title: "Произношение окончания -ed",
      explanation:
        "Окончание -ed читается тремя разными способами. Знание произношения важно для IELTS Speaking, чтобы не терять баллы за неправильную фонетику.",
      tables: [
        {
          headers: ["Произношение", "Когда?", "Примеры"],
          rows: [
            ["/t/", "после глухих согл. (p, k, f, s, sh, ch)", "stopped, packed, booked, washed"],
            ["/d/", "после звонких согл. и гласных", "travelled, arrived, stayed, climbed"],
            ["/id/", "после -t или -d", "visited, started, waited, landed"],
          ],
        },
        {
          headers: ["Слово", "Транскрипция"],
          rows: [
            ["stopped", "/stɒpt/"],
            ["packed", "/pækt/"],
            ["washed", "/wɒʃt/"],
            ["travelled", "/ˈtrævəld/"],
            ["arrived", "/əˈraɪvd/"],
            ["visited", "/ˈvɪzɪtɪd/"],
            ["landed", "/ˈlændɪd/"],
          ],
        },
      ],
      correctExamples: [
        "stopped → /stɒpt/",
        "visited → /ˈvɪzɪtɪd/",
        "arrived → /əˈraɪvd/",
      ],
      incorrectExamples: [
        "stopped → /stɒpɪd/ ❌",
        "packed → /pækɪd/ ❌",
      ],
      ieltsHint:
        "В IELTS Speaking, если произносить все -ed как /id/ — это ошибка произношения. Например: «stopped» звучит /stɒpt/, а не /stɒpɪd/!",
      taskInstruction:
        "Распредели глаголы по произношению -ed:\n• Слова: visited · packed · arrived · started · booked · climbed · landed · washed\n• /t/: _____________\n• /d/: _____________\n• /id/: ____________",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Last summer, my family and I travelled to Portugal. We booked our tickets three months ago and planned the trip carefully. We arrived in Lisbon on a sunny morning and checked into a small hotel near the city centre. On the first day, we visited the famous Belem Tower and walked along the riverside. My sister photographed everything she noticed. In the evening, we tried local food and enjoyed fresh seafood. The next day we rented a car and toured the Sintra mountains. The scenery amazed us. We stayed in Portugal for ten days and returned home last Monday. I loved every moment of that trip.",
      wordCount: 130,
      taskInstruction:
        "Прочитай текст. Подчеркни все глаголы в Past Simple. Найди и обведи маркеры прошлого времени.",
      vocabulary: [
        { word: "travel", translation: "путешествовать" },
        { word: "book", translation: "бронировать" },
        { word: "arrive", translation: "прибывать" },
        { word: "check in", translation: "заселиться" },
        { word: "visit", translation: "посещать" },
        { word: "walk", translation: "гулять" },
        { word: "photograph", translation: "фотографировать" },
        { word: "notice", translation: "замечать" },
        { word: "try", translation: "попробовать" },
        { word: "enjoy", translation: "наслаждаться" },
        { word: "rent", translation: "арендовать" },
        { word: "tour", translation: "объезжать" },
        { word: "amaze", translation: "поражать" },
        { word: "stay", translation: "оставаться" },
        { word: "return", translation: "возвращаться" },
        { word: "trip", translation: "поездка" },
        { word: "riverside", translation: "набережная" },
        { word: "city centre", translation: "центр города" },
        { word: "mountain", translation: "гора" },
        { word: "moment", translation: "момент" },
        { word: "sunny", translation: "солнечный" },
        { word: "local", translation: "местный" },
        { word: "nearby", translation: "поблизости" },
        { word: "scenery", translation: "пейзаж" },
        { word: "seafood", translation: "морепродукты" },
        { word: "ticket", translation: "билет" },
        { word: "careful", translation: "тщательный" },
        { word: "hotel", translation: "отель" },
        { word: "evening", translation: "вечер" },
        { word: "famous", translation: "знаменитый" },
      ],
      lifehack:
        "Читая текст, всегда ищи глаголы-маркеры прошлого. В IELTS Reading глаголы в Past Simple часто помогают понять последовательность событий.",
    },
    {
      id: "reading-2",
      text: "Airports changed the way people travel. In 1903, the Wright Brothers launched the first powered flight. After that, countries started building airports. In 1920, London opened its first commercial airport at Croydon. Engineers designed longer runways, and airlines expanded their routes. Fifty years ago, only wealthy people travelled by plane. However, in the 1970s, airlines introduced cheaper tickets and tourism boomed. Millions of passengers travelled internationally for the first time. Last century, aviation transformed global culture. New airports appeared on every continent. By 2000, air travel connected over 200 countries. Today, airports continue to grow, but their story started with a small wooden plane over a century ago.",
      wordCount: 135,
      taskInstruction:
        "Прочитай текст. Найди 5 маркеров прошлого времени и запиши их рядом с текстом. Переведи выделенные предложения.",
      vocabulary: [
        { word: "launch", translation: "запускать" },
        { word: "powered", translation: "моторный" },
        { word: "flight", translation: "полёт" },
        { word: "commercial", translation: "коммерческий" },
        { word: "engineer", translation: "инженер" },
        { word: "runway", translation: "взлётная полоса" },
        { word: "expand", translation: "расширять" },
        { word: "route", translation: "маршрут" },
        { word: "wealthy", translation: "состоятельный" },
        { word: "introduce", translation: "ввести" },
        { word: "cheap", translation: "дешёвый" },
        { word: "boom", translation: "резко расти" },
        { word: "passenger", translation: "пассажир" },
        { word: "internationally", translation: "международно" },
        { word: "aviation", translation: "авиация" },
        { word: "transform", translation: "преобразовывать" },
        { word: "continent", translation: "континент" },
        { word: "connect", translation: "соединять" },
        { word: "century", translation: "столетие" },
        { word: "airport", translation: "аэропорт" },
        { word: "country", translation: "страна" },
        { word: "culture", translation: "культура" },
        { word: "global", translation: "глобальный" },
        { word: "appear", translation: "появляться" },
        { word: "grow", translation: "расти" },
        { word: "today", translation: "сегодня" },
        { word: "continue", translation: "продолжать" },
        { word: "wooden", translation: "деревянный" },
        { word: "over", translation: "более" },
        { word: "story", translation: "история" },
      ],
      lifehack:
        "В IELTS Academic Reading часто встречаются тексты об истории и развитии явлений. Умение быстро находить даты и маркеры прошлого — ключевой навык.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши своё последнее путешествие (реальное или придуманное). Используй Past Simple и не менее 3 маркеров прошлого времени.",
      structure: [
        "Абзац 1: куда поехал(а), когда, с кем",
        "Абзац 2: что делал(а), что понравилось",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Минимум 6 глаголов в Past Simple",
        "Маркеры: yesterday / last... / ...ago",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши о важном событии в истории транспорта. Как оно изменило жизнь людей? Используй Past Simple.",
      structure: [
        "Абзац 1 (40–45 слов): Что произошло? Когда? Кто был вовлечён?",
        "Абзац 2 (40–45 слов): Как это изменило транспорт и жизнь людей?",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Полезные слова: invented, designed, introduced, changed, improved",
      ],
    },
  ],

  completedTopics: [
    "Past Simple с правильными глаголами (-ed)",
    "Маркеры прошлого времени: yesterday, last, ago",
    "2 текста о путешествиях + 60 новых слов",
  ],
};

export default a7;
