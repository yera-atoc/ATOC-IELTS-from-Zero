'use client';
import { useState, useEffect, useRef } from 'react';

type Part = 0 | 1 | 2;

interface Question {
  n: string;
  text: string;
  tip: string;
}

const PARTS: { title: string; meta: string; badge: string; badgeBg: string; badgeColor: string; barColor: string; barPct: number; qs: Question[] }[] = [
  {
    title: 'Part 1 — Вопросы о себе',
    meta: '15 вопросов',
    badge: '8/15 готово',
    badgeBg: '#EEEDFE', badgeColor: '#3C3489',
    barColor: '#5E5CE6', barPct: 53,
    qs: [
      { n: 'Q1', text: 'Do you work or are you a student? What do you study?', tip: 'Расскажи подробнее — почему выбрал эту специальность' },
      { n: 'Q2', text: 'What do you like to do in your free time?', tip: 'Назови 2–3 хобби и объясни почему они нравятся' },
      { n: 'Q3', text: 'Do you prefer spending time indoors or outdoors? Why?', tip: 'Дай причину + пример из жизни' },
      { n: 'Q4', text: 'How often do you use public transport?', tip: 'Частота + причина + сравнение с альтернативой' },
      { n: 'Q5', text: 'What kind of music do you enjoy listening to?', tip: 'Назови жанр + объясни настроение которое создаёт' },
      { n: 'Q6', text: 'Do you enjoy cooking? Why or why not?', tip: 'Личный опыт + конкретный пример' },
      { n: 'Q7', text: 'How important is sport in your life?', tip: 'Частота + вид спорта + польза' },
    ],
  },
  {
    title: 'Part 2 — Монолог по карточке',
    meta: '10 карточек',
    badge: '2/10 готово',
    badgeBg: '#FFF4E0', badgeColor: '#7A4800',
    barColor: '#FF9F0A', barPct: 20,
    qs: [
      { n: 'Тема', text: 'Describe a place you have visited that you particularly liked.\n\nYou should say:\n• where this place is\n• when you went there\n• what you did there\nand explain why you liked it so much.', tip: 'Говори 2 минуты — используй таймер справа' },
      { n: 'Тема', text: 'Describe a person who has had a great influence on your life.\n\nYou should say:\n• who this person is\n• how long you have known them\n• what they have done for you\nand explain why they have influenced you so much.', tip: 'Структура: введение → детали → влияние → вывод' },
      { n: 'Тема', text: 'Describe an interesting book you have read.\n\nYou should say:\n• what the book was about\n• why you decided to read it\n• what you found most interesting\nand explain what you learned from it.', tip: 'Используй прошедшее время и разнообразные прилагательные' },
    ],
  },
  {
    title: 'Part 3 — Дискуссия',
    meta: '12 вопросов',
    badge: '0/12 готово',
    badgeBg: '#FEE9EC', badgeColor: '#8B0023',
    barColor: '#FF375F', barPct: 0,
    qs: [
      { n: 'Q1', text: 'How important is it for young people to travel abroad?', tip: 'Аргумент за + против + своё мнение' },
      { n: 'Q2', text: 'Do you think technology has made people more or less sociable?', tip: 'Acknowledge both sides, then give your view' },
      { n: 'Q3', text: 'What role should governments play in protecting the environment?', tip: 'Policy + examples + long-term thinking' },
      { n: 'Q4', text: 'How has the role of women in society changed in recent years?', tip: 'Historical comparison + current trends + future outlook' },
      { n: 'Q5', text: 'Do you think people today have a better quality of life than in the past?', tip: 'Define quality of life, then compare with evidence' },
    ],
  },
];

const PHASES = [
  { label: 'Подготовка', sub: 'Читай карточку и делай заметки', seconds: 60 },
  { label: 'Монолог', sub: 'Говори не останавливаясь!', seconds: 120 },
];

const TIPS = [
  'Используй linking words: However, In addition, On the other hand',
  'Не молчи — думай вслух: "That\'s an interesting question..."',
  'Расширяй ответы: причина + пример + мнение',
  'Избегай слов very, good, nice — используй синонимы',
];

