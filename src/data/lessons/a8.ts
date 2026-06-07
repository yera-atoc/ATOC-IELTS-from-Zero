import type { Lesson } from "@/types/lesson";

const a8: Lesson = {
  id: "a8",
  level: "A8",
  band: "A",
  number: 8,
  title: "Past Simple · Неправильные глаголы · Еда и здоровье",
  subtitle: "Elementary",
  grammarTopics: [
    "Неправильные глаголы (25 ключевых)",
    "Did / Didn't с неправильными глаголами",
    "Wh-вопросы в Past Simple",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (80–90 слов)",
  prevLesson: "a7",
  nextLesson: "a9",

  grammar: [
    {
      id: "grammar-1",
      title: "Неправильные глаголы — список и формы",
      explanation:
        "Неправильные глаголы не принимают -ed в Past Simple. Их вторую форму (V2) нужно заучивать наизусть. Ниже — 25 самых частотных глаголов для уровня A и темы «Еда и здоровье».",
      tables: [
        {
          headers: ["Инфинитив (V1)", "Past Simple (V2)", "Перевод", "Пример"],
          rows: [
            ["eat", "ate", "есть / съел", "She ate a salad for lunch."],
            ["drink", "drank", "пить / выпил", "He drank two glasses of water."],
            ["buy", "bought", "покупать / купил", "They bought fresh vegetables."],
            ["make", "made", "делать / сделал", "I made soup yesterday."],
            ["take", "took", "брать / взял", "She took her medicine on time."],
            ["feel", "felt", "чувствовать / почувствовал", "He felt better after rest."],
            ["get", "got", "получать / получил", "She got a cold last week."],
            ["go", "went", "идти / пошёл", "We went to the market."],
            ["come", "came", "приходить / пришёл", "The doctor came quickly."],
            ["have", "had", "иметь / имел", "I had a headache yesterday."],
            ["give", "gave", "давать / дал", "The nurse gave him a pill."],
            ["see", "saw", "видеть / увидел", "I saw a dietitian last month."],
            ["know", "knew", "знать / знал", "She knew the recipe by heart."],
            ["think", "thought", "думать / думал", "He thought it was healthy."],
            ["sleep", "slept", "спать / спал", "She slept well after the meal."],
          ],
        },
      ],
      correctExamples: [
        "Yesterday I ate a big breakfast.",
        "She drank herbal tea instead of coffee.",
        "They went to the market and bought fresh fruit.",
      ],
      incorrectExamples: [
        "Yesterday I eated a big breakfast.",
        "She drinked too much coffee last week.",
        "They goed to the market.",
      ],
      ieltsHint:
        "Учи неправильные глаголы тройками: go - went - gone. Для IELTS Writing особенно важны: eat→ate, drink→drank, make→made, take→took, feel→felt.",
      taskInstruction:
        "Напиши Past Simple от неправильных глаголов:\n• eat → _______ drink → _______ buy → _______ make → _______\n• feel → _______ get → _______ go → _______ have → _______\n• give → _______ see → _______ know → _______ sleep → _______",
    },
    {
      id: "grammar-2",
      title: "Группы неправильных глаголов по паттерну",
      explanation:
        "Хорошая новость: многие неправильные глаголы меняются по одному паттерну. Выучи паттерн — и запомнишь сразу несколько глаголов.",
      tables: [
        {
          headers: ["Паттерн", "V1 → V2", "Примеры"],
          rows: [
            ["i → a → u", "sing→sang, drink→drank", "begin→began, swim→swam, run→ran"],
            ["ee → e", "feel→felt, keep→kept", "sleep→slept, meet→met, leave→left"],
            ["uy/aw → ought", "buy→bought, think→thought", "bring→brought, catch→caught"],
            ["Без изменений", "cut→cut, put→put", "hurt→hurt, hit→hit, cost→cost"],
            ["Полное изменение", "go→went, be→was/were", "have→had, make→made, eat→ate"],
          ],
        },
      ],
      correctExamples: [
        "She bought organic food.",
        "He thought it was healthy.",
        "They felt sick after lunch.",
      ],
      incorrectExamples: [
        "She buyed organic food.",
        "He thinked it was healthy.",
        "They feeled sick after lunch.",
      ],
      ieltsHint:
        "В IELTS Writing Task 2 про здоровье часто нужны: «Research showed...», «Studies found...», «Experts thought...». Все они — неправильные глаголы!",
      taskInstruction:
        "Определи паттерн и заполни пропуски:\n• bring → _______ (паттерн: uy/aw→ought) catch → _______ (тот же паттерн)\n• keep → _______ (паттерн: ee→e) leave → _______ (тот же паттерн)\n• begin → _______ (паттерн: i→a→u) swim → _______ (тот же паттерн)",
    },
    {
      id: "grammar-3",
      title: "Did / Didn't с неправильными глаголами",
      explanation:
        "Важнейшее правило: в вопросах и отрицаниях с did / didn't основной глагол всегда стоит в базовой форме V1, даже если это неправильный глагол.",
      tables: [
        {
          headers: ["Тип", "Структура", "Пример с нерег. глаголом"],
          rows: [
            ["Утверждение (+)", "Subject + V2", "She ate a healthy dinner."],
            ["Отрицание (−)", "Subject + didn't + V1", "She didn't eat junk food."],
            ["Общий вопрос", "Did + Subject + V1 + ?", "Did she eat vegetables?"],
            ["Специальный вопрос", "Wh- + did + Subject + V1?", "What did she eat for dinner?"],
            ["Краткий ответ (+)", "Yes, + subject + did.", "Yes, she did."],
            ["Краткий ответ (−)", "No, + subject + didn't.", "No, she didn't."],
          ],
        },
      ],
      correctExamples: [
        "He didn't eat breakfast today.",
        "Did she go to the doctor?",
        "What did you eat for lunch?",
      ],
      incorrectExamples: [
        "He didn't ate breakfast today.",
        "Did she went to the doctor?",
        "What did you ate for lunch?",
      ],
      ieltsHint:
        "Wh-вопросы в Past Simple: What did you eat? Where did you go? How did you feel? Why did she take medicine? — запомни эти шаблоны для Speaking Part 1.",
      taskInstruction:
        "Составь вопрос и отрицание:\n• She bought organic food. → Did _______? / She didn't _______.\n• They felt sick after lunch. → Did _______? / They didn't _______.\n• He made a healthy smoothie. → What _______? / He didn't _______.",
    },
    {
      id: "grammar-4",
      title: "Wh-вопросы в Past Simple",
      explanation:
        "Специальные вопросы начинаются с вопросительного слова (What, Where, When, Why, How, Who, Which). Структура немного отличается, когда вопрос к подлежащему.",
      tables: [
        {
          headers: ["Вопрос к", "Структура", "Пример", "Перевод"],
          rows: [
            ["Дополнению (объект)", "Wh- + did + S + V1?", "What did you eat?", "Что ты ел(а)?"],
            ["Дополнению (объект)", "Where did they go?", "Where did they go?", "Куда они пошли?"],
            ["Дополнению (объект)", "How did she feel?", "How did she feel?", "Как она себя чувствовала?"],
            ["Подлежащему (субъект)", "Who + V2 (без did)?", "Who made this dish?", "Кто приготовил это блюдо?"],
            ["Подлежащему (субъект)", "What + V2 (без did)?", "What happened yesterday?", "Что случилось вчера?"],
          ],
        },
      ],
      correctExamples: [
        "What did you have for lunch?",
        "Who ate my sandwich?",
        "Why did he skip breakfast?",
      ],
      incorrectExamples: [
        "What you had for lunch?",
        "Who did ate my sandwich?",
        "Why he skipped breakfast?",
      ],
      ieltsHint:
        "В IELTS Speaking Part 2 тебя часто спрашивают: «Describe a meal you enjoyed.» Используй Wh-вопросы для подготовки: What did you eat? Who cooked it? How did it taste?",
      taskInstruction:
        "Составь Wh-вопрос к выделенной части:\n• She ate [a salad] for lunch. → What _______?\n• [Maria] made the soup. → Who _______?\n• He felt sick [because of stress]. → Why _______?\n• They went to [a Japanese restaurant]. → Where _______?",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Last month, my friend Sara decided to change her diet. She felt tired all the time and had no energy. Her doctor told her to eat more vegetables and drink less coffee. The next day, Sara went to the market and bought fresh fruit, nuts, and leafy greens. She made a big salad for lunch and drank herbal tea instead of coffee. In the evening, she took a short walk and slept much better than usual. After one week, she felt stronger and lost two kilograms. Her skin looked healthier and she had more energy at work. Sara knew that small changes made a big difference to her overall wellbeing.",
      wordCount: 130,
      taskInstruction:
        "Прочитай текст. Подчеркни все неправильные глаголы в Past Simple. Напиши их инфинитивы рядом с текстом.",
      vocabulary: [
        { word: "diet", translation: "рацион питания" },
        { word: "tired", translation: "уставший" },
        { word: "energy", translation: "энергия" },
        { word: "vegetable", translation: "овощ" },
        { word: "market", translation: "рынок" },
        { word: "fresh", translation: "свежий" },
        { word: "nut", translation: "орех" },
        { word: "leafy green", translation: "листовая зелень" },
        { word: "salad", translation: "салат" },
        { word: "herbal tea", translation: "травяной чай" },
        { word: "instead of", translation: "вместо" },
        { word: "short walk", translation: "короткая прогулка" },
        { word: "stronger", translation: "сильнее" },
        { word: "lose weight", translation: "похудеть" },
        { word: "kilogram", translation: "килограмм" },
        { word: "skin", translation: "кожа" },
        { word: "healthy", translation: "здоровый" },
        { word: "overall", translation: "в целом" },
        { word: "wellbeing", translation: "самочувствие" },
        { word: "change", translation: "менять" },
        { word: "decide", translation: "решать" },
        { word: "difference", translation: "разница" },
        { word: "usual", translation: "обычный" },
        { word: "better", translation: "лучше" },
        { word: "doctor", translation: "врач" },
        { word: "pill", translation: "таблетка" },
        { word: "advice", translation: "совет" },
        { word: "nutrition", translation: "питание" },
        { word: "habit", translation: "привычка" },
        { word: "energy", translation: "энергия" },
      ],
      lifehack:
        "В IELTS Reading тексты о здоровье очень распространены. Учи устойчивые выражения: feel tired, lose weight, change diet, have energy — они встречаются в вопросах.",
    },
    {
      id: "reading-2",
      text: "Fast food became popular in the 20th century. In the 1940s, the McDonald brothers built a small restaurant in California and sold cheap hamburgers quickly. People came in large numbers because the food was fast and affordable. The idea grew rapidly, and soon other chains appeared across the United States. In the 1960s, fast food went global and reached Europe and Asia. Many people ate fast food regularly and forgot about home cooking. Health experts grew concerned and began studying the effects. Studies found that diets high in processed food led to obesity and heart disease. Governments took action and introduced health campaigns. Today, many fast food chains sell salads and healthier options because consumers became more aware of nutrition.",
      wordCount: 135,
      taskInstruction:
        "Прочитай текст. Найди 6 неправильных глаголов и составь по одному вопросу Did...? к каждому из них.",
      vocabulary: [
        { word: "popular", translation: "популярный" },
        { word: "century", translation: "столетие" },
        { word: "build", translation: "строить" },
        { word: "cheap", translation: "дешёвый" },
        { word: "affordable", translation: "доступный по цене" },
        { word: "rapidly", translation: "быстро" },
        { word: "chain", translation: "сеть (ресторанов)" },
        { word: "appear", translation: "появляться" },
        { word: "global", translation: "глобальный" },
        { word: "regularly", translation: "регулярно" },
        { word: "forget", translation: "забывать" },
        { word: "concerned", translation: "обеспокоенный" },
        { word: "study", translation: "изучать" },
        { word: "effect", translation: "эффект" },
        { word: "processed food", translation: "переработанная еда" },
        { word: "obesity", translation: "ожирение" },
        { word: "heart disease", translation: "болезнь сердца" },
        { word: "government", translation: "правительство" },
        { word: "introduce", translation: "вводить" },
        { word: "campaign", translation: "кампания" },
        { word: "sell", translation: "продавать" },
        { word: "reach", translation: "достичь" },
        { word: "health", translation: "здоровье" },
        { word: "expert", translation: "эксперт" },
        { word: "lead to", translation: "приводить к" },
        { word: "action", translation: "действие" },
        { word: "option", translation: "вариант" },
        { word: "consumer", translation: "потребитель" },
        { word: "aware", translation: "осведомлённый" },
        { word: "nutrition", translation: "питание" },
      ],
      lifehack:
        "Тема «fast food vs healthy eating» — одна из самых частых в IELTS Writing Task 2. Читая такие тексты, обращай внимание на причинно-следственные связи: led to, caused, resulted in.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши день, когда ты изменил(а) своё питание или попробовал(а) новую еду. Используй минимум 5 неправильных глаголов.",
      structure: [
        "Абзац 1: что случилось, когда, почему",
        "Абзац 2: что ты сделал(а) и как себя почувствовал(а) после",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Минимум 5 неправильных глаголов (eat, drink, buy, make, feel...)",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "В прошлом люди ели по-другому. Как изменилось питание за последние 50 лет? Напиши о 2–3 изменениях, используя Past Simple.",
      structure: [
        "Абзац 1 (40–45 слов): питание в прошлом — что люди ели, готовили, покупали",
        "Абзац 2 (40–45 слов): что изменилось и почему (фастфуд, технологии, стиль жизни)",
      ],
      requirements: [
        "2 абзаца, 80–90 слов",
        "Полезные слова: cooked, ate, bought, grew, made, became, introduced, changed",
      ],
    },
  ],

  completedTopics: [
    "25 ключевых неправильных глаголов и их формы Past Simple",
    "did / didn't для отрицаний и вопросов",
    "2 текста о еде и здоровье + 60 новых слов",
  ],
};

export default a8;
