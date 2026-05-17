'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

const words = [
  { word: 'Idiosyncrasy',  pos: 'noun',      band: '8.0', def: 'A mode of behaviour peculiar to an individual.', mastered: false },
  { word: 'Ubiquitous',    pos: 'adjective', band: '7.5', def: 'Present, appearing, or found everywhere.', mastered: true  },
  { word: 'Ameliorate',    pos: 'verb',      band: '8.0', def: 'Make (something bad or unsatisfactory) better.', mastered: false },
  { word: 'Proliferate',   pos: 'verb',      band: '7.0', def: 'Increase rapidly in numbers; multiply.', mastered: true  },
  { word: 'Exacerbate',    pos: 'verb',      band: '7.5', def: 'Make (a problem, bad situation, or negative feeling) worse.', mastered: false },
  { word: 'Paramount',     pos: 'adjective', band: '7.0', def: 'More important than anything else; supreme.', mastered: true  },
];

export default function VocabularyPage() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-main">
        <div className="anim d1">
          <h1 className="page-heading">📖 Vocabulary</h1>
          <p className="page-sub">Master high-band words with flashcards</p>
        </div>

        <div className="vocab-stats anim d2">
          {[['25', 'Words mastered'], ['6', 'Words to review'], ['8.0', 'Target band'], ['14', 'Day streak']].map(([val, key]) => (
            <div key={key} className="vstat">
              <div className="vstat-val">{val}</div>
              <div className="vstat-key">{key}</div>
            </div>
          ))}
        </div>

        <div className="section-header anim d3">
          <span className="section-title">💬 Today's Deck</span>
          <span className="section-action">View all words →</span>
        </div>

        <div className="word-grid anim d3">
          {words.map((w, i) => (
            <div key={w.word} className={`word-card${flipped === i ? ' flipped' : ''}`} onClick={() => setFlipped(flipped === i ? null : i)}>
              <div className="wcard-front">
                <div className="wcard-top">
                  <span className="band-tag">{w.band}</span>
                  {w.mastered && <span className="mastered-tag">✓ Mastered</span>}
                </div>
                <div className="flip-word" style={{ fontSize: 20, marginBottom: 4 }}>{w.word}</div>
                <div className="flip-part">{w.pos}</div>
                <div className="flip-hint" style={{ marginTop: 8 }}>Tap to reveal</div>
              </div>
              <div className="wcard-back">
                <div className="flip-def">{w.def}</div>
                <button
                  className={`btn-add-deck${w.mastered ? ' added' : ''}`}
                  style={{ marginTop: 12 }}
                  onClick={e => e.stopPropagation()}
                >
                  {w.mastered ? '✓ Mastered' : '+ Mark as mastered'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .vocab-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:28px; }
        .vstat { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:16px; text-align:center; }
        .vstat-val { font-family:var(--font-heading); font-size:24px; font-weight:800; color:var(--text-primary); }
        .vstat-key { font-size:10px; color:var(--text-secondary); text-transform:uppercase; letter-spacing:.08em; margin-top:2px; }
        .word-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .word-card {
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);
          perspective:1000px; height:180px; cursor:pointer; transition:var(--transition);
          position:relative; transform-style:preserve-3d;
        }
        .word-card.flipped { transform:rotateY(180deg); }
        .word-card:hover { box-shadow:0 8px 20px rgba(0,0,0,.3); }
        .wcard-front,.wcard-back {
          position:absolute; inset:0; padding:18px; backface-visibility:hidden; -webkit-backface-visibility:hidden;
          border-radius:var(--radius-lg); display:flex; flex-direction:column; justify-content:center;
        }
        .wcard-front { background:linear-gradient(135deg,rgba(59,130,246,.08),rgba(99,102,241,.04)); }
        .wcard-back  { background:linear-gradient(135deg,rgba(245,158,11,.08),rgba(239,68,68,.04)); transform:rotateY(180deg); justify-content:space-between; }
        .wcard-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
        .mastered-tag { font-size:9px; font-weight:700; color:var(--accent-green); background:rgba(16,185,129,.12); border:1px solid rgba(16,185,129,.2); border-radius:20px; padding:2px 7px; }
        .btn-add-deck { width:100%; padding:8px; background:rgba(245,158,11,.08); border:1px solid rgba(245,158,11,.2); border-radius:var(--radius-sm); color:var(--accent-gold); font-family:var(--font-body); font-size:11px; font-weight:600; cursor:pointer; transition:var(--transition); }
        .btn-add-deck.added { background:rgba(16,185,129,.1); border-color:rgba(16,185,129,.25); color:var(--accent-green); }
        @media(max-width:900px){ .word-grid{grid-template-columns:repeat(2,1fr);} .vocab-stats{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:600px){ .word-grid{grid-template-columns:1fr;} }
      `}</style>
    </div>
  );
}
