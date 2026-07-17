const services = [
  {
    num: "01",
    title: "Full-stack builds",
    body: "New product or MVP built from scratch — database, API, and front end, shipped as one coherent thing.",
  },
  {
    num: "02",
    title: "Landing pages & sites",
    body: "Fast, polished marketing and portfolio sites for brands, studios and small businesses.",
  },
  {
    num: "03",
    title: "Fixes & maintenance",
    body: "Bug fixes, performance work, and ongoing support for an existing app you don't want to touch alone.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="kicker">How I can help</p>
        <h2 style={{ marginBottom: 32 }}>Services</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
