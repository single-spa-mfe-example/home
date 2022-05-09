export default function Root(props) {
  return (
    <main>
      <section className="hero is-primary is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Example App</p>
            <p className="subtitle">
              Microfrontends with{" "}
              <a href="https://single-spa.js.org/" rel="noopener">
                Single-Spa
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
