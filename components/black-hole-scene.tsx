"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Ring, Stars, Float, Torus } from "@react-three/drei"
import * as THREE from "three"

function RealisticBlackHole() {
  const blackHoleRef = useRef<THREE.Mesh>(null)
  const eventHorizonRef = useRef<THREE.Mesh>(null)
  const accretionDiskRef = useRef<THREE.Mesh>(null)
  const photonSphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!state?.clock) return

    const time = state.clock.elapsedTime

    if (blackHoleRef.current) {
      blackHoleRef.current.rotation.y = time * 0.05
    }

    if (eventHorizonRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.1
      eventHorizonRef.current.scale.setScalar(scale)
    }

    if (accretionDiskRef.current) {
      accretionDiskRef.current.rotation.z = time * 1.5
    }

    if (photonSphereRef.current) {
      photonSphereRef.current.rotation.z = -time * 3
      photonSphereRef.current.rotation.y = time * 0.8
    }
  })

  return (
    <group position={[0, 0, -8]}>
      <Sphere ref={blackHoleRef} args={[2, 64, 64]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>

      <Sphere ref={eventHorizonRef} args={[2.2, 64, 64]}>
        <meshBasicMaterial color="#1a0000" transparent opacity={0.8} side={THREE.BackSide} />
      </Sphere>

      <Torus ref={photonSphereRef} args={[3, 0.05, 16, 100]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} emissive="#ffffff" emissiveIntensity={0.5} />
      </Torus>

      <Ring ref={accretionDiskRef} args={[2.5, 4, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
          emissive="#ff4500"
          emissiveIntensity={0.8}
        />
      </Ring>

      <Ring args={[4, 7, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          emissive="#ff2200"
          emissiveIntensity={0.6}
        />
      </Ring>

      <Ring args={[7, 12, 128]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#ff0000"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
          emissive="#aa0000"
          emissiveIntensity={0.3}
        />
      </Ring>

      <Ring args={[12, 18, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#660000" transparent opacity={0.2} side={THREE.DoubleSide} />
      </Ring>
    </group>
  )
}

function GravitationallyBoundObjects() {
  const objectRefs = useRef<THREE.Mesh[]>([])

  const objects = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        initialRadius: 15 + Math.random() * 10,
        angle: (i / 20) * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
        size: 0.1 + Math.random() * 0.2,
        color: ["#ff4500", "#ff6600", "#ff0000", "#ffaa00", "#ff2200"][Math.floor(Math.random() * 5)],
        spiralRate: 0.01 + Math.random() * 0.02,
      })),
    [],
  )

  useFrame((state) => {
    if (!state?.clock) return

    const time = state.clock.elapsedTime

    objectRefs.current.forEach((obj, i) => {
      if (obj && objects[i]) {
        const object = objects[i]

        const currentRadius = Math.max(2.5, object.initialRadius - time * object.spiralRate * 2)
        const currentAngle = object.angle + time * object.speed * (1 / currentRadius)

        obj.position.x = Math.cos(currentAngle) * currentRadius
        obj.position.z = Math.sin(currentAngle) * currentRadius - 8
        obj.position.y = Math.sin(time * 0.5 + i) * 0.5

        obj.rotation.x = time * 2
        obj.rotation.y = time * 1.5

        const scale = Math.max(0.1, currentRadius / object.initialRadius)
        obj.scale.setScalar(scale * object.size)

        if (currentRadius <= 2.5) {
          object.initialRadius = 25 + Math.random() * 10
          object.angle = Math.random() * Math.PI * 2
        }
      }
    })
  })

  return (
    <>
      {objects.map((object, i) => (
        <mesh key={object.id} ref={(el) => el && (objectRefs.current[i] = el)}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={object.color}
            emissive={object.color}
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  )
}

function HawkingRadiation() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    const colors = new Float32Array(2000 * 3)

    for (let i = 0; i < 2000; i++) {
      const radius = 2.3 + Math.random() * 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi) - 8

      const intensity = Math.random()
      colors[i * 3] = intensity // Red
      colors[i * 3 + 1] = intensity * 0.5 // Green
      colors[i * 3 + 2] = intensity * 0.8 // Blue
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (!state?.clock || !particlesRef.current) return

    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={2000} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={2000} array={particles.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} transparent opacity={0.6} vertexColors blending={THREE.AdditiveBlending} />
    </points>
  )
}

function SpaceDebris() {
  const debrisRefs = useRef<THREE.Mesh[]>([])

  const debris = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        position: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20],
        velocity: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: 0.2 + Math.random() * 0.5,
        color: ["#ff4500", "#ff6600", "#ff0000", "#8a2be2", "#dc143c"][Math.floor(Math.random() * 5)],
        type: Math.floor(Math.random() * 3), // Different debris shapes
      })),
    [],
  )

  useFrame(() => {
    debrisRefs.current.forEach((mesh, i) => {
      if (mesh && debris[i]) {
        const item = debris[i]

        const blackHolePos = new THREE.Vector3(0, 0, -8)
        const currentPos = mesh.position.clone()
        const direction = blackHolePos.sub(currentPos).normalize()
        const distance = mesh.position.distanceTo(blackHolePos)

        const gravityStrength = 0.001 / (distance * distance)
        item.velocity[0] += direction.x * gravityStrength
        item.velocity[1] += direction.y * gravityStrength
        item.velocity[2] += direction.z * gravityStrength

        mesh.position.x += item.velocity[0]
        mesh.position.y += item.velocity[1]
        mesh.position.z += item.velocity[2]

        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.015
        mesh.rotation.z += 0.008

        if (distance < 3 || distance > 50) {
          mesh.position.set((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 20)
          item.velocity = [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02]
        }
      }
    })
  })

  return (
    <>
      {debris.map((item, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh
            ref={(el) => el && (debrisRefs.current[i] = el)}
            position={item.position as [number, number, number]}
            rotation={item.rotation as [number, number, number]}
            scale={item.scale}
          >
            {item.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {item.type === 1 && <dodecahedronGeometry args={[0.8, 0]} />}
            {item.type === 2 && <octahedronGeometry args={[0.9, 0]} />}
            <meshStandardMaterial
              color={item.color}
              transparent
              opacity={0.8}
              emissive={item.color}
              emissiveIntensity={0.2}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

export function BlackHoleSceneComponents() {
  return (
    <>
      <Stars radius={200} depth={100} count={8000} factor={6} saturation={0} fade speed={0.5} />

      <ambientLight intensity={0.05} color="#330000" />
      <pointLight position={[15, 15, 5]} intensity={1.2} color="#ff4500" distance={30} />
      <pointLight position={[-15, -15, -5]} intensity={0.8} color="#ff0000" distance={25} />
      <pointLight position={[0, 20, -8]} intensity={0.6} color="#ffaa00" distance={20} />

      <RealisticBlackHole />
      <GravitationallyBoundObjects />
      <HawkingRadiation />
      <SpaceDebris />
    </>
  )
}
