'use client';
import Sidebar from '@/components/Sidebar';

export default function SpeakingPage() {
  const parts = [
    { id: 'Part 1', desc: 'Familiar topics — self, family, work, hobbies', duration: '4–5 min', status: 'available' },
    { id: 'Part 2', desc: 'Individual long turn — cue card topic', duration: '3–4 min', status: 'locked' },
    { id: 'Part 3', desc: 'Two-way discussion — abstract topics', duration: '4–5 min', status: 'locked' },
  ];
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">🎤 Speaking</h1>
          <p className="page-sub">Record your answers and get AI feedback</p>
        </div>
        <div className="speaking-parts anim d2">
          {parts.map(p => (
            <div key={p.id} className={`sp-card ${p.status}`}>
              <div className="sp-id">{p.id}</div>
              <div className="sp-desc">{p.desc}</div>
              <div className="sp-dur">⏱ {p.duration}</div>
              <button className={`sp-btn ${p.status}`} disabled={p.status === 'locked'}>
                {p.status === 'locked' ? '🔒 Locked' : '🎙️ Start Recording'}
              </button>
            </div>
          ))}
        </div>
        <div className="coming-soon anim d3">
          <div className="coming-soon-icon">🎙️</div>
          <h2>AI Speaking Coach</h2>
          <p>Record yourself, get instant feedback on fluency, pronunciation, and band score estimation.</p>
        </div>
      </main>
      <style>{`
        .speaking-parts { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-bottom:28px; }
        .sp-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:24px; display:flex; flex-direction:column; gap:10px; transition:var(--transition); }
        .sp-card:hover { background:var(--bg-card-hover); }
        .sp-card.locked { opacity:.55; }
        .sp-id   { font-family:var(--font-heading); font-size:18px; font-weight:800; color:var(--accent-blue); }
        .sp-desc { font-size:13px; color:var(--text-secondary); line-height:1.5; flex:1; }
        .sp-dur  { font-size:11px; color:var(--text-muted); }
        .sp-btn  { width:100%; padding:11px; border-radius:var(--radius-md); border:none; font-family:var(--font-body); font-size:12px; font-weight:600; cursor:pointer; transition:var(--transition); }
        .sp-btn.available { background:linear-gradient(135deg,#8B5CF6,#EC4899); color:#fff; }
        .sp-btn.available:hover { transform:translateY(-1px); box-shadow:0 8px 25px rgba(139,92,246,.4); }
        .sp-btn.locked { background:rgba(255,255,255,.04); color:var(--text-muted); cursor:not-allowed; }
        @media(max-width:900px){ .speaking-parts{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
