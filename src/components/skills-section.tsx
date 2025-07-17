import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const writingSkills = [
    "Creative Writing", "Technical Writing", "Content Strategy", "Copywriting",
    "Journalism", "Editing", "Research", "Storytelling", "SEO Writing",
    "Grant Writing", "Academic Writing"
  ]

  const developmentSkills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "HTML/CSS",
    "Git", "SQL", "MongoDB", "Express.js", "Next.js", "Tailwind CSS",
    "REST APIs", "GraphQL", "Docker", "AWS", "Firebase"
  ]

  const tools = [
    "VS Code", "Figma", "Adobe Creative Suite", "Notion", "Grammarly",
    "GitHub", "Postman", "Webpack", "Vite", "Prisma", "Supabase"
  ]

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    
    elements?.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning both creative and technical domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-on-scroll glass hover-lift">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Writing & Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {writingSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll glass hover-lift">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {developmentSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="transition-smooth hover:bg-accent hover:text-accent-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll glass hover-lift">
            <CardHeader>
              <CardTitle className="text-center text-gradient">
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="outline"
                    className="transition-smooth hover:bg-muted"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}