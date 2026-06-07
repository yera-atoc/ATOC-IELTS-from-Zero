import type { Lesson } from "@/types/lesson";

const a4: Lesson = {
  id: "a4",
  level: "A4",
  band: "A",
  number: 4,
  title: "Present Simple He/She/It · Does/Doesn't",
  subtitle: "Absolute Beginner",
  grammarTopics: [
    "Present Simple (He/She/It)",
    "Does / Doesn't",
    "Вопросы и краткие ответы",
    "Описание людей: работа и привычки",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "1 абзац (50–60 слов)",
  prevLesson: "a3",
  nextLesson: "a5",

  grammar: [
    {
      id: "grammar-1",
      title: "Present Simple: He / She / It",
      explanation:
        "В уроке A3 мы изучили Present Simple для I/You/We/They. Теперь He/She/It — здесь глагол меняется: добавляется окончание -s или -es.",
      tables: [
        {
          headers: ["Местоимение", "Правило", "Пример", "Перевод"],
          rows: [
            ["He", "глагол + s / es", "He works at a bank.", "Он работает в банке."],
            ["She", "глагол + s / es", "She studies English every day.", "Она изучает английский каждый день."],
            ["It", "глагол + s / es", "It costs twenty dollars.", "Это стоит двадцать долларов."],
            ["I / You / We / They", "глагол без изменений", "I work. You study. They live.", "Без окончания -s!"],
          ],
        },
        {
          headers: ["Окончание глагола", "Правило", "Примеры"],
          rows: [
            ["Большинство глаголов", "+ s", "work → works · read → reads · play → plays"],
            ["-s, -sh, -ch, -x, -o", "+ es", "watch → watches · wash → washes · go → goes · do → does"],
            ["согласная + y", "y → ies", "study → studies · carry → carries · fly → flies"],
            ["have", "исключение!", "have → has (не haves!)"],
            ["be", "исключение!", "be → is (не bes!)"],
          ],
        },
      ],
      correctExamples: [
        "She works in a bank.",
        "He studies English.",
        "My sister has a car.",
        "It costs a lot.",
      ],
      incorrectExamples: [
        "She work in a bank.",
        "He study English.",
        "My sister have a car.",
        "It cost a lot.",
      ],
      ieltsHint:
        "В IELTS Writing когда описываешь третье лицо — страну, компанию, человека — всегда нужно -s/-es: «The company employs...» «The government provides...» «The data shows...» Это фундаментальная ошибка если пропустить -s.",
      taskInstruction:
        "Поставь глаголы в правильную форму (с -s/-es/-ies или без).\n• My brother (work) at a hospital. He (start) work at eight o'clock.\n• She (study) economics. Her university (have) three thousand students.\n• My mother (cook) dinner every evening. She (not watch) TV late.\n• The train (leave) at nine. It (take) two hours to get there.\n• Затем составь 4 предложения о члене своей семьи, используя He/She + глагол с -s.",
    },
    {
      id: "grammar-2",
      title: "Does / Doesn't: отрицание и вопросы",
      explanation:
        "Для He/She/It вспомогательный глагол — DOES (не DO). В отрицании и вопросах основной глагол возвращается к базовой форме — без -s!",
      tables: [
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Утверждение", "He/She/It + глагол(s)", "She works every day.", "Она работает каждый день."],
            ["Отрицание", "He/She/It + doesn't + глагол", "She doesn't work on Sundays.", "Она не работает по воскресеньям."],
            ["Вопрос", "Does + He/She/It + глагол + ?", "Does she work every day?", "Она работает каждый день?"],
            ["Краткий ответ да", "Yes, he/she/it does.", "Yes, she does.", "Да."],
            ["Краткий ответ нет", "No, he/she/it doesn't.", "No, she doesn't.", "Нет."],
          ],
        },
        {
          headers: ["Вопрос", "Пример", "Перевод"],
          rows: [
            ["What does he/she do?", "What does she do at weekends?", "Что она делает в выходные?"],
            ["Where does he/she live?", "Where does he work?", "Где он работает?"],
            ["When does he/she...?", "When does she usually wake up?", "Когда она обычно просыпается?"],
            ["How often does he/she...?", "How often does he exercise?", "Как часто он занимается спортом?"],
            ["How much does it cost?", "How much does this book cost?", "Сколько стоит эта книга?"],
            ["What does it mean?", "What does this word mean?", "Что значит это слово?"],
          ],
        },
      ],
      correctExamples: [
        "Does she work here?",
        "He doesn't study.",
        "What does he do?",
      ],
      incorrectExamples: [
        "Does she works here?",
        "He doesn't studies.",
        "What does he does?",
      ],
      ieltsHint:
        "«What does he/she do?» — типичный вопрос Speaking Part 1 про профессию другого человека. «What does your father do?» «He works as an engineer.» Глагол DO в вопросе — Does, в ответе — works (с -s!).",
      taskInstruction:
        "Составь 5 вопросов с Does о члене своей семьи и ответь на них.\n• Используй: Does he/she work? Where does he/she...? What does he/she do?\n• Пример: Does your mother work? — Yes, she does. She works as a teacher.\n• Затем напиши 3 предложения с doesn't о том, что этот человек НЕ делает.",
    },
    {
      id: "grammar-3",
      title: "Present Simple: полная картина",
      explanation:
        "Теперь объединим всё: Present Simple для всех местоимений. Это фундамент английской грамматики — нужно знать на автомате.",
      tables: [
        {
          headers: ["Лицо", "Утверждение", "Отрицание", "Вопрос"],
          rows: [
            ["I", "I work", "I don't work", "Do I work?"],
            ["You", "You work", "You don't work", "Do you work?"],
            ["He", "He works", "He doesn't work", "Does he work?"],
            ["She", "She works", "She doesn't work", "Does she work?"],
            ["It", "It works", "It doesn't work", "Does it work?"],
            ["We", "We work", "We don't work", "Do we work?"],
            ["They", "They work", "They don't work", "Do they work?"],
          ],
        },
      ],
      ieltsHint:
        "В Writing Task 2 при описании людей или групп: «A typical student spends...» «The government implements...» «An individual chooses...» — всё это третье лицо ед. числа, нужна -s. Пропущенная -s — типичная ошибка Band 5.",
      taskInstruction:
        "Заполни пропуски: do, does, don't, doesn't.\n• ___ your brother work in an office? — Yes, he ___.\n• She ___ speak French, but she ___ speak Spanish.\n• What ___ your parents do at weekends? They usually ___ gardening.\n• ___ this train go to the airport? — No, it ___.\n• Why ___ you study English? Because I ___ want to travel.",
    },
    {
      id: "grammar-4",
      title: "Описание людей: работа и привычки",
      explanation:
        "В IELTS Speaking Part 1 вас попросят описать члена семьи или друга. Научись связно рассказывать о другом человеке — используя He/She + глагол с -s.",
      tables: [
        {
          headers: ["Фраза", "Перевод", "Пример"],
          rows: [
            ["He/She works as a...", "Он/она работает как...", "She works as a nurse at a big hospital."],
            ["He/She is a...", "Он/она является...", "He is a software engineer."],
            ["He/She works for...", "Он/она работает в компании...", "She works for a large international company."],
            ["He/She earns...", "Он/она зарабатывает...", "He earns a good salary."],
            ["He/She studies at...", "Он/она учится в...", "She studies at Almaty Management University."],
            ["He/She spends time...", "Он/она проводит время...", "She spends a lot of time reading."],
          ],
        },
      ],
      ieltsHint:
        "В Speaking Part 1 экзаменатор может спросить: «Tell me about a family member.» Используй структуру: возраст → профессия → ежедневная рутина → характер. 5–6 предложений с He/She + глагол(-s) — это отличный ответ.",
      taskInstruction:
        "Напиши описание члена своей семьи или друга — 5–6 предложений.\n• Структура: имя + возраст → профессия → рутина → характер\n• Обязательно: He/She works / studies / lives / has / goes / doesn't...\n• Используй минимум 2 наречия частотности (usually/often/always/never)\n• Добавь 1–2 прилагательных: He is very kind and hardworking.",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "My aunt Saule is one of my favourite people. She is forty-four years old and works as a doctor at the Central City Hospital. She specialises in children's health, so she works with young patients every day. She starts work at eight in the morning and usually finishes at five in the afternoon. Her job is very demanding, but she loves it. She says that helping children makes her happy. After work, she often goes to the gym and does yoga. She doesn't watch much television — she prefers to read medical journals or novels. At weekends, she usually visits her mother or goes for long walks in the mountains near the city. She has two cats. One is called Snowy and the other is called Pepper. She takes great care of them. Saule is a very dedicated and warm-hearted person, and everyone who meets her immediately likes her.",
      wordCount: 135,
      taskInstruction:
        "Прочитайте текст. Найдите все глаголы в форме He/She + (-s/-es). Подчеркните их. Сколько их всего?",
      vocabulary: [
        { word: "favourite", translation: "любимый" },
        { word: "specialise in", translation: "специализироваться на" },
        { word: "patient", translation: "пациент" },
        { word: "demanding", translation: "требовательный, трудный" },
        { word: "helping", translation: "помощь, помогать" },
        { word: "after work", translation: "после работы" },
        { word: "gym", translation: "спортзал" },
        { word: "yoga", translation: "йога" },
        { word: "prefer", translation: "предпочитать" },
        { word: "medical journal", translation: "медицинский журнал" },
        { word: "novel", translation: "роман, художественная книга" },
        { word: "long walk", translation: "долгая прогулка" },
        { word: "mountains", translation: "горы" },
        { word: "take care of", translation: "заботиться о" },
        { word: "dedicated", translation: "преданный, целеустремлённый" },
        { word: "warm-hearted", translation: "сердечный, добрый" },
        { word: "immediately", translation: "сразу, немедленно" },
        { word: "meet", translation: "встречать" },
        { word: "called", translation: "которого зовут" },
        { word: "one of", translation: "один из" },
        { word: "finishes", translation: "заканчивает" },
        { word: "starts", translation: "начинает" },
        { word: "makes her happy", translation: "делает её счастливой" },
        { word: "says", translation: "говорит" },
        { word: "loves", translation: "любит" },
        { word: "goes", translation: "идёт/ходит" },
        { word: "does", translation: "делает" },
        { word: "visits", translation: "навещает" },
        { word: "prefers", translation: "предпочитает" },
        { word: "likes", translation: "нравится" },
      ],
      lifehack:
        "Обрати внимание на «She says that helping children makes her happy.» — это сложное предложение с «that». Структура «глагол + that + предложение» очень часто встречается в IELTS: «It is known that... / Research shows that... / Many believe that...»",
    },
    {
      id: "reading-2",
      text: "Arsen is twenty-eight years old. He works as a software developer at a technology company in Almaty. He doesn't work in an office — he works from home most days. His working day starts at ten in the morning. He usually works until seven or eight in the evening. He earns a good salary and enjoys his job, but he sometimes finds it lonely. He doesn't have many colleagues nearby because his team is spread across different countries. His company has offices in Kazakhstan, Russia, and Germany. Arsen speaks three languages: Kazakh, Russian, and English. He uses English every day in his work because his team communicates mainly in English. After work, he usually plays online games with his friends or goes to a boxing club. He goes to the boxing club three times a week. He doesn't eat much junk food — he tries to stay healthy and fit. He lives alone in a small but comfortable flat.",
      wordCount: 140,
      taskInstruction:
        "Читайте текст. Найдите все формы Does/Doesn't и вопросы. Составьте 3 своих вопроса по тексту.",
      vocabulary: [
        { word: "software developer", translation: "разработчик программного обеспечения" },
        { word: "technology", translation: "технологии" },
        { word: "from home", translation: "из дома, удалённо" },
        { word: "most days", translation: "большинство дней" },
        { word: "working day", translation: "рабочий день" },
        { word: "until", translation: "до (времени)" },
        { word: "earns", translation: "зарабатывает" },
        { word: "salary", translation: "зарплата" },
        { word: "lonely", translation: "одиноко" },
        { word: "colleague", translation: "коллега" },
        { word: "nearby", translation: "рядом, поблизости" },
        { word: "spread across", translation: "распределён по" },
        { word: "communicates", translation: "общается" },
        { word: "mainly", translation: "главным образом, в основном" },
        { word: "boxing club", translation: "секция бокса" },
        { word: "three times a week", translation: "три раза в неделю" },
        { word: "junk food", translation: "нездоровая еда" },
        { word: "tries", translation: "старается, пытается" },
        { word: "stay healthy", translation: "оставаться здоровым" },
        { word: "fit", translation: "в форме" },
        { word: "alone", translation: "один, в одиночестве" },
        { word: "comfortable", translation: "удобный, комфортный" },
        { word: "online games", translation: "онлайн-игры" },
        { word: "uses", translation: "использует" },
        { word: "finds", translation: "находит, считает" },
        { word: "lives", translation: "живёт" },
        { word: "speaks", translation: "говорит (на языке)" },
        { word: "works", translation: "работает" },
        { word: "enjoys", translation: "наслаждается, любит" },
        { word: "starts", translation: "начинается" },
      ],
      lifehack:
        "«He tries to stay healthy» — глагол try для He/She принимает форму tries (y→ies). Похожие: carry→carries, study→studies, fly→flies. Проверяй глаголы на -y в сочинении!",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши типичный рабочий день своего родителя, родственника или друга. Напиши 1 абзац (50–60 слов).",
      requirements: [
        "He/She works / studies / lives / goes / has — минимум 5 глаголов с -s/-es",
        "1 отрицание: He/She doesn't...",
        "Точное время: starts work at... / finishes at...",
        "Минимум 2 наречия частотности: usually/always/often/sometimes/never",
      ],
      example: "My mother is a teacher. She works at a school in the city centre...",
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Напиши о двух людях — о себе и о ком-то другом. Покажи разницу между I/We (без -s) и He/She (с -s). 50–60 слов.",
      structure: [
        "Предложения 1–2: о себе (I work / I study / I don't...)",
        "Предложения 3–4: о другом человеке (He/She works / He/She doesn't...)",
        "Предложение 5–6: сходства или различия (We both... / But he/she...)",
      ],
      requirements: [
        "I без -s, He/She с -s",
        "минимум 1 don't и 1 doesn't",
        "наречия частотности",
      ],
      example:
        "I study at university. I don't work. My brother works as a programmer. He doesn't study anymore. We both live with our parents.",
    },
  ],

  completedTopics: [
    "Grammar: Present Simple He/She/It · Does/Doesn't · Полная таблица · Описание людей",
    "2 текста для чтения (135–140 слов) + 60 слов с переводом",
    "2 Writing Tasks — описание другого человека (50–60 слов)",
  ],
};

export default a4;
