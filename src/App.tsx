export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <h1 className="wordmark">Stockton Labs</h1>
        <p className="tagline">An independent software studio</p>
      </section>
      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} Stockton Labs LLC</span>
      </footer>
    </main>
  );
}
