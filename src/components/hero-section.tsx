import { useEffect, useRef } from "react"
import { ArrowDown, Code, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-display font-bold mb-6"
        >
          <span className="text-hero-gradient">
            Writer & Developer
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting compelling narratives through words and code. 
          I bridge the gap between technical excellence and creative storytelling.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover-lift hover-glow font-medium px-8 py-3"
            onClick={() => scrollToSection('projects')}
          >
            <Code className="mr-2 h-5 w-5" />
            View Development Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift font-medium px-8 py-3"
            onClick={() => scrollToSection('writing')}
          >
            <PenTool className="mr-2 h-5 w-5" />
            Read My Writing
          </Button>
        </div>

        <div className="mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  )
}