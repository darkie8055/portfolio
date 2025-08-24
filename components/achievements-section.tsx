import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Users } from "lucide-react"

const achievements = [
  {
    title: "Finalist – Dreamvestor 2.0",
    project: "Kudumbashree.io project",
    description:
      "Built a feature-rich mobile application as part of a 4-member team, leveraging full-stack mobile development skills including front-end design, backend integration, and database management.",
    icon: Trophy,
    type: "Competition",
    highlight: true,
  },
  {
    title: "IEEE SB GEC Idukki - Top 20 Global Rank",
    project: "IEEE Xtreme 18.0",
    description:
      "Instrumental in helping IEEE SB GEC Idukki achieve a Top 20 global rank among thousands of participating branches worldwide through strategic coordination and promotion.",
    icon: Star,
    type: "Achievement",
    highlight: true,
  },
]

const leadershipRoles = [
  {
    title: "CHAIRPERSON IEEE SB GECI",
    year: "2025",
    description: "Leading the IEEE Student Branch at Government Engineering College Idukki",
    icon: Users,
    type: "Current",
  },
  {
    title: "IEEE XTREME 18.0 AMBASSADOR",
    year: "2024",
    description: "Successfully promoted and coordinated IEEE Xtreme 18.0 programming competition",
    icon: Award,
    type: "Ambassador",
  },
  {
    title: "VICE-CHAIRPERSON IEEE SB GECI",
    year: "2024",
    description: "Served as Vice-Chairperson of IEEE Student Branch GEC Idukki",
    icon: Users,
    type: "Leadership",
  },
  {
    title: "INDUSTRIAL CO-ORDINATOR IEEE VTS KERALA CHAPTER",
    year: "2024",
    description: "Coordinated industrial activities for IEEE Vehicular Technology Society Kerala Chapter",
    icon: Award,
    type: "Coordinator",
  },
  {
    title: "TECHNICAL CO-ORDINATOR IEEE RAS SBC GECI",
    year: "2023",
    description: "Technical coordination for IEEE Robotics and Automation Society Student Branch Chapter",
    icon: Award,
    type: "Coordinator",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and contributions to the community
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Major Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  achievement.highlight ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge
                      variant={achievement.highlight ? "default" : "secondary"}
                      className={achievement.highlight ? "bg-gradient-to-r from-primary to-accent" : ""}
                    >
                      {achievement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                  <p className="text-primary font-medium">{achievement.project}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership Positions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <role.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <Badge variant={role.type === "Current" ? "default" : "secondary"} className="mb-1">
                        {role.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{role.year}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 leading-tight">{role.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
