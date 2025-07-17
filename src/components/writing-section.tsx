import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink, PenTool } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function WritingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const articles = [
    {
      title: "The Art of Clean Code: Writing for Humans",
      excerpt: "Exploring how writing principles can make code more readable, maintainable, and beautiful. A deep dive into the parallels between literary craft and software development.",
      category: "Technical Writing",
      readTime: "8 min read",
      date: "Nov 2024",
      link: "#"
    },
    {
      title: "Storytelling in User Experience Design",
      excerpt: "How narrative techniques can transform digital experiences and create deeper connections between users and applications. Real examples from successful projects.",
      category: "UX Writing",
      readTime: "6 min read",
      date: "Oct 2024",
      link: "#"
    },
    {
      title: "The Developer's Guide to Technical Documentation",
      excerpt: "Best practices for writing documentation that developers actually want to read. From API docs to README files that make sense.",
      category: "Documentation",
      readTime: "10 min read",
      date: "Sep 2024",
      link: "#"
    },
    {
      title: "Building Bridges: Communication in Remote Teams",
      excerpt: "Strategies for effective communication in distributed development teams. How clear writing can prevent misunderstandings and boost productivity.",
      category: "Team Communication",
      readTime: "7 min read",
      date: "Aug 2024",
      link: "#"
    }
  ]

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.writing-card')
    
    elements?.forEach((element, index) => {
      gsap.fromTo(element,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
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
    <section id="writing" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Latest Writing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, writing, and the intersection of creativity and code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="writing-card glass hover-lift group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-2">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-gradient group-hover:text-primary transition-smooth">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {article.date}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="group-hover:bg-primary/10 transition-smooth">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <PenTool className="h-5 w-5 mr-2" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}