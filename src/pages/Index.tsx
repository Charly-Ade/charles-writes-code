import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { WritingSection } from "@/components/writing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import AOS from "aos"
import "aos/dist/aos.css"

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
