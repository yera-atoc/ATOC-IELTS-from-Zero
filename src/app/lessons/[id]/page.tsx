'use client';
import { useParams, useRouter } from 'next/navigation';

const LESSON_DATA: Record<string, {
  title: string;
  level: string;
  subtitle: string;
  sections: Array<{
    type: 'grammar' | 'reading' | 'writing' | 'tip' | 'task';
    title: string;
    content: string;
    table?: Array<string[]>;
  }>;
}> = {
  a2: {
    title: 'Nouns: singular/plural',
    level: 'A2',
    subtitle: 'Absolute Beginner',
    sections: [
      {
        type: 'grammar',
        title: 'Grammar 1 — Существительные: единственное и множественное число',
        content: 'В английском языке множественное число существительных обычно образуется добавлением -s или -es. Но есть важные правила и исключения.',
        table: [
          ['Правило', 'Окончание', 'Примеры'],
          ['Большинство слов', '+ s', 'book → books · cat → cats · student → students'],
          ['Окончание -s, -ss, -sh, -ch, -x', '+ es', 'bus → buses · class → classes · dish → dishes'],
          ['Согласная + y', 'y → ies', 'city → cities · country → countries · family → families'],
          ['Окончание -f / -fe', 'f → ves', 'leaf → leaves · wife → wives · life → lives'],
          ['Окончание -o (некоторые)', '+ es', 'tomato → tomatoes · potato → potatoes'],
          ['Окончание -o (другие)', '+ s', 'photo → photos · piano → pianos'],
        ],
      },
      {
        type: 'tip',
        title: '⚠️ Неправильные формы — запомни!',
        content: 'man → men · woman → women · child → children · person → people · tooth → teeth · foot → feet · mouse → mice · sheep → sheep · fish → fish',
      },
      {
        type: 'tip',
        title: '📌 IELTS подсказка',
        content: 'В Writing Task 1 ошибки в множественном числе — частый минус. «The number of students» (не student). «Several countries» (не country). Проверяй существительные после цифр и слов many/several/a few!',
      },
      {
        type: 'task',
        title: '✏️ Задание 1',
        content: 'Образуй множественное число от этих слов и составь предложение с каждым.\n• city, country, woman, child, tooth, photo, class, leaf\n• Пример: city → cities. There are many beautiful cities in Kazakhstan.',
      },
      {
        type: 'grammar',
        title: 'Grammar 2 — This / That / These / Those',
        content: 'Эти слова указывают на предметы — «вот это» (рядом) или «вон то» (далеко).',
        table: [
          ['Слово', 'Число', 'Расстояние', 'Пример'],
          ['this', 'единственное', 'близко', 'This is my book.'],
          ['that', 'единственное', 'далеко', 'That is her car.'],
          ['these', 'множественное', 'близко', 'These are my friends.'],
          ['those', 'множественное', 'далеко', 'Those are big buildings.'],
        ],
      },
      {
        type: 'task',
        title: '✏️ Задание 2',
        content: 'Посмотри вокруг себя. Составь 6 предложений: 2 с this, 2 с these, 1 с that, 1 с those.\n• This is my [предмет]. It is [прилагательное].\n• These are my [предметы]. They are [прилагательное].',
      },
      {
        type: 'grammar',
        title: 'Grammar 3 — Числа и возраст',
        content: 'Числа — это основа любого языка. В IELTS числа встречаются в каждом тексте, в каждом графике, в каждом задании.\n\nЧисла 1–20: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.\n\nВозраст: I am 24 years old. / She is 35 years old. / How old are you?\n\n⚠️ Внимание: forty (40) — не fourty! Числа от 21 до 99 пишутся через дефис: twenty-one, thirty-five.',
      },
      {
        type: 'grammar',
        title: 'Grammar 4 — There is / There are',
        content: 'Конструкция There is / There are используется, чтобы сказать, что что-то существует или находится где-либо.',
        table: [
          ['Форма', 'Пример', 'Перевод'],
          ['There is + a/an + сущ.', 'There is a book on the table.', 'На столе есть книга.'],
          ['There are + сущ.', 'There are three windows in the room.', 'В комнате три окна.'],
          ['There isn\'t a...', 'There isn\'t a café near here.', 'Рядом нет кафе.'],
          ['There aren\'t any...', 'There aren\'t any students.', 'Нет студентов.'],
          ['Is there a...?', 'Is there a hospital nearby?', 'Рядом есть больница?'],
          ['Are there any...?', 'Are there any good restaurants?', 'Есть хорошие рестораны?'],
        ],
      },
      {
        type: 'reading',
        title: 'Reading 1',
        content: 'Welcome to our school! This is the Central Language School in Almaty. There are fifteen classrooms in the building. Each classroom is big and bright. There are twenty desks and twenty chairs in each room. There is also a whiteboard and a projector in every classroom. These rooms are very modern. That old building next to the school is the library. There are thousands of books in the library. There are also three computer rooms with forty computers in total. The school has two canteens. There is one canteen on the first floor and one on the third floor. There are twelve teachers at our school. Eight of them are women and four are men. Those teachers are very experienced and friendly. This is a great place to study English!\n\n~120 слов',
      },
      {
        type: 'reading',
        title: 'Reading 2',
        content: 'My name is Bekzod. I am nineteen years old and I am a first-year student. This is my first month at university. My university is in the city centre. It is a large, modern building with ten floors. There are four faculties and about three thousand students. My faculty is the Faculty of Economics. There are sixty students in my year. These students are from different cities of Kazakhstan. Some are from Almaty, some are from Astana, and some are from smaller towns. There are two students from my school in my group. That is very nice! There is a big sports hall on the second floor. There are also two cafés and a bookshop in the building. Those cafés are always busy in the morning. University life is exciting and interesting!\n\n~125 слов',
      },
      {
        type: 'writing',
        title: 'Writing Task 1',
        content: 'Опиши свою комнату или квартиру. Напиши 5–6 предложений.\n\nИспользуй обязательно:\n• There is... и There are... (минимум по 2 раза)\n• This is... или These are... (хотя бы 1 раз)\n• Прилагательные: big, small, modern, comfortable, bright\n• Числа: сколько комнат, окон, полок\n\nПример: My room is not very big. There is a desk near the window...',
      },
      {
        type: 'writing',
        title: 'Writing Task 2',
        content: 'Опиши свою семью. Напиши о 3–4 членах семьи, используя числа и возраст.\n\n• Предложение 1: There are [число] people in my family.\n• Предложения 2–5: имя, возраст, профессия каждого члена семьи.\n• Используй: He/She is [число] years old.\n\nПример: There are four people in my family. My mother is forty-five years old. She is a teacher...',
      },
    ],
  },
  a1: {
    title: 'To Be (am/is/are)',
    level: 'A1',
    subtitle: 'Absolute Beginner',
    sections: [
      {
        type: 'grammar',
        title: 'Grammar — To Be',
        content: 'Глагол to be — самый важный глагол в английском языке. Он означает «быть», «являться», «находиться».',
        table: [
          ['Местоимение', 'Форма', 'Пример'],
          ['I', 'am', 'I am a student.'],
          ['You', 'are', 'You are kind.'],
          ['He / She / It', 'is', 'She is a teacher.'],
          ['We / They', 'are', 'They are friends.'],
        ],
      },
      {
        type: 'tip',
        title: '📌 IELTS подсказка',
        content: 'To be используется везде — в Speaking, Writing, Reading. Запомни все формы наизусть: am, is, are, was, were.',
      },
    ],
  },
};

