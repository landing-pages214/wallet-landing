export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Centralized Ledger Architecture</div>

        <h1>
          Kyle20000
          <span>Wallet System</span>
        </h1>

        <p className="subtitle">
          A centralized ledger-based wallet system designed for secure,
          real-time transfers, full transaction auditing, and structured
          account management through a controlled backend environment.
        </p>

        <div className="hero-buttons">
          <a
            href="https://Kyle20000.pythonanywhere.com"
            className="button primary"
          >
            Enter Wallet System
          </a>

          <a href="#overview" className="button secondary">
            Explore System
          </a>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="trust-card">Secure Ledger Design</div>
        <div className="trust-card">Python Backend Control</div>
        <div className="trust-card">Audit Logging System</div>
        <div className="trust-card">Real-Time Transfers</div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="glass">
        <h2>Overview</h2>
        <p>
          The Kyle20000 Wallet System is a fully centralized digital ledger
          platform. It manages user accounts, balance tracking, and instant
          transfers through a server-controlled Python backend with strict
          transaction logging and verification layers.
        </p>
      </section>

      {/* SYSTEM FLOW */}
      <section className="flow">
        <h2 className="section-title">How the System Works</h2>

        <div className="flow-grid">
          <div className="flow-card">
            <h3>1. User Account Layer</h3>
            <p>
              Each user is assigned a secure wallet account stored in a
              structured database system.
            </p>
          </div>

          <div className="flow-card">
            <h3>2. Ledger Processing</h3>
            <p>
              All deposits and transfers are processed through a single
              authoritative ledger.
            </p>
          </div>

          <div className="flow-card">
            <h3>3. Transaction Validation</h3>
            <p>
              Every movement is verified before being committed to the system
              ledger.
            </p>
          </div>

          <div className="flow-card">
            <h3>4. Audit Logging</h3>
            <p>
              All actions are recorded for full traceability and system review.
            </p>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section id="features">
        <h2 className="section-title">Core System</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">👤</div>
            <h3>User Accounts</h3>
            <p>
              Secure wallet accounts linked to a centralized balance database.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">📒</div>
            <h3>Central Ledger</h3>
            <p>
              A single authoritative ledger ensures consistency across all
              transactions.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Instant Transfers</h3>
            <p>
              Real-time account-to-account transfers with immediate recording.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Admin Control</h3>
            <p>
              Administrative tools for monitoring, adjustments, and system
              oversight.
            </p>
          </div>
        </div>
      </section>

      {/* SECURITY SECTION */}
      <section className="glass">
        <h2>Security & Integrity</h2>
        <p>
          The system is built with structured validation, audit trails, and
          consistency checks to ensure all account activity remains traceable
          and reliable within a controlled environment.
        </p>
      </section>

      {/* USE CASES */}
      <section className="usecases">
        <h2 className="section-title">Use Cases</h2>

        <div className="usecase-grid">
          <div className="usecase-card">
            Internal financial systems
          </div>

          <div className="usecase-card">
            Private organizational platforms
          </div>

          <div className="usecase-card">
            Controlled ledger environments
          </div>

          <div className="usecase-card">
            Secure account-to-account transfer systems
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <h2>Access System</h2>

        <p>
          Login to the wallet system or contact the administrator to request
          access.
        </p>

        <a
          href="https://Kyle20000.pythonanywhere.com"
          className="button primary large"
        >
          Enter Wallet System
        </a>
      </section>

      <footer>
        © Kyle20000 Wallet System • Centralized Ledger Architecture • Secure
        Internal Transfers
      </footer>
    </main>
  );
}            <p>
              Each user has a secure wallet account with a live balance stored
              in the database.
            </p>
          </div>

          <div className="card">
            <h3>Central Ledger</h3>
            <p>
              All transactions are processed and recorded in a single
              authoritative ledger.
            </p>
          </div>

          <div className="card">
            <h3>Instant Transfers</h3>
            <p>
              Users can send balances between accounts instantly with full
              transaction logging.
            </p>
          </div>

          <div className="card">
            <h3>Admin Control</h3>
            <p>
              System administration tools allow monitoring, adjustments, and
              audit verification.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Reliability</h2>

        <p>
          The system includes transaction history tracking, audit logs, and
          database-backed consistency checks to ensure accuracy and traceability
          of all balance movements.
        </p>
      </section>

      <section className="card">
        <h2>Use Cases</h2>

        <p>
          Private financial systems, internal platforms, controlled
          environments, and closed-network payment applications requiring secure
          account-to-account transfers.
        </p>
      </section>

      <section className="card center">
        <h2>Access System</h2>

        <p>
          Login to the wallet system or contact the administrator to create an
          account.
        </p>

        <a href="https://Kyle20000.pythonanywhere.com" className="button">
          Enter Wallet System
        </a>
      </section>

      <footer>
        © Kyle20000 Wallet System • Centralized Ledger Architecture • Secure
        Internal Transfers
      </footer>
    </main>
  );
}
