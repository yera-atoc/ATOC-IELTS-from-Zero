'use client';
import Sidebar from '@/components/Sidebar';

const levels = [
  {
    id: 'A', label: 'Уровень A', sub: 'Beginner', emoji: '🌱', total: 20, done: 0,
    color: '#10B981', colorDim: 'rgba(16,185,129,0.12)',
    lessons: [
      { id: 'A1', title: 'To Be (am/is/are)', status: 'current' },
      { id: 'A2', title: 'Nouns: singular/plural', status: 'locked' },
      { id: 'A3', title: 'Articles: a / an / the', status: 'locked' },
      { id: 'A4', title: 'Present Simple', status: 'locked' },
      { id: 'A5', title: 'Common Vocabulary', status: 'locked' },
    ],
  },
  {
    id: 'B', label: 'Уровень B', sub: 'Intermediate', emoji: '⚡', total: 20, done: 0,
    color: '#3B82F6', colorDim: 'rgba(59,130,246,0.12)',
    lessons: [],
  },
  {
    id: 'C', label: 'Уровень C', sub: 'Advanced', emoji: '🔥', total: 19, done: 0,
    color: '#F59E0B', colorDim: 'rgba(245,158,11,0.12)',
    lessons: [],
  },
];

export default function LessonsPage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">📚 Lessons</h1>
          <p className="page-sub">Choose your level and start learning</p>
        </div>

        {/* Level cards */}
        <div className="levels-row anim d2">
          {levels.map(lv => (
            <div key={lv.id} className="level-card" style={{ borderColor: lv.done > 0 ? lv.color : undefined }}>
              <div className="level-emoji">{lv.emoji}</div>
              <div className="level-label" style={{ color: lv.done > 0 ? lv.color : undefined }}>{lv.label}</div>
              <div className="level-sub">{lv.sub}</div>
              <div className="level-count">{lv.done}/{lv.total}</div>
              <div className="progress-track" style={{ marginTop: 8 }}>
                <div className="progress-fill" style={{ width: `${(lv.done / lv.total) * 100}%`, background: lv.color }}/>
              </div>
            </div>
          ))}
        </div>

        {/* Lesson list */}
        {levels.map((lv, li) => (
          <section key={lv.id} className={`anim d${li + 3}`} style={{ marginBottom: 28 }}>
            <div className="section-header">
              <span className="section-title">{lv.emoji} {lv.label} — {lv.sub}</span>
              <span className="section-action" style={{ color: lv.color }}>{lv.done}/{lv.total} lessons</span>
            </div>
            {lv.lessons.length > 0 ? (
              <div className="lesson-list">
                {lv.lessons.map(ls => (
                  <div key={ls.id} className={`lesson-row ${ls.status}`}>
                    <div className="lesson-badge" style={{ background: ls.status === 'current' ? lv.color : undefined }}>{ls.id}</div>
                    <div className="lesson-title">{ls.title}</div>
                    <div className="lesson-status-icon">
                      {ls.status === 'current' && '▶'}
                      {ls.status === 'locked'  && '🔒'}
                      {ls.status === 'done'    && '✓'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="coming-soon" style={{ minHeight: 120, padding: 24 }}>
                <div className="coming-soon-icon" style={{ fontSize: 28 }}>{lv.emoji}</div>
                <p style={{ fontSize: 12 }}>Complete Level A to unlock {lv.label}</p>
              </div>
            )}
          </section>
        ))}
      </main>

      <style>{`
        .levels-row { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-bottom:28px; }
        .level-card {
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);
          padding:20px; text-align:center; transition:var(--transition);
        }
        .level-card:hover { background:var(--bg-card-hover); transform:translateY(-2px); }
        .level-emoji { font-size:28px; margin-bottom:8px; }
        .level-label { font-family:var(--font-heading); font-size:16px; font-weight:700; }
        .level-sub   { font-size:11px; color:var(--text-secondary); margin-bottom:4px; }
        .level-count { font-family:var(--font-mono); font-size:12px; color:var(--text-muted); }
        .lesson-list { display:flex; flex-direction:column; gap:8px; }
        .lesson-row {
          display:flex; align-items:center; gap:14px;
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md);
          padding:14px 16px; transition:var(--transition); cursor:pointer;
        }
        .lesson-row:hover { background:var(--bg-card-hover); }
        .lesson-row.current { border-color:rgba(59,130,246,.3); }
        .lesson-row.locked  { opacity:.5; cursor:not-allowed; }
        .lesson-badge {
          width:36px; height:36px; border-radius:50%;
          background:rgba(59,130,246,.15); border:1px solid rgba(59,130,246,.3);
          display:flex; align-items:center; justify-content:center;
          font-family:var(--font-mono); font-size:10px; font-weight:700; color:#fff; flex-shrink:0;
        }
        .lesson-title { flex:1; font-size:13px; font-weight:600; }
        .lesson-status-icon { font-size:14px; color:var(--text-muted); }
      `}</style>
    </div>
  );
}
