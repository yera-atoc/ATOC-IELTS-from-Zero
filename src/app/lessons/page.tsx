'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllLessons, getLessonsByBand } from '@/data';
import type { CEFRBand, Lesson } from '@/types/lesson';

const BAND_META: Record<CEFRBand, { label: string; sub: string; color: string; bg: string; total: number }> = {
  A: { label: 'Уровень A', sub: 'Beginner', color: '#30D158', bg: '#E8FAF1', total: 20 },
  B: { label: 'Уровень B', sub: 'Intermediate', color: '#FF9F0A', bg: '#FFF4E0', total: 20 },
  C: { label: 'Уровень C', sub: 'Advanced', color: '#FF375F', bg: '#FEE9EC', total: 20 },
};

// Generate placeholder slots A1–A20, B1–B20, C1–C20
function getBandSlots(band: CEFRBand, available: Lesson[]) {
  const availableMap = new Map(available.map(l => [l.id, l]));
  return Array.from({ length: 20 }, (_, i) => {
    const id = `${band.toLowerCase()}${i + 1}`;
    const lesson = availableMap.get(id);
    return {
      id,
      number: i + 1,
      title: lesson?.title ?? `Урок ${band}${i + 1}`,
      available: !!lesson,
    };
  });
}

export default function LessonsPage() {
  const [active, setActive] = useState<CEFRBand>('A');
  const router = useRouter();
  const allLessons = getAllLessons();

  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh', padding: '28px' }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.035em', color: '#1D1D1F', lineHeight: 1.1 }}>
          Уроки
        </h1>
        <p style={{ fontSize: 13, color: '#8E8E93', marginTop: 4 }}>Выбери уровень и начни обучение</p>
      </div>

      {/* Band cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24 }}>
        {(Object.keys(BAND_META) as CEFRBand[]).map(band => {
          const m = BAND_META[band];
          const done = getLessonsByBand(band).length; // lessons that exist = available
          const pct = Math.round((done / m.total) * 100);
          const isActive = active === band;
          return (
            <button
              key={band}
              onClick={() => setActive(band)}
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
                  {done}/{m.total}
                </span>
              </div>
              <div style={{ height: 3, background: '#F2F2F7', borderRadius: 100, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: m.color, borderRadius: 100, transition: 'width .6s ease' }} />
              </div>
              <div style={{ fontSize: 10, color: '#8E8E93', marginTop: 5 }}>{pct}% готово</div>
            </button>
          );
        })}
      </div>

      {/* Lesson list */}
      <div style={{ background: '#fff', border: '1px solid #E8E8ED', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1D1D1F', letterSpacing: '-.02em' }}>
            {BAND_META[active].label} — {BAND_META[active].sub}
          </div>
          <span style={{ fontSize: 12, color: '#8E8E93' }}>
            {getLessonsByBand(active).length} из {BAND_META[active].total} уроков
          </span>
        </div>

        {getBandSlots(active, getLessonsByBand(active)).map((slot, i, arr) => {
          const color = BAND_META[active].color;
          return (
            <div
              key={slot.id}
              onClick={() => slot.available && router.push(`/lessons/${slot.id}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 20px',
                borderBottom: i < arr.length - 1 ? '1px solid #F2F2F7' : 'none',
                cursor: slot.available ? 'pointer' : 'default',
                opacity: slot.available ? 1 : 0.4,
                transition: 'background .15s',
              }}
              onMouseEnter={e => { if (slot.available) (e.currentTarget as HTMLDivElement).style.background = '#F9F9FB' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
            >
              {/* Number bubble */}
              <div style={{
                width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700,
                background: slot.available ? '#EEEDFE' : '#F2F2F7',
                color: slot.available ? '#5E5CE6' : '#C7C7CC',
              }}>
                {slot.available ? slot.id.toUpperCase() : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="6" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
              </div>

              {/* Title */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#1D1D1F' }}>{slot.title}</div>
                {slot.available && (
                  <div style={{ fontSize: 11, color: '#5E5CE6', marginTop: 2, fontWeight: 500 }}>Доступен</div>
                )}
                {!slot.available && (
                  <div style={{ fontSize: 11, color: '#C7C7CC', marginTop: 2 }}>Скоро</div>
                )}
              </div>

              {/* Arrow */}
              {slot.available && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#5E5CE6', fontSize: 13, fontWeight: 600 }}>
                  Начать
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ height: 40 }} />
    </div>
  );
}
