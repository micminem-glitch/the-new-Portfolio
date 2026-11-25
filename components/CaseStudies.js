export default function CaseStudies() {
  return (
    <section id="work">
      <div className="section-head">
        <div className="wrap" style={{ padding: 0 }}>
          <p className="kicker">Selected work</p>
          <h2>Three projects, built end to end</h2>
        </div>
      </div>
      <div className="wrap">
        <div className="case">
          <div className="case-media">
            <div className="browser-mock mock-hexafox">
              <div className="browser-bar">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="browser-url">mike-bice-alpha.vercel.app</span>
              </div>
              <div className="browser-canvas">
                <div className="hx-label">Hexafox United — Live Node Engine</div>
                <div className="hx-headline">
                  The Decentralized <em>Treasury</em> Interface
                </div>
                <div className="hx-panel">
                  <div className="hx-stat">
                    <div className="hx-k">Escrow Core</div>
                    <div className="hx-v">$0.00</div>
                  </div>
                  <div className="hx-stat">
                    <div className="hx-k">Clearance</div>
                    <div className="hx-v">128 ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-copy">
            <span className="case-tag tag-demo">Concept demo · solo build</span>
            <h3>Hexafox United</h3>
            <p>
              A full-stack fintech concept — a sandboxed &quot;digital
              bank&quot; interface with account sign-in/registration, a live
              dashboard, balance tracking and a simulated clearance engine.
              Built solo, front to back, to demonstrate product thinking for
              finance-style dashboards: auth flows, data-driven UI, and
              interface polish under a real brand identity.
            </p>
            <div className="case-meta">
              <span className="chip">Next.js</span>
              <span className="chip">Auth &amp; dashboards</span>
              <span className="chip">Vercel</span>
            </div>
            <div className="case-links">
              <a
                href="https://mike-bice-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site →
              </a>
            </div>
          </div>
        </div>

        <div className="case reverse">
          <div className="case-media">
            <div className="browser-mock mock-emmy">
              <div className="browser-bar">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="browser-url">emmypho.vercel.app</span>
              </div>
              <div className="browser-canvas">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/emmy-photography-screenshot.jpg"
                  alt="Emmy Photography website — hero section"
                />
              </div>
            </div>
          </div>
          <div className="case-copy">
            <span className="case-tag tag-client">Client work · landing page</span>
            <h3>Emmy Photography</h3>
            <p>
              Landing page for a portrait &amp; editorial photography studio
              in Lagos. I built the landing page: the hero, film-strip style
              work gallery, packages/pricing section and booking form —
              matched to a quiet, editorial visual tone that fits a
              photographer&apos;s actual portfolio rather than a generic
              template.
            </p>
            <div className="case-meta">
              <span className="chip">Next.js</span>
              <span className="chip">Responsive layout</span>
              <span className="chip">Client project</span>
            </div>
            <div className="case-links">
              <a
                href="https://emmypho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site →
              </a>
            </div>
          </div>
        </div>

        <div className="case">
          <div className="case-media">
            <div className="browser-mock mock-czas">
              <div className="browser-bar">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="browser-url">cza-s-booth.vercel.app</span>
              </div>
              <div className="browser-canvas">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/czas-booth-screenshot.jpg"
                  alt="Cza&apos;s Booth street photography archive — polaroid gallery"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="case-copy">
            <span className="case-tag tag-client">Client work · photography portfolio</span>
            <h3>Cza&apos;s Booth</h3>
            <p>
              A visual archive for a street &amp; documentary photographer in
              Port Harcourt. I built the full site: an editorial hero, a
              filterable gallery (street life, night, portraits, polaroids),
              a dedicated polaroid section, an image lightbox with title,
              location and camera details, and an inquiry contact — designed
              to let raw street photography carry the page.
            </p>
            <div className="case-meta">
              <span className="chip">Next.js</span>
              <span className="chip">Filterable gallery</span>
              <span className="chip">Lightbox</span>
            </div>
            <div className="case-links">
              <a
                href="https://cza-s-booth.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
