import type { Lesson } from "@/types/lesson";

const a2: Lesson = {
  id: "a2",
  level: "A2",
  band: "A",
  number: 2,
  title: "Существительные · This/That · Числа · There is/are",
  subtitle: "Absolute Beginner",
  grammarTopics: [
    "Существительные (ед./мн. число)",
    "This / That / These / Those",
    "Числа и возраст",
    "There is / There are",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "5–6 предложений",
  prevLesson: "a1",
  nextLesson: "a3",

  grammar: [
    {
      id: "grammar-1",
      title: "Существительные: единственное и множественное число",
      explanation:
        "В английском языке множественное число существительных обычно образуется добавлением -s или -es. Но есть важные правила и исключения, которые нужно запомнить.",
      tables: [
        {
          headers: ["Правило", "Окончание", "Примеры"],
          rows: [
            ["Большинство слов", "+ s", "book → books · cat → cats · student → students"],
            ["Окончание -s, -ss, -sh, -ch, -x", "+ es", "bus → buses · class → classes · dish → dishes · watch → watches"],
            ["Окончание согласная + y", "y → ies", "city → cities · country → countries · family → families"],
            ["Окончание -f / -fe", "f → ves", "leaf → leaves · wife → wives · life → lives · knife → knives"],
            ["Окончание -o (некоторые)", "+ es", "tomato → tomatoes · potato → potatoes · hero → heroes"],
            ["Окончание -o (другие)", "+ s", "photo → photos · piano → pianos · video → videos"],
          ],
        },
        {
          headers: ["Ед. число", "Мн. число", "Перевод", "Ед. число", "Мн. число", "Перевод"],
          rows: [
            ["man", "men", "мужчина/мужчины", "woman", "women", "женщина/женщины"],
            ["child", "children", "ребёнок/дети", "person", "people", "человек/люди"],
            ["tooth", "teeth", "зуб/зубы", "foot", "feet", "стопа/стопы"],
            ["mouse", "mice", "мышь/мыши", "sheep", "sheep", "овца/овцы"],
            ["fish", "fish", "рыба/рыбы", "deer", "deer", "олень/олени"],
          ],
        },
      ],
      correctExamples: [
        "There are three children in the family.",
        "The women are teachers.",
        "I have two feet.",
      ],
      incorrectExamples: [
        "There are three childs in the family.",
        "The womans are teachers.",
        "I have two foots.",
      ],
      ieltsHint:
        "В Writing Task 1 ошибки в множественном числе — частый минус. «The number of students» (не student). «Several countries» (не country). Проверяй существительные после цифр и слов many/several/a few!",
      taskInstruction:
        "Образуй множественное число от этих слов и составь предложение с каждым.\n• city, country, woman, child, tooth, photo, class, leaf\n• Пример: city → cities. There are many beautiful cities in Kazakhstan.\n• Затем найди 3 неправильных слова во множественном числе в тексте Reading 1.",
    },
    {
      id: "grammar-2",
      title: "This / That / These / Those",
      explanation:
        "Эти слова указывают на предметы — «вот это» (рядом) или «вон то» (далеко). По-русски: этот, эта, это, эти, тот, та, те.",
      tables: [
        {
          headers: ["Слово", "Число", "Расстояние", "Перевод", "Пример"],
          rows: [
            ["this", "единственное", "близко (рядом)", "этот / эта / это", "This is my book."],
            ["that", "единственное", "далеко (вдали)", "тот / та / то", "That is her car."],
            ["these", "множественное", "близко (рядом)", "эти", "These are my friends."],
            ["those", "множественное", "далеко (вдали)", "те", "Those are big buildings."],
          ],
        },
        {
          headers: ["Вопрос", "Ответ"],
          rows: [
            ["What is this?", "This is a laptop."],
            ["What is that?", "That is a university."],
            ["Who is this?", "This is my mother."],
            ["What are these?", "These are my books."],
            ["Are those your friends?", "Yes, those are my friends."],
          ],
        },
      ],
      correctExamples: [
        "This is my bag.",
        "That is a big city.",
        "These are my parents.",
      ],
      incorrectExamples: [
        "These is my bag.",
        "Those is a big city.",
        "This are my parents.",
      ],
      ieltsHint:
        "В Speaking Part 1 экзаменатор может показать на что-то и спросить: «What is this?» или «What are these?» Отвечай уверенно: «This is... / These are...» Важно: This/That — единственное число (is), These/Those — множественное (are).",
      taskInstruction:
        "Посмотри вокруг себя. Составь 6 предложений: 2 с this, 2 с these, 1 с that, 1 с those.\n• This is my [предмет]. It is [прилагательное].\n• These are my [предметы]. They are [прилагательное].",
    },
    {
      id: "grammar-3",
      title: "Числа и возраст",
      explanation:
        "Числа — это основа любого языка. В IELTS числа встречаются в каждом тексте, в каждом графике, в каждом задании. Запомни их твёрдо.",
      tables: [
        {
          headers: ["Цифра", "Слово", "Цифра", "Слово", "Цифра", "Слово", "Цифра", "Слово"],
          rows: [
            ["1", "one", "6", "six", "11", "eleven", "16", "sixteen"],
            ["2", "two", "7", "seven", "12", "twelve", "17", "seventeen"],
            ["3", "three", "8", "eight", "13", "thirteen", "18", "eighteen"],
            ["4", "four", "9", "nine", "14", "fourteen", "19", "nineteen"],
            ["5", "five", "10", "ten", "15", "fifteen", "20", "twenty"],
          ],
        },
        {
          headers: ["Структура", "Пример", "Перевод"],
          rows: [
            ["I am + число + years old", "I am 24 years old.", "Мне 24 года."],
            ["She/He is + число + years old", "She is 35 years old.", "Ей 35 лет."],
            ["How old are you?", "I am twenty-two years old.", "Сколько тебе лет?"],
            ["At the age of + число", "She graduated at the age of 22.", "Она окончила в возрасте 22 лет."],
          ],
        },
      ],
      correctExamples: [
        "She is twenty years old.",
        "I am 30 years old.",
        "He is thirty years old.",
      ],
      incorrectExamples: [
        "She have twenty years old.",
        "I am have 30 years.",
        "He is thirty years.",
      ],
      ieltsHint:
        "В IELTS Listening и Reading числа встречаются постоянно: даты, статистика, проценты, возраст. Умей быстро читать числа вслух: 1,250 = one thousand, two hundred and fifty.",
      taskInstruction:
        "Напиши эти числа словами, затем составь предложение с каждым.\n• 15, 27, 43, 68, 100, 1,500\n• Пример: 27 → twenty-seven. My brother is twenty-seven years old.\n• Затем напиши возраст 5 членов своей семьи полными предложениями.",
    },
    {
      id: "grammar-4",
      title: "There is / There are",
      explanation:
        "Конструкция There is / There are используется, чтобы сказать, что что-то существует или находится где-либо. По-русски: «есть», «находится», «имеется».",
      tables: [
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Утверждение (ед.)", "There is + a/an + существ.", "There is a book on the table.", "На столе есть книга."],
            ["Утверждение (мн.)", "There are + существ. + место", "There are three windows in the room.", "В комнате три окна."],
            ["Отрицание (ед.)", "There isn't a...", "There isn't a café near here.", "Рядом нет кафе."],
            ["Отрицание (мн.)", "There aren't any...", "There aren't any students in class.", "В классе нет студентов."],
            ["Вопрос (ед.)", "Is there a...?", "Is there a hospital nearby?", "Рядом есть больница?"],
            ["Вопрос (мн.)", "Are there any...?", "Are there any good restaurants?", "Есть ли хорошие рестораны?"],
          ],
        },
      ],
      correctExamples: [
        "There are many books on the table.",
        "There is a cat in the garden.",
        "Are there any books?",
      ],
      incorrectExamples: [
        "There is many books on the table.",
        "There are a cat in the garden.",
        "Is there books?",
      ],
      ieltsHint:
        "There is/are — ключевая структура для описания графиков в Task 1: «There are five categories in the chart.» И для описания мест в Speaking: «There are many interesting places in my city.»",
      taskInstruction:
        "Опиши свою комнату или квартиру, используя There is / There are.\n• Минимум 5 предложений: 2 с there is, 2 с there are, 1 с there isn't/aren't\n• Используй предлоги: on the table, near the window, in the room, next to the door\n• Пример: There is a big window in my room. There are three shelves on the wall.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "Welcome to our school! This is the Central Language School in Almaty. There are fifteen classrooms in the building. Each classroom is big and bright. There are twenty desks and twenty chairs in each room. There is also a whiteboard and a projector in every classroom. These rooms are very modern. That old building next to the school is the library. There are thousands of books in the library. There are also three computer rooms with forty computers in total. The school has two canteens. There is one canteen on the first floor and one on the third floor. There are twelve teachers at our school. Eight of them are women and four are men. Those teachers are very experienced and friendly. This is a great place to study English!",
      wordCount: 120,
      taskInstruction:
        "Прочитайте текст. Найдите: формы множественного числа, this/that/these/those, числа словами, there is/there are.",
      vocabulary: [
        { word: "welcome", translation: "добро пожаловать" },
        { word: "central", translation: "центральный" },
        { word: "language", translation: "язык / языковая" },
        { word: "classroom", translation: "класс, аудитория" },
        { word: "building", translation: "здание" },
        { word: "bright", translation: "светлый" },
        { word: "desk", translation: "парта, письменный стол" },
        { word: "whiteboard", translation: "белая доска" },
        { word: "projector", translation: "проектор" },
        { word: "modern", translation: "современный" },
        { word: "library", translation: "библиотека" },
        { word: "thousands", translation: "тысячи" },
        { word: "computer room", translation: "компьютерный класс" },
        { word: "total", translation: "всего, итого" },
        { word: "canteen", translation: "столовая" },
        { word: "floor", translation: "этаж" },
        { word: "teacher", translation: "учитель" },
        { word: "experienced", translation: "опытный" },
        { word: "study", translation: "учиться, изучать" },
        { word: "great", translation: "отличный, замечательный" },
        { word: "place", translation: "место" },
        { word: "next to", translation: "рядом с" },
        { word: "each", translation: "каждый" },
        { word: "also", translation: "также, тоже" },
        { word: "first", translation: "первый" },
        { word: "third", translation: "третий" },
        { word: "eight", translation: "восемь" },
        { word: "twelve", translation: "двенадцать" },
        { word: "fifteen", translation: "пятнадцать" },
        { word: "twenty", translation: "двадцать" },
      ],
      lifehack:
        "В текстах IELTS Reading часто встречаются числа. Когда читаешь — не пропускай их! Числа часто появляются в вопросах: «How many classrooms are there?» — ответ прямо в тексте: fifteen.",
    },
    {
      id: "reading-2",
      text: "My name is Bekzod. I am nineteen years old and I am a first-year student. This is my first month at university. My university is in the city centre. It is a large, modern building with ten floors. There are four faculties and about three thousand students. My faculty is the Faculty of Economics. There are sixty students in my year. These students are from different cities of Kazakhstan. Some are from Almaty, some are from Astana, and some are from smaller towns. There are two students from my school in my group. That is very nice! There is a big sports hall on the second floor. There are also two cafés and a bookshop in the building. Those cafés are always busy in the morning. University life is exciting and interesting. There are so many new things to learn every day!",
      wordCount: 125,
      taskInstruction:
        "Читайте текст. Посчитайте сколько раз встречается There is и There are.",
      vocabulary: [
        { word: "first-year", translation: "первокурсник" },
        { word: "month", translation: "месяц" },
        { word: "large", translation: "большой, крупный" },
        { word: "floor", translation: "этаж" },
        { word: "faculty", translation: "факультет" },
        { word: "about", translation: "около, приблизительно" },
        { word: "economics", translation: "экономика" },
        { word: "year (group)", translation: "курс (учебный)" },
        { word: "different", translation: "разный, различный" },
        { word: "some", translation: "некоторые, несколько" },
        { word: "smaller", translation: "меньший, небольшой" },
        { word: "group", translation: "группа" },
        { word: "sports hall", translation: "спортивный зал" },
        { word: "second", translation: "второй" },
        { word: "bookshop", translation: "книжный магазин" },
        { word: "busy", translation: "оживлённый, занятой" },
        { word: "exciting", translation: "захватывающий, интересный" },
        { word: "so many", translation: "так много" },
        { word: "learn", translation: "учиться, узнавать" },
        { word: "every day", translation: "каждый день" },
        { word: "nice", translation: "приятный, хороший" },
        { word: "three thousand", translation: "три тысячи" },
        { word: "ten floors", translation: "десять этажей" },
        { word: "sixty", translation: "шестьдесят" },
        { word: "nineteen", translation: "девятнадцать" },
        { word: "morning", translation: "утро" },
        { word: "new", translation: "новый" },
        { word: "life", translation: "жизнь" },
        { word: "things", translation: "вещи, всё" },
      ],
      lifehack:
        "Слова «some» (некоторые/немного) и «about» (около/приблизительно) очень часто встречаются в IELTS. «About three thousand students» = примерно 3000 студентов. Это не точная цифра — и это нормально в академических текстах.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction: "Опиши свою комнату или квартиру. Напиши 5–6 предложений.",
      requirements: [
        "There is... и There are... (минимум по 2 раза)",
        "This is... или These are... (хотя бы 1 раз)",
        "Прилагательные для описания: big, small, modern, comfortable, bright...",
        "Числа: напиши сколько комнат, окон, полок и т.д.",
      ],
      example: "My room is not very big. There is a desk near the window...",
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Опиши свою семью. Напиши о 3–4 членах семьи, используя числа и возраст.",
      structure: [
        "Предложение 1: There are [число] people in my family.",
        "Предложения 2–5: опиши каждого члена семьи: имя, возраст, профессия.",
        "Используй: He/She is [число] years old. He/She is a [профессия].",
        "Добавь прилагательное: He is kind. She is very hardworking.",
      ],
      requirements: [
        "There are [число] people in my family.",
        "возраст каждого члена семьи",
        "профессия с артиклем a/an",
        "минимум 1 прилагательное",
      ],
      example:
        "There are four people in my family. My mother is forty-five years old. She is a teacher...",
    },
  ],

  completedTopics: [
    "Grammar: Множественное число · This/That/These/Those · Числа · There is / There are",
    "2 текста для чтения (120–125 слов) + 60 слов с переводом",
    "2 Writing Tasks — описание комнаты и семьи (5–6 предложений)",
  ],
};

export default a2;