const SECTION_COLORS: Record<string, { bg: string; border: string; label: string; labelColor: string }> = {
  grammar: { bg: '#F0F0FF', border: '#5E5CE6', label: 'Грамматика', labelColor: '#5E5CE6' },
  reading: { bg: '#F0F7FF', border: '#0A84FF', label: 'Чтение', labelColor: '#0A84FF' },
  writing: { bg: '#F0FFF4', border: '#30D158', label: 'Письмо', labelColor: '#30D158' },
  tip: { bg: '#FFFBF0', border: '#FF9F0A', label: 'Подсказка', labelColor: '#FF9F0A' },
  task: { bg: '#FFF0F0', border: '#FF375F', label: 'Задание', labelColor: '#FF375F' },
};

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string)?.toLowerCase() ?? '';
  const lesson = LESSON_DATA[id];

  if (!lesson) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F5F5F7', padding: 28 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1D1D1F', marginBottom: 8 }}>Урок не найден</h1>
        <p style={{ color: '#8E8E93', marginBottom: 24 }}>Этот урок ещё в разработке</p>
        <button onClick={() => router.push('/lessons')} style={{ background: '#5E5CE6', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
          ← Назад к урокам
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh', paddingBottom: 40 }}>
      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E8E8ED', padding: '16px 20px', position: 'sticky', top: 0, zIndex: 10 }}>
        <button onClick={() => router.push('/lessons')} style={{ background: 'none', border: 'none', color: '#5E5CE6', fontSize: 15, fontWeight: 600, cursor: 'pointer', padding: 0, marginBottom: 12 }}>
          ← Уроки
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#EEEDFE', color: '#5E5CE6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>
            {lesson.level}
          </div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#1D1D1F' }}>{lesson.title}</div>
            <div style={{ fontSize: 12, color: '#8E8E93' }}>{lesson.subtitle}</div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {lesson.sections.map((section, i) => {
          const style = SECTION_COLORS[section.type];
          return (
            <div key={i} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E8ED' }}>
              {/* Section header */}
              <div style={{ background: style.bg, borderLeft: `4px solid ${style.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: style.labelColor, background: '#fff', padding: '2px 8px', borderRadius: 20, border: `1px solid ${style.border}` }}>
                  {style.label}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F' }}>{section.title}</span>
              </div>

              <div style={{ padding: '16px' }}>
                {/* Content */}
                <p style={{ fontSize: 14, color: '#3A3A3C', lineHeight: 1.6, margin: 0, marginBottom: section.table ? 16 : 0, whiteSpace: 'pre-line' }}>
                  {section.content}
                </p>

                {/* Table */}
                {section.table && (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                      {section.table.map((row, ri) => (
                        <tr key={ri} style={{ background: ri === 0 ? '#F5F5F7' : ri % 2 === 0 ? '#FAFAFA' : '#fff' }}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{
                              padding: '10px 12px',
                              border: '1px solid #E8E8ED',
                              fontWeight: ri === 0 ? 700 : 400,
                              color: ri === 0 ? '#1D1D1F' : '#3A3A3C',
                              verticalAlign: 'top',
                            }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </table>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Complete button */}
        <button
          onClick={() => router.push('/lessons')}
          style={{
            background: '#5E5CE6', color: '#fff', border: 'none', borderRadius: 14,
            padding: '16px', fontSize: 16, fontWeight: 700, cursor: 'pointer', width: '100%',
            marginTop: 8,
          }}
        >
          ✅ Урок завершён — к следующему →
        </button>
      </div>
    </div>
  );
}
