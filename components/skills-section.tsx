"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Palette, Database, Wrench, Users, Lightbulb, MessageSquare, Target } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 75 },
      { name: "Accessibility Development", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: [
      { name: "REST APIs", level: 85 },
      { name: "Django", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Firestore", level: 85 },
    ],
  },
  {
    title: "Programming & Tools",
    icon: Wrench,
    skills: [
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "Git", level: 85 },
      { name: "Redux", level: 80 },
    ],
  },
]

const professionalSkills = [
  { name: "Leadership", icon: Users, description: "IEEE Chairperson with proven team management skills" },
  { name: "Problem Solving", icon: Lightbulb, description: "Strong analytical thinking and debugging expertise" },
  { name: "Active Listening", icon: MessageSquare, description: "Effective communication and collaboration" },
  { name: "Teamwork", icon: Target, description: "Collaborative approach to project development" },
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of technical proficiencies and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-2">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedCategory === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="h-5 w-5" />
                    <span className="font-medium">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {React.createElement(skillCategories[selectedCategory].icon, { className: "h-6 w-6 text-primary" })}
                  {skillCategories[selectedCategory].title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[selectedCategory].skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
