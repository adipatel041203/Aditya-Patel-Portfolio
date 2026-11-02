import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { CredentialsSection } from './components/sections/CredentialsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { WorkSection } from './components/sections/WorkSection'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="site-shell">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
