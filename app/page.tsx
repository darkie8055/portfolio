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
import { AIAssistant } from "@/components/ai-assistant"
import { FloatingAIOrbs } from "@/components/floating-ai-orbs"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { ThreeDimensionalAIAssistant } from "@/components/3d-ai-assistant"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <ParticleBackground />
      <FloatingAIOrbs />
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="achievements">
        <AchievementsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <AIAssistant />
      <AIChatBubble />
      <ThreeDimensionalAIAssistant />
    </main>
  )
}