const CRITERIA = [
  { label: 'Fluency', score: '6.5', pct: 70, color: '#5E5CE6' },
  { label: 'Vocabulary', score: '6.0', pct: 60, color: '#FF9F0A' },
  { label: 'Grammar', score: '6.0', pct: 65, color: '#30D158' },
  { label: 'Pronunciation', score: '7.0', pct: 75, color: '#FF375F' },
];

export default function SpeakingPage() {
  const [curPart, setCurPart] = useState<Part>(0);
  const [curQ, setCurQ] = useState(0);
  const [phase, setPhase] = useState(0);
  const [secs, setSecs] = useState(60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const secsRef = useRef(60);
  const phaseRef = useRef(0);

  const handleSetPart = (i: Part) => { setCurPart(i); setCurQ(0); };

  const timerStart = () => {
    setRunning(true);
    setDone(false);
    ivRef.current = setInterval(() => {
      secsRef.current--;
      if (secsRef.current < 0) {
        if (phaseRef.current === 0) {
          phaseRef.current = 1;
          setPhase(1);
          secsRef.current = PHASES[1].seconds;
        } else {
          if (ivRef.current) clearInterval(ivRef.current);
          setRunning(false);
          setDone(true);
          secsRef.current = 0;
        }
      }
      setSecs(secsRef.current);
    }, 1000);
  };

  const timerPause = () => {
    if (ivRef.current) clearInterval(ivRef.current);
    setRunning(false);
  };

  const timerReset = () => {
    if (ivRef.current) clearInterval(ivRef.current);
    setRunning(false);
    setDone(false);
    setPhase(0);
    setSecs(60);
    secsRef.current = 60;
    phaseRef.current = 0;
  };

  useEffect(() => () => { if (ivRef.current) clearInterval(ivRef.current); }, []);

  const m = Math.floor(secs / 60);
  const s = secs % 60;
  const timeStr = `${m}:${s < 10 ? '0' : ''}${s}`;
  const part = PARTS[curPart];

  return (
    <div className="sp-page">

      {/* Header */}
      <div className="sp-header">
        <div>
          <h1 className="sp-title">Speaking Practice</h1>
          <p className="sp-sub">Тренируй устную речь по всем 3 частям экзамена IELTS</p>
        </div>
      </div>

      {/* Part tabs */}
      <div className="sp-parts">
        {PARTS.map((p, i) => (
          <button key={i} className={`sp-part-card ${curPart === i ? 'sp-part-active' : ''}`}
            onClick={() => handleSetPart(i as Part)}
            style={curPart === i ? { borderColor: p.barColor, boxShadow: `0 8px 24px ${p.barColor}22` } : {}}>
            <div className="sp-part-top">
              <span className="sp-part-num">Part {i + 1}</span>
              <span className="sp-part-badge" style={{ background: p.badgeBg, color: p.badgeColor }}>{p.badge}</span>
            </div>
            <div className="sp-part-title">{['Введение', 'Монолог', 'Дискуссия'][i]}</div>
            <div className="sp-part-desc">{['Общие вопросы о себе, работе, хобби. 4–5 мин.', '1 мин подготовка, 2 мин монолог по карточке.', 'Абстрактные вопросы, аргументы, мнения. 4–5 мин.'][i]}</div>
            <div className="sp-bar-bg">
              <div className="sp-bar-fill" style={{ width: `${p.barPct}%`, background: p.barColor }} />
            </div>
          </button>
        ))}
      </div>

      {/* Main grid */}
      <div className="sp-grid">

        {/* Questions */}
        <div className="sp-q-card">
          <div className="sp-q-hdr">
            <span className="sp-q-hdr-title">{part.title}</span>
            <span className="sp-q-hdr-meta">{part.meta}</span>
          </div>
          <div>
            {part.qs.map((q, i) => (
              <div key={i}
                className={`sp-q-item ${curQ === i ? 'sp-q-active' : ''}`}
                onClick={() => setCurQ(i)}
                style={curQ === i ? { borderLeft: `3px solid ${part.barColor}`, background: '#F5F4FF' } : {}}>
                <div className="sp-q-num">{q.n}</div>
                <div className="sp-q-text">{q.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</div>
                {curQ === i && <div className="sp-q-tip" style={{ color: part.barColor }}>{q.tip}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sp-side">

          {/* Timer */}
          <div className="sp-timer" style={{ background: curPart === 1 ? '#5E5CE6' : curPart === 0 ? '#1D1D1F' : '#FF375F' }}>
            <div className="sp-t-label">{curPart === 1 ? `Таймер — ${PHASES[phase].label}` : 'Таймер Part 2'}</div>
            <div className="sp-t-phase">{PHASES[phase].sub}</div>
            <div className="sp-t-time">{timeStr}</div>
            {curPart === 1 && (
              <div className="sp-t-phase-indicator">
                <span style={{ opacity: phase === 0 ? 1 : 0.4 }}>● Подготовка</span>
                <span style={{ margin: '0 8px', opacity: 0.4 }}>→</span>
                <span style={{ opacity: phase === 1 ? 1 : 0.4 }}>● Монолог</span>
              </div>
            )}
            <div className="sp-t-btns">
              {done ? (
                <button className="sp-t-btn sp-t-start" onClick={timerReset}>Ещё раз</button>
              ) : running ? (
                <button className="sp-t-btn sp-t-start" onClick={timerPause}>Пауза</button>
              ) : (
                <button className="sp-t-btn sp-t-start" onClick={timerStart}>
                  {secs === PHASES[0].seconds ? 'Старт' : 'Продолжить'}
                </button>
              )}
              <button className="sp-t-btn sp-t-reset" onClick={timerReset}>Сброс</button>
            </div>
            {done && <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', textAlign: 'center', marginTop: 8 }}>Отличная работа! Время вышло.</div>}
          </div>

          {/* Tips */}
          <div className="sp-card">
            <div className="sp-card-title">Советы для высокого балла</div>
            {TIPS.map((t, i) => (
              <div key={i} className="sp-tip-item">
                <div className="sp-tip-dot" />
                <div className="sp-tip-text">{t}</div>
              </div>
            ))}
          </div>

          {/* Score criteria */}
          <div className="sp-card">
            <div className="sp-card-title">Критерии оценки</div>
            {CRITERIA.map(c => (
              <div key={c.label} className="sp-crit-row">
                <span className="sp-crit-lbl">{c.label}</span>
                <div className="sp-crit-bar-bg">
                  <div className="sp-crit-bar-f" style={{ width: `${c.pct}%`, background: c.color }} />
                </div>
                <span className="sp-crit-val">{c.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 40 }} />

      <style>{`
        .sp-page { background:#F5F5F7; padding:28px; min-height:100vh; }
        .sp-header { margin-bottom:20px }
        .sp-title { font-size:26px; font-weight:700; letter-spacing:-.035em; color:#1D1D1F; line-height:1.1 }
        .sp-sub { font-size:13px; color:#8E8E93; margin-top:4px }

        .sp-parts { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:20px }
        .sp-part-card {
          background:#fff; border:1px solid #E8E8ED; border-radius:14px;
          padding:16px 18px; cursor:pointer; text-align:left;
          transition:box-shadow .2s, border-color .2s, transform .2s;
        }
        .sp-part-card:hover { transform:translateY(-1px) }
        .sp-part-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px }
        .sp-part-num { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#8E8E93 }
        .sp-part-badge { font-size:10px; font-weight:600; padding:2px 8px; border-radius:20px }
        .sp-part-title { font-size:14px; font-weight:700; color:#1D1D1F; margin-bottom:4px; letter-spacing:-.02em }
        .sp-part-desc { font-size:11px; color:#8E8E93; line-height:1.5 }
        .sp-bar-bg { height:3px; background:#F2F2F7; border-radius:100px; overflow:hidden; margin-top:10px }
        .sp-bar-fill { height:100%; border-radius:100px; transition:width .6s ease }

        .sp-grid { display:grid; grid-template-columns:1fr 320px; gap:14px }

        .sp-q-card { background:#fff; border:1px solid #E8E8ED; border-radius:14px; overflow:hidden }
        .sp-q-hdr { padding:14px 18px; border-bottom:1px solid #F2F2F7; display:flex; justify-content:space-between; align-items:center }
        .sp-q-hdr-title { font-size:14px; font-weight:700; color:#1D1D1F; letter-spacing:-.02em }
        .sp-q-hdr-meta { font-size:12px; color:#8E8E93 }
        .sp-q-item {
          padding:14px 18px; border-bottom:1px solid #F2F2F7; cursor:pointer;
          transition:background .15s; border-left:3px solid transparent;
        }
        .sp-q-item:last-child { border-bottom:none }
        .sp-q-item:hover { background:#F9F9FB }
        .sp-q-num { font-size:10px; font-weight:700; color:#8E8E93; text-transform:uppercase; letter-spacing:.08em; margin-bottom:4px }
        .sp-q-text { font-size:13px; color:#1D1D1F; line-height:1.6; font-weight:500 }
        .sp-q-tip { font-size:11px; margin-top:6px; font-weight:500 }

        .sp-side { display:flex; flex-direction:column; gap:12px }

        .sp-timer { border-radius:14px; padding:20px; color:#fff; text-align:center; transition:background .3s }
        .sp-t-label { font-size:9px; color:rgba(255,255,255,.6); text-transform:uppercase; letter-spacing:.12em; margin-bottom:4px }
        .sp-t-phase { font-size:12px; color:rgba(255,255,255,.75); margin-bottom:10px }
        .sp-t-time { font-size:48px; font-weight:700; letter-spacing:-.04em; line-height:1; margin-bottom:4px; font-variant-numeric:tabular-nums }
        .sp-t-phase-indicator { font-size:10px; color:rgba(255,255,255,.6); margin-bottom:14px }
        .sp-t-btns { display:flex; gap:8px; margin-top:14px }
        .sp-t-btn { flex:1; padding:10px; border-radius:9px; border:none; font-size:12px; font-weight:700; cursor:pointer; font-family:inherit; transition:opacity .15s }
        .sp-t-btn:hover { opacity:.85 }
        .sp-t-start { background:#fff; color:#1D1D1F }
        .sp-t-reset { background:rgba(255,255,255,.15); color:#fff }

        .sp-card { background:#fff; border:1px solid #E8E8ED; border-radius:14px; padding:16px }
        .sp-card-title { font-size:13px; font-weight:700; color:#1D1D1F; margin-bottom:12px; letter-spacing:-.01em }
        .sp-tip-item { display:flex; gap:8px; padding:7px 0; border-bottom:1px solid #F2F2F7 }
        .sp-tip-item:last-child { border:none; padding-bottom:0 }
        .sp-tip-dot { width:6px; height:6px; border-radius:50%; background:#5E5CE6; flex-shrink:0; margin-top:5px }
        .sp-tip-text { font-size:12px; color:#3A3A3C; line-height:1.55 }
        .sp-crit-row { display:flex; align-items:center; gap:10px; margin-bottom:8px }
        .sp-crit-row:last-child { margin-bottom:0 }
        .sp-crit-lbl { font-size:11px; color:#8E8E93; width:88px; flex-shrink:0 }
        .sp-crit-bar-bg { flex:1; height:4px; background:#F2F2F7; border-radius:100px; overflow:hidden }
        .sp-crit-bar-f { height:100%; border-radius:100px }
        .sp-crit-val { font-size:12px; font-weight:700; color:#1D1D1F; width:26px; text-align:right; flex-shrink:0 }

        @media(max-width:900px){
          .sp-parts { grid-template-columns:1fr }
          .sp-grid { grid-template-columns:1fr }
        }
      `}</style>
    </div>
  );
}
