"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Send, Bot } from "lucide-react"

export function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hi! I'm Sanjay's AI assistant. Ask me about his projects!" },
  ])
  const [input, setInput] = useState("")

  const aiResponses = [
    "Sanjay has built amazing projects like Kudumbashree.io with React and Firebase!",
    "He's experienced in React.js, Python, AI/ML, and 3D development with Three.js!",
    "Check out his Enhanced Sensory Soundscape project - it's accessibility-focused!",
    "He's a IEEE Chairperson and has won multiple hackathons!",
    "His A.N.G.E.L AI assistant project showcases his AI development skills!",
    "Want to know more about his full-stack development experience?",
  ]

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { type: "user", text: input }])

    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      setMessages((prev) => [...prev, { type: "ai", text: randomResponse }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full glow-animation glass-morphism border-cyan-400 text-cyan-400 hover:text-black"
        size="lg"
      >
        <Bot className="h-8 w-8 pulse-neon" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 glass-morphism rounded-lg border border-cyan-400 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/30 cyber-gradient">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-white pulse-neon" />
              <span className="font-semibold text-white">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-400"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                      : "bg-pink-500/20 text-pink-300 border border-pink-400/30"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyan-400/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Sanjay..."
                className="flex-1 px-3 py-2 bg-transparent border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/30"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
