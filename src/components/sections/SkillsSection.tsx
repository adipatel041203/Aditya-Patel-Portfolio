import { skillGroups } from '../../data/portfolio'

export function SkillsSection() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="section-heading skills-heading">
        <div><div className="eyebrow section-kicker">03 — TECHNICAL ARSENAL</div><h2>Analytics meets<br /><span className="serif-accent">engineering.</span></h2></div>
        <p className="section-sidecopy">A categorized view of the tools I use across data analysis, business intelligence, and software development.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.title}>
            <div className="skill-card-heading">
              <span className="skill-icon" aria-hidden="true">{group.icon}</span>
              <span className="skill-index">0{index + 1}</span>
            </div>
            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>
            <div className="skill-items">{group.items.map((item) => <span className="skill-item" key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
