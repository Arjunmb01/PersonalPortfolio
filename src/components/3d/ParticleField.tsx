import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  spread?: number;
}

const ParticleField = ({ 
  count = 500, 
  color = '#00d4ff', 
  size = 0.02,
  spread = 20 
}: ParticleFieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count, spread]);

  useFrame((state) => {
    if (pointsRef.current) {
      const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        positionArray[i * 3] += velocities[i * 3];
        positionArray[i * 3 + 1] += velocities[i * 3 + 1];
        positionArray[i * 3 + 2] += velocities[i * 3 + 2];
        
        // Reset particles that drift too far
        const halfSpread = spread / 2;
        if (Math.abs(positionArray[i * 3]) > halfSpread) velocities[i * 3] *= -1;
        if (Math.abs(positionArray[i * 3 + 1]) > halfSpread) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positionArray[i * 3 + 2]) > halfSpread) velocities[i * 3 + 2] *= -1;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
