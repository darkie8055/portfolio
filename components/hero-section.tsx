"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Zap, Cpu, Brain } from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text, Float, Stars } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.scale.setScalar(hovered ? 1.8 : 1.5)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        scale={1.5}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#4f46e5" : "#06b6d4"}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function FloatingAstronaut() {
  const astronautRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (astronautRef.current) {
      const time = state.clock.elapsedTime
      astronautRef.current.position.x = Math.sin(time * 0.3) * 4
      astronautRef.current.position.y = Math.cos(time * 0.2) * 2 + 1
      astronautRef.current.position.z = Math.sin(time * 0.4) * 3
      astronautRef.current.rotation.y = time * 0.5
      astronautRef.current.rotation.z = Math.sin(time * 0.3) * 0.2
    }
  })

  return (
    <group ref={astronautRef}>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.6, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, -0.2, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.3, -0.2, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

function FlyingSpaceship() {
  const spaceshipRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (spaceshipRef.current) {
      const time = state.clock.elapsedTime
      spaceshipRef.current.position.x = Math.cos(time * 0.4) * 5
      spaceshipRef.current.position.y = Math.sin(time * 0.3) * 3
      spaceshipRef.current.position.z = Math.cos(time * 0.5) * 4
      spaceshipRef.current.rotation.y = time * 0.8
      spaceshipRef.current.rotation.x = Math.sin(time * 0.4) * 0.3
    }
  })

  return (
    <group ref={spaceshipRef}>
      <mesh>
        <coneGeometry args={[0.3, 1.2, 8]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.4, 8]} />
        <meshStandardMaterial color="#a855f7" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function AIBrain() {
  const brainRef = useRef<THREE.Group>(null)
  const neuronRefs = useRef<THREE.Mesh[]>([])

  useFrame((state) => {
    if (brainRef.current) {
      brainRef.current.rotation.y = state.clock.elapsedTime * 0.3
      brainRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }

    neuronRefs.current.forEach((neuron, i) => {
      if (neuron) {
        neuron.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2)
      }
    })
  })

  const neurons = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return [Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, Math.sin(i) * 0.5]
      }),
    [],
  )

  return (
    <group ref={brainRef} position={[3, 1, -2]}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#6366f1" transparent opacity={0.6} metalness={0.3} roughness={0.4} />
      </Sphere>
      {neurons.map((pos, i) => (
        <mesh key={i} ref={(el) => el && (neuronRefs.current[i] = el)} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.2} />
        </mesh>
      ))}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.25}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
      >
        AI NEURAL NET
      </Text>
    </group>
  )
}

function FloatingCubes() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        position: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 4],
        color: `hsl(${i * 60}, 70%, 60%)`,
        speed: 1 + i * 0.1,
      })),
    [],
  )

  return (
    <>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={cube.position as [number, number, number]}>
            <boxGeometry args={[0.25, 0.25, 0.25]} />
            <meshStandardMaterial color={cube.color} transparent opacity={0.7} metalness={0.5} roughness={0.3} />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Enhanced3DScene() {
  return (
    <>
      <Stars radius={80} depth={40} count={3000} factor={3} saturation={0} fade speed={0.8} />
      <ambientLight intensity={0.4} />
      <pointLight position={[8, 8, 8]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-8, -8, -8]} intensity={0.4} color="#8b5cf6" />
      <directionalLight position={[0, 10, 5]} intensity={0.3} color="#f59e0b" />

      <AnimatedSphere />
      <AIBrain />
      <FloatingCubes />
      <FloatingAstronaut />
      <FlyingSpaceship />

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
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }} performance={{ min: 0.5 }} dpr={[1, 2]}>
          <Enhanced3DScene />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 text-xs matrix-rain opacity-15"
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

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center mb-4 px-6 py-3 glass-morphism rounded-full text-cyan-400 text-sm font-medium border border-cyan-400/30">
              <Brain className="mr-2 h-4 w-4 animate-pulse" />
              <span className="cyber-glitch">{aiText}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {glitchText}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-light text-cyan-300">
              <Cpu className="inline mr-2 h-6 w-6" />
              Frontend & Full-Stack Developer
              <Zap className="inline ml-2 h-6 w-6" />
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Crafting <span className="text-cyan-400 font-semibold">next-generation</span> applications with
              <span className="text-purple-400 font-semibold"> AI-powered</span> solutions,
              <span className="text-emerald-400 font-semibold"> immersive 3D experiences</span>, and
              <span className="text-amber-400 font-semibold"> cutting-edge technologies</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Neural Link Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Explore Matrix
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-8">
              <a
                href="https://github.com/sanjaybk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/sanjay-bk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:palakkaditsmesanjaybk@gmail.com"
                className="text-emerald-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-125"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 shadow-2xl">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-full flex items-center justify-center text-white text-8xl font-bold backdrop-blur-sm border border-purple-400/20">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    SBK
                  </span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 text-cyan-400 animate-bounce">
                  <Cpu className="h-8 w-8" />
                </div>
                <div
                  className="absolute top-1/3 right-1/4 text-purple-400 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <Brain className="h-8 w-8" />
                </div>
                <div
                  className="absolute bottom-1/4 left-1/3 text-emerald-400 animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <Zap className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="h-8 w-8 text-cyan-400" />
          <span className="text-xs text-cyan-400">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}
