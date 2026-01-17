import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AIRobotProps {
  mousePosition: { x: number; y: number };
}

const AIRobot = ({ mousePosition }: AIRobotProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Smooth mouse following
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Update target rotation based on mouse
    targetRotation.current.x = mousePosition.y * 0.3;
    targetRotation.current.y = mousePosition.x * 0.5;

    // Smooth head tracking
    if (headRef.current) {
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotation.current.x,
        0.05
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotation.current.y,
        0.05
      );
    }

    // Body subtle tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.1,
        0.02
      );
    }

    // Eye glow pulse
    if (eyeLeftRef.current && eyeRightRef.current) {
      const eyeIntensity = 2 + Math.sin(time * 3) * 0.5;
      (eyeLeftRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = eyeIntensity;
      (eyeRightRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = eyeIntensity;
    }

    // Core energy pulse
    if (coreRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.1;
      coreRef.current.scale.setScalar(scale);
    }
  });

  const cyanMaterial = useMemo(() => (
    <meshStandardMaterial
      color="#00d4ff"
      emissive="#00d4ff"
      emissiveIntensity={0.5}
      metalness={0.8}
      roughness={0.2}
    />
  ), []);

  const darkMetal = useMemo(() => (
    <meshStandardMaterial
      color="#1a1a2e"
      metalness={0.9}
      roughness={0.3}
    />
  ), []);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Robot Head */}
        <group ref={headRef} position={[0, 1.8, 0]}>
          {/* Main head structure */}
          <mesh>
            <boxGeometry args={[1.2, 0.8, 1]} />
            {darkMetal}
          </mesh>
          
          {/* Face plate */}
          <mesh position={[0, 0, 0.51]}>
            <boxGeometry args={[1, 0.6, 0.05]} />
            <meshStandardMaterial
              color="#0a0a15"
              metalness={0.5}
              roughness={0.8}
            />
          </mesh>

          {/* Eyes */}
          <mesh ref={eyeLeftRef} position={[-0.25, 0.05, 0.54]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={2}
            />
          </mesh>
          <mesh ref={eyeRightRef} position={[0.25, 0.05, 0.54]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={2}
            />
          </mesh>

          {/* Visor line */}
          <mesh position={[0, 0.05, 0.55]}>
            <boxGeometry args={[0.9, 0.02, 0.02]} />
            {cyanMaterial}
          </mesh>

          {/* Antenna */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
            {darkMetal}
          </mesh>
          <mesh position={[0, 0.7, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={3}
            />
          </mesh>

          {/* Side panels */}
          <mesh position={[-0.65, 0, 0]}>
            <boxGeometry args={[0.1, 0.5, 0.8]} />
            {darkMetal}
          </mesh>
          <mesh position={[0.65, 0, 0]}>
            <boxGeometry args={[0.1, 0.5, 0.8]} />
            {darkMetal}
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.3, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.2, 8]} />
          {darkMetal}
        </mesh>

        {/* Body */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.4, 1.4, 0.8]} />
          {darkMetal}
        </mesh>

        {/* Chest plate */}
        <mesh position={[0, 0.6, 0.41]}>
          <boxGeometry args={[1, 0.8, 0.05]} />
          <meshStandardMaterial
            color="#0a0a15"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>

        {/* Core energy */}
        <mesh ref={coreRef} position={[0, 0.5, 0.5]}>
          <dodecahedronGeometry args={[0.15, 0]} />
          <MeshDistortMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={3}
            distort={0.3}
            speed={5}
          />
        </mesh>

        {/* Core rings */}
        <mesh position={[0, 0.5, 0.45]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.25, 0.02, 8, 32]} />
          {cyanMaterial}
        </mesh>

        {/* Shoulders */}
        <mesh position={[-0.9, 0.9, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          {darkMetal}
        </mesh>
        <mesh position={[0.9, 0.9, 0]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          {darkMetal}
        </mesh>

        {/* Arms */}
        <group position={[-0.9, 0.5, 0]} rotation={[0, 0, 0.2]}>
          <mesh>
            <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
            {darkMetal}
          </mesh>
          {/* Arm glow lines */}
          <mesh position={[0.12, 0, 0]}>
            <boxGeometry args={[0.02, 0.5, 0.02]} />
            {cyanMaterial}
          </mesh>
        </group>
        <group position={[0.9, 0.5, 0]} rotation={[0, 0, -0.2]}>
          <mesh>
            <capsuleGeometry args={[0.1, 0.6, 8, 16]} />
            {darkMetal}
          </mesh>
          <mesh position={[-0.12, 0, 0]}>
            <boxGeometry args={[0.02, 0.5, 0.02]} />
            {cyanMaterial}
          </mesh>
        </group>

        {/* Base/Pedestal */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 0.3, 6]} />
          {darkMetal}
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <torusGeometry args={[0.7, 0.03, 8, 32]} />
          {cyanMaterial}
        </mesh>

        {/* Floating data particles */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 0.8) * 1.5,
              Math.cos(i * 0.5) * 0.5 + 0.5,
              Math.cos(i * 0.8) * 0.5
            ]}
          >
            <octahedronGeometry args={[0.05, 0]} />
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default AIRobot;
