import { useState } from 'react'
import { portfolioLinks, projects, type ProjectCategory } from '../../data/portfolio'
import { Arrow } from '../ui/Arrow'
import { ProjectCard } from '../ui/ProjectCard'

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')
  const visibleProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="work-section section-pad" id="work">
      <div className="section-heading">
        <div><div className="eyebrow section-kicker">05 — SELECTED WORK</div><h2>Turning questions<br />into <span className="serif-accent">clarity.</span></h2></div>
        <p className="section-sidecopy">Selected analytics and web projects, from customer segmentation to responsive applications.</p>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {([{ value: 'all', label: 'All projects' }, { value: 'analytics', label: 'Data analytics' }, { value: 'apps', label: 'Web apps' }] as const).map((filter) => (
          <button key={filter.value} type="button" aria-pressed={activeCategory === filter.value} className={activeCategory === filter.value ? 'is-active' : ''} onClick={() => setActiveCategory(filter.value)}>
            {filter.label}<span>{filter.value === 'all' ? projects.length : projects.filter((project) => project.category === filter.value).length}</span>
          </button>
        ))}
      </div>
      <div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.number} project={project} total={projects.length} />)}</div>
      <div className="work-note"><span aria-hidden="true">↳</span> Want to see more details? <a href={portfolioLinks.github} target="_blank" rel="noreferrer">Browse all repositories <Arrow /></a></div>
    </section>
  )
}
