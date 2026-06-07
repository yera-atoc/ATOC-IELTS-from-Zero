import type { Lesson } from "@/types/lesson";

const a1: Lesson = {
  id: "a1",
  level: "A1",
  band: "A",
  number: 1,
  title: "To Be · Артикли · Прилагательные",
  subtitle: "Absolute Beginner",
  grammarTopics: [
    "To Be (am / is / are)",
    "Артикли a / an / the",
    "Базовые прилагательные",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "3–4 предложения",
  prevLesson: null,
  nextLesson: "a2",

  grammar: [
    {
      id: "grammar-1",
      title: "To Be: am / is / are",
      explanation:
        "Глагол To Be — первый и самый важный глагол в английском. Он переводится как «быть», «являться», «есть». В русском языке этот глагол часто пропускается, но в английском он обязателен.",
      tables: [
        {
          headers: ["Местоимение", "To Be", "Перевод", "Пример"],
          rows: [
            ["I", "am", "я есть / я", "I am a student."],
            ["You", "are", "ты / вы", "You are a teacher."],
            ["He", "is", "он", "He is a doctor."],
            ["She", "is", "она", "She is a nurse."],
            ["It", "is", "это / оно", "It is a cat."],
            ["We", "are", "мы", "We are friends."],
            ["They", "are", "они", "They are students."],
          ],
        },
        {
          headers: ["Форма", "Структура", "Пример"],
          rows: [
            ["Отрицание", "am / is / are + not", "I am not tired. · She is not at home."],
            ["Сокращение", "isn't / aren't", "He isn't happy. · We aren't late."],
            ["Вопрос", "Am / Is / Are + подлежащее + ?", "Are you a student? · Is she a teacher?"],
            ["Краткий ответ", "Yes, I am. / No, I'm not.", "Are you tired? — Yes, I am. / No, I'm not."],
          ],
        },
      ],
      correctExamples: [
        "I am a student.",
        "She is tired.",
        "They are my friends.",
      ],
      incorrectExamples: [
        "I is a student.",
        "She am tired.",
        "They is my friends.",
      ],
      ieltsHint:
        "To Be используется в IELTS везде — в описаниях, определениях, графиках. В Speaking Part 1: «I am from Kazakhstan. I am 25 years old. I am a student at university.» Это первое что скажет экзаменатор — будьте готовы!",
      taskInstruction:
        "Заполни пропуски: am, is или are. Затем составь 4 своих предложения о себе.\n• My name ___ Anna. I ___ 22 years old.\n• She ___ a doctor. He ___ very tall.\n• We ___ students. They ___ from Kazakhstan.\n• It ___ a big city. You ___ very kind.",
    },
    {
      id: "grammar-2",
      title: "Артикли: a / an / the",
      explanation:
        "Артикль — это маленькое слово перед существительным. В русском языке артиклей нет, поэтому это одна из самых частых ошибок русскоязычных студентов.",
      tables: [
        {
          headers: ["Артикль", "Когда используется", "Примеры"],
          rows: [
            ["a", "перед согласным звуком, первое упоминание", "a cat, a book, a student, a university"],
            ["an", "перед гласным звуком (a, e, i, o, u)", "an apple, an egg, an idea, an hour"],
            ["the", "конкретный предмет, уже известный", "the cat (та самая кошка), the book I read"],
            ["— (нет)", "имена, страны, города, языки, обобщение", "London, Kazakhstan, English, cats (вообще)"],
          ],
        },
      ],
      correctExamples: [
        "She is the best student in class.",
        "I love music.",
        "He lives in London.",
      ],
      incorrectExamples: [
        "She is a best student in class.",
        "I love a music.",
        "He lives in a London.",
      ],
      ieltsHint:
        "В Writing Task 1 артикли критически важны: «The graph shows...» (не «A graph»). В описаниях: «The number of students increased...» Неправильный артикль — прямой минус к Grammatical Accuracy.",
      taskInstruction:
        "Вставь a, an, the или — (нет артикля).\n• ___ apple a day keeps ___ doctor away.\n• I live in ___ Almaty. It is ___ beautiful city.\n• She has ___ dog. ___ dog is very big.\n• He is ___ honest man. She plays ___ piano.\n• I love ___ English. ___ English is interesting language.",
    },
    {
      id: "grammar-3",
      title: "Базовые прилагательные",
      explanation:
        "Прилагательные описывают существительные. В английском прилагательное всегда стоит ДО существительного, а не после (в отличие от многих языков).",
      tables: [
        {
          headers: ["Английское", "Русское", "Английское", "Русское", "Английское", "Русское"],
          rows: [
            ["tall", "высокий/ая", "short", "низкий/ая", "young", "молодой/ая"],
            ["old", "старый/ая", "beautiful", "красивый/ая", "handsome", "красивый (муж.)"],
            ["kind", "добрый/ая", "friendly", "дружелюбный/ая", "intelligent", "умный/ая"],
            ["happy", "счастливый/ая", "sad", "грустный/ая", "busy", "занятый/ая"],
            ["tired", "усталый/ая", "strong", "сильный/ая", "confident", "уверенный/ая"],
            ["big", "большой", "small", "маленький", "new", "новый"],
            ["modern", "современный", "ancient", "древний", "clean", "чистый"],
            ["dirty", "грязный", "quiet", "тихий", "noisy", "шумный"],
            ["expensive", "дорогой", "cheap", "дешёвый", "interesting", "интересный"],
          ],
        },
      ],
      correctExamples: [
        "She is a tall woman.",
        "He has blue eyes.",
        "It is an old building.",
      ],
      incorrectExamples: [
        "She is a woman tall.",
        "He has eyes blue.",
        "It is building old.",
      ],
      ieltsHint:
        "В Speaking Part 1 вас попросят описать себя, свой город, семью. Используй To Be + прилагательное: «My city is large and modern. My family is very friendly. I am quite ambitious and hardworking.»",
      taskInstruction:
        "Опиши 3 человека из своей семьи и 2 места, используя To Be + прилагательное.\n• Пример: My mother is kind and intelligent. She is 45 years old.\n• Используй минимум 5 разных прилагательных из таблиц выше\n• Каждое предложение начинай с местоимения: He / She / It / My...",
    },
    {
      id: "grammar-4",
      title: "To Be: вопросы и ответы о себе",
      explanation:
        "В IELTS Speaking Part 1 экзаменатор задаёт простые вопросы о тебе. Научись отвечать уверенно — это первые 4–5 минут экзамена.",
      tables: [
        {
          headers: ["Вопрос экзаменатора", "Ответ (шаблон)"],
          rows: [
            ["What is your name?", "My name is [имя]."],
            ["How old are you?", "I am [возраст] years old."],
            ["Where are you from?", "I am from [город/страна]."],
            ["Are you a student?", "Yes, I am a student. / No, I am not."],
            ["What is your job?", "I am a [профессия]."],
            ["Is your city big?", "Yes, it is very big. / No, it is quite small."],
            ["Are you married?", "Yes, I am married. / No, I am not married."],
          ],
        },
        {
          headers: ["Профессия", "Перевод", "Профессия", "Перевод"],
          rows: [
            ["a student", "студент", "a teacher", "учитель"],
            ["a doctor", "врач", "an engineer", "инженер"],
            ["a manager", "менеджер", "a lawyer", "юрист"],
            ["an accountant", "бухгалтер", "a nurse", "медсестра"],
            ["a businessman", "бизнесмен", "a programmer", "программист"],
          ],
        },
      ],
      ieltsHint:
        "Первые слова на экзамене задают тон всего Speaking. Отрепетируй ответы на эти 7 вопросов дома вслух до автоматизма.",
      taskInstruction:
        "Напиши 4 предложения о себе, используя To Be.\n• Используй: am, is, are в разных предложениях\n• Включи: имя, возраст, профессию/статус, описание своего города\n• Пример: My name is Aisha. I am 24 years old. I am a student. My city is big and modern.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "My name is Sara. I am 23 years old. I am a student at a university in Almaty. The university is very big and modern. My family is from a small town in the south of Kazakhstan. My mother is a teacher and my father is an engineer. They are very kind and friendly. I have a sister. Her name is Dina. She is 18 years old. She is a school student. Our flat is not very big, but it is clean and comfortable. My room is small. There is a desk, a chair, and a bookshelf in my room. The bookshelf is full of books. I am happy in my family.",
      wordCount: 105,
      taskInstruction:
        "Прочитайте текст. Найдите все формы To Be (am/is/are) и все артикли (a/an/the). Подчеркните их.",
      vocabulary: [
        { word: "name", translation: "имя" },
        { word: "student", translation: "студент" },
        { word: "university", translation: "университет" },
        { word: "big", translation: "большой" },
        { word: "modern", translation: "современный" },
        { word: "family", translation: "семья" },
        { word: "small", translation: "маленький" },
        { word: "town", translation: "город (небольшой)" },
        { word: "south", translation: "юг" },
        { word: "mother", translation: "мать" },
        { word: "teacher", translation: "учитель" },
        { word: "father", translation: "отец" },
        { word: "engineer", translation: "инженер" },
        { word: "kind", translation: "добрый" },
        { word: "friendly", translation: "дружелюбный" },
        { word: "sister", translation: "сестра" },
        { word: "school", translation: "школа" },
        { word: "flat", translation: "квартира" },
        { word: "clean", translation: "чистый" },
        { word: "comfortable", translation: "удобный" },
        { word: "room", translation: "комната" },
        { word: "desk", translation: "стол (письменный)" },
        { word: "chair", translation: "стул" },
        { word: "bookshelf", translation: "книжная полка" },
        { word: "full", translation: "полный" },
        { word: "happy", translation: "счастливый" },
        { word: "tall", translation: "высокий" },
        { word: "young", translation: "молодой" },
        { word: "beautiful", translation: "красивый" },
        { word: "interesting", translation: "интересный" },
      ],
      lifehack:
        "Когда читаешь английский текст, сначала найди все глаголы — они показывают структуру предложения. В этом тексте почти все глаголы — это To Be (is/are/am). Это типичный текст уровня A1.",
    },
    {
      id: "reading-2",
      text: "This is a photo of my friend. His name is Arman. He is 26 years old. He is a doctor at a big hospital in the city centre. The hospital is new and very modern. Arman is tall and handsome. He is also very intelligent and hardworking. His wife is a nurse. Her name is Aliya. She is kind and gentle. They are a happy family. Their flat is in a quiet part of the city. It is not very big, but it is beautiful and comfortable. There is a small garden near the building. The garden is full of flowers. Arman and Aliya are good neighbours and good friends.",
      wordCount: 110,
      taskInstruction:
        "Читайте текст. Обратите внимание на артикли и прилагательные.",
      vocabulary: [
        { word: "photo", translation: "фотография" },
        { word: "friend", translation: "друг" },
        { word: "doctor", translation: "врач" },
        { word: "hospital", translation: "больница" },
        { word: "city centre", translation: "центр города" },
        { word: "new", translation: "новый" },
        { word: "handsome", translation: "красивый (о мужч.)" },
        { word: "intelligent", translation: "умный" },
        { word: "hardworking", translation: "трудолюбивый" },
        { word: "wife", translation: "жена" },
        { word: "nurse", translation: "медсестра" },
        { word: "gentle", translation: "мягкий, нежный" },
        { word: "happy", translation: "счастливый" },
        { word: "quiet", translation: "тихий" },
        { word: "part", translation: "часть, район" },
        { word: "beautiful", translation: "красивый" },
        { word: "garden", translation: "сад" },
        { word: "near", translation: "рядом, около" },
        { word: "building", translation: "здание" },
        { word: "full of", translation: "полный чего-либо" },
        { word: "flowers", translation: "цветы" },
        { word: "neighbour", translation: "сосед" },
        { word: "also", translation: "также, тоже" },
        { word: "their", translation: "их" },
        { word: "centre", translation: "центр" },
        { word: "husband", translation: "муж" },
        { word: "tall", translation: "высокий" },
        { word: "comfortable", translation: "удобный" },
        { word: "good", translation: "хороший" },
      ],
      lifehack:
        "Слова «also» (тоже, также) и «but» (но) — это соединительные слова (linking words). Они соединяют идеи в тексте. Запомни их сразу — они встречаются в каждом тексте IELTS.",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Напиши 3–4 предложения о себе: имя, возраст, профессия/статус, город.",
      requirements: [
        "To Be: am, is, are — в каждом предложении",
        "Артикль a или an перед профессией",
        "Минимум 2 прилагательных из словаря урока",
      ],
      example: "My name is ... I am ... years old. I am a ... My city is ...",
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши 4 предложения о члене своей семьи: имя, возраст, профессия, описание характера.",
      structure: [
        "Предложение 1: His/Her name is ... He/She is ... years old.",
        "Предложение 2: He/She is a [профессия] (a/an + профессия!).",
        "Предложение 3: He/She is [прилагательное] and [прилагательное].",
        "Предложение 4: He/She is my [мать/отец/брат/сестра] and [он/она очень важен для меня].",
      ],
      requirements: [
        "His/Her + имя + возраст",
        "a/an перед профессией",
        "минимум 2 прилагательных",
      ],
    },
  ],

  completedTopics: [
    "Grammar: To Be (am/is/are) · Артикли (a/an/the) · Базовые прилагательные · Вопросы о себе",
    "2 текста для чтения (105–110 слов) + 60 слов с переводом",
    "2 Writing Tasks — первые предложения на английском!",
  ],
};

export default a1;
