import { portfolioLinks } from '../../data/portfolio'

export function SiteFooter() {
  return (
    <footer className="footer">
      <a className="wordmark" href="#home" aria-label="Back to Aditya Patel home">Aditya Patel<span className="wordmark-period">.</span></a>
      <div className="footer-socials" aria-label="Social profiles">
        <a className="footer-github" href={portfolioLinks.github} target="_blank" rel="noreferrer">GITHUB <span aria-hidden="true">↗</span></a>
        <a className="footer-github" href={portfolioLinks.linkedin} target="_blank" rel="noreferrer">LINKEDIN <span aria-hidden="true">↗</span></a>
      </div>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  )
}
