'use client';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

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

const ScoreBar = ({ pct, color }: { pct: number; color: string }) => (
  <div style={{ height: 3, background: '#F2F2F7', borderRadius: 100, overflow: 'hidden', marginTop: 10 }}>
    <div style={{ height: '100%', borderRadius: 100, background: color, width: `${pct}%`, transition: 'width .9s cubic-bezier(.4,0,.2,1)' }} />
  </div>
);

function RoadStep({ state, label, badge }: { state: 'done' | 'active' | 'lock'; label: string; badge?: string }) {
  return (
    <div className={`rs rs-${state}`}>
      <div className="rnode">
        {state === 'done' && <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5L9 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        {state === 'active' && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M2.5 1.5l5 3-5 3v-6z" fill="currentColor"/></svg>}
        {state === 'lock' && <svg width="9" height="11" viewBox="0 0 9 11" fill="none"><rect x="0.5" y="4.5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2.5 4.5V3a2 2 0 014 0v1.5" stroke="currentColor" strokeWidth="1.4"/></svg>}
      </div>
      <span className={`rlabel rl-${state}`}>{label}</span>
      {badge && <span className="rbadge">{badge}</span>}
    </div>
  );
}

function ActivityItem({ color, title, meta, tag }: { color: string; title: string; meta: string; tag?: string }) {
  return (
    <li className="act-item">
      <span className="act-dot" style={{ background: color }} />
      <div>
        <div className="act-title">{title}</div>
        <div className="act-meta">{meta}</div>
        {tag && <span className="act-tag">{tag}</span>}
      </div>
    </li>
  );
}

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

  const scores = [
    { skill: 'Listening', score: '6.5', delta: '+0.5', color: '#5E5CE6', badgeBg: '#EEEDFE', badgeColor: '#3C3489', pct: barWidths[0] },
    { skill: 'Reading',   score: '6.0', delta: '+0.5', color: '#30D158', badgeBg: '#E8FAF1', badgeColor: '#1B7A48', pct: barWidths[1] },
    { skill: 'Writing',   score: '5.5', delta: '+0.5', color: '#FF9F0A', badgeBg: '#FFF4E0', badgeColor: '#7A4800', pct: barWidths[2] },
    { skill: 'Speaking',  score: '6.0', delta: '+1.0', color: '#FF375F', badgeBg: '#FEE9EC', badgeColor: '#8B0023', pct: barWidths[3] },
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
    { color: '#5E5CE6', title: 'Writing Task 1 — отправлен',          meta: '2 часа назад',          tag: 'Coherence улучшена → Band 6.5' },
    { color: '#30D158', title: 'Reading Practice — Section 3',         meta: 'Вчера · 34/40 верных' },
    { color: '#FF9F0A', title: 'Словарный набор — Academic Word List', meta: 'Вчера · 25 новых слов' },
    { color: '#C7C7CC', title: 'Listening Mock Test #7',               meta: '2 дня назад · Band 6.5' },
  ];

  const stats = [
    { icon: '🔥', label: 'Серия дней',     value: '14',    unit: 'дней подряд', pct: 70, color: '#FF9F0A' },
    { icon: '⏱',  label: 'Часов учёбы',    value: '47.5',  unit: 'всего',       pct: 55, color: '#5E5CE6' },
    { icon: '✅', label: 'Тестов пройдено', value: '12/30', unit: 'мок-тестов',  pct: 40, color: '#30D158' },
  ];

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main" style={{ background: '#F5F5F7' }}>

        {/* TOP BAR */}
        <div className="d-topbar anim d1">
          <div>
            <h1 className="d-greeting">Привет, <span className="d-name">Yernar</span></h1>
            <p className="d-sub">Готов к практике? Ты на верном пути.</p>
          </div>
          <div className="d-date">{heroDate}</div>
        </div>

        {/* HERO BANNER */}
        <section className="d-hero anim d2">
          <div className="d-hero-left">
            <div className="d-hero-eye">Ежедневная цель</div>
            <div className="d-hero-title">2 урока + 1 практический тест</div>
            <div className="d-hero-bar-bg">
              <div className="d-hero-bar" style={{ width: progWidth }} />
            </div>
            <div className="d-hero-meta">
              <span>73% выполнено</span>
              <span>Осталось: 1 урок</span>
            </div>
          </div>
          <div className="d-cd">
            <div className="d-cd-label">До экзамена</div>
            <div className="d-cd-row">
              {([['Дн', cd.d], ['Ч', cd.h], ['Мин', cd.m], ['Сек', cd.s]] as [string, number][]).map(([lbl, val]) => (
                <div key={lbl} className="d-cd-unit">
                  <div className="d-cd-num">{pad(val)}</div>
                  <div className="d-cd-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCORES */}
        <section className="anim d3">
          <div className="d-sec-hdr">
            <span className="d-sec-title">Текущие баллы</span>
            <span className="d-sec-action">Полный отчёт →</span>
          </div>
          <div className="d-scores">
            {scores.map(c => (
              <div key={c.skill} className="d-score-card">
                <div className="d-score-top">
                  <span className="d-score-skill">{c.skill}</span>
                  <span className="d-score-badge" style={{ background: c.badgeBg, color: c.badgeColor }}>{c.delta} ↑</span>
                </div>
                <div className="d-score-num">{c.score}</div>
                <ScoreBar pct={c.pct} color={c.color} />
                <div className="d-score-target">Цель: 7.0</div>
              </div>
            ))}
          </div>
        </section>

        {/* MID GRID */}
        <div className="d-mid anim d4">
          <div className="d-card">
            <div className="d-card-hdr">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="d-card-icon">
                <path d="M1 2.5h3l2 4-2 4H1M9 6.5h5M11 4.5l3 2-3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Программа обучения
            </div>
            <div className="d-road">
              {roadmap.map((r, i) => <RoadStep key={i} {...r} />)}
            </div>
          </div>

          <div className="d-card">
            <div className="d-card-hdr">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="d-card-icon">
                <path d="M2 11V7M6 11V4M10 11V2M14 11V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Статистика
            </div>
            <div className="d-stats">
              {stats.map(s => (
                <div key={s.label} className="d-stat">
                  <div className="d-stat-ico">{s.icon}</div>
                  <div className="d-stat-body">
                    <div className="d-stat-lbl">{s.label}</div>
                    <div className="d-stat-val">{s.value} <span className="d-stat-unit">{s.unit}</span></div>
                    <div className="d-stat-bar"><div className="d-stat-fill" style={{ width: `${s.pct}%`, background: s.color }} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="d-bottom anim d5">
          <div className="d-card">
            <div className="d-card-hdr">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="d-card-icon">
                <rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 5h7M4 8h5M4 11h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Последняя активность
            </div>
            <ul className="act-list">
              {activity.map((a, i) => <ActivityItem key={i} {...a} />)}
            </ul>
          </div>

          <div className="d-vcol">
            <div className="d-card d-vocab-card">
              <div className="d-vocab-hdr">
                <div className="d-card-hdr" style={{ margin: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="d-card-icon">
                    <rect x="2" y="1" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    <rect x="5" y="4" width="8" height="10" rx="1" fill="#F5F5F7" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M8 7h3M8 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Слово дня
                </div>
                <span className="d-band-pill">Band 8.0</span>
              </div>
              <div className={`d-flip ${vocabFlipped ? 'flipped' : ''}`} onClick={() => setVocabFlipped(v => !v)}>
                <div className="d-flip-inner">
                  <div className="d-flip-front">
                    <div className="d-flip-word">Idiosyncrasy</div>
                    <div className="d-flip-pos">noun · /ˌɪdiəˈsɪŋkrəsi/</div>
                    <div className="d-flip-hint">Нажми для перевода</div>
                  </div>
                  <div className="d-flip-back">
                    <div className="d-flip-def">Особенность поведения, присущая конкретному человеку; причуда</div>
                    <div className="d-flip-ex">&ldquo;One of his idiosyncrasies was turning the volume to an odd number.&rdquo;</div>
                  </div>
                </div>
              </div>
              <button className={`d-btn-deck ${deckAdded ? 'added' : ''}`} onClick={() => { setDeckAdded(true); setTimeout(() => setDeckAdded(false), 2500); }}>
                {deckAdded ? '✓ Добавлено!' : '+ Добавить в колоду'}
              </button>
            </div>

            <div className="d-card d-resume-card">
              <div className="d-res-module">Reading Strategies</div>
              <div className="d-res-name">Урок 3 из 5 — True / False / Not Given</div>
              <div className="d-res-pi"><span>Прогресс</span><span>60%</span></div>
              <div className="d-res-track"><div className="d-res-fill" /></div>
              <button className="d-btn-resume">Продолжить с места остановки</button>
            </div>
          </div>
        </div>

        <div style={{ height: 40 }} />
      </main>

      <style>{`
        .anim{animation:fadeUp .4s ease-out both}
        .d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}.d4{animation-delay:.2s}.d5{animation-delay:.25s}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

        .page-main{padding:28px 28px;display:flex;flex-direction:column;gap:18px}

        .d-topbar{display:flex;justify-content:space-between;align-items:flex-start}
        .d-greeting{font-size:26px;font-weight:700;letter-spacing:-.035em;color:#1D1D1F;line-height:1.1}
        .d-name{color:#5E5CE6}
        .d-sub{font-size:13px;color:#8E8E93;margin-top:4px}
        .d-date{font-size:12px;color:#8E8E93;background:#fff;border:1px solid #E8E8ED;border-radius:20px;padding:6px 14px}

        .d-hero{display:flex;justify-content:space-between;align-items:center;gap:24px;background:#5E5CE6;border-radius:16px;padding:22px 26px;position:relative;overflow:hidden}
        .d-hero::after{content:'';position:absolute;right:-30px;top:-30px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.07);pointer-events:none}
        .d-hero-left{position:relative;z-index:1;flex:1}
        .d-hero-eye{font-size:10px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.12em;margin-bottom:5px}
        .d-hero-title{font-size:16px;font-weight:700;color:#fff;margin-bottom:14px;letter-spacing:-.02em}
        .d-hero-bar-bg{height:4px;background:rgba(255,255,255,.2);border-radius:100px;overflow:hidden;margin-bottom:6px}
        .d-hero-bar{height:100%;border-radius:100px;background:#fff;transition:width .9s cubic-bezier(.4,0,.2,1)}
        .d-hero-meta{display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.6)}
        .d-cd{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:12px 16px;text-align:center;flex-shrink:0;position:relative;z-index:1}
        .d-cd-label{font-size:9px;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.1em;margin-bottom:7px}
        .d-cd-row{display:flex;gap:8px}
        .d-cd-unit{text-align:center;min-width:28px}
        .d-cd-num{font-size:20px;font-weight:700;color:#fff;line-height:1;font-variant-numeric:tabular-nums}
        .d-cd-lbl{font-size:8px;color:rgba(255,255,255,.5);text-transform:uppercase;margin-top:2px;letter-spacing:.07em}

        .d-sec-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:11px}
        .d-sec-title{font-size:12px;font-weight:600;color:#3A3A3C;letter-spacing:.01em}
        .d-sec-action{font-size:12px;color:#5E5CE6;cursor:pointer}
        .d-sec-action:hover{text-decoration:underline}

        .d-scores{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
        .d-score-card{background:#fff;border:1px solid #E8E8ED;border-radius:14px;padding:18px;transition:transform .2s ease,box-shadow .2s ease;cursor:pointer}
        .d-score-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.07)}
        .d-score-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
        .d-score-skill{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#8E8E93}
        .d-score-badge{font-size:10px;font-weight:600;padding:2px 8px;border-radius:20px}
        .d-score-num{font-size:30px;font-weight:700;letter-spacing:-.04em;color:#1D1D1F;line-height:1}
        .d-score-target{font-size:10px;color:#8E8E93;margin-top:5px}

        .d-mid{display:grid;grid-template-columns:3fr 2fr;gap:10px}
        .d-bottom{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .d-card{background:#fff;border:1px solid #E8E8ED;border-radius:14px;padding:18px}
        .d-card-hdr{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:#1D1D1F;margin-bottom:14px}
        .d-card-icon{color:#5E5CE6;flex-shrink:0}

        .d-road{display:flex;flex-direction:column}
        .rs{display:flex;align-items:center;gap:10px;padding:6px 0;position:relative;transition:opacity .15s}
        .rs:not(:last-child)::after{content:'';position:absolute;left:11px;top:26px;width:1px;height:calc(100% - 6px);background:#E8E8ED}
        .rnode{width:23px;height:23px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;transition:transform .2s}
        .rs:hover .rnode{transform:scale(1.1)}
        .rs-done .rnode{background:#5E5CE6;color:#fff}
        .rs-active .rnode{background:#fff;border:2px solid #5E5CE6;color:#5E5CE6;box-shadow:0 0 0 3px rgba(94,92,230,.1)}
        .rs-lock .rnode{background:#F2F2F7;color:#C7C7CC}
        .rlabel{font-size:12px;flex:1}
        .rl-done{color:#C7C7CC;text-decoration:line-through;text-decoration-color:#E8E8ED}
        .rl-active{font-weight:600;color:#1D1D1F}
        .rl-lock{color:#C7C7CC}
        .rbadge{font-size:9px;padding:2px 7px;border-radius:20px;background:#EEEDFE;color:#5E5CE6;font-weight:600;flex-shrink:0}

        .d-stats{display:flex;flex-direction:column;gap:10px}
        .d-stat{display:flex;align-items:center;gap:11px;background:#F9F9FB;border-radius:10px;padding:11px}
        .d-stat-ico{font-size:17px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #E8E8ED;border-radius:8px;flex-shrink:0}
        .d-stat-body{flex:1}
        .d-stat-lbl{font-size:9px;color:#8E8E93;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1px}
        .d-stat-val{font-size:14px;font-weight:700;color:#1D1D1F}
        .d-stat-unit{font-size:11px;font-weight:400;color:#8E8E93}
        .d-stat-bar{height:3px;background:#E8E8ED;border-radius:100px;overflow:hidden;margin-top:5px}
        .d-stat-fill{height:100%;border-radius:100px;transition:width .8s cubic-bezier(.4,0,.2,1)}

        .act-list{list-style:none;display:flex;flex-direction:column}
        .act-item{display:flex;gap:10px;padding:9px 0;border-bottom:1px solid #F2F2F7;transition:opacity .15s}
        .act-item:last-child{border:none;padding-bottom:0}
        .act-item:hover{opacity:.75}
        .act-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:4px}
        .act-title{font-size:12px;font-weight:500;color:#1D1D1F;margin-bottom:2px}
        .act-meta{font-size:11px;color:#8E8E93}
        .act-tag{display:inline-block;margin-top:4px;font-size:10px;padding:2px 7px;border-radius:20px;background:#E8FAF1;color:#1B7A48;font-weight:500}

        .d-vcol{display:flex;flex-direction:column;gap:10px}
        .d-vocab-card{display:flex;flex-direction:column;gap:10px}
        .d-vocab-hdr{display:flex;justify-content:space-between;align-items:center}
        .d-band-pill{font-size:10px;padding:2px 8px;border-radius:20px;background:#FFF4E0;color:#7A4800;font-weight:600}
        .d-flip{perspective:900px;height:110px;cursor:pointer}
        .d-flip-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
        .d-flip.flipped .d-flip-inner{transform:rotateY(180deg)}
        .d-flip-front,.d-flip-back{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:14px;background:#F9F9FB;border:1px solid #E8E8ED}
        .d-flip-back{transform:rotateY(180deg)}
        .d-flip-word{font-size:20px;font-weight:700;color:#1D1D1F;letter-spacing:-.03em;margin-bottom:4px}
        .d-flip-pos{font-size:10px;color:#8E8E93;font-style:italic}
        .d-flip-hint{font-size:10px;color:#C7C7CC;margin-top:6px}
        .d-flip-def{font-size:12px;color:#3A3A3C;line-height:1.6;margin-bottom:6px}
        .d-flip-ex{font-size:10px;color:#8E8E93;font-style:italic;line-height:1.5}
        .d-btn-deck{width:100%;padding:8px;background:#EEEDFE;border:none;border-radius:8px;color:#5E5CE6;font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s}
        .d-btn-deck:hover{background:#DDD9FC}
        .d-btn-deck.added{background:#E8FAF1;color:#1B7A48}

        .d-resume-card{display:flex;flex-direction:column;gap:0}
        .d-res-module{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#5E5CE6;margin-bottom:4px}
        .d-res-name{font-size:13px;font-weight:600;color:#1D1D1F;margin-bottom:12px;letter-spacing:-.01em}
        .d-res-pi{display:flex;justify-content:space-between;font-size:11px;color:#8E8E93;margin-bottom:5px}
        .d-res-track{height:3px;background:#F2F2F7;border-radius:100px;overflow:hidden;margin-bottom:16px}
        .d-res-fill{height:100%;width:60%;border-radius:100px;background:linear-gradient(90deg,#FF9F0A,#5E5CE6)}
        .d-btn-resume{width:100%;padding:12px;background:#5E5CE6;border:none;border-radius:10px;color:#fff;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:-.01em;transition:opacity .15s,transform .15s}
        .d-btn-resume:hover{opacity:.88;transform:translateY(-1px)}

        @media(max-width:1100px){.d-scores{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:800px){.d-mid,.d-bottom{grid-template-columns:1fr}.d-hero{flex-direction:column}.d-cd{width:100%}}
      `}</style>
    </div>
  );
}
