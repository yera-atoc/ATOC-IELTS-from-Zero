'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up Supabase auth here
    // const { error } = await supabase.auth.signInWithPassword({ email, password });
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="login-shell">
      <div className="login-card anim d1">
        {/* Logo */}
        <div className="login-brand">
          <div className="brand-icon" style={{ width: 44, height: 44, fontSize: 18 }}>A↗C</div>
          <div>
            <div className="brand-text" style={{ fontSize: 20 }}>AtoC</div>
            <div className="brand-sub">IELTS FROM ZERO</div>
          </div>
        </div>

        <h1 className="login-heading">Welcome back</h1>
        <p className="login-sub">Sign in to continue your IELTS preparation</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary login-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In →'}
          </button>
        </form>

        <p className="login-footer">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="login-link">Create one free</Link>
        </p>
      </div>

      <style>{`
        .login-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .login-card {
          width: 100%;
          max-width: 400px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 36px 32px;
          box-shadow: var(--shadow-card);
        }
        .login-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .login-heading {
          font-family: var(--font-heading);
          font-size: 24px; font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .login-sub {
          font-size: 13px; color: var(--text-secondary);
          margin-bottom: 28px;
        }
        .login-form { display: flex; flex-direction: column; gap: 18px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--text-secondary);
        }
        .form-input {
          padding: 11px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-family: var(--font-body); font-size: 14px;
          outline: none;
          transition: var(--transition);
        }
        .form-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: rgba(59,130,246,0.05);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }
        .form-input::placeholder { color: var(--text-muted); }
        .login-btn {
          width: 100%; padding: 13px;
          font-size: 14px; margin-top: 4px;
        }
        .login-footer { margin-top: 20px; text-align: center; font-size: 13px; color: var(--text-secondary); }
        .login-link { color: var(--accent-blue); font-weight: 600; text-decoration: none; }
        .login-link:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}
