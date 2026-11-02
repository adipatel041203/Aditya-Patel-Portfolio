import { useState } from 'react'
import type { Theme } from '../../hooks/useTheme'
import { portfolioLinks } from '../../data/portfolio'
import { Arrow } from '../ui/Arrow'
import { ThemeToggle } from '../ui/ThemeToggle'

interface SiteHeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Aditya Patel home">Aditya Patel<span className="wordmark-period">.</span></a>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-link-social" href={portfolioLinks.linkedin} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>LinkedIn ↗</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="nav-cta" href={portfolioLinks.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
        </div>
      </nav>
    </header>
  )
}
