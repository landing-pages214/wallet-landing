export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Kyle20000 Wallet System</h1>

        <p className="subtitle">
          A centralized ledger-based wallet with real-time transfers and full
          audit logging
        </p>

        <div className="tags">
          <span>Python Backend</span>
          <span>Ledger System</span>
          <span>Admin Dashboard</span>
          <span>Audit Logs</span>
          <span>Secure Transfers</span>
        </div>
      </section>

      <section className="card">
        <h2>Overview</h2>

        <p>
          The Kyle20000 Wallet System is a fully centralized digital ledger
          platform. It supports user accounts, balance storage, and instant
          peer-to-peer transfers through a server-controlled Python backend.
        </p>
      </section>

      <section>
        <h2>Core System</h2>

        <div className="grid">
          <div className="card">
            <h3>User Accounts</h3>
            <p>
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
