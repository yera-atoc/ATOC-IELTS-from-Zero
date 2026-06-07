import type { Lesson } from "@/types/lesson";

const a10: Lesson = {
  id: "a10",
  level: "A10",
  band: "A",
  number: 10,
  title: "Comparatives · Superlatives · Страны и природа",
  subtitle: "Elementary",
  grammarTopics: [
    "Comparatives — короткие прилагательные (-er / than)",
    "Comparatives — длинные прилагательные (more... than)",
    "Superlatives (the -est / the most)",
    "as...as и not as...as",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "2 абзаца (90–100 слов)",
  prevLesson: "a9",
  nextLesson: "a11",

  grammar: [
    {
      id: "grammar-1",
      title: "Comparatives — короткие прилагательные",
      explanation:
        "Сравнительная степень (Comparative) используется для сравнения двух объектов. Для коротких прилагательных добавляем -er и после ставим than.",
      tables: [
        {
          headers: ["Тип", "Правило", "Прилагательное", "Comparative"],
          rows: [
            ["1 слог", "+ -er", "tall", "taller"],
            ["1 слог на -e", "+ -r", "large", "larger"],
            ["1 слог CVC*", "удвоить + -er", "big", "bigger"],
            ["2 слога на -y", "-y → -ier", "sunny", "sunnier"],
            ["Короткие 2 слога", "+ -er", "quiet", "quieter"],
          ],
        },
        {
          headers: ["Прилагательное", "Comparative", "Пример"],
          rows: [
            ["cold", "colder", "Norway is colder than Italy."],
            ["hot", "hotter", "The Sahara is hotter than the Amazon."],
            ["small", "smaller", "Iceland is smaller than Greenland."],
            ["high", "higher", "The Himalayas are higher than the Alps."],
            ["deep", "deeper", "The Pacific is deeper than the Atlantic."],
            ["dry", "drier", "The Gobi desert is drier than the Kalahari."],
          ],
        },
      ],
      correctExamples: [
        "Russia is bigger than China.",
        "The Sahara is hotter than the Amazon.",
        "Norway is colder than Italy.",
      ],
      incorrectExamples: [
        "Russia is more bigger than China.",
        "The Sahara is more hotter than the Amazon.",
      ],
      ieltsHint:
        "После comparative всегда пишем THAN: «bigger than», «more beautiful than». Никогда не пишите «more bigger» — это двойная ошибка! В IELTS Task 1 (графики, карты) часто нужно сравнивать данные: «The temperature in July was higher than in January.»",
      taskInstruction:
        "Составьте сравнения с -er / than:\n• Amazon (длинный) / Nile → The Amazon is... than the Nile.\n• Mount Everest (высокий) / Mont Blanc\n• Canada (большой) / Germany\n• The Sahara (жаркий) / Siberia",
    },
    {
      id: "grammar-2",
      title: "Comparatives — длинные прилагательные и исключения",
      explanation:
        "Для длинных прилагательных (2+ слога, не на -y) используем more + прилагательное + than. Также есть неправильные формы, которые нужно запомнить.",
      tables: [
        {
          headers: ["Прилагательное", "Comparative", "Пример"],
          rows: [
            ["beautiful", "more beautiful than", "Norway is more beautiful than I expected."],
            ["dangerous", "more dangerous than", "A tsunami is more dangerous than a storm."],
            ["polluted", "more polluted than", "This city is more polluted than the countryside."],
            ["expensive", "more expensive than", "Switzerland is more expensive than Portugal."],
            ["interesting", "more interesting than", "Geography is more interesting than I thought."],
            ["important", "more important than", "Clean water is more important than gold."],
          ],
        },
        {
          headers: ["Прилагательное", "Comparative", "Superlative"],
          rows: [
            ["good", "better than", "the best"],
            ["bad", "worse than", "the worst"],
            ["far", "farther / further than", "the farthest / furthest"],
            ["little", "less than", "the least"],
            ["much / many", "more than", "the most"],
          ],
        },
      ],
      correctExamples: [
        "The weather in London is worse than in Madrid.",
        "The situation is getting worse.",
        "Further research is needed.",
      ],
      incorrectExamples: [
        "The weather in London is more bad than in Madrid.",
        "Brazil is more hot than Canada.",
        "French cuisine is more good than fast food.",
      ],
      ieltsHint:
        "Запомните: good → better (не «more good»), bad → worse (не «more bad»). Это самые частые ошибки даже у продвинутых студентов! В IELTS Writing: «The situation is getting worse» (не «more bad»).",
      taskInstruction:
        "Исправьте ошибки и переведите:\n• Brazil is more hot than Canada. (ошибка!)\n• French cuisine is more good than fast food. (ошибка!)\n• The new road is more far from the city. (ошибка!)\n• Переведите: Экология становится всё важнее с каждым годом.\n• Переведите: Жизнь в деревне спокойнее, чем в городе.",
    },
    {
      id: "grammar-3",
      title: "Superlatives — превосходная степень",
      explanation:
        "Превосходная степень (Superlative) выделяет один объект из группы как лучший, худший, самый большой и т.д. Всегда используем the перед superlative.",
      tables: [
        {
          headers: ["Тип", "Правило", "Прилагательное", "Superlative"],
          rows: [
            ["1 слог", "the + -est", "tall", "the tallest"],
            ["1 слог на -e", "the + -st", "large", "the largest"],
            ["1 слог CVC", "the + удвоить + -est", "big", "the biggest"],
            ["2 слога на -y", "the + -iest", "sunny", "the sunniest"],
            ["Длинные (2+ слога)", "the most + ...", "beautiful", "the most beautiful"],
            ["Исключение", "особая форма", "good / bad / far", "the best / the worst / the farthest"],
          ],
        },
        {
          headers: ["Факт о природе", "Superlative"],
          rows: [
            ["Everest — высокая гора", "Everest is the highest mountain in the world."],
            ["Russia — большая страна", "Russia is the largest country on Earth."],
            ["Amazon — длинная река", "The Amazon is the longest river (by volume)."],
            ["Mariana Trench — глубокое место", "The Mariana Trench is the deepest place in the ocean."],
            ["Antarctica — холодный континент", "Antarctica is the coldest continent."],
            ["Dubai — дорогой город", "Dubai is one of the most expensive cities in the world."],
          ],
        },
      ],
      correctExamples: [
        "The Amazon is the longest river in the world.",
        "Antarctica is the coldest continent.",
        "It was the most breathtaking landscape I had ever seen.",
      ],
      incorrectExamples: [
        "Amazon is longest river in world.",
        "Antarctica is most coldest continent.",
      ],
      ieltsHint:
        "Обратите внимание на фразу «one of the + superlative + plural noun»: «one of the most beautiful countries» (страна — одна из нескольких прекрасных). В IELTS Speaking: «What is the most interesting place you have ever visited?»",
      taskInstruction:
        "Составьте предложения с superlative:\n• Pacific Ocean (deep) → The Pacific Ocean is...\n• Sahara Desert (hot / dry) → напишите 2 предложения\n• Vatican City (small country) → Vatican City is...\n• Назовите: самый красивый город в мире (по-вашему)\n• Назовите: самое интересное место, которое вы посетили",
    },
    {
      id: "grammar-4",
      title: "as...as и not as...as — равное и неравное сравнение",
      explanation:
        "Конструкция as + прилагательное + as означает «такой же... как». Отрицание not as... as означает «не такой... как» — то есть один объект уступает другому.",
      tables: [
        {
          headers: ["Конструкция", "Значение", "Пример"],
          rows: [
            ["as + adj + as", "одинаково", "The Nile is as famous as the Amazon."],
            ["not as + adj + as", "первый уступает", "England is not as sunny as Spain."],
            ["just as + adj + as", "подчёркиваем равенство", "Forests are just as important as oceans."],
            ["twice as + adj + as", "в два раза больше/лучше", "Brazil is twice as large as Argentina."],
            ["not nearly as + adj + as", "намного меньше/хуже", "Portugal is not nearly as cold as Norway."],
          ],
        },
      ],
      correctExamples: [
        "Tokyo is not as expensive as Zurich.",
        "The Atlantic is just as large as the Pacific.",
        "Renewable energy is just as reliable as fossil fuels in certain conditions.",
      ],
      incorrectExamples: [
        "Tokyo is not as more expensive as Zurich.",
        "The Atlantic is just as larger as the Pacific.",
      ],
      ieltsHint:
        "as...as = степень не меняется (adjective без изменений!): «as beautiful as», «as cold as» — НЕ «as more beautiful as». В IELTS Task 2 для взвешенного аргумента: «Renewable energy is just as reliable as fossil fuels in certain conditions.» Это показывает зрелость мышления.",
      taskInstruction:
        "Перепишите предложения, используя as...as / not as...as:\n• Spain is sunnier than the UK. → The UK is not...\n• The Pacific and the Atlantic are both very large. → The Atlantic is just as...\n• Russia is much bigger than China. → China is not nearly as...\n• Составьте 2 своих предложения о природе вашей страны\n• Переведите: Воздух в деревне такой же чистый, как в горах.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Our planet is full of amazing contrasts. Russia is the largest country in the world — it is almost twice as large as Canada, the second biggest. However, Canada has more lakes than any other country on Earth. When it comes to population, China and India are the most populated nations. India is now slightly more populated than China, which is a remarkable change. In terms of climate, the coldest place is Antarctica, where temperatures can drop lower than -80°C. On the other hand, the hottest place is Death Valley in the USA, which is even hotter than the Sahara Desert on some days. The Amazon rainforest is the most biodiverse region on Earth. It is far larger than any other tropical forest and produces more oxygen than any other ecosystem. Protecting it is more important than ever.",
      wordCount: 135,
      taskInstruction:
        "Прочитайте текст. Найдите и подчеркните все формы comparatives и superlatives. Выпишите их в таблицу: Comparative / Superlative.",
      vocabulary: [
        { word: "contrast", translation: "контраст" },
        { word: "population", translation: "население" },
        { word: "populated", translation: "населённый" },
        { word: "remarkable", translation: "замечательный, поразительный" },
        { word: "climate", translation: "климат" },
        { word: "temperature", translation: "температура" },
        { word: "drop", translation: "опускаться (о температуре)" },
        { word: "rainforest", translation: "тропический лес" },
        { word: "biodiverse", translation: "биоразнообразный" },
        { word: "ecosystem", translation: "экосистема" },
        { word: "oxygen", translation: "кислород" },
        { word: "protect", translation: "защищать" },
        { word: "produce", translation: "производить" },
        { word: "tropical", translation: "тропический" },
        { word: "continent", translation: "континент" },
        { word: "desert", translation: "пустыня" },
        { word: "amazing", translation: "удивительный" },
        { word: "almost", translation: "почти" },
        { word: "slightly", translation: "немного, чуть-чуть" },
        { word: "second", translation: "второй" },
        { word: "however", translation: "однако" },
        { word: "on the other hand", translation: "с другой стороны" },
        { word: "in terms of", translation: "что касается" },
        { word: "planet", translation: "планета" },
        { word: "nation", translation: "нация, страна" },
        { word: "lake", translation: "озеро" },
        { word: "region", translation: "регион" },
        { word: "even", translation: "даже (для усиления)" },
        { word: "far larger", translation: "намного больше" },
        { word: "ever", translation: "когда-либо / как никогда" },
      ],
      lifehack:
        "Обратите внимание на усилители comparative: «even hotter», «far larger», «slightly more». Они делают речь точнее и повышают балл в IELTS!",
    },
    {
      id: "reading-2",
      text: "Our natural world is changing faster than ever before. Glaciers are melting at a much quicker rate than scientists predicted fifty years ago. The Arctic is warming nearly twice as fast as the rest of the planet — a fact that should concern us all. Coral reefs are not as healthy as they were in the 1980s. The Great Barrier Reef, once the most vibrant marine ecosystem in the world, has lost more than half of its coral cover. It is now far less colourful than it used to be. Deforestation is also becoming more serious. Every year, an area of forest larger than Portugal disappears. This is not as well-known as climate change, but it is just as dangerous. The good news is that renewable energy is growing faster than fossil fuels. Solar power is now cheaper than coal in most countries, and wind energy is becoming more efficient every year.",
      wordCount: 145,
      taskInstruction:
        "Прочитайте текст. Найдите все конструкции as...as и not as...as. Как автор использует их для сравнения? Запишите 3 примера.",
      vocabulary: [
        { word: "glacier", translation: "ледник" },
        { word: "melt", translation: "таять" },
        { word: "predict", translation: "предсказывать" },
        { word: "Arctic", translation: "Арктика" },
        { word: "concern", translation: "беспокоить" },
        { word: "coral reef", translation: "коралловый риф" },
        { word: "vibrant", translation: "яркий, живой" },
        { word: "marine", translation: "морской" },
        { word: "cover", translation: "покров, покрытие" },
        { word: "colourful", translation: "красочный, яркий" },
        { word: "deforestation", translation: "вырубка лесов" },
        { word: "disappear", translation: "исчезать" },
        { word: "renewable energy", translation: "возобновляемая энергия" },
        { word: "fossil fuel", translation: "ископаемое топливо" },
        { word: "solar power", translation: "солнечная энергия" },
        { word: "coal", translation: "уголь" },
        { word: "wind energy", translation: "ветровая энергия" },
        { word: "efficient", translation: "эффективный" },
        { word: "serious", translation: "серьёзный" },
        { word: "rate", translation: "темп, скорость" },
        { word: "half", translation: "половина" },
        { word: "fact", translation: "факт" },
        { word: "used to be", translation: "раньше был" },
        { word: "well-known", translation: "широко известный" },
        { word: "dangerous", translation: "опасный" },
        { word: "grow", translation: "расти" },
        { word: "cheap", translation: "дешёвый" },
        { word: "most countries", translation: "большинство стран" },
        { word: "every year", translation: "каждый год" },
        { word: "natural world", translation: "природный мир" },
      ],
      lifehack:
        "«Far less colourful than it used to be» = намного менее красочный, чем раньше. «Used to be» — очень полезная конструкция для IELTS, означает привычное прошлое состояние.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Сравните две страны или два города, которые вы знаете (2 абзаца, 90–100 слов).",
      structure: [
        "Абзац 1: Сравните размер, климат или природу (comparative + than / as...as). Начните: «Kazakhstan and [country] are both [adjective], but...»",
        "Абзац 2: Что делает одну страну/город более привлекательной? (superlative). Начните: «In my opinion, [city/country] is the most... because...»",
      ],
      requirements: [
        "90–100 слов",
        "Минимум: 2 comparative, 1 superlative, 1 as...as",
      ],
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напишите 2 абзаца (90–100 слов) на тему: «Природа сегодня и 50 лет назад».",
      structure: [
        "Абзац 1: Как изменилась природа? Стало лучше или хуже? (comparative)",
        "Абзац 2: Что является самой большой экологической проблемой? (superlative)",
      ],
      requirements: [
        "90–100 слов",
        "Используйте: worse than, not as clean as, the most serious problem",
        "Структура: Topic sentence → сравнение → вывод",
      ],
    },
  ],

  completedTopics: [
    "Comparatives: -er / more... than для сравнения двух объектов",
    "Superlatives: the -est / the most... для превосходной степени",
    "as...as / not as...as для равного и неравного сравнения",
    "2 текста о странах и природе + 60 новых слов",
  ],
};

export default a10;
