import { useState } from "react";
import { mockLogin } from "./mockAuth";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const canSubmit = isEmailValid && isPasswordValid && !loading;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      await mockLogin({ email, password });
      setSuccess(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h1>Sign in</h1>
        <p className="subtitle">Welcome back. Please enter your details.</p>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!isEmailValid && email.length > 0}
            required
          />
          {!isEmailValid && email && (
            <span className="hint">Enter a valid email address</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!isPasswordValid && password.length > 0}
            required
          />
          {!isPasswordValid && password && (
            <span className="hint">
              Password must be at least 6 characters
            </span>
          )}
        </div>

        <button type="submit" disabled={!canSubmit}>
          {loading ? "Signing in…" : "Sign in"}
        </button>

        <div className="status" aria-live="polite">
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Signed in successfully...</p>}
        </div>
      </form>
    </main>
  );
}
