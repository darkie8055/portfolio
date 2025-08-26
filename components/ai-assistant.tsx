"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, MessageCircle } from "lucide-react"

const predefinedQuestions = [
  "What technologies do you specialize in?",
  "Tell me about your recent projects",
  "What's your experience with React?",
  "How can we collaborate?",
]

const responses: Record<string, string> = {
  "What technologies do you specialize in?":
    "I specialize in React.js, Redux, JavaScript, TypeScript, Python, and full-stack development. I also have experience with mobile development using React Native and backend technologies like Django and various databases.",
  "Tell me about your recent projects":
    "My recent projects include Kudumbashree.io (a role-based mobile app), Enhanced Sensory Soundscape (accessibility-focused web app), and A.N.G.E.L (AI assistant). Each project demonstrates different aspects of my technical skills.",
  "What's your experience with React?":
    "I have extensive experience with React.js, building scalable applications and responsive UIs. I've worked with Redux for state management, React Native for mobile development, and modern React patterns including hooks and context.",
  "How can we collaborate?":
    "I'm open to frontend development roles, full-stack projects, and consulting opportunities. You can reach me at palakkaditsmesanjaybk@gmail.com or connect with me on LinkedIn to discuss potential collaborations.",
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "Hi! I'm Sanjay's AI assistant. Ask me anything about his skills, projects, or experience!",
      isUser: false,
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setInput("")

    // Simple response logic
    setTimeout(() => {
      const response =
        responses[userMessage] ||
        "That's a great question! For detailed information about that topic, please feel free to reach out to Sanjay directly at palakkaditsmesanjaybk@gmail.com or explore the portfolio sections above."

      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 1000)
  }

  const handleQuestionClick = (question: string) => {
    setMessages((prev) => [...prev, { text: question, isUser: true }])

    setTimeout(() => {
      const response = responses[question]
      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg glow-animation ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-4">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Quick questions:</p>
                  {predefinedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs h-auto py-2 px-3 bg-transparent"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => {
                  if (e?.target?.value !== undefined) {
                    setInput(e.target.value)
                  }
                }}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="text-sm"
              />
              <Button size="icon" onClick={handleSend} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
