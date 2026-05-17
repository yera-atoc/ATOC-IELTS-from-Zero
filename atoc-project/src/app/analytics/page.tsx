'use client';
import Sidebar from '@/components/Sidebar';

const history = [
  { date: 'May 14', skill: 'Reading',   score: 6.0, delta: '+0.5' },
  { date: 'May 12', skill: 'Listening', score: 6.5, delta: '+0.5' },
  { date: 'May 10', skill: 'Writing',   score: 5.5, delta: '+0.5' },
  { date: 'May 8',  skill: 'Speaking',  score: 6.0, delta: '+1.0' },
  { date: 'May 5',  skill: 'Reading',   score: 5.5, delta: '+0.0' },
  { date: 'May 3',  skill: 'Full Mock', score: 6.0, delta: '+0.5' },
];

const skillColors: Record<string, string> = {
  Listening: '#3B82F6',
  Reading:   '#10B981',
  Writing:   '#F59E0B',
  Speaking:  '#8B5CF6',
  'Full Mock': '#EC4899',
};

export default function AnalyticsPage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">📈 Analytics</h1>
          <p className="page-sub">Track your progress over time</p>
        </div>

        {/* Overview scores */}
        <div className="an-scores anim d2">
          {[
            { skill: 'Listening', score: 6.5, color: '#3B82F6' },
            { skill: 'Reading',   score: 6.0, color: '#10B981' },
            { skill: 'Writing',   score: 5.5, color: '#F59E0B' },
            { skill: 'Speaking',  score: 6.0, color: '#8B5CF6' },
          ].map(s => (
            <div key={s.skill} className="an-score-card">
              <div className="an-skill">{s.skill}</div>
              <div className="an-val" style={{ color: s.color }}>{s.score}</div>
              <div className="progress-track" style={{ marginTop: 8 }}>
                <div className="progress-fill" style={{ width: `${(s.score / 9) * 100}%`, background: s.color }}/>
              </div>
              <div className="an-target">Target: 7.5</div>
            </div>
          ))}
        </div>

        {/* Study stats */}
        <div className="section-header anim d3"><span className="section-title">⚡ Study Stats</span></div>
        <div className="an-stats anim d3">
          {[['14', 'Day streak 🔥'], ['47.5h', 'Total study time'], ['12/30', 'Tests done'], ['25', 'Words mastered']].map(([val, key]) => (
            <div key={key} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700, marginBottom: 6 }}>{val}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{key}</div>
            </div>
          ))}
        </div>

        {/* Test history */}
        <div className="section-header anim d4" style={{ marginTop: 28 }}>
          <span className="section-title">📋 Test History</span>
        </div>
        <div className="card anim d4" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th><th>Skill</th><th>Score</th><th>Change</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i}>
                  <td>{h.date}</td>
                  <td>
                    <span className="skill-badge" style={{ background: `${skillColors[h.skill]}22`, color: skillColors[h.skill] }}>
                      {h.skill}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{h.score}</td>
                  <td style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>{h.delta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <style>{`
        .an-scores { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:28px; }
        .an-score-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px; }
        .an-skill  { font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:var(--text-secondary); margin-bottom:8px; }
        .an-val    { font-family:var(--font-heading); font-size:36px; font-weight:800; line-height:1; }
        .an-target { font-size:10px; color:var(--text-muted); margin-top:6px; }
        .an-stats  { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .history-table { width:100%; border-collapse:collapse; }
        .history-table th { font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:var(--text-muted); padding:12px 20px; text-align:left; border-bottom:1px solid var(--border); }
        .history-table td { padding:14px 20px; font-size:13px; color:var(--text-primary); border-bottom:1px solid var(--border-subtle); }
        .history-table tr:last-child td { border:none; }
        .history-table tr:hover td { background:rgba(255,255,255,.02); }
        .skill-badge { font-size:10px; font-weight:700; padding:3px 10px; border-radius:20px; letter-spacing:.04em; }
        @media(max-width:1000px){ .an-scores,.an-stats{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:600px) { .an-scores,.an-stats{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
