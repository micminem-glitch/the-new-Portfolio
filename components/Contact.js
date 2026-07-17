export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <p className="kicker">Get in touch</p>

        <h2 style={{ marginBottom: 12 }}>
          Let&apos;s build something
        </h2>

        <p className="section-note" style={{ marginBottom: 32 }}>
          Have a project in mind? Reach out directly — I usually reply
          within a day.
        </p>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="mailto:webdevmicheal@gmail.com"
          >
            <div className="contact-label">Email</div>
            <div className="contact-value">webdevmicheal@gmail.com</div>
          </a>

          <a
            className="contact-card"
            href="https://wa.me/2349110454189"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-label">WhatsApp</div>
            <div className="contact-value">+234 911 045 4189</div>
          </a>

          <a
            className="contact-card"
            href="/resume/Micheal_Nwagbolu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-label">Résumé</div>
            <div className="contact-value">Download PDF</div>
          </a>
        </div>
      </div>
    </section>
  );
}