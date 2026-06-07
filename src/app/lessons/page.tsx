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

export default function LessonsPage() {
  const [active, setActive] = useState<CEFRBand>('A');
  const router = useRouter();

  return (
    <div style={{ background: '#F5F5F7', minHeight: '100vh', padding: '28px' }}>
      
      {/* Apple-style Back Button */}
      <button
        onClick={() => router.back()}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#0071E3',
          fontSize: '17px',
          fontWeight: '600',
          background: 'none',
          border: 'none',
          padding: '8px 0',
          marginBottom: '16px',
          cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#0058B0')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#0071E3')}
      >
        ← Назад
      </button>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          letterSpacing: '-.035em', 
          color: '#1D1D1F', 
          lineHeight: 1.1 
        }}>
          Уроки
        </h1>
        <p style={{ 
          fontSize: 15, 
          color: '#8E8E93', 
          marginTop: 6 
        }}>
          Выбери уровень и начни обучение
        </p>
      </div>

      {/* Band cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 24 }}>
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
                padding: '18px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all .2s',
                boxShadow: isActive ? `0 8px 24px ${m.color}22` : 'none',
              }}
            >
              {/* ... остальной код карточек без изменений ... */}
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
                <div style={{ height: '100%', width: `${pct}%`, background: m.color, borderRadius: 100 }} />
              </div>
              <div style={{ fontSize: 10, color: '#8E8E93', marginTop: 5 }}>{pct}% готово</div>
            </button>
          );
        })}
      </div>

      {/* Lesson list - остальной код остаётся тем же */}
      {/* ... (весь код со списком уроков) ... */}

    </div>
  );
}
