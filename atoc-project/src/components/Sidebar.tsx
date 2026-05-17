'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const path = usePathname();
  const active = (href: string) => path === href || path.startsWith(href + '/');

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="brand">
          <Link href="/dashboard" className="brand-icon">A↗C</Link>
          <div>
            <div className="brand-text">AtoC</div>
            <div className="brand-sub">IELTS FROM ZERO</div>
          </div>
        </div>
        <div className="profile-unit">
          <div className="avatar">BY</div>
          <div className="profile-info">
            <div className="profile-name">Belgibayev Yernar</div>
            <div className="band-badge">Band 6.0</div>
          </div>
        </div>
      </div>

      {/* Ring */}
      <div className="ring-section">
        <div className="ring-label">Target Score</div>
        <div className="ring-wrapper">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#F59E0B"/>
              </linearGradient>
            </defs>
            <circle className="ring-bg" cx="50" cy="50" r="40"/>
            <circle className="ring-fill" id="ringFill" cx="50" cy="50" r="40"
              style={{ strokeDashoffset: 251.2 * (1 - 6/9) }}/>
          </svg>
          <div className="ring-center">
            <div className="ring-target">Target</div>
            <div className="ring-score">7.5</div>
            <div className="ring-sub">Current: 6.0</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <div className="nav-section-label">Main</div>

        <Link href="/dashboard" className={`nav-item${active('/dashboard') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="1" width="6" height="6" rx="1.5"/>
            <rect x="9" y="1" width="6" height="6" rx="1.5"/>
            <rect x="1" y="9" width="6" height="6" rx="1.5"/>
            <rect x="9" y="9" width="6" height="6" rx="1.5"/>
          </svg>
          Dashboard
          {active('/dashboard') && <span className="nav-dot"/>}
        </Link>

        <Link href="/lessons" className={`nav-item${active('/lessons') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
            <path d="M5 6h6M5 9h4"/>
          </svg>
          Lessons
          {active('/lessons') && <span className="nav-dot"/>}
        </Link>

        <Link href="/practice" className={`nav-item${active('/practice') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6"/>
            <path d="M8 4v4l2.5 2.5"/>
          </svg>
          Practice Tests
        </Link>

        <Link href="/writing" className={`nav-item${active('/writing') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12V4l6-2 6 2v8l-6 2-6-2z"/>
            <path d="M8 2v12M2 6l6 2 6-2"/>
          </svg>
          Writing
          {active('/writing') && <span className="nav-dot gold"/>}
        </Link>

        <Link href="/speaking" className={`nav-item${active('/speaking') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="5" r="3"/>
            <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
          </svg>
          Speaking
        </Link>

        <Link href="/vocabulary" className={`nav-item${active('/vocabulary') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 5h12M2 8h9M2 11h6"/>
          </svg>
          Vocabulary
        </Link>

        <Link href="/analytics" className={`nav-item${active('/analytics') ? ' active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="2,12 5,7 8,9 11,5 14,3"/>
          </svg>
          Analytics
        </Link>
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="exam-countdown">
          <div className="exam-label">Days Until Exam</div>
          <div className="exam-days">14</div>
          <div className="exam-unit">days remaining</div>
        </div>
        <div className="streak-widget">
          <span className="flame-icon">🔥</span>
          <div>
            <div className="streak-text">14 Days</div>
            <div className="streak-label">Current Streak</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
