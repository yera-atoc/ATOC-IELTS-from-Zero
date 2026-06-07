'use client';
import { useParams, useRouter } from 'next/navigation';
import { getLessonById, getAdjacentLessons } from '@/data';
import type { GrammarSection, ReadingText, WritingTask } from '@/types/lesson';

const SECTION_COLORS = {
  grammar: { bg: '#F0F0FF', border: '#5E5CE6', label: 'Грамматика', labelColor: '#5E5CE6' },
  reading: { bg: '#F0F7FF', border: '#0A84FF', label: 'Чтение', labelColor: '#0A84FF' },
  writing: { bg: '#F0FFF4', border: '#30D158', label: 'Письмо', labelColor: '#30D158' },
  tip:     { bg: '#FFFBF0', border: '#FF9F0A', label: 'Подсказка', labelColor: '#FF9F0A' },
  task:    { bg: '#FFF0F0', border: '#FF375F', label: 'Задание', labelColor: '#FF375F' },
};

function GrammarBlock({ section }: { section: GrammarSection }) {
  const s = SECTION_COLORS.grammar;
  return (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E8ED' }}>
      <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: s.labelColor, background: '#fff', padding: '2px 8px', borderRadius: 20, border: `1px solid ${s.border}` }}>
          {s.label}
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F' }}>{section.title}</span>
      </div>
      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 14, color: '#3A3A3C', lineHeight: 1.6, margin: 0, marginBottom: 16, whiteSpace: 'pre-line' }}>
          {section.explanation}
        </p>

        {section.tables?.map((table, ti) => (
          <div key={ti} style={{ overflowX: 'auto', marginBottom: 16 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#F5F5F7' }}>
                  {table.headers.map((h, hi) => (
                    <td key={hi} style={{ padding: '10px 12px', border: '1px solid #E8E8ED', fontWeight: 700, color: '#1D1D1F' }}>{h}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : '#FAFAFA' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '10px 12px', border: '1px solid #E8E8ED', color: '#3A3A3C', verticalAlign: 'top' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {(section.correctExamples || section.incorrectExamples) && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            {section.correctExamples && (
              <div style={{ background: '#F0FFF4', borderRadius: 10, padding: '12px 14px', border: '1px solid #30D158' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#30D158', marginBottom: 8 }}>✅ Правильно</div>
                {section.correctExamples.map((ex, i) => (
                  <div key={i} style={{ fontSize: 13, color: '#1D1D1F', marginBottom: 4 }}>{ex}</div>
                ))}
              </div>
            )}
            {section.incorrectExamples && (
              <div style={{ background: '#FFF0F0', borderRadius: 10, padding: '12px 14px', border: '1px solid #FF375F' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#FF375F', marginBottom: 8 }}>❌ Неправильно</div>
                {section.incorrectExamples.map((ex, i) => (
                  <div key={i} style={{ fontSize: 13, color: '#1D1D1F', marginBottom: 4 }}>{ex}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {section.ieltsHint && (
          <div style={{ background: '#FFFBF0', borderRadius: 10, padding: '12px 14px', border: '1px solid #FF9F0A', marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FF9F0A' }}>📌 IELTS подсказка · </span>
            <span style={{ fontSize: 13, color: '#3A3A3C' }}>{section.ieltsHint}</span>
          </div>
        )}

        {section.taskInstruction && (
          <div style={{ background: '#FFF0F0', borderRadius: 10, padding: '12px 14px', border: '1px solid #FF375F' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#FF375F', marginBottom: 6 }}>✏️ Задание</div>
            <p style={{ fontSize: 13, color: '#3A3A3C', margin: 0, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{section.taskInstruction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ReadingBlock({ reading }: { reading: ReadingText }) {
  const s = SECTION_COLORS.reading;
  return (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E8ED' }}>
      <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: s.labelColor, background: '#fff', padding: '2px 8px', borderRadius: 20, border: `1px solid ${s.border}` }}>
          {s.label}
        </span>
        <span style={{ fontSize: 12, color: '#8E8E93' }}>{reading.wordCount} слов</span>
      </div>
      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 14, color: '#1D1D1F', lineHeight: 1.8, margin: 0, marginBottom: 16, background: '#F9F9FB', borderRadius: 10, padding: '14px 16px' }}>
          {reading.text}
        </p>

        <div style={{ background: '#FFF0F0', borderRadius: 10, padding: '12px 14px', border: '1px solid #FF375F', marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#FF375F', marginBottom: 6 }}>✏️ Задание</div>
          <p style={{ fontSize: 13, color: '#3A3A3C', margin: 0 }}>{reading.taskInstruction}</p>
        </div>

        {reading.vocabulary.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#8E8E93', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              Словарь
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 6 }}>
              {reading.vocabulary.map((v, i) => (
                <div key={i} style={{ background: '#F5F5F7', borderRadius: 8, padding: '6px 10px', fontSize: 12 }}>
                  <span style={{ fontWeight: 600, color: '#1D1D1F' }}>{v.word}</span>
                  <span style={{ color: '#8E8E93' }}> — {v.translation}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {reading.lifehack && (
          <div style={{ background: '#FFFBF0', borderRadius: 10, padding: '12px 14px', border: '1px solid #FF9F0A' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FF9F0A' }}>💡 Лайфхак · </span>
            <span style={{ fontSize: 13, color: '#3A3A3C' }}>{reading.lifehack}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function WritingBlock({ task }: { task: WritingTask }) {
  const s = SECTION_COLORS.writing;
  return (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E8ED' }}>
      <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: s.labelColor, background: '#fff', padding: '2px 8px', borderRadius: 20, border: `1px solid ${s.border}` }}>
          {s.label}
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F' }}>{task.title}</span>
      </div>
      <div style={{ padding: 16 }}>
        <p style={{ fontSize: 14, color: '#3A3A3C', lineHeight: 1.6, margin: 0, marginBottom: 14 }}>{task.instruction}</p>

        {task.structure && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#8E8E93', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>Структура</div>
            {task.structure.map((s, i) => (
              <div key={i} style={{ fontSize: 13, color: '#3A3A3C', marginBottom: 4, paddingLeft: 10, borderLeft: '2px solid #30D158' }}>{s}</div>
            ))}
          </div>
        )}

        {task.requirements && (
          <div style={{ marginBottom: task.example ? 14 : 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#8E8E93', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>Требования</div>
            {task.requirements.map((r, i) => (
              <div key={i} style={{ fontSize: 13, color: '#3A3A3C', marginBottom: 4 }}>• {r}</div>
            ))}
          </div>
        )}

        {task.example && (
          <div style={{ background: '#F5F5F7', borderRadius: 8, padding: '10px 14px', marginTop: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#8E8E93', marginBottom: 4 }}>Пример</div>
            <div style={{ fontSize: 13, color: '#1D1D1F', fontStyle: 'italic' }}>{task.example}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string)?.toLowerCase() ?? '';
  const lesson = getLessonById(id);
  const { prev, next } = lesson ? getAdjacentLessons(id) : { prev: null, next: null };

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

      {/* Content */}
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Grammar sections */}
        {lesson.grammar.map(section => (
          <GrammarBlock key={section.id} section={section} />
        ))}

        {/* Reading sections */}
        {lesson.readings.map(reading => (
          <ReadingBlock key={reading.id} reading={reading} />
        ))}

        {/* Writing tasks */}
        {lesson.writingTasks.map(task => (
          <WritingBlock key={task.id} task={task} />
        ))}

        {/* Completed topics */}
        {lesson.completedTopics.length > 0 && (
          <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E8E8ED' }}>
            <div style={{ background: '#F0FFF4', borderLeft: '4px solid #30D158', padding: '12px 16px' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1D1D1F' }}>✅ В этом уроке</span>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {lesson.completedTopics.map((topic, i) => (
                <div key={i} style={{ fontSize: 13, color: '#3A3A3C', marginBottom: 6, paddingLeft: 10, borderLeft: '2px solid #30D158' }}>
                  {topic}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'grid', gridTemplateColumns: prev ? '1fr 1fr' : '1fr', gap: 12 }}>
          {prev && (
            <button
              onClick={() => router.push(`/lessons/${prev.id}`)}
              style={{ background: '#fff', color: '#5E5CE6', border: '1px solid #5E5CE6', borderRadius: 14, padding: '14px', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
            >
              ← {prev.level}: {prev.title}
            </button>
          )}
          {next ? (
            <button
              onClick={() => router.push(`/lessons/${next.id}`)}
              style={{ background: '#5E5CE6', color: '#fff', border: 'none', borderRadius: 14, padding: '14px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
            >
              {next.level}: {next.title} →
            </button>
          ) : (
            <button
              onClick={() => router.push('/lessons')}
              style={{ background: '#5E5CE6', color: '#fff', border: 'none', borderRadius: 14, padding: '14px', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            >
              ✅ Все уроки завершены!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
