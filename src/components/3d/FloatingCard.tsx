import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  position: [number, number, number];
  title: string;
  index: number;
  onClick?: () => void;
}

const FloatingCard = ({ position, title, index, onClick }: FloatingCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() + index * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <RoundedBox
          ref={meshRef}
          args={[2.5, 1.5, 0.15]}
          radius={0.08}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={onClick}
        >
          <meshStandardMaterial
            color={hovered ? '#00d4ff' : '#0a0a0f'}
            emissive="#00d4ff"
            emissiveIntensity={hovered ? 0.5 : 0.1}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </RoundedBox>

        {/* Glowing border */}
        <mesh position={[0, 0, 0.08]}>
          <planeGeometry args={[2.6, 1.6]} />
          <meshBasicMaterial
            color="#00d4ff"
            transparent
            opacity={hovered ? 0.3 : 0.1}
          />
        </mesh>

        <Text
          position={[0, 0, 0.12]}
          fontSize={0.18}
          color="#e0f7fa"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {title}
        </Text>
      </group>
    </Float>
  );
};

export default FloatingCard;
