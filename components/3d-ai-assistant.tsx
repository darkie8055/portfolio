"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Float, Text, Box } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { X, Zap } from "lucide-react"
import type * as THREE from "three"

function HolographicAI() {
  const aiRef = useRef<THREE.Group>(null)
  const [isActive, setIsActive] = useState(false)

  useFrame((state) => {
    if (aiRef.current) {
      aiRef.current.rotation.y = state.clock.elapsedTime * 0.5
      aiRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group ref={aiRef} onClick={() => setIsActive(!isActive)}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.8, 32, 32]}>
          <meshStandardMaterial
            color={isActive ? "#22d3ee" : "#6366f1"}
            transparent
            opacity={0.8}
            metalness={0.7}
            roughness={0.2}
            emissive={isActive ? "#0891b2" : "#4338ca"}
            emissiveIntensity={0.3}
          />
        </Sphere>

        <Sphere args={[0.3, 16, 16]}>
          <meshStandardMaterial color="#ffffff" emissive="#22d3ee" emissiveIntensity={0.5} />
        </Sphere>

        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2
          return (
            <Box key={i} args={[0.1, 0.1, 0.1]} position={[Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, 0]}>
              <meshStandardMaterial
                color={`hsl(${i * 45}, 70%, 60%)`}
                transparent
                opacity={0.7}
                emissive={`hsl(${i * 45}, 70%, 40%)`}
                emissiveIntensity={0.2}
              />
            </Box>
          )
        })}

        <Text
          position={[0, -1.5, 0]}
          fontSize={0.2}
          color="#22d3ee"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          AI ASSISTANT
        </Text>
      </Float>
    </group>
  )
}

export function ThreeDimensionalAIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    "Hello! I'm Sanjay's AI assistant. How can I help you explore his portfolio?",
  ])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickResponses = [
    "Tell me about Sanjay's projects",
    "What are his technical skills?",
    "Show me his achievements",
    "How can I contact him?",
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative w-24 h-24">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[2, 2, 2]} intensity={0.6} />
            <HolographicAI />
          </Canvas>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute inset-0 bg-transparent hover:bg-transparent border-0 p-0"
            aria-label="Open AI Assistant"
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-32 right-6 w-80 h-96 bg-slate-900/95 backdrop-blur-lg border border-cyan-400/30 rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-semibold">AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-3 rounded-lg border border-cyan-400/20"
              >
                <p className="text-sm text-gray-200">{message}</p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-cyan-400/20">
            <div className="grid grid-cols-1 gap-2">
              {quickResponses.map((response, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className="text-xs text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10 justify-start bg-transparent"
                  onClick={() => {
                    setMessages([...messages, `You: ${response}`, `AI: ${getAIResponse(response)}`])
                  }}
                >
                  <Zap className="h-3 w-3 mr-2" />
                  {response}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function getAIResponse(question: string): string {
  const responses: Record<string, string> = {
    "Tell me about Sanjay's projects":
      "Sanjay has built amazing projects like Kudumbashree.io (a role-based mobile app), Enhanced Sensory Soundscape (therapeutic web app), and A.N.G.E.L (AI assistant). Each showcases his full-stack development skills!",
    "What are his technical skills?":
      "Sanjay excels in React.js, Next.js, TypeScript, Python, AI/ML, 3D development with Three.js, and has experience with databases like MongoDB and Firestore. He's also skilled in UI/UX design!",
    "Show me his achievements":
      "Sanjay is a finalist in Dreamvestor 2.0, Chairperson of IEEE SB GECI 2025, and helped achieve Top 20 global rank in IEEE Xtreme 18.0. He's also a TCS Student Ambassador!",
    "How can I contact him?":
      "You can reach Sanjay at palakkaditsmesanjaybk@gmail.com, connect on LinkedIn, or check out his GitHub. He's always open to discussing new opportunities and collaborations!",
  }

  return (
    responses[question] ||
    "That's a great question! Feel free to explore the portfolio sections to learn more about Sanjay's incredible journey in tech."
  )
}
