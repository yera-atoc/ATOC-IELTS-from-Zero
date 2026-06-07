import type { Lesson } from "@/types/lesson";

const a6: Lesson = {
  id: "a6",
  level: "A6",
  band: "A",
  number: 6,
  title: "Present Continuous · Simple vs Continuous · Город",
  subtitle: "Elementary",
  grammarTopics: [
    "Present Continuous (am/is/are + -ing)",
    "Глаголы состояния (Stative Verbs)",
    "Present Simple vs Present Continuous",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (70–80 слов)",
  prevLesson: "a5",
  nextLesson: "a7",

  grammar: [
    {
      id: "grammar-1",
      title: "Present Continuous: am / is / are + -ing",
      explanation:
        "Present Continuous описывает действие, которое происходит прямо сейчас — в момент речи. По-русски: «я сейчас делаю», «она сейчас идёт», «они сейчас работают».",
      tables: [
        {
          headers: ["Местоимение", "Структура", "Пример", "Перевод"],
          rows: [
            ["I", "am + глагол-ing", "I am working now.", "Я сейчас работаю."],
            ["You", "are + глагол-ing", "You are reading this text.", "Ты сейчас читаешь этот текст."],
            ["He / She / It", "is + глагол-ing", "She is talking on the phone.", "Она сейчас разговаривает по телефону."],
            ["We / They", "are + глагол-ing", "They are waiting for the bus.", "Они ждут автобуса."],
          ],
        },
        {
          headers: ["Тип глагола", "Правило", "Примеры"],
          rows: [
            ["Большинство глаголов", "+ ing", "work → working · read → reading · go → going"],
            ["Глаголы на согласную + e", "убрать e + ing", "write → writing · make → making · have → having"],
            ["Короткие глаголы (CVC)", "удвоить согл. + ing", "run → running · sit → sitting · swim → swimming"],
            ["Глаголы на -ie", "ie → y + ing", "lie → lying · die → dying · tie → tying"],
            ["Глаголы на -l (British)", "удвоить l + ing", "travel → travelling · cancel → cancelling"],
          ],
        },
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Отрицание", "am/is/are + not + глагол-ing", "I am not sleeping. / She isn't working.", "Я не сплю. / Она не работает."],
            ["Вопрос", "Am/Is/Are + подлежащее + глагол-ing?", "Are you listening? / Is he coming?", "Ты слушаешь? / Он идёт?"],
            ["Краткий ответ да", "Yes, I am. / Yes, she is.", "Yes, I am.", "Да."],
            ["Краткий ответ нет", "No, I'm not. / No, she isn't.", "No, she isn't.", "Нет."],
          ],
        },
        {
          headers: ["Маркер", "Перевод", "Пример"],
          rows: [
            ["now / right now", "сейчас / прямо сейчас", "I am studying English right now."],
            ["at the moment", "в данный момент", "She is talking to her boss at the moment."],
            ["currently", "в настоящее время", "He is currently working on a new project."],
            ["today", "сегодня", "They are visiting the museum today."],
            ["this week / this year", "на этой неделе / в этом году", "We are staying at a hotel this week."],
            ["Look! / Listen!", "Смотри! / Слушай!", "Look! The bus is coming!"],
          ],
        },
      ],
      correctExamples: [
        "She is working now.",
        "They are going to school.",
        "I am not sleeping.",
      ],
      incorrectExamples: [
        "She is work now.",
        "They are go to school.",
        "I am not to sleep.",
      ],
      ieltsHint:
        "В Speaking Part 1: «What are you doing these days?» «What are you studying at the moment?» — это Present Continuous для текущего периода: «I am studying for my IELTS exam.» «I am working at a company and taking English classes.»",
      taskInstruction:
        "Посмотри вокруг и напиши 6 предложений о том, что происходит прямо сейчас.\n• Используй разные местоимения: I am... / He is... / She is... / They are...\n• Добавь маркеры: right now / at the moment / currently\n• Пример: I am sitting at my desk right now. My phone is charging next to me. Outside, cars are moving slowly in traffic.",
    },
    {
      id: "grammar-2",
      title: "Глаголы состояния (Stative Verbs)",
      explanation:
        "Некоторые глаголы НЕ используются в Present Continuous — их называют «stative verbs» (глаголы состояния). Они описывают состояние, а не действие. Это одна из частых ошибок.",
      tables: [
        {
          headers: ["Категория", "Глаголы", "Неверно", "Верно"],
          rows: [
            ["Чувства и эмоции", "love, hate, like, want, need, prefer", "I am loving this! ❌", "I love this! ✔"],
            ["Мышление", "know, think (=believe), understand, believe, remember", "She is knowing the answer. ❌", "She knows the answer. ✔"],
            ["Чувства (физич.)", "see, hear, smell, taste, feel", "I am seeing the problem. ❌", "I see the problem. ✔"],
            ["Владение", "have (=possess), own, belong", "He is having a car. ❌", "He has a car. ✔"],
            ["Существование", "be, exist, contain, include", "This is containing sugar. ❌", "This contains sugar. ✔"],
          ],
        },
        {
          headers: ["Глагол", "Состояние (Simple)", "Действие (Continuous)"],
          rows: [
            ["THINK", "I think it's a good idea. (= I believe)", "I am thinking about the problem. (= работаю над этим)"],
            ["HAVE", "She has a car. (= владеет)", "She is having dinner. (= обедает сейчас)"],
            ["SEE", "I see a bird on the tree. (= вижу)", "I am seeing a doctor today. (= у меня приём)"],
            ["FEEL", "I feel tired. (= чувствую себя)", "The doctor is feeling his pulse. (= щупает пульс)"],
          ],
        },
      ],
      correctExamples: [
        "I know the answer.",
        "She wants a coffee.",
        "They need help.",
      ],
      incorrectExamples: [
        "I am knowing the answer.",
        "She is wanting a coffee.",
        "They are needing help.",
      ],
      ieltsHint:
        "В IELTS Writing глаголы состояния — частая ошибка. «The graph shows...» (не is showing), «The data suggests...» (не is suggesting), «The report indicates...» (не is indicating). В академическом языке эти глаголы почти всегда в Present Simple.",
      taskInstruction:
        "Исправь ошибки в предложениях (если есть).\n• 1. She is knowing three languages.\n• 2. He is running in the park.\n• 3. I am needing help.\n• 4. They are watching a film.\n• 5. We are understanding the lesson.\n• 6. She is having breakfast.\n• 7. The city is belonging to the south region.\n• 8. He is thinking about you.",
    },
    {
      id: "grammar-3",
      title: "Present Simple vs Present Continuous",
      explanation:
        "Это один из самых важных контрастов в английской грамматике. Правильный выбор времени показывает уровень языка.",
      tables: [
        {
          headers: ["Критерий", "Present Simple", "Present Continuous"],
          rows: [
            ["Когда использовать", "Регулярные действия / привычки · Факты и постоянные ситуации · Расписания · Общие истины", "Действие прямо сейчас · Временные ситуации · Планы на ближайшее будущее · Изменения и тенденции"],
            ["Маркеры", "always, usually, often, sometimes · every day, on Mondays, twice a week · never, rarely", "now, right now, at the moment · currently, today, this week · Look! Listen! these days"],
          ],
        },
        {
          headers: ["Present Simple", "Значение", "Present Continuous", "Значение"],
          rows: [
            ["I walk to work.", "обычно хожу пешком", "I am walking to work.", "сейчас иду пешком"],
            ["She lives in Almaty.", "постоянно живёт", "She is living in Almaty.", "временно живёт"],
            ["He studies medicine.", "учится на врача", "He is studying for an exam.", "сейчас готовится"],
            ["They build houses.", "строят дома (работа)", "They are building a new road.", "сейчас строят"],
            ["The city grows.", "растёт (факт/тенденция)", "The city is growing fast.", "растёт в данный период"],
          ],
        },
      ],
      correctExamples: [
        "I usually go to work by bus.",
        "Look! She is walking to the door!",
        "He knows French.",
      ],
      incorrectExamples: [
        "I am usually going to work by bus.",
        "Look! She walks to the door!",
        "He is knowing French.",
      ],
      ieltsHint:
        "В IELTS Writing Task 1 при описании трендов: «The number of cars is increasing.» «The population is growing rapidly.» (Continuous — тенденция сейчас). Но: «Cars produce pollution.» (Simple — постоянный факт). Эта разница влияет на Band.",
      taskInstruction:
        "Поставь глагол в нужную форму: Present Simple или Present Continuous.\n• 1. She usually (take) the metro, but today she (walk) because it's sunny.\n• 2. I (not understand) this word. Can you explain it?\n• 3. Look! The bus (come)! We need to hurry.\n• 4. My city (grow) very fast. New buildings (appear) everywhere.\n• 5. He (work) at home this week because his office (repair).",
    },
    {
      id: "grammar-4",
      title: "Лексика: Город и транспорт",
      explanation:
        "Лексика по теме «Город и транспорт» — обязательная для IELTS. Она встречается в Speaking Part 1 («Describe your city»), Writing Task 1 (карты городов) и Reading.",
      tables: [
        {
          headers: ["Место", "Перевод", "Место", "Перевод"],
          rows: [
            ["city centre", "центр города", "park", "парк"],
            ["square", "площадь", "street", "улица"],
            ["avenue", "проспект", "boulevard", "бульвар"],
            ["crossroads", "перекрёсток", "shopping mall", "торговый центр"],
            ["market", "рынок, базар", "pharmacy", "аптека"],
            ["police station", "полицейский участок", "fire station", "пожарная станция"],
            ["hospital", "больница", "mosque", "мечеть"],
            ["museum", "музей", "theatre", "театр"],
            ["stadium", "стадион", "airport", "аэропорт"],
            ["suburb", "пригород", "district", "район"],
          ],
        },
        {
          headers: ["Транспорт", "Предлог", "Пример"],
          rows: [
            ["bus", "by bus", "I go to work by bus. / I take the bus."],
            ["metro / underground", "by metro", "She travels by metro every day."],
            ["taxi", "by taxi / in a taxi", "He took a taxi to the airport."],
            ["car", "by car / in a car", "They drive to work by car."],
            ["bicycle / bike", "by bike", "I ride my bike at weekends."],
            ["train", "by train", "We travelled to Astana by train."],
            ["plane / aircraft", "by plane", "She flew to London by plane."],
            ["on foot", "on foot (без by)", "I usually walk to university on foot."],
          ],
        },
        {
          headers: ["Выражение", "Перевод", "Пример"],
          rows: [
            ["is growing", "растёт", "The city is growing very rapidly."],
            ["is developing", "развивается", "The transport system is developing."],
            ["is expanding", "расширяется", "The metro network is expanding."],
            ["is becoming more...", "становится более...", "The city is becoming more modern."],
            ["is changing", "меняется", "The infrastructure is changing fast."],
            ["is attracting", "привлекает", "The city is attracting more tourists."],
          ],
        },
      ],
      correctExamples: [
        "I usually go to work by bus.",
        "She travels by metro every day.",
        "The city is becoming more modern.",
      ],
      incorrectExamples: [
        "I go to work on bus.",
        "She travels on metro every day.",
        "The city is more modern becoming.",
      ],
      ieltsHint:
        "В Speaking Part 1 вас обязательно спросят: «Tell me about your city.» Используй оба времени: «Almaty is a large city in the south of Kazakhstan.» (Simple — факт) «It is growing rapidly and the infrastructure is changing.» (Continuous — тенденция).",
      taskInstruction:
        "Напиши 6 предложений о своём городе, используя оба времени.\n• 2 предложения с Present Simple: постоянные факты о городе\n• 2 предложения с Present Continuous: что сейчас происходит / меняется\n• 2 предложения о транспорте: как ты добираешься / что используют люди\n• Пример: Almaty is the largest city in Kazakhstan. (Simple) / New metro stations are being built. (Continuous)",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Almaty is the largest city in Kazakhstan and one of the most dynamic cities in Central Asia. The city is changing rapidly. Dozens of new buildings are appearing in different parts of the city, and several new roads are being constructed to reduce traffic congestion. The metro system is also expanding - two new stations are opening next year. At the moment, many residents are using the bus rapid transit system, which operates along the main avenues. Traditionally, people in Almaty rely heavily on personal cars, and traffic jams are a daily problem in the city centre during rush hours. However, the city government is currently working on solutions. Officials say that cycling infrastructure is developing and the number of bicycle lanes is growing. Many young people are already switching to bikes and electric scooters. On weekends, thousands of residents visit the parks and walk along the pedestrian zones in the city centre. Almaty is becoming greener and more comfortable every year.",
      wordCount: 145,
      taskInstruction:
        "Прочитайте текст. Найдите: (1) все глаголы в Present Continuous; (2) все глаголы в Present Simple. Подчеркните их разными цветами.",
      vocabulary: [
        { word: "dynamic", translation: "динамичный, активный" },
        { word: "rapidly", translation: "быстро" },
        { word: "dozens of", translation: "десятки" },
        { word: "appear", translation: "появляться" },
        { word: "construct", translation: "строить, возводить" },
        { word: "reduce", translation: "сокращать, уменьшать" },
        { word: "traffic congestion", translation: "дорожные пробки" },
        { word: "expand", translation: "расширяться" },
        { word: "resident", translation: "житель" },
        { word: "bus rapid transit", translation: "скоростной автобус" },
        { word: "operate", translation: "работать, функционировать" },
        { word: "avenue", translation: "проспект" },
        { word: "rely on", translation: "полагаться на" },
        { word: "heavily", translation: "в значительной мере" },
        { word: "traffic jam", translation: "пробка" },
        { word: "rush hour", translation: "час пик" },
        { word: "currently", translation: "в настоящее время" },
        { word: "official", translation: "чиновник" },
        { word: "cycling infrastructure", translation: "велосипедная инфраструктура" },
        { word: "bicycle lane", translation: "велосипедная дорожка" },
        { word: "switch to", translation: "переключиться на" },
        { word: "electric scooter", translation: "электросамокат" },
        { word: "pedestrian zone", translation: "пешеходная зона" },
        { word: "greener", translation: "более зелёный" },
        { word: "comfortable", translation: "комфортный" },
        { word: "solution", translation: "решение" },
        { word: "personal car", translation: "личный автомобиль" },
        { word: "government", translation: "правительство, администрация" },
        { word: "traditional", translation: "традиционный" },
        { word: "infrastructure", translation: "инфраструктура" },
      ],
      lifehack:
        "«is being built / are being constructed» — это Present Continuous Passive (страдательный залог). Пока запомни как единицу: это значит «строится» / «возводится» без указания кем. В уроке A16 разберём Passive подробно.",
    },
    {
      id: "reading-2",
      text: "It is seven-thirty in the morning and the city is already awake. Thousands of people are commuting to work. On the main road near my window, cars are moving slowly because of a traffic jam. Two buses are waiting at the bus stop, and a group of students are running to catch the second one. In the metro, it is very crowded. People are standing close together and some are reading on their phones. An elderly man is sleeping in his seat. At the crossroads below, a delivery man is cycling with a large bag on his back. Most people in this city travel to work by public transport. The metro carries over three hundred thousand passengers every day. The buses run every five to ten minutes during peak hours. This morning, however, many people are walking because there is a problem with the metro service. The city never completely stops - it is always moving, always changing.",
      wordCount: 145,
      taskInstruction:
        "Читайте текст. Обратите внимание на переход между временами — почему автор использует то Simple, то Continuous?",
      vocabulary: [
        { word: "awake", translation: "не спящий, проснувшийся" },
        { word: "commute", translation: "ездить на работу" },
        { word: "main road", translation: "главная дорога" },
        { word: "traffic jam", translation: "пробка" },
        { word: "crowded", translation: "переполненный, людный" },
        { word: "stand", translation: "стоять" },
        { word: "elderly", translation: "пожилой" },
        { word: "crossroads", translation: "перекрёсток" },
        { word: "delivery man", translation: "курьер" },
        { word: "cycle", translation: "ехать на велосипеде" },
        { word: "public transport", translation: "общественный транспорт" },
        { word: "carry", translation: "перевозить" },
        { word: "passenger", translation: "пассажир" },
        { word: "peak hours", translation: "часы пик" },
        { word: "however", translation: "однако, тем не менее" },
        { word: "service", translation: "служба, услуга, сервис" },
        { word: "completely", translation: "полностью" },
        { word: "always moving", translation: "всегда в движении" },
        { word: "catch", translation: "успеть (на транспорт)" },
        { word: "close together", translation: "плотно, близко друг к другу" },
        { word: "back", translation: "спина" },
        { word: "seat", translation: "сиденье, место" },
        { word: "run every 5 minutes", translation: "ходить каждые 5 минут" },
        { word: "problem", translation: "проблема" },
        { word: "below", translation: "ниже, внизу" },
        { word: "group", translation: "группа" },
        { word: "second", translation: "второй" },
        { word: "near", translation: "рядом, около" },
        { word: "morning", translation: "утро" },
        { word: "already", translation: "уже" },
      ],
      lifehack:
        "«however» (однако, тем не менее) — это discourse marker, который вводит контраст. Это одно из ключевых слов в IELTS Writing: «The metro is efficient. However, it is very crowded during rush hours.» Запомни его сразу — Band 6+.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши своё утро по дороге в университет или на работу. 2 абзаца, 70–80 слов.",
      structure: [
        "Абзац 1 (35–40 слов): что ты обычно делаешь по утрам (Present Simple + маркеры: usually/always/every day)",
        "Абзац 2 (35–40 слов): что происходит прямо сейчас / сегодня утром (Present Continuous + маркеры: now/at the moment/today)",
      ],
      requirements: [
        "Включи транспорт: I take the bus / I travel by metro / I walk...",
        "Добавь описание города утром: people are hurrying / traffic is building up...",
        "2 абзаца, 70–80 слов",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Опиши свой город: что в нём есть и как он меняется. 2 абзаца, 70–80 слов.",
      structure: [
        "Абзац 1 (35–40 слов): постоянные факты о городе (Present Simple) — где находится, какой он, что в нём есть, как люди добираются",
        "Абзац 2 (35–40 слов): что сейчас меняется (Present Continuous) — что строится / развивается / улучшается / привлекает людей",
      ],
      requirements: [
        "Используй: is growing / is developing / is becoming / are building / are moving",
        "2 абзаца, 70–80 слов",
      ],
    },
  ],

  completedTopics: [
    "Grammar: Present Continuous · Stative Verbs · Simple vs Continuous · Город и транспорт",
    "2 текста для чтения (~145 слов) + 60 слов с переводом",
    "2 Writing Tasks — 2 абзаца каждый (70–80 слов)",
  ],
};

export default a6;
