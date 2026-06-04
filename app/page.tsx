"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <main className="page">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-inner">
        <div className="logo">Kyle20000</div>

        <nav>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#usecases">Use Cases</a>
        </nav>

        <button className="nav-btn">Login</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-badge">Centralized Ledger System</div>

        <h1>
          Kyle20000
          <span>Wallet System</span>
        </h1>

        <p className="subtitle">
          A modern centralized ledger platform designed for secure transfers,
          structured audit logging, and controlled backend financial systems.
        </p>

        <div className="hero-buttons">
          <a
            href="https://Kyle20000.pythonanywhere.com"
            className="button primary"
          >
            Enter System
          </a>

          <a href="#overview" className="button secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="glass reveal">
        <h2>Overview</h2>
        <p>
          The Kyle20000 Wallet System is a centralized ledger-based platform
          that processes secure transactions through a Python backend, ensuring
          accuracy, traceability, and structured financial control.
        </p>
      </section>

      {/* FEATURES */}
      <section id="features">
        <h2 className="section-title reveal">Core Features</h2>

        <div className="feature-grid">
          <div className="feature-card reveal">
            <div className="icon">👤</div>
            <h3>User Accounts</h3>
            <p>Secure wallet accounts tied to a centralized ledger.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">📒</div>
            <h3>Central Ledger</h3>
            <p>All transactions are recorded in one authoritative system.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">⚡</div>
            <h3>Instant Transfers</h3>
            <p>Real-time processing of account-to-account movements.</p>
          </div>

          <div className="feature-card reveal">
            <div className="icon">🛡️</div>
            <h3>Admin Control</h3>
            <p>System-level monitoring and verification tools.</p>
          </div>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="glass reveal">
        <h2>How It Works</h2>

        <div className="flow-grid">
          <div className="flow-card">1. Account Creation</div>
          <div className="flow-card">2. Ledger Entry</div>
          <div className="flow-card">3. Transaction Validation</div>
          <div className="flow-card">4. Audit Logging</div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" className="glass reveal">
        <h2>Use Cases</h2>

        <div className="usecase-grid">
          <div className="usecase-card">Internal finance systems</div>
          <div className="usecase-card">Private platforms</div>
          <div className="usecase-card">Controlled environments</div>
          <div className="usecase-card">Secure transfers</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta reveal">
        <h2>Access System</h2>
        <p>Enter the wallet system or preview the login interface.</p>

        <button onClick={() => setOpen(true)} className="button primary large">
          Open Login Preview
        </button>
      </section>

      {/* FOOTER */}
      <footer className="reveal">
        © Kyle20000 Wallet System • Centralized Ledger Architecture
      </footer>

      {/* MODAL */}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Login Preview</h2>
            <p>This is a preview modal for the wallet system login flow.</p>

            <input placeholder="Username" />
            <input placeholder="Password" type="password" />

            <button className="button primary" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
