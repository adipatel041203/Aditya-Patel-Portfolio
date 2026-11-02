import { experience } from '../../data/portfolio'

export function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience">
      <div className="section-heading">
        <div><div className="eyebrow section-kicker">04 — EXPERIENCE</div><h2>Learning by<br /><span className="serif-accent">building.</span></h2></div>
        <p className="section-sidecopy">Internship experience across frontend development and hands-on IT support.</p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.organization}-${item.role}`}>
            <div className="experience-period">{item.period}</div>
            <div className="experience-body">
              <div className="experience-title"><div><h3>{item.role}</h3><p>{item.organization} <span>·</span> {item.location}</p></div><span className="experience-mark" aria-hidden="true">↗</span></div>
              <p className="experience-summary">{item.summary}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="experience-tools" aria-label="Skills used in this role">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
