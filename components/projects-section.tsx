"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Bot, Headphones } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Kudumbashree.io App",
    description:
      "Developed a role-based mobile app for Kudumbashree units with features like fund tracking, loan management (EMI calculator), real-time notifications, and a product marketplace. Built on Firestore, the app digitized manual workflows, improved accuracy, and enhanced community operations.",
    icon: Smartphone,
    technologies: ["React Native", "Firestore", "JavaScript", "Mobile Development"],
    category: "Mobile App",
    featured: true,
  },
  {
    id: 2,
    title: "Enhanced Sensory Soundscape",
    description:
      "Built a therapeutic web-based sensory app for children with disabilities, featuring accessibility-focused interaction modes (click, hover, keyboard) and a customizable interface for personalized audio-visual feedback.",
    icon: Headphones,
    technologies: ["React.js", "Web Audio API", "Accessibility", "CSS3"],
    category: "Web App",
    featured: true,
  },
  {
    id: 3,
    title: "A.N.G.E.L AI Assistant",
    description:
      "Built A.N.G.E.L, a Python-based AI assistant with speech recognition, task automation, and intelligent response modules, demonstrating applied AI and real-world automation skills.",
    icon: Bot,
    technologies: ["Python", "AI/ML", "Speech Recognition", "Automation"],
    category: "AI Project",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Forecast Web App",
    description:
      "Developed a responsive Weather Forecast Web App using HTML, CSS, JavaScript, and React; integrated RESTful APIs for real-time data and gained hands-on experience in frontend development and project structuring.",
    icon: Globe,
    technologies: ["React.js", "REST APIs", "JavaScript", "Responsive Design"],
    category: "Web App",
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Mobile App", "Web App", "AI Project"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleGithubClick = (projectTitle: string) => {
    // Open GitHub profile since specific repos aren't provided
    window.open("https://github.com/sanjaybk", "_blank")
  }

  const handleDemoClick = (projectTitle: string) => {
    // For demo purposes, show an alert. In real implementation, these would be actual project URLs
    alert(`Demo for ${projectTitle} - Contact me for live demo access!`)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary to-accent text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-primary/10"
                    onClick={() => handleGithubClick(project.title)}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 hover:scale-105 transition-transform"
                    onClick={() => handleDemoClick(project.title)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
