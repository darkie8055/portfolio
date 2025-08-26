import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <ParticleBackground />
      <Navigation />
      <section id="home" className="relative">
        <HeroSection />
      </section>
      <section id="about" className="relative">
        <AboutSection />
      </section>
      <section id="projects" className="relative">
        <ProjectsSection />
      </section>
      <section id="experience" className="relative">
        <ExperienceSection />
      </section>
      <section id="skills" className="relative">
        <SkillsSection />
      </section>
      <section id="achievements" className="relative">
        <AchievementsSection />
      </section>
      <section id="contact" className="relative">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
