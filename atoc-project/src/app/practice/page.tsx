'use client';
import Sidebar from '@/components/Sidebar';

const tests = [
  { id: 1, title: 'Listening Practice #1', section: 'Listening', duration: '30 min', questions: 40, difficulty: 'Beginner',   status: 'available', score: null },
  { id: 2, title: 'Reading Practice #1',   section: 'Reading',   duration: '60 min', questions: 40, difficulty: 'Beginner',   status: 'done',      score: '6.5' },
  { id: 3, title: 'Writing Task 1 — Bar Chart', section: 'Writing', duration: '20 min', questions: 1, difficulty: 'Intermediate', status: 'available', score: null },
  { id: 4, title: 'Full Mock Test #1',     section: 'Full Test', duration: '2h 45min', questions: 160, difficulty: 'Advanced', status: 'locked',    score: null },
  { id: 5, title: 'Speaking Part 1',       section: 'Speaking',  duration: '15 min', questions: 10, difficulty: 'Beginner',   status: 'available', score: null },
  { id: 6, title: 'Listening Practice #2', section: 'Listening', duration: '30 min', questions: 40, difficulty: 'Intermediate', status: 'locked',  score: null },
];

const diffColor: Record<string, string> = {
  Beginner:     'rgba(16,185,129,0.15)',
  Intermediate: 'rgba(59,130,246,0.15)',
  Advanced:     'rgba(245,158,11,0.15)',
};
const diffText: Record<string, string> = {
  Beginner:     '#10B981',
  Intermediate: '#3B82F6',
  Advanced:     '#F59E0B',
};

export default function PracticePage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">⏱️ Practice Tests</h1>
          <p className="page-sub">Sharpen your skills with timed practice</p>
        </div>

        <div className="tests-grid anim d2">
          {tests.map(t => (
            <div key={t.id} className={`test-card ${t.status}`}>
              <div className="test-top">
                <span className="test-section">{t.section}</span>
                <span className="test-diff" style={{ background: diffColor[t.difficulty], color: diffText[t.difficulty] }}>
                  {t.difficulty}
                </span>
              </div>
              <div className="test-title">{t.title}</div>
              <div className="test-meta">
                <span>⏱ {t.duration}</span>
                <span>❓ {t.questions} questions</span>
              </div>
              {t.score && (
                <div className="test-score">
                  <span>Last score:</span>
                  <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>Band {t.score}</span>
                </div>
              )}
              <button
                className={`test-btn ${t.status}`}
                disabled={t.status === 'locked'}
              >
                {t.status === 'locked'    && '🔒 Locked'}
                {t.status === 'available' && '▶ Start Test'}
                {t.status === 'done'      && '↺ Retry Test'}
              </button>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .tests-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .test-card {
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);
          padding:20px; transition:var(--transition); display:flex; flex-direction:column; gap:10px;
        }
        .test-card:hover { background:var(--bg-card-hover); transform:translateY(-2px); }
        .test-card.locked { opacity:.6; }
        .test-top { display:flex; justify-content:space-between; align-items:center; }
        .test-section { font-size:10px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--text-secondary); }
        .test-diff { font-size:9px; font-weight:700; letter-spacing:.06em; padding:3px 8px; border-radius:20px; }
        .test-title { font-family:var(--font-heading); font-size:15px; font-weight:700; }
        .test-meta { display:flex; gap:14px; font-size:11px; color:var(--text-muted); }
        .test-score { display:flex; justify-content:space-between; align-items:center; font-size:11px; color:var(--text-secondary); }
        .test-btn {
          width:100%; padding:10px; border-radius:var(--radius-md); border:none;
          font-family:var(--font-body); font-size:12px; font-weight:600; cursor:pointer; transition:var(--transition);
          margin-top:auto;
        }
        .test-btn.available { background:linear-gradient(135deg,var(--accent-blue),#6366F1); color:#fff; }
        .test-btn.available:hover { transform:translateY(-1px); box-shadow:0 8px 25px rgba(59,130,246,.4); }
        .test-btn.done    { background:rgba(16,185,129,.1); border:1px solid rgba(16,185,129,.2); color:var(--accent-green); }
        .test-btn.locked  { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); color:var(--text-muted); cursor:not-allowed; }
        @media(max-width:1100px){ .tests-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:700px) { .tests-grid{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
