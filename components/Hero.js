import Terminal from "./Terminal";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">available for freelance work</p>

          <h1 className="name">
            Micheal
            <br />
            Nwgbolu
            <br />
            <em>builds the whole stack.</em>
          </h1>

          <p className="hero-sub">
            Full stack developer for hire. I design the schema, build the
            API, and ship the interface on top of it — solo, end to end.
            Below: real projects, not filler.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">
              See the work
            </a>

            <a
              className="btn btn-ghost"
              href="/resume/Micheal_Nwgbolu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </a>

            <a className="btn btn-ghost" href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <Terminal />
      </div>
    </header>
  );
}