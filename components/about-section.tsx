import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Strong foundation in Data Structures, Algorithms, and modern web technologies",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about solving complex problems and building innovative solutions",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "IEEE Chairperson and active community contributor with proven leadership skills",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Expertise in debugging, optimization, and building scalable applications",
  },
]

const languages = ["English", "Malayalam", "Hindi"]
const hobbies = ["Reading Books", "Coding", "Gaming"]

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a strong foundation in modern web technologies and a drive for innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frontend developer with extensive experience in React.js, Redux, JavaScript, CSS, and HTML, specializing
              in building scalable applications and responsive user interfaces. I have a strong foundation in Data
              Structures and Algorithms, with proficiency in Python, C, C++, and SQL.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My portfolio includes innovative projects like Kudumbashree.io and accessibility-focused applications,
              where I've applied UI/UX design principles, debugging techniques, and performance optimization strategies.
              I'm passionate about solving complex problems and contributing to frontend product engineering at scale.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-semibold mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <Badge key={hobby} variant="outline">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">B.Tech Information Technology</h4>
                <p className="text-muted-foreground mb-2">Government Engineering College, Idukki</p>
                <p className="text-sm text-muted-foreground">2022-2026 (Pursuing)</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Class XII</h4>
                <p className="text-muted-foreground mb-2">M.E.S HSS, Mannarkkad, Palakkad</p>
                <p className="text-sm text-muted-foreground">2021 • 92.58%</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Class X</h4>
                <p className="text-muted-foreground mb-2">M.E.S HSS, Mannarkkad, Palakkad</p>
                <p className="text-sm text-muted-foreground">2019 • 96%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
