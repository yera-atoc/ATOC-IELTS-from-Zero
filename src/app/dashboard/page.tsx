'use client';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';

/* ── Countdown hook ── */
function useCountdown(daysAhead: number) {
  const target = new Date();
  target.setDate(target.getDate() + daysAhead);
  target.setHours(9, 0, 0, 0);

  const calc = () => {
    const diff = target.getTime() - Date.now();
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

/* ── Sparkline data ── */
const SparkLine = ({ color, points }: { color: string; points: string }) => (
  <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: '100%', height: 32, overflow: 'visible' }}>
    <defs>
      <linearGradient id={`sp-${color}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path d={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={points + ' L100,30 L0,30Z'} fill={`url(#sp-${color})`}/>
    <circle cx="100" cy={points.split(' ').at(-1)?.split(',')[1] ?? '8'} r="3" fill={color}/>
  </svg>
);

export default function DashboardPage() {
  const cd = useCountdown(14);
  const [heroDate, setHeroDate] = useState('');
  const [progWidth, setProgWidth] = useState('0%');
  const [ringOffset, setRingOffset] = useState(251.2);
  const [flipClass, setFlipClass] = useState('');
  const [deckAdded, setDeckAdded] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  useEffect(() => {
    setHeroDate(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
    const t1 = setTimeout(() => setProgWidth('73%'), 400);
    const t2 = setTimeout(() => setRingOffset(251.2 * (1 - 6 / 9)), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const togglePanel = (id: string) => setOpenPanel(prev => prev === id ? null : id);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">

        {/* 1 ── HERO */}
        <section className="hero-section anim d1">
          <div className="hero-inner">
            <div className="hero-top">
              <div>
                <h1 className="hero-greeting">Welcome back, Yernar! 🎯</h1>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="hero-date">{heroDate}</div>
                <div className="daily-goal-card" style={{ marginTop: 8 }}>
                  <span className="goal-dot"/>
                  Complete 2 lessons · 1 practice test
                </div>
              </div>
            </div>
            <div>
              <div className="hero-progress-info">
                <span className="hero-progress-label">Daily Goal Progress</span>
                <span className="hero-progress-pct">73%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: progWidth }}/>
              </div>
              <div className="hero-micro">
                You&apos;re <span>73% of the way to Band 7.0</span> — keep going!
              </div>
            </div>
          </div>
        </section>

        {/* 2 ── SCORES */}
        <section className="anim d2">
          <div className="section-header">
            <span className="section-title">📊 Live Band Scores</span>
            <span className="section-action">View full report →</span>
          </div>
          <div className="scores-grid">
            {[
              { skill: 'Listening', score: '6.5', delta: '+0.5', color: '#3B82F6', cls: 'listening', pts: 'M0,22 L25,18 L50,20 L75,12 L100,8' },
              { skill: 'Reading',   score: '6.0', delta: '+0.5', color: '#10B981', cls: 'reading',   pts: 'M0,24 L25,20 L50,22 L75,14 L100,10' },
              { skill: 'Writing',   score: '5.5', delta: '+0.5', color: '#F59E0B', cls: 'writing',   pts: 'M0,26 L25,24 L50,20 L75,18 L100,14' },
              { skill: 'Speaking',  score: '6.0', delta: '+1.0', color: '#8B5CF6', cls: 'speaking',  pts: 'M0,28 L25,22 L50,18 L75,14 L100,8' },
            ].map(c => (
              <div key={c.skill} className={`score-card ${c.cls}`}>
                <div className="score-skill">{c.skill}</div>
                <div className="score-row">
                  <div className="score-value">{c.score}</div>
                  <div className="score-badge">↑ {c.delta}</div>
                </div>
                <div className="sparkline-wrap">
                  <SparkLine color={c.color} points={c.pts}/>
                </div>
                <button className="btn-practice">▶ Start Practice</button>
              </div>
            ))}
          </div>
        </section>

        {/* 3 ── LEARNING PATH */}
        <section className="learning-path-section anim d3">
          <div className="section-header">
            <span className="section-title">🗺️ Learning Roadmap</span>
            <span className="section-action">See all modules →</span>
          </div>
          <div className="roadmap-container">
            <div className="roadmap-grid">
              {[
                { id: 'foundation', label: 'Foundation',       state: 'completed', lessons: ['IELTS Overview','Band Descriptors','Test Format'] },
                { id: 'grammar',    label: 'Grammar',           state: 'completed', lessons: ['Tense Review','Conditionals','Complex Sentences'] },
                { id: 'listening',  label: 'Listening Skills',  state: 'completed', lessons: ['Note-Taking','Section 1–4','Academic Lectures'] },
                { id: 'reading',    label: 'Reading Strategies',state: 'current',   lessons: ['Skimming & Scanning','T/F/NG Questions ← Now','Summary Completion'] },
                { id: 'wt1',        label: 'Writing Task 1',    state: 'locked',    lessons: [] },
                { id: 'wt2',        label: 'Writing Task 2',    state: 'locked',    lessons: [] },
                { id: 'speaking2',  label: 'Speaking Fluency',  state: 'locked',    lessons: [] },
                { id: 'mock',       label: 'Full Mock Test',    state: 'locked',    lessons: [] },
              ].map(n => (
                <div key={n.id} className="node-wrap" onClick={() => n.state !== 'locked' && togglePanel(n.id)}>
                  <div className={`node ${n.state}`}>
                    {n.state === 'completed' && (
                      <svg className="node-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                    {n.state === 'current' && (
                      <svg className="node-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    )}
                    {n.state === 'locked' && (
                      <svg className="node-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  <div className={`node-label${n.state === 'current' ? ' active-label' : ''}`}>{n.label}</div>
                  {openPanel === n.id && n.lessons.length > 0 && (
                    <div className="node-panel open">
                      <div className="panel-title">{n.label}</div>
                      {n.lessons.map((l, i) => (
                        <div key={l} className="panel-lesson">
                          <span className={`lesson-dot ${i === 0 ? 'done' : i === 1 ? 'next' : 'lock'}`}/>
                          {l}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="node-wrap" style={{ gridColumn: '2 / 4', alignItems: 'center' }}>
                <div className="node locked" style={{ width: 60, height: 60, fontSize: 22 }}>🏆</div>
                <div className="node-label" style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-gold)' }}>Exam Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 ── STATS */}
        <section className="anim d4" style={{ marginBottom: 28 }}>
          <div className="section-header">
            <span className="section-title">⚡ Performance Stats</span>
          </div>
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon-row">
                <div className="stat-icon-wrap gold">🔥</div>
                <div className="stat-tag">Streak</div>
              </div>
              <div className="stat-value">14</div>
              <div className="stat-sub">Days consecutive study</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-row">
                <div className="stat-icon-wrap blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#3B82F6" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 2.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="stat-tag">Study Time</div>
              </div>
              <div className="stat-value">47.5</div>
              <div className="stat-sub">hours total logged</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-row">
                <div className="stat-icon-wrap green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="3" stroke="#10B981" strokeWidth="1.5"/>
                    <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-tag">Tests</div>
              </div>
              <div className="stat-value">12</div>
              <div className="stat-sub">of 30 tests completed</div>
              <div className="mini-progress-track">
                <div className="mini-progress-fill" style={{ width: '40%' }}/>
              </div>
            </div>
          </div>
        </section>

        {/* 5 ── ACTIVITY + RESUME */}
        <div className="bottom-grid anim d5">
          <div className="activity-card">
            <div className="section-header" style={{ marginBottom: 14 }}>
              <span className="section-title" style={{ fontSize: 14 }}>📋 Recent Activity</span>
            </div>
            <ul className="timeline">
              {[
                { dot: 'gold',  title: 'Writing Task 1 Submitted',           meta: '2 hours ago',               feedback: 'Coherence & Cohesion improved → Band 6.5' },
                { dot: 'blue',  title: 'Reading Practice — Section 3',        meta: 'Yesterday · 34/40 correct' },
                { dot: 'green', title: 'Vocabulary Deck — Academic Word List', meta: 'Yesterday · 25 new words' },
                { dot: 'muted', title: 'Listening Mock Test #7',               meta: '2 days ago · Band 6.5' },
              ].map((item, i) => (
                <li key={i} className="timeline-item">
                  <span className={`tl-dot ${item.dot}`}/>
                  <div className="tl-content">
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-meta">{item.meta}</div>
                    {item.feedback && <div className="tl-feedback">{item.feedback}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="resume-card">
            <div>
              <div className="section-title" style={{ fontSize: 14, marginBottom: 14 }}>▶ Resume Learning</div>
              <div className="resume-stats">
                {[['T/F','Current','var(--accent-blue)'],['60%','Complete','var(--text-primary)'],['~12m','Left','var(--accent-gold)']].map(([val,key,col])=>(
                  <div key={key} className="rstat">
                    <div className="rstat-val" style={{ color: col }}>{val}</div>
                    <div className="rstat-key">{key}</div>
                  </div>
                ))}
              </div>
              <div className="resume-title">Reading Strategies</div>
              <div className="resume-lesson">Lesson 3 of 5 — True/False/Not Given</div>
              <div className="resume-progress-info"><span>Progress</span><span>60%</span></div>
              <div className="resume-track"><div className="resume-fill"/></div>
            </div>
            <button className="btn-resume">⚡ Resume where you left off</button>
          </div>
        </div>

        {/* 6 ── VOCAB + MOCK */}
        <div className="vocab-mock-section anim d6">

          {/* Vocab flip card */}
          <div className="vocab-card">
            <div className="vocab-header">
              <div className="section-title" style={{ fontSize: 14 }}>💬 Word of the Day</div>
              <div className="band-tag">Band 8.0</div>
            </div>
            <div className="flip-card-wrapper" onClick={() => setFlipClass(c => c ? '' : 'flipped')}>
              <div className={`flip-card ${flipClass}`}>
                <div className="flip-front">
                  <div className="flip-word">Idiosyncrasy</div>
                  <div className="flip-part">noun /ˌɪdiəˈsɪŋkrəsi/</div>
                  <div className="flip-hint">Tap to reveal definition</div>
                </div>
                <div className="flip-back">
                  <div className="flip-def">A mode of behaviour or way of thought peculiar to an individual.</div>
                  <div className="flip-example">&ldquo;One of his idiosyncrasies was turning the volume to an odd number.&rdquo;</div>
                </div>
              </div>
            </div>
            <button
              className={`btn-add-deck${deckAdded ? ' added' : ''}`}
              onClick={() => { setDeckAdded(true); setTimeout(() => setDeckAdded(false), 2500); }}
            >
              {deckAdded ? '✓ Added to deck!' : '+ Add to my deck'}
            </button>
          </div>

          {/* Countdown */}
          <div className="mock-banner">
            <div className="mock-top">
              <div>
                <div className="mock-title">Full IELTS Mock Examination</div>
                <div className="mock-duration">Duration: 2h 45min · All 4 Sections</div>
              </div>
              <div className="mock-badge">⚠ Upcoming</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Time Until Exam
            </div>
            <div className="countdown-display">
              {[['Days', cd.d], ['Hours', cd.h], ['Mins', cd.m], ['Secs', cd.s]].map(([lbl, val], i) => (
                <>
                  {i > 0 && <div key={`sep-${i}`} className="countdown-sep">:</div>}
                  <div key={String(lbl)} className="countdown-unit">
                    <div className="countdown-num">{pad(Number(val))}</div>
                    <div className="countdown-lbl">{lbl}</div>
                  </div>
                </>
              ))}
            </div>
            <button className="btn-exam">🎯 Register for Mock Test Now</button>
          </div>
        </div>

        <div style={{ height: 40 }}/>
      </main>

      <style>{`
        /* ── Hero ── */
        .hero-section { margin-bottom: 28px; }
        .hero-inner {
          background: linear-gradient(135deg,rgba(59,130,246,.12) 0%,rgba(99,102,241,.08) 50%,rgba(20,28,51,0) 100%);
          border: 1px solid rgba(59,130,246,.15);
          border-radius: var(--radius-xl);
          padding: 28px 32px;
          position: relative; overflow: hidden;
        }
        .hero-inner::before {
          content:''; position:absolute; right:-60px; top:-60px;
          width:220px; height:220px;
          background:radial-gradient(circle,rgba(59,130,246,.12) 0%,transparent 70%);
          pointer-events:none;
        }
        .hero-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px; }
        .hero-greeting { font-family:var(--font-heading); font-size:26px; font-weight:800; }
        .hero-date { font-size:12px; color:var(--text-secondary); }
        .daily-goal-card {
          display:flex; align-items:center; gap:10px;
          background:rgba(255,255,255,.04); border:1px solid var(--border);
          border-radius:var(--radius-md); padding:10px 14px;
          font-size:12px; color:var(--text-secondary);
        }
        .goal-dot { width:8px; height:8px; border-radius:50%; background:var(--accent-blue); box-shadow:0 0 6px var(--accent-blue); }
        .hero-progress-info { display:flex; justify-content:space-between; margin-bottom:8px; }
        .hero-progress-label { font-size:12px; color:var(--text-secondary); }
        .hero-progress-pct { font-family:var(--font-mono); font-size:13px; font-weight:600; color:var(--accent-blue); }
        .hero-micro { margin-top:8px; font-size:11px; color:var(--text-secondary); }
        .hero-micro span { color:var(--accent-gold); font-weight:600; }

        /* ── Scores ── */
        .scores-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:28px; }
        .score-card {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:var(--radius-lg); padding:18px 16px;
          cursor:pointer; transition:var(--transition); position:relative; overflow:hidden;
        }
        .score-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px; opacity:0; transition:opacity .2s;
        }
        .score-card.listening::before { background:linear-gradient(90deg,#3B82F6,#6366F1); }
        .score-card.reading::before   { background:linear-gradient(90deg,#10B981,#06B6D4); }
        .score-card.writing::before   { background:linear-gradient(90deg,#F59E0B,#EF4444); }
        .score-card.speaking::before  { background:linear-gradient(90deg,#8B5CF6,#EC4899); }
        .score-card:hover { transform:translateY(-3px); background:var(--bg-card-hover); }
        .score-card:hover::before { opacity:1; }
        .score-skill { font-size:10px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--text-secondary); margin-bottom:8px; }
        .score-row { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:10px; }
        .score-value { font-family:var(--font-heading); font-size:34px; font-weight:800; line-height:1; }
        .score-badge {
          display:flex; align-items:center; gap:3px;
          background:rgba(245,158,11,.12); border:1px solid rgba(245,158,11,.25);
          border-radius:20px; padding:3px 8px;
          font-family:var(--font-mono); font-size:10px; font-weight:600; color:var(--accent-gold);
          margin-bottom:4px;
        }
        .sparkline-wrap { height:32px; margin-bottom:12px; }
        .btn-practice {
          width:100%; padding:7px;
          background:rgba(59,130,246,.08); border:1px solid rgba(59,130,246,.2);
          border-radius:var(--radius-sm); color:var(--accent-blue);
          font-family:var(--font-body); font-size:11px; font-weight:600;
          cursor:pointer; transition:var(--transition);
        }
        .btn-practice:hover { background:rgba(59,130,246,.16); }

        /* ── Learning path ── */
        .learning-path-section { margin-bottom:28px; }
        .roadmap-container {
          background:var(--bg-card); border:1px solid var(--border);
          border-radius:var(--radius-xl); padding:28px 32px; position:relative; overflow:hidden;
        }
        .roadmap-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; position:relative; }
        .node-wrap { position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; padding:12px 8px 20px; }
        .node {
          width:52px; height:52px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:var(--transition); position:relative; flex-shrink:0;
        }
        .node.completed { background:linear-gradient(135deg,var(--accent-blue),#6366F1); box-shadow:0 0 16px rgba(59,130,246,.35); }
        .node.completed:hover { transform:scale(1.08); }
        .node.current { background:linear-gradient(135deg,#F59E0B,#EF4444); box-shadow:0 0 20px rgba(245,158,11,.4); }
        .node.current::after {
          content:''; position:absolute; inset:-8px; border-radius:50%;
          border:2px solid rgba(245,158,11,.4);
          animation:pulse-ring 2s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse-ring { 0%{transform:scale(.9);opacity:1} 50%{transform:scale(1.15);opacity:.3} 100%{transform:scale(.9);opacity:1} }
        .node.locked { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.08); opacity:.45; cursor:not-allowed; }
        .node-icon { width:20px; height:20px; color:#fff; }
        .node-label { font-size:10px; font-weight:600; color:var(--text-secondary); text-align:center; margin-top:8px; max-width:80px; line-height:1.3; }
        .node-label.active-label { color:var(--text-primary); }
        .node-panel {
          position:absolute; top:calc(100% + 8px); left:50%; transform:translateX(-50%);
          width:220px; background:#1A2444; border:1px solid rgba(59,130,246,.25);
          border-radius:var(--radius-md); padding:14px; z-index:200;
          box-shadow:0 20px 40px rgba(0,0,0,.5); animation:fadeUp .2s ease-out;
        }
        .panel-title { font-size:12px; font-weight:700; margin-bottom:10px; }
        .panel-lesson { display:flex; align-items:center; gap:8px; padding:6px 0; border-bottom:1px solid var(--border-subtle); font-size:11px; color:var(--text-secondary); }
        .panel-lesson:last-child { border:none; }
        .lesson-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
        .lesson-dot.done { background:var(--accent-blue); }
        .lesson-dot.next { background:var(--accent-gold); }
        .lesson-dot.lock { background:var(--text-muted); }

        /* ── Stats ── */
        .stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-bottom:28px; }
        .stat-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; transition:var(--transition); }
        .stat-card:hover { transform:translateY(-2px); box-shadow:var(--shadow-glow); }
        .stat-icon-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
        .stat-icon-wrap { width:36px; height:36px; border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center; }
        .stat-icon-wrap.blue  { background:rgba(59,130,246,.12); }
        .stat-icon-wrap.gold  { background:rgba(245,158,11,.12); }
        .stat-icon-wrap.green { background:rgba(16,185,129,.12); }
        .stat-tag { font-size:10px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:var(--text-muted); }
        .stat-value { font-family:var(--font-mono); font-size:28px; font-weight:700; line-height:1; margin-bottom:4px; }
        .stat-sub { font-size:11px; color:var(--text-secondary); }
        .mini-progress-track { height:4px; background:rgba(255,255,255,.06); border-radius:100px; overflow:hidden; margin-top:10px; }
        .mini-progress-fill  { height:100%; border-radius:100px; background:linear-gradient(90deg,var(--accent-green),#06B6D4); }

        /* ── Activity + resume ── */
        .bottom-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:28px; }
        .activity-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; }
        .timeline { list-style:none; }
        .timeline-item { display:flex; gap:12px; padding-bottom:16px; position:relative; }
        .timeline-item:last-child { padding-bottom:0; }
        .timeline-item::before { content:''; position:absolute; left:5px; top:18px; width:1px; height:calc(100% - 8px); background:var(--border); }
        .timeline-item:last-child::before { display:none; }
        .tl-dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; margin-top:3px; position:relative; z-index:1; }
        .tl-dot.blue  { background:var(--accent-blue);  box-shadow:0 0 8px rgba(59,130,246,.5); }
        .tl-dot.gold  { background:var(--accent-gold);  box-shadow:0 0 8px rgba(245,158,11,.5); }
        .tl-dot.green { background:var(--accent-green); box-shadow:0 0 8px rgba(16,185,129,.5); }
        .tl-dot.muted { background:var(--text-muted); }
        .tl-content { flex:1; }
        .tl-title { font-size:12px; font-weight:600; margin-bottom:2px; }
        .tl-meta  { font-size:11px; color:var(--text-secondary); }
        .tl-feedback { margin-top:6px; background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.15); border-radius:6px; padding:6px 8px; font-size:10px; color:var(--accent-green); }
        .resume-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; display:flex; flex-direction:column; justify-content:space-between; }
        .resume-title { font-family:var(--font-heading); font-size:15px; font-weight:700; margin-bottom:6px; }
        .resume-lesson { font-size:12px; color:var(--text-secondary); margin-bottom:4px; }
        .resume-progress-info { display:flex; justify-content:space-between; font-size:11px; color:var(--text-muted); margin-bottom:8px; }
        .resume-track { height:4px; background:rgba(255,255,255,.06); border-radius:100px; overflow:hidden; margin-bottom:20px; }
        .resume-fill  { height:100%; border-radius:100px; background:linear-gradient(90deg,var(--accent-gold),var(--accent-blue)); width:60%; }
        .resume-stats { display:flex; gap:12px; margin-bottom:16px; }
        .rstat { flex:1; background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:var(--radius-sm); padding:10px; text-align:center; }
        .rstat-val { font-family:var(--font-mono); font-size:16px; font-weight:700; }
        .rstat-key { font-size:9px; color:var(--text-muted); text-transform:uppercase; letter-spacing:.08em; margin-top:2px; }
        .btn-resume {
          width:100%; padding:12px;
          background:linear-gradient(135deg,var(--accent-blue),#6366F1);
          border:none; border-radius:var(--radius-md); color:#fff;
          font-family:var(--font-body); font-size:13px; font-weight:600;
          cursor:pointer; transition:var(--transition);
        }
        .btn-resume:hover { transform:translateY(-1px); box-shadow:0 8px 25px rgba(59,130,246,.4); }

        /* ── Vocab + mock ── */
        .vocab-mock-section { margin-bottom:28px; display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .vocab-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; }
        .vocab-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; }
        .band-tag { background:rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.2); color:var(--accent-gold); font-size:10px; font-weight:600; letter-spacing:.06em; padding:3px 8px; border-radius:20px; font-family:var(--font-mono); }
        .flip-card-wrapper { perspective:1000px; height:160px; margin-bottom:14px; cursor:pointer; }
        .flip-card { width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform .6s cubic-bezier(.4,0,.2,1); }
        .flip-card.flipped { transform:rotateY(180deg); }
        .flip-front,.flip-back {
          position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden;
          border-radius:var(--radius-md); display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding:20px; text-align:center; border:1px solid rgba(59,130,246,.12);
        }
        .flip-front { background:linear-gradient(135deg,rgba(59,130,246,.08),rgba(99,102,241,.05)); }
        .flip-back  { background:linear-gradient(135deg,rgba(245,158,11,.08),rgba(239,68,68,.04)); transform:rotateY(180deg); }
        .flip-word { font-family:var(--font-heading); font-size:26px; font-weight:800; margin-bottom:6px; }
        .flip-part { font-size:11px; color:var(--text-secondary); font-style:italic; }
        .flip-hint { font-size:10px; color:var(--text-muted); margin-top:10px; }
        .flip-def  { font-size:12px; color:var(--text-secondary); line-height:1.5; margin-bottom:8px; }
        .flip-example { font-size:11px; color:var(--text-muted); font-style:italic; line-height:1.4; padding:8px; background:rgba(255,255,255,.03); border-radius:6px; }
        .btn-add-deck {
          width:100%; padding:9px;
          background:rgba(245,158,11,.08); border:1px solid rgba(245,158,11,.2);
          border-radius:var(--radius-sm); color:var(--accent-gold);
          font-family:var(--font-body); font-size:12px; font-weight:600; cursor:pointer; transition:var(--transition);
        }
        .btn-add-deck:hover { background:rgba(245,158,11,.14); }
        .btn-add-deck.added { background:rgba(16,185,129,.1); border-color:rgba(16,185,129,.25); color:var(--accent-green); }
        .mock-banner { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; }
        .mock-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
        .mock-badge { background:rgba(239,68,68,.1); border:1px solid rgba(239,68,68,.25); color:#EF4444; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; padding:3px 8px; border-radius:20px; }
        .mock-title    { font-family:var(--font-heading); font-size:15px; font-weight:700; margin-bottom:4px; }
        .mock-duration { font-size:11px; color:var(--text-secondary); }
        .countdown-display { display:flex; gap:8px; align-items:center; margin-bottom:16px; }
        .countdown-unit { text-align:center; flex:1; background:rgba(255,255,255,.04); border:1px solid var(--border); border-radius:var(--radius-sm); padding:10px 6px; }
        .countdown-num  { font-family:var(--font-mono); font-size:22px; font-weight:700; line-height:1; }
        .countdown-lbl  { font-size:9px; color:var(--text-muted); margin-top:3px; text-transform:uppercase; letter-spacing:.08em; }
        .countdown-sep  { font-family:var(--font-mono); font-size:20px; color:var(--text-muted); line-height:1; margin-top:-6px; }
        .btn-exam {
          width:100%; padding:13px;
          background:transparent; border:2px solid var(--accent-blue);
          border-radius:var(--radius-md); color:var(--accent-blue);
          font-family:var(--font-body); font-size:13px; font-weight:700; cursor:pointer; transition:var(--transition);
        }
        .btn-exam:hover { background:var(--accent-blue); color:#fff; transform:translateY(-1px); }

        /* Responsive */
        @media(max-width:1200px){ .scores-grid{grid-template-columns:repeat(2,1fr);} .roadmap-grid{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:900px){ .bottom-grid,.vocab-mock-section{grid-template-columns:1fr;} .stats-row{grid-template-columns:repeat(2,1fr);} }
      `}</style>
    </div>
  );
}
