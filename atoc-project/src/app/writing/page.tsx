'use client';
import Sidebar from '@/components/Sidebar';

const tasks = [
  { id: 1, type: 'Task 1', prompt: 'The bar chart below shows the number of visitors to three museums in London in 2022. Summarise the information…', status: 'done', band: '6.5', feedback: 'Good data coverage, improve cohesion.' },
  { id: 2, type: 'Task 2', prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree?', status: 'draft', band: null, feedback: null },
  { id: 3, type: 'Task 1', prompt: 'The line graph shows changes in the amount of fish caught in four countries between 1980 and 2020.', status: 'new', band: null, feedback: null },
  { id: 4, type: 'Task 2', prompt: 'In many countries the number of animals and plants is declining. Why is this? What can be done to address this situation?', status: 'new', band: null, feedback: null },
];

export default function WritingPage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">✍️ Writing</h1>
          <p className="page-sub">Practice Task 1 &amp; Task 2 with AI feedback</p>
        </div>

        <div className="writing-tips anim d2">
          {[['Band 7 target', 'Coherence &amp; Cohesion'], ['Min. 150 words', 'Task 1'], ['Min. 250 words', 'Task 2'], ['40 min', 'Task 2 time']].map(([val, key]) => (
            <div key={key} className="tip-stat">
              <div className="tip-val" dangerouslySetInnerHTML={{ __html: val }}/>
              <div className="tip-key">{key}</div>
            </div>
          ))}
        </div>

        <div className="section-header anim d3"><span className="section-title">📝 Writing Tasks</span></div>

        <div className="writing-list anim d3">
          {tasks.map(t => (
            <div key={t.id} className={`writing-card ${t.status}`}>
              <div className="wc-left">
                <span className={`wc-badge ${t.type === 'Task 1' ? 'blue' : 'gold'}`}>{t.type}</span>
                <p className="wc-prompt">{t.prompt}</p>
                {t.feedback && <div className="wc-feedback">💬 {t.feedback}</div>}
              </div>
              <div className="wc-right">
                {t.band && <div className="wc-band">Band {t.band}</div>}
                <button className={`btn-secondary wc-btn ${t.status}`}>
                  {t.status === 'done'  && '↺ Revise'}
                  {t.status === 'draft' && '▶ Continue'}
                  {t.status === 'new'   && '▶ Start'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .writing-tips { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:28px; }
        .tip-stat { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:16px; text-align:center; }
        .tip-val  { font-family:var(--font-heading); font-size:18px; font-weight:800; margin-bottom:4px; }
        .tip-key  { font-size:10px; color:var(--text-secondary); text-transform:uppercase; letter-spacing:.08em; }
        .writing-list { display:flex; flex-direction:column; gap:12px; }
        .writing-card {
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);
          padding:20px; display:flex; align-items:flex-start; gap:20px; transition:var(--transition);
        }
        .writing-card:hover { background:var(--bg-card-hover); }
        .writing-card.done { border-color:rgba(16,185,129,.2); }
        .writing-card.draft { border-color:rgba(245,158,11,.2); }
        .wc-left { flex:1; display:flex; flex-direction:column; gap:8px; }
        .wc-badge { display:inline-block; font-size:9px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; padding:3px 8px; border-radius:20px; width:fit-content; }
        .wc-badge.blue { background:rgba(59,130,246,.12); color:var(--accent-blue); }
        .wc-badge.gold { background:rgba(245,158,11,.12); color:var(--accent-gold); }
        .wc-prompt  { font-size:13px; color:var(--text-secondary); line-height:1.5; }
        .wc-feedback{ font-size:11px; color:var(--accent-green); background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.15); border-radius:6px; padding:6px 10px; }
        .wc-right { display:flex; flex-direction:column; align-items:flex-end; gap:10px; flex-shrink:0; }
        .wc-band { font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--accent-gold); }
        .wc-btn  { white-space:nowrap; font-size:12px; }
        @media(max-width:700px){ .writing-tips{grid-template-columns:repeat(2,1fr);} .writing-card{flex-direction:column;} }
      `}</style>
    </div>
  );
}
