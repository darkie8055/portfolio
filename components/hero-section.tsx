"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Zap, Cpu, Brain } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

function Enhanced3DScene() {
  return (
    <>
      <Stars radius={80} depth={40} count={3000} factor={3} saturation={0} fade speed={0.8} />
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 8, 8]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-8, -8, -8]} intensity={0.4} color="#8b5cf6" />
      <directionalLight position={[0, 10, 5]} intensity={0.3} color="#f59e0b" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export function HeroSection() {
  const [aiText, setAiText] = useState("Initializing AI...")
  const [glitchText, setGlitchText] = useState("SANJAY B K")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const aiMessages = [
      "AI Systems Online...",
      "Neural Networks Active",
      "Processing Creativity...",
      "Innovation Mode: ON",
      "Future Tech Ready",
    ]

    let index = 0
    const interval = setInterval(() => {
      setAiText(aiMessages[index])
      index = (index + 1) % aiMessages.length
    }, 3000)

    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return

    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const originalText = "SANJAY B K"

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.08) {
        const glitched = originalText
          .split("")
          .map((char) => (Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
          .join("")
        setGlitchText(glitched)

        setTimeout(() => setGlitchText(originalText), 150)
      }
    }, 300)

    return () => clearInterval(glitchInterval)
  }, [mounted])

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="text-center">
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            SANJAY B K
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl mb-6 font-light text-cyan-300">
            Frontend & Full-Stack Developer
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          performance={{ min: 0.5 }}
          dpr={[1, window.innerWidth > 768 ? 2 : 1]}
          className="hidden sm:block"
        >
          <Enhanced3DScene />
        </Canvas>
        <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" />
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        {Array.from({ length: window.innerWidth > 768 ? 25 : 10 }, (_, i) => (
          <div
            key={i}
            className="absolute text-xs matrix-rain opacity-15 text-emerald-400"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            {Math.random().toString(36).substring(2, 10)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center mb-4 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border glass-morphism text-cyan-400 border-cyan-400/30">
              <Brain className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
              <span className="cyber-glitch">{aiText}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse leading-tight">
              {glitchText}
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 font-light text-cyan-300 flex items-center justify-center lg:justify-start flex-wrap">
              <Cpu className="inline mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span className="mx-1">Frontend & Full-Stack Developer</span>
              <Zap className="inline ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </h2>

            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-full lg:max-w-2xl leading-relaxed text-gray-300 px-2 sm:px-0">
              Crafting <span className="font-semibold text-cyan-400">next-generation</span> applications with
              <span className="font-semibold text-purple-400"> AI-powered</span> solutions,
              <span className="font-semibold text-emerald-400"> immersive 3D experiences</span>, and
              <span className="font-semibold text-amber-400"> cutting-edge technologies</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Neural Link Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                <ArrowDown className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Explore Matrix
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 sm:space-x-8">
              <a
                href="https://github.com/darkie8055"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 transform hover:scale-125 text-cyan-400 hover:text-purple-400"
              >
                <Github className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </a>
              <a
                href="https://linkedin.com/in/sanjay404"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 transform hover:scale-125 text-blue-400 hover:text-cyan-400"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </a>
              <a
                href="mailto:itsmesanjaybk@gmail.com"
                className="transition-all duration-300 transform hover:scale-125 text-emerald-400 hover:text-amber-400"
              >
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block xl:block">
            <div className="relative">
              <div className="w-72 h-72 xl:w-96 xl:h-96 mx-auto rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30">
                <div className="w-60 h-60 xl:w-80 xl:h-80 rounded-full flex items-center justify-center text-white text-6xl xl:text-8xl font-bold backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-400/20">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                    SBK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
          <span className="text-xs sm:text-xs text-cyan-400 hidden sm:block">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
