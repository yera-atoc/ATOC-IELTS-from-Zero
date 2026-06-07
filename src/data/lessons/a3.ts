import type { Lesson } from "@/types/lesson";

const a3: Lesson = {
  id: "a3",
  level: "A3",
  band: "A",
  number: 3,
  title: "Present Simple · Do/Don't · Наречия частотности",
  subtitle: "Absolute Beginner",
  grammarTopics: [
    "Present Simple (I/You/We/They)",
    "Do / Don't",
    "Наречия частотности",
    "Время и предлоги at/in/on",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "6–8 предложений",
  prevLesson: "a2",
  nextLesson: "a4",

  grammar: [
    {
      id: "grammar-1",
      title: "Present Simple: I / You / We / They",
      explanation:
        "Present Simple описывает регулярные действия, привычки и факты. Это самое используемое время в английском языке. Для I/You/We/They форма глагола не меняется.",
      tables: [
        {
          headers: ["Местоимение", "Глагол", "Пример", "Перевод"],
          rows: [
            ["I", "work / study / live", "I work at a bank.", "Я работаю в банке."],
            ["You", "work / study / live", "You study English every day.", "Ты изучаешь английский каждый день."],
            ["We", "work / study / live", "We live in Almaty.", "Мы живём в Алматы."],
            ["They", "work / study / live", "They study at university.", "Они учатся в университете."],
          ],
        },
        {
          headers: ["Маркер", "Перевод", "Пример"],
          rows: [
            ["every day / week / month", "каждый день / неделю / месяц", "I go to the gym every day."],
            ["in the morning / evening", "по утрам / вечерам", "We have breakfast in the morning."],
            ["on Mondays / at weekends", "по понедельникам / в выходные", "They rest on weekends."],
            ["usually / often / always", "обычно / часто / всегда", "I usually drink coffee in the morning."],
            ["sometimes / never", "иногда / никогда", "We sometimes cook at home."],
            ["twice a week / once a month", "два раза в неделю / раз в месяц", "I call my parents twice a week."],
          ],
        },
      ],
      correctExamples: [
        "I work in a hospital.",
        "They study English.",
        "We go to school every day.",
      ],
      incorrectExamples: [
        "I works in a hospital.",
        "They studies English.",
        "We goes to school every day.",
      ],
      ieltsHint:
        "В Speaking Part 1: «What do you do in your free time?» «Where do you live?» «Do you work or study?» — всё это Present Simple. Подготовь 5–6 предложений о своей рутине заранее.",
      taskInstruction:
        "Составь 6 предложений о своей ежедневной рутине, используя Present Simple.\n• Используй разные глаголы из таблицы (минимум 5 разных)\n• Добавь маркеры времени: every day, in the morning, on weekends, usually...\n• Пример: I wake up at seven o'clock every morning. I drink coffee and read the news.",
    },
    {
      id: "grammar-2",
      title: "Do / Don't: отрицание и вопросы",
      explanation:
        "Для образования отрицания и вопросов в Present Simple нужен вспомогательный глагол DO. Без него предложение неправильное.",
      tables: [
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Утверждение", "I/You/We/They + глагол", "I work every day.", "Я работаю каждый день."],
            ["Отрицание", "I/You/We/They + don't + глагол", "I don't work on Sundays.", "Я не работаю по воскресеньям."],
            ["Вопрос", "Do + I/You/We/They + глагол + ?", "Do you work every day?", "Ты работаешь каждый день?"],
            ["Краткий ответ да", "Yes, I/you/we/they do.", "Yes, I do.", "Да."],
            ["Краткий ответ нет", "No, I/you/we/they don't.", "No, I don't.", "Нет."],
          ],
        },
        {
          headers: ["Вопрос", "Пример", "Перевод"],
          rows: [
            ["What do you...?", "What do you do at weekends?", "Что ты делаешь в выходные?"],
            ["Where do you...?", "Where do you live?", "Где ты живёшь?"],
            ["When do you...?", "When do you usually wake up?", "Когда ты обычно просыпаешься?"],
            ["How often do you...?", "How often do you exercise?", "Как часто ты занимаешься спортом?"],
            ["Who do you...?", "Who do you live with?", "С кем ты живёшь?"],
            ["Why do you...?", "Why do you study English?", "Зачем ты изучаешь английский?"],
          ],
        },
      ],
      correctExamples: [
        "I don't work today.",
        "Do you work here?",
        "I don't study English.",
      ],
      incorrectExamples: [
        "I don't working today.",
        "Do you works here?",
        "I not study English.",
      ],
      ieltsHint:
        "Никогда не говори «I not...» без do/don't — это грубая ошибка. Правильно: «I don't...» В вопросах: «Do you...?» — не «You work?». Вспомогательный глагол DO обязателен!",
      taskInstruction:
        "Составь 5 вопросов с Do и ответь на них от своего лица.\n• What do you...? / Where do you...? / When do you...? / Do you...? / How often do you...?\n• Пример: Do you cook at home? — Yes, I do. I cook dinner every evening.\n• Затем напиши 3 предложения о том, что ты НЕ делаешь (с don't).",
    },
    {
      id: "grammar-3",
      title: "Наречия частотности",
      explanation:
        "Наречия частотности показывают КАК ЧАСТО происходит действие. Они всегда стоят ПЕРЕД основным глаголом, но ПОСЛЕ глагола to be.",
      tables: [
        {
          headers: ["Наречие", "% частота", "Позиция", "Пример"],
          rows: [
            ["always — всегда", "~100%", "перед глаголом", "I always wake up at 7 am."],
            ["usually — обычно", "~80%", "перед глаголом", "We usually have lunch at 1 pm."],
            ["often — часто", "~60%", "перед глаголом", "They often travel by bus."],
            ["sometimes — иногда", "~40%", "перед глаголом ИЛИ в начале", "Sometimes I cook. / I sometimes cook."],
            ["rarely / seldom — редко", "~20%", "перед глаголом", "I rarely eat fast food."],
            ["never — никогда", "0%", "перед глаголом (без don't!)", "We never drink alcohol."],
          ],
        },
      ],
      correctExamples: [
        "I always drink coffee.",
        "She is always happy.",
        "They are sometimes late.",
      ],
      incorrectExamples: [
        "I never don't eat meat.",
        "She always is happy.",
        "They sometimes are late.",
      ],
      ieltsHint:
        "В Speaking Part 1: «How often do you...?» — отвечай с наречием: «I usually... / I sometimes... / I rarely...» Одно слово-наречие делает ответ значительно богаче.",
      taskInstruction:
        "Напиши 6 предложений о своих привычках, используя разные наречия частотности.\n• Используй каждое наречие хотя бы один раз: always, usually, often, sometimes, rarely, never\n• 3 предложения с обычными глаголами, 3 предложения с to be\n• Пример: I always brush my teeth twice a day. I am sometimes late for class.",
    },
    {
      id: "grammar-4",
      title: "Время и распорядок дня",
      explanation:
        "Умение говорить о времени и распорядке дня — обязательный навык для Speaking Part 1.",
      tables: [
        {
          headers: ["Время", "Как читать", "Пример в предложении"],
          rows: [
            ["7:00", "seven o'clock", "I wake up at seven o'clock."],
            ["7:15", "quarter past seven", "I have breakfast at quarter past seven."],
            ["7:30", "half past seven", "I leave home at half past seven."],
            ["7:45", "quarter to eight", "I arrive at work at quarter to eight."],
            ["12:00", "twelve o'clock / noon", "I have lunch at noon."],
            ["18:00", "six o'clock (in the evening)", "I finish work at six in the evening."],
          ],
        },
        {
          headers: ["Предлог", "Когда использовать", "Примеры"],
          rows: [
            ["at", "точное время, праздники", "at 7 am · at noon · at midnight · at Christmas"],
            ["in", "части дня, месяцы, годы, сезоны", "in the morning · in July · in 2024 · in summer"],
            ["on", "дни недели, даты", "on Monday · on 5 March · on my birthday · on weekdays"],
          ],
        },
      ],
      ieltsHint:
        "В Speaking Part 1: «Describe your typical day.» — подготовь 5–6 предложений с разными временными маркерами и наречиями. Правильные предлоги at/in/on влияют на Grammatical Accuracy.",
      taskInstruction:
        "Напиши свой типичный распорядок дня — 6–8 предложений.\n• Present Simple + наречия частотности (always/usually/often/sometimes)\n• Точное время: at seven o'clock, at half past eight...\n• Предлоги at/in/on правильно\n• Структура: утро (wake up, breakfast) → день (work/study) → вечер (relax, sleep)",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "My name is Malika. I am a second-year student at a medical university. I usually wake up at six in the morning because my classes start at eight o'clock. I always have a light breakfast — I drink green tea and eat some fruit. I don't eat heavy food in the morning. I go to university by bus. The journey takes about thirty minutes. I study six days a week. We have lectures and practical classes every day. I often stay in the library after classes to read and prepare for exams. In the evenings, I sometimes cook dinner with my mother. We never order fast food — we always cook at home. At weekends, I usually meet friends or go for a walk in the park. I rarely watch TV, but I often listen to English podcasts. I go to bed at eleven o'clock.",
      wordCount: 130,
      taskInstruction:
        "Прочитайте текст. Найдите все глаголы в Present Simple и все наречия частотности.",
      vocabulary: [
        { word: "second-year", translation: "второкурсник" },
        { word: "medical", translation: "медицинский" },
        { word: "light", translation: "лёгкий" },
        { word: "breakfast", translation: "завтрак" },
        { word: "green tea", translation: "зелёный чай" },
        { word: "fruit", translation: "фрукты" },
        { word: "heavy", translation: "тяжёлый (о еде)" },
        { word: "journey", translation: "поездка, дорога" },
        { word: "takes", translation: "занимает (время)" },
        { word: "lecture", translation: "лекция" },
        { word: "practical class", translation: "практическое занятие" },
        { word: "stay", translation: "оставаться" },
        { word: "library", translation: "библиотека" },
        { word: "prepare", translation: "готовиться" },
        { word: "exam", translation: "экзамен" },
        { word: "order", translation: "заказывать" },
        { word: "fast food", translation: "фастфуд" },
        { word: "at weekends", translation: "в выходные" },
        { word: "meet", translation: "встречаться" },
        { word: "go for a walk", translation: "пойти на прогулку" },
        { word: "park", translation: "парк" },
        { word: "rarely", translation: "редко" },
        { word: "podcast", translation: "подкаст" },
        { word: "go to bed", translation: "ложиться спать" },
        { word: "start", translation: "начинаться" },
        { word: "because", translation: "потому что" },
        { word: "about", translation: "около, примерно" },
        { word: "after", translation: "после" },
        { word: "listen to", translation: "слушать (что-то)" },
        { word: "cook", translation: "готовить" },
      ],
      lifehack:
        "Слово «because» (потому что) объясняет причину. «I wake up early because my classes start at eight.» В IELTS Writing это простой способ добавить объяснение к своему утверждению.",
    },
    {
      id: "reading-2",
      text: "Timur and his sister Dana live together in a flat in the city centre. They are both students. Timur studies engineering and Dana studies economics. They don't go to the same university. Timur's university is in the north of the city and Dana's is in the south. They usually leave home together in the morning, but they travel in different directions. Timur goes by metro and Dana goes by bus. They don't often see each other during the day. In the evenings, they sometimes cook together. Timur always washes the dishes and Dana always cleans the flat. They never argue about housework! At weekends, they usually visit their parents. Their parents live in a quiet neighbourhood outside the city. They always enjoy those visits. Timur plays football with his father and Dana reads with her mother. They are a very close and happy family.",
      wordCount: 130,
      taskInstruction:
        "Читайте текст. Посчитайте сколько раз встречается «don't». Найдите все вопросы с Do.",
      vocabulary: [
        { word: "together", translation: "вместе" },
        { word: "both", translation: "оба/обе" },
        { word: "engineering", translation: "инженерия" },
        { word: "economics", translation: "экономика" },
        { word: "same", translation: "тот же, одинаковый" },
        { word: "north", translation: "север" },
        { word: "south", translation: "юг" },
        { word: "direction", translation: "направление" },
        { word: "metro", translation: "метро" },
        { word: "each other", translation: "друг друга" },
        { word: "during", translation: "в течение, во время" },
        { word: "wash the dishes", translation: "мыть посуду" },
        { word: "clean", translation: "убирать, чистить" },
        { word: "argue", translation: "ссориться" },
        { word: "housework", translation: "домашние дела" },
        { word: "visit", translation: "навещать, визит" },
        { word: "neighbourhood", translation: "район" },
        { word: "outside", translation: "за пределами" },
        { word: "enjoy", translation: "получать удовольствие" },
        { word: "close", translation: "близкий (о людях)" },
        { word: "play football", translation: "играть в футбол" },
        { word: "travel", translation: "ездить" },
        { word: "different", translation: "разный" },
        { word: "flat", translation: "квартира" },
        { word: "centre", translation: "центр" },
        { word: "quiet", translation: "тихий" },
        { word: "always", translation: "всегда" },
        { word: "never", translation: "никогда" },
        { word: "usually", translation: "обычно" },
        { word: "often", translation: "часто" },
      ],
      lifehack:
        "Когда описываешь двух людей, используй «They» — это экономит слова. «They live together. They study at university.» Разные местоимения (He/She/They/It) показывают грамматическое разнообразие в IELTS Writing.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction: "Опиши свой типичный будний день. Напиши 6–8 предложений.",
      requirements: [
        "Present Simple: wake up, eat, go, study, come back, cook, sleep...",
        "Минимум 3 наречия частотности (always / usually / often / sometimes / never)",
        "Точное время: at seven o'clock / at half past eight / at noon",
        "Предлоги: in the morning / in the evening / at weekends / on Mondays",
        "1 отрицание с don't: I don't... (например: I don't watch TV in the morning.)",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Ответь на вопросы полными предложениями (6–8 предложений всего).",
      structure: [
        "What do you usually do in the evenings?",
        "Do you cook at home? How often?",
        "Where do you go at weekends?",
        "Do you exercise? What do you do?",
        "What do you never do? (используй: I never...)",
      ],
      requirements: [
        "полные предложения",
        "Present Simple",
        "наречия частотности",
        "предлоги времени",
      ],
    },
  ],

  completedTopics: [
    "Grammar: Present Simple · Do/Don't · Наречия частотности · Время и предлоги",
    "2 текста для чтения (130 слов) + 60 слов с переводом",
    "2 Writing Tasks — рутина и ответы на вопросы (6–8 предложений)",
  ],
};

export default a3;
