import { useState, type FormEvent } from 'react'
import { portfolioLinks } from '../../data/portfolio'
import { Arrow } from '../ui/Arrow'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const senderEmail = String(formData.get('email') ?? '').trim()
    const subject = String(formData.get('subject') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const body = [`From: ${name}`, `Reply to: ${senderEmail}`, '', message].join('\n')
    window.location.href = `mailto:${portfolioLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <div className="eyebrow">07 — LET’S CONNECT</div>
          <h2>Have a question<br />worth <span className="serif-accent">exploring?</span></h2>
          <p>I’m open to conversations about analytics, software projects, internships, and opportunities to learn and contribute.</p>
          <div className="contact-links">
            <a href={`mailto:${portfolioLinks.email}`}>{portfolioLinks.email} <Arrow /></a>
            <a href={portfolioLinks.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={portfolioLinks.resume} target="_blank" rel="noreferrer">View my resume <Arrow /></a>
            <a className="button button-outline" href={portfolioLinks.github} target="_blank" rel="noreferrer">Explore GitHub <Arrow /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading"><span>DROP A NOTE</span><span className="form-indicator"><i /> EMAIL FORM</span></div>
          <div className="form-row">
            <label>Your name<input autoComplete="name" name="name" placeholder="Aditya Patel" required /></label>
            <label>Email address<input autoComplete="email" name="email" type="email" placeholder="adityapatel8c@gmail.com" required /></label>
          </div>
          <label>What would you like to discuss?<input name="subject" placeholder="A project, opportunity, or quick hello" required /></label>
          <label>Your message<textarea name="message" placeholder="Tell me a little about it…" rows={5} required /></label>
          <div className="contact-form-footer">
            <p>{sent ? 'Your email draft is ready. Send it from your email app to reach me.' : 'This opens a prefilled email draft addressed to me.'}</p>
            <button className="button button-primary" type="submit">Send a message <Arrow /></button>
          </div>
        </form>
      </div>
      <span className="contact-orb" aria-hidden="true" />
    </section>
  )
}
