import { certifications, education } from '../../data/portfolio'

export function CredentialsSection() {
  return (
    <section className="credentials-section section-pad" id="credentials">
      <div className="section-heading">
        <div><div className="eyebrow section-kicker">06 — CREDENTIALS</div><h2>Education &amp;<br /><span className="serif-accent">training.</span></h2></div>
        <p className="section-sidecopy">Formal study and focused training that support my work across software and analytics.</p>
      </div>
      <div className="credentials-grid">
        <div className="credential-column">
          <div className="credential-label">EDUCATION</div>
          {education.map((item) => (
            <article className="credential-card" key={item.institution}>
              <span className="credential-period">{item.period}</span>
              <h3>{item.qualification}</h3>
              <p>{item.institution} <span>·</span> {item.location}</p>
            </article>
          ))}
        </div>
        <div className="credential-column">
          <div className="credential-label">CERTIFICATIONS &amp; TRAINING</div>
          {certifications.map((item) => (
            <article className="credential-card" key={item.name}>
              <span className="credential-period">{item.period}</span>
              <h3>{item.name}</h3>
              <p>{item.issuer}</p>
              <p className="credential-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
