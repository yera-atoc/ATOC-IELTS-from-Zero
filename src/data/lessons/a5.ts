import type { Lesson } from "@/types/lesson";

const a5: Lesson = {
  id: "a5",
  level: "A5",
  band: "A",
  number: 5,
  title: "Have/Has Got · Can/Can't · Предлоги места",
  subtitle: "Absolute Beginner",
  grammarTopics: [
    "Have / Has Got",
    "Can / Can't",
    "Предлоги места",
    "Can: просьбы, разрешения, предложения",
  ],
  readingInfo: "2 текста + 60 слов",
  writingInfo: "1 абзац (60–70 слов)",
  prevLesson: "a4",
  nextLesson: "a6",

  grammar: [
    {
      id: "grammar-1",
      title: "Have Got / Has Got",
      explanation:
        "«Have got» и «has got» используются для описания владения (что у кого есть) и характеристик (внешность, качества). В разговорном английском это очень частая форма.",
      tables: [
        {
          headers: ["Местоимение", "Форма", "Пример", "Перевод"],
          rows: [
            ["I / You / We / They", "have got", "I have got a new laptop.", "У меня есть новый ноутбук."],
            ["He / She / It", "has got", "She has got blue eyes.", "У неё голубые глаза."],
            ["I/You/We/They (сокр.)", "'ve got", "I've got two brothers.", "У меня есть два брата."],
            ["He/She/It (сокр.)", "'s got", "He's got a nice car.", "У него есть красивая машина."],
          ],
        },
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Утверждение", "I have got / She has got", "I've got a dog.", "У меня есть собака."],
            ["Отрицание", "I haven't got / She hasn't got", "She hasn't got a car.", "У неё нет машины."],
            ["Вопрос", "Have you got...? / Has she got...?", "Have you got a pen?", "У тебя есть ручка?"],
            ["Краткий ответ да", "Yes, I have. / Yes, she has.", "Yes, I have.", "Да, есть."],
            ["Краткий ответ нет", "No, I haven't. / No, she hasn't.", "No, she hasn't.", "Нет, нет."],
          ],
        },
      ],
      correctExamples: [
        "She has got a car.",
        "Has she got a sister?",
        "I have got two dogs.",
      ],
      incorrectExamples: [
        "She have got a car.",
        "Have she got a sister?",
        "I has got two dogs.",
      ],
      ieltsHint:
        "В Speaking Part 1: «Have you got any brothers or sisters?» «Has your city got good transport?» — отвечай коротко и развёрнуто: «Yes, I have. I've got one brother. He's got a family of his own now.»",
      taskInstruction:
        "Напиши 6 предложений с have got / has got о себе и членах своей семьи.\n• 2 предложения о владении вещами (I've got / He's got...)\n• 2 предложения о внешности (She's got... / He's got...)\n• 1 отрицание (I haven't got / She hasn't got...)\n• 1 вопрос и краткий ответ (Have you got...? Yes, I have.)",
    },
    {
      id: "grammar-2",
      title: "Can / Can't: умения и возможности",
      explanation:
        "«Can» — модальный глагол, обозначающий умение, способность или возможность. Это один из самых простых модальных глаголов — форма не меняется ни для одного местоимения.",
      tables: [
        {
          headers: ["Форма", "Структура", "Пример", "Перевод"],
          rows: [
            ["Утверждение", "can + глагол (без to)", "I can swim very well.", "Я умею хорошо плавать."],
            ["Отрицание", "can't / cannot + глагол", "She can't drive a car.", "Она не умеет водить машину."],
            ["Вопрос", "Can + подлежащее + глагол + ?", "Can you speak English?", "Ты умеешь говорить по-английски?"],
            ["Краткий ответ да", "Yes, I/he/she/they can.", "Yes, I can.", "Да, умею."],
            ["Краткий ответ нет", "No, I/he/she/they can't.", "No, she can't.", "Нет, не умеет."],
          ],
        },
        {
          headers: ["Умение", "Перевод", "Умение", "Перевод"],
          rows: [
            ["swim", "плавать", "drive a car", "водить машину"],
            ["cook", "готовить", "play the piano", "играть на пианино"],
            ["speak English", "говорить по-английски", "ride a bike", "ездить на велосипеде"],
            ["draw / paint", "рисовать", "sing", "петь"],
            ["use a computer", "пользоваться компьютером", "dance", "танцевать"],
            ["sew", "шить", "repair things", "чинить вещи"],
            ["speak a foreign language", "говорить на иностранном языке", "play chess", "играть в шахматы"],
          ],
        },
      ],
      correctExamples: [
        "She can swim.",
        "He can drive.",
        "Can you speak English?",
        "I can't cook.",
      ],
      incorrectExamples: [
        "She cans swim.",
        "He can to drive.",
        "Can you to speak English?",
        "I can't to cook.",
      ],
      ieltsHint:
        "В Speaking Part 1: «What can you do well?» «Can you cook?» — отвечай уверенно и расширяй ответ: «Yes, I can. I can cook quite well actually. I usually cook dinner for my family at weekends.»",
      taskInstruction:
        "Напиши 7 предложений о своих умениях и умениях членов семьи.\n• 3 предложения: I can... (что ты умеешь делать хорошо)\n• 2 предложения: I can't... (что ты не умеешь)\n• 2 предложения о другом человеке: He/She can... / He/She can't...\n• Пример: I can speak two languages. I can't play any musical instrument. My sister can draw very well.",
    },
    {
      id: "grammar-3",
      title: "Предлоги места",
      explanation:
        "Предлоги места показывают ГДЕ что-то находится. Без них невозможно описать комнату, город или ситуацию — а это нужно в каждом тексте IELTS.",
      tables: [
        {
          headers: ["Предлог", "Перевод", "Пример", "Перевод примера"],
          rows: [
            ["in", "в (внутри)", "The book is in the bag.", "Книга в сумке."],
            ["on", "на (поверхности)", "The cup is on the table.", "Чашка на столе."],
            ["at", "у, при, на (точка)", "She is at the door. / at school", "Она у двери. / в школе"],
            ["under", "под", "The cat is under the chair.", "Кошка под стулом."],
            ["above / over", "над", "The lamp is above the desk.", "Лампа над столом."],
            ["next to / beside", "рядом с", "The bank is next to the café.", "Банк рядом с кафе."],
            ["between", "между", "The shop is between the park and the hotel.", "Магазин между парком и отелем."],
            ["in front of", "перед", "There is a fountain in front of the building.", "Перед зданием есть фонтан."],
            ["behind", "позади, за", "The garden is behind the house.", "Сад за домом."],
            ["opposite", "напротив", "The school is opposite the library.", "Школа напротив библиотеки."],
            ["near / close to", "около, рядом", "The metro is near my flat.", "Метро рядом с моей квартирой."],
            ["in the corner of", "в углу", "There is a sofa in the corner of the room.", "В углу комнаты есть диван."],
          ],
        },
      ],
      correctExamples: [
        "The book is in the bag.",
        "She is at the door.",
        "There is a picture on the wall.",
      ],
      incorrectExamples: [
        "The book is on the bag.",
        "She is in the door.",
        "There is a picture in the wall.",
      ],
      ieltsHint:
        "В Writing Task 1 при описании карты или диаграммы: «The library is located opposite the school.» «The park is situated between the hotel and the river.» «The factory is in the north of the city.» Предлоги места — обязательный инструмент.",
      taskInstruction:
        "Опиши расположение 6 предметов в своей комнате или квартире.\n• Используй минимум 6 разных предлогов из таблицы\n• Пример: My desk is next to the window. There is a shelf above the desk.\n• Затем опиши 3 места в твоём районе (where is the school / café / park?)",
    },
    {
      id: "grammar-4",
      title: "Can: просьбы, разрешения и предложения",
      explanation:
        "Помимо умений, «can» используется в разговорной речи для вежливых просьб, разрешений и предложений помощи. Это важно для Speaking Part 1 и 2.",
      tables: [
        {
          headers: ["Функция", "Структура", "Пример", "Перевод"],
          rows: [
            ["Просьба", "Can you...?", "Can you help me, please?", "Не могли бы вы помочь мне?"],
            ["Вежливая просьба", "Could you...?", "Could you repeat that, please?", "Не могли бы вы повторить?"],
            ["Разрешение", "Can I...?", "Can I open the window?", "Можно открыть окно?"],
            ["Вежливое разрешение", "Could I...?", "Could I ask you a question?", "Могу я задать вопрос?"],
            ["Предложение помощи", "Can I help you?", "Can I help you with that?", "Могу я помочь тебе с этим?"],
            ["Возможность", "can (= it is possible)", "You can park here.", "Здесь можно парковаться."],
          ],
        },
      ],
      ieltsHint:
        "В Speaking Part 1 тебя могут спросить: «What languages can you speak?» «Can you cook?» «What can't you do well?» Практикуй ответы: «I can speak... I can't... but I'm trying to learn.» — это показывает честность и уверенность.",
      taskInstruction:
        "Напиши 5 предложений о том, что можно/нельзя делать в твоём городе или университете.\n• Используй: You can... / You can't... / Students can... / People can't...\n• Пример: You can visit the Green Bazaar every day. Students can use the gym for free.\n• Добавь предлоги места: It is located... / It is next to... / It is near...",
    },
  ],

  readings: [
    {
      id: "reading-1",
      text: "My name is Aizat. I am a student at a language school in the centre of Almaty. The school has got a very modern building. It has got twelve classrooms, a library, a computer lab, and a small café on the ground floor. The library has got over five thousand books and you can borrow them for two weeks. The computer lab is on the second floor, next to the main office. There is a small garden behind the building where students can sit and relax between classes. I have got a good group of classmates. We have got students from different countries in our class. Some of them can speak four or five languages! I can speak Kazakh, Russian, and English, but I can't speak any other language yet. My classroom is on the third floor. It has got large windows and there is a beautiful view of the mountains from the window on the right side of the room.",
      wordCount: 140,
      taskInstruction:
        "Прочитайте текст. Найдите: have/has got, can/can't и все предлоги места. Выпишите их в список.",
      vocabulary: [
        { word: "language school", translation: "языковая школа" },
        { word: "centre", translation: "центр" },
        { word: "modern", translation: "современный" },
        { word: "computer lab", translation: "компьютерный класс" },
        { word: "ground floor", translation: "первый этаж (нулевой)" },
        { word: "borrow", translation: "брать/одалживать" },
        { word: "main office", translation: "главный офис" },
        { word: "garden", translation: "сад" },
        { word: "behind", translation: "позади, за" },
        { word: "relax", translation: "отдыхать, расслабляться" },
        { word: "between classes", translation: "между занятиями" },
        { word: "classmate", translation: "одноклассник" },
        { word: "different countries", translation: "разные страны" },
        { word: "language", translation: "язык" },
        { word: "yet", translation: "ещё (в отрицаниях)" },
        { word: "third floor", translation: "третий этаж" },
        { word: "large", translation: "большой, крупный" },
        { word: "view", translation: "вид" },
        { word: "right side", translation: "правая сторона" },
        { word: "next to", translation: "рядом с" },
        { word: "over five thousand", translation: "более пяти тысяч" },
        { word: "two weeks", translation: "две недели" },
        { word: "some of them", translation: "некоторые из них" },
        { word: "second floor", translation: "второй этаж" },
        { word: "between", translation: "между" },
        { word: "in front of", translation: "перед" },
        { word: "above", translation: "над" },
        { word: "on the left", translation: "слева" },
        { word: "on the right", translation: "справа" },
        { word: "opposite", translation: "напротив" },
      ],
      lifehack:
        "«You can borrow them for two weeks» — конструкция «can + borrow» значит «разрешено взять». В академических текстах IELTS часто встречается: «Visitors can access the exhibition for free.» / «Citizens can apply online.»",
    },
    {
      id: "reading-2",
      text: "Dmitri is twenty-two years old and lives in a small but comfortable flat on the fourth floor of a residential building. His flat has got two rooms, a kitchen, and a bathroom. The kitchen is next to the entrance hall. The living room has got a sofa, a coffee table, and a large bookshelf. The bookshelf is on the wall opposite the window. There is a small desk in the corner of the living room where Dmitri usually studies in the evenings. He has got a good internet connection and a fast computer on his desk. He can work from home, which he does three days a week. In the bedroom, there is a wardrobe behind the door and a bed next to the window. Dmitri can cook simple meals, but he can't bake. He usually prepares breakfast and lunch at home, but he can't cook elaborate dinners. Fortunately, there is a good restaurant just below his flat on the ground floor, and he often eats dinner there.",
      wordCount: 145,
      taskInstruction:
        "Читайте текст. Посчитайте все предлоги места (in, on, at, next to, behind и т.д.). Найдите все can/can't.",
      vocabulary: [
        { word: "comfortable", translation: "удобный, комфортный" },
        { word: "residential", translation: "жилой" },
        { word: "entrance hall", translation: "прихожая" },
        { word: "living room", translation: "гостиная" },
        { word: "sofa", translation: "диван" },
        { word: "coffee table", translation: "журнальный столик" },
        { word: "bookshelf", translation: "книжная полка" },
        { word: "opposite", translation: "напротив" },
        { word: "corner", translation: "угол" },
        { word: "usually studies", translation: "обычно занимается" },
        { word: "internet connection", translation: "интернет-соединение" },
        { word: "work from home", translation: "работать из дома" },
        { word: "wardrobe", translation: "шкаф (для одежды)" },
        { word: "bedroom", translation: "спальня" },
        { word: "simple meal", translation: "простое блюдо" },
        { word: "bake", translation: "печь (выпечку)" },
        { word: "elaborate", translation: "сложный, изысканный" },
        { word: "fortunately", translation: "к счастью" },
        { word: "below", translation: "ниже, под" },
        { word: "ground floor", translation: "первый/нулевой этаж" },
        { word: "fourth floor", translation: "четвёртый этаж" },
        { word: "bathroom", translation: "ванная комната" },
        { word: "kitchen", translation: "кухня" },
        { word: "prepares", translation: "готовит" },
        { word: "fast", translation: "быстрый" },
        { word: "just", translation: "прямо, именно" },
        { word: "which", translation: "который (относ. мест.)" },
        { word: "three days a week", translation: "три дня в неделю" },
        { word: "often", translation: "часто" },
        { word: "usually", translation: "обычно" },
      ],
      lifehack:
        "Слово «fortunately» (к счастью) — это discourse marker, маркер связи. Выучи и его антоним: «unfortunately» (к сожалению). В IELTS Writing они добавляют оценочный тон и делают текст богаче. Band 6+!",
    },
  ],

  writingTasks: [
    {
      id: "writing-1",
      title: "Writing Task 1",
      instruction:
        "Опиши своё место учёбы или работы: что там есть, где что находится. 60–70 слов.",
      requirements: [
        "It has got... / There is... / There are... — описание того, что есть",
        "Минимум 4 предлога места: next to / behind / on the / in the corner of...",
        "1–2 предложения с can: Students can... / You can... / People can't...",
        "Прилагательные: modern, large, comfortable, bright, quiet, busy...",
      ],
      example: "My university is located in the centre of the city. It has got ten faculties...",
    },
    {
      id: "writing-2",
      title: "Writing Task 2",
      instruction:
        "Опиши себя: что у тебя есть, что ты умеешь и не умеешь делать. 60–70 слов.",
      structure: [
        "Предложения 1–2: I've got... (что у тебя есть — вещи, семья, качества)",
        "Предложения 3–4: I can... (что ты умеешь — минимум 2 умения)",
        "Предложение 5: I can't... but I'd like to learn... (что хочешь научиться)",
        "Предложение 6: описание себя или своего места жительства с предлогом места",
      ],
      requirements: [
        "have got / has got",
        "can и can't",
        "предлоги места",
        "60–70 слов",
      ],
      example: "I've got a small but cosy room. I've got one sister. I can speak three languages...",
    },
  ],

  completedTopics: [
    "Grammar: Have/Has Got · Can/Can't · Предлоги места · Просьбы и разрешения",
    "2 текста для чтения (140–145 слов) + 60 слов с переводом",
    "2 Writing Tasks — описание места и себя (60–70 слов)",
  ],
};

export default a5;
