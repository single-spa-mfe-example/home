import Icon from "@mdi/react";
import { mdiStar, mdiOpenInNew } from "@mdi/js";

function MockContent() {
  return (
    <article className="panel is-info">
      <p className="panel-heading">Enim elit culpa incididunt Lorem.</p>
      <span className="panel-block">
        <span className="panel-icon">
          <Icon path={mdiStar} size={1} />
        </span>
        Suscipit ut temporibus similique tempora nam tempore dolorum, molestiae
        sunt sapiente incidunt, facere rem iste?
      </span>
      <span className="panel-block">
        <span className="panel-icon">
          <Icon path={mdiStar} size={1} />
        </span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </span>
      <span className="panel-block">
        <span className="panel-icon">
          <Icon path={mdiStar} size={1} />
        </span>
        Deserunt aspernatur pariatur delectus magni non cum illo perspiciatis,
        asperiores obcaecati, vitae officia.
      </span>
      <span className="panel-block">
        <span className="panel-icon">
          <Icon path={mdiStar} size={1} />
        </span>
        Quis nulla quaerat dignissimos perferendis quod, totam illo officiis
        placeat veniam iste aliquam pariatur quibusdam a?
      </span>
    </article>
  );
}

function MockSection() {
  return (
    <section className="container is-widescreen">
      <h2 className="is-size-4 mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        praesentium nostrum molestias tempora quasi magni itaque fugiat
        repellendus repellat facilis illo libero, exercitationem labore,
        incidunt delectus, impedit tempore blanditiis quis!
      </h2>
      <div className="columns is-desktop mt-3">
        <div className="column">
          <MockContent />
        </div>
        <div className="column">
          <MockContent />
        </div>
        <div className="column">
          <MockContent />
        </div>
      </div>
    </section>
  );
}

function MockQuoteSection() {
  return (
    <section className="hero is-success mt-6">
      <div className="hero-body">
        <div className="container is-widescreen has-text-left">
          <p className="title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eum,
            nemo commodi ipsam ratione beatae dolorem rerum accusamus, iste
            odio, quia minus nisi? Enim, corrupti. Voluptate tenetur pariatur
            perspiciatis aut.
          </p>
          <p className="subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            accusamus amet, expedita magnam, quidem excepturi assumenda impedit
            iusto voluptatem dicta pariatur sed officiis molestias, numquam
            quis. Sunt, delectus! Asperiores, neque.
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Example App</p>
          <p className="subtitle">
            <span>Microfrontends with </span>
            <br />
            <a
              href="https://single-spa.js.org/"
              rel="noopener"
              target="_blank"
              className="button is-link is-rounded"
            >
              <span>Single-Spa</span>
              <span className="icon is-small">
                <Icon path={mdiOpenInNew} title="Open in new tab" size="1em" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Root(props) {
  return (
    <main>
      <HeroContent />
      <MockSection />
      <MockQuoteSection />
      <MockSection />
    </main>
  );
}
