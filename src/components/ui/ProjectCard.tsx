import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { PortfolioProject } from '../../data/portfolio'

interface ProjectCardProps {
  project: PortfolioProject
  total: number
}

export function ProjectCard({ project, total }: ProjectCardProps) {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const galleryDialog = useRef<HTMLDialogElement>(null)
  const gallery = project.imageGallery ?? []

  useEffect(() => {
    const dialog = galleryDialog.current
    if (galleryIndex !== null && dialog && !dialog.open) dialog.showModal()
  }, [galleryIndex])

  return (
    <>
    <article className={`project-card${project.number === '01' ? ' project-card-featured' : ''}`}>
      <div className={`project-art ${project.visual}`}>
        {project.image
          ? <><img className="project-cover" src={project.image} alt={`${project.title} dashboard preview`} loading="lazy" />{gallery.length > 1 && <button className="gallery-trigger" type="button" onClick={() => setGalleryIndex(0)}>View dashboard <span>{gallery.length} pages ↗</span></button>}</>
          : <><span className="project-art-index">{project.category === 'analytics' ? 'DATA ANALYSIS' : 'WEB APPLICATION'} / {project.number}</span><span className="project-glyph" aria-hidden="true">{project.symbol}</span><span className="project-art-bottom">ADITYA PATEL <span>✳</span> PROJECT NOTES</span></>}
      </div>
      <div className="project-meta"><span>{project.category === 'analytics' ? 'DATA ANALYTICS' : 'WEB APPLICATION'}</span><span>{project.number} / {String(total).padStart(2, '0')}</span></div>
      <div className="project-title-row"><div><span className="project-label">{project.categoryLabel}</span><h3>{project.title}</h3></div><span className="project-arrow" aria-hidden="true">↗</span></div>
      <p className="project-description">{project.description}</p>
      {project.highlight && <p className="project-highlight">{project.highlight}</p>}
      <div className="tag-row">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
    {galleryIndex !== null && createPortal(
      <dialog className="gallery-dialog" ref={galleryDialog} aria-label={`${project.title} screenshots`} onClose={() => setGalleryIndex(null)}>
        <div className="gallery-dialog-header"><div><span className="eyebrow">POWER BI REPORT</span><h2>{galleryIndex === 0 ? 'Business overview' : 'RFM analysis'}</h2></div><button type="button" onClick={() => galleryDialog.current?.close()} aria-label="Close gallery">×</button></div>
        <img src={gallery[galleryIndex]} alt={`${project.title} ${galleryIndex === 0 ? 'business overview' : 'RFM analysis'} page`} />
        <div className="gallery-controls"><button type="button" onClick={() => setGalleryIndex((galleryIndex + gallery.length - 1) % gallery.length)}>← Previous</button><span>{galleryIndex + 1} / {gallery.length}</span><button type="button" onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}>Next →</button></div>
      </dialog>,
      document.body,
    )}
    </>
  )
}
