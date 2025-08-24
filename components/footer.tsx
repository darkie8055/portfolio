"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sanjaybk",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sanjay-bk",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:palakkaditsmesanjaybk@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© {currentYear} Sanjay B K. All rights reserved.</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Next.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Frontend & Full-Stack Developer | IEEE Chairperson | Problem Solver
          </p>
        </div>
      </div>
    </footer>
  )
}
