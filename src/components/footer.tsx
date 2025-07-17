import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/charlesnwobodo",
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/charlesnwobodo",
      color: "hover:text-blue-500"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/charlesnwobodo",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:charles@example.com",
      color: "hover:text-accent"
    }
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-xl text-gradient mb-2">
              Charles Nwobodo
            </h3>
            <p className="text-muted-foreground text-sm">
              Writer & Software Developer
            </p>
          </div>

          <div className="flex justify-center md:justify-center">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`transition-smooth ${link.color}`}
                >
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Charles Nwobodo. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            "Code is poetry written in logic, stories are logic written in emotion."
          </p>
        </div>
      </div>
    </footer>
  )
}