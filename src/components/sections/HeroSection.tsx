import { portfolioLinks, rotatingRoles } from '../../data/portfolio'
import { useImageFallback } from '../../hooks/useImageFallback'
import { useRotatingText } from '../../hooks/useRotatingText'
import { Arrow } from '../ui/Arrow'

function PortraitCard() {
  const { imageSource, handleError } = useImageFallback(portfolioLinks.portrait, '/portrait-placeholder.svg')

  return (
    <div className="hero-visual">
      <div className="portrait-glow" />
      <div className="hero-portrait">
        <img src={imageSource} onError={handleError} alt="Stylized illustration of Aditya Patel seated at a desk" />
        <span className="portrait-caption">ADITYA PATEL <i>·</i> DATA ANALYTICS</span>
      </div>
      <div className="code-card" aria-label="Data analytics code illustration">
        <div className="code-card-header"><span className="window-dots"><i/><i/><i/></span><span>analysis.py</span><span>•••</span></div>
        <pre><code><span className="code-purple">import</span> pandas <span className="code-purple">as</span> pd{ '\n\n'}<span className="code-muted"># find the story in the data</span>{'\n'}data = pd.read_csv(<span className="code-green">"insights.csv"</span>){'\n'}summary = data.groupby(<span className="code-green">"category"</span>).mean(){'\n\n'}<span className="code-cyan">print</span>(summary)</code></pre>
        <div className="code-card-status"><span /> READY TO EXPLORE</div>
      </div>
      <div className="visual-index">01 <span>/ 04</span></div>
    </div>
  )
}

export function HeroSection() {
  const activeRole = useRotatingText(rotatingRoles)

  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow"><span className="availability" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">·</span> INDIA</div>
        <h1>Hi, I’m<br /><span className="hero-name">Aditya Patel.</span></h1>
        <p className="hero-role" key={activeRole}>{activeRole}</p>
        <p className="hero-intro">I’m an aspiring data analyst and software engineer. I use SQL, Python, and Power BI to explore data, and React and TypeScript to build useful web experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
          <a className="button button-quiet" href={portfolioLinks.resume} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-social"><a href={portfolioLinks.github} target="_blank" rel="noreferrer">GITHUB <Arrow /></a><span /><a href="#contact">LET’S CONNECT <Arrow /></a></div>
      </div>
      <PortraitCard />
      <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><Arrow direction="down" /></a>
    </section>
  )
}
