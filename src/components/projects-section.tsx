import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Task Management App",
      description: "A comprehensive task management application built with React and TypeScript, featuring real-time collaboration and advanced filtering capabilities.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    },
    {
      title: "Content Management System",
      description: "A headless CMS built for writers and content creators, with a focus on clean writing experience and powerful content organization.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced product filtering, secure payments, and comprehensive admin dashboard.",
      tech: ["React", "Express", "Stripe", "AWS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    }
  ]

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.project-card')
    
    elements?.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
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
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications that demonstrate technical excellence and user-centered design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card glass hover-lift group overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-gradient">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}