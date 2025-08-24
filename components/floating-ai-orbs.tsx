"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Float, Text } from "@react-three/drei"
import * as THREE from "three"

function AIOrb({
  position,
  color,
  label,
  delay = 0,
}: {
  position: [number, number, number]
  color: string
  label: string
  delay?: number
}) {
  const orbRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3 + delay
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.2 + delay
    }
  })

  return (
    <Float speed={0.8 + delay * 0.2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group position={position}>
        <Sphere ref={orbRef} args={[0.4, 24, 24]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.7}
            metalness={0.6}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </Sphere>
        <Sphere args={[0.2, 16, 16]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} emissive={color} emissiveIntensity={0.3} />
        </Sphere>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.15}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

function DataStream({
  start,
  end,
  color,
}: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const lineRef = useRef<THREE.BufferGeometry>(null)

  const points = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const midVec = startVec
      .clone()
      .lerp(endVec, 0.5)
      .add(new THREE.Vector3(0, 1, 0))

    const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec)
    return curve.getPoints(20)
  }, [start, end])

  useFrame((state) => {
    if (lineRef.current) {
      const time = state.clock.elapsedTime
      const positions = lineRef.current.attributes.position.array as Float32Array

      points.forEach((point, i) => {
        const offset = Math.sin(time * 2 + i * 0.1) * 0.1
        positions[i * 3 + 1] = point.y + offset
      })

      lineRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <line>
      <bufferGeometry ref={lineRef}>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </line>
  )
}

export function FloatingAIOrbs() {
  const orbData = useMemo(
    () => [
      { position: [-5, 2, -2] as [number, number, number], color: "#06b6d4", label: "REACT" },
      { position: [5, -1, -1] as [number, number, number], color: "#8b5cf6", label: "AI/ML" },
      { position: [-3, -2, -3] as [number, number, number], color: "#10b981", label: "3D/VR" },
      { position: [4, 3, 0] as [number, number, number], color: "#f59e0b", label: "NEXT.JS" },
      { position: [0, -4, -4] as [number, number, number], color: "#ef4444", label: "PYTHON" },
    ],
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <Canvas camera={{ position: [0, 0, 10] }} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={0.4} />

        {orbData.map((orb, i) => (
          <AIOrb key={i} position={orb.position} color={orb.color} label={orb.label} delay={i} />
        ))}

        <DataStream start={orbData[0].position} end={orbData[1].position} color="#06b6d4" />
        <DataStream start={orbData[1].position} end={orbData[2].position} color="#8b5cf6" />
        <DataStream start={orbData[2].position} end={orbData[3].position} color="#10b981" />
        <DataStream start={orbData[3].position} end={orbData[4].position} color="#f59e0b" />
        <DataStream start={orbData[4].position} end={orbData[0].position} color="#ef4444" />
      </Canvas>
    </div>
  )
}
