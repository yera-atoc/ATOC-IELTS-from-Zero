'use client';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

/* ── Countdown hook ── */
function useCountdown(daysAhead: number) {
  const getTarget = () => {
    const t = new Date();
    t.setDate(t.getDate() + daysAhead);
    t.setHours(9, 0, 0, 0);
    return t;
  };

  const calc = () => {
    const diff = getTarget().getTime() - Date.now();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };

  const [cd, setCd] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setCd(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return cd;
}

const pad = (n: number) => String(n).padStart(2, '0');

/* ── Score bar ── */
const ScoreBar = ({ pct, color }: { pct: number; color: string }) => (
  <div style={{
    height: 3,
    background: 'rgba(255,255,255,.08)',
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 10,
  }}>
    <div style={{
      height: '100%',
      borderRadius: 100,
      background: color,
      width: `${pct}%`,
      transition: 'width 0.8s cubic-bezier(.4,0,.2,1)',
    }} />
  </div>
);

/* ── Road step ── */
function RoadStep({
  state,
  label,
  badge,
}: {
  state: 'done' | 'active' | 'lock';
  label: string;
  badge?: string;
}) {
  return (
    <div className={`road-step road-${state}`}>
      <div className="step-node">
        {state === 'done' && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6l2.5 2.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {state === 'active' && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 2l5 3-5 3V2z" fill="currentColor" />
          </svg>
        )}
        {state === 'lock' && (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
            <rect x="1" y="5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </div>
      <span className="step-label">{label}</span>
      {badge && <span className="step-badge">{badge}</span>}
    </div>
  );
}

/* ── Activity item ── */
function ActivityItem({
  color,
  title,
  meta,
  tag,
}: {
  color: string;
  title: string;
  meta: string;
  tag?: string;
}) {
  return (
    <li className="act-item">
      <span className="act-dot" style={{ background: color }} />
      <div className="act-body">
        <div className="act-title">{title}</div>
        <div className="act-meta">{meta}</div>
        {tag && <span className="act-tag">{tag}</span>}
      </div>
    </li>
  );
}

/* ── Main page ── */
export default function DashboardPage() {
  const cd = useCountdown(14);
  const [progWidth, setProgWidth] = useState('0%');
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0]);
  const [vocabFlipped, setVocabFlipped] = useState(false);
  const [deckAdded, setDeckAdded] = useState(false);
  const [heroDate, setHeroDate] = useState('');

  useEffect(() => {
    setHeroDate(
      new Date().toLocaleDateString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    );
    const t1 = setTimeout(() => setProgWidth('73%'), 300);
    const t2 = setTimeout(() => setBarWidths([72, 66, 61, 66]), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleDeckAdd = () => {
    setDeckAdded(true);
    setTimeout(() => setDeckAdded(false), 2500);
  };

  const scores = [
    { skill: 'Listening', score: '6.5', delta: '+0.5', color: '#7C6FF7', pct: barWidths[0] },
    { skill: 'Reading',   score: '6.0', delta: '+0.5', color: '#2DB887', pct: barWidths[1] },
    { skill: 'Writing',   score: '5.5', delta: '+0.5', color: '#E8961A', pct: barWidths[2] },
    { skill: 'Speaking',  score: '6.0', delta: '+1.0', color: '#D45785', pct: barWidths[3] },
  ];

  const roadmap = [
    { state: 'done'   as const, label: 'Основы и формат IELTS' },
    { state: 'done'   as const, label: 'Грамматика и словарный запас' },
    { state: 'done'   as const, label: 'Listening: Sections 1–4' },
    { state: 'active' as const, label: 'Reading Strategies', badge: 'Сейчас' },
    { state: 'lock'   as const, label: 'Writing Task 1 & 2' },
    { state: 'lock'   as const, label: 'Speaking Fluency' },
    { state: 'lock'   as const, label: 'Полный мок-тест' },
  ];

  const activity = [
    { color: '#7C6FF7', title: 'Writing Task 1 — отправлен',             meta: '2 часа назад',                      tag: 'Coherence улучшена → Band 6.5' },
    { color: '#2DB887', title: 'Reading Practice — Section 3',            meta: 'Вчера · 34/40 верных' },
    { color: '#E8961A', title: 'Словарный набор — Academic Word List',    meta: 'Вчера · 25 новых слов' },
    { color: '#888',    title: 'Listening Mock Test #7',                  meta: '2 дня назад · Band 6.5' },
  ];

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">

        {/* ── TOP BAR ── */}
        <div className="topbar anim d1">
          <div>
            <h1 className="greeting">
              Привет, <span className="greeting-name">Yernar!</span>{' '}
              <span className="greeting-emoji">🎯</span>
            </h1>
            <p className="greeting-sub">Готов к практике сегодня?</p>
          </div>
          <div className="date-chip">{heroDate}</div>
        </div>

        {/* ── BANNER ── */}
        <section className="banner anim d2">
          <div className="banner-left">
            <div className="banner-eyebrow">Ежедневная цель</div>
            <div className="banner-headline">2 урока + 1 практический тест</div>
            <div className="banner-progress-wrap">
              <div className="banner-track">
                <div className="banner-fill" style={{ width: progWidth }} />
              </div>
              <div className="banner-pct-row">
                <span>73% выполнено</span>
                <span>Осталось: 1 урок</span>
              </div>
            </div>
          </div>
          <div className="banner-cd-block">
            <div className="banner-cd-label">До экзамена</div>
            <div className="banner-cd-nums">
              {[['Дн', cd.d], ['Ч', cd.h], ['Мин', cd.m], ['Сек', cd.s]].map(([lbl, val], i) => (
                <div key={String(lbl)} className="cd-unit">
                  <div className="cd-num">{pad(Number(val))}</div>
                  <div className="cd-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCORES ── */}
        <section className="anim d3">
          <div className="section-header">
            <span className="section-title">📊 Текущие баллы</span>
            <span className="section-action">Полный отчёт →</span>
          </div>
          <div className="scores-grid">
            {scores.map(c => (
              <div key={c.skill} className="score-card">
                <div className="score-top">
                  <span className="score-skill">{c.skill}</span>
                  <span className="score-delta">{c.delta} ↑</span>
                </div>
                <div className="score-num">{c.score}</div>
                <ScoreBar pct={c.pct} color={c.color} />
                <div className="score-target">Цель: 7.0</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID GRID: Roadmap + Stats ── */}
        <div className="mid-grid anim d4">

          {/* Roadmap */}
          <div className="card roadmap-card">
            <div className="card-title">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="card-icon">
                <path d="M1 2.5h3l2 4-2 4H1M9 6.5h5M11 4.5l3 2-3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Программа обучения
            </div>
            <div className="road-list">
              {roadmap.map((r, i) => (
                <RoadStep key={i} {...r} />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="card stats-card">
            <div className="card-title">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="card-icon">
                <path d="M2 11V7M6 11V4M10 11V2M14 11V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Статистика
            </div>
            <div className="stats-list">
              {[
                { icon: '🔥', label: 'Серия дней',       value: '14 дней',  sub: 'подряд',           pct: 70, color: '#E8961A' },
                { icon: '⏱',  label: 'Часов учёбы',      value: '47.5',     sub: 'часов всего',      pct: 55, color: '#7C6FF7' },
                { icon: '✅', label: 'Тестов пройдено',   value: '12 / 30',  sub: 'мок-тестов',       pct: 40, color: '#2DB887' },
              ].map(s => (
                <div key={s.label} className="stat-row">
                  <div className="stat-icon-wrap">{s.icon}</div>
                  <div className="stat-body">
                    <div className="stat-name">{s.label}</div>
                    <div className="stat-val">{s.value} <span className="stat-sub">{s.sub}</span></div>
                    <div className="stat-mini-track">
                      <div className="stat-mini-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM GRID: Activity + Vocab ── */}
        <div className="bottom-grid anim d5">

          {/* Activity */}
          <div className="card">
            <div className="card-title">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="card-icon">
                <rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 5h7M4 8h5M4 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Последняя активность
            </div>
            <ul className="act-list">
              {activity.map((a, i) => <ActivityItem key={i} {...a} />)}
            </ul>
          </div>

          {/* Vocab + Resume */}
          <div className="vocab-col">
            <div className="card vocab-card">
              <div className="vocab-header">
                <div className="card-title" style={{ margin: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="card-icon">
                    <rect x="2" y="1" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M5 4h3M5 7h3M5 10h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    <rect x="5" y="4" width="8" height="10" rx="1" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 7h3M8 10h3M8 13h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  Слово дня
                </div>
                <span className="band-pill">Band 8.0</span>
              </div>
              <div
                className={`flip-wrap ${vocabFlipped ? 'flipped' : ''}`}
                onClick={() => setVocabFlipped(v => !v)}
              >
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="flip-word">Idiosyncrasy</div>
                    <div className="flip-pos">noun · /ˌɪdiəˈsɪŋkrəsi/</div>
                    <div className="flip-hint">Нажми для перевода</div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-def">Особенность поведения, присущая конкретному человеку; причуда, индивидуальная черта</div>
                    <div className="flip-ex">&ldquo;One of his idiosyncrasies was turning the volume to an odd number.&rdquo;</div>
                  </div>
                </div>
              </div>
              <button
                className={`btn-deck ${deckAdded ? 'added' : ''}`}
                onClick={handleDeckAdd}
              >
                {deckAdded ? '✓ Добавлено в колоду!' : '+ Добавить в мою колоду'}
              </button>
            </div>

            <div className="resume-card card">
              <div className="resume-lesson">
                <div className="resume-module">Reading Strategies</div>
                <div className="resume-name">Урок 3 из 5 — True / False / Not Given</div>
                <div className="resume-prog-info">
                  <span>Прогресс</span><span>60%</span>
                </div>
                <div className="resume-track">
                  <div className="resume-fill" />
                </div>
              </div>
              <button className="btn-resume">⚡ Продолжить с места остановки</button>
            </div>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </main>

      <style>{`
        /* ── Animations ── */
        .anim { animation: fadeUp .4s ease-out both }
        .d1 { animation-delay: .05s } .d2 { animation-delay: .1s }
        .d3 { animation-delay: .15s } .d4 { animation-delay: .2s }
        .d5 { animation-delay: .25s }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:none } }

        /* ── Top bar ── */
        .topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px }
        .greeting { font-size:22px; font-weight:700; line-height:1.2; font-family:var(--font-heading) }
        .greeting-name { color:var(--accent-blue) }
        .greeting-emoji { font-size:20px }
        .greeting-sub { font-size:13px; color:var(--text-secondary); margin-top:3px }
        .date-chip { font-size:11px; color:var(--text-secondary); background:rgba(255,255,255,.04); border:1px solid var(--border); border-radius:var(--radius-md); padding:6px 12px }

        /* ── Banner ── */
        .banner {
          display:flex; justify-content:space-between; align-items:center; gap:24px;
          background:#5B4EDD;
          border-radius:var(--radius-xl); padding:22px 28px; margin-bottom:20px;
          position:relative; overflow:hidden;
        }
        .banner::before {
          content:''; position:absolute; right:-40px; top:-40px;
          width:180px; height:180px; border-radius:50%; background:rgba(255,255,255,.06); pointer-events:none;
        }
        .banner::after {
          content:''; position:absolute; left:40%; bottom:-50px;
          width:120px; height:120px; border-radius:50%; background:rgba(255,255,255,.04); pointer-events:none;
        }
        .banner-left { position:relative; z-index:1; flex:1 }
        .banner-eyebrow { font-size:10px; color:rgba(255,255,255,.65); text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px }
        .banner-headline { font-size:16px; font-weight:700; color:#fff; font-family:var(--font-heading); margin-bottom:14px }
        .banner-track { height:5px; background:rgba(255,255,255,.2); border-radius:100px; overflow:hidden; margin-bottom:6px }
        .banner-fill { height:100%; border-radius:100px; background:#fff; transition:width .8s cubic-bezier(.4,0,.2,1) }
        .banner-pct-row { display:flex; justify-content:space-between; font-size:11px; color:rgba(255,255,255,.65) }
        .banner-cd-block { position:relative; z-index:1; background:rgba(255,255,255,.12); border-radius:var(--radius-lg); padding:14px 18px; text-align:center; flex-shrink:0 }
        .banner-cd-label { font-size:10px; color:rgba(255,255,255,.65); text-transform:uppercase; letter-spacing:.08em; margin-bottom:8px }
        .banner-cd-nums { display:flex; gap:6px; align-items:flex-end }
        .cd-unit { text-align:center }
        .cd-num { font-family:var(--font-mono); font-size:22px; font-weight:700; color:#fff; line-height:1 }
        .cd-lbl { font-size:9px; color:rgba(255,255,255,.55); margin-top:3px; text-transform:uppercase; letter-spacing:.06em }

        /* ── Section header ── */
        .section-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px }
        .section-title { font-size:13px; font-weight:600 }
        .section-action { font-size:12px; color:var(--accent-blue); cursor:pointer }
        .section-action:hover { text-decoration:underline }

        /* ── Scores ── */
        .scores-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:16px }
        .score-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:var(--radius-lg); padding:16px;
          transition:transform .15s, box-shadow .15s;
        }
        .score-card:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.2) }
        .score-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px }
        .score-skill { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:var(--text-secondary) }
        .score-delta { font-size:10px; font-family:var(--font-mono); background:rgba(16,185,129,.1); border:1px solid rgba(16,185,129,.2); color:#10B981; padding:2px 7px; border-radius:100px }
        .score-num { font-family:var(--font-mono); font-size:32px; font-weight:700; line-height:1 }
        .score-target { font-size:10px; color:var(--text-muted); margin-top:5px }

        /* ── Cards ── */
        .card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:18px }
        .card-title {
          display:flex; align-items:center; gap:7px;
          font-size:13px; font-weight:600; margin-bottom:16px;
        }
        .card-icon { color:var(--accent-blue); flex-shrink:0 }

        /* ── Mid grid ── */
        .mid-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px }

        /* ── Roadmap ── */
        .road-list { display:flex; flex-direction:column }
        .road-step {
          display:flex; align-items:center; gap:10px;
          padding:8px 0; position:relative;
        }
        .road-step:not(:last-child)::after {
          content:''; position:absolute; left:12px; top:30px;
          width:1px; height:calc(100% - 10px);
          background:var(--border);
        }
        .step-node {
          width:25px; height:25px; border-radius:50%; display:flex;
          align-items:center; justify-content:center; flex-shrink:0; position:relative; z-index:1;
        }
        .road-done .step-node { background:#5B4EDD; color:#fff }
        .road-active .step-node { background:var(--bg-card); border:2px solid #5B4EDD; color:#5B4EDD }
        .road-lock .step-node { background:rgba(255,255,255,.04); border:1px solid var(--border); color:var(--text-muted) }
        .step-label { font-size:12px; flex:1 }
        .road-done .step-label { color:var(--text-secondary); text-decoration:line-through; text-decoration-color:var(--border) }
        .road-active .step-label { font-weight:600; color:var(--text-primary) }
        .road-lock .step-label { color:var(--text-muted) }
        .step-badge {
          font-size:10px; padding:2px 7px; border-radius:100px;
          background:rgba(91,78,221,.15); border:1px solid rgba(91,78,221,.3); color:#9B8FF7;
          flex-shrink:0;
        }

        /* ── Stats ── */
        .stats-list { display:flex; flex-direction:column; gap:14px }
        .stat-row { display:flex; align-items:center; gap:12px }
        .stat-icon-wrap { font-size:18px; width:36px; height:36px; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,.04); border:1px solid var(--border); border-radius:var(--radius-sm); flex-shrink:0 }
        .stat-body { flex:1 }
        .stat-name { font-size:10px; color:var(--text-muted); text-transform:uppercase; letter-spacing:.06em; margin-bottom:2px }
        .stat-val { font-size:15px; font-weight:600 }
        .stat-sub { font-size:11px; font-weight:400; color:var(--text-secondary) }
        .stat-mini-track { height:3px; background:rgba(255,255,255,.06); border-radius:100px; overflow:hidden; margin-top:5px }
        .stat-mini-fill { height:100%; border-radius:100px; transition:width .7s cubic-bezier(.4,0,.2,1) }

        /* ── Bottom grid ── */
        .bottom-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px }
        .vocab-col { display:flex; flex-direction:column; gap:12px }

        /* ── Activity ── */
        .act-list { list-style:none; display:flex; flex-direction:column }
        .act-item { display:flex; gap:10px; padding:10px 0; border-bottom:1px solid var(--border-subtle) }
        .act-item:last-child { border:none; padding-bottom:0 }
        .act-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; margin-top:5px }
        .act-body { flex:1 }
        .act-title { font-size:12px; font-weight:600; margin-bottom:2px }
        .act-meta { font-size:11px; color:var(--text-secondary) }
        .act-tag { display:inline-block; margin-top:5px; font-size:10px; padding:2px 7px; border-radius:100px; background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.15); color:#10B981 }

        /* ── Vocab card ── */
        .vocab-card { display:flex; flex-direction:column; gap:12px }
        .vocab-header { display:flex; justify-content:space-between; align-items:center }
        .band-pill { font-size:10px; padding:2px 8px; border-radius:100px; background:rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.2); color:var(--accent-gold); font-family:var(--font-mono) }
        .flip-wrap { perspective:800px; height:120px; cursor:pointer }
        .flip-inner {
          width:100%; height:100%; position:relative;
          transform-style:preserve-3d; transition:transform .55s cubic-bezier(.4,0,.2,1);
        }
        .flip-wrap.flipped .flip-inner { transform:rotateY(180deg) }
        .flip-front, .flip-back {
          position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden;
          border-radius:var(--radius-md); display:flex; flex-direction:column;
          align-items:center; justify-content:center; text-align:center; padding:14px;
          border:1px solid var(--border); background:rgba(255,255,255,.02);
        }
        .flip-back { transform:rotateY(180deg) }
        .flip-word { font-size:22px; font-weight:700; font-family:var(--font-heading); margin-bottom:4px }
        .flip-pos { font-size:10px; color:var(--text-secondary); font-style:italic }
        .flip-hint { font-size:10px; color:var(--text-muted); margin-top:8px }
        .flip-def { font-size:12px; color:var(--text-secondary); line-height:1.55; margin-bottom:6px }
        .flip-ex { font-size:10px; color:var(--text-muted); font-style:italic; line-height:1.5 }
        .btn-deck {
          width:100%; padding:8px;
          background:rgba(245,158,11,.06); border:1px solid rgba(245,158,11,.18);
          border-radius:var(--radius-sm); color:var(--accent-gold);
          font-family:var(--font-body); font-size:11px; font-weight:600;
          cursor:pointer; transition:all .15s;
        }
        .btn-deck:hover { background:rgba(245,158,11,.12) }
        .btn-deck.added { background:rgba(16,185,129,.08); border-color:rgba(16,185,129,.2); color:#10B981 }

        /* ── Resume card ── */
        .resume-card { display:flex; flex-direction:column; justify-content:space-between; gap:14px }
        .resume-module { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:var(--accent-blue); margin-bottom:3px }
        .resume-name { font-size:13px; font-weight:600; font-family:var(--font-heading); margin-bottom:10px }
        .resume-prog-info { display:flex; justify-content:space-between; font-size:10px; color:var(--text-muted); margin-bottom:5px }
        .resume-track { height:4px; background:rgba(255,255,255,.06); border-radius:100px; overflow:hidden }
        .resume-fill { height:100%; width:60%; border-radius:100px; background:linear-gradient(90deg,var(--accent-gold),var(--accent-blue)) }
        .btn-resume {
          width:100%; padding:11px;
          background:linear-gradient(135deg,#5B4EDD,#4F46E5);
          border:none; border-radius:var(--radius-md); color:#fff;
          font-family:var(--font-body); font-size:13px; font-weight:600;
          cursor:pointer; transition:opacity .15s;
        }
        .btn-resume:hover { opacity:.88 }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .scores-grid { grid-template-columns: repeat(2,1fr) }
        }
        @media (max-width: 800px) {
          .mid-grid, .bottom-grid { grid-template-columns: 1fr }
          .banner { flex-direction: column; align-items: flex-start }
          .banner-cd-block { width: 100% }
          .banner-cd-nums { justify-content: center }
        }
      `}</style>
    </div>
  );
}
