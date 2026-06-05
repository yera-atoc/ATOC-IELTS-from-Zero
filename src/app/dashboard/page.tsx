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

/* ── Score bar with glow ── */
const ScoreBar = ({ pct, color }: { pct: number; color: string }) => (
  <div style={{ height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 100, overflow: 'visible', marginTop: 10 }}>
    <div style={{
      height: '100%', borderRadius: 100, background: color,
      width: `${pct}%`, transition: 'width 0.9s cubic-bezier(.4,0,.2,1)',
      boxShadow: `0 0 8px ${color}88`,
    }} />
  </div>
);

/* ── Road step ── */
function RoadStep({ state, label, badge }: { state: 'done' | 'active' | 'lock'; label: string; badge?: string }) {
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
function ActivityItem({ color, title, meta, tag }: { color: string; title: string; meta: string; tag?: string }) {
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
    setHeroDate(new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
    const t1 = setTimeout(() => setProgWidth('73%'), 300);
    const t2 = setTimeout(() => setBarWidths([72, 66, 61, 66]), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleDeckAdd = () => { setDeckAdded(true); setTimeout(() => setDeckAdded(false), 2500); };

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
    { color: '#7C6FF7', title: 'Writing Task 1 — отправлен',          meta: '2 часа назад',          tag: 'Coherence улучшена → Band 6.5' },
    { color: '#2DB887', title: 'Reading Practice — Section 3',         meta: 'Вчера · 34/40 верных' },
    { color: '#E8961A', title: 'Словарный набор — Academic Word List', meta: 'Вчера · 25 новых слов' },
    { color: '#444',    title: 'Listening Mock Test #7',               meta: '2 дня назад · Band 6.5' },
  ];

  const stats = [
    { icon: '🔥', label: 'Серия дней',     value: '14',    unit: 'дней подряд', pct: 70, color: '#E8961A' },
    { icon: '⏱',  label: 'Часов учёбы',    value: '47.5',  unit: 'часов всего', pct: 55, color: '#7C6FF7' },
    { icon: '✅', label: 'Тестов пройдено', value: '12/30', unit: 'мок-тестов',  pct: 40, color: '#2DB887' },
  ];

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">

        {/* 1 ── TOP BAR */}
        <div className="topbar anim d1">
          <div>
            <h1 className="greeting">Привет, <span className="greeting-name">Yernar</span></h1>
            <p className="greeting-sub">Готов к практике сегодня?</p>
          </div>
          <div className="date-chip">{heroDate}</div>
        </div>

        {/* 2 ── BANNER */}
        <section className="banner anim d2">
          <div className="banner-left">
            <div className="banner-eyebrow">Ежедневная цель</div>
            <div className="banner-headline">2 урока + 1 практический тест</div>
            <div className="banner-track">
              <div className="banner-fill" style={{ width: progWidth }} />
            </div>
            <div className="banner-pct-row">
              <span>73% выполнено</span>
              <span>Осталось: 1 урок</span>
            </div>
          </div>
          <div className="banner-cd-block">
            <div className="banner-cd-label">До экзамена</div>
            <div className="banner-cd-nums">
              {([['Дн', cd.d], ['Ч', cd.h], ['Мин', cd.m], ['Сек', cd.s]] as [string, number][]).map(([lbl, val]) => (
                <div key={lbl} className="cd-unit">
                  <div className="cd-num">{pad(val)}</div>
                  <div className="cd-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 ── SCORES */}
        <section className="anim d3">
          <div className="section-header">
            <span className="section-title">Текущие баллы</span>
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

        {/* 4 ── MID GRID */}
        <div className="mid-grid anim d4">
          <div className="card">
            <div className="card-title">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="card-icon">
                <path d="M1 2.5h3l2 4-2 4H1M9 6.5h5M11 4.5l3 2-3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Программа обучения
            </div>
            <div className="road-list">
              {roadmap.map((r, i) => <RoadStep key={i} {...r} />)}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="card-icon">
                <path d="M2 11V7M6 11V4M10 11V2M14 11V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Статистика
            </div>
            <div className="stats-list">
              {stats.map(s => (
                <div key={s.label} className="stat-row">
                  <div className="stat-icon-wrap">{s.icon}</div>
                  <div className="stat-body">
                    <div className="stat-name">{s.label}</div>
                    <div className="stat-val">{s.value} <span className="stat-unit">{s.unit}</span></div>
                    <div className="stat-mini-track">
                      <div className="stat-mini-fill" style={{ width: `${s.pct}%`, background: s.color, boxShadow: `0 0 6px ${s.color}66` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 ── BOTTOM GRID */}
        <div className="bottom-grid anim d5">
          <div className="card">
            <div className="card-title">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="card-icon">
                <rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 5h7M4 8h5M4 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Последняя активность
            </div>
            <ul className="act-list">
              {activity.map((a, i) => <ActivityItem key={i} {...a} />)}
            </ul>
          </div>

          <div className="vocab-col">
            <div className="card vocab-card">
              <div className="vocab-header">
                <div className="card-title" style={{ margin: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="card-icon">
                    <rect x="2" y="1" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
                    <rect x="5" y="4" width="8" height="10" rx="1" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 7h3M8 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  Слово дня
                </div>
                <span className="band-pill">Band 8.0</span>
              </div>
              <div className={`flip-wrap ${vocabFlipped ? 'flipped' : ''}`} onClick={() => setVocabFlipped(v => !v)}>
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="flip-word">Idiosyncrasy</div>
                    <div className="flip-pos">noun · /ˌɪdiəˈsɪŋkrəsi/</div>
                    <div className="flip-hint">Нажми для перевода</div>
                  </div>
                  <div className="flip-back">
                    <div className="flip-def">Особенность поведения, присущая конкретному человеку; причуда</div>
                    <div className="flip-ex">&ldquo;One of his idiosyncrasies was turning the volume to an odd number.&rdquo;</div>
                  </div>
                </div>
              </div>
              <button className={`btn-deck ${deckAdded ? 'added' : ''}`} onClick={handleDeckAdd}>
                {deckAdded ? '✓ Добавлено в колоду!' : '+ Добавить в мою колоду'}
              </button>
            </div>

            <div className="card resume-card">
              <div>
                <div className="resume-module">Reading Strategies</div>
                <div className="resume-name">Урок 3 из 5 — True / False / Not Given</div>
                <div className="resume-prog-info"><span>Прогресс</span><span>60%</span></div>
                <div className="resume-track"><div className="resume-fill" /></div>
              </div>
              <button className="btn-resume">Продолжить с места остановки</button>
            </div>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </main>

      <style>{`
        .anim{animation:fadeUp .45s ease-out both}
        .d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.16s}.d4{animation-delay:.22s}.d5{animation-delay:.28s}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

        .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
        .greeting{font-size:23px;font-weight:700;letter-spacing:-0.03em;line-height:1.15;font-family:var(--font-heading)}
        .greeting-name{color:var(--accent-blue)}
        .greeting-sub{font-size:12px;color:var(--text-muted);margin-top:3px;letter-spacing:.01em}
        .date-chip{font-size:11px;color:var(--text-muted);background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-md);padding:5px 11px;letter-spacing:.02em}

        .banner{display:flex;justify-content:space-between;align-items:center;gap:24px;background:linear-gradient(135deg,#2D2680 0%,#1A1560 50%,#110E45 100%);border:1px solid rgba(139,92,246,.18);border-radius:var(--radius-xl);padding:22px 26px;margin-bottom:18px;position:relative;overflow:hidden}
        .banner::before{content:'';position:absolute;right:-50px;top:-50px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.15) 0%,transparent 70%);pointer-events:none}
        .banner::after{content:'';position:absolute;left:38%;bottom:-60px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(91,78,221,.1) 0%,transparent 70%);pointer-events:none}
        .banner-left{position:relative;z-index:1;flex:1}
        .banner-eyebrow{font-size:10px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.12em;margin-bottom:5px}
        .banner-headline{font-size:15px;font-weight:600;color:#fff;font-family:var(--font-heading);margin-bottom:14px;letter-spacing:-.01em}
        .banner-track{height:3px;background:rgba(255,255,255,.14);border-radius:100px;overflow:hidden;margin-bottom:7px}
        .banner-fill{height:100%;border-radius:100px;background:#fff;transition:width .9s cubic-bezier(.4,0,.2,1);box-shadow:0 0 10px rgba(255,255,255,.4)}
        .banner-pct-row{display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.5)}
        .banner-cd-block{position:relative;z-index:1;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:var(--radius-lg);padding:12px 16px;text-align:center;flex-shrink:0;backdrop-filter:blur(8px)}
        .banner-cd-label{font-size:9px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
        .banner-cd-nums{display:flex;gap:8px;align-items:flex-end}
        .cd-unit{text-align:center;min-width:30px}
        .cd-num{font-family:var(--font-mono);font-size:20px;font-weight:700;color:#fff;line-height:1}
        .cd-lbl{font-size:8px;color:rgba(255,255,255,.45);margin-top:3px;text-transform:uppercase;letter-spacing:.07em}

        .section-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
        .section-title{font-size:12px;font-weight:600;letter-spacing:.01em;color:var(--text-secondary)}
        .section-action{font-size:11px;color:var(--accent-blue);cursor:pointer;opacity:.8;transition:opacity .2s}
        .section-action:hover{opacity:1;text-decoration:underline}

        .scores-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}
        .score-card{background:linear-gradient(160deg,rgba(255,255,255,.04) 0%,rgba(255,255,255,.02) 100%);border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-lg);padding:18px 16px;transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;backdrop-filter:blur(4px)}
        .score-card:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.13);box-shadow:0 12px 32px rgba(0,0,0,.25)}
        .score-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
        .score-skill{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted)}
        .score-delta{font-size:10px;font-family:var(--font-mono);background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.18);color:#34D399;padding:2px 7px;border-radius:100px}
        .score-num{font-family:var(--font-mono);font-size:30px;font-weight:700;line-height:1;letter-spacing:-0.02em}
        .score-target{font-size:10px;color:var(--text-muted);margin-top:6px;opacity:.6}

        .card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-lg);padding:18px;transition:border-color .25s ease}
        .card:hover{border-color:rgba(255,255,255,.11)}
        .card-title{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:600;margin-bottom:16px;color:var(--text-secondary);letter-spacing:.01em}
        .card-icon{color:rgba(139,92,246,.7);flex-shrink:0}

        .mid-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}

        .road-list{display:flex;flex-direction:column}
        .road-step{display:flex;align-items:center;gap:10px;padding:7px 0;position:relative;transition:opacity .2s}
        .road-step:not(:last-child)::after{content:'';position:absolute;left:12px;top:28px;width:1px;height:calc(100% - 8px);background:rgba(255,255,255,.07)}
        .step-node{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;z-index:1;transition:transform .2s ease}
        .road-step:hover .step-node{transform:scale(1.08)}
        .road-done .step-node{background:#5B4EDD;color:#fff}
        .road-active .step-node{background:transparent;border:2px solid #7C6FF7;color:#7C6FF7;box-shadow:0 0 10px rgba(124,111,247,.3)}
        .road-lock .step-node{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:var(--text-muted)}
        .step-label{font-size:12px;flex:1;transition:color .2s}
        .road-done .step-label{color:var(--text-muted);text-decoration:line-through;text-decoration-color:rgba(255,255,255,.15)}
        .road-active .step-label{font-weight:600;color:var(--text-primary)}
        .road-lock .step-label{color:rgba(255,255,255,.25)}
        .step-badge{font-size:9px;padding:2px 7px;border-radius:100px;letter-spacing:.04em;background:rgba(124,111,247,.12);border:1px solid rgba(124,111,247,.25);color:#A89FF7;flex-shrink:0}

        .stats-list{display:flex;flex-direction:column;gap:16px}
        .stat-row{display:flex;align-items:center;gap:12px}
        .stat-icon-wrap{font-size:16px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:var(--radius-sm);flex-shrink:0}
        .stat-body{flex:1}
        .stat-name{font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px}
        .stat-val{font-size:14px;font-weight:600;line-height:1.2}
        .stat-unit{font-size:11px;font-weight:400;color:var(--text-secondary)}
        .stat-mini-track{height:2px;background:rgba(255,255,255,.06);border-radius:100px;overflow:visible;margin-top:6px}
        .stat-mini-fill{height:100%;border-radius:100px;transition:width .8s cubic-bezier(.4,0,.2,1)}

        .bottom-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .vocab-col{display:flex;flex-direction:column;gap:10px}

        .act-list{list-style:none;display:flex;flex-direction:column}
        .act-item{display:flex;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);transition:opacity .2s}
        .act-item:last-child{border:none;padding-bottom:0}
        .act-item:hover{opacity:.8}
        .act-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}
        .act-body{flex:1}
        .act-title{font-size:12px;font-weight:500;margin-bottom:2px}
        .act-meta{font-size:11px;color:var(--text-muted)}
        .act-tag{display:inline-block;margin-top:5px;font-size:10px;padding:2px 7px;border-radius:100px;background:rgba(16,185,129,.07);border:1px solid rgba(16,185,129,.15);color:#34D399}

        .vocab-card{display:flex;flex-direction:column;gap:11px}
        .vocab-header{display:flex;justify-content:space-between;align-items:center}
        .band-pill{font-size:9px;padding:2px 8px;border-radius:100px;letter-spacing:.06em;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.18);color:rgba(245,158,11,.8);font-family:var(--font-mono)}
        .flip-wrap{perspective:900px;height:120px;cursor:pointer}
        .flip-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.4,0,.2,1)}
        .flip-wrap.flipped .flip-inner{transform:rotateY(180deg)}
        .flip-front,.flip-back{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:var(--radius-md);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:14px;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02)}
        .flip-back{transform:rotateY(180deg)}
        .flip-word{font-size:20px;font-weight:700;font-family:var(--font-heading);margin-bottom:4px;letter-spacing:-.02em}
        .flip-pos{font-size:10px;color:var(--text-muted);font-style:italic}
        .flip-hint{font-size:10px;color:rgba(255,255,255,.2);margin-top:8px}
        .flip-def{font-size:12px;color:var(--text-secondary);line-height:1.6;margin-bottom:6px}
        .flip-ex{font-size:10px;color:var(--text-muted);font-style:italic;line-height:1.5}
        .btn-deck{width:100%;padding:8px;background:rgba(245,158,11,.05);border:1px solid rgba(245,158,11,.15);border-radius:var(--radius-sm);color:rgba(245,158,11,.75);font-family:var(--font-body);font-size:11px;font-weight:500;cursor:pointer;transition:all .2s ease}
        .btn-deck:hover{background:rgba(245,158,11,.1);color:rgba(245,158,11,.95)}
        .btn-deck.added{background:rgba(16,185,129,.07);border-color:rgba(16,185,129,.18);color:#34D399}

        .resume-card{display:flex;flex-direction:column;justify-content:space-between;gap:14px}
        .resume-module{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:rgba(124,111,247,.8);margin-bottom:4px}
        .resume-name{font-size:13px;font-weight:600;font-family:var(--font-heading);margin-bottom:12px;letter-spacing:-.01em}
        .resume-prog-info{display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);margin-bottom:5px}
        .resume-track{height:2px;background:rgba(255,255,255,.06);border-radius:100px;overflow:hidden}
        .resume-fill{height:100%;width:60%;border-radius:100px;background:linear-gradient(90deg,#E8961A,#7C6FF7);box-shadow:0 0 8px rgba(124,111,247,.4)}
        .btn-resume{width:100%;padding:11px;background:linear-gradient(135deg,#5B4EDD 0%,#4338CA 100%);border:1px solid rgba(139,92,246,.3);border-radius:var(--radius-md);color:#fff;font-family:var(--font-body);font-size:12px;font-weight:600;cursor:pointer;letter-spacing:.02em;transition:opacity .2s ease,transform .2s ease}
        .btn-resume:hover{opacity:.9;transform:translateY(-1px)}

        @media(max-width:1100px){.scores-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:800px){.mid-grid,.bottom-grid{grid-template-columns:1fr}.banner{flex-direction:column;align-items:flex-start}.banner-cd-block{width:100%}.banner-cd-nums{justify-content:center}}
      `}</style>
    </div>
  );
}
