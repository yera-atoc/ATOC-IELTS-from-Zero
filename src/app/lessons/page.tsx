'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getLessonsByBand } from '@/data';
import type { CEFRBand } from '@/types/lesson';

const BAND_META: Record<CEFRBand, { label: string; sub: string; color: string; bg: string; total: number }> = {
  A: { label: 'Уровень A', sub: 'Beginner', color: '#30D158', bg: '#E8FAF1', total: 20 },
  B: { label: 'Уровень B', sub: 'Intermediate', color: '#FF9F0A', bg: '#FFF4E0', total: 20 },
  C: { label: 'Уровень C', sub: 'Advanced', color: '#FF375F', bg: '#FEE9EC', total: 20 },
};

function getBandSlots(band: CEFRBand, available: any[]) {
  // ПРИВОДИМ К НИЖНЕМУ РЕГИСТРУ И ID УРОКА И ИСКОМЫЙ ID
  const availableMap = new Map(available.map((l: any) => [l.id.toLowerCase(), l]));
  
  return Array.from({ length: 20 }, (_, i) => {
    const id = `${band.toLowerCase()}${i + 1}`; // генерирует 'a1'...'a20' или 'b1'...'b20'
    const lesson = availableMap.get(id);
    return {
      id: id,
      title: lesson?.title ?? `Урок ${band}${i + 1}`,
      available: !!lesson,
    };
  });
}

export default function LessonsPage() {
  const [active, setActive] = useState<CEFRBand>('A');
  const router = useRouter();

  // Получаем список для выбранного уровня
  const currentLessons = getLessonsByBand(active);
  const slots = getBandSlots(active, currentLessons);

  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh', padding: '28px' }}>
      <button
        onClick={() => router.back()}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0071E3', fontSize: '17px', fontWeight: '600', background: 'none', border: 'none', padding: '8px 0', marginBottom: '24px', cursor: 'pointer' }}
      >
        ← Назад
      </button>

      <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.035em', color: '#1D1D1F', marginBottom: 6 }}>Уроки</h1>
      <p style={{ fontSize: 15, color: '#8E8E93', marginBottom: 28 }}>Выбери уровень и начни обучение</p>

      {/* Band Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 32 }}>
        {(Object.keys(BAND_META) as CEFRBand[]).map(band => {
          const m = BAND_META[band];
          const done = getLessonsByBand(band).length;
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
                padding: '20px',
                textAlign: 'left',
                boxShadow: isActive ? `0 8px 24px ${m.color}22` : 'none',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{m.label}</div>
                  <div style={{ fontSize: 12, color: '#8E8E93' }}>{m.sub}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 20, background: m.bg, color: m.color }}>
                  {done}/{m.total}
                </span>
              </div>
              <div style={{ height: 4, background: '#F2F2F7', borderRadius: 100, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: m.color }} />
              </div>
              <div style={{ fontSize: 10, color: '#8E8E93', marginTop: 6 }}>{pct}% готово</div>
            </button>
          );
        })}
      </div>

      {/* Lesson List */}
      <div style={{ background: '#fff', border: '1px solid #E8E8ED', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F2F2F7', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>{BAND_META[active].label} — {BAND_META[active].sub}</div>
          <span style={{ fontSize: 12, color: '#8E8E93' }}>{currentLessons.length} из {BAND_META[active].total} уроков</span>
        </div>

        {slots.map((slot, i, arr) => (
          <div
            key={slot.id}
            onClick={() => slot.available && router.push(`/lessons/${slot.id}`)}
            style={{
              padding: '16px 20px',
              borderBottom: i < arr.length - 1 ? '1px solid #F2F2F7' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              cursor: slot.available ? 'pointer' : 'default',
              opacity: slot.available ? 1 : 0.45,
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: slot.available ? '#EEEDFE' : '#F2F2F7', color: slot.available ? '#5E5CE6' : '#C7C7CC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>
              {slot.available ? slot.id.toUpperCase() : '🔒'}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{slot.title}</div>
              {slot.available ? <div style={{ fontSize: 12, color: '#30D158' }}>Доступен</div> : <div style={{ fontSize: 12, color: '#8E8E93' }}>Скоро</div>}
            </div>
            {slot.available && <span style={{ color: '#0071E3', fontWeight: 600 }}>Начать →</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
