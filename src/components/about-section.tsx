import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Code2, Lightbulb, Users } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    
    elements?.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            About Charles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A unique blend of technical expertise and creative expression, 
            bringing stories to life through both written word and elegant code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Bridging Two Worlds
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As both a writer and software developer, I understand the power of clear communication 
              and elegant solutions. Whether I'm crafting a compelling narrative or building 
              user friendly applications, my approach is always centered on creating meaningful 
              experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My background in writing has taught me the importance of structure, clarity, and 
              audience awareness skills that translate beautifully into software development. 
              Every line of code tells a story, and every story can be enhanced with technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="animate-on-scroll glass hover-lift">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Creative Writing</h4>
                <p className="text-sm text-muted-foreground">
                  Compelling narratives and engaging content. i have written few books on some platform like goodnovel, stary, novelsnacks.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll glass hover-lift">
              <CardContent className="p-6 text-center">
                <Code2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Software Development</h4>
                <p className="text-sm text-muted-foreground">
                  Clean, efficient, and scalable solutions
                  created applications 
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll glass hover-lift">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Creative approaches to complex challenges
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll glass hover-lift">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Building bridges through communications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}