import type { Lesson } from "@/types/lesson";

const a9: Lesson = {
  id: "a9",
  level: "A9",
  band: "A",
  number: 9,
  title: "Going To · Will · Планы и мечты",
  subtitle: "Elementary",
  grammarTopics: [
    "Going to — планы и намерения",
    "Will — спонтанные решения и предсказания",
    "Going to vs Will",
    "Маркеры будущего времени",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (80–90 слов)",
  prevLesson: "a8",
  nextLesson: "a10",

  grammar: [
    {
      id: "grammar-1",
      title: "Going to — планы и намерения",
      explanation:
        "Конструкция be going to используется, когда у вас уже есть план или вы видите очевидные признаки того, что что-то произойдёт.",
      tables: [
        {
          headers: ["Лицо", "Структура", "Пример"],
          rows: [
            ["I", "am going to + глагол", "I am going to visit Paris next year."],
            ["He / She / It", "is going to + глагол", "She is going to study medicine."],
            ["We / You / They", "are going to + глагол", "They are going to travel to Japan."],
            ["Отрицание", "am/is/are + NOT going to", "I am not going to eat fast food."],
            ["Вопрос", "Am/Is/Are + ... going to?", "Are you going to join the class?"],
          ],
        },
      ],
      correctExamples: [
        "I am going to travel next summer.",
        "She is going to study medicine.",
        "Are you going to join the class?",
      ],
      incorrectExamples: [
        "I going to travel next summer.",
        "She going to study medicine.",
        "You are going to join the class?",
      ],
      ieltsHint:
        "В IELTS Speaking Part 2 вас часто просят рассказать о планах. Используйте going to: «I'm going to improve my English because...» Сокращения I'm going to, She's going to уместны в устной речи, но в Writing пишите полную форму!",
      taskInstruction:
        "Составьте предложения с going to:\n• Напишите 3 своих реальных плана на этот год используя: I am going to...\n• Составьте 2 вопроса другу: Are you going to...?\n• Напишите 1 отрицание: I am not going to... (что вы НЕ планируете)",
    },
    {
      id: "grammar-2",
      title: "Will — спонтанные решения и предсказания",
      explanation:
        "Will используют для спонтанных решений (принятых в момент речи), предсказаний и обещаний — без заранее составленного плана.",
      tables: [
        {
          headers: ["Тип", "Структура", "Пример"],
          rows: [
            ["Спонтанное решение", "will + глагол", "I'll answer the phone! (звонит телефон)"],
            ["Предсказание", "will + глагол", "I think robots will replace many jobs."],
            ["Обещание", "will + глагол", "I will always support you."],
            ["Отрицание", "will not / won't", "She won't be late again."],
            ["Вопрос", "Will + subject + глагол?", "Will you help me with this task?"],
          ],
        },
      ],
      correctExamples: [
        "I'll answer the phone!",
        "I think robots will replace many jobs.",
        "She won't be late again.",
      ],
      incorrectExamples: [
        "Look at those clouds. It is going to raining.",
        "I will to answer the phone.",
        "She won't to be late.",
      ],
      ieltsHint:
        "В IELTS Writing Task 2 используйте will для предсказаний о будущем: «Technology will transform education in the coming decades.»",
      taskInstruction:
        "Going to или Will? Выбери правильную форму:\n• She _____ (visit) her grandmother next weekend. (она уже купила билет)\n• Oh no, the glass is falling! It _____ (break)!\n• I _____ (not eat) meat anymore. (новое решение прямо сейчас)\n• In 2050, electric cars _____ (be) everywhere. (предсказание)\n• We _____ (move) to a new house in June. (давний план)",
    },
    {
      id: "grammar-3",
      title: "Going to vs Will — когда что использовать",
      explanation:
        "Это одна из самых частых ошибок студентов. Ключевой вопрос: «Я это решил раньше или только что?» Раньше = going to. Только что = will.",
      tables: [
        {
          headers: ["Ситуация", "Going to", "Will"],
          rows: [
            ["Заранее спланированное", "I'm going to see the doctor tomorrow. ✔", "❌ не используем"],
            ["Спонтанное решение", "❌ не используем", "I'll get the door! (стучат) ✔"],
            ["Очевидное будущее (факты)", "It's going to snow — look at the sky! ✔", "❌ (это видимый признак)"],
            ["Предсказание без признаков", "❌ не используем", "Scientists will find a cure one day. ✔"],
            ["Обещание", "I'm going to be on time. ✔", "I will be on time. ✔ (оба варианта)"],
          ],
        },
        {
          headers: ["Маркеры Going to", "Маркеры Will"],
          rows: [
            ["next week / month / year", "I think... / I believe..."],
            ["soon, in June, tomorrow", "probably, certainly, definitely"],
            ["I've already bought... / I've decided...", "I'm sure... / Maybe..."],
          ],
        },
      ],
      correctExamples: [
        "I am going to travel to Spain next month. (уже куплены билеты)",
        "I'll open the window. (решил прямо сейчас)",
        "I think prices will rise next year.",
      ],
      incorrectExamples: [
        "I will travel to Spain next month. (уже куплены билеты)",
        "I am going to open the window. (решил прямо сейчас)",
      ],
      ieltsHint:
        "В IELTS Speaking Part 3: используйте оба времени — going to для личных планов, will для общих предсказаний об обществе или технологиях.",
      taskInstruction:
        "Переведите на английский, используя going to или will:\n• Я собираюсь изучать программирование в следующем году. (давний план)\n• Подожди, я открою окно. (решение прямо сейчас)\n• По-моему, в будущем люди будут жить на Марсе.\n• Она уже купила билеты — она собирается лететь в Лондон.\n• Я думаю, это задание будет нелёгким.",
    },
    {
      id: "grammar-4",
      title: "Маркеры будущего времени",
      explanation:
        "Маркеры будущего помогают правильно выбрать форму и делают речь более точной.",
      tables: [
        {
          headers: ["Выражение", "Пример", "Перевод"],
          rows: [
            ["next + время", "next week / next summer", "на следующей неделе / следующим летом"],
            ["in + период", "in two days / in 2030", "через два дня / в 2030 году"],
            ["tomorrow / the day after tomorrow", "I'll call you tomorrow.", "завтра / послезавтра"],
            ["soon / very soon", "She's going to finish soon.", "скоро / очень скоро"],
            ["eventually / one day", "One day, I will speak perfect English.", "в конце концов / однажды"],
            ["by + время", "I'll finish by Friday.", "к пятнице (не позже чем)"],
            ["in the future / in the near future", "In the future, cities will be smarter.", "в будущем / в ближайшем будущем"],
          ],
        },
      ],
      correctExamples: [
        "I am going to visit my friend next week.",
        "In the future, cities will be smarter.",
        "I'll finish by Friday.",
      ],
      incorrectExamples: [
        "I am going to visit my friend at next week.",
        "At the future, cities will be smarter.",
      ],
      ieltsHint:
        "В IELTS Writing всегда добавляйте маркер времени к будущему: не просто «will change», а «will change significantly in the next decade». Частая ошибка: «at next week» — предлог AT не нужен! Next week, next month, next year — без предлога.",
      taskInstruction:
        "Составьте предложения с маркерами будущего:\n• Используйте 5 разных маркеров (next..., in..., tomorrow, soon, by...)\n• Каждое предложение — о вашей реальной жизни или мечтах\n• Чередуйте: 3 предложения с going to, 2 с will",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "My name is Sofia, and I have big plans for the future. Next year, I am going to visit Japan. I have already booked my flight and I cannot wait! I am also going to learn basic Japanese before the trip — I've already downloaded a language app. My friend Ana is coming with me. We are going to stay in a traditional Japanese inn and try local food like sushi and ramen. I think Japanese culture will surprise us in many ways. After Japan, we are going to save money for a bigger adventure. In five years, I am going to travel to at least ten countries. I believe that travelling will make me a better person and will open my mind to new ideas. Oh, I almost forgot — the taxi is here! I'll grab my bag and go. See you soon!",
      wordCount: 130,
      taskInstruction:
        "Прочитайте текст. Подчеркните все конструкции going to и will. Определите тип каждой (план, решение, предсказание). Найдите минимум 5 примеров.",
      vocabulary: [
        { word: "travel", translation: "путешествовать" },
        { word: "dream", translation: "мечта" },
        { word: "book a flight", translation: "забронировать билет" },
        { word: "traditional", translation: "традиционный" },
        { word: "adventure", translation: "приключение" },
        { word: "culture", translation: "культура" },
        { word: "language app", translation: "языковое приложение" },
        { word: "local food", translation: "местная еда" },
        { word: "save money", translation: "копить деньги" },
        { word: "open one's mind", translation: "расширить кругозор" },
        { word: "inn", translation: "постоялый двор / гостиница" },
        { word: "surprise", translation: "удивить" },
        { word: "at least", translation: "по крайней мере" },
        { word: "grab", translation: "схватить" },
        { word: "almost forgot", translation: "почти забыл(а)" },
        { word: "basic", translation: "базовый" },
        { word: "download", translation: "скачать" },
        { word: "wait", translation: "ждать" },
        { word: "better", translation: "лучший" },
        { word: "person", translation: "человек / личность" },
        { word: "ideas", translation: "идеи" },
        { word: "ways", translation: "способы / пути" },
        { word: "coming", translation: "приезжающий" },
        { word: "stay", translation: "останавливаться" },
        { word: "try", translation: "попробовать" },
        { word: "forgot", translation: "забыл(а)" },
        { word: "future", translation: "будущее" },
        { word: "near future", translation: "ближайшее будущее" },
        { word: "trip", translation: "поездка" },
        { word: "flight", translation: "рейс / полёт" },
      ],
      lifehack:
        "В тексте есть и going to (запланировано), и will (предсказание и спонтанное решение). Найдите минимум 5 примеров и определите тип каждого!",
    },
    {
      id: "reading-2",
      text: "How will people travel in the future? Many experts believe that travel is going to change dramatically over the next 50 years. First, electric planes are going to replace most short-distance flights. Airlines have already started developing this technology, and the first electric passenger planes will probably appear by 2035. This will reduce carbon emissions significantly. Second, high-speed trains are going to connect major cities around the world. Japan and France are already planning new lines, and China is going to build the world's longest high-speed network by 2040. What about space travel? Some companies are going to offer space tourism in the next decade. It will be very expensive at first, but prices will eventually drop. One thing is certain: travel will never be the same. Future generations are going to explore the world — and beyond — in ways we cannot even imagine today.",
      wordCount: 140,
      taskInstruction:
        "Прочитайте текст. Найдите и выпишите все предсказания о будущем. Какие из них используют will, какие — going to?",
      vocabulary: [
        { word: "expert", translation: "эксперт" },
        { word: "dramatically", translation: "кардинально, резко" },
        { word: "replace", translation: "заменить" },
        { word: "short-distance", translation: "на короткое расстояние" },
        { word: "passenger", translation: "пассажир" },
        { word: "appear", translation: "появиться" },
        { word: "reduce", translation: "сократить" },
        { word: "carbon emissions", translation: "выбросы углерода" },
        { word: "significantly", translation: "значительно" },
        { word: "high-speed", translation: "высокоскоростной" },
        { word: "connect", translation: "соединять" },
        { word: "major cities", translation: "крупные города" },
        { word: "network", translation: "сеть" },
        { word: "space tourism", translation: "космический туризм" },
        { word: "decade", translation: "десятилетие" },
        { word: "expensive", translation: "дорогой" },
        { word: "eventually", translation: "в конечном счёте" },
        { word: "drop", translation: "упасть (о цене)" },
        { word: "certain", translation: "определённый, несомненный" },
        { word: "generation", translation: "поколение" },
        { word: "explore", translation: "исследовать" },
        { word: "beyond", translation: "за пределами" },
        { word: "imagine", translation: "представить" },
        { word: "develop", translation: "разрабатывать" },
        { word: "technology", translation: "технология" },
        { word: "airline", translation: "авиакомпания" },
        { word: "plan", translation: "планировать" },
        { word: "longest", translation: "самый длинный" },
        { word: "offer", translation: "предлагать" },
        { word: "world", translation: "мир" },
      ],
      lifehack:
        "Обратите внимание: when + будущее время → используется Present Simple: «when prices drop» (не «will drop»). Это важное правило для IELTS Writing!",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Напишите 2 абзаца (80–90 слов) о ваших планах на следующий год.",
      structure: [
        "Абзац 1: Что вы собираетесь делать? (2–3 конкретных плана с going to). Начните: «Next year, I am going to...»",
        "Абзац 2: Почему эти планы важны? Что изменится в вашей жизни? (will). Начните: «I believe these plans will...»",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Минимум 2 маркера времени (next year, in... months, soon...)",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напишите 2 абзаца (80–90 слов) на тему: «Как изменятся путешествия в будущем?»",
      structure: [
        "Абзац 1: Как технологии изменят путешествия? (will + предсказания)",
        "Абзац 2: Ваше личное мнение о будущем путешествий (I think / I believe + will)",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Используйте: in the future, by 2040, eventually, one day",
        "Структура: Topic sentence → 2–3 идеи → Concluding sentence",
      ],
    },
  ],

  completedTopics: [
    "Going to для планов и намерений",
    "Will для спонтанных решений и предсказаний",
    "2 текста о путешествиях и будущем + 60 новых слов",
  ],
};

export default a9;
