export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-number">02 <span>— A LITTLE ABOUT ME</span></div>
      <div className="about-content">
        <h2>Data is everywhere.<br />Good questions are <span className="serif-accent">rare.</span></h2>
        <div className="about-columns">
          <p>I’m growing across data analytics and software engineering. I enjoy cleaning a dataset, exploring a business question, and turning the result into a clear dashboard or a useful application.</p>
          <p>My toolkit spans SQL, Python, and Power BI as well as React, TypeScript, and Node.js. I value thoughtful analysis, maintainable code, and learning through hands-on projects.</p>
        </div>
        <div className="about-signoff"><span className="signoff-line"/><span>ADITYA PATEL</span><span>ASPIRING DATA ANALYST</span></div>
        <div className="about-stats" aria-label="Portfolio overview">
          <div><strong>05</strong><span>PROJECTS</span></div>
          <div><strong>03</strong><span>ANALYTICS PROJECTS</span></div>
          <div><strong>02</strong><span>LIVE WEB APPS</span></div>
        </div>
      </div>
      <div className="about-orbit orbit-one"/><div className="about-orbit orbit-two"/><span className="about-star" aria-hidden="true">✳</span>
    </section>
  )
}
