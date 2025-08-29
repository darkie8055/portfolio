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
      {/* Ensure sections don't add accidental top margins via browser defaults */}
      <section id="home" className="relative mt-0">
        <HeroSection />
      </section>
      <section id="about" className="relative mt-0">
        <AboutSection />
      </section>
      <section id="projects" className="relative mt-0">
        <ProjectsSection />
      </section>
      <section id="experience" className="relative mt-0">
        <ExperienceSection />
      </section>
      <section id="skills" className="relative mt-0">
        <SkillsSection />
      </section>
      <section id="achievements" className="relative mt-0">
        <AchievementsSection />
      </section>
      <section id="contact" className="relative mt-0">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
