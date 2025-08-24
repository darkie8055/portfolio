import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    company: "IMMENSPHERE",
    role: "ILIVE Programme – Teacher's eBook",
    period: "JULY 2024",
    location: "Remote",
    description:
      "Contributed to the design and development of an eBook for the ILIVE programme (initiative by the District Collector of Idukki), creating life-skills content for Classes 1–12 with responsibilities in content structuring, visual layout, and quality assurance.",
    technologies: ["Content Design", "Visual Layout", "Quality Assurance", "Educational Technology"],
    type: "Contract",
  },
  {
    company: "TALROP",
    role: "PROGRAM MANAGER",
    period: "MARCH - APRIL 2023",
    location: "Remote",
    description:
      'Worked as PROGRAM MANAGER under TALROP for student scholarship initiative "ONE CREATION FROM ONE WARD" for 2 months, managing program coordination and student engagement initiatives.',
    technologies: ["Program Management", "Student Coordination", "Initiative Management"],
    type: "Contract",
  },
]

const positions = [
  {
    title: "CHAIRPERSON IEEE SB GECI",
    year: "2025",
    description: "Leading the IEEE Student Branch at Government Engineering College Idukki",
    type: "Leadership",
  },
  {
    title: "STUDENT AMBASSADOR",
    organization: "TCS Placement Recruitment Cell",
    description: "Student Ambassador of TCS placement recruitment cell at GEC IDUKKI",
    type: "Ambassador",
  },
  {
    title: "IEEE XTREME 18.0 AMBASSADOR",
    year: "2024",
    description:
      "Successfully promoted and coordinated IEEE Xtreme 18.0 programming competition within the Student Branch. Instrumental in helping IEEE SB GEC Idukki achieve a Top 20 global rank among thousands of participating branches worldwide.",
    type: "Ambassador",
  },
  {
    title: "VICE-CHAIRPERSON IEEE SB GECI",
    year: "2024",
    description: "Served as Vice-Chairperson of IEEE Student Branch GEC Idukki",
    type: "Leadership",
  },
  {
    title: "INDUSTRIAL CO-ORDINATOR IEEE VTS KERALA CHAPTER",
    year: "2024",
    description: "Coordinated industrial activities for IEEE Vehicular Technology Society Kerala Chapter",
    type: "Coordinator",
  },
  {
    title: "TECHNICAL CO-ORDINATOR IEEE RAS SBC GECI",
    year: "2023",
    description: "Technical coordination for IEEE Robotics and Automation Society Student Branch Chapter",
    type: "Coordinator",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and leadership roles that shaped my technical and management skills
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Building className="h-5 w-5 text-primary" />
                        {exp.company}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-muted-foreground">{exp.role}</h4>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership & Positions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={position.type === "Leadership" ? "default" : "secondary"} className="mb-2">
                      {position.type}
                    </Badge>
                    {position.year && <span className="text-sm text-muted-foreground">{position.year}</span>}
                  </div>
                  <h4 className="font-semibold mb-2 leading-tight">{position.title}</h4>
                  {position.organization && <p className="text-sm text-primary mb-2">{position.organization}</p>}
                  <p className="text-sm text-muted-foreground leading-relaxed">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
