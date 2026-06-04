export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="wordmark">Stockton Labs</h1>
        <p className="tagline">An independent software studio</p>
      </section>

      <div className="content">
        <section className="block">
          <h2>What we do</h2>
          <p>
            Stockton Labs LLC is an independent software studio building communication tools for
            small businesses. Our flagship product is an AI phone receptionist that answers the calls
            a business can't get to &mdash; capturing the caller's name, number, and reason for
            calling, then instantly notifying the owner so no lead slips through.
          </p>
        </section>

        <section className="block">
          <h2>SMS notifications</h2>
          <p>
            Stockton Labs sends SMS notifications to business owners who use our receptionist service,
            alerting them to new calls and captured leads (caller name, callback number, and reason for
            the call). Owners opt in to these notifications verbally during onboarding or by signing our
            service agreement. Message frequency varies with call volume. Message and data rates may
            apply. Reply STOP to opt out or HELP for help. We never sell or share mobile opt-in
            information with third parties or for marketing purposes. See our{' '}
            <a href="/privacy">Privacy Policy</a> for details.
          </p>
        </section>

        <section className="block">
          <h2>Contact</h2>
          <p>
            Contact us at{' '}
            <a href="mailto:dann@stocktonlabsllc.com">dann@stocktonlabsllc.com</a>
          </p>
        </section>
      </div>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Stockton Labs LLC</span>
        <nav className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </footer>
    </main>
  );
}
