'use client';
import { useState } from 'react';

type Level = 'A' | 'B' | 'C';
interface Lesson { id: string; title: string; locked: boolean; done: boolean }

const LESSONS: Record<Level, Lesson[]> = {
  A: [
    { id:'A1', title:'To Be (am/is/are)',          locked: false, done: true  },
    { id:'A2', title:'Nouns: singular/plural',      locked: false, done: false },
    { id:'A3', title:'Articles: a / an / the',      locked: true,  done: false },
    { id:'A4', title:'Present Simple',              locked: true,  done: false },
    { id:'A5', title:'Common Vocabulary',           locked: true,  done: false },
    { id:'A6', title:'Basic Question Forms',        locked: true,  done: false },
    { id:'A7', title:'Listening: Short dialogues',  locked: true,  done: false },
  ],
  B: [
    { id:'B1', title:'Past Simple & Continuous',   locked: true, done: false },
    { id:'B2', title:'Comparatives & Superlatives', locked: true, done: false },
    { id:'B3', title:'Passive Voice',               locked: true, done: false },
    { id:'B4', title:'Reading: Skimming',           locked: true, done: false },
    { id:'B5', title:'Writing Task 1 Intro',        locked: true, done: false },
    { id:'B6', title:'Academic Vocabulary 1',       locked: true, done: false },
  ],
  C: [
    { id:'C1', title:'Complex Sentences',           locked: true, done: false },
    { id:'C2', title:'Conditionals 1-3',            locked: true, done: false },
    { id:'C3', title:'Writing Task 2 Essays',       locked: true, done: false },
    { id:'C4', title:'Speaking: Part 2 Cue Cards',  locked: true, done: false },
    { id:'C5', title:'Academic Vocabulary 2',       locked: true, done: false },
  ],
};

const LEVEL_META = {
  A: { label: 'Уровень A', sub: 'Beginner', color: '#30D158', bg: '#E8FAF1', total: 7, done: 1 },
  B: { label: 'Уровень B', sub: 'Intermediate', color: '#FF9F0A', bg: '#FFF4E0', total: 6, done: 0 },
  C: { label: 'Уровень C', sub: 'Advanced', color: '#FF375F', bg: '#FEE9EC', total: 5, done: 0 },
};

export default function LessonsPage() {
  const [active, setActive] = useState<Level>('A');

  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh', padding: '28px' }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.035em', color: '#1D1D1F', lineHeight: 1.1 }}>Уроки</h1>
        <p style={{ fontSize: 13, color: '#8E8E93', marginTop: 4 }}>Выбери уровень и начни обучение</p>
      </div>

      {/* Level cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24 }}>
        {(Object.keys(LEVEL_META) as Level[]).map(lvl => {
          const m = LEVEL_META[lvl];
          const pct = Math.round((m.done / m.total) * 100);
          const isActive = active === lvl;
          return (
            <button
              key={lvl}
              onClick={() => setActive(lvl)}
              style={{
                background: '#fff',
                border: isActive ? `2px solid ${m.color}` : '1px solid #E8E8ED',
                borderRadius: 14,
                padding: '18px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'box-shadow .2s, transform .2s',
                boxShadow: isActive ? `0 8px 24px ${m.color}22` : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1D1D1F', letterSpacing: '-.02em' }}>{m.label}</div>
                  <div style={{ fontSize: 12, color: '#8E8E93', marginTop: 2 }}>{m.sub}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 20, background: m.bg, color: m.color }}>
                  {m.done}/{m.total}
                </span>
              </div>
              <div style={{ height: 3, background: '#F2F2F7', borderRadius: 100, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: m.color, borderRadius: 100, transition: 'width .6s ease' }} />
              </div>
              <div style={{ fontSize: 10, color: '#8E8E93', marginTop: 5 }}>{pct}% пройдено</div>
            </button>
          );
        })}
      </div>

      {/* Lesson list */}
      <div style={{ background: '#fff', border: '1px solid #E8E8ED', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1D1D1F', letterSpacing: '-.02em' }}>
              {LEVEL_META[active].label} — {LEVEL_META[active].sub}
            </div>
          </div>
          <span style={{ fontSize: 12, color: '#8E8E93' }}>
            {LEVEL_META[active].done} из {LEVEL_META[active].total} уроков
          </span>
        </div>

        {LESSONS[active].map((lesson, i) => (
          <div
            key={lesson.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '14px 20px',
              borderBottom: i < LESSONS[active].length - 1 ? '1px solid #F2F2F7' : 'none',
              cursor: lesson.locked ? 'default' : 'pointer',
              opacity: lesson.locked ? 0.45 : 1,
              transition: 'background .15s',
            }}
            onMouseEnter={e => { if (!lesson.locked) (e.currentTarget as HTMLDivElement).style.background = '#F9F9FB' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
          >
            {/* ID bubble */}
            <div style={{
              width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700,
              background: lesson.done ? '#5E5CE6' : lesson.locked ? '#F2F2F7' : '#EEEDFE',
              color: lesson.done ? '#fff' : lesson.locked ? '#C7C7CC' : '#5E5CE6',
            }}>
              {lesson.done ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : lesson.id}
            </div>

            {/* Title */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#1D1D1F' }}>{lesson.title}</div>
              {lesson.done && <div style={{ fontSize: 11, color: '#30D158', marginTop: 2, fontWeight: 500 }}>Завершён</div>}
              {!lesson.done && !lesson.locked && <div style={{ fontSize: 11, color: '#5E5CE6', marginTop: 2, fontWeight: 500 }}>Доступен</div>}
            </div>

            {/* Right action */}
            {lesson.locked ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: '#C7C7CC', flexShrink: 0 }}>
                <rect x="1" y="6" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ) : lesson.done ? (
              <span style={{ fontSize: 11, padding: '3px 9px', borderRadius: 20, background: '#E8FAF1', color: '#1B7A48', fontWeight: 600 }}>
                Пройден
              </span>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#5E5CE6', fontSize: 13, fontWeight: 600 }}>
                Начать
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  );
}
